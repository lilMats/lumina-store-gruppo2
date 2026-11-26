const statusDownload = document.getElementById("status");
const risposta = document.getElementById("risposta");
const btnInit = document.getElementById("btn-init");
const btnAsk = document.getElementById("btn-ask");
const promptInput = document.getElementById("prompt-input");

let worker;
let modelloPronto = false;

try {
    worker = new Worker(new URL("./model-worker.js", import.meta.url), { type: "module" });

    worker.addEventListener("message", ({ data }) => {
        if (data.type === "progress") {
            statusDownload.textContent = data.progress === undefined
                ? `Caricamento: ${data.status}`
                : `Caricamento: ${Math.round(data.progress)}%`;
        } else if (data.type === "ready") {
            modelloPronto = true;
            statusDownload.textContent = "Modello semantico pronto (WASM/CPU).";
            btnInit.disabled = true;
        } else if (data.type === "answer") {
            risposta.textContent = data.text;
            btnAsk.disabled = false;
        } else if (data.type === "error") {
            const fase = data.operation === "init" ? "caricamento del modello semantico" : "analisi semantica della richiesta";
            const codice = data.code === undefined ? "" : ` (codice ${data.code})`;
            const messaggio = `Errore durante ${fase}${codice}: ${data.message}`;
            if (data.operation === "init") {
                statusDownload.textContent = messaggio;
                btnInit.disabled = false;
            } else {
                risposta.textContent = messaggio;
                btnAsk.disabled = false;
            }
            console.error(messaggio, data.details || "");
        }
    });

    worker.addEventListener("error", (event) => {
        const messaggio = `Errore nel worker: ${event.message || "impossibile avviare il modello semantico."}`;
        console.error(messaggio, event);
        statusDownload.textContent = messaggio;
        risposta.textContent = messaggio;
        btnInit.disabled = false;
        btnAsk.disabled = false;
    });
} catch (error) {
    const messaggio = `Impossibile avviare il modello semantico: ${error instanceof Error ? error.message : String(error)}`;
    statusDownload.textContent = messaggio;
    risposta.textContent = messaggio;
    console.error(messaggio);
    btnInit.disabled = true;
}

btnInit.addEventListener("click", () => {
    avviaCaricamentoModello();
});

function avviaCaricamentoModello() {
    if (!worker || modelloPronto) return;

    btnInit.disabled = true;
    statusDownload.textContent = "Avvio del caricamento del modello semantico...";
    worker.postMessage({ type: "init" });
}

btnAsk.addEventListener("click", () => {
    const prompt = promptInput.value.trim();

    if (!prompt) {
        risposta.textContent = "Scrivi la tua esigenza prima di inviare.";
        return;
    }
    if (!modelloPronto) {
        risposta.textContent = "Carica prima il modello semantico.";
        return;
    }

    btnAsk.disabled = true;
    risposta.textContent = "Sto pensando...";
    worker.postMessage({ type: "ask", prompt });
});

avviaCaricamentoModello();
