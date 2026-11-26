# Afspraken voor programmeerwerk

- Communiceer altijd in het Nederlands.
- Werk zelfstandig aan normale programmeertaken.
- Je mag bestanden lezen, aanpassen en aanmaken.
- Je mag HTML, CSS en JavaScript schrijven en verbeteren.
- Los bugs zelfstandig op.
- Vraag geen toestemming voor kleine wijzigingen.
- Overleg eerst bij het verwijderen van bestanden, grote structurele wijzigingen of risicovolle terminalcommando's.
- Behoud bestaande functionaliteit en code zoveel mogelijk.
- Controleer na wijzigingen of de code logisch en correct is.
- Vertel na iedere opdracht welke bestanden je hebt aangepast.

# Projectinformatie

De website heet **just because.** Het is een website waarop bezoekers verschillende originele browsergames kunnen ontdekken en spelen. De website mag zich laten inspireren door het creatieve concept van neal.fun, maar heeft een volledig eigen identiteit, naam, ontwerp en games.

Belangrijke uitgangspunten:

- De website is origineel en creatief.
- Het ontwerp is modern, verzorgd en gebruiksvriendelijk en oogt niet als een typische AI-gegenereerde website.
- De verschillende games werken goed samen binnen één website.
- Behoud bestaande functionaliteit wanneer je code aanpast.

# Vaste mappenstructuur

- Bewaar `index.html`, `favicon.svg`, `favicon.png`, `AGENTS.md` en `.gitattributes` uitsluitend in de hoofdmap.
- Plaats algemene stylesheets in `css/`. De hoofdstylesheet is `css/style.css`.
- Plaats algemene scripts in `js/`. Dit zijn onder andere `js/script.js` en `js/translations.js`.
- Plaats alle HTML-pagina's voor spellen, spel-JavaScript en spelgegevens in `games/`.
- Plaats spelafbeeldingen en overige losse spelassets in `assets/`, gegroepeerd per spel, bijvoorbeeld `assets/pixel-guess/` en `assets/where-am-i/`.
- Verwijder uitgepakte archieven wanneer de inhoud al aanwezig is; bewaak geen dubbele `.zip`-kopieën.
- Gebruik bij relatieve paden altijd het correcte bestand ten opzichte van de pagina:
  - in `index.html`: `css/...`, `js/...` en `games/...`
  - in pagina's onder `games/`: `../css/...`, `../js/...`, `../assets/...` en bestanden naast de pagina zelf
- Behoud deze indeling bij toekomstige wijzigingen. Verplaats bestanden niet terug naar de hoofdmap.
