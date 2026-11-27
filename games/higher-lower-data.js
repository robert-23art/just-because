
// =========================================================
// JUST BECAUSE — HIGHER OR LOWER DATA
// Each category compares one consistent type of statistic.
// =========================================================

const HIGHER_LOWER_DATA = {

    // ANIMALS — adult body mass in kilograms
    animals: {
    name: "Animal weight",
        metric: "Adult body weight",
        question: "Which animal weighs more?",
        unit: "kg",
        items: [
            { name: "Asian elephant", value: 3269.8 },
            { name: "White rhinoceros", value: 2285.9 },
            { name: "Black rhinoceros", value: 995.9 },
            { name: "Giraffe", value: 964.7 },
            { name: "American bison", value: 624.6 },
            { name: "Moose", value: 461.9 },
            { name: "Polar bear", value: 371.7 },
            { name: "Brown bear", value: 196.3 },
            { name: "Lowland tapir", value: 169.5 },
            { name: "Tiger", value: 161.9 },
            { name: "Lion", value: 158.6 },
            { name: "Giant panda", value: 118 },
            { name: "Western gorilla", value: 112.6 },
            { name: "American black bear", value: 110.5 },
            { name: "Reindeer", value: 109.1 },
            { name: "Asian black bear", value: 99.7 }
        ]
    },

    // COUNTRIES — 2026 population projections, in millions
   countries: {
    name: "Country population",
        metric: "Population",
        question: "Which country has more people?",
        unit: "million people",
        items: [
            { name: "India", value: 1476.6 },
            { name: "China", value: 1412.9 },
            { name: "United States", value: 349.0 },
            { name: "Indonesia", value: 287.9 },
            { name: "Pakistan", value: 259.3 },
            { name: "Nigeria", value: 242.4 },
            { name: "Brazil", value: 213.6 },
            { name: "Bangladesh", value: 177.8 },
            { name: "Russia", value: 143.4 },
            { name: "Ethiopia", value: 138.9 },
            { name: "Mexico", value: 133.0 },
            { name: "Japan", value: 122.4 },
            { name: "Egypt", value: 120.1 }
        ]
    },

    // EVERYDAY THINGS — typical weight in grams
    everyday: {
    name: "Object weight",
        metric: "Typical weight",
        question: "Which object weighs more?",
        unit: "g",
        items: [
            { name: "Car battery", value: 17000 },
            { name: "Car tyre", value: 8500 },
            { name: "Brick", value: 3600 },
            { name: "Laptop", value: 1600 },
            { name: "Tablet", value: 470 },
            { name: "Book", value: 400 },
            { name: "Smartphone", value: 190 },
            { name: "2 euro coin", value: 8.5 },
            { name: "A4 sheet of paper", value: 5 },
            { name: "1 cent coin", value: 2.3 },
            { name: "Euro banknote", value: 1 }
        ]
    },

    // GAMING — reported copies sold, in millions
   gaming: {
    name: "Game sales",
        metric: "Copies sold",
        question: "Which game sold more copies?",
        unit: "million copies",
        items: [
            { name: "Minecraft", value: 425 },
            { name: "Grand Theft Auto V", value: 230 },
            { name: "Red Dead Redemption 2", value: 89 },
            { name: "Wii Sports", value: 82.79 },
            { name: "Mario Kart 8 / Deluxe", value: 80.46 },
            { name: "PUBG: Battlegrounds", value: 75 },
            { name: "Terraria", value: 70 },
            { name: "The Elder Scrolls V: Skyrim", value: 65 },
            { name: "Human: Fall Flat", value: 58 },
            { name: "Animal Crossing: New Horizons", value: 50.63 }
        ]
    },

    // SPORTS — stadium capacity in people
    sport: {
    name: "Stadium capacity",
        metric: "Stadium capacity",
        question: "Which stadium holds more people?",
        unit: "seats",
        items: [
            { name: "Narendra Modi Stadium", value: 132000 },
            { name: "Rungrado 1st of May Stadium", value: 113281 },
            { name: "Michigan Stadium", value: 107600 },
            { name: "Beaver Stadium", value: 106304 },
            { name: "Ohio Stadium", value: 102780 },
            { name: "Kyle Field", value: 102733 },
            { name: "Tiger Stadium", value: 102321 },
            { name: "Neyland Stadium", value: 101915 },
            { name: "Darrell K Royal–Texas Memorial Stadium", value: 100119 },
            { name: "Bryant–Denny Stadium", value: 100077 },
            { name: "Melbourne Cricket Ground", value: 100024 },
            { name: "Wembley Stadium", value: 90000 },
            { name: "Old Trafford", value: 74158 },
            { name: "Camp Nou", value: 62652 }
        ]
    },

    // INTERNET — monthly active users, in millions
    internet: {
    name: "Social media users",
        metric: "Monthly active users",
        question: "Which platform has more monthly active users?",
        unit: "million users",
        items: [
            { name: "Facebook", value: 3070 },
            { name: "Instagram", value: 3000 },
            { name: "WeChat", value: 1410 },
            { name: "Telegram", value: 1000 },
            { name: "Snapchat", value: 932 },
            { name: "Douyin", value: 728 },
            { name: "Kuaishou", value: 715 },
            { name: "Weibo", value: 588 },
            { name: "Pinterest", value: 578 },
            { name: "QQ", value: 532 }
        ]
    }

};

