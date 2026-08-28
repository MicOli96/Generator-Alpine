# Mumindalens Träningsgenerator

En enkel träningsgenerator byggd som skoluppgift i kursen Webbutveckling. Användaren väljer svårighetsgrad och typ av träning, och får ut en lista med matchande övningar från Mumindalen.

Byggd med **Alpine.js** och **TypeScript**, som ett sätt att lära känna Alpine som ramverk.

## Quickstart

```bash
npm install
npm run dev
```

Öppna sedan länken som Vite skriver ut (vanligtvis `http://localhost:5173`).

Övriga kommandon:

- `npm run build` – typkontrollerar och bygger för produktion
- `npm run preview` – förhandsgranskar produktionsbygget lokalt

## Alpine.js-delar som används

- [x] **Databindning** `x-model` på dropdowns för svårighet och kategori

- [x] **Villkorlig rendering** `x-show` för att visa/dölja meddelande respektive lista beroende på om ett pass genererats

- [x] **Loop rendering** `x-for` för att rendera listan med övningar

- [ ] **Klass- och stilbindning** `:class`/`:style` – används inte ännu

- [x] **Tillståndshantering** `Alpine.data()` i `src/app.ts`, registrerat i `src/main.ts`

- [x] **Eventhantering** `x-on:submit` på formuläret för att köra `generateWorkout()`

- [x] **Komponenter** `x-data` för att koppla Alpine-tillståndet (`app()`) till DOM-elementet i `src/template.ts`