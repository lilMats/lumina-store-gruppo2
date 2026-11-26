# Verbale di Riunione n. 2 — Gruppo 2 (Lumina Store)

* **Data:** 26/11/2026
* **Orario / Luogo:** Laboratorio di Informatica (Aula 104)
* **Partecipanti:** Luca Leonardelli, Mattiato, Nicolini, Zanella
* **Assenti:** Nessuno
* **Redattore:** Zanella

---

## 1. Ordine del Giorno
1. Assegnazione definitiva dei ruoli e suddivisione dei branch operativi.
2. Verifica configurazione Git/GitHub e commit delle strutture iniziali.
3. Allineamento sul flusso di lavoro (GitHub Flow) e prossimi obiettivi.

---

## 2. Decisioni Prese e Divisione dei Compiti
Per sviluppare il progetto in parallelo senza generare conflitti sul ramo principale (`main`), il team ha suddiviso le aree di competenza su **3 branch operativi** con il supporto costante del coordinatore:

* **Leonardelli (UI/UX & CSS Designer — branch `style`):**
  * Realizzazione della struttura semantica `index.html`, applicazione del Design System (Dark Mode, glassmorphism), layout responsive con CSS Grid e Flexbox.
* **Nicolini (Product & Data Specialist — branch `feat/catalogo-dati`):**
  * Creazione del database prodotti in formato `JSON` (`data/products.json`), gestione degli asset visivi e caricamento dinamico delle card nel DOM.
* **Zanella (Git, QA & Documentation Specialist + Logica Filtri — branch `feat/filtri-docs`):**
  * Redazione e aggiornamento dei verbali in `/docs`, cura del `README.md`, implementazione della logica JavaScript per filtri categoria, ricerca live e ordinamento prezzi, oltre ai test di qualità (QA).
* **Mattiato (Project Coordinator, Code Reviewer & Cart Logic):**
  * Supporto operativo a tutti e tre i membri nel completamento dei rispettivi compiti, coordinamento del flusso di lavoro, revisione e merge delle Pull Request su `main` e gestione della logica del carrello (`localStorage`).

---

## 3. Attività Svolte nella Sessione Odierna
* Risolti i problemi iniziali di autenticazione e configurazione dell'identità locale Git (`user.name` e `user.email`) sulle postazioni del laboratorio.
* Ciascuno dei tre membri operativi (Leonardelli, Nicolini, Zanella) ha creato il proprio branch dedicato e ha eseguito i primi commit contenenti la struttura iniziale dei rispettivi file e cartelle.
* Avviato il processo di apertura delle Pull Request verso `main` secondo le regole del GitHub Flow.

---

## 4. Piano d'Azione per la Prossima Sessione
* **Mattiato:** Revisione del codice e merge delle prime Pull Request aperte da Leonardelli, Nicolini e Zanella su `main`.
* **Leonardelli:** Sviluppo completo del foglio di stile `style.css` e delle componenti visive (Hero Section, modale prodotto, drawer carrello).
* **Nicolini:** Popolamento completo del catalogo prodotti in `products.json` con varianti e collegamento tramite `fetch()`.
* **Zanella:** Implementazione delle funzioni di filtro e ricerca in `js/filters.js` e verifica della qualità del codice sul ramo integrato.
