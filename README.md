# LUMINA — Illuminazione Smart & Benessere Visivo

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

* **Linguaggi Core:** 
* **Ambiente di Sviluppo:** 
* **Prototipazione & Design:** 

---

## 4. Istruzioni per l'Avvio in Locale

---

## 5. Team di Sviluppo (Web Agency) e Committenza

* **Agenzia:** `[Lumina]`
* **Classe:** 5ª INB
* **Committenti:** Prof.ssa Valentina Villani, Miriam Sutera

| Membro del Team | Ruolo Assegnato | Responsabilità Principali | Account GitHub |
| :--- | :--- | :--- | :--- |
| `[Alessandro Mattiato]` | **Coordinatore/organizzatore** | `[@lilMats]` |
| `[Luca Leonardelli]` | **Risolutore tecnico/creativo** | `[@username2]` |
| `[Matteo Nicolini]` | **Risolutore tecnico/creativo** | `[@username3]` |
| `[Roberto Zanella]` | **Collaboratore flessibile** | `[@username4]` |
