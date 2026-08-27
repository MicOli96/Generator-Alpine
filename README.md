# Mumindalens Träningsgenerator

En enkel träningsgenerator byggd som skoluppgift i kursen Webbutveckling. Användaren väljer svårighetsgrad och typ av träning, och får ut en lista med matchande övningar från Mumindalen.

Byggd med **Alpine.js** och **TypeScript**, som ett sätt att lära känna Alpine som ramverk.

## Alpine.js-delar som används

Enligt uppgiftens krav (minst 4 av 7) används:

- **Tillståndshantering** `Alpine.data()` i `src/app.ts`, registrerat i `src/main.ts`

- **Eventhantering** — `x-on:click` på knappar för att köra `generateWorkout()`

- **Villkorlig rendering** — `x-show` för att visa/dölja meddelande respektive lista beroende på om ett pass genererats

- **Loop rendering** — `x-for` för att rendera listan med övningar

- **Databindning** `x-model` på dropdowns för svårighet och kategori
