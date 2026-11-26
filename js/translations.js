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
        ["08 playable · 03 coming soon", "8 speelbaar · 3 binnenkort", "8 spielbar · 3 demnächst", "8 disponibles · 3 bientôt", "8 jugables · 3 próximamente"],
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
        ["Random games, weird ideas and absolutely no reason. Just pick something and have a go.", "Willekeurige spelletjes, vreemde ideeën en absoluut geen reden. Kies iets en probeer het.", "Zufällige Spiele, schräge Ideen und absolut kein Grund. Such dir etwas aus und probier es aus.", "Des jeux au hasard, des idées bizarres et aucune raison. Choisis quelque chose et essaie.", "Juegos al azar, ideas raras y ningún motivo. Elige algo y pruébalo."],
        ["Find something to do", "Zoek iets om te doen", "Finde etwas zu tun", "Trouve quelque chose à faire", "Encuentra algo que hacer"],
        ["No productivity guaranteed.", "Productiviteit niet gegarandeerd.", "Produktivität nicht garantiert.", "Productivité non garantie.", "Productividad no garantizada."],
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
        ["Sequence", "Volgorde", "Sequenz", "Séquence", "Secuencia"],
        ["Remember the sequence and repeat it correctly.", "Onthoud de volgorde en herhaal die goed.", "Merke dir die Reihenfolge und wiederhole sie richtig.", "Mémorise la séquence et répète-la correctement.", "Memoriza la secuencia y repítela correctamente."],
        ["Sort It", "Sorteer maar", "Sortier das", "À trier", "Ordénalo"],
        ["Sort things in the right order. Can you get them all right?", "Zet alles in de juiste volgorde. Krijg je ze allemaal goed?", "Bring alles in die richtige Reihenfolge. Schaffst du alles?", "Mets tout dans le bon ordre. Peux-tu tout réussir ?", "Ordena todo correctamente. ¿Puedes acertarlas todas?"],
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
        ["07 playable · 04 coming soon", "07 speelbaar · 04 binnenkort", "07 spielbar · 04 demnächst", "07 jouables · 04 bientôt", "07 disponibles · 04 próximamente"],
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
        ["You got {score} points.", "Je haalde {score} punten.", "Du hast {score} Punkte erreicht.", "Tu as obtenu {score} points.", "Conseguiste {score} puntos."]
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