const HIGHER_LOWER_CATALOG = {};
const higherLowerTranslations = {
    nl: {
        category: {
            mixed: "Van alles een beetje", animals: "Diergewicht", countries: "Bevolking van landen",
            everyday: "Gewicht van voorwerpen", gaming: "Gameverkoop", sport: "Stadioncapaciteit",
            internet: "Gebruikers van sociale media"
        },
        metric: {
            animals: "Lichaamsgewicht van volwassen dieren", countries: "Bevolking",
            everyday: "Gemiddeld gewicht", gaming: "Verkochte exemplaren",
            sport: "Stadioncapaciteit", internet: "Maandelijks actieve gebruikers"
        },
        question: {
            animals: "Welk dier weegt meer?", countries: "In welk land wonen meer mensen?",
            everyday: "Welk voorwerp weegt meer?", gaming: "Van welk spel zijn meer exemplaren verkocht?",
            sport: "In welk stadion passen meer mensen?",
            internet: "Welk platform heeft meer maandelijks actieve gebruikers?"
        },
        item: {
            animals: ["Aziatische olifant", "Witte neushoorn", "Zwarte neushoorn", "Giraf", "Amerikaanse bizon", "Eland", "IJsbeer", "Bruine beer", "Laaglandtapir", "Tijger", "Leeuw", "Reuzenpanda", "Westelijke gorilla", "Amerikaanse zwarte beer", "Rendier", "Aziatische zwarte beer"],
            countries: ["India", "China", "Verenigde Staten", "Indonesië", "Pakistan", "Nigeria", "Brazilië", "Bangladesh", "Rusland", "Ethiopië", "Mexico", "Japan", "Egypte"],
            everyday: ["Autoaccu", "Autoband", "Baksteen", "Laptop", "Tablet", "Boek", "Smartphone", "Munt van 2 euro", "A4-vel papier", "Munt van 1 cent", "Eurobankbiljet"],
            gaming: ["Minecraft", "Grand Theft Auto V", "Red Dead Redemption 2", "Wii Sports", "Mario Kart 8 / Deluxe", "PUBG: Battlegrounds", "Terraria", "The Elder Scrolls V: Skyrim", "Human: Fall Flat", "Animal Crossing: New Horizons"],
            sport: ["Narendra Modi Stadium", "Rungrado 1st of May Stadium", "Michigan Stadium", "Beaver Stadium", "Ohio Stadium", "Kyle Field", "Tiger Stadium", "Neyland Stadium", "Darrell K Royal–Texas Memorial Stadium", "Bryant–Denny Stadium", "Melbourne Cricket Ground", "Wembley Stadium", "Old Trafford", "Camp Nou"],
            internet: ["Facebook", "Instagram", "WeChat", "Telegram", "Snapchat", "Douyin", "Kuaishou", "Weibo", "Pinterest", "QQ"]
        }
    },
    de: {
        category: {
            mixed: "Von allem etwas", animals: "Tiergewicht", countries: "Einwohnerzahl",
            everyday: "Gewicht von Gegenständen", gaming: "Spielverkäufe", sport: "Stadionkapazität",
            internet: "Nutzer sozialer Medien"
        },
        metric: {
            animals: "Körpergewicht ausgewachsener Tiere", countries: "Einwohnerzahl",
            everyday: "Typisches Gewicht", gaming: "Verkaufte Exemplare",
            sport: "Stadionkapazität", internet: "Monatlich aktive Nutzer"
        },
        question: {
            animals: "Welches Tier wiegt mehr?", countries: "In welchem Land leben mehr Menschen?",
            everyday: "Welcher Gegenstand wiegt mehr?", gaming: "Von welchem Spiel wurden mehr Exemplare verkauft?",
            sport: "In welches Stadion passen mehr Menschen?",
            internet: "Welche Plattform hat mehr monatlich aktive Nutzer?"
        },
        item: {
            animals: ["Asiatischer Elefant", "Breitmaulnashorn", "Spitzmaulnashorn", "Giraffe", "Amerikanischer Bison", "Elch", "Eisbär", "Braunbär", "Flachlandtapir", "Tiger", "Löwe", "Großer Panda", "Westlicher Gorilla", "Amerikanischer Schwarzbär", "Rentier", "Asiatischer Schwarzbär"],
            countries: ["Indien", "China", "Vereinigte Staaten", "Indonesien", "Pakistan", "Nigeria", "Brasilien", "Bangladesch", "Russland", "Äthiopien", "Mexiko", "Japan", "Ägypten"],
            everyday: ["Autobatterie", "Autoreifen", "Ziegelstein", "Laptop", "Tablet", "Buch", "Smartphone", "2-Euro-Münze", "A4-Blatt Papier", "1-Cent-Münze", "Eurobanknote"],
            gaming: ["Minecraft", "Grand Theft Auto V", "Red Dead Redemption 2", "Wii Sports", "Mario Kart 8 / Deluxe", "PUBG: Battlegrounds", "Terraria", "The Elder Scrolls V: Skyrim", "Human: Fall Flat", "Animal Crossing: New Horizons"],
            sport: ["Narendra Modi Stadium", "Rungrado 1st of May Stadium", "Michigan Stadium", "Beaver Stadium", "Ohio Stadium", "Kyle Field", "Tiger Stadium", "Neyland Stadium", "Darrell K Royal–Texas Memorial Stadium", "Bryant–Denny Stadium", "Melbourne Cricket Ground", "Wembley Stadium", "Old Trafford", "Camp Nou"],
            internet: ["Facebook", "Instagram", "WeChat", "Telegram", "Snapchat", "Douyin", "Kuaishou", "Weibo", "Pinterest", "QQ"]
        }
    },
    fr: {
        category: {
            mixed: "Un peu de tout", animals: "Poids des animaux", countries: "Population des pays",
            everyday: "Poids des objets", gaming: "Ventes de jeux", sport: "Capacité des stades",
            internet: "Utilisateurs des réseaux sociaux"
        },
        metric: {
            animals: "Poids adulte", countries: "Population",
            everyday: "Poids habituel", gaming: "Exemplaires vendus",
            sport: "Capacité du stade", internet: "Utilisateurs actifs mensuels"
        },
        question: {
            animals: "Quel animal pèse le plus ?", countries: "Dans quel pays y a-t-il le plus d’habitants ?",
            everyday: "Quel objet pèse le plus ?", gaming: "Quel jeu a vendu le plus d’exemplaires ?",
            sport: "Quel stade peut accueillir le plus de personnes ?",
            internet: "Quelle plateforme compte le plus d’utilisateurs actifs mensuels ?"
        },
        item: {
            animals: ["Éléphant d’Asie", "Rhinocéros blanc", "Rhinocéros noir", "Girafe", "Bison d’Amérique", "Élan", "Ours polaire", "Ours brun", "Tapir des plaines", "Tigre", "Lion", "Panda géant", "Gorille de l’Ouest", "Ours noir d’Amérique", "Renne", "Ours noir d’Asie"],
            countries: ["Inde", "Chine", "États-Unis", "Indonésie", "Pakistan", "Nigeria", "Brésil", "Bangladesh", "Russie", "Éthiopie", "Mexique", "Japon", "Égypte"],
            everyday: ["Batterie de voiture", "Pneu de voiture", "Brique", "Ordinateur portable", "Tablette", "Livre", "Smartphone", "Pièce de 2 euros", "Feuille A4", "Pièce de 1 centime", "Billet en euros"],
            gaming: ["Minecraft", "Grand Theft Auto V", "Red Dead Redemption 2", "Wii Sports", "Mario Kart 8 / Deluxe", "PUBG: Battlegrounds", "Terraria", "The Elder Scrolls V: Skyrim", "Human: Fall Flat", "Animal Crossing: New Horizons"],
            sport: ["Narendra Modi Stadium", "Rungrado 1st of May Stadium", "Michigan Stadium", "Beaver Stadium", "Ohio Stadium", "Kyle Field", "Tiger Stadium", "Neyland Stadium", "Darrell K Royal–Texas Memorial Stadium", "Bryant–Denny Stadium", "Melbourne Cricket Ground", "Wembley Stadium", "Old Trafford", "Camp Nou"],
            internet: ["Facebook", "Instagram", "WeChat", "Telegram", "Snapchat", "Douyin", "Kuaishou", "Weibo", "Pinterest", "QQ"]
        }
    },
    es: {
        category: {
            mixed: "Un poco de todo", animals: "Peso de los animales", countries: "Población de los países",
            everyday: "Peso de objetos", gaming: "Ventas de videojuegos", sport: "Aforo de estadios",
            internet: "Usuarios de redes sociales"
        },
        metric: {
            animals: "Peso corporal adulto", countries: "Población",
            everyday: "Peso habitual", gaming: "Copias vendidas",
            sport: "Aforo del estadio", internet: "Usuarios activos mensuales"
        },
        question: {
            animals: "¿Qué animal pesa más?", countries: "¿En qué país vive más gente?",
            everyday: "¿Qué objeto pesa más?", gaming: "¿Qué juego ha vendido más copias?",
            sport: "¿Qué estadio puede acoger a más personas?",
            internet: "¿Qué plataforma tiene más usuarios activos mensuales?"
        },
        item: {
            animals: ["Elefante asiático", "Rinoceronte blanco", "Rinoceronte negro", "Jirafa", "Bisonte americano", "Alce", "Oso polar", "Oso pardo", "Tapir de tierras bajas", "Tigre", "León", "Panda gigante", "Gorila occidental", "Oso negro americano", "Reno", "Oso negro asiático"],
            countries: ["India", "China", "Estados Unidos", "Indonesia", "Pakistán", "Nigeria", "Brasil", "Bangladés", "Rusia", "Etiopía", "México", "Japón", "Egipto"],
            everyday: ["Batería de coche", "Neumático", "Ladrillo", "Portátil", "Tableta", "Libro", "Teléfono inteligente", "Moneda de 2 euros", "Hoja A4", "Moneda de 1 céntimo", "Billete de euro"],
            gaming: ["Minecraft", "Grand Theft Auto V", "Red Dead Redemption 2", "Wii Sports", "Mario Kart 8 / Deluxe", "PUBG: Battlegrounds", "Terraria", "The Elder Scrolls V: Skyrim", "Human: Fall Flat", "Animal Crossing: New Horizons"],
            sport: ["Narendra Modi Stadium", "Rungrado 1st of May Stadium", "Michigan Stadium", "Beaver Stadium", "Ohio Stadium", "Kyle Field", "Tiger Stadium", "Neyland Stadium", "Darrell K Royal–Texas Memorial Stadium", "Bryant–Denny Stadium", "Melbourne Cricket Ground", "Wembley Stadium", "Old Trafford", "Camp Nou"],
            internet: ["Facebook", "Instagram", "WeChat", "Telegram", "Snapchat", "Douyin", "Kuaishou", "Weibo", "Pinterest", "QQ"]
        }
    }
};

