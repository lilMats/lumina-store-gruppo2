# LUMINA — Illuminazione Smart & Benessere Visivo

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git Flow](https://img.shields.io/badge/Workflow-GitHub_Flow-181717?style=for-the-badge&logo=github&logoColor=white)

> *"La luce giusta cambia tutto. Illumina il tuo focus."*

Progetto di sviluppo web e-commerce realizzato dal **Gruppo 2 — Classe 5ª Informatica** su commissione della **Prof.ssa Villani Valentina** e **Miriam Sutera**.

---

## 1. Presentazione del Brand

**LUMINA** è un brand e-commerce di nicchia specializzato in **illuminazione smart minimalista e lampade d'ambiente** progettate per scrivanie, postazioni di studio e spazi domestici moderni.

### Il Problema e la Nostra Mission
Ogni giorno studenti, sviluppatori e smart-worker passano oltre 8 ore davanti a uno schermo, spesso in ambienti illuminati in modo inadeguato o con luci artificiali aggressive che causano affaticamento visivo, mal di testa e calo della concentrazione.

**La nostra mission:** *Combattere l'affaticamento visivo e trasformare qualsiasi stanza in uno spazio di concentrazione, creatività e benessere attraverso una luce intelligente, minimale e accessibile.*

### Perché questa proposta commerciale?
In accordo con la possibilità prevista dal capitolato di proporre una variante merceologica analoga nella prima riunione, abbiamo scelto il settore dell'illuminazione smart perché unisce:
* **Chiarezza immediata:** Prodotti riconoscibili al primo sguardo con varianti tecniche intuitive (temperatura colore, finitura scocca).
* **Forte impatto estetico:** Design contemporaneo in Dark Mode con effetti luminosi dinamici che valorizzano la User Experience.
* **Logica di cross-selling:** Accessori modulari e fasce di prezzo studiate per incentivare il raggiungimento della soglia di spedizione gratuita (50,00 €).

---

## 2. Specifiche Funzionali Implementate

L'applicazione è sviluppata interamente in **Vanilla Web Technologies** (senza l'ausilio di framework esterni come React o Vue) e include:

* **Vetrina e Catalogo Dinamico:** Caricamento asincrono dei prodotti (10+ articoli) da file locale `data/products.json` tramite JavaScript, completo di immagini, descrizioni, prezzi, categorie e stato di disponibilità in magazzino.
* **Ricerca, Filtri e Ordinamento Real-Time:**
  * Filtro rapido per categoria (*Scrivania & Monitor*, *Atmosfera*, *Parete*, *Portatili*).
  * Barra di ricerca istantanea per parola chiave su nome e descrizione.
  * Ordinamento dinamico per prezzo (crescente e decrescente).
* **Modale Dettaglio Prodotto & Anteprima Luce:** Finestra modale interattiva per selezionare le varianti del prodotto (es. *Temperatura luce: 2700K Calda / 5000K Focus / RGBIC* e *Finitura scocca*) con anteprima visiva del bagliore luminoso prima dell'aggiunta al carrello.
* **Carrello Interattivo e Persistente (`localStorage`):**
  * Pannello laterale (*drawer*) con apertura/chiusura fluida e badge numerico aggiornato in tempo reale nell'header.
  * Gestione delle quantità (`+` / `-`), rimozione singoli articoli e ricalcolo automatico di subtotale, spese di spedizione (**gratuite sopra i 50,00 €**, con barra di avanzamento visiva) e totale finale.
  * Persistenza completa dei dati al ricaricamento della pagina tramite `localStorage`.
* **Simulazione di Checkout:** Form di completamento ordine con validazione lato cliente (email, indirizzo, CAP, metodo di pagamento), schermata di riepilogo/conferma e svuotamento automatico del carrello.
* **Design Responsive:** Layout adattivo realizzato con **CSS Grid** (griglia catalogo) e **Flexbox** (header, filtri, carrello) ottimizzato per desktop, tablet e smartphone.

---

## 3. Stack Tecnologico e Strumenti

* **Linguaggi Core:** HTML5 semantico, CSS3 (Custom Properties, Grid, Flexbox, Animazioni/Transizioni), JavaScript ES6+ (`fetch`, DOM Manipulation, `localStorage`, Event Delegation).
* **Ambiente di Sviluppo:** Visual Studio Code + estensione *Live Server*.
* **Prototipazione & Design:** Figma / Canva per wireframe e palette colori.
* **Version Control & Project Management:** Git, GitHub, GitHub Issues & Pull Requests.

---

## 4. Struttura del Repository

