const sortItText = (en, nl, de, fr, es) => [en, nl, de, fr, es];

window.SORT_IT_TASKS = [
    {
        id: "planet-diameters",
        difficulty: "easy",
        prompt: sortItText("Sort the planets by diameter.", "Sorteer de planeten op diameter.", "Sortiere die Planeten nach Durchmesser.", "Classe les planètes par diamètre.", "Ordena los planetas por diámetro."),
        lowLabel: sortItText("Smallest", "Kleinste", "Kleinste", "Plus petite", "Más pequeño"),
        highLabel: sortItText("Largest", "Grootste", "Größte", "Plus grande", "Más grande"),
        unit: sortItText("km", "km", "km", "km", "km"),
        items: [
            { id: "mercury", name: sortItText("Mercury", "Mercurius", "Merkur", "Mercure", "Mercurio"), value: 4879 },
            { id: "mars", name: sortItText("Mars", "Mars", "Mars", "Mars", "Marte"), value: 6779 },
            { id: "venus", name: sortItText("Venus", "Venus", "Venus", "Vénus", "Venus"), value: 12104 },
            { id: "earth", name: sortItText("Earth", "Aarde", "Erde", "Terre", "Tierra"), value: 12742 }
        ]
    },
    {
        id: "mountain-heights",
        difficulty: "easy",
        prompt: sortItText("Sort these mountains by height.", "Sorteer deze bergen op hoogte.", "Sortiere diese Berge nach Höhe.", "Classe ces montagnes par altitude.", "Ordena estas montañas por altura."),
        lowLabel: sortItText("Lowest", "Laagste", "Niedrigste", "Plus basse", "Más baja"),
        highLabel: sortItText("Highest", "Hoogste", "Höchste", "Plus haute", "Más alta"),
        unit: sortItText("m", "m", "m", "m", "m"),
        items: [
            { id: "kilimanjaro", name: sortItText("Kilimanjaro", "Kilimanjaro", "Kilimandscharo", "Kilimandjaro", "Kilimanjaro"), value: 5895 },
            { id: "denali", name: sortItText("Denali", "Denali", "Denali", "Denali", "Denali"), value: 6190 },
            { id: "k2", name: sortItText("K2", "K2", "K2", "K2", "K2"), value: 8611 },
            { id: "everest", name: sortItText("Mount Everest", "Mount Everest", "Mount Everest", "Everest", "Monte Everest"), value: 8849 }
        ]
    },
    {
        id: "country-areas",
        difficulty: "easy",
        prompt: sortItText("Sort these countries by area.", "Sorteer deze landen op oppervlakte.", "Sortiere diese Länder nach Fläche.", "Classe ces pays par superficie.", "Ordena estos países por superficie."),
        lowLabel: sortItText("Smallest", "Kleinste", "Kleinste", "Plus petite", "Menor"),
        highLabel: sortItText("Largest", "Grootste", "Größte", "Plus grande", "Mayor"),
        unit: sortItText("km²", "km²", "km²", "km²", "km²"),
        items: [
            { id: "iceland", name: sortItText("Iceland", "IJsland", "Island", "Islande", "Islandia"), value: 103000 },
            { id: "japan", name: sortItText("Japan", "Japan", "Japan", "Japon", "Japón"), value: 377975 },
            { id: "egypt", name: sortItText("Egypt", "Egypte", "Ägypten", "Égypte", "Egipto"), value: 1001450 },
            { id: "canada", name: sortItText("Canada", "Canada", "Kanada", "Canada", "Canadá"), value: 9984670 }
        ]
    },
    {
        id: "invention-years",
        difficulty: "easy",
        prompt: sortItText("Sort these inventions by year introduced.", "Sorteer deze uitvindingen op introductiejaar.", "Sortiere diese Erfindungen nach ihrem Einführungsjahr.", "Classe ces inventions par année d'apparition.", "Ordena estos inventos por año de aparición."),
        lowLabel: sortItText("Earliest", "Vroegste", "Früheste", "Plus ancienne", "Más antiguo"),
        highLabel: sortItText("Latest", "Laatste", "Neueste", "Plus récente", "Más reciente"),
        unit: sortItText("", "", "", "", ""),
        items: [
            { id: "printing-press", name: sortItText("Printing press", "Boekdrukkunst", "Buchdruck", "Imprimerie", "Imprenta"), value: 1450 },
            { id: "telescope", name: sortItText("Telescope", "Telescoop", "Fernrohr", "Télescope", "Telescopio"), value: 1608 },
            { id: "telephone", name: sortItText("Telephone", "Telefoon", "Telefon", "Téléphone", "Teléfono"), value: 1876 },
            { id: "airplane", name: sortItText("Airplane", "Vliegtuig", "Flugzeug", "Avion", "Avión"), value: 1903 }
        ]
    },
    {
        id: "animal-mass",
        difficulty: "easy",
        prompt: sortItText("Sort these land mammals by typical adult mass.", "Sorteer deze landzoogdieren op hun typische volwassen gewicht.", "Sortiere diese Landsäugetiere nach ihrem typischen Gewicht als Erwachsene.", "Classe ces mammifères terrestres par masse adulte typique.", "Ordena estos mamíferos terrestres por su peso adulto habitual."),
        lowLabel: sortItText("Lightest", "Lichtste", "Leichteste", "Plus léger", "Más ligero"),
        highLabel: sortItText("Heaviest", "Zwaarste", "Schwerste", "Plus lourd", "Más pesado"),
        unit: sortItText("kg", "kg", "kg", "kg", "kg"),
        items: [
            { id: "red-fox", name: sortItText("Red fox", "Rode vos", "Rotfuchs", "Renard roux", "Zorro rojo"), value: 6 },
            { id: "gray-wolf", name: sortItText("Gray wolf", "Grijze wolf", "Wolf", "Loup gris", "Lobo gris"), value: 40 },
            { id: "giraffe", name: sortItText("Giraffe", "Giraf", "Giraffe", "Girafe", "Jirafa"), value: 1000 },
            { id: "african-elephant", name: sortItText("African elephant", "Afrikaanse olifant", "Afrikanischer Elefant", "Éléphant d'Afrique", "Elefante africano"), value: 5500 }
        ]
    },
    {
        id: "gestation-days",
        difficulty: "easy",
        prompt: sortItText("Sort these animals by gestation length.", "Sorteer deze dieren op draagtijd.", "Sortiere diese Tiere nach Tragzeit.", "Classe ces animaux par durée de gestation.", "Ordena estos animales por duración de gestación."),
        lowLabel: sortItText("Shortest", "Kortste", "Kürzeste", "Plus courte", "Más corta"),
        highLabel: sortItText("Longest", "Langste", "Längste", "Plus longue", "Más larga"),
        unit: sortItText("days", "dagen", "Tage", "jours", "días"),
        items: [
            { id: "mouse", name: sortItText("Mouse", "Muis", "Maus", "Souris", "Ratón"), value: 20 },
            { id: "dog", name: sortItText("Dog", "Hond", "Hund", "Chien", "Perro"), value: 63 },
            { id: "human", name: sortItText("Human", "Mens", "Mensch", "Humain", "Humano"), value: 280 },
            { id: "elephant", name: sortItText("Elephant", "Olifant", "Elefant", "Éléphant", "Elefante"), value: 660 }
        ]
    },
    {
        id: "lake-areas",
        difficulty: "easy",
        prompt: sortItText("Sort these lakes by surface area.", "Sorteer deze meren op oppervlakte.", "Sortiere diese Seen nach Fläche.", "Classe ces lacs par superficie.", "Ordena estos lagos por superficie."),
        lowLabel: sortItText("Smallest", "Kleinste", "Kleinste", "Plus petit", "Menor"),
        highLabel: sortItText("Largest", "Grootste", "Größte", "Plus grand", "Mayor"),
        unit: sortItText("km²", "km²", "km²", "km²", "km²"),
        items: [
            { id: "lake-tahoe", name: sortItText("Lake Tahoe", "Lake Tahoe", "Lake Tahoe", "Lac Tahoe", "Lago Tahoe"), value: 496 },
            { id: "lake-geneva", name: sortItText("Lake Geneva", "Meer van Genève", "Genfersee", "Lac Léman", "Lago Lemán"), value: 580 },
            { id: "lake-ontario", name: sortItText("Lake Ontario", "Lake Ontario", "Ontariosee", "Lac Ontario", "Lago Ontario"), value: 18960 },
            { id: "lake-victoria", name: sortItText("Lake Victoria", "Victoriameer", "Victoriasee", "Lac Victoria", "Lago Victoria"), value: 68870 }
        ]
    },
    {
        id: "tree-heights",
        difficulty: "easy",
        prompt: sortItText("Sort these trees by notable maximum height.", "Sorteer deze bomen op opvallende maximale hoogte.", "Sortiere diese Bäume nach ihrer bemerkenswerten Maximalhöhe.", "Classe ces arbres par hauteur maximale remarquable.", "Ordena estos árboles por su altura máxima destacada."),
        lowLabel: sortItText("Shortest", "Laagste", "Niedrigste", "Plus petit", "Más bajo"),
        highLabel: sortItText("Tallest", "Hoogste", "Höchste", "Plus grand", "Más alto"),
        unit: sortItText("m", "m", "m", "m", "m"),
        items: [
            { id: "apple-tree", name: sortItText("Apple tree", "Appelboom", "Apfelbaum", "Pommier", "Manzano"), value: 10 },
            { id: "oak", name: sortItText("Oak", "Eik", "Eiche", "Chêne", "Roble"), value: 30 },
            { id: "giant-sequoia", name: sortItText("Giant sequoia", "Mammoetboom", "Riesenmammutbaum", "Séquoia géant", "Secuoya gigante"), value: 95 },
            { id: "coast-redwood", name: sortItText("Coast redwood", "Kustmammoetboom", "Küstenmammutbaum", "Séquoia à feuilles d'if", "Secuoya de costa"), value: 115 }
        ]
    },
    {
        id: "animal-speed",
        difficulty: "medium",
        prompt: sortItText("Sort these animals by approximate top speed on land.", "Sorteer deze dieren op geschatte topsnelheid op het land.", "Sortiere diese Tiere nach ihrer ungefähren Höchstgeschwindigkeit an Land.", "Classe ces animaux par vitesse maximale approximative sur terre.", "Ordena estos animales por su velocidad máxima aproximada en tierra."),
        lowLabel: sortItText("Slowest", "Langzaamste", "Langsamste", "Plus lent", "Más lento"),
        highLabel: sortItText("Fastest", "Snelste", "Schnellste", "Plus rapide", "Más rápido"),
        unit: sortItText("km/h", "km/u", "km/h", "km/h", "km/h"),
        items: [
            { id: "house-cat", name: sortItText("House cat", "Huiskat", "Hauskatze", "Chat domestique", "Gato doméstico"), value: 48 },
            { id: "lion", name: sortItText("Lion", "Leeuw", "Löwe", "Lion", "León"), value: 80 },
            { id: "horse", name: sortItText("Horse", "Paard", "Pferd", "Cheval", "Caballo"), value: 88 },
            { id: "pronghorn", name: sortItText("Pronghorn", "Gaffelbok", "Gabelbock", "Antilocapre", "Berrendo"), value: 98 },
            { id: "cheetah", name: sortItText("Cheetah", "Jachtluipaard", "Gepard", "Guépard", "Guepardo"), value: 110 }
        ]
    },
    {
        id: "country-population",
        difficulty: "medium",
        prompt: sortItText("Sort these countries by estimated population (2024).", "Sorteer deze landen op geschatte bevolking (2024).", "Sortiere diese Länder nach geschätzter Bevölkerung (2024).", "Classe ces pays par population estimée (2024).", "Ordena estos países por población estimada (2024)."),
        lowLabel: sortItText("Fewest people", "Minste inwoners", "Wenigste Einwohner", "Moins d'habitants", "Menos habitantes"),
        highLabel: sortItText("Most people", "Meeste inwoners", "Meiste Einwohner", "Plus d'habitants", "Más habitantes"),
        unit: sortItText("million people", "miljoen inwoners", "Millionen Einwohner", "millions d'habitants", "millones de habitantes"),
        items: [
            { id: "brazil", name: sortItText("Brazil", "Brazilië", "Brasilien", "Brésil", "Brasil"), value: 212 },
            { id: "indonesia", name: sortItText("Indonesia", "Indonesië", "Indonesien", "Indonésie", "Indonesia"), value: 283 },
            { id: "united-states", name: sortItText("United States", "Verenigde Staten", "Vereinigte Staaten", "États-Unis", "Estados Unidos"), value: 345 },
            { id: "china", name: sortItText("China", "China", "China", "Chine", "China"), value: 1419 },
            { id: "india", name: sortItText("India", "India", "Indien", "Inde", "India"), value: 1450 }
        ]
    },
    {
        id: "building-heights",
        difficulty: "medium",
        prompt: sortItText("Sort these structures by total height.", "Sorteer deze bouwwerken op totale hoogte.", "Sortiere diese Bauwerke nach Gesamthöhe.", "Classe ces structures par hauteur totale.", "Ordena estas estructuras por altura total."),
        lowLabel: sortItText("Lowest", "Laagste", "Niedrigste", "Plus basse", "Más baja"),
        highLabel: sortItText("Highest", "Hoogste", "Höchste", "Plus haute", "Más alta"),
        unit: sortItText("m", "m", "m", "m", "m"),
        items: [
            { id: "statue-liberty", name: sortItText("Statue of Liberty", "Vrijheidsbeeld", "Freiheitsstatue", "Statue de la Liberté", "Estatua de la Libertad"), value: 93 },
            { id: "eiffel-tower", name: sortItText("Eiffel Tower", "Eiffeltoren", "Eiffelturm", "Tour Eiffel", "Torre Eiffel"), value: 330 },
            { id: "empire-state", name: sortItText("Empire State Building", "Empire State Building", "Empire State Building", "Empire State Building", "Empire State Building"), value: 443 },
            { id: "taipei-101", name: sortItText("Taipei 101", "Taipei 101", "Taipei 101", "Taipei 101", "Taipei 101"), value: 508 },
            { id: "shanghai-tower", name: sortItText("Shanghai Tower", "Shanghai Tower", "Shanghai Tower", "Tour de Shanghai", "Torre de Shanghái"), value: 632 }
        ]
    },
    {
        id: "planet-distance",
        difficulty: "medium",
        prompt: sortItText("Sort these planets by average distance from the Sun.", "Sorteer deze planeten op gemiddelde afstand tot de zon.", "Sortiere diese Planeten nach ihrer mittleren Entfernung zur Sonne.", "Classe ces planètes par distance moyenne au Soleil.", "Ordena estos planetas por su distancia media al Sol."),
        lowLabel: sortItText("Closest", "Dichtstbij", "Am nächsten", "Plus proche", "Más cercano"),
        highLabel: sortItText("Farthest", "Verst weg", "Am weitesten", "Plus éloigné", "Más lejano"),
        unit: sortItText("million km", "miljoen km", "Millionen km", "millions de km", "millones de km"),
        items: [
            { id: "mercury", name: sortItText("Mercury", "Mercurius", "Merkur", "Mercure", "Mercurio"), value: 58 },
            { id: "venus", name: sortItText("Venus", "Venus", "Venus", "Vénus", "Venus"), value: 108 },
            { id: "earth", name: sortItText("Earth", "Aarde", "Erde", "Terre", "Tierra"), value: 150 },
            { id: "mars", name: sortItText("Mars", "Mars", "Mars", "Mars", "Marte"), value: 228 },
            { id: "jupiter", name: sortItText("Jupiter", "Jupiter", "Jupiter", "Jupiter", "Júpiter"), value: 778 }
        ]
    },
    {
        id: "object-mass",
        difficulty: "medium",
        prompt: sortItText("Sort these everyday items by approximate mass.", "Sorteer deze alledaagse voorwerpen op geschat gewicht.", "Sortiere diese Alltagsgegenstände nach ihrer ungefähren Masse.", "Classe ces objets du quotidien par masse approximative.", "Ordena estos objetos cotidianos por su masa aproximada."),
        lowLabel: sortItText("Lightest", "Lichtste", "Leichteste", "Plus léger", "Más ligero"),
        highLabel: sortItText("Heaviest", "Zwaarste", "Schwerste", "Plus lourd", "Más pesado"),
        unit: sortItText("kg", "kg", "kg", "kg", "kg"),
        items: [
            { id: "laptop", name: sortItText("Laptop", "Laptop", "Laptop", "Ordinateur portable", "Portátil"), value: 1.5 },
            { id: "bicycle", name: sortItText("Bicycle", "Fiets", "Fahrrad", "Vélo", "Bicicleta"), value: 12 },
            { id: "washing-machine", name: sortItText("Washing machine", "Wasmachine", "Waschmaschine", "Lave-linge", "Lavadora"), value: 70 },
            { id: "motorcycle", name: sortItText("Motorcycle", "Motorfiets", "Motorrad", "Moto", "Motocicleta"), value: 200 },
            { id: "small-car", name: sortItText("Small car", "Kleine auto", "Kleinwagen", "Petite voiture", "Coche pequeño"), value: 1200 }
        ]
    },
    {
        id: "river-lengths",
        difficulty: "medium",
        prompt: sortItText("Sort these rivers by commonly cited length.", "Sorteer deze rivieren op de vaak genoemde lengte.", "Sortiere diese Flüsse nach ihrer häufig angegebenen Länge.", "Classe ces fleuves selon leur longueur généralement citée.", "Ordena estos ríos por su longitud más citada."),
        lowLabel: sortItText("Shortest", "Kortste", "Kürzeste", "Plus court", "Más corto"),
        highLabel: sortItText("Longest", "Langste", "Längste", "Plus long", "Más largo"),
        unit: sortItText("km", "km", "km", "km", "km"),
        items: [
            { id: "seine", name: sortItText("Seine", "Seine", "Seine", "Seine", "Sena"), value: 777 },
            { id: "rhine", name: sortItText("Rhine", "Rijn", "Rhein", "Rhin", "Rin"), value: 1230 },
            { id: "yangtze", name: sortItText("Yangtze", "Jangtsekiang", "Jangtsekiang", "Yangtsé", "Yangtsé"), value: 6300 },
            { id: "amazon", name: sortItText("Amazon", "Amazone", "Amazonas", "Amazone", "Amazonas"), value: 6400 },
            { id: "nile", name: sortItText("Nile", "Nijl", "Nil", "Nil", "Nilo"), value: 6650 }
        ]
    },
    {
        id: "bird-wingspans",
        difficulty: "medium",
        prompt: sortItText("Sort these birds by approximate wingspan.", "Sorteer deze vogels op geschatte spanwijdte.", "Sortiere diese Vögel nach ihrer ungefähren Flügelspannweite.", "Classe ces oiseaux par envergure approximative.", "Ordena estas aves por envergadura aproximada."),
        lowLabel: sortItText("Narrowest", "Kleinste", "Kleinste", "Plus petite", "Menor"),
        highLabel: sortItText("Widest", "Grootste", "Größte", "Plus grande", "Mayor"),
        unit: sortItText("cm", "cm", "cm", "cm", "cm"),
        items: [
            { id: "bee-hummingbird", name: sortItText("Bee hummingbird", "Bijkolibrie", "Bienenelfe", "Colibri d'Elena", "Colibrí zunzuncito"), value: 12 },
            { id: "house-sparrow", name: sortItText("House sparrow", "Huismus", "Haussperling", "Moineau domestique", "Gorrión común"), value: 20 },
            { id: "rock-pigeon", name: sortItText("Rock pigeon", "Rotsduif", "Felsentaube", "Pigeon biset", "Paloma bravía"), value: 66 },
            { id: "bald-eagle", name: sortItText("Bald eagle", "Amerikaanse zeearend", "Weißkopfseeadler", "Pygargue à tête blanche", "Pigargo americano"), value: 203 },
            { id: "wandering-albatross", name: sortItText("Wandering albatross", "Grote albatros", "Wanderalbatros", "Albatros hurleur", "Albatros viajero"), value: 350 }
        ]
    },
    {
        id: "mammal-lifespans",
        difficulty: "medium",
        prompt: sortItText("Sort these mammals by approximate lifespan.", "Sorteer deze zoogdieren op geschatte levensduur.", "Sortiere diese Säugetiere nach ihrer ungefähren Lebenserwartung.", "Classe ces mammifères par durée de vie approximative.", "Ordena estos mamíferos por su esperanza de vida aproximada."),
        lowLabel: sortItText("Shortest-lived", "Kortstlevend", "Kürzeste Lebensdauer", "Vie la plus courte", "Menor vida"),
        highLabel: sortItText("Longest-lived", "Langstlevend", "Längste Lebensdauer", "Vie la plus longue", "Mayor vida"),
        unit: sortItText("years", "jaar", "Jahre", "ans", "años"),
        items: [
            { id: "rabbit", name: sortItText("Rabbit", "Konijn", "Kaninchen", "Lapin", "Conejo"), value: 9 },
            { id: "dog", name: sortItText("Dog", "Hond", "Hund", "Chien", "Perro"), value: 13 },
            { id: "horse", name: sortItText("Horse", "Paard", "Pferd", "Cheval", "Caballo"), value: 30 },
            { id: "elephant", name: sortItText("Elephant", "Olifant", "Elefant", "Éléphant", "Elefante"), value: 65 },
            { id: "bowhead-whale", name: sortItText("Bowhead whale", "Groenlandse walvis", "Grönlandwal", "Baleine boréale", "Ballena boreal"), value: 200 }
        ]
    },
    {
        id: "stadium-capacities",
        difficulty: "medium",
        prompt: sortItText("Sort these stadiums by approximate capacity.", "Sorteer deze stadions op geschatte capaciteit.", "Sortiere diese Stadien nach ihrer ungefähren Kapazität.", "Classe ces stades par capacité approximative.", "Ordena estos estadios por capacidad aproximada."),
        lowLabel: sortItText("Fewest seats", "Minste plaatsen", "Wenigste Plätze", "Moins de places", "Menos asientos"),
        highLabel: sortItText("Most seats", "Meeste plaatsen", "Meiste Plätze", "Plus de places", "Más asientos"),
        unit: sortItText("seats", "plaatsen", "Plätze", "places", "asientos"),
        items: [
            { id: "centre-court", name: sortItText("Wimbledon Centre Court", "Centre Court (Wimbledon)", "Centre Court (Wimbledon)", "Court central de Wimbledon", "Pista Central de Wimbledon"), value: 15000 },
            { id: "msg", name: sortItText("Madison Square Garden", "Madison Square Garden", "Madison Square Garden", "Madison Square Garden", "Madison Square Garden"), value: 20789 },
            { id: "wembley", name: sortItText("Wembley Stadium", "Wembley Stadium", "Wembley-Stadion", "Stade de Wembley", "Estadio de Wembley"), value: 90000 },
            { id: "camp-nou", name: sortItText("Camp Nou", "Camp Nou", "Camp Nou", "Camp Nou", "Camp Nou"), value: 99354 },
            { id: "narendra-modi", name: sortItText("Narendra Modi Stadium", "Narendra Modi Stadium", "Narendra-Modi-Stadion", "Stade Narendra Modi", "Estadio Narendra Modi"), value: 132000 }
        ]
    },
    {
        id: "food-calories",
        difficulty: "hard",
        prompt: sortItText("Sort these foods by approximate calories per 100 g.", "Sorteer deze voedingsmiddelen op geschatte calorieën per 100 g.", "Sortiere diese Lebensmittel nach ungefähren Kalorien pro 100 g.", "Classe ces aliments par calories approximatives pour 100 g.", "Ordena estos alimentos por calorías aproximadas por 100 g."),
        lowLabel: sortItText("Fewest calories", "Minste calorieën", "Wenigste Kalorien", "Moins de calories", "Menos calorías"),
        highLabel: sortItText("Most calories", "Meeste calorieën", "Meiste Kalorien", "Plus de calories", "Más calorías"),
        unit: sortItText("kcal", "kcal", "kcal", "kcal", "kcal"),
        items: [
            { id: "celery", name: sortItText("Celery", "Bleekselderij", "Sellerie", "Céleri", "Apio"), value: 14 },
            { id: "apple", name: sortItText("Apple", "Appel", "Apfel", "Pomme", "Manzana"), value: 52 },
            { id: "banana", name: sortItText("Banana", "Banaan", "Banane", "Banane", "Plátano"), value: 89 },
            { id: "avocado", name: sortItText("Avocado", "Avocado", "Avocado", "Avocat", "Aguacate"), value: 160 },
            { id: "walnuts", name: sortItText("Walnuts", "Walnoten", "Walnüsse", "Noix", "Nueces"), value: 654 },
            { id: "olive-oil", name: sortItText("Olive oil", "Olijfolie", "Olivenöl", "Huile d'olive", "Aceite de oliva"), value: 884 }
        ]
    },
    {
        id: "car-acceleration",
        difficulty: "hard",
        prompt: sortItText("Sort these 0–100 km/h times from quickest to slowest.", "Sorteer deze 0–100 km/u-tijden van snelst naar langzaamst.", "Sortiere diese 0–100-km/h-Zeiten von schnell nach langsam.", "Classe ces temps de 0 à 100 km/h du plus rapide au plus lent.", "Ordena estos tiempos de 0 a 100 km/h del más rápido al más lento."),
        lowLabel: sortItText("Quickest", "Snelste", "Schnellste", "Plus rapide", "Más rápido"),
        highLabel: sortItText("Slowest", "Langzaamste", "Langsamste", "Plus lent", "Más lento"),
        unit: sortItText("seconds", "seconden", "Sekunden", "secondes", "segundos"),
        items: [
            { id: "tesla-plaid", name: sortItText("Tesla Model S Plaid", "Tesla Model S Plaid", "Tesla Model S Plaid", "Tesla Model S Plaid", "Tesla Model S Plaid"), value: 2.1 },
            { id: "porsche-turbo", name: sortItText("Porsche 911 Turbo S", "Porsche 911 Turbo S", "Porsche 911 Turbo S", "Porsche 911 Turbo S", "Porsche 911 Turbo S"), value: 2.7 },
            { id: "bmw-m3", name: sortItText("BMW M3 Competition", "BMW M3 Competition", "BMW M3 Competition", "BMW M3 Competition", "BMW M3 Competition"), value: 3.9 },
            { id: "golf-gti", name: sortItText("Volkswagen Golf GTI", "Volkswagen Golf GTI", "Volkswagen Golf GTI", "Volkswagen Golf GTI", "Volkswagen Golf GTI"), value: 6.4 },
            { id: "toyota-corolla", name: sortItText("Toyota Corolla", "Toyota Corolla", "Toyota Corolla", "Toyota Corolla", "Toyota Corolla"), value: 8.2 },
            { id: "city-car", name: sortItText("Small city car", "Kleine stadsauto", "Kleiner Stadtwagen", "Petite citadine", "Coche urbano pequeño"), value: 11 }
        ]
    },
    {
        id: "city-elevations",
        difficulty: "hard",
        prompt: sortItText("Sort these cities by elevation above sea level.", "Sorteer deze steden op hoogte boven zeeniveau.", "Sortiere diese Städte nach ihrer Höhe über dem Meeresspiegel.", "Classe ces villes par altitude au-dessus du niveau de la mer.", "Ordena estas ciudades por altitud sobre el nivel del mar."),
        lowLabel: sortItText("Lowest", "Laagste", "Niedrigste", "Plus basse", "Más baja"),
        highLabel: sortItText("Highest", "Hoogste", "Höchste", "Plus haute", "Más alta"),
        unit: sortItText("m", "m", "m", "m", "m"),
        items: [
            { id: "kathmandu", name: sortItText("Kathmandu", "Kathmandu", "Kathmandu", "Katmandou", "Katmandú"), value: 1400 },
            { id: "mexico-city", name: sortItText("Mexico City", "Mexico-Stad", "Mexiko-Stadt", "Mexico", "Ciudad de México"), value: 2240 },
            { id: "bogota", name: sortItText("Bogotá", "Bogotá", "Bogotá", "Bogotá", "Bogotá"), value: 2640 },
            { id: "quito", name: sortItText("Quito", "Quito", "Quito", "Quito", "Quito"), value: 2850 },
            { id: "la-paz", name: sortItText("La Paz", "La Paz", "La Paz", "La Paz", "La Paz"), value: 3640 },
            { id: "el-alto", name: sortItText("El Alto", "El Alto", "El Alto", "El Alto", "El Alto"), value: 4150 }
        ]
    },
    {
        id: "landmark-completion-years",
        difficulty: "hard",
        prompt: sortItText("Sort these landmarks by completion year.", "Sorteer deze bezienswaardigheden op opleverjaar.", "Sortiere diese Wahrzeichen nach ihrem Fertigstellungsjahr.", "Classe ces monuments par année d'achèvement.", "Ordena estos monumentos por año de finalización."),
        lowLabel: sortItText("Oldest", "Oudste", "Älteste", "Plus ancien", "Más antiguo"),
        highLabel: sortItText("Newest", "Nieuwste", "Neueste", "Plus récent", "Más reciente"),
        unit: sortItText("", "", "", "", ""),
        items: [
            { id: "statue-liberty", name: sortItText("Statue of Liberty", "Vrijheidsbeeld", "Freiheitsstatue", "Statue de la Liberté", "Estatua de la Libertad"), value: 1886 },
            { id: "eiffel-tower", name: sortItText("Eiffel Tower", "Eiffeltoren", "Eiffelturm", "Tour Eiffel", "Torre Eiffel"), value: 1889 },
            { id: "empire-state", name: sortItText("Empire State Building", "Empire State Building", "Empire State Building", "Empire State Building", "Empire State Building"), value: 1931 },
            { id: "sydney-opera", name: sortItText("Sydney Opera House", "Sydney Opera House", "Opernhaus Sydney", "Opéra de Sydney", "Ópera de Sídney"), value: 1973 },
            { id: "cn-tower", name: sortItText("CN Tower", "CN Tower", "CN Tower", "Tour CN", "Torre CN"), value: 1976 },
            { id: "burj-khalifa", name: sortItText("Burj Khalifa", "Burj Khalifa", "Burj Khalifa", "Burj Khalifa", "Burj Khalifa"), value: 2010 }
        ]
    },
    {
        id: "slow-to-fast-animals",
        difficulty: "hard",
        prompt: sortItText("Sort these animals by approximate top speed on land.", "Sorteer deze dieren op geschatte topsnelheid op het land.", "Sortiere diese Tiere nach ihrer ungefähren Höchstgeschwindigkeit an Land.", "Classe ces animaux par vitesse maximale approximative sur terre.", "Ordena estos animales por su velocidad máxima aproximada en tierra."),
        lowLabel: sortItText("Slowest", "Langzaamste", "Langsamste", "Plus lent", "Más lento"),
        highLabel: sortItText("Fastest", "Snelste", "Schnellste", "Plus rapide", "Más rápido"),
        unit: sortItText("km/h", "km/u", "km/h", "km/h", "km/h"),
        items: [
            { id: "garden-snail", name: sortItText("Garden snail", "Wijngaardslak", "Weinbergschnecke", "Escargot de jardin", "Caracol de jardín"), value: 0.05 },
            { id: "sloth", name: sortItText("Three-toed sloth", "Drievingerige luiaard", "Dreifingerfaultier", "Paresseux à trois doigts", "Perezoso de tres dedos"), value: 0.27 },
            { id: "giant-tortoise", name: sortItText("Giant tortoise", "Reuzenschildpad", "Riesenschildkröte", "Tortue géante", "Tortuga gigante"), value: 0.3 },
            { id: "elephant", name: sortItText("Elephant", "Olifant", "Elefant", "Éléphant", "Elefante"), value: 40 },
            { id: "human-sprint", name: sortItText("Human sprinter", "Menselijke sprinter", "Menschlicher Sprinter", "Sprinteur humain", "Velocista humano"), value: 44.7 },
            { id: "cheetah", name: sortItText("Cheetah", "Jachtluipaard", "Gepard", "Guépard", "Guepardo"), value: 100 }
        ]
    },
    {
        id: "element-atomic-mass",
        difficulty: "hard",
        prompt: sortItText("Sort these elements by atomic mass.", "Sorteer deze elementen op atoommassa.", "Sortiere diese Elemente nach Atommasse.", "Classe ces éléments par masse atomique.", "Ordena estos elementos por masa atómica."),
        lowLabel: sortItText("Lightest", "Lichtste", "Leichteste", "Plus léger", "Más ligero"),
        highLabel: sortItText("Heaviest", "Zwaarste", "Schwerste", "Plus lourd", "Más pesado"),
        unit: sortItText("u", "u", "u", "u", "u"),
        items: [
            { id: "carbon", name: sortItText("Carbon", "Koolstof", "Kohlenstoff", "Carbone", "Carbono"), value: 12.011 },
            { id: "nitrogen", name: sortItText("Nitrogen", "Stikstof", "Stickstoff", "Azote", "Nitrógeno"), value: 14.007 },
            { id: "oxygen", name: sortItText("Oxygen", "Zuurstof", "Sauerstoff", "Oxygène", "Oxígeno"), value: 15.999 },
            { id: "sodium", name: sortItText("Sodium", "Natrium", "Natrium", "Sodium", "Sodio"), value: 22.99 },
            { id: "magnesium", name: sortItText("Magnesium", "Magnesium", "Magnesium", "Magnésium", "Magnesio"), value: 24.305 },
            { id: "silicon", name: sortItText("Silicon", "Silicium", "Silizium", "Silicium", "Silicio"), value: 28.085 }
        ]
    },
    {
        id: "vehicle-mass",
        difficulty: "hard",
        prompt: sortItText("Sort these vehicles by approximate empty mass.", "Sorteer deze voertuigen op geschat leeggewicht.", "Sortiere diese Fahrzeuge nach ihrem ungefähren Leergewicht.", "Classe ces véhicules par masse à vide approximative.", "Ordena estos vehículos por su masa en vacío aproximada."),
        lowLabel: sortItText("Lightest", "Lichtste", "Leichteste", "Plus léger", "Más ligero"),
        highLabel: sortItText("Heaviest", "Zwaarste", "Schwerste", "Plus lourd", "Más pesado"),
        unit: sortItText("kg", "kg", "kg", "kg", "kg"),
        items: [
            { id: "ultralight-aircraft", name: sortItText("Ultralight aircraft", "Ultralicht vliegtuig", "Ultraleichtflugzeug", "ULM", "Avión ultraligero"), value: 250 },
            { id: "compact-car", name: sortItText("Compact car", "Compacte auto", "Kompaktwagen", "Voiture compacte", "Coche compacto"), value: 1400 },
            { id: "pickup-truck", name: sortItText("Pickup truck", "Pick-up", "Pickup", "Pick-up", "Camioneta"), value: 2500 },
            { id: "helicopter", name: sortItText("Small helicopter", "Kleine helikopter", "Kleiner Hubschrauber", "Petit hélicoptère", "Helicóptero pequeño"), value: 3000 },
            { id: "city-bus", name: sortItText("City bus", "Stadsbus", "Stadtbus", "Bus urbain", "Autobús urbano"), value: 12000 },
            { id: "boeing-737", name: sortItText("Boeing 737 (empty)", "Boeing 737 (leeg)", "Boeing 737 (leer)", "Boeing 737 (à vide)", "Boeing 737 (vacío)"), value: 41400 }
        ]
    },
    {
        id: "ocean-trench-depth",
        difficulty: "hard",
        prompt: sortItText("Sort these ocean trenches by maximum depth.", "Sorteer deze oceaantroggen op maximale diepte.", "Sortiere diese Tiefseegräben nach ihrer maximalen Tiefe.", "Classe ces fosses océaniques par profondeur maximale.", "Ordena estas fosas oceánicas por profundidad máxima."),
        lowLabel: sortItText("Shallowest", "Ondiepste", "Flachste", "Moins profonde", "Menos profunda"),
        highLabel: sortItText("Deepest", "Diepste", "Tiefste", "Plus profonde", "Más profunda"),
        unit: sortItText("m", "m", "m", "m", "m"),
        items: [
            { id: "java-trench", name: sortItText("Java Trench", "Trog van Java", "Javagraben", "Fosse de Java", "Fosa de Java"), value: 7290 },
            { id: "puerto-rico-trench", name: sortItText("Puerto Rico Trench", "Trog van Puerto Rico", "Puerto-Rico-Graben", "Fosse de Porto Rico", "Fosa de Puerto Rico"), value: 8376 },
            { id: "kermadec-trench", name: sortItText("Kermadec Trench", "Kermadectrog", "Kermadecgraben", "Fosse des Kermadec", "Fosa de Kermadec"), value: 10047 },
            { id: "philippine-trench", name: sortItText("Philippine Trench", "Filipijnentrog", "Philippinengraben", "Fosse des Philippines", "Fosa de Filipinas"), value: 10540 },
            { id: "tonga-trench", name: sortItText("Tonga Trench", "Tonga-trog", "Tongagraben", "Fosse des Tonga", "Fosa de Tonga"), value: 10882 },
            { id: "mariana-trench", name: sortItText("Mariana Trench", "Marianentrog", "Marianengraben", "Fosse des Mariannes", "Fosa de las Marianas"), value: 10984 }
        ]
    }
];
