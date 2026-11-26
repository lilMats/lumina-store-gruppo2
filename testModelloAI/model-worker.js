import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.4.0";

let extractor = null;
let prodotti = [];
let vettoriCatalogo = [];
let caricamentoInCorso = null;

// Calcola la similarità semantica tra due vettori normalizzati (prodotto scalare)
function similaritaCoseno(vecA, vecB) {
    let somma = 0;
    for (let i = 0; i < vecA.length; i++) {
        somma += vecA[i] * vecB[i];
    }
    return somma;
}

self.addEventListener("message", async ({ data }) => {
    if (data.type === "init") {
        if (extractor || caricamentoInCorso) return;

        try {
            self.postMessage({ type: "progress", status: "Caricamento catalogo lampade..." });
            const rispostaCatalogo = await fetch(new URL("./catalogo-lampade.json", import.meta.url));
            if (!rispostaCatalogo.ok) {
                throw new Error(`Impossibile caricare catalogo-lampade.json (HTTP ${rispostaCatalogo.status}).`);
            }

            const catalogo = await rispostaCatalogo.json();
            if (!Array.isArray(catalogo) || catalogo.length === 0 || catalogo.some(prodotto =>
                !prodotto.id ||
                !prodotto.nome ||
                typeof prodotto.prezzo !== "number" ||
                !prodotto.luce ||
                !prodotto.idealePer ||
                !prodotto.profiloSemantico
            )) {
                throw new Error("Il catalogo JSON non è valido: ogni lampada deve avere id, nome, prezzo, luce, idealePer e profiloSemantico.");
            }
            prodotti = catalogo;

            caricamentoInCorso = pipeline(
                "feature-extraction",
                "Xenova/paraphrase-multilingual-MiniLM-L12-v2",
                {
                    dtype: "q8",
                    progress_callback: (info) => {
                        if (info.status === "progress") {
                            self.postMessage({ type: "progress", progress: info.progress });
                        } else if (info.status) {
                            self.postMessage({ type: "progress", status: info.status });
                        }
                    }
                }
            );

            extractor = await caricamentoInCorso;

            // Pre-calcola i vettori delle lampade una volta sola all'avvio
            self.postMessage({ type: "progress", status: "Indicizzazione semantica catalogo..." });
            vettoriCatalogo = [];
            for (const [indice, prodotto] of prodotti.entries()) {
                self.postMessage({
                    type: "progress",
                    status: `Indicizzazione lampada ${indice + 1} di ${prodotti.length}...`
                });
                const output = await extractor(prodotto.profiloSemantico, {
                    pooling: "mean",
                    normalize: true
                });
                vettoriCatalogo.push({
                    prodotto,
                    vettore: output.data
                });
            }

            self.postMessage({ type: "ready" });
        } catch (error) {
            self.postMessage({
                type: "error",
                operation: "init",
                message: error instanceof Error ? error.message : String(error)
            });
        } finally {
            caricamentoInCorso = null;
        }
        return;
    }

    if (data.type === "ask" && extractor) {
        try {
            const outputUtente = await extractor(data.prompt, {
                pooling: "mean",
                normalize: true
            });
            const vettoreUtente = outputUtente.data;

            // Confronta la richiesta dell'utente con ogni lampada del catalogo
            const risultati = vettoriCatalogo
                .map(({ prodotto, vettore }) => ({
                    prodotto,
                    punteggio: similaritaCoseno(vettoreUtente, vettore)
                }))
                .sort((a, b) => b.punteggio - a.punteggio);

            console.log(
                "[Lumina Semantic]",
                data.prompt,
                risultati.map(r => `${r.prodotto.nome}: ${r.punteggio.toFixed(3)}`)
            );

            const migliore = risultati[0];
            const secondo = risultati[1];

            // Se la frase è completamente fuori tema (punteggio troppo basso), chiedi chiarimenti
            if (!migliore || migliore.punteggio < 0.25) {
                self.postMessage({
                    type: "answer",
                    text: "Per consigliarti al meglio, raccontami in che momento o ambiente della giornata la useresti (ad esempio per concentrarti o per creare un'atmosfera rilassante)!"
                });
                return;
            }

            // Se le due lampade sono quasi a pari merito, evidenzia la differenza principale
            if (secondo && (migliore.punteggio - secondo.punteggio) < 0.03) {
                self.postMessage({
                    type: "answer",
                    text: `Entrambe potrebbero fare al caso tuo: scegli ${migliore.prodotto.nome} (${migliore.prodotto.prezzo}€) se cerchi una luce ${migliore.prodotto.luce}, oppure ${secondo.prodotto.nome} (${secondo.prodotto.prezzo}€) per una luce ${secondo.prodotto.luce}.`
                });
                return;
            }

            const text = `Per la tua esigenza ti consiglio ${migliore.prodotto.nome} (${migliore.prodotto.prezzo}€): offre una luce ${migliore.prodotto.luce}, ideale per ${migliore.prodotto.idealePer}.`;
            self.postMessage({ type: "answer", text });
        } catch (error) {
            self.postMessage({
                type: "error",
                operation: "ask",
                message: error instanceof Error ? error.message : String(error)
            });
        }
    }
});