```text
lumina-ecommerce/
├── index.html              # Pagina principale dell'e-commerce
├── css/
│   ├── style.css           # Stili principali, variabili tema, animazioni
│   └── responsive.css      # Media queries per tablet e mobile
├── js/
│   ├── app.js              # Logica principale, fetch catalogo, filtri e ricerca
│   ├── modal.js            # Gestione finestra dettaglio prodotto e varianti
│   ├── cart.js             # Logica carrello, calcoli, spedizione e localStorage
│   └── checkout.js         # Validazione form e conferma ordine
├── data/
│   └── products.json       # Database locale dei prodotti
├── assets/
│   └── img/                # Immagini ottimizzate dei prodotti e logo
├── docs/
│   └── verbali/            # Documentazione dei briefing del team (.md)
│       └── verbale-01.md
└── README.md               # Documentazione ufficiale del progetto
```

---

## 5. Istruzioni per l'Avvio in Locale

> **Nota tecnica:** Poiché il catalogo prodotti viene caricato dinamicamente tramite la `Fetch API` da un file `.json` locale, è necessario avviare il progetto tramite un server web locale per evitare blocchi di sicurezza CORS da parte del browser.

1. **Clonare il repository:**
   ```bash
   git clone https://github.com/[USERNAME-OWNER]/[NOME-REPOSITORY].git
   ```
2. **Entrare nella cartella del progetto:**
   ```bash
   cd [NOME-REPOSITORY]
   ```
3. **Avviare un server locale (scegliere uno dei seguenti metodi):**
   * **Tramite VS Code (Consigliato):** Aprire la cartella in Visual Studio Code, fare clic destro su `index.html` e selezionare **"Open with Live Server"**.
   * **Tramite Python:** Eseguire `python -m http.server 8000` nel terminale e visitare `http://localhost:8000`.
   * **Tramite Node.js:** Eseguire `npx serve` nel terminale.

---

## 6. Flusso di Lavoro Git & Standard di Qualità

Per garantire ordine, tracciabilità e assenza di conflitti durante le 3 settimane di sviluppo, il team adotta la strategia **GitHub Flow**:

### Regole di Branching & Pull Request
1. **Ramo `main` protetto:** Il ramo `main` contiene esclusivamente codice funzionante, testato e pronto per la presentazione. **È severamente vietato effettuare push diretti su `main`.**
2. **Rami Feature/Fix:** Ogni nuova attività viene sviluppata su un ramo dedicato creato a partire da `main`, seguendo la nomenclatura:
   * `feat/nome-funzionalita` (es. `feat/filtro-categorie`, `feat/carrello-localstorage`)
   * `fix/descrizione-bug` (es. `fix/calcolo-spedizione`)
   * `style/descrizione-ui` (es. `style/responsive-header`)
   * `docs/descrizione-doc` (es. `docs/verbale-02`)
3. **Code Review Obbligatoria:** Al termine dello sviluppo sul ramo dedicato, lo sviluppatore apre una **Pull Request (PR)** verso `main`. Il merge è consentito solo dopo la revisione e l'approvazione di **almeno un altro membro del team** (in particolare del *Git & QA Specialist*).

### Convenzione per i Commit (Conventional Commits)
Tutti i commit devono essere atomici e utilizzare i seguenti prefissi standard:
* `feat:` introduzione di una nuova funzionalità
* `fix:` risoluzione di un bug
* `style:` modifiche estetiche, CSS o formattazione senza impatto sulla logica
* `docs:` aggiornamento della documentazione o dei verbali in `/docs/verbali`
* `refactor:` ottimizzazione del codice esistente

---

## 7. Team di Sviluppo (Web Agency) e Committenza

* **Agenzia:** `[Nome della vostra Web Agency — Gruppo 2]`
* **Classe:** 5ª Informatica
* **Committenti:** Prof.ssa Valentina Villani, Miriam Sutera

| Membro del Team | Ruolo Assegnato | Responsabilità Principali | Account GitHub |
| :--- | :--- | :--- | :--- |
| `[Nome Cognome 1]` | **Project Manager / Responsabile** | Coordinamento briefing, redazione verbali, supervisione requisiti commerciali e pitch finale | `[@username1]` |
| `[Nome Cognome 2]` | **Lead JS Developer** | Architettura JS, caricamento dinamico JSON, logica filtri, ricerca e simulazione checkout | `[@username2]` |
| `[Nome Cognome 3]` | **UI/UX & CSS Designer** | Design system Dark Mode, layout CSS Grid/Flexbox, animazioni, modale prodotto e responsività | `[@username3]` |
| `[Nome Cognome 4]` | **Git & QA Specialist** | Gestione repository, revisione Pull Request, integrazione `localStorage` carrello e testing cross-browser | `[@username4]` |

---

*Progetto sviluppato per uso didattico — Anno Scolastico 2026/2027.*
