(() => {
    "use strict";

    const languages = [
        { code: "en", label: "EN", name: "Language" },
        { code: "nl", label: "NL", name: "Taal" },
        { code: "de", label: "DE", name: "Sprache" },
        { code: "fr", label: "FR", name: "Langue" },
        { code: "es", label: "ES", name: "Idioma" }
    ];
    const rows = [
        ["Choose language", "Kies een taal", "Sprache wählen", "Choisir la langue", "Elegir idioma"],
        ["11 playable · 00 coming soon", "11 speelbaar · 00 binnenkort", "11 spielbar · 00 demnächst", "11 disponibles · 00 bientôt", "11 jugables · 00 próximamente"],
        ["Flag", "Vlag", "Flagge", "Drapeau", "Bandera"],
        ["Quiz.", "Quiz.", "Quiz.", "Quiz.", "Quiz."],
        ["Flag Quiz — just because.", "Vlaggenquiz — just because.", "Flaggenquiz — just because.", "Quiz des drapeaux — just because.", "Concurso de banderas — just because."],
        ["Flag Quiz.", "Vlaggenquiz.", "Flaggenquiz.", "Quiz des drapeaux.", "Concurso de banderas."],
        ["How well do you know the flags of the world?", "Hoe goed ken jij de vlaggen van de wereld?", "Wie gut kennst du die Flaggen der Welt?", "Connais-tu bien les drapeaux du monde ?", "¿Cuánto sabes sobre las banderas del mundo?"],
        ["Choose a region.", "Kies een regio.", "Wähle eine Region.", "Choisis une région.", "Elige una región."],
        ["HOW TRICKY?", "HOE LASTIG?", "WIE KNIFFLIG?", "QUEL NIVEAU ?", "¿QUÉ DIFICULTAD?"],
        ["Easy", "Makkelijk", "Einfach", "Facile", "Fácil"],
        ["Medium", "Gemiddeld", "Mittel", "Moyen", "Medio"],
        ["Hard", "Moeilijk", "Schwer", "Difficile", "Difícil"],
        ["Back to settings", "Terug naar instellingen", "Zurück zu den Einstellungen", "Retour aux réglages", "Volver a los ajustes"],
        ["All Regions", "Alle regio's", "Alle Regionen", "Toutes les régions", "Todas las regiones"],
        ["Europe", "Europa", "Europa", "Europe", "Europa"],
        ["Asia", "Azië", "Asien", "Asie", "Asia"],
        ["Americas", "Amerika", "Amerika", "Amériques", "Américas"],
        ["Africa & Oceania", "Afrika en Oceanië", "Afrika und Ozeanien", "Afrique et Océanie", "África y Oceanía"],
        ["REGION", "REGIO", "REGION", "RÉGION", "REGIÓN"],
        ["ROUNDS", "RONDES", "RUNDE", "TOURS", "RONDA"],
        ["10 questions", "10 vragen", "10 Fragen", "10 questions", "10 preguntas"],
        ["15 questions", "15 vragen", "15 Fragen", "15 questions", "15 preguntas"],
        ["Endless", "Eindeloos", "Unendlich", "Sans fin", "Sin fin"],
        ["PERSONAL BEST", "PERSOONLIJK RECORD", "PERSÖNLICHER REKORD", "RECORD PERSONNEL", "RÉCORD PERSONAL"],
        ["ALL REGIONS", "ALLE REGIO'S", "ALLE REGIONEN", "TOUTES LES RÉGIONS", "TODAS LAS REGIONES"],
        ["EUROPE", "EUROPA", "EUROPA", "EUROPE", "EUROPA"],
        ["ASIA", "AZIË", "ASIEN", "ASIE", "ASIA"],
        ["AMERICAS", "AMERIKA", "AMERIKA", "AMÉRIQUES", "AMÉRICAS"],
        ["AFRICA & OCEANIA", "AFRIKA EN OCEANIË", "AFRIKA UND OZEANIEN", "AFRIQUE ET OCÉANIE", "ÁFRICA Y OCEANÍA"],
        ["Which country does this flag belong to?", "Bij welk land hoort deze vlag?", "Zu welchem Land gehört diese Flagge?", "À quel pays appartient ce drapeau ?", "¿A qué país pertenece esta bandera?"],
        ["Choose one of the four answers.", "Kies een van de vier antwoorden.", "Wähle eine der vier Antworten.", "Choisis une des quatre réponses.", "Elige una de las cuatro respuestas."],
        ["Next Question", "Volgende vraag", "Nächste Frage", "Question suivante", "Siguiente pregunta"],
        ["Correct!", "Goed!", "Richtig!", "Correct !", "¡Correcto!"],
        ["Not quite!", "Niet helemaal!", "Nicht ganz!", "Pas tout à fait !", "¡No exactamente!"],
        ["The answer is {name}.", "Het juiste antwoord is {name}.", "Die richtige Antwort lautet {name}.", "La bonne réponse est {name}.", "La respuesta correcta es {name}."],
        ["Great job!", "Goed gedaan!", "Gut gemacht!", "Bravo !", "¡Buen trabajo!"],
        ["Nice try!", "Goed geprobeerd!", "Gut versucht!", "Bien essayé !", "¡Buen intento!"],
        ["POINTS", "PUNTEN", "PUNKTE", "POINTS", "PUNTOS"],
        ["CORRECT", "GOED", "RICHTIG", "CORRECT", "CORRECTAS"],
        ["WRONG", "FOUT", "FALSCH", "FAUSSES", "INCORRECTAS"],
        ["ACCURACY", "NAUWKEURIGHEID", "GENAUIGKEIT", "PRÉCISION", "PRECISIÓN"],
        ["BEST STREAK", "LANGSTE REEKS", "LÄNGSTE SERIE", "MEILLEURE SÉRIE", "MEJOR RACHA"],
        ["Guess the Color — just because.", "Raad de kleur — just because.", "Errate die Farbe — just because.", "Devine la couleur — just because.", "Adivina el color — just because."],
        ["Higher or Lower? — just because.", "Hoger of lager? — just because.", "Höher oder niedriger? — just because.", "Plus ou moins ? — just because.", "¿Más o menos? — just because."],
        ["Pixel Guess — just because.", "Pixelraadsel — just because.", "Pixel-Rätsel — just because.", "Devine le pixel — just because.", "Adivina el píxel — just because."],
        ["Odd One Out — just because.", "Zoek de vreemde eend — just because.", "Finde den Außenseiter — just because.", "L’intrus — just because.", "Encuentra el intruso — just because."],
        ["Two Truths, One Lie — just because.", "Twee waarheden, één leugen — just because.", "Zwei Wahrheiten, eine Lüge — just because.", "Deux vérités, un mensonge — just because.", "Dos verdades y una mentira — just because."],
        ["What's Next? — just because.", "Wat komt hierna? — just because.", "Wie geht es weiter? — just because.", "Et ensuite ? — just because.", "¿Qué sigue? — just because."],
        ["Where Am I? — just because.", "Waar ben ik? — just because.", "Wo bin ich? — just because.", "Où suis-je ? — just because.", "¿Dónde estoy? — just because."],
        ["Back home", "Terug naar start", "Zur Startseite", "Retour à l’accueil", "Volver al inicio"],
        ["WELCOME TO THE INTERNET. SORT OF.", "WELKOM OP HET INTERNET. SOORT VAN.", "WILLKOMMEN IM INTERNET. SO IN ETWA.", "BIENVENUE SUR INTERNET. EN QUELQUE SORTE.", "BIENVENIDO A INTERNET. MÁS O MENOS."],
        ["Bored?", "Verveel je je?", "Langeweile?", "Tu t’ennuies ?", "¿Te aburres?"],
        ["Do something stupid.", "Doe iets geks.", "Mach etwas Dummes.", "Fais une bêtise.", "Haz algo absurdo."],
        ["Just Because", "Just Because", "Just Because", "Just Because", "Just Because"],
        ["Games.", "Games.", "Games.", "Games.", "Games."],
        ["Just Because Games | Free Browser Games", "Just Because Games | Gratis browserspellen", "Just Because Games | Kostenlose Browserspiele", "Just Because Games | Jeux gratuits sur navigateur", "Just Because Games | Juegos de navegador gratis"],
        ["Play quick browser games, quizzes and puzzles at Just Because Games. Pick a mini game, test your skills, and have fun for no particular reason.", "Speel snelle browserspellen, quizzen en puzzels bij Just Because Games. Kies een minigame, test je vaardigheden en heb plezier zonder bijzondere reden.", "Spiele schnelle Browsergames, Quizze und Rätsel bei Just Because Games. Wähle ein Minispiel, teste deine Fähigkeiten und hab einfach Spaß.", "Joue à des jeux sur navigateur, des quiz et des énigmes sur Just Because Games. Choisis un mini-jeu, teste tes talents et amuse-toi sans raison particulière.", "Juega a juegos de navegador, concursos y rompecabezas en Just Because Games. Elige un minijuego, pon a prueba tus habilidades y diviértete sin motivo especial."],
        ["Random games, weird ideas and absolutely no reason. Just pick something and have a go.", "Willekeurige spelletjes, vreemde ideeën en absoluut geen reden. Kies iets en probeer het.", "Zufällige Spiele, schräge Ideen und absolut kein Grund. Such dir etwas aus und probier es aus.", "Des jeux au hasard, des idées bizarres et aucune raison. Choisis quelque chose et essaie.", "Juegos al azar, ideas raras y ningún motivo. Elige algo y pruébalo."],
        ["Find something to do", "Zoek iets om te doen", "Finde etwas zu tun", "Trouve quelque chose à faire", "Encuentra algo que hacer"],
        ["No productivity guaranteed.", "Productiviteit niet gegarandeerd.", "Produktivität nicht garantiert.", "Productivité non garantie.", "Productividad no garantizada."],
        ["Test your color perception in Guess the Color. Match a mystery shade and find out how sharp your eyes are in this quick browser game.", "Test je kleurwaarneming in Raad de kleur. Kies de juiste tint en ontdek hoe scherp je ogen zijn in dit snelle browserspel.", "Teste dein Farbsehen in Errate die Farbe. Finde den passenden Farbton und prüfe in diesem schnellen Browserspiel, wie scharf deine Augen sind.", "Teste ta perception des couleurs dans Devine la couleur. Trouve la bonne teinte et vérifie ton œil dans ce jeu rapide sur navigateur.", "Pon a prueba tu percepción del color en Adivina el color. Encuentra el tono correcto y descubre tu agudeza visual en este minijuego."],
        ["Predict whether the next number is higher or lower in this quick guessing game. Build a streak and put your number instincts to the test.", "Voorspel of het volgende getal hoger of lager is. Bouw een reeks op en test je getalgevoel in dit snelle raadspel.", "Schätze, ob die nächste Zahl höher oder niedriger ist. Baue eine Serie auf und teste dein Zahlengespür in diesem schnellen Ratespiel.", "Devine si le nombre suivant sera plus grand ou plus petit. Enchaîne les bonnes réponses et teste ton intuition dans ce jeu rapide.", "Adivina si el siguiente número será mayor o menor. Encadena aciertos y pon a prueba tu intuición numérica en este juego rápido."],
        ["Can you identify a picture from a tiny, blurry clue? Play Pixel Guess, choose a category, and test your visual instincts.", "Herken je een afbeelding aan een klein, wazig beeld? Kies een categorie en test je observatievermogen in Pixelraadsel.", "Erkennst du ein Bild anhand eines winzigen, unscharfen Hinweises? Wähle eine Kategorie und teste deinen Blick in Pixel-Rätsel.", "Peux-tu reconnaître une image à partir d’un minuscule indice flou ? Choisis une catégorie et teste ton sens de l’observation dans Devine le pixel.", "¿Puedes reconocer una imagen a partir de una pista pequeña y borrosa? Elige una categoría y pon a prueba tu agudeza visual en Adivina el píxel."],
        ["Find the item that does not belong. Spot the shared connection in each set and put your logic to the test in Odd One Out.", "Zoek het item dat er niet bij hoort. Ontdek wat de andere items verbindt en test je logica in Zoek de vreemde eend.", "Finde das Element, das nicht dazugehört. Entdecke die Gemeinsamkeit der anderen und teste deine Logik in Finde den Außenseiter.", "Trouve l’élément intrus. Repère le lien entre les autres et teste ta logique dans L’intrus.", "Encuentra el elemento que no encaja. Descubre qué tienen en común los demás y pon a prueba tu lógica en Encuentra el intruso."],
        ["Read three curious claims, find the lie, and learn something new along the way in this quick Two Truths, One Lie quiz.", "Lees drie opvallende beweringen, ontdek de leugen en leer ondertussen iets nieuws in deze quiz Twee waarheden, één leugen.", "Lies drei überraschende Aussagen, finde die Lüge und lerne nebenbei etwas Neues in diesem schnellen Quiz.", "Lis trois affirmations étonnantes, trouve le mensonge et apprends quelque chose au passage dans ce quiz rapide.", "Lee tres afirmaciones curiosas, encuentra la mentira y aprende algo nuevo en este concurso rápido."],
        ["Spot the rule, solve the pattern, and predict what comes next in this quick number and logic puzzle game.", "Ontdek de regel, los het patroon op en voorspel wat hierna komt in deze snelle puzzel met getallen en logica.", "Erkenne die Regel, löse das Muster und sage voraus, was als Nächstes kommt – in diesem schnellen Zahlen- und Logikrätsel.", "Repère la règle, résous la suite et devine ce qui vient après dans ce jeu rapide de logique et de nombres.", "Descubre la regla, resuelve el patrón y predice qué viene después en este juego rápido de números y lógica."],
        ["Identify countries from their outlines in Where Am I?, a geography quiz with regions and difficulty levels for every map fan.", "Herken landen aan hun omtrek in Waar ben ik?, een aardrijkskundequiz met regio’s en moeilijkheidsgraden voor kaartliefhebbers.", "Erkenne Länder an ihren Umrissen in Wo bin ich?, einem Geografie-Quiz mit Regionen und Schwierigkeitsgraden für Kartenfans.", "Reconnais les pays à leur contour dans Où suis-je ?, un quiz de géographie avec des régions et plusieurs niveaux.", "Identifica países por su silueta en ¿Dónde estoy?, un concurso de geografía con regiones y niveles de dificultad."],
        ["Name the country behind each flag in this world flag quiz. Choose a region and difficulty, spot lookalikes, and beat your best score.", "Noem het land bij elke vlag in deze wereldvlaggenquiz. Kies een regio en moeilijkheidsgraad, herken lookalikes en verbeter je record.", "Nenne das Land zu jeder Flagge in diesem Weltflaggen-Quiz. Wähle Region und Schwierigkeit, erkenne ähnliche Flaggen und schlage deinen Rekord.", "Trouve le pays correspondant à chaque drapeau. Choisis une région et un niveau, repère les drapeaux similaires et bats ton record.", "Adivina el país de cada bandera. Elige una región y dificultad, distingue banderas parecidas y supera tu mejor puntuación."],
        ["Test your reaction speed in Reflex. Wait for the green signal, avoid fake-outs, and try to beat your personal best.", "Test je reactiesnelheid in Reflex. Wacht op het groene signaal, trap niet in nep-signalen en verbeter je record.", "Teste deine Reaktionszeit in Reflex. Warte auf das grüne Signal, lass dich nicht täuschen und schlage deinen persönlichen Rekord.", "Teste tes réflexes dans Reflex. Attends le signal vert, évite les leurres et tente de battre ton record.", "Pon a prueba tus reflejos en Reflex. Espera la señal verde, evita las falsas alarmas e intenta superar tu récord."],
        ["Watch the tiles light up, then repeat the pattern from memory. Choose a difficulty and see how far you can get in Sequence.", "Kijk hoe de tegels oplichten en herhaal het patroon uit je geheugen. Kies een moeilijkheidsgraad en ontdek hoe ver je komt in Volgorde.", "Sieh zu, wie die Kacheln aufleuchten, und wiederhole das Muster aus dem Gedächtnis. Wähle den Schwierigkeitsgrad und spiele Sequenz.", "Observe les cases qui s’allument puis répète le motif de mémoire. Choisis un niveau et vois jusqu’où tu peux aller.", "Observa cómo se iluminan las casillas y repite el patrón de memoria. Elige la dificultad y descubre hasta dónde llegas."],
        ["Put planets, animals, inventions, and other items in the right order. Play Sort It with drag-and-drop or arrow controls and chase a new high score.", "Zet planeten, dieren, uitvindingen en andere dingen in de juiste volgorde. Speel Sorteer maar met slepen of pijltjes en verbeter je topscore.", "Bringe Planeten, Tiere, Erfindungen und mehr in die richtige Reihenfolge. Sortiere mit Ziehen oder Pfeiltasten und knacke deinen Bestwert.", "Classe des planètes, des animaux, des inventions et bien d’autres éléments. Joue avec le glisser-déposer ou les flèches et vise un nouveau record.", "Ordena planetas, animales, inventos y otros elementos. Juega con arrastrar y soltar o las flechas e intenta lograr una nueva marca."],
        ["Guess the Color — Color Game | Just Because Games", "Raad de kleur — Kleurenquiz | Just Because Games", "Errate die Farbe — Farbenspiel | Just Because Games", "Devine la couleur — jeu de couleurs | Just Because Games", "Adivina el color — juego de colores | Just Because Games"],
        ["Higher or Lower? — Number Game | Just Because Games", "Hoger of lager? — Getallenspel | Just Because Games", "Höher oder niedriger? — Zahlenspiel | Just Because Games", "Plus ou moins ? — jeu de nombres | Just Because Games", "¿Más o menos? — juego de números | Just Because Games"],
        ["Pixel Guess — Picture Puzzle | Just Because Games", "Pixelraadsel — Afbeeldingspuzzel | Just Because Games", "Pixel-Rätsel — Bilderrätsel | Just Because Games", "Devine le pixel — puzzle visuel | Just Because Games", "Adivina el píxel — puzzle de imágenes | Just Because Games"],
        ["Odd One Out — Logic Game | Just Because Games", "Zoek de vreemde eend — Logicaspel | Just Because Games", "Finde den Außenseiter — Logikspiel | Just Because Games", "L’intrus — jeu de logique | Just Because Games", "Encuentra el intruso — juego de lógica | Just Because Games"],
        ["Two Truths, One Lie — Trivia Game | Just Because Games", "Twee waarheden, één leugen — Triviaquiz | Just Because Games", "Zwei Wahrheiten, eine Lüge — Quiz | Just Because Games", "Deux vérités, un mensonge — quiz | Just Because Games", "Dos verdades y una mentira — trivia | Just Because Games"],
        ["What's Next? — Number Puzzle | Just Because Games", "Wat komt hierna? — Getallenpuzzel | Just Because Games", "Wie geht es weiter? — Zahlenrätsel | Just Because Games", "Et ensuite ? — puzzle de nombres | Just Because Games", "¿Qué sigue? — acertijo numérico | Just Because Games"],
        ["Where Am I? — Geography Quiz | Just Because Games", "Waar ben ik? — Aardrijkskundequiz | Just Because Games", "Wo bin ich? — Geografie-Quiz | Just Because Games", "Où suis-je ? — quiz de géographie | Just Because Games", "¿Dónde estoy? — concurso de geografía | Just Because Games"],
        ["Flag Quiz — World Flag Game | Just Because Games", "Vlaggenquiz — Wereldvlaggen | Just Because Games", "Flaggenquiz — Weltflaggen | Just Because Games", "Quiz des drapeaux — drapeaux du monde | Just Because Games", "Concurso de banderas — banderas del mundo | Just Because Games"],
        ["Reflex — Reaction Time Game | Just Because Games", "Reflex — Reactiespel | Just Because Games", "Reflex — Reaktionsspiel | Just Because Games", "Réflexes — jeu de temps de réaction | Just Because Games", "Reflejos — juego de reacción | Just Because Games"],
        ["Sequence — Memory Game | Just Because Games", "Volgorde — Geheugenspel | Just Because Games", "Sequenz — Gedächtnisspiel | Just Because Games", "Séquence — jeu de mémoire | Just Because Games", "Secuencia — juego de memoria | Just Because Games"],
        ["Sort It — Sorting Puzzle | Just Because Games", "Sorteer maar — Sorteerpuzzel | Just Because Games", "Sortier das — Sortierrätsel | Just Because Games", "À trier — puzzle de classement | Just Because Games", "Ordénalo — rompecabezas de ordenar | Just Because Games"],
        ["Still too young for a real job, old enough to accept snacks & small donations.", "Nog te jong voor een echte baan, oud genoeg voor snacks & een kleine donatie.", "Noch zu jung für einen richtigen Job, aber alt genug für Snacks & kleine Spenden.", "Encore trop jeune pour un vrai job, mais assez grand pour des snacks et des petits dons.", "Aún muy joven para un trabajo real, pero con edad suficiente para snacks y pequeñas donaciones."],
        ["Leave a tiny tip ↗", "Kleine fooi geven ↗", "Kleines Trinkgeld ↗", "Laisser un petit pourboire ↗", "Dejar una propina ↗"],
        ["A little note.", "Een klein berichtje.", "Eine kleine Nachricht.", "Un petit mot.", "Una pequeña nota."],
        ["The donation link will be added soon. Thanks so much for the support!", "De donatielink wordt binnenkort toegevoegd. Bedankt voor je steun!", "Der Spendenlink wird bald hinzugefügt. Vielen Dank für deine Unterstützung!", "Le lien de don sera bientôt ajouté. Merci beaucoup pour ton soutien !", "El enlace para donar se añadirá pronto. ¡Muchas gracias por tu apoyo!"],
        ["Got it", "Begrepen", "Alles klar", "J’ai compris", "Entendido"],
        ["THE COLLECTION", "DE VERZAMELING", "DIE SAMMLUNG", "LA COLLECTION", "LA COLECCIÓN"],
        ["Things to do.", "Dingen om te doen.", "Dinge, die du tun kannst.", "Des choses à faire.", "Cosas que hacer."],
        ["Search games by name", "Zoek spellen op naam", "Spiele nach Namen suchen", "Rechercher un jeu par nom", "Buscar juegos por nombre"],
        ["Search the games…", "Zoek in de spellen…", "Spiele durchsuchen…", "Rechercher dans les jeux…", "Buscar juegos…"],
        ["Guess the Color", "Raad de kleur", "Errate die Farbe", "Devine la couleur", "Adivina el color"],
        ["How good are your eyes?", "Hoe goed zijn je ogen?", "Wie gut sind deine Augen?", "Tes yeux sont-ils précis ?", "¿Qué tan buena es tu vista?"],
        ["Higher or Lower", "Hoger of lager", "Höher oder niedriger", "Plus ou moins", "Más o menos"],
        ["Guess what comes next.", "Raad wat hierna komt.", "Rate, was als Nächstes kommt.", "Devine la suite.", "Adivina qué viene después."],
        ["Pixel Guess", "Pixelraadsel", "Pixel-Rätsel", "Devine le pixel", "Adivina el píxel"],
        ["What are you looking at?", "Waar kijk je naar?", "Was siehst du da?", "Qu’est-ce que tu regardes ?", "¿Qué estás viendo?"],
        ["Odd One Out", "Zoek de vreemde eend", "Finde den Außenseiter", "L’intrus", "Encuentra el intruso"],
        ["One of these doesn't belong.", "Eén hoort er niet bij.", "Eines davon passt nicht dazu.", "L’un d’eux n’a rien à faire là.", "Uno de estos no encaja."],
        ["Two Truths, One Lie", "Twee waarheden, één leugen", "Zwei Wahrheiten, eine Lüge", "Deux vérités, un mensonge", "Dos verdades y una mentira"],
        ["Two statements are true. One is a lie. Can you find it?", "Twee uitspraken zijn waar. Eén is gelogen. Weet jij welke?", "Zwei Aussagen stimmen. Eine ist gelogen. Findest du sie?", "Deux affirmations sont vraies. Une est fausse. Laquelle ?", "Dos afirmaciones son ciertas. Una es mentira. ¿La encuentras?"],
        ["What's Next?", "Wat komt hierna?", "Wie geht es weiter?", "Et ensuite ?", "¿Qué sigue?"],
        ["Solve funny number puzzles and figure out what comes next.", "Los grappige getalpuzzels op en ontdek wat hierna komt.", "Löse lustige Zahlenrätsel und finde heraus, was als Nächstes kommt.", "Résous des énigmes amusantes et trouve la suite.", "Resuelve acertijos numéricos y descubre qué sigue."],
        ["Where Am I?", "Waar ben ik?", "Wo bin ich?", "Où suis-je ?", "¿Dónde estoy?"],
        ["Recognize countries by their silhouettes.", "Herken landen aan hun omtrek.", "Erkenne Länder an ihren Umrissen.", "Reconnais les pays à leur silhouette.", "Reconoce países por su silueta."],
        ["COMING SOON", "BINNENKORT", "DEMNÄCHST", "BIENTÔT", "PRÓXIMAMENTE"],
        ["Flag Quiz", "Vlaggenquiz", "Flaggenquiz", "Quiz des drapeaux", "Concurso de banderas"],
        ["How well do you know the flags of the world?", "Hoe goed ken je de vlaggen van de wereld?", "Wie gut kennst du die Flaggen der Welt?", "Connais-tu bien les drapeaux du monde ?", "¿Cuánto sabes sobre las banderas del mundo?"],
        ["Reflex", "Reflex", "Reflex", "Réflexes", "Reflejos"],
        ["Test your reaction speed and beat your best time.", "Test je reactiesnelheid en verbeter je record.", "Teste deine Reaktionszeit und schlag deinen Rekord.", "Teste tes réflexes et bats ton meilleur temps.", "Pon a prueba tus reflejos y supera tu récord."],
        ["Reflex — just because.", "Reflex — just because.", "Reflex — just because.", "Réflexes — just because.", "Reflejos — just because."],
        ["Reflex.", "Reflex.", "Reflex.", "Réflexes.", "Reflejos."],
        ["Choose a game mode", "Kies een spelmodus", "Wähle einen Spielmodus", "Choisis un mode de jeu", "Elige un modo de juego"],
        ["Reflex reaction game", "Reactiespel", "Reaktionsspiel", "Jeu de réflexes", "Juego de reflejos"],
        ["A tiny test of your reaction time. Keep your eyes open.", "Een kleine test van je reactiesnelheid. Houd je ogen open.", "Ein kleiner Test deiner Reaktionszeit. Bleib aufmerksam.", "Un petit test de tes réflexes. Garde l’œil ouvert.", "Una pequeña prueba de reflejos. Mantente alerta."],
        ["Choose your mode.", "Kies je modus.", "Wähle deinen Modus.", "Choisis ton mode.", "Elige el modo."],
        ["Classic", "Klassiek", "Klassisch", "Classique", "Clásico"],
        ["5 rounds · wait for green", "5 rondes · wacht op groen", "5 Runden · warte auf Grün", "5 manches · attends le vert", "5 rondas · espera al verde"],
        ["Hard / Fake-Out", "Moeilijk / Nep-signalen", "Schwer / Täuschsignale", "Difficile / Le leurre", "Difícil / Señuelos"],
        ["Ignore red, orange, and other shapes", "Negeer rood, oranje en andere vormen", "Ignoriere Rot, Orange und andere Formen", "Ignore le rouge, l’orange et les autres formes", "Ignora el rojo, el naranja y otras formas"],
        ["Endless", "Eindeloos", "Endlos", "Sans fin", "Sin fin"],
        ["Keep going and track your average", "Ga door en houd je gemiddelde bij", "Mach weiter und verfolge deinen Durchschnitt", "Continue et suis ta moyenne", "Sigue jugando y consulta tu media"],
        ["Lowest reaction time on this device.", "Laagste reactietijd op dit apparaat.", "Niedrigste Reaktionszeit auf diesem Gerät.", "Temps de réaction le plus bas sur cet appareil.", "El menor tiempo de reacción en este dispositivo."],
        ["Wait for green...", "Wacht op groen...", "Warte auf Grün...", "Attends le vert...", "Espera al verde..."],
        ["Don't click until the light turns green.", "Klik pas als het vlak groen wordt.", "Klicke erst, wenn die Fläche grün wird.", "Ne clique que lorsque la zone devient verte.", "No hagas clic hasta que el panel se ponga verde."],
        ["Choose a mode and start playing.", "Kies een modus en begin met spelen.", "Wähle einen Modus und leg los.", "Choisis un mode et commence à jouer.", "Elige un modo y empieza a jugar."],
        ["That was a fake signal. Keep waiting for green.", "Dat was een nep-signaal. Blijf wachten op groen.", "Das war ein Täuschsignal. Warte weiter auf Grün.", "C’était un leurre. Continue d’attendre le vert.", "Era un señuelo. Sigue esperando al verde."],
        ["Resetting this round. Get ready...", "Deze ronde begint opnieuw. Maak je klaar...", "Diese Runde startet neu. Mach dich bereit...", "La manche recommence. Prépare-toi...", "Se reinicia esta ronda. Prepárate..."],
        ["Tap the green panel now.", "Klik nu op het groene vlak.", "Klicke jetzt auf die grüne Fläche.", "Clique maintenant sur la zone verte.", "Pulsa ahora el panel verde."],
        ["Nice one. Take a breath before the next round.", "Goed gedaan. Haal even adem voor de volgende ronde.", "Gut gemacht. Atme vor der nächsten Runde kurz durch.", "Bien joué. Reprends ton souffle avant la prochaine manche.", "Bien hecho. Respira antes de la siguiente ronda."],
        ["CLICK NOW!", "KLIK NU!", "JETZT KLICKEN!", "CLIQUE MAINTENANT !", "¡HAZ CLIC AHORA!"],
        ["Too early! Wait for green.", "Te vroeg! Wacht op groen.", "Zu früh! Warte auf Grün.", "Trop tôt ! Attends le vert.", "¡Demasiado pronto! Espera al verde."],
        ["Fake-out! Don't click!", "Nep-signaal! Niet klikken!", "Täuschsignal! Nicht klicken!", "Leurre ! Ne clique pas !", "¡Señuelo! ¡No hagas clic!"],
        ["Blazing fast!", "Bliksemsnel!", "Blitzschnell!", "Éclair !", "¡Veloz como un rayo!"],
        ["Sharp!", "Scherp!", "Scharf!", "Bien vu !", "¡Muy rápido!"],
        ["Nice reflexes!", "Goede reflexen!", "Gute Reflexe!", "Bons réflexes !", "¡Buenos reflejos!"],
        ["One more coffee?", "Nog een kop koffie nodig?", "Noch einen Kaffee?", "Encore un café ?", "¿Necesitas otro café?"],
        ["{ms} ms — {rating}", "{ms} ms — {rating}", "{ms} ms — {rating}", "{ms} ms — {rating}", "{ms} ms — {rating}"],
        ["Round {round} / {total}", "Ronde {round} / {total}", "Runde {round} / {total}", "Manche {round} / {total}", "Ronda {round} / {total}"],
        ["Round {round}", "Ronde {round}", "Runde {round}", "Manche {round}", "Ronda {round}"],
        ["Average", "Gemiddelde", "Durchschnitt", "Moyenne", "Media"],
        ["Personal Best", "Persoonlijk record", "Persönlicher Rekord", "Record personnel", "Récord personal"],
        ["New record!", "Nieuw record!", "Neuer Rekord!", "Nouveau record !", "¡Nuevo récord!"],
        ["Round times", "Rondetijden", "Rundenzeiten", "Temps par manche", "Tiempos por ronda"],
        [" round", " ronde", " Runde", " manche", " ronda"],
        [" rounds", " rondes", " Runden", " manches", " rondas"],
        ["Next round", "Volgende ronde", "Nächste Runde", "Manche suivante", "Siguiente ronda"],
        ["Finish run", "Sessie afronden", "Lauf beenden", "Terminer la session", "Terminar la sesión"],
        ["THAT'S A WRAP", "DAT WAS 'M", "DAS WAR'S", "C’EST TERMINÉ", "FIN DE LA PARTIDA"],
        ["Nice reactions.", "Mooie reflexen.", "Gute Reflexe.", "Beaux réflexes.", "¡Buenos reflejos!"],
        ["AVERAGE REACTION", "GEMIDDELDE REACTIETIJD", "DURCHSCHNITTLICHE REAKTIONSZEIT", "TEMPS DE RÉACTION MOYEN", "REACCIÓN MEDIA"],
        ["You played {rounds} rounds with an average of {ms} ms.", "Je speelde {rounds} rondes met een gemiddelde van {ms} ms.", "Du hast {rounds} Runden mit durchschnittlich {ms} ms gespielt.", "Tu as joué {rounds} manches avec une moyenne de {ms} ms.", "Jugaste {rounds} rondas con una media de {ms} ms."],
        ["You played {rounds} round with an average of {ms} ms.", "Je speelde {rounds} ronde met een gemiddelde van {ms} ms.", "Du hast {rounds} Runde mit durchschnittlich {ms} ms gespielt.", "Tu as joué {rounds} manche avec une moyenne de {ms} ms.", "Jugaste {rounds} ronda con una media de {ms} ms."],
        ["Your fastest reaction: {ms} ms.", "Je snelste reactie: {ms} ms.", "Deine schnellste Reaktion: {ms} ms.", "Ta réaction la plus rapide : {ms} ms.", "Tu reacción más rápida: {ms} ms."],
        ["No reaction times yet.", "Nog geen reactietijden.", "Noch keine Reaktionszeiten.", "Pas encore de temps de réaction.", "Aún no hay tiempos de reacción."],
        ["PLAY AGAIN", "OPNIEUW SPELEN", "NOCHMAL SPIELEN", "REJOUER", "VOLVER A JUGAR"],
        ["Sequence", "Volgorde", "Sequenz", "Séquence", "Secuencia"],
        ["Remember the sequence and repeat it correctly.", "Onthoud de volgorde en herhaal die goed.", "Merke dir die Reihenfolge und wiederhole sie richtig.", "Mémorise la séquence et répète-la correctement.", "Memoriza la secuencia y repítela correctamente."],
        ["Sequence — just because.", "Volgorde — just because.", "Sequenz — just because.", "Séquence — just because.", "Secuencia — just because."],
        ["Remember the rhythm. Repeat the pattern.", "Onthoud het ritme. Herhaal het patroon.", "Merke dir den Rhythmus. Wiederhole das Muster.", "Mémorise le rythme. Reproduis le motif.", "Recuerda el ritmo. Repite el patrón."],
        ["Choose your difficulty.", "Kies je moeilijkheidsgraad.", "Wähle deinen Schwierigkeitsgrad.", "Choisis ta difficulté.", "Elige la dificultad."],
        ["Choose your difficulty", "Kies je moeilijkheidsgraad", "Wähle deinen Schwierigkeitsgrad", "Choisis ta difficulté", "Elige la dificultad"],
        ["2 x 2 · calm pace", "2 x 2 · rustig tempo", "2 x 2 · ruhiges Tempo", "2 x 2 · rythme tranquille", "2 x 2 · ritmo tranquilo"],
        ["3 x 3 · steady pace", "3 x 3 · normaal tempo", "3 x 3 · normales Tempo", "3 x 3 · rythme normal", "3 x 3 · ritmo normal"],
        ["3 x 3 · quick, shifting patterns", "3 x 3 · snel, verschuivend patroon", "3 x 3 · schnell, wechselndes Muster", "3 x 3 · motifs rapides et décalés", "3 x 3 · patrones rápidos y cambiantes"],
        ["Best level on this device.", "Hoogste level op dit apparaat.", "Höchstes Level auf diesem Gerät.", "Meilleur niveau sur cet appareil.", "Nivel más alto en este dispositivo."],
        ["Sound: On", "Geluid: aan", "Ton: an", "Son : activé", "Sonido: activado"],
        ["Sound: Off", "Geluid: uit", "Ton: aus", "Son : désactivé", "Sonido: desactivado"],
        ["Sound unavailable", "Geluid niet beschikbaar", "Ton nicht verfügbar", "Son indisponible", "Sonido no disponible"],
        ["Sequence memory game", "Geheugenspel Volgorde", "Sequenz-Memory-Spiel", "Jeu de mémoire Séquence", "Juego de memoria Secuencia"],
        ["Tile {tile}", "Tegel {tile}", "Kachel {tile}", "Tuile {tile}", "Baldosa {tile}"],
        ["Level {level}", "Level {level}", "Level {level}", "Niveau {level}", "Nivel {level}"],
        ["Level reached", "Behaald level", "Erreichtes Level", "Niveau atteint", "Nivel alcanzado"],
        ["Watch carefully...", "Kijk goed...", "Schau genau hin...", "Regarde bien...", "¡Mira bien...!"],
        ["Your turn!", "Jouw beurt!", "Du bist dran!", "À toi !", "¡Tu turno!"],
        ["Well done!", "Goed gedaan!", "Gut gemacht!", "Bien joué !", "¡Bien hecho!"],
        ["Wrong!", "Fout!", "Falsch!", "Raté !", "¡Fallaste!"],
        ["Progress: {current} / {total}", "Voortgang: {current} / {total}", "Fortschritt: {current} / {total}", "Progression : {current} / {total}", "Progreso: {current} / {total}"],
        ["Game over.", "Spel afgelopen.", "Spiel vorbei.", "Fin de la partie.", "Fin del juego."],
        ["THAT'S IT", "DAT WAS HET", "DAS WAR'S", "ÇA Y EST", "ESO ES TODO"],
        ["Play Again", "Opnieuw spelen", "Nochmal spielen", "Rejouer", "Volver a jugar"],
        ["Choose another difficulty", "Kies een andere moeilijkheidsgraad", "Wähle einen anderen Schwierigkeitsgrad", "Choisir une autre difficulté", "Elige otra dificultad"],
        ["Pattern", "Patroon", "Muster", "Motif", "Patrón"],
        ["Sort It", "Sorteer maar", "Sortier das", "À trier", "Ordénalo"],
        ["Sort things in the right order. Can you get them all right?", "Zet alles in de juiste volgorde. Krijg je ze allemaal goed?", "Bring alles in die richtige Reihenfolge. Schaffst du alles?", "Mets tout dans le bon ordre. Peux-tu tout réussir ?", "Ordena todo correctamente. ¿Puedes acertarlas todas?"],
        ["Sort It — just because.", "Sorteer maar — just because.", "Sortier das — just because.", "À trier — just because.", "Ordénalo — just because."],
        ["Put things in the right order.", "Zet alles in de juiste volgorde.", "Bring alles in die richtige Reihenfolge.", "Mets tout dans le bon ordre.", "Pon todo en el orden correcto."],
        ["4 items · relaxed", "4 items · rustig", "4 Elemente · entspannt", "4 éléments · tranquille", "4 elementos · tranquilo"],
        ["5 items · steady", "5 items · normaal", "5 Elemente · regelmäßig", "5 éléments · modéré", "5 elementos · ritmo normal"],
        ["6 items · subtle differences", "6 items · subtiele verschillen", "6 Elemente · kleine Unterschiede", "6 éléments · différences subtiles", "6 elementos · diferencias sutiles"],
        ["Best score on this device.", "Beste score op dit apparaat.", "Beste Punktzahl auf diesem Gerät.", "Meilleur score sur cet appareil.", "Mejor puntuación en este dispositivo."],
        ["Sorting puzzle", "Sorteerpuzzel", "Sortierrätsel", "Puzzle de classement", "Rompecabezas de ordenar"],
        ["Drag cards or use the arrows to sort them.", "Sleep kaartjes of gebruik de pijlen om ze te sorteren.", "Ziehe die Karten oder sortiere sie mit den Pfeilen.", "Fais glisser les cartes ou utilise les flèches pour les classer.", "Arrastra las tarjetas o usa las flechas para ordenarlas."],
        ["Items to sort", "Te sorteren items", "Zu sortierende Elemente", "Éléments à classer", "Elementos para ordenar"],
        ["Question {number} / {total}", "Opdracht {number} / {total}", "Aufgabe {number} / {total}", "Question {number} / {total}", "Reto {number} / {total}"],
        ["QUESTION {number}", "OPDRACHT {number}", "AUFGABE {number}", "QUESTION {number}", "RETO {number}"],
        ["SCORE", "SCORE", "PUNKTE", "SCORE", "PUNTOS"],
        ["Check Order", "Controleer de volgorde", "Reihenfolge prüfen", "Vérifier l'ordre", "Comprobar el orden"],
        ["Next task", "Volgende opdracht", "Nächste Aufgabe", "Question suivante", "Siguiente reto"],
        ["Chances left", "Kansen over", "Versuche übrig", "Essais restants", "Intentos restantes"],
        ["Move {item} up", "Verplaats {item} omhoog", "{item} nach oben bewegen", "Déplacer {item} vers le haut", "Mover {item} hacia arriba"],
        ["Move {item} down", "Verplaats {item} omlaag", "{item} nach unten bewegen", "Déplacer {item} vers le bas", "Mover {item} hacia abajo"],
        ["All positions correct! +{points} points.", "Alle posities goed! +{points} punten.", "Alle Positionen richtig! +{points} Punkte.", "Toutes les positions sont correctes ! +{points} points.", "¡Todas las posiciones correctas! +{points} puntos."],
        ["You got {correct} positions right. One chance left.", "Je had {correct} posities goed. Nog één kans.", "{correct} Positionen waren richtig. Noch ein Versuch.", "Tu as {correct} bonnes positions. Encore un essai.", "Acertaste {correct} posiciones. Te queda un intento."],
        ["You got {correct} positions right: +{points} points.", "Je had {correct} posities goed: +{points} punten.", "{correct} Positionen richtig: +{points} Punkte.", "Tu as {correct} bonnes positions : +{points} points.", "Acertaste {correct} posiciones: +{points} puntos."],
        ["Reorder the cards and try once more.", "Zet de kaartjes anders en probeer het nog eens.", "Ordne die Karten neu und versuche es noch einmal.", "Réorganise les cartes et réessaie.", "Reordena las tarjetas e inténtalo otra vez."],
        ["Run complete.", "Potje afgelopen.", "Runde abgeschlossen.", "Partie terminée.", "Partida completada."],
        ["You sorted {count} tasks and scored {score} points.", "Je sorteerde {count} opdrachten en haalde {score} punten.", "Du hast {count} Aufgaben sortiert und {score} Punkte erzielt.", "Tu as classé {count} défis et marqué {score} points.", "Ordenaste {count} retos y conseguiste {score} puntos."],
        ["Nicely sorted.", "Netjes gesorteerd.", "Gut sortiert.", "Bien classé.", "Bien ordenado."],
        ["POINTS", "PUNTEN", "PUNKTE", "POINTS", "PUNTOS"],
        ["Change difficulty", "Verander moeilijkheidsgraad", "Schwierigkeit ändern", "Changer la difficulté", "Cambiar dificultad"],
        ["No games found.", "Geen spellen gevonden.", "Keine Spiele gefunden.", "Aucun jeu trouvé.", "No se encontraron juegos."],
        ["More games coming soon.", "Er komen binnenkort meer spellen.", "Weitere Spiele kommen bald.", "D’autres jeux arrivent bientôt.", "Pronto habrá más juegos."],
        ["Surprise me ↗", "Verras me ↗", "Überrasch mich ↗", "Surprends-moi ↗", "Sorpréndeme ↗"],
        ["Open a random game", "Open een willekeurig spel", "Ein zufälliges Spiel öffnen", "Ouvrir un jeu au hasard", "Abrir un juego aleatorio"],
        ["We're always working on something new.", "We werken altijd aan iets nieuws.", "Wir arbeiten immer an etwas Neuem.", "Nous préparons toujours quelque chose de nouveau.", "Siempre estamos preparando algo nuevo."],
        ["made for no particular reason.", "gemaakt zonder bijzondere reden.", "ohne besonderen Grund gemacht.", "créé sans raison particulière.", "hecho sin ningún motivo en particular."],
        ["back home", "terug naar start", "zur Startseite", "retour à l’accueil", "volver al inicio"],
        ["A LITTLE GAME · NO.", "EEN KLEIN SPEL · NR.", "EIN KLEINES SPIEL · NR.", "UN PETIT JEU · N°", "UN JUEGO PEQUEÑO · N.º"],
        ["START PLAYING", "BEGIN MET SPELEN", "SPIEL STARTEN", "JOUER", "EMPEZAR A JUGAR"],
        ["YOUR CHOICE", "JOUW KEUZE", "DEINE WAHL", "TON CHOIX", "TU ELECCIÓN"],
        ["Pick a category.", "Kies een categorie.", "Wähle eine Kategorie.", "Choisis une catégorie.", "Elige una categoría."],
        ["Random", "Willekeurig", "Zufall", "Au hasard", "Aleatorio"],
        ["Can't decide? Let fate choose.", "Kun je niet kiezen? Laat het lot beslissen.", "Du kannst dich nicht entscheiden? Überlass es dem Zufall.", "Indécis ? Laisse le hasard choisir.", "¿No te decides? Deja que el azar elija."],
        ["Pick your favorite or let fate decide.", "Kies je favoriet of laat het lot beslissen.", "Wähle deinen Favoriten oder lass das Schicksal entscheiden.", "Choisis ton préféré ou laisse le hasard décider.", "Elige tu favorito o deja que decida el azar."],
        ["YOUR PERSONAL BEST", "JOUW PERSOONLIJK RECORD", "DEIN PERSÖNLICHER REKORD", "TON RECORD PERSONNEL", "TU RÉCORD PERSONAL"],
        ["HIGH SCORE", "TOPSCORE", "HIGHSCORE", "RECORD", "RÉCORD"],
        ["Your best score on this device.", "Je beste score op dit apparaat.", "Dein bester Punktestand auf diesem Gerät.", "Ton meilleur score sur cet appareil.", "Tu mejor puntuación en este dispositivo."],
        ["SCORE:", "SCORE:", "PUNKTE:", "SCORE :", "PUNTOS:"],
        ["Which color name is it?", "Welke kleurnaam hoort erbij?", "Wie heißt diese Farbe?", "Quel est le nom de cette couleur ?", "¿Qué nombre tiene este color?"],
        ["Choose the name that matches the color.", "Kies de naam die bij de kleur past.", "Wähle den Namen, der zur Farbe passt.", "Choisis le nom qui correspond à la couleur.", "Elige el nombre que corresponde al color."],
        ["CURRENT", "HUIDIG", "AKTUELL", "ACTUEL", "ACTUAL"],
        ["NEXT", "VOLGENDE", "ALS NÄCHSTES", "SUIVANT", "SIGUIENTE"],
        ["Which animal weighs more?", "Welk dier weegt meer?", "Welches Tier wiegt mehr?", "Quel animal pèse le plus ?", "¿Qué animal pesa más?"],
        ["Higher ↑", "Hoger ↑", "Höher ↑", "Plus ↑", "Más ↑"],
        ["Lower ↓", "Lager ↓", "Niedriger ↓", "Moins ↓", "Menos ↓"],
        ["PLAY AGAIN", "OPNIEUW SPELEN", "NOCHMAL SPIELEN", "REJOUER", "VOLVER A JUGAR"],
        ["← Back to settings", "← Terug naar instellingen", "← Zurück zu den Einstellungen", "← Retour aux réglages", "← Volver a los ajustes"],
        ["← Back home", "← Terug naar start", "← Zur Startseite", "← Retour à l’accueil", "← Volver al inicio"],
        ["A LITTLE GAME", "EEN KLEIN SPEL", "EIN KLEINES SPIEL", "UN PETIT JEU", "UN JUEGO PEQUEÑO"],
        ["Think you know your numbers? Let's put that to the test.", "Denk je dat je goed bent met getallen? Laten we dat testen.", "Kennst du dich mit Zahlen aus? Finden wir es heraus.", "Tu connais les nombres ? Vérifions ça.", "¿Se te dan bien los números? Vamos a comprobarlo."],
        ["A little test for your eyes. How well do you really know your colors?", "Een kleine test voor je ogen. Hoe goed ken je kleuren echt?", "Ein kleiner Sehtest. Wie gut kennst du Farben wirklich?", "Un petit test pour tes yeux. Connais-tu vraiment bien les couleurs ?", "Una pequeña prueba para tus ojos. ¿Cuánto sabes de colores?"],
        ["One tiny, blurry clue. Type what you think it is.", "Een kleine, wazige aanwijzing. Typ wat je denkt dat het is.", "Ein winziger, unscharfer Hinweis. Schreib, was du vermutest.", "Un tout petit indice flou. Écris ce que tu crois voir.", "Una pista pequeña y borrosa. Escribe lo que crees que es."],
        ["Three belong together. One doesn't. Can you spot it?", "Drie horen bij elkaar. Eén niet. Zie jij welke?", "Drei gehören zusammen. Eines nicht. Findest du es?", "Trois vont ensemble. Un seul détonne. Le trouveras-tu ?", "Tres van juntos. Uno no. ¿Sabes cuál es?"],
        ["Three claims. Two facts. One fib. Can you spot the lie?", "Drie beweringen. Twee feiten. Eén leugen. Zie jij welke?", "Drei Aussagen. Zwei stimmen, eine nicht. Findest du die Lüge?", "Trois affirmations. Deux vraies, une fausse. Laquelle ?", "Tres afirmaciones. Dos son ciertas y una es mentira. ¿Cuál?"],
        ["Patterns, little twists, and the occasional number doing something suspicious.", "Patronen, kleine twists en af en toe een verdacht getal.", "Muster, kleine Drehungen und manchmal eine verdächtige Zahl.", "Des motifs, quelques surprises et parfois un nombre suspect.", "Patrones, pequeños giros y algún número sospechoso."],
        ["One country outline. No labels. Can you place it on the map in your mind?", "De omtrek van een land. Geen labels. Kun je het op de kaart plaatsen?", "Der Umriss eines Landes. Keine Namen. Findest du es auf der Karte?", "Le contour d’un pays. Sans nom. Peux-tu le situer ?", "El contorno de un país. Sin etiquetas. ¿Puedes ubicarlo?"],
        ["SET UP YOUR GAME", "STEL JE SPEL IN", "SPIEL EINSTELLEN", "CONFIGURE TON JEU", "CONFIGURA TU JUEGO"],
        ["Pick a subject.", "Kies een onderwerp.", "Wähle ein Thema.", "Choisis un sujet.", "Elige un tema."],
        ["Pick your playground.", "Kies je speelveld.", "Wähle dein Spielfeld.", "Choisis ton terrain de jeu.", "Elige tu terreno de juego."],
        ["Choose your subject", "Kies je onderwerp", "Wähle dein Thema", "Choisis ton sujet", "Elige tu tema"],
        ["Choose a category.", "Kies een categorie.", "Wähle eine Kategorie.", "Choisis une catégorie.", "Elige una categoría."],
        ["Choose a region.", "Kies een regio.", "Wähle eine Region.", "Choisis une région.", "Elige una región."],
        ["Choose a puzzle category", "Kies een puzzelcategorie", "Wähle eine Rätselkategorie", "Choisis une catégorie d’énigmes", "Elige una categoría de acertijos"],
        ["Choose a difficulty", "Kies een moeilijkheid", "Wähle einen Schwierigkeitsgrad", "Choisis une difficulté", "Elige una dificultad"],
        ["HOW TRICKY?", "HOE LASTIG?", "WIE KNIFFLIG?", "QUEL NIVEAU ?", "¿QUÉ DIFICULTAD?"],
        ["All difficulties", "Alle moeilijkheden", "Alle Schwierigkeitsgrade", "Toutes les difficultés", "Todas las dificultades"],
        ["All Difficulties", "Alle moeilijkheden", "Alle Schwierigkeitsgrade", "Toutes les difficultés", "Todas las dificultades"],
        ["All Categories", "Alle categorieën", "Alle Kategorien", "Toutes les catégories", "Todas las categorías"],
        ["All Puzzles", "Alle puzzels", "Alle Rätsel", "Toutes les énigmes", "Todos los acertijos"],
        ["All Countries", "Alle landen", "Alle Länder", "Tous les pays", "Todos los países"],
        ["Easy", "Makkelijk", "Einfach", "Facile", "Fácil"],
        ["Medium", "Gemiddeld", "Mittel", "Moyen", "Medio"],
        ["Hard", "Moeilijk", "Schwer", "Difficile", "Difícil"],
        ["A little of everything", "Van alles wat", "Von allem etwas", "Un peu de tout", "Un poco de todo"],
        ["YOUR PERSONAL BEST", "JOUW PERSOONLIJK RECORD", "DEIN PERSÖNLICHER REKORD", "TON RECORD PERSONNEL", "TU RÉCORD PERSONAL"],
        ["PERSONAL BEST", "PERSOONLIJK RECORD", "PERSÖNLICHER REKORD", "RECORD PERSONNEL", "RÉCORD PERSONAL"],
        ["Saved on this device.", "Opgeslagen op dit apparaat.", "Auf diesem Gerät gespeichert.", "Enregistré sur cet appareil.", "Guardado en este dispositivo."],
        ["Let's play", "Spelen maar", "Los geht's", "C’est parti", "¡A jugar!"],
        ["First, pick a puzzle", "Kies eerst een puzzel", "Wähle zuerst ein Rätsel", "Choisis d’abord une énigme", "Primero, elige un acertijo"],
        ["Choose your kind of thinking.", "Kies hoe je wilt nadenken.", "Wähle deine Denkart.", "Choisis ta façon de réfléchir.", "Elige cómo quieres pensar."],
        ["SET THE PACE", "KIES HET TEMPO", "BESTIMME DAS TEMPO", "CHOISIS LE RYTHME", "ELIGE EL RITMO"],
        ["How spicy?", "Hoe pittig?", "Wie knifflig?", "Quel piquant ?", "¿Qué tal de difícil?"],
        ["YOUR MOVE", "JIJ BENT AAN ZET", "DU BIST DRAN", "À TOI DE JOUER", "TU TURNO"],
        ["Hint", "Hint", "Tipp", "Indice", "Pista"],
        ["Get a hint", "Vraag een hint", "Hinweis holen", "Obtenir un indice", "Pedir una pista"],
        ["Use a hint", "Gebruik een hint", "Hinweis verwenden", "Utiliser un indice", "Usar una pista"],
        ["Next Question", "Volgende vraag", "Nächste Frage", "Question suivante", "Siguiente pregunta"],
        ["Next question", "Volgende vraag", "Nächste Frage", "Question suivante", "Siguiente pregunta"],
        ["Next Country", "Volgend land", "Nächstes Land", "Pays suivant", "Siguiente país"],
        ["Next Picture", "Volgende afbeelding", "Nächstes Bild", "Image suivante", "Siguiente imagen"],
        ["Back to categories", "Terug naar categorieën", "Zurück zu den Kategorien", "Retour aux catégories", "Volver a las categorías"],
        ["← Back to categories", "← Terug naar categorieën", "← Zurück zu den Kategorien", "← Retour aux catégories", "← Volver a las categorías"],
        ["← Back to Categories", "← Terug naar categorieën", "← Zurück zu den Kategorien", "← Retour aux catégories", "← Volver a las categorías"],
        ["Back to regions", "Terug naar regio's", "Zurück zu den Regionen", "Retour aux régions", "Volver a las regiones"],
        ["Back to settings", "Terug naar instellingen", "Zurück zu den Einstellungen", "Retour aux réglages", "Volver a los ajustes"],
        ["Next question", "Volgende vraag", "Nächste Frage", "Question suivante", "Siguiente pregunta"],
        ["See results", "Bekijk resultaten", "Ergebnisse ansehen", "Voir les résultats", "Ver resultados"],
        ["See Results", "Bekijk resultaten", "Ergebnisse ansehen", "Voir les résultats", "Ver resultados"],
        ["That's a wrap", "Dat was 'm", "Das war's", "C’est terminé", "Fin de la partida"],
        ["THAT'S A WRAP", "DAT WAS 'M", "DAS WAR'S", "C’EST TERMINÉ", "FIN DE LA PARTIDA"],
        ["Correct!", "Goed!", "Richtig!", "Correct !", "¡Correcto!"],
        ["Not quite!", "Niet helemaal!", "Nicht ganz!", "Pas tout à fait !", "¡No exactamente!"],
        ["Not quite.", "Niet helemaal.", "Nicht ganz.", "Pas tout à fait.", "No exactamente."],
        ["Amazing!", "Geweldig!", "Fantastisch!", "Incroyable !", "¡Increíble!"],
        ["Great job!", "Goed gedaan!", "Gut gemacht!", "Bravo !", "¡Buen trabajo!"],
        ["Nice work.", "Goed gedaan.", "Gut gemacht.", "Bien joué.", "Buen trabajo."],
        ["Nice try!", "Goed geprobeerd!", "Gut versucht!", "Bien essayé !", "¡Buen intento!"],
        ["Keep practicing!", "Blijf oefenen!", "Weiter üben!", "Continue à t’entraîner !", "¡Sigue practicando!"],
        ["POINTS", "PUNTEN", "PUNKTE", "POINTS", "PUNTOS"],
        ["CORRECT", "GOED", "RICHTIG", "CORRECT", "CORRECTAS"],
        ["WRONG", "FOUT", "FALSCH", "FAUSSES", "INCORRECTAS"],
        ["ACCURACY", "NAUWKEURIGHEID", "GENAUIGKEIT", "PRÉCISION", "PRECISIÓN"],
        ["BEST STREAK", "LANGSTE REEKS", "LÄNGSTE SERIE", "MEILLEURE SÉRIE", "MEJOR RACHA"],
        ["STREAK", "REEKS", "SERIE", "SÉRIE", "RACHA"],
        ["ROUND", "RONDE", "RUNDE", "MANCHE", "RONDA"],
        ["SCORE", "SCORE", "PUNKTE", "SCORE", "PUNTOS"],
        ["Choose a region", "Kies een regio", "Wähle eine Region", "Choisis une région", "Elige una región"],
        ["Guess the country", "Raad het land", "Errate das Land", "Devine le pays", "Adivina el país"],
        ["Where am I?", "Waar ben ik?", "Wo bin ich?", "Où suis-je ?", "¿Dónde estoy?"],
        ["NO LABELS. JUST THE OUTLINE.", "GEEN NAMEN. ALLEEN DE OMTREK.", "KEINE NAMEN. NUR DER UMRISS.", "SANS NOM. JUSTE LE CONTOUR.", "SIN NOMBRES. SOLO EL CONTORNO."],
        ["COUNTRY OUTLINE", "LANDOMTREK", "LANDESUMRISS", "CONTOUR DU PAYS", "CONTORNO DEL PAÍS"],
        ["About the map data", "Over de kaartgegevens", "Über die Kartendaten", "À propos des données cartographiques", "Sobre los datos del mapa"],
        ["Your answer", "Jouw antwoord", "Deine Antwort", "Ta réponse", "Tu respuesta"],
        ["Type your answer...", "Typ je antwoord...", "Gib deine Antwort ein...", "Saisis ta réponse...", "Escribe tu respuesta..."],
        ["Submit Answer", "Verstuur antwoord", "Antwort absenden", "Envoyer la réponse", "Enviar respuesta"],
        ["Submit answer", "Verstuur antwoord", "Antwort absenden", "Envoyer la réponse", "Enviar respuesta"],
        ["Use the English country name. Press Enter to submit.", "Gebruik de Engelse landnaam. Druk op Enter om te antwoorden.", "Verwende den englischen Ländernamen. Drücke Enter zum Absenden.", "Utilise le nom anglais du pays. Appuie sur Entrée pour répondre.", "Usa el nombre del país en inglés. Pulsa Intro para responder."],
        ["Made with Natural Earth. Public-domain map data, kept right here in the project.", "Gemaakt met Natural Earth. Kaartgegevens in het publieke domein, gewoon in dit project.", "Erstellt mit Natural Earth. Frei verfügbare Kartendaten direkt in diesem Projekt.", "Créé avec Natural Earth. Données cartographiques du domaine public incluses dans le projet.", "Hecho con Natural Earth. Datos cartográficos de dominio público incluidos en el proyecto."],
        ["CHOOSE YOUR SUBJECT", "KIES JE ONDERWERP", "WÄHLE DEIN THEMA", "CHOISIS TON SUJET", "ELIGE TU TEMA"],
        ["Ten pictures per run · answers in English", "Tien afbeeldingen per spel · antwoorden in het Engels", "Zehn Bilder pro Runde · Antworten auf Englisch", "Dix images par partie · réponses en anglais", "Diez imágenes por partida · respuestas en inglés"],
        ["All Families", "Alle kleurfamilies", "Alle Farbfamilien", "Toutes les familles", "Todas las familias"],
        ["All Categories", "Alle categorieën", "Alle Kategorien", "Toutes les catégories", "Todas las categorías"],
        ["All Puzzles", "Alle puzzels", "Alle Rätsel", "Toutes les énigmes", "Todos los acertijos"],
        ["All Countries", "Alle landen", "Alle Länder", "Tous les pays", "Todos los países"],
        ["A bit of everything", "Van alles wat", "Von allem etwas", "Un peu de tout", "Un poco de todo"],
        ["No repeats in a run", "Geen herhaling in een spel", "Keine Wiederholungen pro Runde", "Sans répétition pendant une partie", "Sin repetir en una partida"],
        ["10 questions · no repeats", "10 vragen · geen herhaling", "10 Fragen · keine Wiederholung", "10 questions · sans répétition", "10 preguntas · sin repetir"],
        ["10 questions · no repeats in a run", "10 vragen · geen herhaling", "10 Fragen · keine Wiederholung", "10 questions · sans répétition", "10 preguntas · sin repetir"],
        ["Ten pictures per run", "Tien afbeeldingen per spel", "Zehn Bilder pro Runde", "Dix images par partie", "Diez imágenes por partida"],
        ["A bit of everything", "Van alles wat", "Von allem etwas", "Un peu de tout", "Un poco de todo"],
        ["All difficulties", "Alle moeilijkheden", "Alle Schwierigkeitsgrade", "Toutes les difficultés", "Todas las dificultades"],
        ["All Difficulties", "Alle moeilijkheden", "Alle Schwierigkeitsgrade", "Toutes les difficultés", "Todas las dificultades"],
        ["All difficulty", "Alle moeilijkheden", "Alle Schwierigkeitsgrade", "Toutes les difficultés", "Todas las dificultades"],
        ["A little of everything", "Van alles wat", "Von allem etwas", "Un peu de tout", "Un poco de todo"],
        ["All difficulties", "Alle moeilijkheden", "Alle Schwierigkeitsgrade", "Toutes les difficultés", "Todas las dificultades"],
        ["Flag Quiz", "Vlaggenquiz", "Flaggenquiz", "Quiz des drapeaux", "Concurso de banderas"],
        ["The question set needs a quick repair before the game can start.", "De vragenset moet eerst worden hersteld voordat het spel kan beginnen.", "Der Fragensatz muss repariert werden, bevor das Spiel starten kann.", "Le jeu de questions doit être corrigé avant de commencer.", "Hay que reparar las preguntas antes de empezar."],
        ["The country map data needs a quick repair before this game can start.", "De kaartgegevens moeten eerst worden hersteld voordat dit spel kan beginnen.", "Die Kartendaten müssen repariert werden, bevor das Spiel starten kann.", "Les données cartographiques doivent être corrigées avant de commencer.", "Hay que reparar los datos del mapa antes de empezar."],
        ["There are no questions for this selection yet.", "Er zijn nog geen vragen voor deze selectie.", "Für diese Auswahl gibt es noch keine Fragen.", "Il n’y a pas encore de questions pour ce choix.", "Aún no hay preguntas para esta selección."],
        ["There are not enough unique questions for this selection yet.", "Er zijn nog niet genoeg verschillende vragen voor deze selectie.", "Für diese Auswahl gibt es noch nicht genügend verschiedene Fragen.", "Il n’y a pas encore assez de questions différentes pour ce choix.", "Aún no hay suficientes preguntas distintas para esta selección."],
        ["No pictures are available in this category yet.", "Er zijn nog geen afbeeldingen in deze categorie.", "In dieser Kategorie sind noch keine Bilder verfügbar.", "Aucune image n’est encore disponible dans cette catégorie.", "Aún no hay imágenes disponibles en esta categoría."],
        ["Use a hint", "Gebruik een hint", "Hinweis verwenden", "Utiliser un indice", "Usar una pista"],
        ["Hints used", "Hints gebruikt", "Tipps verwendet", "Indices utilisés", "Pistas usadas"],
        ["ATTEMPTS", "POGINGEN", "VERSUCHE", "ESSAIS", "INTENTOS"],
        ["PIXEL LEVEL", "PIXELNIVEAU", "PIXELSTUFE", "NIVEAU DE PIXELS", "NIVEL DE PÍXELES"],
        ["Image:", "Afbeelding:", "Bild:", "Image :", "Imagen:"],
        ["Source", "Bron", "Quelle", "Source", "Fuente"],
        ["License", "Licentie", "Lizenz", "Licence", "Licencia"],
        ["What do you think it is?", "Wat denk je dat het is?", "Was glaubst du, was es ist?", "À ton avis, qu’est-ce que c’est ?", "¿Qué crees que es?"],
        ["Type your answer in English", "Typ je antwoord in het Engels", "Gib deine Antwort auf Englisch ein", "Écris ta réponse en anglais", "Escribe tu respuesta en inglés"],
        ["Your answer…", "Jouw antwoord…", "Deine Antwort…", "Ta réponse…", "Tu respuesta…"],
        ["Submit answer", "Verstuur antwoord", "Antwort absenden", "Envoyer la réponse", "Enviar respuesta"],
        ["START PLAYING", "BEGIN MET SPELEN", "SPIEL STARTEN", "JOUER", "EMPEZAR A JUGAR"],
        ["More games coming soon.", "Er komen binnenkort meer spellen.", "Weitere Spiele kommen bald.", "D’autres jeux arrivent bientôt.", "Pronto habrá más juegos."],
        ["Higher", "Hoger", "Höher", "Plus", "Más"],
        ["or", "of", "oder", "ou", "o"],
        ["lower?", "lager?", "niedriger?", "moins ?", "menos?"],
        ["Odd", "Zoek de", "Finde den", "L’intrus", "Encuentra el"],
        ["One Out.", "vreemde eend.", "Außenseiter.", "intrus.", "intruso."],
        ["Two Truths,", "Twee waarheden,", "Zwei Wahrheiten,", "Deux vérités,", "Dos verdades,"],
        ["One Lie.", "één leugen.", "eine Lüge.", "un mensonge.", "una mentira."],
        ["Pixel", "Pixel", "Pixel", "Pixel", "Píxel"],
        ["Guess.", "raadsel.", "Rätsel.", "devine.", "adivina."],
        ["Where", "Waar", "Wo", "Où", "Dónde"],
        ["Am I?", "ben ik?", "bin ich?", "suis-je ?", "estoy?"],
        ["Choose a category", "Kies een categorie", "Wähle eine Kategorie", "Choisis une catégorie", "Elige una categoría"],
        ["A bit of everything", "Van alles wat", "Von allem etwas", "Un peu de tout", "Un poco de todo"],
        ["Animal weight", "Diergewicht", "Tiergewicht", "Poids des animaux", "Peso de animales"],
        ["Country population", "Inwonertal van landen", "Einwohnerzahl", "Population des pays", "Población de países"],
        ["Object weight", "Gewicht van voorwerpen", "Gewicht von Gegenständen", "Poids des objets", "Peso de objetos"],
        ["Game sales", "Gameverkoop", "Spielverkäufe", "Ventes de jeux", "Ventas de videojuegos"],
        ["Stadium capacity", "Stadioncapaciteit", "Stadionkapazität", "Capacité des stades", "Aforo de estadios"],
        ["Social media users", "Gebruikers van sociale media", "Nutzer sozialer Medien", "Utilisateurs des réseaux sociaux", "Usuarios de redes sociales"],
        ["Famous People", "Bekende personen", "Berühmte Personen", "Personnalités célèbres", "Personas famosas"],
        ["Food & Drinks", "Eten en drinken", "Essen und Trinken", "Cuisine et boissons", "Comida y bebida"],
        ["Brands & Products", "Merken en producten", "Marken und Produkte", "Marques et produits", "Marcas y productos"],
        ["Movies & TV", "Films en tv", "Film und Fernsehen", "Films et séries", "Cine y televisión"],
        ["Countries & Places", "Landen en plaatsen", "Länder und Orte", "Pays et lieux", "Países y lugares"],
        ["Video Games", "Videogames", "Videospiele", "Jeux vidéo", "Videojuegos"],
        ["Everyday Objects", "Alledaagse voorwerpen", "Alltagsgegenstände", "Objets du quotidien", "Objetos cotidianos"],
        ["Science & Nature", "Wetenschap en natuur", "Wissenschaft und Natur", "Sciences et nature", "Ciencia y naturaleza"],
        ["General Knowledge", "Algemene kennis", "Allgemeinwissen", "Culture générale", "Cultura general"],
        ["Number Patterns", "Getalpatronen", "Zahlenmuster", "Suites de nombres", "Patrones numéricos"],
        ["Tricky Math", "Lastige sommen", "Knifflige Mathematik", "Calculs piégeux", "Matemáticas complicadas"],
        ["Visual Math", "Visuele wiskunde", "Visuelle Mathematik", "Maths visuelles", "Matemáticas visuales"],
        ["Sequences with a rule", "Reeksen met een regel", "Folgen mit einer Regel", "Suites avec une règle", "Secuencias con una regla"],
        ["Mind the little details", "Let op de kleine details", "Achte auf die Details", "Attention aux petits détails", "Fíjate en los detalles"],
        ["Symbols have secrets", "Symbolen hebben geheimen", "Symbole haben Geheimnisse", "Les symboles cachent des secrets", "Los símbolos esconden secretos"],
        ["Pick a puzzle.", "Kies een puzzel.", "Wähle ein Rätsel.", "Choisis une énigme.", "Elige un acertijo."],
        ["All Families", "Alle kleurfamilies", "Alle Farbfamilien", "Toutes les familles", "Todas las familias"],
        ["Greens", "Groentinten", "Grüntöne", "Verts", "Verdes"],
        ["Blues", "Blauwtinten", "Blautöne", "Bleus", "Azules"],
        ["Reds", "Roodtinten", "Rottöne", "Rouges", "Rojos"],
        ["Purples", "Paarstinten", "Lilatöne", "Violets", "Morados"],
        ["Yellows", "Geeltinten", "Gelbtöne", "Jaunes", "Amarillos"],
        ["Oranges", "Oranjetinten", "Orangetöne", "Oranges", "Naranjas"],
        ["Pinks", "Roze tinten", "Rosatöne", "Roses", "Rosas"],
        ["Browns", "Bruine tinten", "Brauntöne", "Marrons", "Marrones"],
        ["Grays", "Grijstinten", "Grautöne", "Gris", "Grises"],
        ["Guess what comes next.", "Raad wat hierna komt.", "Rate, was als Nächstes kommt.", "Devine la suite.", "Adivina qué viene después."],
        ["Loading image…", "Afbeelding laden…", "Bild wird geladen…", "Chargement de l’image…", "Cargando imagen…"],
        ["Creator", "Maker", "Urheber", "Créateur", "Creador"],
        ["NEXT PICTURE", "VOLGENDE AFBEELDING", "NÄCHSTES BILD", "IMAGE SUIVANTE", "SIGUIENTE IMAGEN"],
        ["GUESSED", "GERAAD", "ERRATEN", "DEVINÉ", "ADIVINADAS"],
        ["ATTEMPTS 0 / 5", "POGINGEN 0 / 5", "VERSUCHE 0 / 5", "ESSAIS 0 / 5", "INTENTOS 0 / 5"],
        ["Image:", "Afbeelding:", "Bild:", "Image :", "Imagen:"],
        ["A LITTLE GAME · NO. 01", "EEN KLEIN SPEL · NR. 01", "EIN KLEINES SPIEL · NR. 01", "UN PETIT JEU · N° 01", "UN JUEGO PEQUEÑO · N.º 01"],
        ["A LITTLE GAME · NO. 02", "EEN KLEIN SPEL · NR. 02", "EIN KLEINES SPIEL · NR. 02", "UN PETIT JEU · N° 02", "UN JUEGO PEQUEÑO · N.º 02"],
        ["A LITTLE GAME · NO. 03", "EEN KLEIN SPEL · NR. 03", "EIN KLEINES SPIEL · NR. 03", "UN PETIT JEU · N° 03", "UN JUEGO PEQUEÑO · N.º 03"],
        ["A LITTLE GAME · NO. 04", "EEN KLEIN SPEL · NR. 04", "EIN KLEINES SPIEL · NR. 04", "UN PETIT JEU · N° 04", "UN JUEGO PEQUEÑO · N.º 04"],
        ["A LITTLE GAME · NO. 05", "EEN KLEIN SPEL · NR. 05", "EIN KLEINES SPIEL · NR. 05", "UN PETIT JEU · N° 05", "UN JUEGO PEQUEÑO · N.º 05"],
        ["A LITTLE GAME · NO. 06", "EEN KLEIN SPEL · NR. 06", "EIN KLEINES SPIEL · NR. 06", "UN PETIT JEU · N° 06", "UN JUEGO PEQUEÑO · N.º 06"],
        ["A LITTLE GAME · NO. 07", "EEN KLEIN SPEL · NR. 07", "EIN KLEINES SPIEL · NR. 07", "UN PETIT JEU · N° 07", "UN JUEGO PEQUEÑO · N.º 07"],
        ["1 picture · mixed", "1 afbeelding · gemengd", "1 Bild · gemischt", "1 image · mélangé", "1 imagen · variada"],
        ["pictures · mixed", "afbeeldingen · gemengd", "Bilder · gemischt", "images · mélangées", "imágenes · variadas"],
        ["questions · mixed", "vragen · gemengd", "Fragen · gemischt", "questions · mélangées", "preguntas · variadas"],
        ["questions", "vragen", "Fragen", "questions", "preguntas"],
        ["pictures", "afbeeldingen", "Bilder", "images", "imágenes"],
        ["Mix every subject", "Alle onderwerpen door elkaar", "Alle Themen gemischt", "Tous les sujets mélangés", "Mezcla de todos los temas"],
        ["Wildlife & nature", "Dieren en natuur", "Tiere und Natur", "Faune et nature", "Fauna y naturaleza"],
        ["Things on the menu", "Van alles op het menu", "Alles auf der Speisekarte", "Au menu", "Cosas del menú"],
        ["How the world works", "Hoe de wereld werkt", "Wie die Welt funktioniert", "Comment fonctionne le monde", "Cómo funciona el mundo"],
        ["Places & planet Earth", "Plekken en planeet Aarde", "Orte und der Planet Erde", "Lieux et planète Terre", "Lugares y planeta Tierra"],
        ["People & moments", "Mensen en momenten", "Menschen und Momente", "Personnes et moments", "Personas y momentos"],
        ["Games & competition", "Spel en competitie", "Spiele und Wettbewerb", "Jeux et compétition", "Juegos y competición"],
        ["Stories on screen", "Verhalen op het scherm", "Geschichten auf dem Bildschirm", "Histoires à l’écran", "Historias en pantalla"],
        ["Inventions & computers", "Uitvindingen en computers", "Erfindungen und Computer", "Inventions et informatique", "Inventos y ordenadores"],
        ["Our solar system & beyond", "Ons zonnestelsel en verder", "Unser Sonnensystem und darüber hinaus", "Notre système solaire et au-delà", "Nuestro sistema solar y más allá"],
        ["Clear links and familiar answers", "Duidelijke verbanden en bekende antwoorden", "Klare Zusammenhänge und bekannte Antworten", "Liens évidents et réponses familières", "Relaciones claras y respuestas conocidas"],
        ["Look for the less obvious connection", "Zoek naar het minder voor de hand liggende verband", "Suche nach dem weniger offensichtlichen Zusammenhang", "Cherche le lien moins évident", "Busca la relación menos evidente"],
        ["Take your time and think it through", "Neem de tijd en denk goed na", "Lass dir Zeit und denk gründlich nach", "Prends ton temps et réfléchis bien", "Tómate tu tiempo y piénsalo bien"],
        ["A perfect run. You saw right through every lie.", "Een perfecte ronde. Je prikte door elke leugen heen.", "Perfekte Runde. Du hast jede Lüge durchschaut.", "Une partie parfaite. Tu as démasqué tous les mensonges.", "Una partida perfecta. Descubriste todas las mentiras."],
        ["Sharp instincts. You caught most of the fibs.", "Scherpe intuïtie. Je had de meeste leugens door.", "Guter Instinkt. Du hast die meisten Lügen erkannt.", "Bon instinct. Tu as repéré presque tous les mensonges.", "Buen instinto. Descubriste casi todas las mentiras."],
        ["A few facts caught you out. Now you know something new.", "Een paar feiten verrasten je. Weer iets nieuws geleerd.", "Ein paar Fakten haben dich erwischt. Wieder etwas gelernt.", "Quelques faits t’ont surpris. Tu as appris quelque chose.", "Algunos datos te sorprendieron. Has aprendido algo nuevo."],
        ["The next round is another chance to catch the lie.", "In de volgende ronde kun je de leugen weer ontmaskeren.", "In der nächsten Runde kannst du die Lüge wieder entlarven.", "La prochaine manche sera l’occasion de démasquer le mensonge.", "En la siguiente ronda podrás descubrir la mentira."],
        ["Every statement includes a source so you can keep exploring.", "Bij elke uitspraak staat een bron om verder te ontdekken.", "Zu jeder Aussage gibt es eine Quelle zum Weiterlesen.", "Chaque affirmation cite une source pour continuer à explorer.", "Cada afirmación incluye una fuente para seguir explorando."],
        ["Every outline landed in the right place. That's a world-class run.", "Elke omtrek stond op de juiste plek. Dat was een wereldronde.", "Jeder Umriss am richtigen Ort. Eine weltmeisterliche Runde.", "Chaque contour au bon endroit. Une partie de classe mondiale.", "Cada silueta en su lugar. Una partida de categoría mundial."],
        ["You know your way around a map. Nicely done.", "Jij weet de weg op de kaart. Goed gedaan.", "Du kennst dich auf der Karte aus. Gut gemacht.", "Tu sais te repérer sur une carte. Bravo.", "Sabes orientarte en un mapa. Muy bien."],
        ["A few coastlines were tricky. You're getting there.", "Een paar kustlijnen waren lastig. Je komt er wel.", "Ein paar Küstenlinien waren knifflig. Du bist auf dem richtigen Weg.", "Quelques côtes étaient difficiles. Tu progresses.", "Algunas costas eran complicadas. Vas mejorando."],
        ["Every outline is a new place to learn.", "Elke omtrek is een nieuwe plek om te leren kennen.", "Jeder Umriss ist ein neuer Ort, den du kennenlernen kannst.", "Chaque contour est un nouveau lieu à découvrir.", "Cada silueta es un lugar nuevo por descubrir."],
        ["One of these doesn't belong.", "Eén hoort er niet bij.", "Eines davon passt nicht dazu.", "L’un d’eux n’a rien à faire là.", "Uno de estos no encaja."],
        ["The other three are fruits; a carrot is a vegetable.", "De andere drie zijn fruit; een wortel is een groente.", "Die anderen drei sind Früchte; eine Karotte ist ein Gemüse.", "Les trois autres sont des fruits ; une carotte est un légume.", "Las otras tres son frutas; la zanahoria es una verdura."],
        ["Question", "Vraag", "Frage", "Question", "Pregunta"],
        ["questions · no repeats in a run", "vragen · geen herhaling in een spel", "Fragen · keine Wiederholungen pro Runde", "questions · sans répétition par partie", "preguntas · sin repetir en cada partida"],
        ["questions in a run", "vragen per spel", "Fragen pro Runde", "questions par partie", "preguntas por partida"],
        ["curated puzzles ·", "geselecteerde puzzels ·", "kuratierte Rätsel ·", "énigmes choisies ·", "acertijos seleccionados ·"],
        ["per game", "per spel", "pro Spiel", "par partie", "por partida"],
        ["countries in this selection", "landen in deze selectie", "Länder in dieser Auswahl", "pays dans cette sélection", "países en esta selección"],
        ["tries left", "pogingen over", "Versuche übrig", "essais restants", "intentos restantes"],
        ["Hints used:", "Hints gebruikt:", "Tipps verwendet:", "Indices utilisés :", "Pistas usadas:"],
        ["No more hints", "Geen hints meer", "Keine Tipps mehr", "Plus d’indices", "No hay más pistas"],
        ["Type a country name before submitting.", "Typ eerst een landnaam voordat je antwoord geeft.", "Gib vor dem Absenden einen Ländernamen ein.", "Saisis un nom de pays avant de répondre.", "Escribe el nombre de un país antes de enviar."],
        ["Continent:", "Continent:", "Kontinent:", "Continent :", "Continente:"],
        ["Name clue:", "Naamhint:", "Namenshinweis:", "Indice sur le nom :", "Pista del nombre:"],
        ["The answer was:", "Het antwoord was:", "Die Antwort war:", "La réponse était :", "La respuesta era:"],
        ["Correct!", "Goed!", "Richtig!", "Correct !", "¡Correcto!"],
        ["Not quite. One try left — take another look.", "Niet helemaal. Nog één poging — kijk nog eens goed.", "Nicht ganz. Noch ein Versuch – schau noch einmal genau hin.", "Pas tout à fait. Un essai reste — regarde encore.", "No exactamente. Te queda un intento; vuelve a mirar."],
        ["Every round is a new pattern to spot. Keep going.", "Elke ronde heeft een nieuw patroon. Blijf doorgaan.", "In jeder Runde gibt es ein neues Muster. Weiter so.", "Chaque manche révèle un nouveau motif. Continue.", "Cada ronda trae un patrón nuevo. Sigue así."],
        ["The connections get easier to spot with each run.", "De verbanden worden met elke ronde makkelijker te zien.", "Mit jeder Runde werden die Zusammenhänge leichter zu erkennen.", "Les liens deviennent plus faciles à repérer à chaque partie.", "Las conexiones son más fáciles de ver en cada partida."],
        ["Pixel-perfect.", "Pixelperfect.", "Pixelgenau.", "Au pixel près.", "Perfecto al píxel."],
        ["Sharp eyes.", "Scherpe ogen.", "Gute Augen.", "Quel œil !", "¡Qué vista!"],
        ["You found your focus.", "Je hebt je focus gevonden.", "Du hast den Fokus gefunden.", "Tu as trouvé ton objectif.", "Encontraste tu enfoque."],
        ["The pixels won this round.", "De pixels wonnen deze ronde.", "Die Pixel haben diese Runde gewonnen.", "Les pixels ont gagné cette manche.", "Los píxeles ganaron esta ronda."],
        ["How spicy?", "Hoe pittig?", "Wie knifflig?", "Quel piquant ?", "¿Qué tal de difícil?"],
        ["Your final score:", "Je eindscore:", "Dein Endstand:", "Ton score final :", "Tu puntuación final:"],
        ["See results", "Bekijk resultaten", "Ergebnisse ansehen", "Voir les résultats", "Ver resultados"],
        ["The patterns fought back.", "De patronen sloegen terug.", "Die Muster haben sich gewehrt.", "Les motifs ont résisté.", "Los patrones se defendieron."],
        ["A new personal best!", "Een nieuw persoonlijk record!", "Ein neuer persönlicher Rekord!", "Nouveau record personnel !", "¡Nuevo récord personal!"],
        ["Pattern pro.", "Patroonexpert.", "Musterprofi.", "Pro des motifs.", "Experto en patrones."],
        ["Nicely figured out.", "Goed opgelost.", "Gut durchschaut.", "Bien trouvé.", "Bien resuelto."],
        ["A few good catches.", "Een paar goede vondsten.", "Ein paar gute Treffer.", "Quelques belles trouvailles.", "Unos cuantos aciertos."],
        ["11 playable · 00 coming soon", "11 speelbaar · 00 binnenkort", "11 spielbar · 00 demnächst", "11 disponibles · 00 bientôt", "11 jugables · 00 próximamente"],
        ["1 MIN", "1 MIN", "1 MIN", "1 MIN", "1 MIN"],
        ["2 MIN", "2 MIN", "2 MIN", "2 MIN", "2 MIN"],
        ["3 MIN", "3 MIN", "3 MIN", "3 MIN", "3 MIN"],
        ["Adult body weight", "Volwassen lichaamsgewicht", "Körpergewicht ausgewachsener Tiere", "Poids adulte", "Peso corporal adulto"],
        ["Which country has more people?", "Welk land heeft meer inwoners?", "Welches Land hat mehr Einwohner?", "Quel pays est le plus peuplé ?", "¿Qué país tiene más habitantes?"],
        ["Which object weighs more?", "Welk voorwerp weegt meer?", "Welcher Gegenstand wiegt mehr?", "Quel objet pèse le plus ?", "¿Qué objeto pesa más?"],
        ["Which game sold more copies?", "Van welk spel zijn meer exemplaren verkocht?", "Welches Spiel wurde häufiger verkauft?", "Quel jeu s’est le plus vendu ?", "¿Qué juego vendió más copias?"],
        ["Which stadium holds more people?", "In welk stadion passen meer mensen?", "Welches Stadion hat mehr Plätze?", "Quel stade peut accueillir le plus de personnes ?", "¿Qué estadio tiene más capacidad?"],
        ["Which platform has more users?", "Welk platform heeft meer gebruikers?", "Welche Plattform hat mehr Nutzer?", "Quelle plateforme compte le plus d’utilisateurs ?", "¿Qué plataforma tiene más usuarios?"],
        ["Animal one", "Dier één", "Tier eins", "Animal un", "Animal uno"],
        ["Animal two", "Dier twee", "Tier zwei", "Animal deux", "Animal dos"],
        ["VS", "TEGEN", "GEGEN", "VS", "VS"],
        ["Pick a color family.", "Kies een kleurfamilie.", "Wähle eine Farbfamilie.", "Choisis une famille de couleurs.", "Elige una familia de colores."],
        ["All Families", "Alle kleurfamilies", "Alle Farbfamilien", "Toutes les familles", "Todas las familias"],
        ["Which statement is a lie?", "Welke uitspraak is gelogen?", "Welche Aussage ist gelogen?", "Quelle affirmation est fausse ?", "¿Qué afirmación es mentira?"],
        ["Read all three, then choose one.", "Lees ze alle drie en kies er één.", "Lies alle drei und wähle dann eine aus.", "Lis les trois, puis choisis-en une.", "Lee las tres y luego elige una."],
        ["THAT'S A WRAP", "DAT WAS 'M", "DAS WAR'S", "C’EST TERMINÉ", "FIN DE LA PARTIDA"],
        ["Nice run.", "Mooie ronde.", "Guter Lauf.", "Belle partie.", "Buena partida."],
        ["Every statement includes a source so you can keep exploring.", "Bij elke uitspraak staat een bron om verder te ontdekken.", "Zu jeder Aussage gibt es eine Quelle zum Weiterlesen.", "Chaque affirmation cite une source pour continuer à explorer.", "Cada afirmación incluye una fuente para seguir explorando."],
        ["180 curated puzzles · 10 per game", "180 zorgvuldig gekozen puzzels · 10 per spel", "180 ausgewählte Rätsel · 10 pro Spiel", "180 énigmes sélectionnées · 10 par partie", "180 acertijos seleccionados · 10 por partida"],
        ["NUMBER PATTERNS", "GETALPATRONEN", "ZAHLENMUSTER", "SUITES DE NOMBRES", "PATRONES NUMÉRICOS"],
        ["ALL PUZZLES", "ALLE PUZZELS", "ALLE RÄTSEL", "TOUTES LES ÉNIGMES", "TODOS LOS ACERTIJOS"],
        ["ALL DIFFICULTIES", "ALLE MOEILIJKHEDEN", "ALLE SCHWIERIGKEITSGRADE", "TOUTES LES DIFFICULTÉS", "TODAS LAS DIFICULTADES"],
        ["ALL CATEGORIES", "ALLE CATEGORIEËN", "ALLE KATEGORIEN", "TOUTES LES CATÉGORIES", "TODAS LAS CATEGORÍAS"],
        ["About the map data", "Over de kaartgegevens", "Über die Kartendaten", "À propos des données cartographiques", "Sobre los datos del mapa"],
        ["Silhouettes are generated from Natural Earth 1:50m country boundaries. Dependent territories and Antarctica are excluded. Taiwan follows Natural Earth’s country classification; Israel and Palestine are included as named country records. Distant overseas components are omitted so the main outline stays legible.", "De silhouetten zijn gemaakt op basis van landsgrenzen van Natural Earth op schaal 1:50m. Afhankelijke gebieden en Antarctica zijn uitgesloten. Taiwan volgt de landenindeling van Natural Earth; Israël en Palestina zijn opgenomen als landen. Verafgelegen overzeese gebieden zijn weggelaten zodat de hoofdvorm goed zichtbaar blijft.", "Die Silhouetten basieren auf den Ländergrenzen von Natural Earth im Maßstab 1:50m. Abhängige Gebiete und die Antarktis sind ausgeschlossen. Taiwan folgt der Ländereinteilung von Natural Earth; Israel und Palästina sind als Länder enthalten. Entfernte Überseegebiete wurden ausgelassen, damit der Hauptumriss gut erkennbar bleibt.", "Les silhouettes sont générées à partir des frontières nationales Natural Earth au 1:50m. Les territoires dépendants et l’Antarctique sont exclus. Taïwan suit la classification de Natural Earth ; Israël et la Palestine sont inclus comme pays. Les territoires d’outre-mer éloignés sont omis pour préserver la lisibilité du contour principal.", "Las siluetas se generan a partir de las fronteras nacionales de Natural Earth a escala 1:50m. Se excluyen los territorios dependientes y la Antártida. Taiwán sigue la clasificación de países de Natural Earth; Israel y Palestina se incluyen como países. Se omiten los territorios de ultramar lejanos para que el contorno principal sea claro."],
        ["Creator not stated", "Maker niet vermeld", "Urheber nicht angegeben", "Créateur non indiqué", "Creador no indicado"],
        ["Image source page", "Bronpagina van de afbeelding", "Bildquellenseite", "Page source de l’image", "Página de origen de la imagen"],
        ["View license", "Licentie bekijken", "Lizenz ansehen", "Voir la licence", "Ver licencia"],
        ["IMAGE REVEALED", "AFBEELDING ONTHULD", "BILD AUFGEDECKT", "IMAGE RÉVÉLÉE", "IMAGEN REVELADA"],
        ["SKIP PICTURE", "AFBEELDING OVERSLAAN", "BILD ÜBERSPRINGEN", "PASSER L’IMAGE", "SALTAR IMAGEN"],
        ["SEE YOUR RESULTS", "BEKIJK JE RESULTATEN", "ERGEBNISSE ANSEHEN", "VOIR TES RÉSULTATS", "VER TUS RESULTADOS"],
        ["A hint is always optional. Two misses make it easier to spot.", "Een hint is altijd optioneel. Na twee missers wordt het makkelijker.", "Ein Tipp ist optional. Nach zwei Fehlversuchen wird es leichter.", "L’indice est facultatif. Après deux erreurs, ce sera plus facile.", "La pista es opcional. Tras dos fallos será más fácil."],
        ["Look closely at the shape and context in the picture.", "Let goed op de vorm en context van de afbeelding.", "Achte genau auf Form und Kontext des Bildes.", "Observe bien la forme et le contexte de l’image.", "Fíjate bien en la forma y el contexto de la imagen."],
        ["Word pattern:", "Woordpatroon:", "Wortmuster:", "Motif des mots :", "Patrón de palabras:"],
        ["The first letters are", "De eerste letters zijn", "Die Anfangsbuchstaben sind", "Les premières lettres sont", "Las primeras letras son"],
        ["Out of tries.", "Geen pogingen meer.", "Keine Versuche mehr.", "Plus d’essais.", "Sin más intentos."],
        ["Correct! Nice eyes. 👀", "Goed gezien! 👀", "Gut gesehen! 👀", "Bien vu ! 👀", "¡Bien visto! 👀"],
        ["Not quite! It was", "Niet helemaal! Het was", "Nicht ganz! Es war", "Pas tout à fait ! C’était", "¡No exactamente! Era"],
        ["Ouch. That was unlucky.", "Oei. Dat zat niet mee.", "Autsch. Das war Pech.", "Aïe. Pas de chance.", "Vaya. Qué mala suerte."],
        ["Okay, you have good eyes!", "Oké, jij hebt goede ogen!", "Okay, du hast gute Augen!", "Eh bien, tu as l’œil !", "¡Vaya, tienes buena vista!"],
        ["You cleared the whole list!", "Je hebt de hele lijst gehaald!", "Du hast die ganze Liste geschafft!", "Tu as terminé toute la liste !", "¡Completaste toda la lista!"],
        ["Game over!", "Spel afgelopen!", "Spiel vorbei!", "Fin de la partie !", "¡Fin de la partida!"],
        ["You scored {score} points.", "Je scoorde {score} punten.", "Du hast {score} Punkte erzielt.", "Tu as marqué {score} points.", "Conseguiste {score} puntos."],
        ["You got {score} points.", "Je haalde {score} punten.", "Du hast {score} Punkte erreicht.", "Tu as obtenu {score} points.", "Conseguiste {score} puntos."],
        ["Theme", "Thema", "Design", "Thème", "Tema"],
        ["Light", "Licht", "Hell", "Clair", "Claro"],
        ["Dark Mode", "Donkere modus", "Dunkelmodus", "Mode sombre", "Modo oscuro"],
        ["Warm Paper", "Warm papier", "Warmes Papier", "Papier chaud", "Papel cálido"],
        ["Midnight Blue", "Middernachtblauw", "Mitternachtsblau", "Bleu nuit", "Azul medianoche"],
        ["Today's Challenge", "Uitdaging van vandaag", "Heutige Herausforderung", "Défi du jour", "Desafío de hoy"],
        ["Daily Streak", "Dagelijkse reeks", "Tages-Serie", "Série quotidienne", "Racha diaria"],
        ["Play Challenge →", "Speel uitdaging →", "Herausforderung spielen →", "Jouer le défi →", "Jugar desafío →"],
        ["Play Challenge", "Speel de uitdaging", "Herausforderung spielen", "Jouer le défi", "Jugar el desafío"],
        ["Completed today ✓", "Vandaag voltooid ✓", "Heute geschafft ✓", "Terminé aujourd’hui ✓", "Completado hoy ✓"],
        ["Daily Challenge Completed!", "Dagelijkse uitdaging voltooid!", "Tagesherausforderung geschafft!", "Défi quotidien terminé !", "¡Desafío diario completado!"],
        ["Back to homepage →", "Terug naar de homepage →", "Zur Startseite →", "Retour à l’accueil →", "Volver al inicio →"],
        ["Open today's game →", "Open het spel van vandaag →", "Heutiges Spiel öffnen →", "Ouvrir le jeu du jour →", "Abrir el juego de hoy →"],
        ["Your progress will appear here.", "Je voortgang verschijnt hier.", "Dein Fortschritt erscheint hier.", "Ta progression apparaîtra ici.", "Tu progreso aparecerá aquí."],
        ["Progress could not be saved in this browser.", "Je voortgang kon niet in deze browser worden opgeslagen.", "Dein Fortschritt konnte in diesem Browser nicht gespeichert werden.", "La progression n’a pas pu être enregistrée dans ce navigateur.", "No se pudo guardar tu progreso en este navegador."],
        ["Your average so far: {progress} ms (target: {target} ms).", "Je gemiddelde tot nu toe: {progress} ms (doel: {target} ms).", "Dein bisheriger Durchschnitt: {progress} ms (Ziel: {target} ms).", "Ta moyenne actuelle : {progress} ms (objectif : {target} ms).", "Tu promedio hasta ahora: {progress} ms (objetivo: {target} ms)."],
        ["{progress} / {target} completed.", "{progress} / {target} voltooid.", "{progress} / {target} geschafft.", "{progress} / {target} terminés.", "{progress} / {target} completados."],
        ["Guess the Color", "Raad de kleur", "Errate die Farbe", "Devine la couleur", "Adivina el color"],
        ["Higher or Lower", "Hoger of lager", "Höher oder niedriger", "Plus ou moins", "Más o menos"],
        ["Pixel Guess", "Pixelraadsel", "Pixel-Rätsel", "Devine le pixel", "Adivina el píxel"],
        ["Odd One Out", "Zoek de vreemde eend", "Finde den Außenseiter", "L’intrus", "Encuentra el intruso"],
        ["Two Truths, One Lie", "Twee waarheden, één leugen", "Zwei Wahrheiten, eine Lüge", "Deux vérités, un mensonge", "Dos verdades y una mentira"],
        ["What's Next?", "Wat komt hierna?", "Wie geht es weiter?", "Et ensuite ?", "¿Qué sigue?"],
        ["Where Am I?", "Waar ben ik?", "Wo bin ich?", "Où suis-je ?", "¿Dónde estoy?"],
        ["Flag Quiz", "Vlaggenquiz", "Flaggenquiz", "Quiz des drapeaux", "Concurso de banderas"],
        ["Reflex", "Reflex", "Reflex", "Réflexes", "Reflejos"],
        ["Sequence", "Volgorde", "Sequenz", "Séquence", "Secuencia"],
        ["Sort It", "Sorteer maar", "Sortier das", "À trier", "Ordénalo"],
        ["Score at least 7 in Guess the Color.", "Haal minstens 7 punten in Raad de kleur.", "Erreiche mindestens 7 Punkte in Errate die Farbe.", "Obtiens au moins 7 points dans Devine la couleur.", "Consigue al menos 7 puntos en Adivina el color."],
        ["Make 7 correct guesses in Higher or Lower.", "Raad 7 keer goed in Hoger of lager.", "Rate 7-mal richtig in Höher oder niedriger.", "Fais 7 bonnes réponses dans Plus ou moins.", "Acierta 7 veces en Más o menos."],
        ["Identify 3 pictures in Pixel Guess.", "Herken 3 afbeeldingen in Pixelraadsel.", "Erkenne 3 Bilder in Pixel-Rätsel.", "Identifie 3 images dans Devine le pixel.", "Identifica 3 imágenes en Adivina el píxel."],
        ["Answer 7 questions correctly in Odd One Out.", "Beantwoord 7 vragen goed in Zoek de vreemde eend.", "Beantworte 7 Fragen in Finde den Außenseiter richtig.", "Réponds correctement à 7 questions dans L’intrus.", "Responde correctamente 7 preguntas en Encuentra el intruso."],
        ["Find 7 lies in Two Truths, One Lie.", "Vind 7 leugens in Twee waarheden, één leugen.", "Finde 7 Lügen in Zwei Wahrheiten, eine Lüge.", "Trouve 7 mensonges dans Deux vérités, un mensonge.", "Encuentra 7 mentiras en Dos verdades y una mentira."],
        ["Solve 7 puzzles in What's Next?", "Los 7 puzzels op in Wat komt hierna?", "Löse 7 Rätsel in Wie geht es weiter?", "Résous 7 énigmes dans Et ensuite ?", "Resuelve 7 acertijos en ¿Qué sigue?"],
        ["Identify 7 countries in Where Am I?", "Herken 7 landen in Waar ben ik?", "Erkenne 7 Länder in Wo bin ich?", "Identifie 7 pays dans Où suis-je ?", "Identifica 7 países en ¿Dónde estoy?"],
        ["Name 8 flags correctly in Flag Quiz.", "Noem 8 vlaggen goed in de Vlaggenquiz.", "Benenne 8 Flaggen im Flaggenquiz richtig.", "Nomme correctement 8 drapeaux dans le quiz.", "Acierta 8 banderas en el concurso."],
        ["Average 300 ms or faster across 5 rounds.", "Haal gemiddeld 300 ms of sneller over 5 rondes.", "Erreiche über 5 Runden durchschnittlich 300 ms oder schneller.", "Obtiens une moyenne de 300 ms ou moins sur 5 manches.", "Consigue una media de 300 ms o menos en 5 rondas."],
        ["Reach Level 8 in Sequence.", "Bereik level 8 in Volgorde.", "Erreiche Level 8 in Sequenz.", "Atteins le niveau 8 dans Séquence.", "Llega al nivel 8 en Secuencia."],
        ["Complete 4 tasks in Sort It.", "Voltooi 4 opdrachten in Sorteer maar.", "Schließe 4 Aufgaben in Sortier das ab.", "Termine 4 défis dans À trier.", "Completa 4 pruebas en Ordénalo."],
        ["Just Because Passport", "Just Because-paspoort", "Just-Because-Pass", "Passeport Just Because", "Pasaporte Just Because"],
        ["Profile", "Profiel", "Profil", "Profil", "Perfil"],
        ["Avatars & Badges", "Avatars en badges", "Avatare & Abzeichen", "Avatars et badges", "Avatares e insignias"],
        ["Friends", "Vrienden", "Freunde", "Amis", "Amigos"],
        ["Close", "Sluiten", "Schließen", "Fermer", "Cerrar"],
        ["Edit your profile", "Bewerk je profiel", "Profil bearbeiten", "Modifier ton profil", "Editar tu perfil"],
        ["Player name", "Spelersnaam", "Spielername", "Nom du joueur", "Nombre del jugador"],
        ["Choose a title", "Kies een titel", "Titel auswählen", "Choisir un titre", "Elige un título"],
        ["Curious Player", "Nieuwsgierige speler", "Neugieriger Spieler", "Joueur curieux", "Jugador curioso"],
        ["Game Explorer", "Spellenontdekker", "Spiele-Entdecker", "Explorateur de jeux", "Explorador de juegos"],
        ["Record Chaser", "Recordjager", "Rekordjäger", "Chasseur de records", "Cazador de récords"],
        ["Daily Regular", "Dagelijkse speler", "Tages-Stammgast", "Habitué du jour", "Jugador diario"],
        ["Streak Keeper", "Reeksbewaker", "Serien-Hüter", "Gardien de série", "Guardián de rachas"],
        ["Save Profile", "Profiel opslaan", "Profil speichern", "Enregistrer le profil", "Guardar perfil"],
        ["Statistics", "Statistieken", "Statistiken", "Statistiques", "Estadísticas"],
        ["Games played", "Gespeelde spellen", "Gespielte Spiele", "Jeux joués", "Juegos jugados"],
        ["Personal Bests", "Persoonlijke records", "Persönliche Bestwerte", "Records personnels", "Récords personales"],
        ["Daily streak", "Dagelijkse reeks", "Tages-Serie", "Série quotidienne", "Racha diaria"],
        ["Personal best", "Persoonlijk record", "Persönlicher Bestwert", "Record personnel", "Récord personal"],
        ["No record yet", "Nog geen record", "Noch kein Bestwert", "Pas encore de record", "Aún no hay récord"],
        ["Badge Collection", "Badgeverzameling", "Abzeichen-Sammlung", "Collection de badges", "Colección de insignias"],
        ["Unlocked", "Vrijgespeeld", "Freigeschaltet", "Débloqué", "Desbloqueado"],
        ["Locked", "Vergrendeld", "Gesperrt", "Verrouillé", "Bloqueado"],
        ["{game} Badge", "Badge {game}", "Abzeichen: {game}", "Badge {game}", "Insignia de {game}"],
        ["Set a personal best in {game}.", "Behaal een persoonlijk record in {game}.", "Stelle einen persönlichen Bestwert in {game} auf.", "Bats ton record personnel dans {game}.", "Consigue un récord personal en {game}."],
        ["First Steps", "Eerste stappen", "Erste Schritte", "Premiers pas", "Primeros pasos"],
        ["Play your first game.", "Speel je eerste spel.", "Spiele dein erstes Spiel.", "Joue à ton premier jeu.", "Juega tu primer juego."],
        ["Full House", "Complete collectie", "Volles Haus", "Collection complète", "Colección completa"],
        ["Play all 11 games.", "Speel alle 11 spellen.", "Spiele alle 11 Spiele.", "Joue aux 11 jeux.", "Juega a los 11 juegos."],
        ["Record Collector", "Recordverzamelaar", "Rekord-Sammler", "Collectionneur de records", "Coleccionista de récords"],
        ["Set personal bests in 3 different games.", "Behaal records in 3 verschillende spellen.", "Stelle Bestwerte in 3 verschiedenen Spielen auf.", "Bats ton record dans 3 jeux différents.", "Consigue récords en 3 juegos distintos."],
        ["Daily Challenger", "Dagelijkse uitdager", "Tages-Herausforderer", "Défi quotidien", "Desafío diario"],
        ["Complete a Daily Challenge.", "Voltooi een Daily Challenge.", "Schließe eine Tagesherausforderung ab.", "Termine un défi quotidien.", "Completa un desafío diario."],
        ["Weeklong Streak", "Weekreeks", "Wochenserie", "Série d’une semaine", "Racha semanal"],
        ["Keep a Daily Streak of 7 or more.", "Houd een Daily Streak van 7 of hoger.", "Halte eine Tages-Serie von mindestens 7.", "Garde une série quotidienne d’au moins 7 jours.", "Mantén una racha diaria de 7 o más."],
        ["Choose an avatar", "Kies een avatar", "Avatar auswählen", "Choisir un avatar", "Elige un avatar"],
        ["Free avatar", "Gratis avatar", "Kostenloser Avatar", "Avatar gratuit", "Avatar gratis"],
        ["Locked · {requirement}", "Vergrendeld · {requirement}", "Gesperrt · {requirement}", "Verrouillé · {requirement}", "Bloqueado · {requirement}"],
        ["Play 3 different games", "Speel 3 verschillende spellen", "Spiele 3 verschiedene Spiele", "Joue à 3 jeux différents", "Juega a 3 juegos distintos"],
        ["Play all 11 games", "Speel alle 11 spellen", "Spiele alle 11 Spiele", "Joue aux 11 jeux", "Juega a los 11 juegos"],
        ["Earn 3 personal bests", "Behaal 3 persoonlijke records", "Erreiche 3 persönliche Bestwerte", "Obtiens 3 records personnels", "Consigue 3 récords personales"],
        ["Get 1 personal best", "Behaal 1 persoonlijk record", "Erreiche einen persönlichen Bestwert", "Obtiens un record personnel", "Consigue un récord personal"],
        ["Complete a Daily Challenge", "Voltooi een Daily Challenge", "Schließe eine Tagesherausforderung ab", "Termine un défi quotidien", "Completa un desafío diario"],
        ["Keep a 7-day streak", "Houd een reeks van 7 dagen vol", "Halte eine Serie von 7 Tagen", "Garde une série de 7 jours", "Mantén una racha de 7 días"],
        ["Play 5 different games", "Speel 5 verschillende spellen", "Spiele 5 verschiedene Spiele", "Joue à 5 jeux différents", "Juega a 5 juegos distintos"],
        ["Complete 3 Daily Challenges", "Voltooi 3 Daily Challenges", "Schließe 3 Tagesherausforderungen ab", "Termine 3 défis quotidiens", "Completa 3 desafíos diarios"],
        ["Cat", "Kat", "Katze", "Chat", "Gato"],
        ["Fox", "Vos", "Fuchs", "Renard", "Zorro"],
        ["Frog", "Kikker", "Frosch", "Grenouille", "Rana"],
        ["Panda", "Panda", "Panda", "Panda", "Panda"],
        ["Penguin", "Pinguïn", "Pinguin", "Manchot", "Pingüino"],
        ["Octopus", "Octopus", "Oktopus", "Pieuvre", "Pulpo"],
        ["Rocket", "Raket", "Rakete", "Fusée", "Cohete"],
        ["Owl", "Uil", "Eule", "Hibou", "Búho"],
        ["Unicorn", "Eenhoorn", "Einhorn", "Licorne", "Unicornio"],
        ["Lion", "Leeuw", "Löwe", "Lion", "León"],
        ["Dragon", "Draak", "Drache", "Dragon", "Dragón"],
        ["Butterfly", "Vlinder", "Schmetterling", "Papillon", "Mariposa"],
        ["Mushroom", "Paddenstoel", "Pilz", "Champignon", "Seta"],
        ["Alien", "Alien", "Alien", "Alien", "Alien"],
        ["Upload your own image", "Upload je eigen afbeelding", "Eigenes Bild hochladen", "Importer ta propre image", "Sube tu propia imagen"],
        ["Choose image", "Kies afbeelding", "Bild auswählen", "Choisir une image", "Elegir imagen"],
        ["Image ready · resized to 128 × 128 px.", "Afbeelding klaar · verkleind naar 128 × 128 px.", "Bild bereit · auf 128 × 128 px verkleinert.", "Image prête · réduite à 128 × 128 px.", "Imagen lista · reducida a 128 × 128 px."],
        ["Choose a supported image file.", "Kies een ondersteund afbeeldingsbestand.", "Wähle eine unterstützte Bilddatei.", "Choisis un fichier image compatible.", "Elige un archivo de imagen compatible."],
        ["Unable to process this image.", "Deze afbeelding kan niet worden verwerkt.", "Dieses Bild kann nicht verarbeitet werden.", "Impossible de traiter cette image.", "No se puede procesar esta imagen."],
        ["Friend code", "Vriendencode", "Freundescode", "Code ami", "Código de amigo"],
        ["Copy code", "Code kopiëren", "Code kopieren", "Copier le code", "Copiar código"],
        ["Invite link", "Uitnodigingslink", "Einladungslink", "Lien d’invitation", "Enlace de invitación"],
        ["Copy invite link", "Uitnodigingslink kopiëren", "Einladungslink kopieren", "Copier le lien d’invitation", "Copiar enlace de invitación"],
        ["Add a friend", "Voeg een vriend toe", "Freund hinzufügen", "Ajouter un ami", "Añadir amigo"],
        ["Enter a code or invite link", "Vul een code of uitnodigingslink in", "Code oder Einladungslink eingeben", "Saisis un code ou un lien d’invitation", "Introduce un código o enlace de invitación"],
        ["Add friend", "Vriend toevoegen", "Freund hinzufügen", "Ajouter", "Añadir amigo"],
        ["Your friends", "Jouw vrienden", "Deine Freunde", "Tes amis", "Tus amigos"],
        ["No friends added yet.", "Je hebt nog geen vrienden toegevoegd.", "Du hast noch keine Freunde hinzugefügt.", "Tu n’as pas encore ajouté d’amis.", "Aún no has añadido amigos."],
        ["1v1 Battle (Multiplayer Soon)", "1-tegen-1 (multiplayer binnenkort)", "1-gegen-1 (Mehrspieler bald)", "Duel 1 contre 1 (multijoueur bientôt)", "Duelo 1 contra 1 (multijugador pronto)"],
        ["Remove friend", "Vriend verwijderen", "Freund entfernen", "Retirer l’ami", "Eliminar amigo"],
        ["Friend added.", "Vriend toegevoegd.", "Freund hinzugefügt.", "Ami ajouté.", "Amigo añadido."],
        ["That player is already on your list.", "Deze speler staat al in je lijst.", "Dieser Spieler steht bereits auf deiner Liste.", "Ce joueur est déjà dans ta liste.", "Ese jugador ya está en tu lista."],
        ["You cannot add your own code.", "Je kunt je eigen code niet toevoegen.", "Du kannst deinen eigenen Code nicht hinzufügen.", "Tu ne peux pas ajouter ton propre code.", "No puedes añadir tu propio código."],
        ["Enter a valid friend code or invite link.", "Vul een geldige vriendencode of uitnodigingslink in.", "Gib einen gültigen Freundescode oder Einladungslink ein.", "Saisis un code ami ou un lien d’invitation valide.", "Introduce un código de amigo o enlace válido."],
        ["Friend code copied.", "Vriendencode gekopieerd.", "Freundescode kopiert.", "Code ami copié.", "Código de amigo copiado."],
        ["Invite link copied.", "Uitnodigingslink gekopieerd.", "Einladungslink kopiert.", "Lien d’invitation copié.", "Enlace de invitación copiado."],
        ["Copy failed. Select and copy the link manually.", "Kopiëren mislukt. Selecteer en kopieer de link handmatig.", "Kopieren fehlgeschlagen. Markiere und kopiere den Link manuell.", "Copie impossible. Sélectionne et copie le lien manuellement.", "No se pudo copiar. Selecciona y copia el enlace manualmente."],
        ["Friend invitation detected. Add this player.", "Vrienduitnodiging herkend. Voeg deze speler toe.", "Freundeseinladung erkannt. Füge diesen Spieler hinzu.", "Invitation d’ami détectée. Ajoute ce joueur.", "Invitación detectada. Añade a este jugador."],
        ["Your profile could not be saved in this browser.", "Je profiel kon niet in deze browser worden opgeslagen.", "Dein Profil konnte in diesem Browser nicht gespeichert werden.", "Ton profil n’a pas pu être enregistré dans ce navigateur.", "No se pudo guardar tu perfil en este navegador."],
        ["Profile saved.", "Profiel opgeslagen.", "Profil gespeichert.", "Profil enregistré.", "Perfil guardado."],
        ["The player name must be between 1 and 20 characters.", "De spelersnaam moet 1 tot 20 tekens lang zijn.", "Der Spielername muss 1 bis 20 Zeichen lang sein.", "Le nom du joueur doit contenir de 1 à 20 caractères.", "El nombre debe tener entre 1 y 20 caracteres."],
        ["Player", "Speler", "Spieler", "Joueur", "Jugador"],
        ["Your image", "Jouw afbeelding", "Dein Bild", "Ton image", "Tu imagen"],
        ["Profile sections", "Profielonderdelen", "Profilbereiche", "Sections du profil", "Secciones del perfil"],
        ["Your profile and friends stay on this device.", "Je profiel en vriendenlijst blijven op dit apparaat.", "Dein Profil und deine Freundesliste bleiben auf diesem Gerät.", "Ton profil et ta liste d’amis restent sur cet appareil.", "Tu perfil y tu lista de amigos se guardan en este dispositivo."],
        ["Player {code}", "Speler {code}", "Spieler {code}", "Joueur {code}", "Jugador {code}"],
        ["Image must be 10 MB or smaller.", "De afbeelding mag maximaal 10 MB zijn.", "Das Bild darf höchstens 10 MB groß sein.", "L’image doit faire 10 Mo ou moins.", "La imagen debe ocupar 10 MB o menos."],
        ["Share my Passport", "Deel mijn paspoort", "Teile meinen Pass", "Partager mon passeport", "Compartir mi pasaporte"],
        ["Passport message copied.", "Uitnodigingsbericht gekopieerd.", "Einladungsnachricht kopiert.", "Message d’invitation copié.", "Mensaje de invitación copiado."],
        ["Added {name} to your friends!", "{name} is toegevoegd aan je vrienden!", "{name} wurde deinen Freunden hinzugefügt!", "Tu as ajouté {name} à ta liste d’amis !", "¡{name} se añadió a tus amigos!"],
        ["Hey! Add me on Just Because Games! I'm {name} (friend code {code}). Join me: {link}", "Hoi! Voeg me toe op Just Because Games! Ik ben {name} (vriendencode {code}). Doe mee: {link}", "Hey! Füge mich bei Just Because Games hinzu! Ich bin {name} (Freundescode {code}). Mach mit: {link}", "Salut ! Ajoute-moi sur Just Because Games ! Je suis {name} (code ami {code}). Rejoins-moi : {link}", "¡Hola! ¡Añádeme en Just Because Games! Soy {name} (código de amigo {code}). Únete: {link}"]
    ];
    const languageCodes = languages.map(language => language.code);
    const messages = Object.fromEntries(languageCodes.map((code, index) => [
        code,
        Object.fromEntries(rows.map(row => [row[0].replace(/\s+/g, " ").trim(), row[index]]))
    ]));
    const catalog = Object.create(null);
    const menuFlags = {
        en: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#17336b"/><path d="M0 0l24 16M24 0L0 16" stroke="#fff" stroke-width="4"/><path d="M0 0l24 16M24 0L0 16" stroke="#c8102e" stroke-width="1.5"/><path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="6"/><path d="M12 0v16M0 8h24" stroke="#c8102e" stroke-width="3"/></svg>',
        nl: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#ae1c28"/><rect y="5.33" width="24" height="5.34" fill="#fff"/><rect y="10.66" width="24" height="5.34" fill="#21468b"/></svg>',
        de: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#111"/><rect y="5.33" width="24" height="5.34" fill="#d00"/><rect y="10.66" width="24" height="5.34" fill="#ffce00"/></svg>',
        fr: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="8" height="16" fill="#002395"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#ed2939"/></svg>',
        es: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="4" fill="#aa151b"/><rect y="4" width="24" height="8" fill="#f1bf00"/><rect y="12" width="24" height="4" fill="#aa151b"/></svg>'
    };
    const lastText = new WeakMap();
    const lastAttributes = new WeakMap();
    let activeLanguage = "en";

    function normalize(value) {
        return String(value || "").replace(/\s+/g, " ").trim();
    }

    function translate(key, fallback, values) {
        const normalizedKey = normalize(key);
        const entry = catalog[normalizedKey];
        let result = messages[activeLanguage][normalizedKey]
            || (entry && entry[activeLanguage])
            || (fallback === undefined ? normalizedKey : fallback);
        for (const [name, value] of Object.entries(values || {})) {
            result = result.replaceAll(`{${name}}`, String(value));
        }
        return result;
    }

    function registerCatalog(entries) {
        for (const [key, translations] of Object.entries(entries || {})) {
            catalog[normalize(key)] = translations;
        }
    }

    function shouldSkipTextNode(node) {
        const parent = node.parentElement;
        return !parent
            || !normalize(node.nodeValue)
            || parent.closest("script, style, noscript, svg, [data-i18n-skip]")
            || parent.closest("[data-language-switcher]");
    }

    function annotateTextNodes(root) {
        if (!root) return;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        for (const node of nodes) {
            if (shouldSkipTextNode(node)) continue;
            const parent = node.parentElement;
            const text = node.nodeValue;
            if (parent.dataset.i18n) {
                if (lastText.get(parent) !== parent.textContent) {
                    parent.dataset.i18n = normalize(parent.textContent);
                }
                continue;
            }
            if (parent.children.length === 0 || parent.tagName === "OPTION") {
                parent.dataset.i18n = normalize(text);
                parent.dataset.i18nPrefix = (text.match(/^\s*/) || [""])[0];
                parent.dataset.i18nSuffix = (text.match(/\s*$/) || [""])[0];
            } else {
                const wrapper = document.createElement("bdi");
                wrapper.dataset.i18n = normalize(text);
                wrapper.dataset.i18nPrefix = (text.match(/^\s*/) || [""])[0];
                wrapper.dataset.i18nSuffix = (text.match(/\s*$/) || [""])[0];
                wrapper.textContent = text;
                node.replaceWith(wrapper);
            }
        }
        annotateAttributes(root);
    }

    function annotateAttributes(root) {
        if (!root.querySelectorAll) return;
        const nodes = [root, ...root.querySelectorAll("[placeholder], [aria-label], [title], [alt]")];
        for (const element of nodes) {
            if (!(element instanceof Element)) continue;
            for (const attribute of ["placeholder", "aria-label", "title", "alt"]) {
                const value = element.getAttribute(attribute);
                if (!value) continue;
                const key = `i18n${attribute.replace(/(^|-)(\w)/g, (_, __, letter) => letter.toUpperCase())}`;
                const previous = lastAttributes.get(element)?.[attribute];
                if (!element.dataset[key] || previous !== value) element.dataset[key] = normalize(value);
            }
        }
    }

    let translationApplicationInProgress = false;

    function applyTranslations(root = document) {
        if (!root) return;
        if (translationApplicationInProgress) return;
        translationApplicationInProgress = true;
        try {
            annotateTextNodes(root);
            const elements = selector => [
                ...(root instanceof Element && root.matches(selector) ? [root] : []),
                ...root.querySelectorAll(selector)
            ];
            elements("[data-i18n]").forEach(element => {
                const translated = translate(
                    element.dataset.i18n,
                    element.dataset.i18n,
                    {}
                );
                const value = `${element.dataset.i18nPrefix || ""}${translated}${element.dataset.i18nSuffix || ""}`;
                if (element.textContent !== value) element.textContent = value;
                lastText.set(element, element.textContent);
            });
            const attributes = ["placeholder", "aria-label", "title", "alt"];
            elements("[data-i18n-placeholder], [data-i18n-aria-label], [data-i18n-title], [data-i18n-alt]").forEach(element => {
                const rendered = {};
                for (const attribute of attributes) {
                    const key = `i18n${attribute.replace(/(^|-)(\w)/g, (_, __, letter) => letter.toUpperCase())}`;
                    if (!element.dataset[key]) continue;
                    const value = translate(element.dataset[key], element.dataset[key]);
                    element.setAttribute(attribute, value);
                    rendered[attribute] = value;
                }
                lastAttributes.set(element, rendered);
            });
            elements("meta[data-i18n-content]").forEach(element => {
                const translated = translate(element.dataset.i18nContent, element.dataset.i18nContent);
                if (element.content !== translated) element.content = translated;
            });
        } finally {
            translationApplicationInProgress = false;
        }
    }

    function flagMarkup(code) {
        return menuFlags[code];
    }

    function createLanguageSwitcher(container) {
        container.classList.add("language-switcher");
        container.innerHTML = `
            <button class="language-trigger" type="button" aria-label="${translate("Choose language")}" aria-expanded="false" aria-haspopup="menu">
                <svg class="language-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>
                <span class="language-caption"></span>
            </button>
            <div class="language-menu" role="menu" hidden></div>`;
        const button = container.querySelector(".language-trigger");
        const caption = container.querySelector(".language-caption");
        const menu = container.querySelector(".language-menu");

        for (const language of languages) {
            const option = document.createElement("button");
            option.type = "button";
            option.className = "language-option";
            option.setAttribute("role", "menuitemradio");
            option.dataset.language = language.code;
            option.innerHTML = `${flagMarkup(language.code)}<span>${language.label}</span>`;
            option.addEventListener("click", () => {
                setLanguage(language.code);
                menu.hidden = true;
                button.setAttribute("aria-expanded", "false");
            });
            menu.append(option);
        }

        button.addEventListener("click", () => {
            menu.hidden = !menu.hidden;
            button.setAttribute("aria-expanded", String(!menu.hidden));
        });
        container.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                menu.hidden = true;
                button.setAttribute("aria-expanded", "false");
                button.focus();
            }
        });
        document.addEventListener("click", event => {
            if (!container.contains(event.target)) {
                menu.hidden = true;
                button.setAttribute("aria-expanded", "false");
            }
        });
        container._refreshLanguageLabel = () => {
            caption.textContent = languages.find(language => language.code === activeLanguage).name;
            button.setAttribute("aria-label", translate("Choose language"));
            container.querySelectorAll(".language-option").forEach(option => {
                option.setAttribute("aria-checked", String(option.dataset.language === activeLanguage));
            });
        };
        container._refreshLanguageLabel();
    }

    function setLanguage(code) {
        if (!languageCodes.includes(code)) return;
        try {
            localStorage.setItem("jb_lang", code);
        } catch {
            // Language selection remains available for the current page view.
        }
        if (code === activeLanguage) return;
        activeLanguage = code;
        document.documentElement.lang = code;
        applyTranslations(document);
        document.querySelectorAll("[data-language-switcher]").forEach(container => container._refreshLanguageLabel?.());
        window.dispatchEvent(new CustomEvent("jb:languagechange", { detail: { language: code } }));
    }

    try {
        const savedLanguage = localStorage.getItem("jb_lang");
        if (languageCodes.includes(savedLanguage)) activeLanguage = savedLanguage;
    } catch {
        activeLanguage = "en";
    }

    window.JB_I18N = {
        get language() {
            return activeLanguage;
        },
        t: translate,
        registerCatalog
    };

    function initialize() {
        document.documentElement.lang = activeLanguage;
        document.querySelectorAll("[data-language-switcher]").forEach(createLanguageSwitcher);
        applyTranslations(document);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
        initialize();
    }
})();