const higherLowerCategoryIds = Object.keys(HIGHER_LOWER_DATA);
for (const [language, translations] of Object.entries(higherLowerTranslations)) {
    for (const [id, label] of Object.entries(translations.category)) {
        HIGHER_LOWER_CATALOG[`hl.category.${id}`] ||= {};
        HIGHER_LOWER_CATALOG[`hl.category.${id}`][language] = label;
    }
    for (const id of higherLowerCategoryIds) {
        HIGHER_LOWER_CATALOG[`hl.metric.${id}`] ||= {};
        HIGHER_LOWER_CATALOG[`hl.metric.${id}`][language] = translations.metric[id];
        HIGHER_LOWER_CATALOG[`hl.question.${id}`] ||= {};
        HIGHER_LOWER_CATALOG[`hl.question.${id}`][language] = translations.question[id];
        translations.item[id].forEach((label, index) => {
            const key = `hl.item.${id}.${index}`;
            HIGHER_LOWER_CATALOG[key] ||= {};
            HIGHER_LOWER_CATALOG[key][language] = label;
        });
    }
}

const higherLowerUiTranslations = {
    "hl.ui.backHome": ["← Terug naar start", "← Zur Startseite", "← Retour à l’accueil", "← Volver al inicio"],
    "hl.ui.eyebrow": ["EEN KLEIN SPEL · NR. 02", "EIN KLEINES SPIEL · NR. 02", "UN PETIT JEU · N° 02", "UN JUEGO PEQUEÑO · N.º 02"],
    "hl.ui.title": ["Hoger of lager?", "Höher oder niedriger?", "Plus ou moins ?", "¿Más o menos?"],
    "hl.ui.intro": ["Denk je dat je goed bent met getallen? Laten we dat testen.", "Kennst du dich mit Zahlen aus? Finden wir es heraus.", "Tu connais les nombres ? Vérifions ça.", "¿Se te dan bien los números? Vamos a comprobarlo."],
    "hl.ui.start": ["BEGIN MET SPELEN", "SPIEL STARTEN", "JOUER", "EMPEZAR A JUGAR"],
    "hl.ui.yourChoice": ["JOUW KEUZE", "DEINE WAHL", "TON CHOIX", "TU ELECCIÓN"],
    "hl.ui.pickCategory": ["Kies een categorie.", "Wähle eine Kategorie.", "Choisis une catégorie.", "Elige una categoría."],
    "hl.ui.random": ["↻ Willekeurig", "↻ Zufall", "↻ Au hasard", "↻ Aleatorio"],
    "hl.ui.categoryNote": ["Kun je niet kiezen? Laat het lot beslissen.", "Du kannst dich nicht entscheiden? Überlass es dem Zufall.", "Indécis ? Laisse le hasard choisir.", "¿No te decides? Deja que el azar elija."],
    "hl.ui.personalBest": ["JOUW PERSOONLIJK RECORD", "DEIN PERSÖNLICHER REKORD", "TON RECORD PERSONNEL", "TU RÉCORD PERSONAL"],
    "hl.ui.highScore": ["TOPSCORE", "HIGHSCORE", "RECORD", "RÉCORD"],
    "hl.ui.highScoreNote": ["Je beste score op dit apparaat.", "Dein bester Punktestand auf diesem Gerät.", "Ton meilleur score sur cet appareil.", "Tu mejor puntuación en este dispositivo."],
    "hl.ui.score": ["SCORE:", "PUNKTE:", "SCORE :", "PUNTOS:"],
    "hl.ui.current": ["HUIDIG", "AKTUELL", "ACTUEL", "ACTUAL"],
    "hl.ui.next": ["VOLGENDE", "ALS NÄCHSTES", "SUIVANT", "SIGUIENTE"],
    "hl.ui.versus": ["TEGEN", "GEGEN", "CONTRE", "CONTRA"],
    "hl.ui.higher": ["Hoger ↑", "Höher ↑", "Plus ↑", "Más ↑"],
    "hl.ui.lower": ["Lager ↓", "Niedriger ↓", "Moins ↓", "Menos ↓"],
    "hl.ui.playAgain": ["OPNIEUW SPELEN", "NOCHMAL SPIELEN", "REJOUER", "VOLVER A JUGAR"],
    "hl.ui.backSettings": ["← Terug naar instellingen", "← Zurück zu den Einstellungen", "← Retour aux réglages", "← Volver a los ajustes"],
    "hl.ui.randomPick": ["WILLEKEURIGE KEUZE", "ZUFALLSAUSWAHL", "CHOIX AU HASARD", "ELECCIÓN ALEATORIA"],
    "hl.ui.correct": ["Goed! {item} is {direction}.", "Richtig! {item} liegt {direction}.", "Bien ! {item} est {direction}.", "¡Correcto! {item} es {direction}."],
    "hl.ui.incorrect": ["Niet helemaal! Het juiste antwoord was {direction}.", "Nicht ganz! Die richtige Antwort war {direction}.", "Pas tout à fait ! La bonne réponse était {direction}.", "¡No exactamente! La respuesta correcta era {direction}."],
    "hl.ui.directionHigher": ["hoger", "höher", "plus élevé", "más alto"],
    "hl.ui.directionLower": ["lager", "niedriger", "moins élevé", "más bajo"],
    "hl.ui.clearedTitle": ["Je hebt de hele lijst gehaald!", "Du hast die ganze Liste geschafft!", "Vous avez terminé toute la liste !", "¡Has completado toda la lista!"],
    "hl.ui.clearedMessage": ["Geweldig! Je had alle {score} vergelijkingen goed.", "Fantastisch! Du hast alle {score} Vergleiche richtig beantwortet.", "Incroyable ! Vous avez réussi les {score} comparaisons.", "¡Increíble! Has acertado las {score} comparaciones."],
    "hl.ui.gameOver": ["Game over!", "Spiel vorbei!", "Fin de la partie !", "¡Fin de la partida!"],
    "hl.ui.finalSingular": ["Je scoorde {score} punt. Volgende keer beter!", "Du hast {score} Punkt erzielt. Viel Glück beim nächsten Mal!", "Vous avez marqué {score} point. Bonne chance la prochaine fois !", "Conseguiste {score} punto. ¡Más suerte la próxima vez!"],
    "hl.ui.finalPlural": ["Je scoorde {score} punten. Volgende keer beter!", "Du hast {score} Punkte erzielt. Viel Glück beim nächsten Mal!", "Vous avez marqué {score} points. Bonne chance la prochaine fois !", "Conseguiste {score} puntos. ¡Más suerte la próxima vez!"],
    "hl.ui.madeForNoReason": ["gemaakt zonder bijzondere reden.", "ohne besonderen Grund gemacht.", "créé sans raison particulière.", "hecho sin ningún motivo en particular."]
};

const higherLowerLanguages = ["nl", "de", "fr", "es"];
for (const [key, translations] of Object.entries(higherLowerUiTranslations)) {
    HIGHER_LOWER_CATALOG[key] = Object.fromEntries(
        higherLowerLanguages.map((language, index) => [language, translations[index]])
    );
}

if (window.JB_I18N) window.JB_I18N.registerCatalog(HIGHER_LOWER_CATALOG);
