# Embedded payments
Dette projekt er et Angular Website med Kirby designsystem.

Websitet formål er at vise hvordan enkelte Kirby komponenter kan bruges i Angular. Den består af følgende sider
* Velkommen
* Anmod om betalinger
* Betale anmodninger

Der er ingen form for backend services, da hensigten er frontend udvikling.

---
## Projekt start
For at komme igang med projektet skal node modules, som er angivet i package.json installeres. I en terminal skal man stå i mappen hvor koden er placeret. Her skrives kommandoen

```$ npm i```

Efter endt installation, er det muligt at starte projektet ved brug af kommandoen

```$ npm start```

Dette vil starte en udviklingsserver og websitet kan vises i en browser på adressen

```http://localhost:4200```

Ved ændring af filer vil websitet automatisk opdatere.

---
## Projekt opbygning
Det er et standard Angular projekt, som er oprettet ud fra Angular CLI værktøjet. De enkelte sider websitet består af, er lavet som Angular komponenter. Sideskift mellem de enkelte sider gør brug af routing modulet. 

---
## Projekt sider
Følgende beskrives kort de enkelte sider på websitet. Alle sider benytter en Kirby page, hvilket giver et ensartet udtryk. Kirby page giver endvidere mulighed for at konfigurere en tilbage funktion, således man får fornemmelsen af et flow. 

### Velkommen
**Velkommen** siden er landingpage for websitet. Den består af en kort beskrivelse af websitet og en knap der navigerer til **Betal regning** siden.

Komponenten er i mappen  ``` src/app/home ```

---
## Routing
For at kunne navigere mellem de enkelte sider, skal de konfigureres så Angular kender dem ud fra en url. 

Konfigurationen er i typescript filen  ``` src/app/app-routing.module.ts ```
