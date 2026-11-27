(() => {
    "use strict";

    const payload = window.WHERE_AM_I_DATA;
    const countries = payload?.countries || [];
    const regions = [
        ["all", "All Countries", "A little of the whole world"],
        ["Europe", "Europe", "From the Atlantic to the Urals"],
        ["Asia", "Asia", "Across the world's largest region"],
        ["Africa", "Africa", "54 countries, one continent"],
        ["North America", "North America", "Including Central America & the Caribbean"],
        ["South America", "South America", "From the Andes to the Atlantic"],
        ["Oceania", "Oceania", "Islands and the world's smallest continent"]
    ];
    const difficulties = [["all", "All difficulties"], ["easy", "Easy"], ["medium", "Medium"], ["hard", "Hard"]];
    const difficultyCaption = { all: "A little of everything", easy: "Recognizable country shapes", medium: "Look a little closer", hard: "Smaller or less familiar outlines" };
    const $ = id => document.getElementById(`wai-${id}`);
    const el = {
        setup:$("setup"), regions:$("region-grid"), difficulties:$("difficulty-options"), difficultyCaption:$("difficulty-caption"), poolNote:$("pool-note"), setupMessage:$("setup-message"), start:$("start"), best:$("best"), bestLabel:$("best-label"),
        game:$("game"), roundRegion:$("round-region"), roundDifficulty:$("round-difficulty"), round:$("round"), score:$("score"), streak:$("streak"), shape:$("country-shape"), attempts:$("attempts"), hintsUsed:$("hints-used"), hint:$("hint"), hintCount:$("hint-count"), hintList:$("hint-list"), answerForm:$("answer-form"), answer:$("answer"), submit:$("submit"), answerHelp:$("answer-help"), feedback:$("feedback"), feedbackMark:$("feedback-mark"), feedbackTitle:$("feedback-title"), points:$("points"), feedbackText:$("feedback-text"), next:$("next"), quit:$("quit"),
        results:$("results"), resultTitle:$("result-title"), finalScore:$("final-score"), correct:$("correct"), wrong:$("wrong"), accuracy:$("accuracy"), bestStreak:$("best-streak"), resultMessage:$("result-message"), playAgain:$("play-again"), back:$("back")
    };
    const localized = {
        nl: {
            "Afghanistan":"Afghanistan","Albania":"Albanië","Algeria":"Algerije","Andorra":"Andorra","Angola":"Angola","Antigua and Barbuda":"Antigua en Barbuda","Argentina":"Argentinië","Armenia":"Armenië","Australia":"Australië","Austria":"Oostenrijk","Azerbaijan":"Azerbeidzjan","Bahrain":"Bahrein","Bangladesh":"Bangladesh","Barbados":"Barbados","Belarus":"Wit-Rusland","Belgium":"België","Belize":"Belize","Benin":"Benin","Bhutan":"Bhutan","Bolivia":"Bolivia","Bosnia and Herzegovina":"Bosnië en Herzegovina","Botswana":"Botswana","Brazil":"Brazilië","Brunei":"Brunei","Bulgaria":"Bulgarije","Burkina Faso":"Burkina Faso","Burundi":"Burundi","Cambodia":"Cambodja","Cameroon":"Kameroen","Canada":"Canada","Cape Verde":"Kaapverdië","Central African Republic":"Centraal-Afrikaanse Republiek","Chad":"Tsjaad","Chile":"Chili","China":"China","Colombia":"Colombia","Comoros":"Comoren","Costa Rica":"Costa Rica","Croatia":"Kroatië","Cuba":"Cuba","Cyprus":"Cyprus","Czechia":"Tsjechië","Democratic Republic of the Congo":"Democratische Republiek Congo","Denmark":"Denemarken","Djibouti":"Djibouti","Dominica":"Dominica","Dominican Republic":"Dominicaanse Republiek","Ecuador":"Ecuador","Egypt":"Egypte","El Salvador":"El Salvador","Equatorial Guinea":"Equatoriaal-Guinea","Eritrea":"Eritrea","Estonia":"Estland","Eswatini":"Eswatini","Ethiopia":"Ethiopië","Federated States of Micronesia":"Federale Staten van Micronesië","Fiji":"Fiji","Finland":"Finland","France":"Frankrijk","Gabon":"Gabon","Georgia":"Georgië","Germany":"Duitsland","Ghana":"Ghana","Greece":"Griekenland","Grenada":"Grenada","Guatemala":"Guatemala","Guinea":"Guinee","Guinea-Bissau":"Guinee-Bissau","Guyana":"Guyana","Haiti":"Haïti","Honduras":"Honduras","Hungary":"Hongarije","Iceland":"IJsland","India":"India","Indonesia":"Indonesië","Iran":"Iran","Iraq":"Irak","Ireland":"Ierland","Israel":"Israël","Italy":"Italië","Ivory Coast":"Ivoorkust","Jamaica":"Jamaica","Japan":"Japan","Jordan":"Jordanië","Kazakhstan":"Kazachstan","Kenya":"Kenia","Kiribati":"Kiribati","Kuwait":"Koeweit","Kyrgyzstan":"Kirgizië","Laos":"Laos","Latvia":"Letland","Lebanon":"Libanon","Lesotho":"Lesotho","Liberia":"Liberia","Libya":"Libië","Liechtenstein":"Liechtenstein","Lithuania":"Litouwen","Luxembourg":"Luxemburg","Madagascar":"Madagaskar","Malawi":"Malawi","Malaysia":"Maleisië","Maldives":"Maldiven","Mali":"Mali","Malta":"Malta","Marshall Islands":"Marshalleilanden","Mauritania":"Mauritanië","Mauritius":"Mauritius","Mexico":"Mexico","Moldova":"Moldavië","Monaco":"Monaco","Mongolia":"Mongolië","Montenegro":"Montenegro","Morocco":"Marokko","Mozambique":"Mozambique","Myanmar":"Myanmar","Namibia":"Namibië","Nauru":"Nauru","Nepal":"Nepal","Netherlands":"Nederland","New Zealand":"Nieuw-Zeeland","Nicaragua":"Nicaragua","Niger":"Niger","Nigeria":"Nigeria","North Korea":"Noord-Korea","North Macedonia":"Noord-Macedonië","Norway":"Noorwegen","Oman":"Oman","Pakistan":"Pakistan","Palau":"Palau","Palestine":"Palestina","Panama":"Panama","Papua New Guinea":"Papoea-Nieuw-Guinea","Paraguay":"Paraguay","Peru":"Peru","Philippines":"Filipijnen","Poland":"Polen","Portugal":"Portugal","Qatar":"Qatar","Republic of the Congo":"Republiek Congo","Romania":"Roemenië","Russia":"Rusland","Rwanda":"Rwanda","Saint Kitts and Nevis":"Saint Kitts en Nevis","Saint Lucia":"Saint Lucia","Saint Vincent and the Grenadines":"Saint Vincent en de Grenadines","Samoa":"Samoa","San Marino":"San Marino","São Tomé and Príncipe":"Sao Tomé en Principe","Saudi Arabia":"Saoedi-Arabië","Senegal":"Senegal","Serbia":"Servië","Seychelles":"Seychellen","Sierra Leone":"Sierra Leone","Singapore":"Singapore","Slovakia":"Slowakije","Slovenia":"Slovenië","Solomon Islands":"Salomonseilanden","Somalia":"Somalië","South Africa":"Zuid-Afrika","South Korea":"Zuid-Korea","South Sudan":"Zuid-Soedan","Spain":"Spanje","Sri Lanka":"Sri Lanka","Sudan":"Soedan","Suriname":"Suriname","Sweden":"Zweden","Switzerland":"Zwitserland","Syria":"Syrië","Taiwan":"Taiwan","Tajikistan":"Tadzjikistan","Tanzania":"Tanzania","Thailand":"Thailand","The Bahamas":"Bahama's","The Gambia":"Gambia","Timor-Leste":"Oost-Timor","Togo":"Togo","Tonga":"Tonga","Trinidad and Tobago":"Trinidad en Tobago","Tunisia":"Tunesië","Turkey":"Turkije","Turkmenistan":"Turkmenistan","Tuvalu":"Tuvalu","Uganda":"Oeganda","Ukraine":"Oekraïne","United Arab Emirates":"Verenigde Arabische Emiraten","United Kingdom":"Verenigd Koninkrijk","United States":"Verenigde Staten","Uruguay":"Uruguay","Uzbekistan":"Oezbekistan","Vanuatu":"Vanuatu","Vatican City":"Vaticaanstad","Venezuela":"Venezuela","Vietnam":"Vietnam","Yemen":"Jemen","Zambia":"Zambia","Zimbabwe":"Zimbabwe"
        },
        de: {
            "Albania":"Albanien","Algeria":"Algerien","Armenia":"Armenien","Australia":"Australien","Austria":"Österreich","Azerbaijan":"Aserbaidschan","Belarus":"Belarus","Belgium":"Belgien","Bolivia":"Bolivien","Bosnia and Herzegovina":"Bosnien und Herzegowina","Brazil":"Brasilien","Bulgaria":"Bulgarien","Burkina Faso":"Burkina Faso","Cape Verde":"Kap Verde","Central African Republic":"Zentralafrikanische Republik","Chad":"Tschad","Comoros":"Komoren","Democratic Republic of the Congo":"Demokratische Republik Kongo","Republic of the Congo":"Republik Kongo","Croatia":"Kroatien","Cyprus":"Zypern","Czechia":"Tschechien","Denmark":"Dänemark","Dominican Republic":"Dominikanische Republik","Egypt":"Ägypten","Equatorial Guinea":"Äquatorialguinea","Estonia":"Estland","Ethiopia":"Äthiopien","Federated States of Micronesia":"Föderierte Staaten von Mikronesien","Finland":"Finnland","France":"Frankreich","Georgia":"Georgien","Germany":"Deutschland","Greece":"Griechenland","Guinea":"Guinea","Haiti":"Haiti","Hungary":"Ungarn","Iceland":"Island","Ireland":"Irland","Israel":"Israel","Italy":"Italien","Ivory Coast":"Elfenbeinküste","Jordan":"Jordanien","Kazakhstan":"Kasachstan","Kuwait":"Kuwait","Kyrgyzstan":"Kirgisistan","Laos":"Laos","Latvia":"Lettland","Lebanon":"Libanon","Libya":"Libyen","Lithuania":"Litauen","Malaysia":"Malaysia","Maldives":"Malediven","Marshall Islands":"Marshallinseln","Mauritania":"Mauretanien","Mexico":"Mexiko","Moldova":"Moldau","Mongolia":"Mongolei","Montenegro":"Montenegro","Morocco":"Marokko","Netherlands":"Niederlande","New Zealand":"Neuseeland","North Korea":"Nordkorea","North Macedonia":"Nordmazedonien","Norway":"Norwegen","Palestine":"Palästina","Papua New Guinea":"Papua-Neuguinea","Peru":"Peru","Philippines":"Philippinen","Poland":"Polen","Romania":"Rumänien","Russia":"Russland","Saint Kitts and Nevis":"St. Kitts und Nevis","Saint Lucia":"St. Lucia","Saint Vincent and the Grenadines":"St. Vincent und die Grenadinen","Saudi Arabia":"Saudi-Arabien","Serbia":"Serbien","Slovakia":"Slowakei","Slovenia":"Slowenien","Solomon Islands":"Salomonen","Somalia":"Somalia","South Africa":"Südafrika","South Korea":"Südkorea","South Sudan":"Südsudan","Spain":"Spanien","Sudan":"Sudan","Sweden":"Schweden","Switzerland":"Schweiz","Syria":"Syrien","Tajikistan":"Tadschikistan","Thailand":"Thailand","Timor-Leste":"Osttimor","Tunisia":"Tunesien","Turkey":"Türkei","Ukraine":"Ukraine","United Arab Emirates":"Vereinigte Arabische Emirate","United Kingdom":"Vereinigtes Königreich","United States":"Vereinigte Staaten","Uzbekistan":"Usbekistan","Vatican City":"Vatikanstadt","Vietnam":"Vietnam","The Bahamas":"Bahamas","The Gambia":"Gambia","São Tomé and Príncipe":"São Tomé und Príncipe"
        },
        fr: {
            "Albania":"Albanie","Algeria":"Algérie","Armenia":"Arménie","Australia":"Australie","Austria":"Autriche","Azerbaijan":"Azerbaïdjan","Belarus":"Biélorussie","Belgium":"Belgique","Bolivia":"Bolivie","Bosnia and Herzegovina":"Bosnie-Herzégovine","Brazil":"Brésil","Bulgaria":"Bulgarie","Cape Verde":"Cap-Vert","Central African Republic":"République centrafricaine","Chad":"Tchad","Comoros":"Comores","Democratic Republic of the Congo":"République démocratique du Congo","Republic of the Congo":"République du Congo","Croatia":"Croatie","Cyprus":"Chypre","Czechia":"Tchéquie","Denmark":"Danemark","Dominican Republic":"République dominicaine","Egypt":"Égypte","Equatorial Guinea":"Guinée équatoriale","Estonia":"Estonie","Ethiopia":"Éthiopie","Federated States of Micronesia":"États fédérés de Micronésie","Finland":"Finlande","France":"France","Georgia":"Géorgie","Germany":"Allemagne","Greece":"Grèce","Guinea":"Guinée","Haiti":"Haïti","Hungary":"Hongrie","Iceland":"Islande","Ireland":"Irlande","Israel":"Israël","Italy":"Italie","Ivory Coast":"Côte d’Ivoire","Jordan":"Jordanie","Kazakhstan":"Kazakhstan","Kuwait":"Koweït","Kyrgyzstan":"Kirghizistan","Laos":"Laos","Latvia":"Lettonie","Lebanon":"Liban","Libya":"Libye","Lithuania":"Lituanie","Malaysia":"Malaisie","Maldives":"Maldives","Marshall Islands":"Îles Marshall","Mauritania":"Mauritanie","Mexico":"Mexique","Moldova":"Moldavie","Mongolia":"Mongolie","Montenegro":"Monténégro","Morocco":"Maroc","Netherlands":"Pays-Bas","New Zealand":"Nouvelle-Zélande","North Korea":"Corée du Nord","North Macedonia":"Macédoine du Nord","Norway":"Norvège","Palestine":"Palestine","Papua New Guinea":"Papouasie-Nouvelle-Guinée","Peru":"Pérou","Philippines":"Philippines","Poland":"Pologne","Romania":"Roumanie","Russia":"Russie","Saint Kitts and Nevis":"Saint-Christophe-et-Niévès","Saint Lucia":"Sainte-Lucie","Saint Vincent and the Grenadines":"Saint-Vincent-et-les-Grenadines","Saudi Arabia":"Arabie saoudite","Serbia":"Serbie","Slovakia":"Slovaquie","Slovenia":"Slovénie","Solomon Islands":"Îles Salomon","Somalia":"Somalie","South Africa":"Afrique du Sud","South Korea":"Corée du Sud","South Sudan":"Soudan du Sud","Spain":"Espagne","Sudan":"Soudan","Sweden":"Suède","Switzerland":"Suisse","Syria":"Syrie","Tajikistan":"Tadjikistan","Thailand":"Thaïlande","Timor-Leste":"Timor oriental","Tunisia":"Tunisie","Turkey":"Turquie","Ukraine":"Ukraine","United Arab Emirates":"Émirats arabes unis","United Kingdom":"Royaume-Uni","United States":"États-Unis","Uzbekistan":"Ouzbékistan","Vatican City":"Vatican","Vietnam":"Vietnam","The Bahamas":"Bahamas","The Gambia":"Gambie","São Tomé and Príncipe":"Sao Tomé-et-Principe"
        },
        es: {
            "Albania":"Albania","Algeria":"Argelia","Armenia":"Armenia","Australia":"Australia","Austria":"Austria","Azerbaijan":"Azerbaiyán","Belarus":"Bielorrusia","Belgium":"Bélgica","Bolivia":"Bolivia","Bosnia and Herzegovina":"Bosnia y Herzegovina","Brazil":"Brasil","Bulgaria":"Bulgaria","Cape Verde":"Cabo Verde","Central African Republic":"República Centroafricana","Chad":"Chad","Comoros":"Comoras","Democratic Republic of the Congo":"República Democrática del Congo","Republic of the Congo":"República del Congo","Croatia":"Croacia","Cyprus":"Chipre","Czechia":"Chequia","Denmark":"Dinamarca","Dominican Republic":"República Dominicana","Egypt":"Egipto","Equatorial Guinea":"Guinea Ecuatorial","Estonia":"Estonia","Ethiopia":"Etiopía","Federated States of Micronesia":"Estados Federados de Micronesia","Finland":"Finlandia","France":"Francia","Georgia":"Georgia","Germany":"Alemania","Greece":"Grecia","Guinea":"Guinea","Haiti":"Haití","Hungary":"Hungría","Iceland":"Islandia","Ireland":"Irlanda","Israel":"Israel","Italy":"Italia","Ivory Coast":"Costa de Marfil","Jordan":"Jordania","Kazakhstan":"Kazajistán","Kuwait":"Kuwait","Kyrgyzstan":"Kirguistán","Laos":"Laos","Latvia":"Letonia","Lebanon":"Líbano","Libya":"Libia","Lithuania":"Lituania","Malaysia":"Malasia","Maldives":"Maldivas","Marshall Islands":"Islas Marshall","Mauritania":"Mauritania","Mexico":"México","Moldova":"Moldavia","Mongolia":"Mongolia","Montenegro":"Montenegro","Morocco":"Marruecos","Netherlands":"Países Bajos","New Zealand":"Nueva Zelanda","North Korea":"Corea del Norte","North Macedonia":"Macedonia del Norte","Norway":"Noruega","Palestine":"Palestina","Papua New Guinea":"Papúa Nueva Guinea","Peru":"Perú","Philippines":"Filipinas","Poland":"Polonia","Romania":"Rumanía","Russia":"Rusia","Saint Kitts and Nevis":"San Cristóbal y Nieves","Saint Lucia":"Santa Lucía","Saint Vincent and the Grenadines":"San Vicente y las Granadinas","Saudi Arabia":"Arabia Saudí","Serbia":"Serbia","Slovakia":"Eslovaquia","Slovenia":"Eslovenia","Solomon Islands":"Islas Salomón","Somalia":"Somalia","South Africa":"Sudáfrica","South Korea":"Corea del Sur","South Sudan":"Sudán del Sur","Spain":"España","Sudan":"Sudán","Sweden":"Suecia","Switzerland":"Suiza","Syria":"Siria","Tajikistan":"Tayikistán","Thailand":"Tailandia","Timor-Leste":"Timor Oriental","Tunisia":"Túnez","Turkey":"Turquía","Ukraine":"Ucrania","United Arab Emirates":"Emiratos Árabes Unidos","United Kingdom":"Reino Unido","United States":"Estados Unidos","Uzbekistan":"Uzbekistán","Vatican City":"Ciudad del Vaticano","Vietnam":"Vietnam","The Bahamas":"Bahamas","The Gambia":"Gambia","São Tomé and Príncipe":"Santo Tomé y Príncipe"
        }
    };
    Object.assign(localized.de, {
        "Antigua and Barbuda":"Antigua und Barbuda","Argentina":"Argentinien","Bangladesh":"Bangladesch","Chile":"Chile","Colombia":"Kolumbien","Ecuador":"Ecuador","Indonesia":"Indonesien","Iran":"Iran","Iraq":"Irak","Kenya":"Kenia","Luxembourg":"Luxemburg","Madagascar":"Madagaskar","Mozambique":"Mosambik","Myanmar":"Myanmar","Namibia":"Namibia","Nepal":"Nepal","Nicaragua":"Nicaragua","Niger":"Niger","Nigeria":"Nigeria","Oman":"Oman","Pakistan":"Pakistan","Panama":"Panama","Paraguay":"Paraguay","Portugal":"Portugal","Rwanda":"Ruanda","Senegal":"Senegal","Seychelles":"Seychellen","Sierra Leone":"Sierra Leone","Singapore":"Singapur","Sri Lanka":"Sri Lanka","Suriname":"Suriname","Taiwan":"Taiwan","Tanzania":"Tansania","Trinidad and Tobago":"Trinidad und Tobago","Uganda":"Uganda","Uruguay":"Uruguay","Venezuela":"Venezuela","Yemen":"Jemen","Zambia":"Sambia","Zimbabwe":"Simbabwe","The Bahamas":"Bahamas","The Gambia":"Gambia"
    });
    Object.assign(localized.fr, {
        "Antigua and Barbuda":"Antigua-et-Barbuda","Argentina":"Argentine","Bangladesh":"Bangladesh","Chile":"Chili","Colombia":"Colombie","Ecuador":"Équateur","Indonesia":"Indonésie","Iran":"Iran","Iraq":"Irak","Kenya":"Kenya","Luxembourg":"Luxembourg","Madagascar":"Madagascar","Mozambique":"Mozambique","Myanmar":"Birmanie","Namibia":"Namibie","Nepal":"Népal","Nicaragua":"Nicaragua","Niger":"Niger","Nigeria":"Nigeria","Oman":"Oman","Pakistan":"Pakistan","Panama":"Panama","Paraguay":"Paraguay","Portugal":"Portugal","Rwanda":"Rwanda","Senegal":"Sénégal","Seychelles":"Seychelles","Sierra Leone":"Sierra Leone","Singapore":"Singapour","Sri Lanka":"Sri Lanka","Suriname":"Suriname","Taiwan":"Taïwan","Tanzania":"Tanzanie","Trinidad and Tobago":"Trinité-et-Tobago","Uganda":"Ouganda","Uruguay":"Uruguay","Venezuela":"Venezuela","Yemen":"Yémen","Zambia":"Zambie","Zimbabwe":"Zimbabwe","The Bahamas":"Bahamas","The Gambia":"Gambie"
    });
    Object.assign(localized.es, {
        "Antigua and Barbuda":"Antigua y Barbuda","Argentina":"Argentina","Bangladesh":"Bangladés","Chile":"Chile","Colombia":"Colombia","Ecuador":"Ecuador","Indonesia":"Indonesia","Iran":"Irán","Iraq":"Irak","Kenya":"Kenia","Luxembourg":"Luxemburgo","Madagascar":"Madagascar","Mozambique":"Mozambique","Myanmar":"Birmania","Namibia":"Namibia","Nepal":"Nepal","Nicaragua":"Nicaragua","Niger":"Níger","Nigeria":"Nigeria","Oman":"Omán","Pakistan":"Pakistán","Panama":"Panamá","Paraguay":"Paraguay","Portugal":"Portugal","Rwanda":"Ruanda","Senegal":"Senegal","Seychelles":"Seychelles","Sierra Leone":"Sierra Leona","Singapore":"Singapur","Sri Lanka":"Sri Lanka","Suriname":"Surinam","Taiwan":"Taiwán","Tanzania":"Tanzania","Trinidad and Tobago":"Trinidad y Tobago","Uganda":"Uganda","Uruguay":"Uruguay","Venezuela":"Venezuela","Yemen":"Yemen","Zambia":"Zambia","Zimbabwe":"Zimbabue","The Bahamas":"Bahamas","The Gambia":"Gambia"
    });
    const uiRows = {
        "region.all":["All Countries","Alle landen","Alle Länder","Tous les pays","Todos los países"],
        "region.Europe":["Europe","Europa","Europa","Europe","Europa"],
        "region.Asia":["Asia","Azië","Asien","Asie","Asia"],
        "region.Africa":["Africa","Afrika","Afrika","Afrique","África"],
        "region.North America":["North America","Noord-Amerika","Nordamerika","Amérique du Nord","América del Norte"],
        "region.South America":["South America","Zuid-Amerika","Südamerika","Amérique du Sud","América del Sur"],
        "region.Oceania":["Oceania","Oceanië","Ozeanien","Océanie","Oceanía"],
        "regionDescription.all":["A little of the whole world","Een beetje van de hele wereld","Ein bisschen von der ganzen Welt","Un peu du monde entier","Un poco de todo el mundo"],
        "regionDescription.Europe":["From the Atlantic to the Urals","Van de Atlantische Oceaan tot de Oeral","Vom Atlantik bis zum Ural","De l’Atlantique à l’Oural","Del Atlántico a los Urales"],
        "regionDescription.Asia":["Across the world's largest region","Door de grootste regio ter wereld","Durch die größte Region der Welt","À travers la plus grande région du monde","Por la región más extensa del mundo"],
        "regionDescription.Africa":["54 countries, one continent","54 landen, één continent","54 Länder, ein Kontinent","54 pays, un continent","54 países, un continente"],
        "regionDescription.North America":["Including Central America & the Caribbean","Inclusief Midden-Amerika en het Caribisch gebied","Mit Mittelamerika und der Karibik","Amérique centrale et Caraïbes incluses","Incluye América Central y el Caribe"],
        "regionDescription.South America":["From the Andes to the Atlantic","Van de Andes tot de Atlantische Oceaan","Von den Anden bis zum Atlantik","Des Andes à l’Atlantique","De los Andes al Atlántico"],
        "regionDescription.Oceania":["Islands and the world's smallest continent","Eilanden en het kleinste continent ter wereld","Inseln und der kleinste Kontinent der Welt","Des îles et le plus petit continent du monde","Islas y el continente más pequeño del mundo"],
        "difficulty.all":["All difficulties","Alle niveaus","Alle Schwierigkeitsgrade","Toutes difficultés","Todas las dificultades"],
        "difficulty.easy":["Easy","Makkelijk","Einfach","Facile","Fácil"], "difficulty.medium":["Medium","Gemiddeld","Mittel","Moyen","Medio"], "difficulty.hard":["Hard","Moeilijk","Schwer","Difficile","Difícil"],
        "countrySingular":["COUNTRY","LAND","LAND","PAYS","PAÍS"], "countryPlural":["COUNTRIES","LANDEN","LÄNDER","PAYS","PAÍSES"],
        "poolNote":["{count} country outlines in the collection","{count} landvormen in de verzameling","{count} Länderumrisse in der Sammlung","{count} contours de pays dans la collection","{count} contornos de países en la colección"],
        "setupMessage":["{count} countries in this selection · up to {rounds} rounds · no repeats.","{count} landen in deze selectie · maximaal {rounds} rondes · geen herhaling.","{count} Länder in dieser Auswahl · bis zu {rounds} Runden · keine Wiederholungen.","{count} pays dans cette sélection · jusqu’à {rounds} manches · sans répétition.","{count} países en esta selección · hasta {rounds} rondas · sin repetir."],
        "triesInitial":["3 tries left","3 pogingen over","Noch 3 Versuche","3 essais restants","Quedan 3 intentos"],
        "tries":["{count} tries left","Nog {count} pogingen","Noch {count} Versuche","Encore {count} essais","Quedan {count} intentos"],
        "try":["{count} try left","Nog {count} poging","Noch {count} Versuch","Encore {count} essai","Queda {count} intento"],
        "points":["POINTS","PUNTEN","PUNKTE","POINTS","PUNTOS"], "pointsShort":["pts","ptn","Pkt.","pts","pts"], "hintPoints":["−20 pts","−20 ptn","−20 Pkt.","−20 pts","−20 pts"],
        "hintContinent":["Continent: {region}.","Continent: {region}.","Kontinent: {region}.","Continent : {region}.","Continente: {region}."],
        "hintFirstLetter":["The name starts with “{letter}”.","De naam begint met “{letter}”.","Der Name beginnt mit „{letter}“.","Le nom commence par « {letter} ».","El nombre empieza por «{letter}»."],
        "hintNameClue":["Name clue: {clue}…","Naamhint: {clue}…","Namenshinweis: {clue}…","Indice : {clue}…","Pista: {clue}…"],
        "caption.all":["A little of everything","Van alles wat","Von allem etwas","Un peu de tout","Un poco de todo"],
        "caption.easy":["Recognizable country shapes","Herkenbare landvormen","Erkennbare Länderumrisse","Formes de pays reconnaissables","Formas de países reconocibles"],
        "caption.medium":["Look a little closer","Kijk iets beter","Sieh genauer hin","Regarde d’un peu plus près","Mira con más atención"],
        "caption.hard":["Smaller or less familiar outlines","Kleinere of minder bekende vormen","Kleinere oder weniger bekannte Umrisse","Contours plus petits ou moins familiers","Contornos más pequeños o menos conocidos"],
        "ui.introEyebrow":["A LITTLE GAME · NO. 07","EEN KLEIN SPEL · NR. 07","EIN KLEINES SPIEL · NR. 07","UN PETIT JEU · N° 07","UN JUEGO PEQUEÑO · N.º 07"],
        "ui.title":["Where Am I?","Waar ben ik?","Wo bin ich?","Où suis-je ?","¿Dónde estoy?"],
        "ui.intro":["One country outline. No labels. Can you place it on the map in your mind?","Eén landvorm. Geen labels. Kun jij het op de kaart in je hoofd plaatsen?","Ein Länderumriss. Keine Beschriftung. Kannst du ihn auf deiner inneren Karte einordnen?","Un contour de pays. Aucun nom. Saura-tu le situer sur ta carte mentale ?","El contorno de un país. Sin nombres. ¿Puedes situarlo en el mapa de tu mente?"],
        "ui.setupEyebrow":["SET UP YOUR GAME","STEL JE SPEL IN","SPIEL EINSTELLEN","PRÉPARE TON JEU","PREPARA LA PARTIDA"],
        "ui.chooseRegion":["Choose a region.","Kies een regio.","Wähle eine Region.","Choisis une région.","Elige una región."],
        "ui.regionAria":["Choose a region","Kies een regio","Region auswählen","Choisir une région","Elige una región"],
        "ui.difficultyEyebrow":["HOW TRICKY?","HOE LASTIG?","WIE KNIFFLIG?","QUELLE DIFFICULTÉ ?","¿QUÉ DIFICULTAD?"],
        "ui.difficultyAria":["Choose difficulty","Kies een moeilijkheid","Schwierigkeit auswählen","Choisir la difficulté","Elige la dificultad"],
        "ui.best":["PERSONAL BEST","PERSOONLIJK RECORD","PERSÖNLICHER REKORD","RECORD PERSONNEL","RÉCORD PERSONAL"],
        "ui.start":["START PLAYING","BEGIN MET SPELEN","SPIEL STARTEN","JOUER","EMPEZAR A JUGAR"],
        "ui.dataSummary":["About the map data","Over de kaartgegevens","Über die Kartendaten","À propos des données cartographiques","Sobre los datos del mapa"],
        "ui.dataDescription":["Silhouettes are generated from Natural Earth 1:50m country boundaries. Dependent territories and Antarctica are excluded. Taiwan follows Natural Earth’s country classification; Israel and Palestine are included as named country records. Distant overseas components are omitted so the main outline stays legible.","De silhouetten zijn gemaakt op basis van landgrenzen van Natural Earth op schaal 1:50m. Afhankelijke gebieden en Antarctica zijn uitgesloten. Taiwan volgt de landenclassificatie van Natural Earth; Israël en Palestina zijn opgenomen als landen. Verafgelegen overzeese delen zijn weggelaten zodat de hoofdvorm goed zichtbaar blijft.","Die Silhouetten basieren auf den Ländergrenzen von Natural Earth im Maßstab 1:50m. Außengebiete und die Antarktis sind ausgeschlossen. Taiwan folgt der Länderklassifizierung von Natural Earth; Israel und Palästina sind als Länder enthalten. Entfernte Überseegebiete wurden ausgelassen, damit der Umriss gut erkennbar bleibt.","Les silhouettes sont générées à partir des frontières nationales Natural Earth au 1:50m. Les territoires dépendants et l’Antarctique sont exclus. Taïwan suit la classification de Natural Earth ; Israël et la Palestine figurent comme pays. Les territoires éloignés sont omis pour préserver la lisibilité du contour principal.","Las siluetas se generan a partir de las fronteras nacionales de Natural Earth a escala 1:50m. Se excluyen los territorios dependientes y la Antártida. Taiwán sigue la clasificación de países de Natural Earth; Israel y Palestina aparecen como países. Se omiten los territorios lejanos para que el contorno principal sea claro."],
        "ui.gameAria":["Guess the country","Adivina el país","Errate das Land","Devine le pays","Adivina el país"],
        "ui.round":["ROUND","RONDE","RUNDE","MANCHE","RONDA"], "ui.score":["SCORE","SCORE","PUNKTE","SCORE","PUNTOS"], "ui.streak":["STREAK","REEKS","SERIE","SÉRIE","RACHA"],
        "ui.instruction":["NO LABELS. JUST THE OUTLINE.","GEEN NAMEN. ALLEEN DE VORM.","KEINE NAMEN. NUR DER UMRISS.","AUCUN NOM. JUSTE LE CONTOUR.","SIN NOMBRES. SOLO EL CONTORNO."],
        "ui.mapAria":["An unlabeled country outline","Een landvorm zonder label","Ein unbeschrifteter Länderumriss","Le contour d’un pays sans nom","El contorno de un país sin nombre"],
        "ui.mapCaption":["COUNTRY OUTLINE","LANDVORM","LÄNDERUMRISS","CONTOUR DU PAYS","CONTORNO DEL PAÍS"],
        "ui.tries":["tries left","pogingen over","Versuche übrig","essais restants","intentos restantes"],
        "ui.try":["try left","poging over","Versuch übrig","essai restant","intento restante"],
        "ui.hintsUsed":["Hints used: {count} / 3","Hints gebruikt: {count} / 3","Hinweise verwendet: {count} / 3","Indices utilisés : {count} / 3","Pistas usadas: {count} / 3"],
        "ui.hint":["Use a hint","Gebruik een hint","Hinweis verwenden","Utiliser un indice","Usar una pista"],
        "ui.noHints":["No more hints","Geen hints meer","Keine Hinweise mehr","Plus d’indices","No quedan pistas"],
        "ui.answerLabel":["Your answer","Jouw antwoord","Deine Antwort","Ta réponse","Tu respuesta"],
        "ui.placeholder":["Type your answer...","Typ je antwoord...","Gib deine Antwort ein …","Saisis ta réponse…","Escribe tu respuesta…"],
        "ui.submit":["Submit Answer","Antwoord insturen","Antwort absenden","Valider la réponse","Enviar respuesta"],
        "ui.answerHelp":["Enter a country name in any supported language. Press Enter to submit.","Typ een landnaam in een ondersteunde taal. Druk op Enter om in te sturen.","Gib einen Ländernamen in einer unterstützten Sprache ein. Drücke Enter zum Absenden.","Saisis le nom d’un pays dans une langue prise en charge. Appuie sur Entrée pour valider.","Escribe el nombre de un país en un idioma disponible. Pulsa Intro para enviar."],
        "ui.emptyAnswer":["Type a country name before submitting.","Typ eerst een landnaam in.","Gib zuerst einen Ländernamen ein.","Saisis le nom d’un pays avant de valider.","Escribe el nombre de un país antes de enviarlo."],
        "ui.correct":["Correct!","Goed!","Richtig!","Exact !","¡Correcto!"],
        "ui.answerWas":["The answer was:","Het antwoord was:","Die Antwort war:","La réponse était :","La respuesta era:"],
        "ui.notQuite":["Not quite!","Niet helemaal!","Nicht ganz!","Pas tout à fait !","¡No exactamente!"],
        "ui.correctText":["{country} — nicely placed{hintText}.","{country} — goed geplaatst{hintText}.","{country} — gut eingeordnet{hintText}.","{country} — bien situé{hintText}.","{country} — bien ubicado{hintText}."],
        "ui.hintSingular":[" with {count} hint"," met {count} hint"," mit {count} Hinweis"," avec {count} indice"," con {count} pista"],
        "ui.hintPlural":[" with {count} hints"," met {count} hints"," mit {count} Hinweisen"," avec {count} indices"," con {count} pistas"],
        "ui.finalWrong":["{country} was the country. Take another look at its outline before the next round.","{country} was het land. Bekijk de vorm nog eens goed voor de volgende ronde.","{country} war das gesuchte Land. Sieh dir den Umriss vor der nächsten Runde noch einmal an.","Le pays était {country}. Observe bien son contour avant la prochaine manche.","El país era {country}. Fíjate bien en su contorno antes de la siguiente ronda."],
        "ui.wrongOne":["Not quite. One try left — take another look.","Niet helemaal. Nog één poging — kijk nog eens goed.","Nicht ganz. Noch ein Versuch — sieh genau hin.","Pas tout à fait. Encore un essai — regarde bien.","No exactamente. Te queda un intento; mira otra vez."],
        "ui.wrongMany":["Not quite. {count} tries left — take another look.","Niet helemaal. Nog {count} pogingen — kijk nog eens goed.","Nicht ganz. Noch {count} Versuche — sieh genau hin.","Pas tout à fait. Encore {count} essais — regarde bien.","No exactamente. Te quedan {count} intentos; mira otra vez."],
        "ui.next":["Next Country","Volgend land","Nächstes Land","Pays suivant","Siguiente país"],
        "ui.results":["See Results","Bekijk resultaat","Ergebnis ansehen","Voir les résultats","Ver resultados"],
        "ui.back":["Back to regions","Terug naar regio's","Zurück zur Regionenwahl","Retour aux régions","Volver a las regiones"],
        "ui.resultEyebrow":["THAT'S A WRAP","DAT WAS HET","DAS WAR'S","C'EST TERMINÉ","FIN DE LA PARTIDA"],
        "ui.points":["POINTS","PUNTEN","PUNKTE","POINTS","PUNTOS"], "ui.pointsShort":["pts","ptn","Pkt.","pts","pts"],
        "ui.correctStat":["CORRECT","GOED","RICHTIG","CORRECT","CORRECTAS"],
        "ui.wrongStat":["WRONG","FOUT","FALSCH","INCORRECT","INCORRECTAS"],
        "ui.accuracy":["ACCURACY","NAUWKEURIGHEID","TREFFERQUOTE","PRÉCISION","ACIERTOS"],
        "ui.bestStreak":["BEST STREAK","BESTE REEKS","LÄNGSTE SERIE","MEILLEURE SÉRIE","MEJOR RACHA"],
        "ui.playAgain":["PLAY AGAIN","OPNIEUW SPELEN","NOCHMAL SPIELEN","REJOUER","JUGAR DE NUEVO"],
        "ui.resultMaster":["Geography Master!","Aardrijkskundemeester!","Geografie-Profi!","As de la géographie !","¡Maestro de la geografía!"],
        "ui.resultMasterText":["Every outline landed in the right place. That's a world-class run.","Elke vorm stond op de juiste plek. Dat was een wereldprestatie.","Jeder Umriss war richtig zugeordnet. Eine weltklasse Runde.","Chaque contour était au bon endroit. Une manche remarquable.","Todos los contornos en su sitio. ¡Una partida de primera!"],
        "ui.resultAmazing":["Amazing!","Geweldig!","Fantastisch!","Incroyable !","¡Increíble!"],
        "ui.resultAmazingText":["You know your way around a map. Nicely done.","Jij weet de weg op de kaart. Goed gedaan.","Du kennst dich auf der Karte aus. Gut gemacht.","Tu sais te repérer sur une carte. Bien joué.","Sabes orientarte en un mapa. Muy bien."],
        "ui.resultGreat":["Great job!","Goed gedaan!","Gut gemacht!","Bravo !","¡Buen trabajo!"],
        "ui.resultGreatText":["A few coastlines were tricky. You're getting there.","Een paar kustlijnen waren lastig. Je komt er wel.","Einige Küstenlinien waren knifflig. Du bist auf dem richtigen Weg.","Quelques côtes étaient difficiles. Tu progresses.","Algunas costas eran difíciles. Vas mejorando."],
        "ui.resultPractice":["Keep practicing!","Blijf oefenen!","Weiter üben!","Continue de t’entraîner !","¡Sigue practicando!"],
        "ui.resultPracticeText":["Every outline is a new place to learn.","Elke vorm is een nieuwe plek om te leren.","Jeder Umriss ist ein neuer Ort zum Lernen.","Chaque contour est un nouvel endroit à découvrir.","Cada contorno es un lugar nuevo que aprender."],
        "ui.dataCredit":["Made with Natural Earth. Public-domain map data, kept right here in the project.","Gemaakt met Natural Earth. Kaartgegevens in het publieke domein, gewoon in dit project opgenomen.","Erstellt mit Natural Earth. Gemeinfreie Kartendaten, direkt in diesem Projekt enthalten.","Réalisé avec Natural Earth. Données cartographiques du domaine public, conservées dans le projet.","Creado con Natural Earth. Datos cartográficos de dominio público incluidos en este proyecto."],
        "ui.repair":["The country map data needs a quick repair before this game can start.","De kaartgegevens moeten eerst worden hersteld voordat dit spel kan beginnen.","Die Kartendaten müssen repariert werden, bevor das Spiel starten kann.","Les données cartographiques doivent être réparées avant de commencer.","Hay que reparar los datos del mapa antes de empezar."]
    };
    let selectedRegion = "all", selectedDifficulty = "all";
    let run = [], roundIndex = 0, current = null, score = 0, streak = 0, bestStreak = 0, correctCount = 0;
    let attemptsUsed = 0, hintsUsed = 0, answered = false, feedbackType = null, dataInvalid = false;
    const i18n = window.JB_I18N;
    const countryKey = country => `wai.country.${country.name}`;
    const tr = (key, fallback, values) => i18n?.t(key, fallback, values) ?? fallback;

    function catalogFromRows() {
        const catalog = {};
        const add = (key, values) => { catalog[key] = { en:values[0], nl:values[1], de:values[2], fr:values[3], es:values[4] }; };
        for (const [key, values] of Object.entries(uiRows)) {
            add(`wai.${key}`, values);
            if (!key.startsWith("region.") && !key.startsWith("regionDescription.") && !key.startsWith("difficulty.") && !key.startsWith("caption.")) {
                add(`wai.ui.${key.replace(/^ui\./, "")}`, values);
            }
        }
        for (const [id, name] of regions) add(`wai.region.${id}`, uiRows[`region.${id}`]);
        for (const [id, label] of difficulties) add(`wai.difficulty.${id}`, uiRows[`difficulty.${id}`]);
        for (const [id, text] of Object.entries(difficultyCaption)) add(`wai.caption.${id}`, uiRows[`caption.${id}`]);
        for (const country of countries) {
            const values = ["en", "nl", "de", "fr", "es"].map((language, index) =>
                language === "en" ? country.name : localized[language]?.[country.name] || country.name
            );
            add(countryKey(country), values);
        }
        return catalog;
    }

    const regionArt = {
        all:'<svg viewBox="0 0 48 40"><circle cx="24" cy="20" r="15"/><path d="M9 20h30M24 5c5 5 7 10 7 15s-2 10-7 15m0-30c-5 5-7 10-7 15s2 10 7 15"/></svg>',
        Europe:'<svg viewBox="0 0 48 40"><path d="m22 4 8 3 2 5 7 3-2 5-4 1 1 6-5 4-5-3-4 5-5-5 1-6-6-4 4-5-2-5 5-2Z"/><circle cx="33" cy="31" r="2"/></svg>',
        Asia:'<svg viewBox="0 0 48 40"><path d="m5 13 7-5 8 2 4-4 8 3 4 6 7 3-3 5-7 1-4 6-9 2-4-5-7-1 2-6-7-2Z"/><path d="m31 26 2 6m5-5 2 4"/></svg>',
        Africa:'<svg viewBox="0 0 48 40"><path d="m20 3 9 2 7 9-3 7 2 5-7 2-4 8-6-5-4-10-5-6 4-8Z"/><path d="m32 31 2 4"/></svg>',
        'North America':'<svg viewBox="0 0 48 40"><path d="m7 7 8-3 7 4 4-2 5 4-3 6-6 3-3 7-5-1-4-6-7-2Z"/><path d="m21 25 4 3 2 8m7-13 3 5"/></svg>',
        'South America':'<svg viewBox="0 0 48 40"><path d="m14 4 10 2 8 7-4 5-2 7-5 4-3 8-4-5 1-7-4-5-3-8Z"/></svg>',
        Oceania:'<svg viewBox="0 0 48 40"><path d="m5 14 7-5 8 2 3 5-6 4-9-1Zm20 12 4-4 2 3-3 4Zm8 5 3-4 2 4-3 4Zm-1-23 6 2 3 5-3 4-5-4Z"/></svg>'
    };

    function regionName(value) { return tr(`wai.region.${value}`, regions.find(region => region[0] === value)?.[1] || value); }
    function difficultyName(value) { return tr(`wai.difficulty.${value}`, difficulties.find(item => item[0] === value)?.[1] || value); }
    function countryName(country) { return tr(countryKey(country), country.name); }
    function format(key, fallback, values) { return tr(`wai.ui.${key}`, fallback, values); }
    function storageRead(key) { try { return Number(localStorage.getItem(key)) || 0; } catch { return 0; } }
    function storageWrite(key, value) { try { localStorage.setItem(key, String(value)); } catch { /* Browser storage is optional. */ } }
    function shuffle(input) { const result = [...input]; for (let i=result.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; } return result; }
    function pool() { return countries.filter(country => (selectedRegion === "all" || country.region === selectedRegion) && (selectedDifficulty === "all" || country.difficulty === selectedDifficulty)); }
    function scoreKey() { return `jb-wai-best-${selectedRegion}-${selectedDifficulty}`; }

    function renderSetup() {
        el.regions.replaceChildren();
        for (const [id] of regions) {
            const available = countries.filter(country => (id === "all" || country.region === id) && (selectedDifficulty === "all" || country.difficulty === selectedDifficulty)).length;
            const button = document.createElement("button");
            button.type = "button"; button.className = `wai-region-card${selectedRegion === id ? " is-selected" : ""}`; button.dataset.region = id; button.setAttribute("aria-pressed", String(selectedRegion === id));
            const countLabel = available === 1 ? format("countrySingular", "COUNTRY") : format("countryPlural", "COUNTRIES");
            button.innerHTML = `<span class="wai-region-top"><span class="wai-region-art" aria-hidden="true">${regionArt[id]}</span><span class="wai-region-count">${available} ${countLabel}</span></span><strong>${regionName(id)}</strong><span class="visually-hidden">${tr(`wai.regionDescription.${id}`, regions.find(region => region[0] === id)?.[2] || "")}</span>`;
            el.regions.append(button);
        }
        el.difficulties.replaceChildren();
        for (const [id] of difficulties) {
            const button=document.createElement("button"); button.type="button"; button.className=`wai-difficulty-button${id===selectedDifficulty?" is-selected":""}`; button.dataset.difficulty=id; button.setAttribute("aria-pressed",String(id===selectedDifficulty)); button.textContent=difficultyName(id); el.difficulties.append(button);
        }
        const count = pool().length;
        el.difficultyCaption.textContent = tr(`wai.caption.${selectedDifficulty}`, difficultyCaption[selectedDifficulty]);
        el.poolNote.textContent = format("poolNote", `${countries.length} country outlines in the collection`, { count:countries.length });
        el.setupMessage.textContent = dataInvalid ? format("repair","The country map data needs a quick repair before this game can start.") : format("setupMessage", `${count} countries in this selection · up to ${Math.min(10,count)} rounds · no repeats.`, { count, rounds:Math.min(10,count) });
        el.start.disabled = dataInvalid || count === 0;
        el.best.textContent = storageRead(scoreKey());
        el.bestLabel.textContent = `${regionName(selectedRegion)} · ${difficultyName(selectedDifficulty)}`;
        applyStaticTranslations();
    }

    function normalize(value) {
        return String(value ?? "").normalize("NFKD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("en")
            .replace(/&/g, " and ").replace(/[.’'`]/g, "").replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
    }
    function validNames(country) {
        const aliases = Array.isArray(country.aliases) ? country.aliases : (typeof country.aliases === "string" ? [country.aliases] : []);
        const translated = Object.values(localized).map(names => names[country.name]).filter(Boolean);
        return [...new Set([country.name, ...aliases, ...translated].map(normalize).filter(Boolean))];
    }
    function editDistanceAtMostOne(left, right) {
        if (Math.abs(left.length-right.length)>1) return 2;
        let i=0,j=0,edits=0;
        while(i<left.length&&j<right.length){
            if(left[i]===right[j]){i++;j++;continue;}
            edits++;if(edits>1)return 2;
            if(left.length===right.length){
                if(i+1<left.length&&j+1<right.length&&left[i]===right[j+1]&&left[i+1]===right[j]){i+=2;j+=2;}
                else{i++;j++;}
            }else if(left.length>right.length){i++;}else{j++;}
        }
        if(i<left.length||j<right.length)edits++;
        return edits;
    }
    function findAnswer(rawAnswer) {
        const answer=normalize(rawAnswer);if(!answer)return {match:null,ambiguous:false};
        const exact=countries.filter(country=>validNames(country).includes(answer));
        if(exact.length===1)return {match:exact[0],ambiguous:false};
        if(exact.length>1)return {match:null,ambiguous:true};
        if(answer.replace(/\s/g,"").length<5)return {match:null,ambiguous:false};
        const close=new Set();
        for(const country of countries){for(const name of validNames(country)){if(name.replace(/\s/g,"").length>=5&&editDistanceAtMostOne(answer,name)===1){close.add(country.id);break;}}}
        if(close.size!==1)return {match:null,ambiguous:close.size>1};
        return {match:countries.find(country=>country.id===[...close][0])||null,ambiguous:false};
    }

    function validateData() {
        if (!payload?.metadata?.source || !payload.metadata.license || countries.length < 100) throw new Error("Country map data did not load.");
        const ids=new Set(),names=new Set();
        for(const country of countries){
            if(!country.id||!country.name||!country.path||country.path.length<25||!regions.some(region=>region[0]===country.region)||!['easy','medium','hard'].includes(country.difficulty)||ids.has(country.id)||names.has(country.name)) throw new Error(`Invalid country silhouette: ${country.name||"unknown"}`);
            ids.add(country.id);names.add(country.name);
        }
    }

    function setLeadingText(selector, value) {
        const node = document.querySelector(selector);
        if (!node) return;
        const textNode = [...node.childNodes].find(child => child.nodeType === Node.TEXT_NODE);
        if (textNode) textNode.nodeValue = value;
        else node.prepend(document.createTextNode(value));
    }
    function applyStaticTranslations() {
        const textTargets = [
            [".wai-intro > .eyebrow","introEyebrow"],[".wai-intro > p:last-child","intro"],[".wai-section-heading .eyebrow","setupEyebrow"],[".wai-section-heading h2","chooseRegion"],
            [".wai-panel-heading .eyebrow","difficultyEyebrow"],[".wai-best-panel .eyebrow","best"],["#wai-start > span:first-child","start"],[".wai-data-note summary","dataSummary"],[".wai-data-note > p","dataDescription"],
            [".wai-instruction .eyebrow","instruction"],[".wai-instruction h2","title"],[".wai-map-caption","mapCaption"],[".wai-answer-form label","answerLabel"],
            ["#wai-next > span:first-child",feedbackType === "correct" || feedbackType === "final" ? "results" : "next"],["#wai-quit","back"],[".wai-results > .eyebrow","resultEyebrow"],
            [".wai-final-score > span","points"],[".wai-result-stats > div:nth-child(1) > span","correctStat"],[".wai-result-stats > div:nth-child(2) > span","wrongStat"],[".wai-result-stats > div:nth-child(3) > span","accuracy"],[".wai-result-stats > div:nth-child(4) > span","bestStreak"],
            ["#wai-play-again > span:first-child","playAgain"],["#wai-back","back"],[".wai-footnote","dataCredit"]
        ];
        for (const [selector,key] of textTargets) {
            const node = document.querySelector(selector);
            if (node) node.textContent = format(key, node.textContent);
        }
        const heading = document.querySelector(".wai-intro h1");
        if (heading) {
            const parts = { en:["Where","Am I?"], nl:["Waar","ben ik?"], de:["Wo","bin ich?"], fr:["Où","suis-je ?"], es:["¿Dónde","estoy?"] }[i18n?.language || "en"] || ["Where","Am I?"];
            const accent = heading.querySelector("span");
            if (accent) accent.textContent = parts[1];
            const prefix = [...heading.childNodes].find(child => child.nodeType === Node.TEXT_NODE);
            if (prefix) prefix.nodeValue = `${parts[0]} `;
        }
        document.querySelector("#wai-region-grid")?.setAttribute("aria-label", format("regionAria", "Choose a region"));
        document.querySelector("#wai-difficulty-options")?.setAttribute("aria-label", format("difficultyAria", "Choose difficulty"));
        document.querySelector("#wai-game")?.setAttribute("aria-label", format("gameAria", "Guess the country"));
        document.querySelector("#wai-map-stage")?.setAttribute("aria-label", format("mapAria", "An unlabeled country outline"));
        el.answer.placeholder = format("placeholder", "Type your answer...");
        const start = document.querySelector("#wai-start");
        if (start) start.querySelector("span:first-child").textContent = format("start", "START PLAYING");
        const submit = document.querySelector("#wai-submit");
        if (submit) setLeadingText("#wai-submit", ` ${format("submit", "Submit Answer")} `);
        const hint = document.querySelector("#wai-hint");
        if (hint) setLeadingText("#wai-hint", ` ${format("hint", "Use a hint")} `);
        const playAgain = document.querySelector("#wai-play-again");
        if (playAgain) playAgain.querySelector("span:first-child").textContent = format("playAgain", "PLAY AGAIN");
        for (const [selector,key] of [[".wai-stats > span:nth-child(1)","round"],[".wai-stats > span:nth-child(2)","score"],[".wai-stats > span:nth-child(3)","streak"]]) {
            const node = document.querySelector(selector);
            if (node) setLeadingText(selector, `${format(key, key.toUpperCase())} `);
        }
    }

    function startGame() {
        const available=shuffle(pool());if(!available.length)return;
        window.JustBecauseProfile?.recordGame("where-am-i");
        run=available.slice(0,Math.min(10,available.length));roundIndex=0;score=0;streak=0;bestStreak=0;correctCount=0;
        el.setup.classList.add("is-hidden");el.results.classList.add("is-hidden");el.game.classList.remove("is-hidden");renderRound();
        el.game.scrollIntoView({behavior:"smooth",block:"start"});
    }
    function renderRound() {
        current=run[roundIndex];attemptsUsed=0;hintsUsed=0;answered=false;feedbackType=null;
        el.shape.setAttribute("d",current.path);el.round.textContent=`${roundIndex+1} / ${run.length}`;el.score.textContent=score;el.streak.textContent=streak;
        el.answer.value="";el.answer.disabled=false;el.submit.disabled=false;
        el.feedback.classList.add("is-hidden");el.feedback.classList.remove("is-correct","is-wrong");el.next.classList.add("is-hidden");
        refreshRound();
    }
    function refreshRound() {
        if (!current) return;
        el.roundRegion.textContent=regionName(current.region);el.roundDifficulty.textContent=difficultyName(current.difficulty);el.roundDifficulty.dataset.level=current.difficulty;
        el.hintsUsed.textContent=format("hintsUsed","Hints used: {count} / 3",{count:hintsUsed});
        el.hintList.replaceChildren();
        for(let index=1;index<=hintsUsed;index++){
            const item=document.createElement("p");
            if(index===1)item.textContent=format("hintContinent",`Continent: ${current.region}.`,{region:regionName(current.region)});
            if(index===2)item.textContent=format("hintFirstLetter",`The name starts with “${countryName(current)[0].toLocaleUpperCase("en")}”.`,{letter:countryName(current)[0].toLocaleUpperCase("en")});
            if(index===3){const name=countryName(current),count=Math.min(3,Math.max(2,Math.ceil(name.length/3)));item.textContent=format("hintNameClue",`Name clue: ${name.slice(0,count)}…`,{clue:name.slice(0,count)});}
            el.hintList.append(item);
        }
        el.attempts.textContent=attemptsUsed===0?format("triesInitial","3 tries left"):format(attemptsUsed===2?"try":"tries",attemptsUsed===2?"1 try left":`${3-attemptsUsed} tries left`,{count:3-attemptsUsed});
        el.hintCount.textContent=hintsUsed===3?format("noHints","No more hints"):format("hintPoints","−20 pts");
        el.hint.disabled=answered||hintsUsed===3;el.hint.classList.toggle("is-used",hintsUsed>0);
        el.answerHelp.textContent=format("answerHelp","Enter a country name in any supported language. Press Enter to submit.");
        if(feedbackType) paintFeedback();
    }
    function useHint() {
        if(answered||hintsUsed>=3)return;
        hintsUsed++;refreshRound();
    }
    function paintFeedback() {
        if(!feedbackType)return;
        const correct=feedbackType==="correct",finalAnswer=feedbackType==="final";
        el.feedback.classList.remove("is-hidden","is-correct","is-wrong");el.feedback.classList.add(correct?"is-correct":"is-wrong");
        el.feedbackMark.textContent=correct?"✓":"!";el.feedbackTitle.textContent=correct?format("correct","Correct!"):finalAnswer?format("answerWas","The answer was:"):format("notQuite","Not quite!");
        if(correct){
            const hintText=hintsUsed?format(hintsUsed===1?"hintSingular":"hintPlural",hintsUsed===1?" with 1 hint":" with {count} hints",{count:hintsUsed}):"";
            el.points.textContent=`+${[100,70,40,20][hintsUsed]} ${format("pointsShort","pts")}`;
            el.feedbackText.textContent=format("correctText",`${countryName(current)} — nicely placed${hintText}.`,{country:countryName(current),hintText});
        }else if(finalAnswer){
            el.points.textContent=`+0 ${format("pointsShort","pts")}`;
            el.feedbackText.textContent=format("finalWrong",`${countryName(current)} was the country. Take another look at its outline before the next round.`,{country:countryName(current)});
        }else{
            el.points.textContent="";
            const remaining=3-attemptsUsed;
            el.feedbackText.textContent=remaining===1?format("wrongOne","Not quite. One try left — take another look."):format("wrongMany",`Not quite. ${remaining} tries left — take another look.`,{count:remaining});
        }
        el.answer.disabled=answered;el.submit.disabled=answered;el.hint.disabled=answered||hintsUsed===3;
        const nextLabel=roundIndex+1===run.length?"results":"next";
        const nextSpan=el.next.querySelector("span");
        if(nextSpan)nextSpan.textContent=format(nextLabel,nextLabel==="results"?"See Results":"Next Country");
    }
    function showFeedback(correct,finalAnswer=false) {
        answered=correct||finalAnswer;feedbackType=correct?"correct":finalAnswer?"final":"wrong";
        if(correct){const award=[100,70,40,20][hintsUsed];score+=award;correctCount++;window.DailyChallenge?.report("where-am-i", correctCount);streak++;bestStreak=Math.max(bestStreak,streak);el.score.textContent=score;el.streak.textContent=streak;}
        else{streak=0;el.streak.textContent=0;}
        if(correct||finalAnswer){
            if(score>storageRead(scoreKey()))storageWrite(scoreKey(),score);el.best.textContent=storageRead(scoreKey());
            el.next.classList.remove("is-hidden");
        }
        paintFeedback();
        if(!correct&&!finalAnswer){el.answer.disabled=false;el.submit.disabled=false;el.hint.disabled=hintsUsed===3;el.answer.focus();}
    }
    function submitAnswer(event) {
        event.preventDefault();if(answered)return;
        const input=el.answer.value.trim();if(!input){el.answerHelp.textContent=format("emptyAnswer","Type a country name before submitting.");el.answer.focus();return;}
        el.answerHelp.textContent=format("answerHelp","Enter a country name in any supported language. Press Enter to submit.");
        const result=findAnswer(input);
        if(result.match?.id===current.id){showFeedback(true);return;}
        attemptsUsed++;el.attempts.textContent=attemptsUsed===2?format("try","1 try left",{count:1}):format("tries",`${3-attemptsUsed} tries left`,{count:3-attemptsUsed});
        if(attemptsUsed>=3){showFeedback(false,true);return;}
        showFeedback(false,false);
    }
    function nextCountry(){if(!answered)return;roundIndex++;if(roundIndex>=run.length){showResults();return;}renderRound();el.game.scrollIntoView({behavior:"smooth",block:"start"});}
    function renderResults(){
        const wrong=run.length-correctCount,accuracy=Math.round(correctCount/run.length*100);el.finalScore.textContent=score;el.correct.textContent=`${correctCount} / ${run.length}`;el.wrong.textContent=wrong;el.accuracy.textContent=`${accuracy}%`;el.bestStreak.textContent=bestStreak;
        if(accuracy===100){el.resultTitle.textContent=format("resultMaster","Geography Master!");el.resultMessage.textContent=format("resultMasterText","Every outline landed in the right place. That's a world-class run.");}
        else if(accuracy>=70){el.resultTitle.textContent=format("resultAmazing","Amazing!");el.resultMessage.textContent=format("resultAmazingText","You know your way around a map. Nicely done.");}
        else if(accuracy>=40){el.resultTitle.textContent=format("resultGreat","Great job!");el.resultMessage.textContent=format("resultGreatText","A few coastlines were tricky. You're getting there.");}
        else{el.resultTitle.textContent=format("resultPractice","Keep practicing!");el.resultMessage.textContent=format("resultPracticeText","Every outline is a new place to learn.");}
    }
    function showResults(){el.game.classList.add("is-hidden");el.results.classList.remove("is-hidden");renderResults();}
    function backToSetup(){el.game.classList.add("is-hidden");el.results.classList.add("is-hidden");el.setup.classList.remove("is-hidden");current=null;feedbackType=null;renderSetup();window.scrollTo({top:0,behavior:"smooth"});}

    if (i18n) i18n.registerCatalog(catalogFromRows());
    applyStaticTranslations();
    el.regions.addEventListener("click",event=>{const button=event.target.closest("[data-region]");if(!button)return;selectedRegion=button.dataset.region;renderSetup();});
    el.difficulties.addEventListener("click",event=>{const button=event.target.closest("[data-difficulty]");if(!button)return;selectedDifficulty=button.dataset.difficulty;renderSetup();});
    el.start.addEventListener("click",startGame);el.playAgain.addEventListener("click",startGame);el.next.addEventListener("click",nextCountry);el.quit.addEventListener("click",backToSetup);el.back.addEventListener("click",backToSetup);el.hint.addEventListener("click",useHint);el.answerForm.addEventListener("submit",submitAnswer);
    window.addEventListener("jb:languagechange",()=>{
        renderSetup();
        refreshRound();
        if(!el.results.classList.contains("is-hidden"))renderResults();
    });
    try{validateData();}catch(error){dataInvalid=true;console.error(error);}
    renderSetup();
})();
