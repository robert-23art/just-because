// Curated questions. Each entry has three items in `group` and one `odd` answer.
const ODD_ONE_OUT_DATA = {
    roundsPerGame: 10,
    questionsPerCategory: 20,
    categories: [
        { id: "food", name: "Food & Drinks", icon: "food" },
        { id: "sports", name: "Sports", icon: "sports" },
        { id: "animals", name: "Animals", icon: "animals" },
        { id: "geography", name: "Countries & Geography", icon: "geography" },
        { id: "technology", name: "Technology", icon: "technology" },
        { id: "nature", name: "Nature", icon: "nature" },
        { id: "movies-tv", name: "Movies & TV", icon: "movies" },
        { id: "video-games", name: "Video Games", icon: "games" },
        { id: "brands", name: "Brands", icon: "brands" },
        { id: "objects", name: "Everyday Objects", icon: "objects" },
        { id: "music", name: "Music", icon: "music" },
        { id: "vehicles", name: "Vehicles", icon: "vehicles" }
    ],
    // Twenty rows per category, in the same order as `categories`.
    // [difficulty, four fixed choices, odd answer, shared link, explanation]
    questions: [
        // FOOD & DRINKS — 5 easy, 5 medium, 5 hard
        ["easy", ["Apple", "Banana", "Carrot", "Strawberry"], "Carrot", "fruits", "The other three are fruits; a carrot is a vegetable."],
        ["easy", ["Pizza", "Orange", "Hamburger", "Hot dog"], "Orange", "fast-food meals", "The other three are common fast-food meals; an orange is a fruit."],
        ["easy", ["Coffee", "Tea", "Fork", "Lemonade"], "Fork", "drinks", "The other three are drinks; a fork is a utensil."],
        ["easy", ["Rice", "Bread", "Bicycle", "Pasta"], "Bicycle", "staple foods", "The other three are foods made from grains; a bicycle is a vehicle."],
        ["easy", ["Salmon", "Tuna", "Eagle", "Trout"], "Eagle", "fish", "The other three are fish; an eagle is a bird."],
        ["medium", ["Lemon", "Potato", "Lime", "Grapefruit"], "Potato", "citrus fruits", "The other three are citrus fruits; a potato is a tuber."],
        ["medium", ["Cookie", "Brownie", "Iced coffee", "Cupcake"], "Iced coffee", "sweet baked treats", "The other three are baked desserts; iced coffee is a drink."],
        ["medium", ["Milk", "Orange juice", "Yogurt", "Water"], "Yogurt", "drinks", "The other three are drinks; yogurt is eaten with a spoon."],
        ["medium", ["Onion", "Garlic", "Ginger", "Watermelon"], "Watermelon", "savory cooking ingredients", "The other three are savory ingredients used in cooking; watermelon is a sweet fruit."],
        ["medium", ["French fries", "Onion rings", "Apple pie", "Mozzarella sticks"], "Apple pie", "savory fried snacks", "The other three are savory fried snacks; apple pie is a dessert."],
        ["hard", ["Cheddar", "Mozzarella", "Brie", "Hummus"], "Hummus", "cheeses", "The other three are cheeses made from milk; hummus is a chickpea spread."],
        ["hard", ["Rice", "Oats", "Barley", "Lentils"], "Lentils", "cereal grains", "The other three are cereal grains; lentils are legumes."],
        ["hard", ["Maple syrup", "Honey", "Agave syrup", "Olive oil"], "Olive oil", "sweeteners", "The other three are sweeteners; olive oil is a cooking fat."],
        ["hard", ["Ravioli", "Lasagna", "Spaghetti", "Risotto"], "Risotto", "pasta dishes", "The other three are pasta dishes; risotto is made with rice."],
        ["hard", ["Tofu", "Tempeh", "Edamame", "Salmon"], "Salmon", "soy foods", "The other three are made from soybeans; salmon is a fish."],
        ["easy", ["Mango", "Peach", "Plum", "Cucumber"], "Cucumber", "stone fruits", "The other three are stone fruits; cucumber is commonly treated as a vegetable."],
        ["easy", ["Cola", "Lemonade", "Iced tea", "Doughnut"], "Doughnut", "drinks", "The other three are drinks; a doughnut is a pastry."],
        ["medium", ["Baguette", "Ciabatta", "Sourdough", "Couscous"], "Couscous", "types of bread", "The other three are breads; couscous is a grain product served as a dish."],
        ["medium", ["Raisin", "Date", "Fig", "Almond"], "Almond", "dried fruits", "The other three are dried fruits; an almond is a nut."],
        ["hard", ["Couscous", "Bulgur", "Quinoa", "Chickpea"], "Chickpea", "grains and pseudocereals", "Couscous, bulgur, and quinoa are grains or pseudocereals; chickpeas are legumes."],

        // SPORTS
        ["easy", ["Tennis", "Badminton", "Squash", "Boxing"], "Boxing", "racket sports", "The other three are played with rackets; boxing is a combat sport."],
        ["easy", ["Football", "Basketball", "Volleyball", "Swimming"], "Swimming", "ball sports", "The other three are ball sports; swimming is not played with a ball."],
        ["easy", ["Skiing", "Snowboarding", "Ice skating", "Cycling"], "Cycling", "winter sports", "The other three are commonly practiced on snow or ice; cycling is not."],
        ["easy", ["100-metre sprint", "Relay race", "Marathon", "High jump"], "High jump", "running races", "The other three are running races; high jump is a field event."],
        ["easy", ["Archery", "Fencing", "Boxing", "Surfing"], "Surfing", "combat sports", "The other three are combat or weapon sports; surfing is a water sport."],
        ["medium", ["Goalkeeper", "Referee", "Striker", "Quarterback"], "Quarterback", "association football roles", "The other three are roles in association football; quarterback is an American football position."],
        ["medium", ["Skis", "Snowboard", "Ice skates", "Tennis racket"], "Tennis racket", "winter-sport equipment", "The other three are used for winter sports; a tennis racket is not."],
        ["medium", ["100-metre sprint", "200-metre sprint", "400-metre race", "Long jump"], "Long jump", "track races", "The other three are track races; long jump is a field event."],
        ["medium", ["Golf", "Tennis", "Squash", "Rowing"], "Rowing", "racket or club sports", "The other three use a racket or club to hit a ball; rowing uses a boat and oars."],
        ["medium", ["Wimbledon", "French Open", "US Open", "Tour de France"], "Tour de France", "tennis Grand Slam tournaments", "The other three are tennis Grand Slam tournaments; the Tour de France is a cycling race."],
        ["hard", ["Butterfly", "Breaststroke", "Backstroke", "Platform diving"], "Platform diving", "competitive swimming strokes", "The other three are competitive swimming strokes; platform diving is a separate aquatic sport."],
        ["hard", ["Foil", "Épée", "Sabre", "Rapier"], "Rapier", "modern fencing weapons", "The other three are the weapons used in modern Olympic fencing; a rapier is not one of them."],
        ["hard", ["Penalty kick", "Corner kick", "Throw-in", "Face-off"], "Face-off", "association football restarts", "The other three restart play in association football; a face-off is used in sports such as ice hockey."],
        ["hard", ["Decathlon", "Heptathlon", "Pentathlon", "Triathlon"], "Triathlon", "track-and-field combined events", "The other three are combined athletics events; a triathlon combines swimming, cycling, and running."],
        ["hard", ["Pitcher", "Catcher", "Batter", "Quarterback"], "Quarterback", "baseball roles", "The other three are roles in baseball; quarterback is an American football position."],
        ["easy", ["Soccer", "Rugby", "Basketball", "Chess"], "Chess", "team sports played with a ball", "The other three are team sports played with a ball; chess is a board game."],
        ["easy", ["Swimming", "Cycling", "Running", "Pole vault"], "Pole vault", "triathlon disciplines", "Swimming, cycling, and running are the three triathlon disciplines; pole vault is a field event."],
        ["medium", ["Freestyle", "Backstroke", "Breaststroke", "Water polo"], "Water polo", "swimming strokes", "The other three are swimming strokes; water polo is a team sport played in a pool."],
        ["medium", ["Goalkeeper", "Striker", "Defender", "Pitcher"], "Pitcher", "association football positions", "The other three are association football positions; pitcher is a baseball position."],
        ["hard", ["Foil", "Épée", "Sabre", "Longbow"], "Longbow", "Olympic fencing weapons", "Foil, épée, and sabre are the three Olympic fencing weapons; a longbow is used in archery."],

        // ANIMALS
        ["easy", ["Lion", "Tiger", "Leopard", "Dolphin"], "Dolphin", "big cats", "The other three are big cats; a dolphin is a marine mammal."],
        ["easy", ["Dog", "Cat", "Horse", "Eagle"], "Eagle", "mammals", "The other three are mammals; an eagle is a bird."],
        ["easy", ["Bee", "Ant", "Butterfly", "Spider"], "Spider", "insects", "The other three are insects; a spider is an arachnid."],
        ["easy", ["Eagle", "Owl", "Parrot", "Penguin"], "Penguin", "birds that can fly", "The other three can fly; penguins are flightless birds."],
        ["easy", ["Crocodile", "Snake", "Turtle", "Frog"], "Frog", "reptiles", "The other three are reptiles; a frog is an amphibian."],
        ["medium", ["Shark", "Dolphin", "Whale", "Salmon"], "Salmon", "marine mammals", "The other three are marine mammals; a salmon is a fish."],
        ["medium", ["Giraffe", "Zebra", "Elephant", "Penguin"], "Penguin", "African land mammals", "The other three are large African land mammals; a penguin is a bird."],
        ["medium", ["Caterpillar", "Tadpole", "Frog", "Butterfly"], "Frog", "animal life-cycle stages", "The other three are stages in animal life cycles; a frog is an adult animal."],
        ["medium", ["Octopus", "Squid", "Cuttlefish", "Crab"], "Crab", "cephalopods", "The other three are cephalopods; a crab is a crustacean."],
        ["medium", ["Polar bear", "Arctic fox", "Walrus", "Kangaroo"], "Kangaroo", "Arctic animals", "The other three live in the Arctic; kangaroos are native to Australia."],
        ["hard", ["Koala", "Kangaroo", "Wombat", "Sloth"], "Sloth", "Australian marsupials", "The other three are Australian marsupials; sloths live in Central and South America."],
        ["hard", ["Frog", "Toad", "Salamander", "Lizard"], "Lizard", "amphibians", "The other three are amphibians; a lizard is a reptile."],
        ["hard", ["Orca", "Dolphin", "Porpoise", "Manatee"], "Manatee", "toothed cetaceans", "The other three are toothed cetaceans; a manatee is a sirenian."],
        ["hard", ["Peacock", "Pheasant", "Turkey", "Flamingo"], "Flamingo", "galliform birds", "The other three are galliform birds; a flamingo belongs to a different bird order."],
        ["hard", ["Snail", "Clam", "Oyster", "Jellyfish"], "Jellyfish", "mollusks", "The other three are mollusks; a jellyfish is a cnidarian."],
        ["easy", ["Cat", "Dog", "Rabbit", "Eagle"], "Eagle", "common household pets", "The other three are common household pets; an eagle is a wild bird."],
        ["easy", ["Whale", "Dolphin", "Seal", "Tuna"], "Tuna", "marine mammals", "The other three are marine mammals; tuna are fish."],
        ["medium", ["Cheetah", "Lion", "Leopard", "Crocodile"], "Crocodile", "big cats", "The other three are big cats; a crocodile is a reptile."],
        ["medium", ["Swan", "Goose", "Duck", "Bat"], "Bat", "waterfowl", "The other three are waterfowl; a bat is a mammal."],
        ["hard", ["Monarch butterfly", "Swallowtail butterfly", "Moth", "Tarantula"], "Tarantula", "insects", "The other three are insects; a tarantula is an arachnid."],

        // COUNTRIES & GEOGRAPHY
        ["easy", ["France", "Spain", "Italy", "Madrid"], "Madrid", "countries", "The other three are countries; Madrid is a city."],
        ["easy", ["Asia", "Europe", "Africa", "Brazil"], "Brazil", "continents", "The other three are continents; Brazil is a country."],
        ["easy", ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Sahara Desert"], "Sahara Desert", "oceans", "The other three are oceans; the Sahara is a desert."],
        ["easy", ["Tokyo", "Paris", "Rome", "Sydney"], "Sydney", "national capitals", "The other three are national capitals; Sydney is not Australia's capital."],
        ["easy", ["Mount Everest", "K2", "Kilimanjaro", "Nile River"], "Nile River", "mountains", "The other three are mountains; the Nile is a river."],
        ["medium", ["California", "Texas", "Florida", "Ontario"], "Ontario", "US states", "The other three are US states; Ontario is a Canadian province."],
        ["medium", ["North", "South", "East", "Oslo"], "Oslo", "cardinal directions", "The other three are cardinal directions; Oslo is a city."],
        ["medium", ["Nile", "Amazon", "Danube", "Andes"], "Andes", "rivers", "The other three are rivers; the Andes are a mountain range."],
        ["medium", ["Greenland", "Madagascar", "Borneo", "Lake Superior"], "Lake Superior", "islands", "The other three are islands; Lake Superior is a lake."],
        ["medium", ["Equator", "Tropic of Cancer", "Prime Meridian", "Himalayas"], "Himalayas", "reference lines on maps", "The other three are imaginary geographic reference lines; the Himalayas are a mountain range."],
        ["hard", ["Cairo", "Nairobi", "Dakar", "Lisbon"], "Lisbon", "African national capitals", "The other three are capital cities in Africa; Lisbon is in Europe."],
        ["hard", ["Baltic Sea", "Caribbean Sea", "Red Sea", "Lake Baikal"], "Lake Baikal", "seas", "The other three are seas connected to oceans; Lake Baikal is an inland lake."],
        ["hard", ["Andes", "Rocky Mountains", "Alps", "Sahara"], "Sahara", "mountain ranges", "The other three are mountain ranges; the Sahara is a desert."],
        ["hard", ["Japan", "Iceland", "Cuba", "Nepal"], "Nepal", "island countries", "The other three are island countries; Nepal is landlocked."],
        ["hard", ["Danube", "Nile", "Rhône", "Volga"], "Volga", "rivers that flow into the Mediterranean Sea", "The Danube, Nile, and Rhône reach the Mediterranean Sea; the Volga flows into the Caspian Sea."],
        ["easy", ["Canada", "Mexico", "United States", "Brazil"], "Brazil", "countries in North America", "The other three are in North America; Brazil is in South America."],
        ["easy", ["Nile", "Amazon", "Mississippi", "Sahara"], "Sahara", "rivers", "The other three are rivers; the Sahara is a desert."],
        ["medium", ["London", "Ottawa", "Canberra", "Toronto"], "Toronto", "national capitals", "The other three are national capitals; Toronto is not Canada's capital."],
        ["medium", ["Antarctica", "Asia", "Africa", "Greenland"], "Greenland", "continents", "The other three are continents; Greenland is an island."],
        ["hard", ["Denali", "Aconcagua", "Elbrus", "Ganges"], "Ganges", "mountains", "The other three are mountains; the Ganges is a river."],

        // TECHNOLOGY
        ["easy", ["Keyboard", "Mouse", "Monitor", "Banana"], "Banana", "computer peripherals", "The other three are computer peripherals; a banana is food."],
        ["easy", ["Chrome", "Firefox", "Safari", "Excel"], "Excel", "web browsers", "The other three are web browsers; Excel is a spreadsheet application."],
        ["easy", ["USB drive", "SD card", "External hard drive", "Webcam"], "Webcam", "data storage devices", "The other three store files; a webcam captures video."],
        ["easy", ["Android", "iOS", "Windows", "Photoshop"], "Photoshop", "operating systems", "The other three are operating systems; Photoshop is an application."],
        ["easy", ["Microphone", "Keyboard", "Mouse", "Monitor"], "Monitor", "computer input devices", "The other three send input to a computer; a monitor displays output."],
        ["medium", ["Wi-Fi", "Bluetooth", "NFC", "HDMI"], "HDMI", "wireless connection technologies", "The other three can connect devices wirelessly; HDMI uses a cable."],
        ["medium", ["CPU", "GPU", "RAM", "Router"], "Router", "computer components", "The other three are internal computer components; a router connects networks."],
        ["medium", ["JPEG", "PNG", "GIF", "MP3"], "MP3", "image file formats", "The other three are image formats; MP3 is an audio format."],
        ["medium", ["Google Maps", "Waze", "Apple Maps", "Spotify"], "Spotify", "navigation apps", "The other three provide maps and navigation; Spotify streams audio."],
        ["medium", ["Printer", "Speaker", "Headphones", "Microphone"], "Microphone", "output devices", "The other three send sound or information out to the user; a microphone captures input."],
        ["hard", ["HTTP", "FTP", "SMTP", "JPEG"], "JPEG", "internet communication protocols", "The other three are communication protocols; JPEG is an image format."],
        ["hard", ["QR code", "Barcode", "NFC tag", "Touchscreen"], "Touchscreen", "scannable identification tags", "The other three can be scanned as tags or codes; a touchscreen is an input display."],
        ["hard", ["Ethernet", "USB", "Thunderbolt", "Wi-Fi"], "Wi-Fi", "wired connection standards", "The other three commonly use physical cables; Wi-Fi is wireless."],
        ["hard", ["TCP", "UDP", "IP", "PDF"], "PDF", "internet communication protocols", "TCP, UDP, and IP are networking protocols; PDF is a document format."],
        ["hard", ["SSD", "Hard drive", "USB flash drive", "RAM"], "RAM", "non-volatile storage devices", "The SSD, hard drive, and USB flash drive retain data without power; RAM is volatile working memory."],
        ["easy", ["Smartphone", "Tablet", "Laptop", "Microwave"], "Microwave", "personal computing devices", "The other three are personal computing devices; a microwave is a kitchen appliance."],
        ["easy", ["Chrome", "Firefox", "Edge", "Windows"], "Windows", "web browsers", "The other three are web browsers; Windows is an operating system."],
        ["medium", ["Word", "Excel", "PowerPoint", "Photoshop"], "Photoshop", "Microsoft Office applications", "The other three are Microsoft Office applications; Photoshop is made by Adobe."],
        ["medium", ["PNG", "JPEG", "GIF", "WAV"], "WAV", "image file formats", "The other three are image file formats; WAV is an audio format."],
        ["hard", ["DNS", "DHCP", "HTTP", "HDMI"], "HDMI", "networking protocols", "DNS, DHCP, and HTTP are networking protocols; HDMI is an audio/video connection standard."],

        // NATURE
        ["easy", ["Oak", "Pine", "Maple", "Tulip"], "Tulip", "trees", "The other three are trees; a tulip is a flower."],
        ["easy", ["River", "Lake", "Ocean", "Mountain"], "Mountain", "bodies of water", "The other three are bodies of water; a mountain is a landform."],
        ["easy", ["Rain", "Snow", "Hail", "Sunshine"], "Sunshine", "forms of precipitation", "The other three are precipitation; sunshine is not."],
        ["easy", ["Volcano", "Earthquake", "Tsunami", "Rainbow"], "Rainbow", "natural hazards", "The other three can be natural hazards; a rainbow is an optical phenomenon."],
        ["easy", ["Granite", "Marble", "Basalt", "Oak"], "Oak", "rocks", "The other three are rocks; oak is a type of tree."],
        ["medium", ["Rose", "Tulip", "Daisy", "Fern"], "Fern", "flowering plants", "The other three are flowering plants; ferns reproduce by spores."],
        ["medium", ["Cumulus", "Cirrus", "Stratus", "Granite"], "Granite", "cloud types", "The other three are cloud types; granite is a rock."],
        ["medium", ["Spring", "Summer", "Autumn", "Monsoon"], "Monsoon", "temperate-calendar seasons", "The other three are the familiar temperate-calendar seasons; monsoon names a seasonal wind and rain pattern."],
        ["medium", ["Tornado", "Hurricane", "Typhoon", "Drought"], "Drought", "rotating tropical or severe wind storms", "The other three are wind storms; drought is a prolonged lack of rainfall."],
        ["medium", ["Moss", "Lichen", "Algae", "Mushroom"], "Mushroom", "simple organisms that photosynthesize", "The other three can photosynthesize; mushrooms are fungi."],
        ["hard", ["Quartz", "Feldspar", "Mica", "Limestone"], "Limestone", "common minerals in granite", "Quartz, feldspar, and mica are the main mineral groups in granite; limestone is a sedimentary rock."],
        ["hard", ["Stalactite", "Stalagmite", "Flowstone", "Sand dune"], "Sand dune", "cave formations", "The other three can form in caves from mineral deposits; a sand dune forms from wind-blown sand."],
        ["hard", ["Lava", "Magma", "Basalt", "Gneiss"], "Gneiss", "volcanic material or rock", "Lava, magma, and basalt are associated with volcanic activity; gneiss is a metamorphic rock."],
        ["hard", ["Tide", "Wave", "Current", "Glacier"], "Glacier", "moving ocean water", "The other three describe movements of ocean water; a glacier is a mass of land ice."],
        ["hard", ["Dew", "Frost", "Fog", "Lava"], "Lava", "water in forms near Earth's surface", "Dew, frost, and fog are forms of water; lava is molten rock."],
        ["easy", ["Rose", "Sunflower", "Tulip", "Oak"], "Oak", "flowers", "The other three are flowers; an oak is a tree."],
        ["easy", ["Desert", "Forest", "Grassland", "Dolphin"], "Dolphin", "biomes", "The other three are biomes; a dolphin is an animal."],
        ["medium", ["Canyon", "Valley", "Plateau", "Hurricane"], "Hurricane", "landforms", "The other three are landforms; a hurricane is a storm."],
        ["medium", ["Rain", "Sleet", "Hail", "Earthquake"], "Earthquake", "forms of precipitation", "The other three are forms of precipitation; an earthquake is ground movement."],
        ["hard", ["Igneous", "Sedimentary", "Metamorphic", "Transparent"], "Transparent", "rock classifications", "The other three classify types of rock; transparent describes whether something lets light through."],

        // MOVIES & TV
        ["easy", ["Harry Potter", "Ron Weasley", "Hermione Granger", "Shrek"], "Shrek", "characters from the Harry Potter series", "The other three are characters in Harry Potter; Shrek is from a different film series."],
        ["easy", ["Elsa", "Anna", "Olaf", "Batman"], "Batman", "characters from Frozen", "The other three are characters in Frozen; Batman is a DC superhero."],
        ["easy", ["Luke Skywalker", "Princess Leia", "Yoda", "Pikachu"], "Pikachu", "Star Wars characters", "The other three are characters from Star Wars; Pikachu is from Pokémon."],
        ["easy", ["Batman", "Wonder Woman", "Superman", "Spider-Man"], "Spider-Man", "DC superheroes", "The other three are DC superheroes; Spider-Man is a Marvel character."],
        ["easy", ["Homer Simpson", "Bart Simpson", "Lisa Simpson", "Gru"], "Gru", "characters from The Simpsons", "The other three are members of the Simpson family; Gru is from Despicable Me."],
        ["medium", ["Woody", "Buzz Lightyear", "Jessie", "Nemo"], "Nemo", "Toy Story characters", "The other three are characters from Toy Story; Nemo is from Finding Nemo."],
        ["medium", ["Darth Vader", "Luke Skywalker", "Yoda", "Harry Potter"], "Harry Potter", "Star Wars characters", "The other three are characters from Star Wars; Harry Potter belongs to another fictional universe."],
        ["medium", ["Walter White", "Jesse Pinkman", "Saul Goodman", "Sheldon Cooper"], "Sheldon Cooper", "Breaking Bad characters", "The other three appear in Breaking Bad; Sheldon Cooper is from The Big Bang Theory."],
        ["medium", ["Cinderella", "Belle", "Ariel", "SpongeBob SquarePants"], "SpongeBob SquarePants", "Disney princesses", "The other three are Disney princesses; SpongeBob is a cartoon character who lives under the sea."],
        ["medium", ["Jon Snow", "Daenerys Targaryen", "Tyrion Lannister", "Jack Sparrow"], "Jack Sparrow", "Game of Thrones characters", "The other three are characters from Game of Thrones; Jack Sparrow is from Pirates of the Caribbean."],
        ["hard", ["Frodo Baggins", "Gandalf", "Aragorn", "Dumbledore"], "Dumbledore", "The Lord of the Rings characters", "The other three are from The Lord of the Rings; Dumbledore is from Harry Potter."],
        ["hard", ["Monica Geller", "Rachel Green", "Phoebe Buffay", "Carrie Bradshaw"], "Carrie Bradshaw", "Friends characters", "The other three are characters from Friends; Carrie Bradshaw is from Sex and the City."],
        ["hard", ["Iron Man", "Thor", "Black Panther", "Batman"], "Batman", "Marvel superheroes", "The other three are Marvel superheroes; Batman is a DC character."],
        ["hard", ["The Lion King", "Frozen", "Moana", "The Incredibles"], "The Incredibles", "Disney animated musicals", "The other three are Disney animated musicals; The Incredibles is an animated superhero film."],
        ["hard", ["Dunder Mifflin", "Pawnee Parks Department", "Central Perk", "The Daily Planet"], "The Daily Planet", "fictional workplaces or hangouts in sitcoms", "The other three are settings from sitcoms; The Daily Planet is a newspaper in the Superman stories."],
        ["easy", ["Mickey Mouse", "Donald Duck", "Goofy", "Shrek"], "Shrek", "Disney characters", "The other three are Disney characters; Shrek is from DreamWorks."],
        ["easy", ["Peter Parker", "Bruce Wayne", "Clark Kent", "Luke Skywalker"], "Luke Skywalker", "comic-book superhero identities", "The other three are the secret identities of comic-book superheroes; Luke Skywalker is a Star Wars hero."],
        ["medium", ["Eleven", "Mike Wheeler", "Dustin Henderson", "Sheldon Cooper"], "Sheldon Cooper", "Stranger Things characters", "The other three are characters from Stranger Things; Sheldon Cooper is from The Big Bang Theory."],
        ["medium", ["Elsa", "Moana", "Belle", "Buzz Lightyear"], "Buzz Lightyear", "female protagonists of Disney animated films", "The other three are female protagonists in Disney animated films; Buzz Lightyear is a Toy Story character."],
        ["hard", ["Joker", "Lex Luthor", "Green Goblin", "Voldemort"], "Voldemort", "comic-book supervillains", "The other three are comic-book supervillains; Voldemort is from Harry Potter."],

        // VIDEO GAMES
        ["easy", ["Minecraft", "Fortnite", "Roblox", "Harry Potter"], "Harry Potter", "video games or gaming platforms", "The other three are video games or a gaming platform; Harry Potter is a book and film character."],
        ["easy", ["Mario", "Luigi", "Princess Peach", "Pikachu"], "Pikachu", "Super Mario characters", "The other three are characters from Super Mario; Pikachu is from Pokémon."],
        ["easy", ["Pikachu", "Charmander", "Bulbasaur", "Batman"], "Batman", "Pokémon characters", "The other three are Pokémon; Batman is a superhero from DC Comics."],
        ["easy", ["Mario Kart", "Gran Turismo", "Forza Horizon", "Animal Crossing"], "Animal Crossing", "racing video games", "The other three are racing games; Animal Crossing is a life-simulation game."],
        ["easy", ["Call of Duty", "Halo", "Fortnite", "Candy Crush"], "Candy Crush", "action or shooter games", "The other three are action shooter games; Candy Crush is a match-three puzzle game."],
        ["medium", ["Minecraft", "Terraria", "Roblox", "FIFA"], "FIFA", "games focused on building or user-created worlds", "The other three focus on building or user-created worlds; FIFA is a football simulation."],
        ["medium", ["The Sims", "Animal Crossing", "Stardew Valley", "Mortal Kombat"], "Mortal Kombat", "life-simulation games", "The other three are life-simulation games; Mortal Kombat is a fighting game."],
        ["medium", ["Grand Theft Auto", "Red Dead Redemption", "Mafia", "Animal Crossing"], "Animal Crossing", "open-world crime game series", "The other three are open-world crime game series; Animal Crossing is a life simulator."],
        ["medium", ["Among Us", "Fall Guys", "Overcooked", "Elden Ring"], "Elden Ring", "party or group multiplayer games", "The other three are commonly played as light group multiplayer games; Elden Ring is a challenging action RPG."],
        ["medium", ["The Legend of Zelda", "Metroid", "Animal Crossing", "The Sims"], "The Sims", "Nintendo game franchises", "The other three are Nintendo game franchises; The Sims is published by Electronic Arts."],
        ["hard", ["Pac-Man", "Space Invaders", "Pong", "The Last of Us"], "The Last of Us", "classic arcade games", "The other three are classic arcade games; The Last of Us is a modern story-driven console game."],
        ["hard", ["Aloy", "Lara Croft", "Nathan Drake", "Kirby"], "Kirby", "adventure-game human protagonists", "The other three are human protagonists in adventure games; Kirby is a round pink alien hero."],
        ["hard", ["PlayStation", "Xbox", "Nintendo Switch", "Steam"], "Steam", "video-game consoles", "The other three are video-game consoles; Steam is a PC game distribution platform."],
        ["hard", ["Tetris", "Bejeweled", "Candy Crush", "Counter-Strike"], "Counter-Strike", "tile or match puzzle games", "The other three are tile-based puzzle games; Counter-Strike is a tactical shooter."],
        ["hard", ["Sonic the Hedgehog", "Crash Bandicoot", "Spyro the Dragon", "Master Chief"], "Master Chief", "platform-game mascots", "The other three are heroes from platform-game series; Master Chief is the protagonist of Halo."],
        ["easy", ["Pikachu", "Charmander", "Squirtle", "Sonic the Hedgehog"], "Sonic the Hedgehog", "Pokémon", "The other three are Pokémon; Sonic is the hero of a separate game series."],
        ["easy", ["Minecraft", "Terraria", "Roblox", "Call of Duty"], "Call of Duty", "sandbox games or game platforms", "The other three focus on sandbox play or user-created worlds; Call of Duty is a shooter series."],
        ["medium", ["Mario", "Kirby", "Link", "Sonic"], "Sonic", "Nintendo characters", "The other three are Nintendo characters; Sonic is Sega's mascot."],
        ["medium", ["The Sims", "The Sims 2", "The Sims 4", "Minecraft"], "Minecraft", "games in The Sims franchise", "The other three are entries in The Sims franchise; Minecraft is a separate game."],
        ["hard", ["Overwatch", "Valorant", "Counter-Strike", "Stardew Valley"], "Stardew Valley", "team-based first-person shooters", "The other three are team-based first-person shooters; Stardew Valley is a farming and life-simulation game."],

        // BRANDS
        ["easy", ["Nike", "Adidas", "Puma", "IKEA"], "IKEA", "sportswear brands", "The other three are sportswear brands; IKEA sells furniture and home goods."],
        ["easy", ["Apple", "Samsung", "Sony", "Coca-Cola"], "Coca-Cola", "consumer electronics brands", "The other three make consumer electronics; Coca-Cola is a beverage brand."],
        ["easy", ["McDonald's", "Burger King", "KFC", "Toyota"], "Toyota", "fast-food chains", "The other three are fast-food chains; Toyota makes vehicles."],
        ["easy", ["BMW", "Mercedes-Benz", "Audi", "Netflix"], "Netflix", "car manufacturers", "The other three are car manufacturers; Netflix is a streaming service."],
        ["easy", ["LEGO", "Barbie", "Playmobil", "Starbucks"], "Starbucks", "toy brands", "The other three are toy brands; Starbucks is a coffeehouse chain."],
        ["medium", ["Coca-Cola", "Pepsi", "Sprite", "Microsoft"], "Microsoft", "soft-drink brands", "The other three are soft-drink brands; Microsoft makes software and technology."],
        ["medium", ["Amazon", "eBay", "Etsy", "Spotify"], "Spotify", "online marketplaces", "The other three are online marketplaces; Spotify is a music-streaming service."],
        ["medium", ["Gucci", "Prada", "Louis Vuitton", "Tesla"], "Tesla", "luxury fashion houses", "The other three are luxury fashion houses; Tesla makes electric vehicles."],
        ["medium", ["PlayStation", "Xbox", "Nintendo", "Netflix"], "Netflix", "video-game console brands", "The other three make video-game consoles; Netflix is a streaming service."],
        ["medium", ["Visa", "Mastercard", "American Express", "PayPal"], "PayPal", "payment card networks", "The other three operate payment card networks; PayPal is a digital payment platform."],
        ["hard", ["Dove", "Axe", "Rexona", "Colgate"], "Colgate", "brands owned by Unilever", "Dove, Axe, and Rexona are Unilever brands; Colgate is a Colgate-Palmolive brand."],
        ["hard", ["Instagram", "WhatsApp", "Facebook", "YouTube"], "YouTube", "Meta platforms", "The other three are owned by Meta; YouTube is owned by Google."],
        ["hard", ["Lexus", "Acura", "Infiniti", "Volvo"], "Volvo", "Japanese luxury car divisions", "Lexus, Acura, and Infiniti are Japanese luxury divisions; Volvo is a Swedish car brand."],
        ["hard", ["Fanta", "Sprite", "Dr Pepper", "Nescafé"], "Nescafé", "soft-drink brands", "The other three are soft-drink brands; Nescafé is a coffee brand."],
        ["hard", ["Converse", "Vans", "Crocs", "Canon"], "Canon", "footwear brands", "The other three make footwear; Canon makes cameras and imaging products."],
        ["easy", ["Adidas", "Nike", "Puma", "LEGO"], "LEGO", "sportswear brands", "The other three are sportswear brands; LEGO makes toys and building sets."],
        ["easy", ["Coca-Cola", "Pepsi", "Fanta", "McDonald's"], "McDonald's", "soft-drink brands", "The other three are soft-drink brands; McDonald's is a fast-food chain."],
        ["medium", ["Mercedes-Benz", "BMW", "Audi", "Nintendo"], "Nintendo", "car manufacturers", "The other three are car manufacturers; Nintendo makes video games and consoles."],
        ["medium", ["Netflix", "Disney+", "Prime Video", "Spotify"], "Spotify", "video-streaming services", "The other three primarily stream video; Spotify primarily streams audio."],
        ["hard", ["Pepsi", "Fanta", "Sprite", "Gatorade"], "Gatorade", "soft drinks", "The other three are carbonated soft drinks; Gatorade is a sports drink."],

        // EVERYDAY OBJECTS
        ["easy", ["Fork", "Spoon", "Knife", "Pillow"], "Pillow", "cutlery", "The other three are pieces of cutlery; a pillow is bedding."],
        ["easy", ["Toothbrush", "Comb", "Soap", "Plate"], "Plate", "personal-care items", "The other three are used for personal care; a plate is tableware."],
        ["easy", ["Chair", "Table", "Sofa", "Bicycle"], "Bicycle", "furniture", "The other three are furniture; a bicycle is a vehicle."],
        ["easy", ["Pencil", "Pen", "Marker", "Banana"], "Banana", "writing tools", "The other three are writing tools; a banana is food."],
        ["easy", ["Kettle", "Toaster", "Blender", "Sneaker"], "Sneaker", "kitchen appliances", "The other three are kitchen appliances; a sneaker is footwear."],
        ["medium", ["Clock", "Watch", "Calendar", "Apple"], "Apple", "timekeeping items", "The other three help track time or dates; an apple is fruit."],
        ["medium", ["Suitcase", "Backpack", "Handbag", "Refrigerator"], "Refrigerator", "bags for carrying belongings", "The other three are bags; a refrigerator is an appliance."],
        ["medium", ["Mug", "Glass", "Cup", "Hat"], "Hat", "drinking vessels", "The other three hold drinks; a hat is worn on the head."],
        ["medium", ["Screwdriver", "Hammer", "Wrench", "Pillow"], "Pillow", "hand tools", "The other three are hand tools; a pillow is bedding."],
        ["medium", ["Sofa", "Armchair", "Recliner", "Bookshelf"], "Bookshelf", "seating furniture", "The other three are made for sitting; a bookshelf stores books."],
        ["hard", ["Colander", "Sieve", "Strainer", "Saucepan"], "Saucepan", "kitchen tools that drain or sift", "The other three let liquid or fine particles pass through; a saucepan holds food while it cooks."],
        ["hard", ["Envelope", "Postcard", "Stamp", "Stapler"], "Stapler", "items used to send traditional mail", "The other three are used to prepare or pay for mail; a stapler joins sheets together."],
        ["hard", ["Shampoo", "Conditioner", "Body wash", "Laundry detergent"], "Laundry detergent", "personal-care products", "The other three are used to wash the body or hair; laundry detergent is for clothes."],
        ["hard", ["Screw", "Nail", "Bolt", "Washer"], "Washer", "fasteners that are driven or threaded into material", "The screw, nail, and bolt fasten materials by being driven or threaded in; a washer is a supporting ring."],
        ["hard", ["Thermometer", "Scale", "Tape measure", "Compass"], "Compass", "instruments that measure a physical quantity", "A thermometer, scale, and tape measure measure temperature, mass, and length; a compass shows direction."],
        ["easy", ["Teapot", "Kettle", "Saucepan", "Sneakers"], "Sneakers", "kitchen items", "The other three are kitchen items; sneakers are footwear."],
        ["easy", ["Comb", "Hairbrush", "Toothbrush", "Pillow"], "Pillow", "personal grooming tools", "The other three are used for personal grooming; a pillow is bedding."],
        ["medium", ["Bowl", "Plate", "Mug", "Frying pan"], "Frying pan", "tableware for serving food or drinks", "The bowl, plate, and mug are tableware; a frying pan is cookware."],
        ["medium", ["Ruler", "Tape measure", "Caliper", "Toothbrush"], "Toothbrush", "tools for measuring length or distance", "The other three measure length or distance; a toothbrush is for dental care."],
        ["hard", ["Padlock", "Key", "Combination lock", "Screwdriver"], "Screwdriver", "items used to secure or open locks", "The other three secure something or open a lock; a screwdriver is a hand tool."],

        // MUSIC
        ["easy", ["Guitar", "Piano", "Violin", "Trumpet"], "Trumpet", "instruments that do not use a wind mouthpiece", "The other three are string or keyboard instruments; a trumpet is a brass wind instrument."],
        ["easy", ["Drums", "Tambourine", "Cymbals", "Flute"], "Flute", "percussion instruments", "The other three are percussion instruments; a flute is a wind instrument."],
        ["easy", ["Rock", "Jazz", "Hip-hop", "Cello"], "Cello", "music genres", "The other three are music genres; a cello is an instrument."],
        ["easy", ["Adele", "Taylor Swift", "Beyoncé", "Mozart"], "Mozart", "modern popular-music artists", "The other three are modern pop artists; Mozart was a classical composer."],
        ["easy", ["Saxophone", "Trumpet", "Clarinet", "Drum kit"], "Drum kit", "wind instruments", "The other three are wind instruments; a drum kit is percussion."],
        ["medium", ["Violin", "Viola", "Cello", "Harp"], "Harp", "bowed string instruments", "The violin, viola, and cello are bowed string instruments; a harp is plucked."],
        ["medium", ["Spotify", "Apple Music", "SoundCloud", "Netflix"], "Netflix", "music-streaming services", "The other three primarily stream music; Netflix streams video."],
        ["medium", ["Do", "Re", "Mi", "Treble clef"], "Treble clef", "solfège syllables", "The other three are solfège syllables; a treble clef is a musical symbol."],
        ["medium", ["Baroque", "Classical", "Romantic", "Reggae"], "Reggae", "periods in Western classical music", "The other three name periods in Western classical music; reggae is a music genre."],
        ["medium", ["Microphone", "Amplifier", "Headphones", "Toaster"], "Toaster", "audio equipment", "The other three are audio equipment; a toaster is a kitchen appliance."],
        ["hard", ["B-flat", "F-sharp", "C-natural", "Allegro"], "Allegro", "notes or note names", "The other three are musical note names; allegro is a tempo marking."],
        ["hard", ["Oboe", "Bassoon", "Clarinet", "Trombone"], "Trombone", "woodwind instruments", "The oboe, bassoon, and clarinet are woodwinds; a trombone is brass."],
        ["hard", ["Soprano", "Alto", "Tenor", "Baritone saxophone"], "Baritone saxophone", "vocal ranges", "The other three are vocal ranges; a baritone saxophone is an instrument."],
        ["hard", ["Sonata", "Concerto", "Symphony", "Opera singer"], "Opera singer", "musical compositions", "The other three are forms of musical composition; an opera singer is a performer."],
        ["hard", ["Adele", "Taylor Swift", "Beyoncé", "Hans Zimmer"], "Hans Zimmer", "popular singers", "The other three are popular singers; Hans Zimmer is a film-score composer."],
        ["easy", ["Piano", "Guitar", "Harp", "Saxophone"], "Saxophone", "string instruments", "The other three are string instruments; a saxophone is a wind instrument."],
        ["easy", ["Rock", "Jazz", "Reggae", "Ukulele"], "Ukulele", "music genres", "The other three are music genres; a ukulele is an instrument."],
        ["medium", ["Violin", "Viola", "Cello", "Flute"], "Flute", "bowed string instruments", "The other three are bowed string instruments; a flute is a wind instrument."],
        ["medium", ["Bohemian Rhapsody", "Imagine", "Billie Jean", "Ludwig van Beethoven"], "Ludwig van Beethoven", "well-known song titles", "The other three are song titles; Ludwig van Beethoven was a composer."],
        ["hard", ["Sonata", "Concerto", "Symphony", "Soprano"], "Soprano", "forms of musical composition", "A sonata, concerto, and symphony are forms of composition; soprano is a vocal range."],

        // VEHICLES
        ["easy", ["Sedan", "SUV", "Hatchback", "Sailboat"], "Sailboat", "cars", "The other three are types of cars; a sailboat travels on water."],
        ["easy", ["Airplane", "Helicopter", "Glider", "Submarine"], "Submarine", "aircraft", "The other three fly through the air; a submarine travels underwater."],
        ["easy", ["Motorcycle", "Scooter", "Moped", "Bicycle"], "Bicycle", "motorized two-wheelers", "The other three have a motor; a bicycle is powered by pedaling."],
        ["easy", ["Train", "Tram", "Subway", "Bicycle"], "Bicycle", "rail vehicles", "The other three run on rails; a bicycle travels on roads or paths."],
        ["easy", ["Boeing 747", "Airbus A380", "Concorde", "Tesla Model 3"], "Tesla Model 3", "airplanes", "The other three are airplanes; the Tesla Model 3 is a car."],
        ["medium", ["Pickup truck", "Van", "SUV", "Yacht"], "Yacht", "road vehicles", "The other three are road vehicles; a yacht is a boat."],
        ["medium", ["School bus", "City bus", "Double-decker bus", "Taxi"], "Taxi", "types of buses", "The other three are buses; a taxi is a passenger car."],
        ["medium", ["Ambulance", "Fire engine", "Police car", "Camper van"], "Camper van", "emergency service vehicles", "The other three are emergency service vehicles; a camper van is for travel and recreation."],
        ["medium", ["Ferry", "Cruise ship", "Cargo ship", "Kayak"], "Kayak", "large ships", "The other three are large ships; a kayak is a small paddle-powered craft."],
        ["medium", ["Electric car", "Hybrid car", "Petrol car", "Helicopter"], "Helicopter", "types of cars", "The other three are cars with different powertrains; a helicopter is an aircraft."],
        ["hard", ["Schooner", "Sloop", "Ketch", "Gondola"], "Gondola", "sailing boat rig types", "The schooner, sloop, and ketch are sailing-boat rig types; a gondola is a Venetian rowing boat."],
        ["hard", ["Freight train", "Commuter train", "High-speed train", "Trolleybus"], "Trolleybus", "railway trains", "The other three run on railway tracks; a trolleybus runs on roads and overhead wires."],
        ["hard", ["Kayak", "Canoe", "Rowboat", "Jet ski"], "Jet ski", "human-powered small boats", "The other three are human-powered boats; a jet ski has a motor."],
        ["hard", ["Monorail", "Maglev train", "Tram", "Taxi"], "Taxi", "rail-guided vehicles", "The other three are rail-guided vehicles; a taxi travels on roads."],
        ["hard", ["Diesel locomotive", "Steam locomotive", "Electric locomotive", "Freight wagon"], "Freight wagon", "railway locomotives", "The other three locomotives provide the power to move a train; a freight wagon carries cargo."],
        ["easy", ["Car", "Bus", "Truck", "Airplane"], "Airplane", "road vehicles", "The other three are road vehicles; an airplane is an aircraft."],
        ["easy", ["London taxi", "Yellow cab", "Black cab", "London bus"], "London bus", "types of taxi", "The other three are taxis; a London bus is public transit."],
        ["medium", ["Bicycle", "Scooter", "Moped", "Subway train"], "Subway train", "two-wheeled road vehicles", "The other three are two-wheeled road vehicles; a subway train runs on rails."],
        ["medium", ["Ambulance", "Fire engine", "Police car", "Taxi"], "Taxi", "emergency service vehicles", "The other three are emergency service vehicles; a taxi carries passengers for a fare."],
        ["hard", ["Canoe", "Kayak", "Rowboat", "Submarine"], "Submarine", "human-powered boats", "The canoe, kayak, and rowboat are human-powered boats; a submarine is a motorized underwater vessel."],
    ]
};


const ODD_ONE_OUT_I18N_CATALOG = {
    "ooo.q.1.choice.0":  {
                             "nl":  "Appel",
                             "de":  "Apfel",
                             "fr":  "Pomme",
                             "es":  "Manzana"
                         },
    "ooo.q.1.choice.1":  {
                             "nl":  "Banaan",
                             "de":  "Banane",
                             "fr":  "Banane",
                             "es":  "Plátano"
                         },
    "ooo.q.1.choice.2":  {
                             "nl":  "Wortel",
                             "de":  "Karotte",
                             "fr":  "Carotte",
                             "es":  "Zanahoria"
                         },
    "ooo.q.1.choice.3":  {
                             "nl":  "Aardbei",
                             "de":  "Erdbeere",
                             "fr":  "Fraise",
                             "es":  "Fresa"
                         },
    "ooo.q.1.odd":  {
                        "nl":  "Wortel",
                        "de":  "Karotte",
                        "fr":  "Carotte",
                        "es":  "Zanahoria"
                    },
    "ooo.q.1.group":  {
                          "nl":  "vruchten",
                          "de":  "Früchte",
                          "fr":  "fruits",
                          "es":  "frutas"
                      },
    "ooo.q.1.explanation":  {
                                "nl":  "De andere drie zijn vruchten; een wortel is een groente.",
                                "de":  "Die anderen drei sind Früchte; Eine Karotte ist ein Gemüse.",
                                "fr":  "Les trois autres sont des fruits ; une carotte est un légume.",
                                "es":  "Los otros tres son frutos; una zanahoria es una verdura."
                            },
    "ooo.q.2.choice.0":  {
                             "nl":  "Pizza",
                             "de":  "Pizza",
                             "fr":  "Pizzas",
                             "es":  "Pizzería"
                         },
    "ooo.q.2.choice.1":  {
                             "nl":  "Oranje",
                             "de":  "Orange",
                             "fr":  "Orange",
                             "es":  "Naranja"
                         },
    "ooo.q.2.choice.2":  {
                             "nl":  "Hamburger",
                             "de":  "Hamburger",
                             "fr":  "Hamburger",
                             "es":  "Hamburguesa"
                         },
    "ooo.q.2.choice.3":  {
                             "nl":  "Hotdog",
                             "de":  "Hotdog",
                             "fr":  "Hot-dog",
                             "es":  "Perro caliente"
                         },
    "ooo.q.2.odd":  {
                        "nl":  "Oranje",
                        "de":  "Orange",
                        "fr":  "Orange",
                        "es":  "Naranja"
                    },
    "ooo.q.2.group":  {
                          "nl":  "fastfood maaltijden",
                          "de":  "Fast-Food-Mahlzeiten",
                          "fr":  "repas de restauration rapide",
                          "es":  "comidas de comida rápida"
                      },
    "ooo.q.2.explanation":  {
                                "nl":  "De andere drie zijn gewone fastfoodmaaltijden; een sinaasappel is een vrucht.",
                                "de":  "Bei den anderen drei handelt es sich um gängige Fast-Food-Gerichte; Eine Orange ist eine Frucht.",
                                "fr":  "Les trois autres sont des repas de restauration rapide courants ; une orange est un fruit.",
                                "es":  "Los otros tres son comidas comunes de comida rápida; una naranja es una fruta."
                            },
    "ooo.q.3.choice.0":  {
                             "nl":  "Koffie",
                             "de":  "Kaffee",
                             "fr":  "Café",
                             "es":  "Cafe"
                         },
    "ooo.q.3.choice.1":  {
                             "nl":  "Thee",
                             "de":  "Tee",
                             "fr":  "Thé",
                             "es":  "Té"
                         },
    "ooo.q.3.choice.2":  {
                             "nl":  "Vork",
                             "de":  "Gabel",
                             "fr":  "Fourchette",
                             "es":  "Tenedor"
                         },
    "ooo.q.3.choice.3":  {
                             "nl":  "Limonade",
                             "de":  "Limonade",
                             "fr":  "Limonade",
                             "es":  "Limonada"
                         },
    "ooo.q.3.odd":  {
                        "nl":  "Vork",
                        "de":  "Gabel",
                        "fr":  "Fourchette",
                        "es":  "Tenedor"
                    },
    "ooo.q.3.group":  {
                          "nl":  "drankjes",
                          "de":  "Getränke",
                          "fr":  "boissons",
                          "es":  "bebidas"
                      },
    "ooo.q.3.explanation":  {
                                "nl":  "De andere drie zijn drankjes; een vork is een gebruiksvoorwerp.",
                                "de":  "Die anderen drei sind Getränke; Eine Gabel ist ein Utensil.",
                                "fr":  "Les trois autres sont des boissons ; une fourchette est un ustensile.",
                                "es":  "Los otros tres son bebidas; un tenedor es un utensilio."
                            },
    "ooo.q.4.choice.0":  {
                             "nl":  "Rijst",
                             "de":  "Reis",
                             "fr":  "Riz",
                             "es":  "Arroz"
                         },
    "ooo.q.4.choice.1":  {
                             "nl":  "Brood",
                             "de":  "Brot",
                             "fr":  "Pain",
                             "es":  "Pan"
                         },
    "ooo.q.4.choice.2":  {
                             "nl":  "Fiets",
                             "de":  "Fahrrad",
                             "fr":  "Vélo",
                             "es":  "Bicicleta"
                         },
    "ooo.q.4.choice.3":  {
                             "nl":  "Pasta",
                             "de":  "Nudeln",
                             "fr":  "Pâtes",
                             "es":  "Pastas"
                         },
    "ooo.q.4.odd":  {
                        "nl":  "Fiets",
                        "de":  "Fahrrad",
                        "fr":  "Vélo",
                        "es":  "Bicicleta"
                    },
    "ooo.q.4.group":  {
                          "nl":  "basisvoedsel",
                          "de":  "Grundnahrungsmittel",
                          "fr":  "aliments de base",
                          "es":  "alimentos básicos"
                      },
    "ooo.q.4.explanation":  {
                                "nl":  "De andere drie zijn voedingsmiddelen gemaakt van granen; een fiets is een voertuig.",
                                "de":  "Die anderen drei sind Lebensmittel aus Getreide; Ein Fahrrad ist ein Fahrzeug.",
                                "fr":  "Les trois autres sont des aliments à base de céréales ; un vélo est un véhicule.",
                                "es":  "Los otros tres son alimentos elaborados a base de cereales; una bicicleta es un vehículo."
                            },
    "ooo.q.5.choice.0":  {
                             "nl":  "Zalm",
                             "de":  "Lachs",
                             "fr":  "Saumon",
                             "es":  "Salmón"
                         },
    "ooo.q.5.choice.1":  {
                             "nl":  "Tonijn",
                             "de":  "Thunfisch",
                             "fr":  "Thon",
                             "es":  "Atún"
                         },
    "ooo.q.5.choice.2":  {
                             "nl":  "Adelaar",
                             "de":  "Adler",
                             "fr":  "Aigle",
                             "es":  "Águila"
                         },
    "ooo.q.5.choice.3":  {
                             "nl":  "Forel",
                             "de":  "Forelle",
                             "fr":  "Truite",
                             "es":  "Trucha"
                         },
    "ooo.q.5.odd":  {
                        "nl":  "Adelaar",
                        "de":  "Adler",
                        "fr":  "Aigle",
                        "es":  "Águila"
                    },
    "ooo.q.5.group":  {
                          "nl":  "vis",
                          "de":  "Fisch",
                          "fr":  "poisson",
                          "es":  "pez"
                      },
    "ooo.q.5.explanation":  {
                                "nl":  "De andere drie zijn vissen; een adelaar is een vogel.",
                                "de":  "Die anderen drei sind Fische; Ein Adler ist ein Vogel.",
                                "fr":  "Les trois autres sont des poissons ; un aigle est un oiseau.",
                                "es":  "Los otros tres son peces; un águila es un pájaro."
                            },
    "ooo.q.6.choice.0":  {
                             "nl":  "Citroen",
                             "de":  "Zitrone",
                             "fr":  "Citron",
                             "es":  "Limon"
                         },
    "ooo.q.6.choice.1":  {
                             "nl":  "Aardappel",
                             "de":  "Kartoffel",
                             "fr":  "Pomme de terre",
                             "es":  "Patata"
                         },
    "ooo.q.6.choice.2":  {
                             "nl":  "Limoen",
                             "de":  "Limette",
                             "fr":  "Chaux",
                             "es":  "Lima"
                         },
    "ooo.q.6.choice.3":  {
                             "nl":  "Grapefruit",
                             "de":  "Grapefruit",
                             "fr":  "Pamplemousse",
                             "es":  "Pomelo"
                         },
    "ooo.q.6.odd":  {
                        "nl":  "Aardappel",
                        "de":  "Kartoffel",
                        "fr":  "Pomme de terre",
                        "es":  "Patata"
                    },
    "ooo.q.6.group":  {
                          "nl":  "citrusvruchten",
                          "de":  "Zitrusfrüchte",
                          "fr":  "agrumes",
                          "es":  "frutas cítricas"
                      },
    "ooo.q.6.explanation":  {
                                "nl":  "De andere drie zijn citrusvruchten; een aardappel is een knol.",
                                "de":  "Die anderen drei sind Zitrusfrüchte; Eine Kartoffel ist eine Knolle.",
                                "fr":  "Les trois autres sont des agrumes ; une pomme de terre est un tubercule.",
                                "es":  "Los otros tres son cítricos; una papa es un tubérculo."
                            },
    "ooo.q.7.choice.0":  {
                             "nl":  "Koekje",
                             "de":  "Keks",
                             "fr":  "Biscuit",
                             "es":  "Galleta"
                         },
    "ooo.q.7.choice.1":  {
                             "nl":  "Brownie",
                             "de":  "Brownie",
                             "fr":  "Brownie",
                             "es":  "Brownie"
                         },
    "ooo.q.7.choice.2":  {
                             "nl":  "IJskoffie",
                             "de":  "Eiskaffee",
                             "fr":  "Café glacé",
                             "es":  "Café helado"
                         },
    "ooo.q.7.choice.3":  {
                             "nl":  "Cupcake",
                             "de":  "Cupcake",
                             "fr":  "Petit gâteau",
                             "es":  "Magdalena"
                         },
    "ooo.q.7.odd":  {
                        "nl":  "IJskoffie",
                        "de":  "Eiskaffee",
                        "fr":  "Café glacé",
                        "es":  "Café helado"
                    },
    "ooo.q.7.group":  {
                          "nl":  "zoete gebakken lekkernijen",
                          "de":  "süße Backwaren",
                          "fr":  "friandises sucrées",
                          "es":  "dulces horneados"
                      },
    "ooo.q.7.explanation":  {
                                "nl":  "De andere drie zijn gebakken desserts; ijskoffie is een drankje.",
                                "de":  "Die anderen drei sind gebackene Desserts; Eiskaffee ist ein Getränk.",
                                "fr":  "Les trois autres sont des desserts cuits au four ; le café glacé est une boisson.",
                                "es":  "Los otros tres son postres horneados; El café helado es una bebida."
                            },
    "ooo.q.8.choice.0":  {
                             "nl":  "Melk",
                             "de":  "Milch",
                             "fr":  "Lait",
                             "es":  "Leche"
                         },
    "ooo.q.8.choice.1":  {
                             "nl":  "Sinaasappelsap",
                             "de":  "Orangensaft",
                             "fr":  "Jus d\u0027orange",
                             "es":  "Jugo de naranja"
                         },
    "ooo.q.8.choice.2":  {
                             "nl":  "Yoghurt",
                             "de":  "Joghurt",
                             "fr":  "Yaourt",
                             "es":  "Yogur"
                         },
    "ooo.q.8.choice.3":  {
                             "nl":  "Water",
                             "de":  "Wasser",
                             "fr":  "Eau",
                             "es":  "Agua"
                         },
    "ooo.q.8.odd":  {
                        "nl":  "Yoghurt",
                        "de":  "Joghurt",
                        "fr":  "Yaourt",
                        "es":  "Yogur"
                    },
    "ooo.q.8.group":  {
                          "nl":  "drankjes",
                          "de":  "Getränke",
                          "fr":  "boissons",
                          "es":  "bebidas"
                      },
    "ooo.q.8.explanation":  {
                                "nl":  "De andere drie zijn drankjes; yoghurt wordt met een lepel gegeten.",
                                "de":  "Die anderen drei sind Getränke; Joghurt wird mit einem Löffel gegessen.",
                                "fr":  "Les trois autres sont des boissons ; le yaourt se mange avec une cuillère.",
                                "es":  "Los otros tres son bebidas; El yogur se come con cuchara."
                            },
    "ooo.q.9.choice.0":  {
                             "nl":  "Ui",
                             "de":  "Zwiebel",
                             "fr":  "Oignon",
                             "es":  "Cebolla"
                         },
    "ooo.q.9.choice.1":  {
                             "nl":  "Knoflook",
                             "de":  "Knoblauch",
                             "fr":  "Ail",
                             "es":  "Ajo"
                         },
    "ooo.q.9.choice.2":  {
                             "nl":  "Gember",
                             "de":  "Ingwer",
                             "fr":  "Gingembre",
                             "es":  "Jengibre"
                         },
    "ooo.q.9.choice.3":  {
                             "nl":  "Watermeloen",
                             "de":  "Wassermelone",
                             "fr":  "Pastèque",
                             "es":  "Sandía"
                         },
    "ooo.q.9.odd":  {
                        "nl":  "Watermeloen",
                        "de":  "Wassermelone",
                        "fr":  "Pastèque",
                        "es":  "Sandía"
                    },
    "ooo.q.9.group":  {
                          "nl":  "hartige kookingrediënten",
                          "de":  "herzhafte Kochzutaten",
                          "fr":  "ingrédients de cuisine savoureux",
                          "es":  "ingredientes de cocina salados"
                      },
    "ooo.q.9.explanation":  {
                                "nl":  "De andere drie zijn hartige ingrediënten die bij het koken worden gebruikt; watermeloen is een zoete vrucht.",
                                "de":  "Die anderen drei sind herzhafte Zutaten, die beim Kochen verwendet werden; Wassermelone ist eine süße Frucht.",
                                "fr":  "Les trois autres sont des ingrédients salés utilisés en cuisine ; la pastèque est un fruit sucré.",
                                "es":  "Los otros tres son ingredientes salados que se utilizan en la cocina; la sandía es una fruta dulce."
                            },
    "ooo.q.10.choice.0":  {
                              "nl":  "Franse frietjes",
                              "de":  "Pommes frites",
                              "fr":  "Frites",
                              "es":  "Papas fritas"
                          },
    "ooo.q.10.choice.1":  {
                              "nl":  "Uienringen",
                              "de":  "Zwiebelringe",
                              "fr":  "Rondelles d\u0027oignon",
                              "es":  "Aros de cebolla"
                          },
    "ooo.q.10.choice.2":  {
                              "nl":  "Appeltaart",
                              "de":  "Apfelkuchen",
                              "fr":  "Tarte aux pommes",
                              "es":  "Tarta de manzana"
                          },
    "ooo.q.10.choice.3":  {
                              "nl":  "Mozzarella-sticks",
                              "de":  "Mozzarella-Sticks",
                              "fr":  "Bâtonnets de mozzarella",
                              "es":  "Palitos de mozzarella"
                          },
    "ooo.q.10.odd":  {
                         "nl":  "Appeltaart",
                         "de":  "Apfelkuchen",
                         "fr":  "Tarte aux pommes",
                         "es":  "Tarta de manzana"
                     },
    "ooo.q.10.group":  {
                           "nl":  "hartige gefrituurde snacks",
                           "de":  "herzhafte frittierte Snacks",
                           "fr":  "collations frites salées",
                           "es":  "bocadillos fritos salados"
                       },
    "ooo.q.10.explanation":  {
                                 "nl":  "De andere drie zijn hartige frituurhapjes; appeltaart is een dessert.",
                                 "de":  "Die anderen drei sind herzhafte frittierte Snacks; Apfelkuchen ist ein Dessert.",
                                 "fr":  "Les trois autres sont des collations frites salées ; la tarte aux pommes est un dessert.",
                                 "es":  "Los otros tres son sabrosos snacks fritos; la tarta de manzana es un postre."
                             },
    "ooo.q.11.choice.0":  {
                              "nl":  "Cheddar",
                              "de":  "Cheddar",
                              "fr":  "Cheddar",
                              "es":  "Queso cheddar"
                          },
    "ooo.q.11.choice.1":  {
                              "nl":  "Mozzarella",
                              "de":  "Mozzarella",
                              "fr":  "Mozzarella",
                              "es":  "Mozzarella"
                          },
    "ooo.q.11.choice.2":  {
                              "nl":  "Brie",
                              "de":  "Brie",
                              "fr":  "Brie",
                              "es":  "Brie"
                          },
    "ooo.q.11.choice.3":  {
                              "nl":  "Hummus",
                              "de":  "Hummus",
                              "fr":  "Houmous",
                              "es":  "Hummus"
                          },
    "ooo.q.11.odd":  {
                         "nl":  "Hummus",
                         "de":  "Hummus",
                         "fr":  "Houmous",
                         "es":  "Hummus"
                     },
    "ooo.q.11.group":  {
                           "nl":  "kazen",
                           "de":  "Käse",
                           "fr":  "fromages",
                           "es":  "quesos"
                       },
    "ooo.q.11.explanation":  {
                                 "nl":  "De andere drie zijn kazen gemaakt van melk; hummus is een kikkererwtenpasta.",
                                 "de":  "Die anderen drei sind Käse aus Milch; Hummus ist ein Kichererbsenaufstrich.",
                                 "fr":  "Les trois autres sont des fromages à base de lait ; le houmous est une pâte à tartiner aux pois chiches.",
                                 "es":  "Los otros tres son quesos elaborados con leche; El hummus es una pasta de garbanzos."
                             },
    "ooo.q.12.choice.0":  {
                              "nl":  "Rijst",
                              "de":  "Reis",
                              "fr":  "Riz",
                              "es":  "Arroz"
                          },
    "ooo.q.12.choice.1":  {
                              "nl":  "Haver",
                              "de":  "Hafer",
                              "fr":  "Avoine",
                              "es":  "Avena"
                          },
    "ooo.q.12.choice.2":  {
                              "nl":  "Gerst",
                              "de":  "Gerste",
                              "fr":  "Orge",
                              "es":  "Cebada"
                          },
    "ooo.q.12.choice.3":  {
                              "nl":  "Linzen",
                              "de":  "Linsen",
                              "fr":  "Lentilles",
                              "es":  "Lentejas"
                          },
    "ooo.q.12.odd":  {
                         "nl":  "Linzen",
                         "de":  "Linsen",
                         "fr":  "Lentilles",
                         "es":  "Lentejas"
                     },
    "ooo.q.12.group":  {
                           "nl":  "granen",
                           "de":  "Getreidekörner",
                           "fr":  "grains de céréales",
                           "es":  "granos de cereales"
                       },
    "ooo.q.12.explanation":  {
                                 "nl":  "De andere drie zijn graankorrels; linzen zijn peulvruchten.",
                                 "de":  "Die anderen drei sind Getreidekörner; Linsen sind Hülsenfrüchte.",
                                 "fr":  "Les trois autres sont des céréales ; les lentilles sont des légumineuses.",
                                 "es":  "Los otros tres son cereales; las lentejas son legumbres."
                             },
    "ooo.q.13.choice.0":  {
                              "nl":  "Ahornsiroop",
                              "de":  "Ahornsirup",
                              "fr":  "Sirop d\u0027érable",
                              "es":  "Jarabe de arce"
                          },
    "ooo.q.13.choice.1":  {
                              "nl":  "Honing",
                              "de":  "Schatz",
                              "fr":  "Miel",
                              "es":  "Miel"
                          },
    "ooo.q.13.choice.2":  {
                              "nl":  "Agavesiroop",
                              "de":  "Agavensirup",
                              "fr":  "Sirop d\u0027agave",
                              "es":  "Sirope de agave"
                          },
    "ooo.q.13.choice.3":  {
                              "nl":  "Olijfolie",
                              "de":  "Olivenöl",
                              "fr":  "Huile d\u0027olive",
                              "es":  "Aceite de oliva"
                          },
    "ooo.q.13.odd":  {
                         "nl":  "Olijfolie",
                         "de":  "Olivenöl",
                         "fr":  "Huile d\u0027olive",
                         "es":  "Aceite de oliva"
                     },
    "ooo.q.13.group":  {
                           "nl":  "zoetstoffen",
                           "de":  "Süßstoffe",
                           "fr":  "édulcorants",
                           "es":  "edulcorantes"
                       },
    "ooo.q.13.explanation":  {
                                 "nl":  "De andere drie zijn zoetstoffen; olijfolie is een bakvet.",
                                 "de":  "Die anderen drei sind Süßstoffe; Olivenöl ist ein Speisefett.",
                                 "fr":  "Les trois autres sont des édulcorants ; l\u0027huile d\u0027olive est une graisse de cuisson.",
                                 "es":  "Los otros tres son edulcorantes; El aceite de oliva es una grasa para cocinar."
                             },
    "ooo.q.14.choice.0":  {
                              "nl":  "Ravioli",
                              "de":  "Ravioli",
                              "fr":  "Raviolis",
                              "es":  "Ravioles"
                          },
    "ooo.q.14.choice.1":  {
                              "nl":  "Lasagne",
                              "de":  "Lasagne",
                              "fr":  "Lasagne",
                              "es":  "Lasaña"
                          },
    "ooo.q.14.choice.2":  {
                              "nl":  "Spaghetti",
                              "de":  "Spaghetti",
                              "fr":  "Spaghettis",
                              "es":  "Espaguetis"
                          },
    "ooo.q.14.choice.3":  {
                              "nl":  "Risotto",
                              "de":  "Risotto",
                              "fr":  "Risotto",
                              "es":  "Risotto"
                          },
    "ooo.q.14.odd":  {
                         "nl":  "Risotto",
                         "de":  "Risotto",
                         "fr":  "Risotto",
                         "es":  "Risotto"
                     },
    "ooo.q.14.group":  {
                           "nl":  "pastagerechten",
                           "de":  "Nudelgerichte",
                           "fr":  "plats de pâtes",
                           "es":  "platos de pasta"
                       },
    "ooo.q.14.explanation":  {
                                 "nl":  "De andere drie zijn pastagerechten; Risotto wordt gemaakt met rijst.",
                                 "de":  "Die anderen drei sind Nudelgerichte; Risotto wird mit Reis zubereitet.",
                                 "fr":  "Les trois autres sont des plats de pâtes ; le risotto est fait avec du riz.",
                                 "es":  "Los otros tres son platos de pasta; El risotto se elabora con arroz."
                             },
    "ooo.q.15.choice.0":  {
                              "nl":  "Tofu",
                              "de":  "Tofu",
                              "fr":  "Tofu",
                              "es":  "Tofu"
                          },
    "ooo.q.15.choice.1":  {
                              "nl":  "Tempeh",
                              "de":  "Tempeh",
                              "fr":  "Tempeh",
                              "es":  "Tempeh"
                          },
    "ooo.q.15.choice.2":  {
                              "nl":  "Edamame",
                              "de":  "Edamame",
                              "fr":  "Édamame",
                              "es":  "Edamame"
                          },
    "ooo.q.15.choice.3":  {
                              "nl":  "Zalm",
                              "de":  "Lachs",
                              "fr":  "Saumon",
                              "es":  "Salmón"
                          },
    "ooo.q.15.odd":  {
                         "nl":  "Zalm",
                         "de":  "Lachs",
                         "fr":  "Saumon",
                         "es":  "Salmón"
                     },
    "ooo.q.15.group":  {
                           "nl":  "soja voedsel",
                           "de":  "Soja-Lebensmittel",
                           "fr":  "aliments à base de soja",
                           "es":  "alimentos de soya"
                       },
    "ooo.q.15.explanation":  {
                                 "nl":  "De andere drie zijn gemaakt van sojabonen; zalm is een vis.",
                                 "de":  "Die anderen drei werden aus Sojabohnen hergestellt; Lachs ist ein Fisch.",
                                 "fr":  "Les trois autres sont à base de soja ; le saumon est un poisson.",
                                 "es":  "Los otros tres están elaborados con soja; el salmón es un pez."
                             },
    "ooo.q.16.choice.0":  {
                              "nl":  "Mango",
                              "de":  "Mango",
                              "fr":  "Mangue",
                              "es":  "Mango"
                          },
    "ooo.q.16.choice.1":  {
                              "nl":  "Perzik",
                              "de":  "Pfirsich",
                              "fr":  "Pêche",
                              "es":  "Durazno"
                          },
    "ooo.q.16.choice.2":  {
                              "nl":  "Pruim",
                              "de":  "Pflaume",
                              "fr":  "Prune",
                              "es":  "Ciruela"
                          },
    "ooo.q.16.choice.3":  {
                              "nl":  "Komkommer",
                              "de":  "Gurke",
                              "fr":  "Concombre",
                              "es":  "Pepino"
                          },
    "ooo.q.16.odd":  {
                         "nl":  "Komkommer",
                         "de":  "Gurke",
                         "fr":  "Concombre",
                         "es":  "Pepino"
                     },
    "ooo.q.16.group":  {
                           "nl":  "steenvruchten",
                           "de":  "Steinfrüchte",
                           "fr":  "fruits à noyau",
                           "es":  "frutas de hueso"
                       },
    "ooo.q.16.explanation":  {
                                 "nl":  "De andere drie zijn steenvruchten; Komkommer wordt vaak als groente beschouwd.",
                                 "de":  "Die anderen drei sind Steinfrüchte; Gurke wird üblicherweise als Gemüse behandelt.",
                                 "fr":  "Les trois autres sont des fruits à noyau ; le concombre est généralement traité comme un légume.",
                                 "es":  "Las otras tres son frutas de hueso; El pepino se trata comúnmente como una verdura."
                             },
    "ooo.q.17.choice.0":  {
                              "nl":  "Cola",
                              "de":  "Cola",
                              "fr":  "Cola",
                              "es":  "Cola"
                          },
    "ooo.q.17.choice.1":  {
                              "nl":  "Limonade",
                              "de":  "Limonade",
                              "fr":  "Limonade",
                              "es":  "Limonada"
                          },
    "ooo.q.17.choice.2":  {
                              "nl":  "IJsthee",
                              "de":  "Eistee",
                              "fr":  "Thé glacé",
                              "es":  "Té helado"
                          },
    "ooo.q.17.choice.3":  {
                              "nl":  "Donut",
                              "de":  "Donut",
                              "fr":  "Beignet",
                              "es":  "Donut"
                          },
    "ooo.q.17.odd":  {
                         "nl":  "Donut",
                         "de":  "Donut",
                         "fr":  "Beignet",
                         "es":  "Donut"
                     },
    "ooo.q.17.group":  {
                           "nl":  "drankjes",
                           "de":  "Getränke",
                           "fr":  "boissons",
                           "es":  "bebidas"
                       },
    "ooo.q.17.explanation":  {
                                 "nl":  "De andere drie zijn drankjes; een donut is een gebakje.",
                                 "de":  "Die anderen drei sind Getränke; Ein Donut ist ein Gebäck.",
                                 "fr":  "Les trois autres sont des boissons ; un beignet est une pâtisserie.",
                                 "es":  "Los otros tres son bebidas; un donut es un pastelito."
                             },
    "ooo.q.18.choice.0":  {
                              "nl":  "Stokbrood",
                              "de":  "Baguette",
                              "fr":  "Baguettes",
                              "es":  "Baguette"
                          },
    "ooo.q.18.choice.1":  {
                              "nl":  "Ciabatta",
                              "de":  "Ciabatta",
                              "fr":  "Ciabatta",
                              "es":  "Chapata"
                          },
    "ooo.q.18.choice.2":  {
                              "nl":  "Zuurdesem",
                              "de":  "Sauerteig",
                              "fr":  "Levain",
                              "es":  "Masa madre"
                          },
    "ooo.q.18.choice.3":  {
                              "nl":  "Couscous",
                              "de":  "Couscous",
                              "fr":  "Couscous",
                              "es":  "Cuscús"
                          },
    "ooo.q.18.odd":  {
                         "nl":  "Couscous",
                         "de":  "Couscous",
                         "fr":  "Couscous",
                         "es":  "Cuscús"
                     },
    "ooo.q.18.group":  {
                           "nl":  "soorten brood",
                           "de":  "Brotsorten",
                           "fr":  "types de pain",
                           "es":  "tipos de pan"
                       },
    "ooo.q.18.explanation":  {
                                 "nl":  "De andere drie zijn broden; couscous is een graanproduct dat als gerecht wordt geserveerd.",
                                 "de":  "Die anderen drei sind Brote; Couscous ist ein Getreideprodukt, das als Gericht serviert wird.",
                                 "fr":  "Les trois autres sont des pains ; le couscous est un produit céréalier servi en plat.",
                                 "es":  "Los otros tres son panes; El cuscús es un producto de cereales que se sirve como plato."
                             },
    "ooo.q.19.choice.0":  {
                              "nl":  "Rozijn",
                              "de":  "Rosine",
                              "fr":  "Raisins secs",
                              "es":  "Pasas"
                          },
    "ooo.q.19.choice.1":  {
                              "nl":  "Datum",
                              "de":  "Datum",
                              "fr":  "Date",
                              "es":  "Fecha"
                          },
    "ooo.q.19.choice.2":  {
                              "nl":  "Afb",
                              "de":  "Abb",
                              "fr":  "Figue",
                              "es":  "Higo"
                          },
    "ooo.q.19.choice.3":  {
                              "nl":  "Amandel",
                              "de":  "Mandel",
                              "fr":  "Amande",
                              "es":  "Almendra"
                          },
    "ooo.q.19.odd":  {
                         "nl":  "Amandel",
                         "de":  "Mandel",
                         "fr":  "Amande",
                         "es":  "Almendra"
                     },
    "ooo.q.19.group":  {
                           "nl":  "gedroogde vruchten",
                           "de":  "Trockenfrüchte",
                           "fr":  "fruits secs",
                           "es":  "frutos secos"
                       },
    "ooo.q.19.explanation":  {
                                 "nl":  "De andere drie zijn gedroogd fruit; een amandel is een noot.",
                                 "de":  "Die anderen drei sind Trockenfrüchte; Eine Mandel ist eine Nuss.",
                                 "fr":  "Les trois autres sont des fruits secs ; une amande est une noix.",
                                 "es":  "Los otros tres son frutos secos; una almendra es una nuez."
                             },
    "ooo.q.20.choice.0":  {
                              "nl":  "Couscous",
                              "de":  "Couscous",
                              "fr":  "Couscous",
                              "es":  "Cuscús"
                          },
    "ooo.q.20.choice.1":  {
                              "nl":  "Bulgur",
                              "de":  "Bulgur",
                              "fr":  "Boulgour",
                              "es":  "Bulgur"
                          },
    "ooo.q.20.choice.2":  {
                              "nl":  "Quinoa",
                              "de":  "Quinoa",
                              "fr":  "Quinoa",
                              "es":  "Quinua"
                          },
    "ooo.q.20.choice.3":  {
                              "nl":  "Kikkererwt",
                              "de":  "Kichererbse",
                              "fr":  "Pois chiche",
                              "es":  "Garbanzo"
                          },
    "ooo.q.20.odd":  {
                         "nl":  "Kikkererwt",
                         "de":  "Kichererbse",
                         "fr":  "Pois chiche",
                         "es":  "Garbanzo"
                     },
    "ooo.q.20.group":  {
                           "nl":  "granen en pseudogranen",
                           "de":  "Getreide und Pseudogetreide",
                           "fr":  "céréales et pseudo-céréales",
                           "es":  "granos y pseudocereales"
                       },
    "ooo.q.20.explanation":  {
                                 "nl":  "Couscous, bulgur en quinoa zijn granen of pseudogranen; kikkererwten zijn peulvruchten.",
                                 "de":  "Couscous, Bulgur und Quinoa sind Getreide oder Pseudogetreide; Kichererbsen sind Hülsenfrüchte.",
                                 "fr":  "Le couscous, le boulgour et le quinoa sont des céréales ou des pseudo-céréales ; les pois chiches sont des légumineuses.",
                                 "es":  "El cuscús, el bulgur y la quinua son cereales o pseudocereales; los garbanzos son legumbres."
                             },
    "ooo.q.21.choice.0":  {
                              "nl":  "Tennis",
                              "de":  "Tennis",
                              "fr":  "Tennis",
                              "es":  "Tenis"
                          },
    "ooo.q.21.choice.1":  {
                              "nl":  "Badminton",
                              "de":  "Badminton",
                              "fr":  "Badminton",
                              "es":  "Bádminton"
                          },
    "ooo.q.21.choice.2":  {
                              "nl":  "Pompoen",
                              "de":  "Kürbis",
                              "fr":  "Courge",
                              "es":  "Calabaza"
                          },
    "ooo.q.21.choice.3":  {
                              "nl":  "Boksen",
                              "de":  "Boxen",
                              "fr":  "Boxe",
                              "es":  "Boxeo"
                          },
    "ooo.q.21.odd":  {
                         "nl":  "Boksen",
                         "de":  "Boxen",
                         "fr":  "Boxe",
                         "es":  "Boxeo"
                     },
    "ooo.q.21.group":  {
                           "nl":  "racketsporten",
                           "de":  "Schlägersport",
                           "fr":  "sports de raquette",
                           "es":  "deportes de raqueta"
                       },
    "ooo.q.21.explanation":  {
                                 "nl":  "De andere drie worden met rackets bespeeld; boksen is een vechtsport.",
                                 "de":  "Die anderen drei werden mit Schlägern gespielt; Boxen ist ein Kampfsport.",
                                 "fr":  "Les trois autres se jouent avec des raquettes ; la boxe est un sport de combat.",
                                 "es":  "Los otros tres se juegan con raquetas; El boxeo es un deporte de combate."
                             },
    "ooo.q.22.choice.0":  {
                              "nl":  "Voetbal",
                              "de":  "Fußball",
                              "fr":  "Football",
                              "es":  "Futbol"
                          },
    "ooo.q.22.choice.1":  {
                              "nl":  "Basketbal",
                              "de":  "Basketball",
                              "fr":  "Basket-ball",
                              "es":  "Baloncesto"
                          },
    "ooo.q.22.choice.2":  {
                              "nl":  "Volleybal",
                              "de":  "Volleyball",
                              "fr":  "Volley-ball",
                              "es":  "Voleibol"
                          },
    "ooo.q.22.choice.3":  {
                              "nl":  "Zwemmen",
                              "de":  "Schwimmen",
                              "fr":  "Natation",
                              "es":  "Natación"
                          },
    "ooo.q.22.odd":  {
                         "nl":  "Zwemmen",
                         "de":  "Schwimmen",
                         "fr":  "Natation",
                         "es":  "Natación"
                     },
    "ooo.q.22.group":  {
                           "nl":  "bal sporten",
                           "de":  "Ballsportarten",
                           "fr":  "sports de balle",
                           "es":  "deportes de pelota"
                       },
    "ooo.q.22.explanation":  {
                                 "nl":  "De andere drie zijn balsporten; Zwemmen wordt niet met een bal gespeeld.",
                                 "de":  "Die anderen drei sind Ballsportarten; Schwimmen wird nicht mit einem Ball gespielt.",
                                 "fr":  "Les trois autres sont des sports de ballon ; la natation ne se joue pas avec un ballon.",
                                 "es":  "Los otros tres son deportes de pelota; La natación no se juega con una pelota."
                             },
    "ooo.q.23.choice.0":  {
                              "nl":  "Skiën",
                              "de":  "Skifahren",
                              "fr":  "Ski",
                              "es":  "Esquiar"
                          },
    "ooo.q.23.choice.1":  {
                              "nl":  "Snowboarden",
                              "de":  "Snowboarden",
                              "fr":  "Snowboard",
                              "es":  "Snowboard"
                          },
    "ooo.q.23.choice.2":  {
                              "nl":  "Schaatsen",
                              "de":  "Eislaufen",
                              "fr":  "Patinage sur glace",
                              "es":  "Patinaje sobre hielo"
                          },
    "ooo.q.23.choice.3":  {
                              "nl":  "Fietsen",
                              "de":  "Radfahren",
                              "fr":  "Cyclisme",
                              "es":  "Ciclismo"
                          },
    "ooo.q.23.odd":  {
                         "nl":  "Fietsen",
                         "de":  "Radfahren",
                         "fr":  "Cyclisme",
                         "es":  "Ciclismo"
                     },
    "ooo.q.23.group":  {
                           "nl":  "wintersport",
                           "de":  "Wintersport",
                           "fr":  "sports d\u0027hiver",
                           "es":  "deportes de invierno"
                       },
    "ooo.q.23.explanation":  {
                                 "nl":  "De andere drie worden gewoonlijk beoefend op sneeuw of ijs; fietsen is dat niet.",
                                 "de":  "Die anderen drei werden üblicherweise auf Schnee oder Eis praktiziert; Radfahren ist es nicht.",
                                 "fr":  "Les trois autres sont couramment pratiqués sur la neige ou la glace ; le cyclisme ne l’est pas.",
                                 "es":  "Los otros tres se practican habitualmente sobre nieve o hielo; el ciclismo no lo es."
                             },
    "ooo.q.24.choice.0":  {
                              "nl":  "100 meter sprint",
                              "de":  "100-Meter-Sprint",
                              "fr":  "Sprint de 100 mètres",
                              "es":  "Carrera de 100 metros"
                          },
    "ooo.q.24.choice.1":  {
                              "nl":  "Estafette race",
                              "de":  "Staffellauf",
                              "fr":  "Course de relais",
                              "es":  "Carrera de relevos"
                          },
    "ooo.q.24.choice.2":  {
                              "nl":  "Marathon",
                              "de":  "Marathon",
                              "fr":  "Marathon",
                              "es":  "Maratón"
                          },
    "ooo.q.24.choice.3":  {
                              "nl":  "Hoogspringen",
                              "de":  "Hochsprung",
                              "fr":  "Saut en hauteur",
                              "es":  "Salto de altura"
                          },
    "ooo.q.24.odd":  {
                         "nl":  "Hoogspringen",
                         "de":  "Hochsprung",
                         "fr":  "Saut en hauteur",
                         "es":  "Salto de altura"
                     },
    "ooo.q.24.group":  {
                           "nl":  "rennen van wedstrijden",
                           "de":  "Rennen laufen",
                           "fr":  "courses à pied",
                           "es":  "carreras de carrera"
                       },
    "ooo.q.24.explanation":  {
                                 "nl":  "De andere drie zijn hardloopwedstrijden; hoogspringen is een veldevenement.",
                                 "de":  "Die anderen drei laufen Rennen; Hochsprung ist ein Feldwettbewerb.",
                                 "fr":  "Les trois autres sont des courses à pied ; le saut en hauteur est une épreuve sur le terrain.",
                                 "es":  "Los otros tres corren carreras; El salto de altura es un evento de campo."
                             },
    "ooo.q.25.choice.0":  {
                              "nl":  "Boogschieten",
                              "de":  "Bogenschießen",
                              "fr":  "Tir à l\u0027arc",
                              "es":  "Tiro con arco"
                          },
    "ooo.q.25.choice.1":  {
                              "nl":  "Schermen",
                              "de":  "Fechten",
                              "fr":  "Clôture",
                              "es":  "Esgrima"
                          },
    "ooo.q.25.choice.2":  {
                              "nl":  "Boksen",
                              "de":  "Boxen",
                              "fr":  "Boxe",
                              "es":  "Boxeo"
                          },
    "ooo.q.25.choice.3":  {
                              "nl":  "Surfen",
                              "de":  "Surfen",
                              "fr":  "Surf",
                              "es":  "Surfear"
                          },
    "ooo.q.25.odd":  {
                         "nl":  "Surfen",
                         "de":  "Surfen",
                         "fr":  "Surf",
                         "es":  "Surfear"
                     },
    "ooo.q.25.group":  {
                           "nl":  "vechtsporten",
                           "de":  "Kampfsportarten",
                           "fr":  "sports de combat",
                           "es":  "deportes de combate"
                       },
    "ooo.q.25.explanation":  {
                                 "nl":  "De andere drie zijn gevechts- of wapensporten; surfen is een watersport.",
                                 "de":  "Die anderen drei sind Kampf- oder Waffensportarten; Surfen ist ein Wassersport.",
                                 "fr":  "Les trois autres sont des sports de combat ou d’armes ; le surf est un sport nautique.",
                                 "es":  "Los otros tres son deportes de combate o con armas; El surf es un deporte acuático."
                             },
    "ooo.q.26.choice.0":  {
                              "nl":  "Doelman",
                              "de":  "Torwart",
                              "fr":  "Gardien de but",
                              "es":  "Portero"
                          },
    "ooo.q.26.choice.1":  {
                              "nl":  "Scheidsrechter",
                              "de":  "Schiedsrichter",
                              "fr":  "Arbitre",
                              "es":  "Árbitro"
                          },
    "ooo.q.26.choice.2":  {
                              "nl":  "Aanvaller",
                              "de":  "Stürmer",
                              "fr":  "Attaquant",
                              "es":  "Delantero"
                          },
    "ooo.q.26.choice.3":  {
                              "nl":  "Quarterback",
                              "de":  "Quarterback",
                              "fr":  "Quart-arrière",
                              "es":  "Mariscal de campo"
                          },
    "ooo.q.26.odd":  {
                         "nl":  "Quarterback",
                         "de":  "Quarterback",
                         "fr":  "Quart-arrière",
                         "es":  "Mariscal de campo"
                     },
    "ooo.q.26.group":  {
                           "nl":  "voetbalrollen van verenigingen",
                           "de":  "Rollen im Verbandsfußball",
                           "fr":  "rôles de football associatif",
                           "es":  "roles de fútbol de asociación"
                       },
    "ooo.q.26.explanation":  {
                                 "nl":  "De andere drie zijn rollen in het verenigingsvoetbal; quarterback is een American football-positie.",
                                 "de":  "Die anderen drei sind Rollen im Vereinsfußball; Quarterback ist eine Position im American Football.",
                                 "fr":  "Les trois autres sont des rôles dans le football associatif ; le quarterback est un poste de football américain.",
                                 "es":  "Los otros tres son roles en el fútbol asociativo; El mariscal de campo es una posición de fútbol americano."
                             },
    "ooo.q.27.choice.0":  {
                              "nl":  "Ski\u0027s",
                              "de":  "Skier",
                              "fr":  "Skis",
                              "es":  "Esquís"
                          },
    "ooo.q.27.choice.1":  {
                              "nl":  "Snowboarden",
                              "de":  "Snowboard",
                              "fr":  "Planche à neige",
                              "es":  "Snowboard"
                          },
    "ooo.q.27.choice.2":  {
                              "nl":  "Schaatsen",
                              "de":  "Schlittschuhe",
                              "fr":  "Patins à glace",
                              "es":  "Patines de hielo"
                          },
    "ooo.q.27.choice.3":  {
                              "nl":  "Tennisracket",
                              "de":  "Tennisschläger",
                              "fr":  "Raquette de tennis",
                              "es":  "Raqueta de tenis"
                          },
    "ooo.q.27.odd":  {
                         "nl":  "Tennisracket",
                         "de":  "Tennisschläger",
                         "fr":  "Raquette de tennis",
                         "es":  "Raqueta de tenis"
                     },
    "ooo.q.27.group":  {
                           "nl":  "wintersportuitrusting",
                           "de":  "Wintersportausrüstung",
                           "fr":  "équipement de sports d\u0027hiver",
                           "es":  "equipamiento para deportes de invierno"
                       },
    "ooo.q.27.explanation":  {
                                 "nl":  "De andere drie worden gebruikt voor wintersport; een tennisracket niet.",
                                 "de":  "Die anderen drei werden für den Wintersport genutzt; Ein Tennisschläger ist es nicht.",
                                 "fr":  "Les trois autres sont utilisés pour les sports d\u0027hiver ; une raquette de tennis ne l’est pas.",
                                 "es":  "Los otros tres se utilizan para deportes de invierno; una raqueta de tenis no lo es."
                             },
    "ooo.q.28.choice.0":  {
                              "nl":  "100 meter sprint",
                              "de":  "100-Meter-Sprint",
                              "fr":  "Sprint de 100 mètres",
                              "es":  "Carrera de 100 metros"
                          },
    "ooo.q.28.choice.1":  {
                              "nl":  "200 meter sprint",
                              "de":  "200-Meter-Sprint",
                              "fr":  "Sprint de 200 mètres",
                              "es":  "Carrera de 200 metros"
                          },
    "ooo.q.28.choice.2":  {
                              "nl":  "400 meter wedstrijd",
                              "de":  "400-Meter-Lauf",
                              "fr":  "Course de 400 mètres",
                              "es":  "Carrera de 400 metros"
                          },
    "ooo.q.28.choice.3":  {
                              "nl":  "Verspringen",
                              "de":  "Weitsprung",
                              "fr":  "Saut en longueur",
                              "es":  "Salto de longitud"
                          },
    "ooo.q.28.odd":  {
                         "nl":  "Verspringen",
                         "de":  "Weitsprung",
                         "fr":  "Saut en longueur",
                         "es":  "Salto de longitud"
                     },
    "ooo.q.28.group":  {
                           "nl":  "races volgen",
                           "de":  "Bahnrennen",
                           "fr":  "courses sur piste",
                           "es":  "carreras en pista"
                       },
    "ooo.q.28.explanation":  {
                                 "nl":  "De andere drie zijn baanraces; verspringen is een veldevenement.",
                                 "de":  "Die anderen drei sind Bahnrennen; Weitsprung ist ein Feldwettbewerb.",
                                 "fr":  "Les trois autres sont des courses sur piste ; le saut en longueur est une épreuve sur le terrain.",
                                 "es":  "Las otras tres son carreras en pista; El salto de longitud es un evento de campo."
                             },
    "ooo.q.29.choice.0":  {
                              "nl":  "Golfen",
                              "de":  "Golf",
                              "fr":  "Golfer",
                              "es":  "Golf"
                          },
    "ooo.q.29.choice.1":  {
                              "nl":  "Tennis",
                              "de":  "Tennis",
                              "fr":  "Tennis",
                              "es":  "Tenis"
                          },
    "ooo.q.29.choice.2":  {
                              "nl":  "Pompoen",
                              "de":  "Kürbis",
                              "fr":  "Courge",
                              "es":  "Calabaza"
                          },
    "ooo.q.29.choice.3":  {
                              "nl":  "Roeien",
                              "de":  "Rudern",
                              "fr":  "Aviron",
                              "es":  "Remo"
                          },
    "ooo.q.29.odd":  {
                         "nl":  "Roeien",
                         "de":  "Rudern",
                         "fr":  "Aviron",
                         "es":  "Remo"
                     },
    "ooo.q.29.group":  {
                           "nl":  "racket- of clubsporten",
                           "de":  "Schläger- oder Vereinssportarten",
                           "fr":  "sports de raquette ou de club",
                           "es":  "deportes de raqueta o de club"
                       },
    "ooo.q.29.explanation":  {
                                 "nl":  "De andere drie gebruiken een racket of knuppel om een bal te slaan; roeien maakt gebruik van een boot en roeispanen.",
                                 "de":  "Die anderen drei benutzen einen Schläger oder Schläger, um einen Ball zu schlagen; Beim Rudern werden ein Boot und Ruder verwendet.",
                                 "fr":  "Les trois autres utilisent une raquette ou un club pour frapper une balle ; l\u0027aviron utilise un bateau et des rames.",
                                 "es":  "Los otros tres usan una raqueta o un palo para golpear la pelota; El remo utiliza un bote y remos."
                             },
    "ooo.q.30.choice.0":  {
                              "nl":  "Wimbledon",
                              "de":  "Wimbledon",
                              "fr":  "Wimbledon",
                              "es":  "Wimbledon"
                          },
    "ooo.q.30.choice.1":  {
                              "nl":  "Franse Open",
                              "de":  "French Open",
                              "fr":  "Internationaux de France",
                              "es":  "Abierto de Francia"
                          },
    "ooo.q.30.choice.2":  {
                              "nl":  "VS geopend",
                              "de":  "US Open",
                              "fr":  "Internationaux des États-Unis",
                              "es":  "Abierto de Estados Unidos"
                          },
    "ooo.q.30.choice.3":  {
                              "nl":  "Ronde van Frankrijk",
                              "de":  "Tour de France",
                              "fr":  "Tour de France",
                              "es":  "Tour de Francia"
                          },
    "ooo.q.30.odd":  {
                         "nl":  "Ronde van Frankrijk",
                         "de":  "Tour de France",
                         "fr":  "Tour de France",
                         "es":  "Tour de Francia"
                     },
    "ooo.q.30.group":  {
                           "nl":  "tennis Grand Slam-toernooien",
                           "de":  "Tennis-Grand-Slam-Turniere",
                           "fr":  "tournois de tennis du Grand Chelem",
                           "es":  "torneos de tenis Grand Slam"
                       },
    "ooo.q.30.explanation":  {
                                 "nl":  "De andere drie zijn Grand Slam-tennistoernooien; de Tour de France is een wielerwedstrijd.",
                                 "de":  "Die anderen drei sind Tennis-Grand-Slam-Turniere; Die Tour de France ist ein Radrennen.",
                                 "fr":  "Les trois autres sont des tournois de tennis du Grand Chelem ; le Tour de France est une course cycliste.",
                                 "es":  "Los otros tres son torneos de Grand Slam de tenis; El Tour de Francia es una carrera ciclista."
                             },
    "ooo.q.31.choice.0":  {
                              "nl":  "Vlinder",
                              "de":  "Schmetterling",
                              "fr":  "Papillon",
                              "es":  "Mariposa"
                          },
    "ooo.q.31.choice.1":  {
                              "nl":  "Schoolslag",
                              "de":  "Brustschwimmen",
                              "fr":  "Brasse",
                              "es":  "Braza"
                          },
    "ooo.q.31.choice.2":  {
                              "nl":  "Rugslag",
                              "de":  "Rückenschwimmen",
                              "fr":  "Dos",
                              "es":  "Espalda"
                          },
    "ooo.q.31.choice.3":  {
                              "nl":  "Platformduiken",
                              "de":  "Plattformtauchen",
                              "fr":  "Plongée sur plateforme",
                              "es":  "Buceo en plataforma"
                          },
    "ooo.q.31.odd":  {
                         "nl":  "Platformduiken",
                         "de":  "Plattformtauchen",
                         "fr":  "Plongée sur plateforme",
                         "es":  "Buceo en plataforma"
                     },
    "ooo.q.31.group":  {
                           "nl":  "wedstrijdzwemmen",
                           "de":  "Wettkampfschwimmen",
                           "fr":  "nages de compétition",
                           "es":  "brazadas de natación competitivas"
                       },
    "ooo.q.31.explanation":  {
                                 "nl":  "De andere drie zijn wedstrijdzwemslagen; platformduiken is een aparte watersport.",
                                 "de":  "Die anderen drei sind Wettkampfschwimmtechniken; Plattformtauchen ist eine eigenständige Wassersportart.",
                                 "fr":  "Les trois autres sont des nages de compétition ; la plongée sur plateforme est un sport aquatique distinct.",
                                 "es":  "Los otros tres son estilos de natación competitivos; El buceo en plataforma es un deporte acuático independiente."
                             },
    "ooo.q.32.choice.0":  {
                              "nl":  "Folie",
                              "de":  "Folie",
                              "fr":  "Feuille",
                              "es":  "Lámina"
                          },
    "ooo.q.32.choice.1":  {
                              "nl":  "Degen",
                              "de":  "Degen",
                              "fr":  "Épée",
                              "es":  "Espada"
                          },
    "ooo.q.32.choice.2":  {
                              "nl":  "Sabel",
                              "de":  "Säbel",
                              "fr":  "Sabre",
                              "es":  "Sable"
                          },
    "ooo.q.32.choice.3":  {
                              "nl":  "Rapier",
                              "de":  "Rapier",
                              "fr":  "Rapière",
                              "es":  "Estoque"
                          },
    "ooo.q.32.odd":  {
                         "nl":  "Rapier",
                         "de":  "Rapier",
                         "fr":  "Rapière",
                         "es":  "Estoque"
                     },
    "ooo.q.32.group":  {
                           "nl":  "moderne schermwapens",
                           "de":  "moderne Fechtwaffen",
                           "fr":  "armes d\u0027escrime modernes",
                           "es":  "armas de esgrima modernas"
                       },
    "ooo.q.32.explanation":  {
                                 "nl":  "De andere drie zijn de wapens die worden gebruikt bij het moderne Olympische schermen; een rapier hoort daar niet bij.",
                                 "de":  "Die anderen drei sind die Waffen, die im modernen olympischen Fechten verwendet werden; Ein Rapier gehört nicht dazu.",
                                 "fr":  "Les trois autres sont les armes utilisées dans l’escrime olympique moderne ; une rapière n’en fait pas partie.",
                                 "es":  "Las otras tres son las armas utilizadas en la esgrima olímpica moderna; un estoque no es uno de ellos."
                             },
    "ooo.q.33.choice.0":  {
                              "nl":  "Strafschop",
                              "de":  "Strafstoß",
                              "fr":  "Coup de pied de pénalité",
                              "es":  "Tiro penal"
                          },
    "ooo.q.33.choice.1":  {
                              "nl":  "Hoekschop",
                              "de":  "Eckball",
                              "fr":  "Coup de pied de coin",
                              "es":  "Tiro de esquina"
                          },
    "ooo.q.33.choice.2":  {
                              "nl":  "Inworp",
                              "de":  "Einwurf",
                              "fr":  "Remise en jeu",
                              "es":  "Saque de banda"
                          },
    "ooo.q.33.choice.3":  {
                              "nl":  "Face-off",
                              "de":  "Konfrontation",
                              "fr":  "Face-à-face",
                              "es":  "Cara a cara"
                          },
    "ooo.q.33.odd":  {
                         "nl":  "Face-off",
                         "de":  "Konfrontation",
                         "fr":  "Face-à-face",
                         "es":  "Cara a cara"
                     },
    "ooo.q.33.group":  {
                           "nl":  "verenigingsvoetbal herstart",
                           "de":  "Der Vereinsfußball startet neu",
                           "fr":  "redémarrage du football associatif",
                           "es":  "Se reinicia el fútbol asociativo"
                       },
    "ooo.q.33.explanation":  {
                                 "nl":  "De andere drie hervatten het spel in het verenigingsvoetbal; een face-off wordt gebruikt bij sporten zoals ijshockey.",
                                 "de":  "Die anderen drei Neustarter spielen im Vereinsfußball; Ein Bully wird in Sportarten wie Eishockey eingesetzt.",
                                 "fr":  "Les trois autres reprennent le jeu dans le football associatif ; une mise au jeu est utilisée dans des sports tels que le hockey sur glace.",
                                 "es":  "Los otros tres reanudan el juego en el fútbol asociativo; un enfrentamiento se utiliza en deportes como el hockey sobre hielo."
                             },
    "ooo.q.34.choice.0":  {
                              "nl":  "Tienkamp",
                              "de":  "Zehnkampf",
                              "fr":  "Décathlon",
                              "es":  "Decatlón"
                          },
    "ooo.q.34.choice.1":  {
                              "nl":  "Zevenkamp",
                              "de":  "Siebenkampf",
                              "fr":  "Heptathlon",
                              "es":  "Heptatlón"
                          },
    "ooo.q.34.choice.2":  {
                              "nl":  "Vijfkamp",
                              "de":  "Fünfkampf",
                              "fr":  "Pentathlon",
                              "es":  "Pentatlón"
                          },
    "ooo.q.34.choice.3":  {
                              "nl":  "Triatlon",
                              "de":  "Triathlon",
                              "fr":  "Triathlon",
                              "es":  "Triatlón"
                          },
    "ooo.q.34.odd":  {
                         "nl":  "Triatlon",
                         "de":  "Triathlon",
                         "fr":  "Triathlon",
                         "es":  "Triatlón"
                     },
    "ooo.q.34.group":  {
                           "nl":  "gecombineerde atletiekevenementen",
                           "de":  "kombinierte Leichtathletikveranstaltungen",
                           "fr":  "épreuves combinées d\u0027athlétisme",
                           "es":  "pruebas combinadas de atletismo"
                       },
    "ooo.q.34.explanation":  {
                                 "nl":  "De andere drie zijn gecombineerde atletiekevenementen; een triatlon combineert zwemmen, fietsen en hardlopen.",
                                 "de":  "Die anderen drei sind kombinierte Leichtathletikveranstaltungen; Ein Triathlon kombiniert Schwimmen, Radfahren und Laufen.",
                                 "fr":  "Les trois autres sont des épreuves combinées d’athlétisme ; un triathlon combine la natation, le cyclisme et la course à pied.",
                                 "es":  "Los otros tres son eventos de atletismo combinados; Un triatlón combina natación, ciclismo y carrera."
                             },
    "ooo.q.35.choice.0":  {
                              "nl":  "Werper",
                              "de":  "Krug",
                              "fr":  "Pichet",
                              "es":  "Lanzador"
                          },
    "ooo.q.35.choice.1":  {
                              "nl":  "Vanger",
                              "de":  "Fänger",
                              "fr":  "Receveur",
                              "es":  "Receptor"
                          },
    "ooo.q.35.choice.2":  {
                              "nl":  "Beslag",
                              "de":  "Teig",
                              "fr":  "Pâte",
                              "es":  "Masa"
                          },
    "ooo.q.35.choice.3":  {
                              "nl":  "Quarterback",
                              "de":  "Quarterback",
                              "fr":  "Quart-arrière",
                              "es":  "Mariscal de campo"
                          },
    "ooo.q.35.odd":  {
                         "nl":  "Quarterback",
                         "de":  "Quarterback",
                         "fr":  "Quart-arrière",
                         "es":  "Mariscal de campo"
                     },
    "ooo.q.35.group":  {
                           "nl":  "honkbal rollen",
                           "de":  "Baseball-Rollen",
                           "fr":  "rôles de baseball",
                           "es":  "roles de beisbol"
                       },
    "ooo.q.35.explanation":  {
                                 "nl":  "De andere drie zijn rollen in honkbal; quarterback is een American football-positie.",
                                 "de":  "Die anderen drei sind Rollen im Baseball; Quarterback ist eine Position im American Football.",
                                 "fr":  "Les trois autres sont des rôles dans le baseball ; le quarterback est un poste de football américain.",
                                 "es":  "Los otros tres son roles en el béisbol; El mariscal de campo es una posición de fútbol americano."
                             },
    "ooo.q.36.choice.0":  {
                              "nl":  "Voetbal",
                              "de":  "Fußball",
                              "fr":  "Football",
                              "es":  "Futbol"
                          },
    "ooo.q.36.choice.1":  {
                              "nl":  "Rugby",
                              "de":  "Rugby",
                              "fr":  "Rugby",
                              "es":  "Rugby"
                          },
    "ooo.q.36.choice.2":  {
                              "nl":  "Basketbal",
                              "de":  "Basketball",
                              "fr":  "Basket-ball",
                              "es":  "Baloncesto"
                          },
    "ooo.q.36.choice.3":  {
                              "nl":  "Schaken",
                              "de":  "Schach",
                              "fr":  "Échecs",
                              "es":  "Ajedrez"
                          },
    "ooo.q.36.odd":  {
                         "nl":  "Schaken",
                         "de":  "Schach",
                         "fr":  "Échecs",
                         "es":  "Ajedrez"
                     },
    "ooo.q.36.group":  {
                           "nl":  "teamsporten gespeeld met een bal",
                           "de":  "Mannschaftssportarten, die mit einem Ball gespielt werden",
                           "fr":  "sports d\u0027équipe pratiqués avec un ballon",
                           "es":  "deportes de equipo jugados con una pelota"
                       },
    "ooo.q.36.explanation":  {
                                 "nl":  "De andere drie zijn teamsporten die met een bal worden gespeeld; schaken is een bordspel.",
                                 "de":  "Die anderen drei sind Mannschaftssportarten, die mit einem Ball gespielt werden; Schach ist ein Brettspiel.",
                                 "fr":  "Les trois autres sont des sports collectifs pratiqués avec un ballon ; les échecs sont un jeu de société.",
                                 "es":  "Los otros tres son deportes de equipo que se juegan con pelota; El ajedrez es un juego de mesa."
                             },
    "ooo.q.37.choice.0":  {
                              "nl":  "Zwemmen",
                              "de":  "Schwimmen",
                              "fr":  "Natation",
                              "es":  "Natación"
                          },
    "ooo.q.37.choice.1":  {
                              "nl":  "Fietsen",
                              "de":  "Radfahren",
                              "fr":  "Cyclisme",
                              "es":  "Ciclismo"
                          },
    "ooo.q.37.choice.2":  {
                              "nl":  "Rennen",
                              "de":  "Laufen",
                              "fr":  "Courir",
                              "es":  "Corriendo"
                          },
    "ooo.q.37.choice.3":  {
                              "nl":  "Polsstokspringen",
                              "de":  "Stabhochsprung",
                              "fr":  "Saut à la perche",
                              "es":  "Salto con pértiga"
                          },
    "ooo.q.37.odd":  {
                         "nl":  "Polsstokspringen",
                         "de":  "Stabhochsprung",
                         "fr":  "Saut à la perche",
                         "es":  "Salto con pértiga"
                     },
    "ooo.q.37.group":  {
                           "nl":  "triatlon disciplines",
                           "de":  "Triathlon-Disziplinen",
                           "fr":  "disciplines du triathlon",
                           "es":  "disciplinas de triatlón"
                       },
    "ooo.q.37.explanation":  {
                                 "nl":  "Zwemmen, fietsen en hardlopen zijn de drie triatlondisciplines; Polsstokspringen is een veldevenement.",
                                 "de":  "Schwimmen, Radfahren und Laufen sind die drei Triathlon-Disziplinen; Stabhochsprung ist eine Feldveranstaltung.",
                                 "fr":  "La natation, le cyclisme et la course à pied sont les trois disciplines du triathlon ; le saut à la perche est une épreuve sur le terrain.",
                                 "es":  "La natación, el ciclismo y la carrera a pie son las tres disciplinas del triatlón; El salto con pértiga es un evento de campo."
                             },
    "ooo.q.38.choice.0":  {
                              "nl":  "Vrije slag",
                              "de":  "Freistil",
                              "fr":  "Style libre",
                              "es":  "Estilo libre"
                          },
    "ooo.q.38.choice.1":  {
                              "nl":  "Rugslag",
                              "de":  "Rückenschwimmen",
                              "fr":  "Dos",
                              "es":  "Espalda"
                          },
    "ooo.q.38.choice.2":  {
                              "nl":  "Schoolslag",
                              "de":  "Brustschwimmen",
                              "fr":  "Brasse",
                              "es":  "Braza"
                          },
    "ooo.q.38.choice.3":  {
                              "nl":  "Waterpolo",
                              "de":  "Wasserball",
                              "fr":  "Water-polo",
                              "es":  "Waterpolo"
                          },
    "ooo.q.38.odd":  {
                         "nl":  "Waterpolo",
                         "de":  "Wasserball",
                         "fr":  "Water-polo",
                         "es":  "Waterpolo"
                     },
    "ooo.q.38.group":  {
                           "nl":  "zwemslagen",
                           "de":  "Schwimmzüge",
                           "fr":  "coups de nage",
                           "es":  "brazadas de natación"
                       },
    "ooo.q.38.explanation":  {
                                 "nl":  "De andere drie zijn zwemslagen; waterpolo is een teamsport die in een zwembad wordt gespeeld.",
                                 "de":  "Die anderen drei sind Schwimmzüge; Wasserball ist eine Mannschaftssportart, die in einem Pool gespielt wird.",
                                 "fr":  "Les trois autres sont des nages ; Le water-polo est un sport d\u0027équipe pratiqué en piscine.",
                                 "es":  "Los otros tres son brazadas de natación; El waterpolo es un deporte de equipo que se juega en una piscina."
                             },
    "ooo.q.39.choice.0":  {
                              "nl":  "Doelman",
                              "de":  "Torwart",
                              "fr":  "Gardien de but",
                              "es":  "Portero"
                          },
    "ooo.q.39.choice.1":  {
                              "nl":  "Aanvaller",
                              "de":  "Stürmer",
                              "fr":  "Attaquant",
                              "es":  "Delantero"
                          },
    "ooo.q.39.choice.2":  {
                              "nl":  "Verdediger",
                              "de":  "Verteidiger",
                              "fr":  "Défenseur",
                              "es":  "Defensor"
                          },
    "ooo.q.39.choice.3":  {
                              "nl":  "Werper",
                              "de":  "Krug",
                              "fr":  "Pichet",
                              "es":  "Lanzador"
                          },
    "ooo.q.39.odd":  {
                         "nl":  "Werper",
                         "de":  "Krug",
                         "fr":  "Pichet",
                         "es":  "Lanzador"
                     },
    "ooo.q.39.group":  {
                           "nl":  "voetbalposities van verenigingen",
                           "de":  "Vereinsfußballpositionen",
                           "fr":  "postes de football associatif",
                           "es":  "posiciones de fútbol de asociación"
                       },
    "ooo.q.39.explanation":  {
                                 "nl":  "De andere drie zijn verenigingsvoetbalposities; werper is een honkbalpositie.",
                                 "de":  "Die anderen drei sind Vereinsfußballpositionen; Pitcher ist eine Baseballposition.",
                                 "fr":  "Les trois autres sont des postes de football associatif ; le lanceur est un poste de baseball.",
                                 "es":  "Los otros tres son puestos de fútbol de asociación; lanzador es una posición de béisbol."
                             },
    "ooo.q.40.choice.0":  {
                              "nl":  "Folie",
                              "de":  "Folie",
                              "fr":  "Feuille",
                              "es":  "Lámina"
                          },
    "ooo.q.40.choice.1":  {
                              "nl":  "Degen",
                              "de":  "Degen",
                              "fr":  "Épée",
                              "es":  "Espada"
                          },
    "ooo.q.40.choice.2":  {
                              "nl":  "Sabel",
                              "de":  "Säbel",
                              "fr":  "Sabre",
                              "es":  "Sable"
                          },
    "ooo.q.40.choice.3":  {
                              "nl":  "Handboog",
                              "de":  "Langbogen",
                              "fr":  "Arc long",
                              "es":  "Arco largo"
                          },
    "ooo.q.40.odd":  {
                         "nl":  "Handboog",
                         "de":  "Langbogen",
                         "fr":  "Arc long",
                         "es":  "Arco largo"
                     },
    "ooo.q.40.group":  {
                           "nl":  "Olympische schermwapens",
                           "de":  "Olympische Fechtwaffen",
                           "fr":  "Armes d\u0027escrime olympique",
                           "es":  "Armas olímpicas de esgrima"
                       },
    "ooo.q.40.explanation":  {
                                 "nl":  "Folie, degen en sabel zijn de drie Olympische schermwapens; een handboog wordt gebruikt bij boogschieten.",
                                 "de":  "Florett, Degen und Säbel sind die drei olympischen Fechtwaffen; Beim Bogenschießen wird ein Langbogen verwendet.",
                                 "fr":  "Le fleuret, l\u0027épée et le sabre sont les trois armes olympiques d\u0027escrime ; un arc long est utilisé au tir à l\u0027arc.",
                                 "es":  "El florete, la espada y el sable son las tres armas olímpicas de la esgrima; En tiro con arco se utiliza un arco largo."
                             },
    "ooo.q.41.choice.0":  {
                              "nl":  "Leeuw",
                              "de":  "Löwe",
                              "fr":  "Lion",
                              "es":  "León"
                          },
    "ooo.q.41.choice.1":  {
                              "nl":  "Tijger",
                              "de":  "Tiger",
                              "fr":  "Tigre",
                              "es":  "Tigre"
                          },
    "ooo.q.41.choice.2":  {
                              "nl":  "Luipaard",
                              "de":  "Leopard",
                              "fr":  "Léopard",
                              "es":  "Leopardo"
                          },
    "ooo.q.41.choice.3":  {
                              "nl":  "Dolfijn",
                              "de":  "Delphin",
                              "fr":  "Dauphin",
                              "es":  "Delfín"
                          },
    "ooo.q.41.odd":  {
                         "nl":  "Dolfijn",
                         "de":  "Delphin",
                         "fr":  "Dauphin",
                         "es":  "Delfín"
                     },
    "ooo.q.41.group":  {
                           "nl":  "grote katten",
                           "de":  "große Katzen",
                           "fr":  "gros félins",
                           "es":  "grandes felinos"
                       },
    "ooo.q.41.explanation":  {
                                 "nl":  "De andere drie zijn grote katten; een dolfijn is een zeezoogdier.",
                                 "de":  "Die anderen drei sind Großkatzen; Ein Delphin ist ein Meeressäugetier.",
                                 "fr":  "Les trois autres sont des félins ; un dauphin est un mammifère marin.",
                                 "es":  "Los otros tres son grandes felinos; un delfín es un mamífero marino."
                             },
    "ooo.q.42.choice.0":  {
                              "nl":  "Hond",
                              "de":  "Hund",
                              "fr":  "Chien",
                              "es":  "Perro"
                          },
    "ooo.q.42.choice.1":  {
                              "nl":  "Kat",
                              "de":  "Katze",
                              "fr":  "Chat",
                              "es":  "Gato"
                          },
    "ooo.q.42.choice.2":  {
                              "nl":  "Paard",
                              "de":  "Pferd",
                              "fr":  "Cheval",
                              "es":  "Caballo"
                          },
    "ooo.q.42.choice.3":  {
                              "nl":  "Adelaar",
                              "de":  "Adler",
                              "fr":  "Aigle",
                              "es":  "Águila"
                          },
    "ooo.q.42.odd":  {
                         "nl":  "Adelaar",
                         "de":  "Adler",
                         "fr":  "Aigle",
                         "es":  "Águila"
                     },
    "ooo.q.42.group":  {
                           "nl":  "zoogdieren",
                           "de":  "Säugetiere",
                           "fr":  "mammifères",
                           "es":  "mamíferos"
                       },
    "ooo.q.42.explanation":  {
                                 "nl":  "De andere drie zijn zoogdieren; een adelaar is een vogel.",
                                 "de":  "Die anderen drei sind Säugetiere; Ein Adler ist ein Vogel.",
                                 "fr":  "Les trois autres sont des mammifères ; un aigle est un oiseau.",
                                 "es":  "Los otros tres son mamíferos; un águila es un pájaro."
                             },
    "ooo.q.43.choice.0":  {
                              "nl":  "Bij",
                              "de":  "Biene",
                              "fr":  "Abeille",
                              "es":  "Abeja"
                          },
    "ooo.q.43.choice.1":  {
                              "nl":  "Mier",
                              "de":  "Ameise",
                              "fr":  "Fourmi",
                              "es":  "Hormiga"
                          },
    "ooo.q.43.choice.2":  {
                              "nl":  "Vlinder",
                              "de":  "Schmetterling",
                              "fr":  "Papillon",
                              "es":  "Mariposa"
                          },
    "ooo.q.43.choice.3":  {
                              "nl":  "Spin",
                              "de":  "Spinne",
                              "fr":  "Araignée",
                              "es":  "Araña"
                          },
    "ooo.q.43.odd":  {
                         "nl":  "Spin",
                         "de":  "Spinne",
                         "fr":  "Araignée",
                         "es":  "Araña"
                     },
    "ooo.q.43.group":  {
                           "nl":  "insecten",
                           "de":  "Insekten",
                           "fr":  "insectes",
                           "es":  "insectos"
                       },
    "ooo.q.43.explanation":  {
                                 "nl":  "De andere drie zijn insecten; een spin is een spinachtige.",
                                 "de":  "Die anderen drei sind Insekten; Eine Spinne ist ein Spinnentier.",
                                 "fr":  "Les trois autres sont des insectes ; une araignée est un arachnide.",
                                 "es":  "Los otros tres son insectos; una araña es un arácnido."
                             },
    "ooo.q.44.choice.0":  {
                              "nl":  "Adelaar",
                              "de":  "Adler",
                              "fr":  "Aigle",
                              "es":  "Águila"
                          },
    "ooo.q.44.choice.1":  {
                              "nl":  "Uil",
                              "de":  "Eule",
                              "fr":  "Chouette",
                              "es":  "Búho"
                          },
    "ooo.q.44.choice.2":  {
                              "nl":  "Papegaai",
                              "de":  "Papagei",
                              "fr":  "Perroquet",
                              "es":  "Loro"
                          },
    "ooo.q.44.choice.3":  {
                              "nl":  "Pinguïn",
                              "de":  "Pinguin",
                              "fr":  "Pingouin",
                              "es":  "Pingüino"
                          },
    "ooo.q.44.odd":  {
                         "nl":  "Pinguïn",
                         "de":  "Pinguin",
                         "fr":  "Pingouin",
                         "es":  "Pingüino"
                     },
    "ooo.q.44.group":  {
                           "nl":  "vogels die kunnen vliegen",
                           "de":  "Vögel, die fliegen können",
                           "fr":  "oiseaux qui peuvent voler",
                           "es":  "pájaros que pueden volar"
                       },
    "ooo.q.44.explanation":  {
                                 "nl":  "De andere drie kunnen vliegen; pinguïns zijn loopvogels.",
                                 "de":  "Die anderen drei können fliegen; Pinguine sind flugunfähige Vögel.",
                                 "fr":  "Les trois autres peuvent voler ; les pingouins sont des oiseaux incapables de voler.",
                                 "es":  "Los otros tres pueden volar; Los pingüinos son aves no voladoras."
                             },
    "ooo.q.45.choice.0":  {
                              "nl":  "Krokodil",
                              "de":  "Krokodil",
                              "fr":  "Crocodile",
                              "es":  "Cocodrilo"
                          },
    "ooo.q.45.choice.1":  {
                              "nl":  "Slang",
                              "de":  "Schlange",
                              "fr":  "Serpent",
                              "es":  "Serpiente"
                          },
    "ooo.q.45.choice.2":  {
                              "nl":  "Schildpad",
                              "de":  "Schildkröte",
                              "fr":  "Tortue",
                              "es":  "Tortuga"
                          },
    "ooo.q.45.choice.3":  {
                              "nl":  "Kikker",
                              "de":  "Frosch",
                              "fr":  "Grenouille",
                              "es":  "Rana"
                          },
    "ooo.q.45.odd":  {
                         "nl":  "Kikker",
                         "de":  "Frosch",
                         "fr":  "Grenouille",
                         "es":  "Rana"
                     },
    "ooo.q.45.group":  {
                           "nl":  "reptielen",
                           "de":  "Reptilien",
                           "fr":  "reptiles",
                           "es":  "reptiles"
                       },
    "ooo.q.45.explanation":  {
                                 "nl":  "De andere drie zijn reptielen; een kikker is een amfibie.",
                                 "de":  "Die anderen drei sind Reptilien; Ein Frosch ist eine Amphibie.",
                                 "fr":  "Les trois autres sont des reptiles ; une grenouille est un amphibien.",
                                 "es":  "Los otros tres son reptiles; una rana es un anfibio."
                             },
    "ooo.q.46.choice.0":  {
                              "nl":  "Haai",
                              "de":  "Hai",
                              "fr":  "Requin",
                              "es":  "Tiburón"
                          },
    "ooo.q.46.choice.1":  {
                              "nl":  "Dolfijn",
                              "de":  "Delphin",
                              "fr":  "Dauphin",
                              "es":  "Delfín"
                          },
    "ooo.q.46.choice.2":  {
                              "nl":  "Walvis",
                              "de":  "Wal",
                              "fr":  "Baleine",
                              "es":  "Ballena"
                          },
    "ooo.q.46.choice.3":  {
                              "nl":  "Zalm",
                              "de":  "Lachs",
                              "fr":  "Saumon",
                              "es":  "Salmón"
                          },
    "ooo.q.46.odd":  {
                         "nl":  "Zalm",
                         "de":  "Lachs",
                         "fr":  "Saumon",
                         "es":  "Salmón"
                     },
    "ooo.q.46.group":  {
                           "nl":  "zeezoogdieren",
                           "de":  "Meeressäugetiere",
                           "fr":  "mammifères marins",
                           "es":  "mamíferos marinos"
                       },
    "ooo.q.46.explanation":  {
                                 "nl":  "De andere drie zijn zeezoogdieren; een zalm is een vis.",
                                 "de":  "Die anderen drei sind Meeressäugetiere; Ein Lachs ist ein Fisch.",
                                 "fr":  "Les trois autres sont des mammifères marins ; un saumon est un poisson.",
                                 "es":  "Los otros tres son mamíferos marinos; un salmón es un pez."
                             },
    "ooo.q.47.choice.0":  {
                              "nl":  "Giraf",
                              "de":  "Giraffe",
                              "fr":  "Girafe",
                              "es":  "Jirafa"
                          },
    "ooo.q.47.choice.1":  {
                              "nl":  "Zebra",
                              "de":  "Zebra",
                              "fr":  "Zèbre",
                              "es":  "Cebra"
                          },
    "ooo.q.47.choice.2":  {
                              "nl":  "Olifant",
                              "de":  "Elefant",
                              "fr":  "Éléphant",
                              "es":  "Elefante"
                          },
    "ooo.q.47.choice.3":  {
                              "nl":  "Pinguïn",
                              "de":  "Pinguin",
                              "fr":  "Pingouin",
                              "es":  "Pingüino"
                          },
    "ooo.q.47.odd":  {
                         "nl":  "Pinguïn",
                         "de":  "Pinguin",
                         "fr":  "Pingouin",
                         "es":  "Pingüino"
                     },
    "ooo.q.47.group":  {
                           "nl":  "Afrikaanse landzoogdieren",
                           "de":  "Afrikanische Landsäugetiere",
                           "fr":  "Mammifères terrestres africains",
                           "es":  "mamíferos terrestres africanos"
                       },
    "ooo.q.47.explanation":  {
                                 "nl":  "De andere drie zijn grote Afrikaanse landzoogdieren; een pinguïn is een vogel.",
                                 "de":  "Die anderen drei sind große afrikanische Landsäugetiere; Ein Pinguin ist ein Vogel.",
                                 "fr":  "Les trois autres sont de grands mammifères terrestres africains ; un pingouin est un oiseau.",
                                 "es":  "Los otros tres son grandes mamíferos terrestres africanos; un pingüino es un pájaro."
                             },
    "ooo.q.48.choice.0":  {
                              "nl":  "Rups",
                              "de":  "Raupe",
                              "fr":  "Chenille",
                              "es":  "Oruga"
                          },
    "ooo.q.48.choice.1":  {
                              "nl":  "Kikkervisje",
                              "de":  "Kaulquappe",
                              "fr":  "Têtard",
                              "es":  "Renacuajo"
                          },
    "ooo.q.48.choice.2":  {
                              "nl":  "Kikker",
                              "de":  "Frosch",
                              "fr":  "Grenouille",
                              "es":  "Rana"
                          },
    "ooo.q.48.choice.3":  {
                              "nl":  "Vlinder",
                              "de":  "Schmetterling",
                              "fr":  "Papillon",
                              "es":  "Mariposa"
                          },
    "ooo.q.48.odd":  {
                         "nl":  "Kikker",
                         "de":  "Frosch",
                         "fr":  "Grenouille",
                         "es":  "Rana"
                     },
    "ooo.q.48.group":  {
                           "nl":  "Stadia van de levenscyclus van dieren",
                           "de":  "Lebenszyklusstadien von Tieren",
                           "fr":  "étapes du cycle de vie des animaux",
                           "es":  "etapas del ciclo de vida animal"
                       },
    "ooo.q.48.explanation":  {
                                 "nl":  "De andere drie zijn fasen in de levenscycli van dieren; een kikker is een volwassen dier.",
                                 "de":  "Die anderen drei sind Stadien im Lebenszyklus von Tieren; Ein Frosch ist ein erwachsenes Tier.",
                                 "fr":  "Les trois autres sont des étapes du cycle de vie des animaux ; une grenouille est un animal adulte.",
                                 "es":  "Los otros tres son etapas de los ciclos de vida de los animales; una rana es un animal adulto."
                             },
    "ooo.q.49.choice.0":  {
                              "nl":  "Octopus",
                              "de":  "Oktopus",
                              "fr":  "Poulpe",
                              "es":  "Pulpo"
                          },
    "ooo.q.49.choice.1":  {
                              "nl":  "Inktvis",
                              "de":  "Tintenfisch",
                              "fr":  "Calmar",
                              "es":  "Calamar"
                          },
    "ooo.q.49.choice.2":  {
                              "nl":  "Inktvissen",
                              "de":  "Tintenfisch",
                              "fr":  "Seiche",
                              "es":  "Sepia"
                          },
    "ooo.q.49.choice.3":  {
                              "nl":  "Krab",
                              "de":  "Krabbe",
                              "fr":  "Crabe",
                              "es":  "Cangrejo"
                          },
    "ooo.q.49.odd":  {
                         "nl":  "Krab",
                         "de":  "Krabbe",
                         "fr":  "Crabe",
                         "es":  "Cangrejo"
                     },
    "ooo.q.49.group":  {
                           "nl":  "koppotigen",
                           "de":  "Kopffüßer",
                           "fr":  "céphalopodes",
                           "es":  "cefalópodos"
                       },
    "ooo.q.49.explanation":  {
                                 "nl":  "De andere drie zijn koppotigen; een krab is een schaaldier.",
                                 "de":  "Die anderen drei sind Kopffüßer; Eine Krabbe ist ein Krebstier.",
                                 "fr":  "Les trois autres sont des céphalopodes ; un crabe est un crustacé.",
                                 "es":  "Los otros tres son cefalópodos; un cangrejo es un crustáceo."
                             },
    "ooo.q.50.choice.0":  {
                              "nl":  "Ijsbeer",
                              "de":  "Eisbär",
                              "fr":  "Ours polaire",
                              "es":  "Oso polar"
                          },
    "ooo.q.50.choice.1":  {
                              "nl":  "Poolvos",
                              "de":  "Polarfuchs",
                              "fr":  "Renard arctique",
                              "es":  "Zorro ártico"
                          },
    "ooo.q.50.choice.2":  {
                              "nl":  "Walrussen",
                              "de":  "Walross",
                              "fr":  "Morse",
                              "es":  "Morsa"
                          },
    "ooo.q.50.choice.3":  {
                              "nl":  "Kangoeroe",
                              "de":  "Känguru",
                              "fr":  "Kangourou",
                              "es":  "Canguro"
                          },
    "ooo.q.50.odd":  {
                         "nl":  "Kangoeroe",
                         "de":  "Känguru",
                         "fr":  "Kangourou",
                         "es":  "Canguro"
                     },
    "ooo.q.50.group":  {
                           "nl":  "Arctische dieren",
                           "de":  "Arktische Tiere",
                           "fr":  "Animaux arctiques",
                           "es":  "animales árticos"
                       },
    "ooo.q.50.explanation":  {
                                 "nl":  "De andere drie wonen in het noordpoolgebied; kangoeroes komen oorspronkelijk uit Australië.",
                                 "de":  "Die anderen drei leben in der Arktis; Kängurus sind in Australien beheimatet.",
                                 "fr":  "Les trois autres vivent dans l\u0027Arctique ; les kangourous sont originaires d\u0027Australie.",
                                 "es":  "Los otros tres viven en el Ártico; Los canguros son nativos de Australia."
                             },
    "ooo.q.51.choice.0":  {
                              "nl":  "Koala",
                              "de":  "Koala",
                              "fr":  "Koala",
                              "es":  "Koala"
                          },
    "ooo.q.51.choice.1":  {
                              "nl":  "Kangoeroe",
                              "de":  "Känguru",
                              "fr":  "Kangourou",
                              "es":  "Canguro"
                          },
    "ooo.q.51.choice.2":  {
                              "nl":  "Wombat",
                              "de":  "Wombat",
                              "fr":  "Wombat",
                              "es":  "Wombat"
                          },
    "ooo.q.51.choice.3":  {
                              "nl":  "Luiaard",
                              "de":  "Faultier",
                              "fr":  "Paresseux",
                              "es":  "Pereza"
                          },
    "ooo.q.51.odd":  {
                         "nl":  "Luiaard",
                         "de":  "Faultier",
                         "fr":  "Paresseux",
                         "es":  "Pereza"
                     },
    "ooo.q.51.group":  {
                           "nl":  "Australische buideldieren",
                           "de":  "Australische Beuteltiere",
                           "fr":  "Marsupiaux australiens",
                           "es":  "marsupiales australianos"
                       },
    "ooo.q.51.explanation":  {
                                 "nl":  "De andere drie zijn Australische buideldieren; luiaards leven in Midden- en Zuid-Amerika.",
                                 "de":  "Die anderen drei sind australische Beuteltiere; Faultiere leben in Mittel- und Südamerika.",
                                 "fr":  "Les trois autres sont des marsupiaux australiens ; les paresseux vivent en Amérique centrale et en Amérique du Sud.",
                                 "es":  "Los otros tres son marsupiales australianos; Los perezosos viven en América Central y del Sur."
                             },
    "ooo.q.52.choice.0":  {
                              "nl":  "Kikker",
                              "de":  "Frosch",
                              "fr":  "Grenouille",
                              "es":  "Rana"
                          },
    "ooo.q.52.choice.1":  {
                              "nl":  "Pad",
                              "de":  "Kröte",
                              "fr":  "Crapaud",
                              "es":  "Sapo"
                          },
    "ooo.q.52.choice.2":  {
                              "nl":  "Salamander",
                              "de":  "Salamander",
                              "fr":  "Salamandre",
                              "es":  "Salamandra"
                          },
    "ooo.q.52.choice.3":  {
                              "nl":  "Hagedis",
                              "de":  "Eidechse",
                              "fr":  "Lézard",
                              "es":  "Lagarto"
                          },
    "ooo.q.52.odd":  {
                         "nl":  "Hagedis",
                         "de":  "Eidechse",
                         "fr":  "Lézard",
                         "es":  "Lagarto"
                     },
    "ooo.q.52.group":  {
                           "nl":  "amfibieën",
                           "de":  "Amphibien",
                           "fr":  "amphibiens",
                           "es":  "anfibios"
                       },
    "ooo.q.52.explanation":  {
                                 "nl":  "De andere drie zijn amfibieën; een hagedis is een reptiel.",
                                 "de":  "Die anderen drei sind Amphibien; Eine Eidechse ist ein Reptil.",
                                 "fr":  "Les trois autres sont des amphibiens ; un lézard est un reptile.",
                                 "es":  "Los otros tres son anfibios; un lagarto es un reptil."
                             },
    "ooo.q.53.choice.0":  {
                              "nl":  "Orka",
                              "de":  "Orca",
                              "fr":  "Orque",
                              "es":  "Orca"
                          },
    "ooo.q.53.choice.1":  {
                              "nl":  "Dolfijn",
                              "de":  "Delphin",
                              "fr":  "Dauphin",
                              "es":  "Delfín"
                          },
    "ooo.q.53.choice.2":  {
                              "nl":  "Bruinvis",
                              "de":  "Schweinswal",
                              "fr":  "Marsouin",
                              "es":  "Marsopa"
                          },
    "ooo.q.53.choice.3":  {
                              "nl":  "Lamantijn",
                              "de":  "Seekuh",
                              "fr":  "Lamantin",
                              "es":  "Manatí"
                          },
    "ooo.q.53.odd":  {
                         "nl":  "Lamantijn",
                         "de":  "Seekuh",
                         "fr":  "Lamantin",
                         "es":  "Manatí"
                     },
    "ooo.q.53.group":  {
                           "nl":  "getande walvisachtigen",
                           "de":  "Zahnwale",
                           "fr":  "cétacés à dents",
                           "es":  "cetáceos dentados"
                       },
    "ooo.q.53.explanation":  {
                                 "nl":  "De andere drie zijn getande walvisachtigen; een lamantijn is een sirene.",
                                 "de":  "Die anderen drei sind Zahnwale; Eine Seekuh ist eine Sirene.",
                                 "fr":  "Les trois autres sont des cétacés à dents ; un lamantin est un sirénien.",
                                 "es":  "Los otros tres son cetáceos dentados; un manatí es un sirenio."
                             },
    "ooo.q.54.choice.0":  {
                              "nl":  "Pauw",
                              "de":  "Pfau",
                              "fr":  "Paon",
                              "es":  "Pavo real"
                          },
    "ooo.q.54.choice.1":  {
                              "nl":  "Fazant",
                              "de":  "Fasan",
                              "fr":  "Faisan",
                              "es":  "Faisán"
                          },
    "ooo.q.54.choice.2":  {
                              "nl":  "Turkije",
                              "de":  "Türkei",
                              "fr":  "Turquie",
                              "es":  "Turquía"
                          },
    "ooo.q.54.choice.3":  {
                              "nl":  "Flamingo",
                              "de":  "Flamingo",
                              "fr":  "Flamant rose",
                              "es":  "Flamenco"
                          },
    "ooo.q.54.odd":  {
                         "nl":  "Flamingo",
                         "de":  "Flamingo",
                         "fr":  "Flamant rose",
                         "es":  "Flamenco"
                     },
    "ooo.q.54.group":  {
                           "nl":  "galliforme vogels",
                           "de":  "Galliforme Vögel",
                           "fr":  "oiseaux galliformes",
                           "es":  "aves galliformes"
                       },
    "ooo.q.54.explanation":  {
                                 "nl":  "De andere drie zijn galliforme vogels; een flamingo behoort tot een andere vogelorde.",
                                 "de":  "Die anderen drei sind Hühnervögel; Ein Flamingo gehört einer anderen Vogelordnung an.",
                                 "fr":  "Les trois autres sont des oiseaux galliformes ; un flamant rose appartient à un ordre d’oiseaux différent.",
                                 "es":  "Los otros tres son aves galliformes; un flamenco pertenece a un orden de aves diferente."
                             },
    "ooo.q.55.choice.0":  {
                              "nl":  "Slak",
                              "de":  "Schnecke",
                              "fr":  "Escargot",
                              "es":  "Caracol"
                          },
    "ooo.q.55.choice.1":  {
                              "nl":  "Tweekleppig schelpdier",
                              "de":  "Muschel",
                              "fr":  "Palourde",
                              "es":  "Almeja"
                          },
    "ooo.q.55.choice.2":  {
                              "nl":  "Oester",
                              "de":  "Auster",
                              "fr":  "Huître",
                              "es":  "Ostra"
                          },
    "ooo.q.55.choice.3":  {
                              "nl":  "Kwallen",
                              "de":  "Qualle",
                              "fr":  "Méduse",
                              "es":  "Medusas"
                          },
    "ooo.q.55.odd":  {
                         "nl":  "Kwallen",
                         "de":  "Qualle",
                         "fr":  "Méduse",
                         "es":  "Medusas"
                     },
    "ooo.q.55.group":  {
                           "nl":  "weekdieren",
                           "de":  "Weichtiere",
                           "fr":  "mollusques",
                           "es":  "moluscos"
                       },
    "ooo.q.55.explanation":  {
                                 "nl":  "De andere drie zijn weekdieren; een kwal is een neteldier.",
                                 "de":  "Die anderen drei sind Weichtiere; Eine Qualle ist ein Nesseltier.",
                                 "fr":  "Les trois autres sont des mollusques ; une méduse est un cnidaire.",
                                 "es":  "Los otros tres son moluscos; una medusa es un cnidario."
                             },
    "ooo.q.56.choice.0":  {
                              "nl":  "Kat",
                              "de":  "Katze",
                              "fr":  "Chat",
                              "es":  "Gato"
                          },
    "ooo.q.56.choice.1":  {
                              "nl":  "Hond",
                              "de":  "Hund",
                              "fr":  "Chien",
                              "es":  "Perro"
                          },
    "ooo.q.56.choice.2":  {
                              "nl":  "Konijn",
                              "de":  "Kaninchen",
                              "fr":  "Lapin",
                              "es":  "Conejo"
                          },
    "ooo.q.56.choice.3":  {
                              "nl":  "Adelaar",
                              "de":  "Adler",
                              "fr":  "Aigle",
                              "es":  "Águila"
                          },
    "ooo.q.56.odd":  {
                         "nl":  "Adelaar",
                         "de":  "Adler",
                         "fr":  "Aigle",
                         "es":  "Águila"
                     },
    "ooo.q.56.group":  {
                           "nl":  "gewone huisdieren",
                           "de":  "gewöhnliche Haustiere",
                           "fr":  "animaux domestiques courants",
                           "es":  "mascotas domésticas comunes"
                       },
    "ooo.q.56.explanation":  {
                                 "nl":  "De andere drie zijn gewone huisdieren; een adelaar is een wilde vogel.",
                                 "de":  "Die anderen drei sind gewöhnliche Haustiere; Ein Adler ist ein wilder Vogel.",
                                 "fr":  "Les trois autres sont des animaux domestiques courants ; un aigle est un oiseau sauvage.",
                                 "es":  "Los otros tres son mascotas domésticas comunes; un águila es un ave salvaje."
                             },
    "ooo.q.57.choice.0":  {
                              "nl":  "Walvis",
                              "de":  "Wal",
                              "fr":  "Baleine",
                              "es":  "Ballena"
                          },
    "ooo.q.57.choice.1":  {
                              "nl":  "Dolfijn",
                              "de":  "Delphin",
                              "fr":  "Dauphin",
                              "es":  "Delfín"
                          },
    "ooo.q.57.choice.2":  {
                              "nl":  "Zegel",
                              "de":  "Siegel",
                              "fr":  "Sceau",
                              "es":  "Sello"
                          },
    "ooo.q.57.choice.3":  {
                              "nl":  "Tonijn",
                              "de":  "Thunfisch",
                              "fr":  "Thon",
                              "es":  "Atún"
                          },
    "ooo.q.57.odd":  {
                         "nl":  "Tonijn",
                         "de":  "Thunfisch",
                         "fr":  "Thon",
                         "es":  "Atún"
                     },
    "ooo.q.57.group":  {
                           "nl":  "zeezoogdieren",
                           "de":  "Meeressäugetiere",
                           "fr":  "mammifères marins",
                           "es":  "mamíferos marinos"
                       },
    "ooo.q.57.explanation":  {
                                 "nl":  "De andere drie zijn zeezoogdieren; tonijn is vis.",
                                 "de":  "Die anderen drei sind Meeressäugetiere; Thunfisch ist Fisch.",
                                 "fr":  "Les trois autres sont des mammifères marins ; le thon est un poisson.",
                                 "es":  "Los otros tres son mamíferos marinos; el atún es pescado."
                             },
    "ooo.q.58.choice.0":  {
                              "nl":  "Cheetah",
                              "de":  "Gepard",
                              "fr":  "Guépard",
                              "es":  "Guepardo"
                          },
    "ooo.q.58.choice.1":  {
                              "nl":  "Leeuw",
                              "de":  "Löwe",
                              "fr":  "Lion",
                              "es":  "León"
                          },
    "ooo.q.58.choice.2":  {
                              "nl":  "Luipaard",
                              "de":  "Leopard",
                              "fr":  "Léopard",
                              "es":  "Leopardo"
                          },
    "ooo.q.58.choice.3":  {
                              "nl":  "Krokodil",
                              "de":  "Krokodil",
                              "fr":  "Crocodile",
                              "es":  "Cocodrilo"
                          },
    "ooo.q.58.odd":  {
                         "nl":  "Krokodil",
                         "de":  "Krokodil",
                         "fr":  "Crocodile",
                         "es":  "Cocodrilo"
                     },
    "ooo.q.58.group":  {
                           "nl":  "grote katten",
                           "de":  "große Katzen",
                           "fr":  "gros félins",
                           "es":  "grandes felinos"
                       },
    "ooo.q.58.explanation":  {
                                 "nl":  "De andere drie zijn grote katten; een krokodil is een reptiel.",
                                 "de":  "Die anderen drei sind Großkatzen; Ein Krokodil ist ein Reptil.",
                                 "fr":  "Les trois autres sont des félins ; un crocodile est un reptile.",
                                 "es":  "Los otros tres son grandes felinos; un cocodrilo es un reptil."
                             },
    "ooo.q.59.choice.0":  {
                              "nl":  "Zwaan",
                              "de":  "Schwan",
                              "fr":  "Cygne",
                              "es":  "Cisne"
                          },
    "ooo.q.59.choice.1":  {
                              "nl":  "Gans",
                              "de":  "Gans",
                              "fr":  "Oie",
                              "es":  "Ganso"
                          },
    "ooo.q.59.choice.2":  {
                              "nl":  "Eend",
                              "de":  "Ente",
                              "fr":  "Canard",
                              "es":  "Pato"
                          },
    "ooo.q.59.choice.3":  {
                              "nl":  "Vleermuis",
                              "de":  "Fledermaus",
                              "fr":  "Chauve-souris",
                              "es":  "Murciélago"
                          },
    "ooo.q.59.odd":  {
                         "nl":  "Vleermuis",
                         "de":  "Fledermaus",
                         "fr":  "Chauve-souris",
                         "es":  "Murciélago"
                     },
    "ooo.q.59.group":  {
                           "nl":  "watervogels",
                           "de":  "Wasservögel",
                           "fr":  "sauvagine",
                           "es":  "aves acuáticas"
                       },
    "ooo.q.59.explanation":  {
                                 "nl":  "De andere drie zijn watervogels; een vleermuis is een zoogdier.",
                                 "de":  "Die anderen drei sind Wasservögel; Eine Fledermaus ist ein Säugetier.",
                                 "fr":  "Les trois autres sont des oiseaux aquatiques ; une chauve-souris est un mammifère.",
                                 "es":  "Los otros tres son aves acuáticas; un murciélago es un mamífero."
                             },
    "ooo.q.60.choice.0":  {
                              "nl":  "Monarchvlinder",
                              "de":  "Monarchfalter",
                              "fr":  "Papillon monarque",
                              "es":  "Mariposa monarca"
                          },
    "ooo.q.60.choice.1":  {
                              "nl":  "Zwaluwstaartvlinder",
                              "de":  "Schwalbenschwanz-Schmetterling",
                              "fr":  "Papillon machaon",
                              "es":  "Mariposa cola de golondrina"
                          },
    "ooo.q.60.choice.2":  {
                              "nl":  "Mot",
                              "de":  "Motte",
                              "fr":  "Papillon de nuit",
                              "es":  "Polilla"
                          },
    "ooo.q.60.choice.3":  {
                              "nl":  "Tarantula",
                              "de":  "Vogelspinne",
                              "fr":  "Tarentule",
                              "es":  "Tarántula"
                          },
    "ooo.q.60.odd":  {
                         "nl":  "Tarantula",
                         "de":  "Vogelspinne",
                         "fr":  "Tarentule",
                         "es":  "Tarántula"
                     },
    "ooo.q.60.group":  {
                           "nl":  "insecten",
                           "de":  "Insekten",
                           "fr":  "insectes",
                           "es":  "insectos"
                       },
    "ooo.q.60.explanation":  {
                                 "nl":  "De andere drie zijn insecten; een tarantula is een spinachtige.",
                                 "de":  "Die anderen drei sind Insekten; Eine Vogelspinne ist ein Spinnentier.",
                                 "fr":  "Les trois autres sont des insectes ; une tarentule est un arachnide.",
                                 "es":  "Los otros tres son insectos; una tarántula es un arácnido."
                             },
    "ooo.q.61.choice.0":  {
                              "nl":  "Frankrijk",
                              "de":  "Frankreich",
                              "fr":  "France",
                              "es":  "Francia"
                          },
    "ooo.q.61.choice.1":  {
                              "nl":  "Spanje",
                              "de":  "Spanien",
                              "fr":  "Espagne",
                              "es":  "España"
                          },
    "ooo.q.61.choice.2":  {
                              "nl":  "Italië",
                              "de":  "Italien",
                              "fr":  "Italie",
                              "es":  "Italia"
                          },
    "ooo.q.61.choice.3":  {
                              "nl":  "Madrid",
                              "de":  "Madrid",
                              "fr":  "Madrid",
                              "es":  "Madrid"
                          },
    "ooo.q.61.odd":  {
                         "nl":  "Madrid",
                         "de":  "Madrid",
                         "fr":  "Madrid",
                         "es":  "Madrid"
                     },
    "ooo.q.61.group":  {
                           "nl":  "landen",
                           "de":  "Länder",
                           "fr":  "pays",
                           "es":  "países"
                       },
    "ooo.q.61.explanation":  {
                                 "nl":  "De andere drie zijn landen; Madrid is een stad.",
                                 "de":  "Die anderen drei sind Länder; Madrid ist eine Stadt.",
                                 "fr":  "Les trois autres sont des pays ; Madrid est une ville.",
                                 "es":  "Los otros tres son países; Madrid es una ciudad."
                             },
    "ooo.q.62.choice.0":  {
                              "nl":  "Azië",
                              "de":  "Asien",
                              "fr":  "Asie",
                              "es":  "Asia"
                          },
    "ooo.q.62.choice.1":  {
                              "nl":  "Europa",
                              "de":  "Europa",
                              "fr":  "Europe",
                              "es":  "Europa"
                          },
    "ooo.q.62.choice.2":  {
                              "nl":  "Afrika",
                              "de":  "Afrika",
                              "fr":  "Afrique",
                              "es":  "África"
                          },
    "ooo.q.62.choice.3":  {
                              "nl":  "Brazilië",
                              "de":  "Brasilien",
                              "fr":  "Brésil",
                              "es":  "Brasil"
                          },
    "ooo.q.62.odd":  {
                         "nl":  "Brazilië",
                         "de":  "Brasilien",
                         "fr":  "Brésil",
                         "es":  "Brasil"
                     },
    "ooo.q.62.group":  {
                           "nl":  "continenten",
                           "de":  "Kontinente",
                           "fr":  "continents",
                           "es":  "continentes"
                       },
    "ooo.q.62.explanation":  {
                                 "nl":  "De andere drie zijn continenten; Brazilië is een land.",
                                 "de":  "Die anderen drei sind Kontinente; Brasilien ist ein Land.",
                                 "fr":  "Les trois autres sont des continents ; Le Brésil est un pays.",
                                 "es":  "Los otros tres son continentes; Brasil es un país."
                             },
    "ooo.q.63.choice.0":  {
                              "nl":  "Stille Oceaan",
                              "de":  "Pazifischer Ozean",
                              "fr":  "Océan Pacifique",
                              "es":  "Océano Pacífico"
                          },
    "ooo.q.63.choice.1":  {
                              "nl":  "Atlantische Oceaan",
                              "de":  "Atlantischer Ozean",
                              "fr":  "Océan Atlantique",
                              "es":  "Océano Atlántico"
                          },
    "ooo.q.63.choice.2":  {
                              "nl":  "Indische Oceaan",
                              "de":  "Indischer Ozean",
                              "fr":  "Océan Indien",
                              "es":  "Océano Índico"
                          },
    "ooo.q.63.choice.3":  {
                              "nl":  "Sahara-woestijn",
                              "de":  "Sahara-Wüste",
                              "fr":  "Désert du Sahara",
                              "es":  "Desierto del Sahara"
                          },
    "ooo.q.63.odd":  {
                         "nl":  "Sahara-woestijn",
                         "de":  "Sahara-Wüste",
                         "fr":  "Désert du Sahara",
                         "es":  "Desierto del Sahara"
                     },
    "ooo.q.63.group":  {
                           "nl":  "oceanen",
                           "de":  "Ozeane",
                           "fr":  "océans",
                           "es":  "océanos"
                       },
    "ooo.q.63.explanation":  {
                                 "nl":  "De andere drie zijn oceanen; de Sahara is een woestijn.",
                                 "de":  "Die anderen drei sind Ozeane; Die Sahara ist eine Wüste.",
                                 "fr":  "Les trois autres sont des océans ; le Sahara est un désert.",
                                 "es":  "Los otros tres son océanos; El Sahara es un desierto."
                             },
    "ooo.q.64.choice.0":  {
                              "nl":  "Tokio",
                              "de":  "Tokio",
                              "fr":  "Tokyo",
                              "es":  "Tokio"
                          },
    "ooo.q.64.choice.1":  {
                              "nl":  "Parijs",
                              "de":  "Paris",
                              "fr":  "Paris",
                              "es":  "París"
                          },
    "ooo.q.64.choice.2":  {
                              "nl":  "Rome",
                              "de":  "Rom",
                              "fr":  "Rome",
                              "es":  "Roma"
                          },
    "ooo.q.64.choice.3":  {
                              "nl":  "Sydney",
                              "de":  "Sydney",
                              "fr":  "Sidney",
                              "es":  "Sídney"
                          },
    "ooo.q.64.odd":  {
                         "nl":  "Sydney",
                         "de":  "Sydney",
                         "fr":  "Sidney",
                         "es":  "Sídney"
                     },
    "ooo.q.64.group":  {
                           "nl":  "nationale hoofdsteden",
                           "de":  "Landeshauptstädte",
                           "fr":  "capitales nationales",
                           "es":  "capitales nacionales"
                       },
    "ooo.q.64.explanation":  {
                                 "nl":  "De andere drie zijn nationale hoofdsteden; Sydney is niet de hoofdstad van Australië.",
                                 "de":  "Die anderen drei sind Landeshauptstädte; Sydney ist nicht Australiens Hauptstadt.",
                                 "fr":  "Les trois autres sont des capitales nationales ; Sydney n\u0027est pas la capitale de l\u0027Australie.",
                                 "es":  "Las otras tres son capitales nacionales; Sydney no es la capital de Australia."
                             },
    "ooo.q.65.choice.0":  {
                              "nl":  "Mount Everest",
                              "de":  "Mount Everest",
                              "fr":  "Mont Everest",
                              "es":  "Monte Everest"
                          },
    "ooo.q.65.choice.1":  {
                              "nl":  "K2",
                              "de":  "K2",
                              "fr":  "K2",
                              "es":  "K2"
                          },
    "ooo.q.65.choice.2":  {
                              "nl":  "Kilimanjaro",
                              "de":  "Kilimandscharo",
                              "fr":  "Kilimandjaro",
                              "es":  "Kilimanjaro"
                          },
    "ooo.q.65.choice.3":  {
                              "nl":  "De rivier de Nijl",
                              "de":  "Nil",
                              "fr":  "Fleuve Nil",
                              "es":  "Río Nilo"
                          },
    "ooo.q.65.odd":  {
                         "nl":  "De rivier de Nijl",
                         "de":  "Nil",
                         "fr":  "Fleuve Nil",
                         "es":  "Río Nilo"
                     },
    "ooo.q.65.group":  {
                           "nl":  "bergen",
                           "de":  "Berge",
                           "fr":  "montagnes",
                           "es":  "montañas"
                       },
    "ooo.q.65.explanation":  {
                                 "nl":  "De andere drie zijn bergen; de Nijl is een rivier.",
                                 "de":  "Die anderen drei sind Berge; Der Nil ist ein Fluss.",
                                 "fr":  "Les trois autres sont des montagnes ; le Nil est un fleuve.",
                                 "es":  "Los otros tres son montañas; el Nilo es un río."
                             },
    "ooo.q.66.choice.0":  {
                              "nl":  "Californië",
                              "de":  "Kalifornien",
                              "fr":  "Californie",
                              "es":  "California"
                          },
    "ooo.q.66.choice.1":  {
                              "nl":  "Texel",
                              "de":  "Texas",
                              "fr":  "Texas",
                              "es":  "Tejas"
                          },
    "ooo.q.66.choice.2":  {
                              "nl":  "Florida",
                              "de":  "Florida",
                              "fr":  "Floride",
                              "es":  "Florida"
                          },
    "ooo.q.66.choice.3":  {
                              "nl":  "Ontario",
                              "de":  "Ontario",
                              "fr":  "Ontario",
                              "es":  "Ontario"
                          },
    "ooo.q.66.odd":  {
                         "nl":  "Ontario",
                         "de":  "Ontario",
                         "fr":  "Ontario",
                         "es":  "Ontario"
                     },
    "ooo.q.66.group":  {
                           "nl":  "Amerikaanse staten",
                           "de":  "US-Bundesstaaten",
                           "fr":  "États américains",
                           "es":  "estados de estados unidos"
                       },
    "ooo.q.66.explanation":  {
                                 "nl":  "De andere drie zijn Amerikaanse staten; Ontario is een Canadese provincie.",
                                 "de":  "Die anderen drei sind US-Bundesstaaten; Ontario ist eine kanadische Provinz.",
                                 "fr":  "Les trois autres sont des États américains ; L\u0027Ontario est une province canadienne.",
                                 "es":  "Los otros tres son estados de Estados Unidos; Ontario es una provincia canadiense."
                             },
    "ooo.q.67.choice.0":  {
                              "nl":  "Noord",
                              "de":  "Norden",
                              "fr":  "Nord",
                              "es":  "Norte"
                          },
    "ooo.q.67.choice.1":  {
                              "nl":  "Zuid",
                              "de":  "Süden",
                              "fr":  "Sud",
                              "es":  "Sur"
                          },
    "ooo.q.67.choice.2":  {
                              "nl":  "Oost",
                              "de":  "Osten",
                              "fr":  "Est",
                              "es":  "Este"
                          },
    "ooo.q.67.choice.3":  {
                              "nl":  "Oslo",
                              "de":  "Oslo",
                              "fr":  "Oslo",
                              "es":  "Oslo"
                          },
    "ooo.q.67.odd":  {
                         "nl":  "Oslo",
                         "de":  "Oslo",
                         "fr":  "Oslo",
                         "es":  "Oslo"
                     },
    "ooo.q.67.group":  {
                           "nl":  "kardinale richtingen",
                           "de":  "Himmelsrichtungen",
                           "fr":  "directions cardinales",
                           "es":  "direcciones cardinales"
                       },
    "ooo.q.67.explanation":  {
                                 "nl":  "De andere drie zijn hoofdrichtingen; Oslo is een stad.",
                                 "de":  "Die anderen drei sind Himmelsrichtungen; Oslo ist eine Stadt.",
                                 "fr":  "Les trois autres sont des directions cardinales ; Oslo est une ville.",
                                 "es":  "Los otros tres son puntos cardinales; Oslo es una ciudad."
                             },
    "ooo.q.68.choice.0":  {
                              "nl":  "Nijl",
                              "de":  "Nil",
                              "fr":  "Nil",
                              "es":  "Nilo"
                          },
    "ooo.q.68.choice.1":  {
                              "nl":  "Amazone",
                              "de":  "Amazon",
                              "fr":  "Amazone",
                              "es":  "Amazonas"
                          },
    "ooo.q.68.choice.2":  {
                              "nl":  "Donau",
                              "de":  "Donau",
                              "fr":  "Danube",
                              "es":  "Danubio"
                          },
    "ooo.q.68.choice.3":  {
                              "nl":  "Andes",
                              "de":  "Anden",
                              "fr":  "Andes",
                              "es":  "Andes"
                          },
    "ooo.q.68.odd":  {
                         "nl":  "Andes",
                         "de":  "Anden",
                         "fr":  "Andes",
                         "es":  "Andes"
                     },
    "ooo.q.68.group":  {
                           "nl":  "rivieren",
                           "de":  "Flüsse",
                           "fr":  "rivières",
                           "es":  "ríos"
                       },
    "ooo.q.68.explanation":  {
                                 "nl":  "De andere drie zijn rivieren; de Andes zijn een bergketen.",
                                 "de":  "Die anderen drei sind Flüsse; Die Anden sind ein Gebirge.",
                                 "fr":  "Les trois autres sont des rivières ; les Andes sont une chaîne de montagnes.",
                                 "es":  "Los otros tres son ríos; Los Andes son una cadena montañosa."
                             },
    "ooo.q.69.choice.0":  {
                              "nl":  "Groenland",
                              "de":  "Grönland",
                              "fr":  "Groenland",
                              "es":  "Groenlandia"
                          },
    "ooo.q.69.choice.1":  {
                              "nl":  "Madagaskar",
                              "de":  "Madagaskar",
                              "fr":  "Madagascar",
                              "es":  "Madagascar"
                          },
    "ooo.q.69.choice.2":  {
                              "nl":  "Borneo",
                              "de":  "Borneo",
                              "fr":  "Bornéo",
                              "es":  "Borneo"
                          },
    "ooo.q.69.choice.3":  {
                              "nl":  "Meer Superior",
                              "de":  "Oberer See",
                              "fr":  "Lac Supérieur",
                              "es":  "Lago superior"
                          },
    "ooo.q.69.odd":  {
                         "nl":  "Meer Superior",
                         "de":  "Oberer See",
                         "fr":  "Lac Supérieur",
                         "es":  "Lago superior"
                     },
    "ooo.q.69.group":  {
                           "nl":  "eilanden",
                           "de":  "Inseln",
                           "fr":  "îles",
                           "es":  "islas"
                       },
    "ooo.q.69.explanation":  {
                                 "nl":  "De andere drie zijn eilanden; Lake Superior is een meer.",
                                 "de":  "Die anderen drei sind Inseln; Lake Superior ist ein See.",
                                 "fr":  "Les trois autres sont des îles ; Le lac Supérieur est un lac.",
                                 "es":  "Los otros tres son islas; El lago Superior es un lago."
                             },
    "ooo.q.70.choice.0":  {
                              "nl":  "Evenaar",
                              "de":  "Äquator",
                              "fr":  "Équateur",
                              "es":  "Ecuador"
                          },
    "ooo.q.70.choice.1":  {
                              "nl":  "Kreeftskeerkring",
                              "de":  "Wendekreis des Krebses",
                              "fr":  "Tropique du Cancer",
                              "es":  "Trópico de Cáncer"
                          },
    "ooo.q.70.choice.2":  {
                              "nl":  "Prime meridiaan",
                              "de":  "Nullmeridian",
                              "fr":  "Premier méridien",
                              "es":  "Primer meridiano"
                          },
    "ooo.q.70.choice.3":  {
                              "nl":  "Himalaya",
                              "de":  "Himalaya",
                              "fr":  "Himalaya",
                              "es":  "Himalaya"
                          },
    "ooo.q.70.odd":  {
                         "nl":  "Himalaya",
                         "de":  "Himalaya",
                         "fr":  "Himalaya",
                         "es":  "Himalaya"
                     },
    "ooo.q.70.group":  {
                           "nl":  "referentielijnen op kaarten",
                           "de":  "Referenzlinien auf Karten",
                           "fr":  "lignes de référence sur les cartes",
                           "es":  "líneas de referencia en mapas"
                       },
    "ooo.q.70.explanation":  {
                                 "nl":  "De andere drie zijn denkbeeldige geografische referentielijnen; de Himalaya is een bergketen.",
                                 "de":  "Die anderen drei sind imaginäre geografische Referenzlinien; Der Himalaya ist ein Gebirge.",
                                 "fr":  "Les trois autres sont des lignes de référence géographiques imaginaires ; l\u0027Himalaya est une chaîne de montagnes.",
                                 "es":  "Las otras tres son líneas de referencia geográficas imaginarias; Los Himalayas son una cadena montañosa."
                             },
    "ooo.q.71.choice.0":  {
                              "nl":  "Caïro",
                              "de":  "Kairo",
                              "fr":  "Le Caire",
                              "es":  "El Cairo"
                          },
    "ooo.q.71.choice.1":  {
                              "nl":  "Nairobi",
                              "de":  "Nairobi",
                              "fr":  "Nairobi",
                              "es":  "Nairobi"
                          },
    "ooo.q.71.choice.2":  {
                              "nl":  "Dakar",
                              "de":  "Dakar",
                              "fr":  "Dakar",
                              "es":  "Dakar"
                          },
    "ooo.q.71.choice.3":  {
                              "nl":  "Lissabon",
                              "de":  "Lissabon",
                              "fr":  "Lisbonne",
                              "es":  "Lisboa"
                          },
    "ooo.q.71.odd":  {
                         "nl":  "Lissabon",
                         "de":  "Lissabon",
                         "fr":  "Lisbonne",
                         "es":  "Lisboa"
                     },
    "ooo.q.71.group":  {
                           "nl":  "Afrikaanse nationale hoofdsteden",
                           "de":  "Afrikanische Hauptstädte",
                           "fr":  "Capitales nationales africaines",
                           "es":  "capitales nacionales africanas"
                       },
    "ooo.q.71.explanation":  {
                                 "nl":  "De andere drie zijn hoofdsteden in Afrika; Lissabon ligt in Europa.",
                                 "de":  "Die anderen drei sind Hauptstädte in Afrika; Lissabon liegt in Europa.",
                                 "fr":  "Les trois autres sont des capitales africaines ; Lisbonne est en Europe.",
                                 "es":  "Las otras tres son capitales de África; Lisboa está en Europa."
                             },
    "ooo.q.72.choice.0":  {
                              "nl":  "Baltische Zee",
                              "de":  "Ostsee",
                              "fr":  "Mer Baltique",
                              "es":  "Mar Báltico"
                          },
    "ooo.q.72.choice.1":  {
                              "nl":  "Caribische Zee",
                              "de":  "Karibisches Meer",
                              "fr":  "Mer des Caraïbes",
                              "es":  "Mar caribe"
                          },
    "ooo.q.72.choice.2":  {
                              "nl":  "Rode Zee",
                              "de":  "Rotes Meer",
                              "fr":  "Mer Rouge",
                              "es":  "Mar rojo"
                          },
    "ooo.q.72.choice.3":  {
                              "nl":  "Het Baikalmeer",
                              "de":  "Baikalsee",
                              "fr":  "Lac Baïkal",
                              "es":  "Lago Baikal"
                          },
    "ooo.q.72.odd":  {
                         "nl":  "Het Baikalmeer",
                         "de":  "Baikalsee",
                         "fr":  "Lac Baïkal",
                         "es":  "Lago Baikal"
                     },
    "ooo.q.72.group":  {
                           "nl":  "zeeën",
                           "de":  "Meere",
                           "fr":  "mers",
                           "es":  "mares"
                       },
    "ooo.q.72.explanation":  {
                                 "nl":  "De andere drie zijn zeeën die verbonden zijn met oceanen; Het Baikalmeer is een binnenmeer.",
                                 "de":  "Die anderen drei sind Meere, die mit Ozeanen verbunden sind; Der Baikalsee ist ein Binnensee.",
                                 "fr":  "Les trois autres sont des mers reliées aux océans ; Le lac Baïkal est un lac intérieur.",
                                 "es":  "Los otros tres son mares conectados a océanos; El lago Baikal es un lago interior."
                             },
    "ooo.q.73.choice.0":  {
                              "nl":  "Andes",
                              "de":  "Anden",
                              "fr":  "Andes",
                              "es":  "Andes"
                          },
    "ooo.q.73.choice.1":  {
                              "nl":  "Rotsachtige Bergen",
                              "de":  "Rocky Mountains",
                              "fr":  "Montagnes Rocheuses",
                              "es":  "Montañas Rocosas"
                          },
    "ooo.q.73.choice.2":  {
                              "nl":  "Alpen",
                              "de":  "Alpen",
                              "fr":  "Alpes",
                              "es":  "Alpes"
                          },
    "ooo.q.73.choice.3":  {
                              "nl":  "Sahara",
                              "de":  "Sahara",
                              "fr":  "Sahara",
                              "es":  "Sáhara"
                          },
    "ooo.q.73.odd":  {
                         "nl":  "Sahara",
                         "de":  "Sahara",
                         "fr":  "Sahara",
                         "es":  "Sáhara"
                     },
    "ooo.q.73.group":  {
                           "nl":  "bergketens",
                           "de":  "Gebirgszüge",
                           "fr":  "chaînes de montagnes",
                           "es":  "cadenas montañosas"
                       },
    "ooo.q.73.explanation":  {
                                 "nl":  "De andere drie zijn bergketens; de Sahara is een woestijn.",
                                 "de":  "Die anderen drei sind Gebirgszüge; Die Sahara ist eine Wüste.",
                                 "fr":  "Les trois autres sont des chaînes de montagnes ; le Sahara est un désert.",
                                 "es":  "Los otros tres son cadenas montañosas; El Sahara es un desierto."
                             },
    "ooo.q.74.choice.0":  {
                              "nl":  "Japan",
                              "de":  "Japan",
                              "fr":  "Japon",
                              "es":  "Japón"
                          },
    "ooo.q.74.choice.1":  {
                              "nl":  "IJsland",
                              "de":  "Island",
                              "fr":  "Islande",
                              "es":  "Islandia"
                          },
    "ooo.q.74.choice.2":  {
                              "nl":  "Cuba",
                              "de":  "Kuba",
                              "fr":  "Cuba",
                              "es":  "Cuba"
                          },
    "ooo.q.74.choice.3":  {
                              "nl":  "Nepal",
                              "de":  "Nepal",
                              "fr":  "Népal",
                              "es":  "Nepal"
                          },
    "ooo.q.74.odd":  {
                         "nl":  "Nepal",
                         "de":  "Nepal",
                         "fr":  "Népal",
                         "es":  "Nepal"
                     },
    "ooo.q.74.group":  {
                           "nl":  "eiland landen",
                           "de":  "Inselstaaten",
                           "fr":  "pays insulaires",
                           "es":  "países insulares"
                       },
    "ooo.q.74.explanation":  {
                                 "nl":  "De andere drie zijn eilandlanden; Nepal is geheel door land omgeven.",
                                 "de":  "Die anderen drei sind Inselstaaten; Nepal ist ein Binnenstaat.",
                                 "fr":  "Les trois autres sont des pays insulaires ; Le Népal est enclavé.",
                                 "es":  "Los otros tres son países insulares; Nepal no tiene salida al mar."
                             },
    "ooo.q.75.choice.0":  {
                              "nl":  "Donau",
                              "de":  "Donau",
                              "fr":  "Danube",
                              "es":  "Danubio"
                          },
    "ooo.q.75.choice.1":  {
                              "nl":  "Nijl",
                              "de":  "Nil",
                              "fr":  "Nil",
                              "es":  "Nilo"
                          },
    "ooo.q.75.choice.2":  {
                              "nl":  "Rhône",
                              "de":  "Rhone",
                              "fr":  "Rhône",
                              "es":  "Ródano"
                          },
    "ooo.q.75.choice.3":  {
                              "nl":  "Wolga",
                              "de":  "Wolga",
                              "fr":  "Volga",
                              "es":  "Volga"
                          },
    "ooo.q.75.odd":  {
                         "nl":  "Wolga",
                         "de":  "Wolga",
                         "fr":  "Volga",
                         "es":  "Volga"
                     },
    "ooo.q.75.group":  {
                           "nl":  "rivieren die uitmonden in de Middellandse Zee",
                           "de":  "Flüsse, die ins Mittelmeer münden",
                           "fr":  "rivières qui se jettent dans la mer Méditerranée",
                           "es":  "ríos que desembocan en el mar mediterráneo"
                       },
    "ooo.q.75.explanation":  {
                                 "nl":  "De Donau, de Nijl en de Rhône bereiken de Middellandse Zee; de Wolga mondt uit in de Kaspische Zee.",
                                 "de":  "Donau, Nil und Rhone erreichen das Mittelmeer; die Wolga mündet in das Kaspische Meer.",
                                 "fr":  "Le Danube, le Nil et le Rhône atteignent la mer Méditerranée ; la Volga se jette dans la mer Caspienne.",
                                 "es":  "El Danubio, el Nilo y el Ródano desembocan en el mar Mediterráneo; el Volga desemboca en el mar Caspio."
                             },
    "ooo.q.76.choice.0":  {
                              "nl":  "Canada",
                              "de":  "Kanada",
                              "fr":  "Canada",
                              "es":  "Canadá"
                          },
    "ooo.q.76.choice.1":  {
                              "nl":  "Mexico",
                              "de":  "Mexiko",
                              "fr":  "Mexique",
                              "es":  "México"
                          },
    "ooo.q.76.choice.2":  {
                              "nl":  "Verenigde Staten",
                              "de":  "Vereinigte Staaten",
                              "fr":  "États-Unis",
                              "es":  "Estados Unidos"
                          },
    "ooo.q.76.choice.3":  {
                              "nl":  "Brazilië",
                              "de":  "Brasilien",
                              "fr":  "Brésil",
                              "es":  "Brasil"
                          },
    "ooo.q.76.odd":  {
                         "nl":  "Brazilië",
                         "de":  "Brasilien",
                         "fr":  "Brésil",
                         "es":  "Brasil"
                     },
    "ooo.q.76.group":  {
                           "nl":  "landen in Noord-Amerika",
                           "de":  "Länder in Nordamerika",
                           "fr":  "pays d\u0027Amérique du Nord",
                           "es":  "paises de america del norte"
                       },
    "ooo.q.76.explanation":  {
                                 "nl":  "De andere drie bevinden zich in Noord-Amerika; Brazilië ligt in Zuid-Amerika.",
                                 "de":  "Die anderen drei befinden sich in Nordamerika; Brasilien liegt in Südamerika.",
                                 "fr":  "Les trois autres se trouvent en Amérique du Nord ; Le Brésil est en Amérique du Sud.",
                                 "es":  "Los otros tres están en Norteamérica; Brasil está en Sudamérica."
                             },
    "ooo.q.77.choice.0":  {
                              "nl":  "Nijl",
                              "de":  "Nil",
                              "fr":  "Nil",
                              "es":  "Nilo"
                          },
    "ooo.q.77.choice.1":  {
                              "nl":  "Amazone",
                              "de":  "Amazon",
                              "fr":  "Amazone",
                              "es":  "Amazonas"
                          },
    "ooo.q.77.choice.2":  {
                              "nl":  "Mississippi",
                              "de":  "Mississippi",
                              "fr":  "Mississippi",
                              "es":  "Misisipi"
                          },
    "ooo.q.77.choice.3":  {
                              "nl":  "Sahara",
                              "de":  "Sahara",
                              "fr":  "Sahara",
                              "es":  "Sáhara"
                          },
    "ooo.q.77.odd":  {
                         "nl":  "Sahara",
                         "de":  "Sahara",
                         "fr":  "Sahara",
                         "es":  "Sáhara"
                     },
    "ooo.q.77.group":  {
                           "nl":  "rivieren",
                           "de":  "Flüsse",
                           "fr":  "rivières",
                           "es":  "ríos"
                       },
    "ooo.q.77.explanation":  {
                                 "nl":  "De andere drie zijn rivieren; de Sahara is een woestijn.",
                                 "de":  "Die anderen drei sind Flüsse; Die Sahara ist eine Wüste.",
                                 "fr":  "Les trois autres sont des rivières ; le Sahara est un désert.",
                                 "es":  "Los otros tres son ríos; El Sahara es un desierto."
                             },
    "ooo.q.78.choice.0":  {
                              "nl":  "Londen",
                              "de":  "London",
                              "fr":  "Londres",
                              "es":  "Londres"
                          },
    "ooo.q.78.choice.1":  {
                              "nl":  "Ottawa",
                              "de":  "Ottawa",
                              "fr":  "Ottawa",
                              "es":  "Ottawa"
                          },
    "ooo.q.78.choice.2":  {
                              "nl":  "Canberra",
                              "de":  "Canberra",
                              "fr":  "Canberra",
                              "es":  "Canberra"
                          },
    "ooo.q.78.choice.3":  {
                              "nl":  "Toronto",
                              "de":  "Toronto",
                              "fr":  "Toronto",
                              "es":  "Toronto"
                          },
    "ooo.q.78.odd":  {
                         "nl":  "Toronto",
                         "de":  "Toronto",
                         "fr":  "Toronto",
                         "es":  "Toronto"
                     },
    "ooo.q.78.group":  {
                           "nl":  "nationale hoofdsteden",
                           "de":  "Landeshauptstädte",
                           "fr":  "capitales nationales",
                           "es":  "capitales nacionales"
                       },
    "ooo.q.78.explanation":  {
                                 "nl":  "De andere drie zijn nationale hoofdsteden; Toronto is niet de hoofdstad van Canada.",
                                 "de":  "Die anderen drei sind Landeshauptstädte; Toronto ist nicht Kanadas Hauptstadt.",
                                 "fr":  "Les trois autres sont des capitales nationales ; Toronto n\u0027est pas la capitale du Canada.",
                                 "es":  "Las otras tres son capitales nacionales; Toronto no es la capital de Canadá."
                             },
    "ooo.q.79.choice.0":  {
                              "nl":  "Antarctica",
                              "de":  "Antarktis",
                              "fr":  "Antarctique",
                              "es":  "Antártida"
                          },
    "ooo.q.79.choice.1":  {
                              "nl":  "Azië",
                              "de":  "Asien",
                              "fr":  "Asie",
                              "es":  "Asia"
                          },
    "ooo.q.79.choice.2":  {
                              "nl":  "Afrika",
                              "de":  "Afrika",
                              "fr":  "Afrique",
                              "es":  "África"
                          },
    "ooo.q.79.choice.3":  {
                              "nl":  "Groenland",
                              "de":  "Grönland",
                              "fr":  "Groenland",
                              "es":  "Groenlandia"
                          },
    "ooo.q.79.odd":  {
                         "nl":  "Groenland",
                         "de":  "Grönland",
                         "fr":  "Groenland",
                         "es":  "Groenlandia"
                     },
    "ooo.q.79.group":  {
                           "nl":  "continenten",
                           "de":  "Kontinente",
                           "fr":  "continents",
                           "es":  "continentes"
                       },
    "ooo.q.79.explanation":  {
                                 "nl":  "De andere drie zijn continenten; Groenland is een eiland.",
                                 "de":  "Die anderen drei sind Kontinente; Grönland ist eine Insel.",
                                 "fr":  "Les trois autres sont des continents ; Le Groenland est une île.",
                                 "es":  "Los otros tres son continentes; Groenlandia es una isla."
                             },
    "ooo.q.80.choice.0":  {
                              "nl":  "Denali",
                              "de":  "Denali",
                              "fr":  "Denali",
                              "es":  "Denali"
                          },
    "ooo.q.80.choice.1":  {
                              "nl":  "Aconcagua",
                              "de":  "Aconcagua",
                              "fr":  "Aconcagua",
                              "es":  "Aconcagua"
                          },
    "ooo.q.80.choice.2":  {
                              "nl":  "Elbrus",
                              "de":  "Elbrus",
                              "fr":  "Elbrouz",
                              "es":  "Elbrús"
                          },
    "ooo.q.80.choice.3":  {
                              "nl":  "Ganges",
                              "de":  "Ganges",
                              "fr":  "Gange",
                              "es":  "Ganges"
                          },
    "ooo.q.80.odd":  {
                         "nl":  "Ganges",
                         "de":  "Ganges",
                         "fr":  "Gange",
                         "es":  "Ganges"
                     },
    "ooo.q.80.group":  {
                           "nl":  "bergen",
                           "de":  "Berge",
                           "fr":  "montagnes",
                           "es":  "montañas"
                       },
    "ooo.q.80.explanation":  {
                                 "nl":  "De andere drie zijn bergen; de Ganges is een rivier.",
                                 "de":  "Die anderen drei sind Berge; Der Ganges ist ein Fluss.",
                                 "fr":  "Les trois autres sont des montagnes ; le Gange est un fleuve.",
                                 "es":  "Los otros tres son montañas; El Ganges es un río."
                             },
    "ooo.q.81.choice.0":  {
                              "nl":  "Toetsenbord",
                              "de":  "Tastatur",
                              "fr":  "Clavier",
                              "es":  "Teclado"
                          },
    "ooo.q.81.choice.1":  {
                              "nl":  "Muis",
                              "de":  "Maus",
                              "fr":  "Souris",
                              "es":  "Ratón"
                          },
    "ooo.q.81.choice.2":  {
                              "nl":  "Monitor",
                              "de":  "Überwachen",
                              "fr":  "Moniteur",
                              "es":  "Monitorear"
                          },
    "ooo.q.81.choice.3":  {
                              "nl":  "Banaan",
                              "de":  "Banane",
                              "fr":  "Banane",
                              "es":  "Plátano"
                          },
    "ooo.q.81.odd":  {
                         "nl":  "Banaan",
                         "de":  "Banane",
                         "fr":  "Banane",
                         "es":  "Plátano"
                     },
    "ooo.q.81.group":  {
                           "nl":  "computerrandapparatuur",
                           "de":  "Computerperipheriegeräte",
                           "fr":  "périphériques informatiques",
                           "es":  "periféricos de computadora"
                       },
    "ooo.q.81.explanation":  {
                                 "nl":  "De andere drie zijn computerrandapparatuur; een banaan is voedsel.",
                                 "de":  "Die anderen drei sind Computerperipheriegeräte; Eine Banane ist Essen.",
                                 "fr":  "Les trois autres sont des périphériques informatiques ; une banane est de la nourriture.",
                                 "es":  "Los otros tres son periféricos de computadora; un plátano es comida."
                             },
    "ooo.q.82.choice.0":  {
                              "nl":  "Chroom",
                              "de":  "Chrom",
                              "fr":  "Chrome",
                              "es":  "Cromo"
                          },
    "ooo.q.82.choice.1":  {
                              "nl":  "Firefox",
                              "de":  "Firefox",
                              "fr":  "Firefox",
                              "es":  "Firefox"
                          },
    "ooo.q.82.choice.2":  {
                              "nl":  "Safari",
                              "de":  "Safari",
                              "fr":  "Safari",
                              "es":  "Safari"
                          },
    "ooo.q.82.choice.3":  {
                              "nl":  "Excel",
                              "de":  "Excel",
                              "fr":  "Exceller",
                              "es":  "Excel"
                          },
    "ooo.q.82.odd":  {
                         "nl":  "Excel",
                         "de":  "Excel",
                         "fr":  "Exceller",
                         "es":  "Excel"
                     },
    "ooo.q.82.group":  {
                           "nl":  "webbrowsers",
                           "de":  "Webbrowser",
                           "fr":  "navigateurs Web",
                           "es":  "navegadores web"
                       },
    "ooo.q.82.explanation":  {
                                 "nl":  "De andere drie zijn webbrowsers; Excel is een spreadsheetprogramma.",
                                 "de":  "Die anderen drei sind Webbrowser; Excel ist eine Tabellenkalkulationsanwendung.",
                                 "fr":  "Les trois autres sont des navigateurs Web ; Excel est un tableur.",
                                 "es":  "Los otros tres son navegadores web; Excel es una aplicación de hoja de cálculo."
                             },
    "ooo.q.83.choice.0":  {
                              "nl":  "USB-station",
                              "de":  "USB-Laufwerk",
                              "fr":  "Clé USB",
                              "es":  "Unidad USB"
                          },
    "ooo.q.83.choice.1":  {
                              "nl":  "SD-kaart",
                              "de":  "SD-Karte",
                              "fr":  "Carte SD",
                              "es":  "Tarjeta SD"
                          },
    "ooo.q.83.choice.2":  {
                              "nl":  "Externe harde schijf",
                              "de":  "Externe Festplatte",
                              "fr":  "Disque dur externe",
                              "es":  "Disco duro externo"
                          },
    "ooo.q.83.choice.3":  {
                              "nl":  "Webcam",
                              "de":  "Webcam",
                              "fr":  "Webcam",
                              "es":  "Cámara web"
                          },
    "ooo.q.83.odd":  {
                         "nl":  "Webcam",
                         "de":  "Webcam",
                         "fr":  "Webcam",
                         "es":  "Cámara web"
                     },
    "ooo.q.83.group":  {
                           "nl":  "apparaten voor gegevensopslag",
                           "de":  "Datenspeichergeräte",
                           "fr":  "dispositifs de stockage de données",
                           "es":  "dispositivos de almacenamiento de datos"
                       },
    "ooo.q.83.explanation":  {
                                 "nl":  "De andere drie slaan bestanden op; een webcam legt video vast.",
                                 "de":  "Die anderen drei Speicherdateien; Eine Webcam nimmt Videos auf.",
                                 "fr":  "Les trois autres stockent des fichiers ; une webcam capture des vidéos.",
                                 "es":  "Los otros tres almacenan archivos; una cámara web captura vídeo."
                             },
    "ooo.q.84.choice.0":  {
                              "nl":  "Android",
                              "de":  "Android",
                              "fr":  "Android",
                              "es":  "Androide"
                          },
    "ooo.q.84.choice.1":  {
                              "nl":  "iOS",
                              "de":  "iOS",
                              "fr":  "IOS",
                              "es":  "iOS"
                          },
    "ooo.q.84.choice.2":  {
                              "nl":  "Ramen",
                              "de":  "Windows",
                              "fr":  "Fenêtres",
                              "es":  "Ventanas"
                          },
    "ooo.q.84.choice.3":  {
                              "nl":  "Photoshoppen",
                              "de":  "Photoshop",
                              "fr":  "Photoshop",
                              "es":  "Photoshop"
                          },
    "ooo.q.84.odd":  {
                         "nl":  "Photoshoppen",
                         "de":  "Photoshop",
                         "fr":  "Photoshop",
                         "es":  "Photoshop"
                     },
    "ooo.q.84.group":  {
                           "nl":  "besturingssystemen",
                           "de":  "Betriebssysteme",
                           "fr":  "systèmes d\u0027exploitation",
                           "es":  "sistemas operativos"
                       },
    "ooo.q.84.explanation":  {
                                 "nl":  "De andere drie zijn besturingssystemen; Photoshop is een applicatie.",
                                 "de":  "Die anderen drei sind Betriebssysteme; Photoshop ist eine Anwendung.",
                                 "fr":  "Les trois autres sont des systèmes d’exploitation ; Photoshop est une application.",
                                 "es":  "Los otros tres son sistemas operativos; Photoshop es una aplicación."
                             },
    "ooo.q.85.choice.0":  {
                              "nl":  "Microfoon",
                              "de":  "Mikrofon",
                              "fr":  "Micro",
                              "es":  "Micrófono"
                          },
    "ooo.q.85.choice.1":  {
                              "nl":  "Toetsenbord",
                              "de":  "Tastatur",
                              "fr":  "Clavier",
                              "es":  "Teclado"
                          },
    "ooo.q.85.choice.2":  {
                              "nl":  "Muis",
                              "de":  "Maus",
                              "fr":  "Souris",
                              "es":  "Ratón"
                          },
    "ooo.q.85.choice.3":  {
                              "nl":  "Monitor",
                              "de":  "Überwachen",
                              "fr":  "Moniteur",
                              "es":  "Monitorear"
                          },
    "ooo.q.85.odd":  {
                         "nl":  "Monitor",
                         "de":  "Überwachen",
                         "fr":  "Moniteur",
                         "es":  "Monitorear"
                     },
    "ooo.q.85.group":  {
                           "nl":  "computerinvoerapparaten",
                           "de":  "Computer-Eingabegeräte",
                           "fr":  "périphériques d\u0027entrée informatiques",
                           "es":  "dispositivos de entrada de computadora"
                       },
    "ooo.q.85.explanation":  {
                                 "nl":  "De andere drie sturen invoer naar een computer; een monitor geeft de output weer.",
                                 "de":  "Die anderen drei senden Eingaben an einen Computer; Ein Monitor zeigt die Ausgabe an.",
                                 "fr":  "Les trois autres envoient les entrées à un ordinateur ; un moniteur affiche la sortie.",
                                 "es":  "Los otros tres envían datos a una computadora; un monitor muestra la salida."
                             },
    "ooo.q.86.choice.0":  {
                              "nl":  "Wifi",
                              "de":  "WLAN",
                              "fr":  "Wi-Fi",
                              "es":  "Wifi"
                          },
    "ooo.q.86.choice.1":  {
                              "nl":  "Bluetooth",
                              "de":  "Bluetooth",
                              "fr":  "Bluetooth",
                              "es":  "Bluetooth"
                          },
    "ooo.q.86.choice.2":  {
                              "nl":  "NFC",
                              "de":  "NFC",
                              "fr":  "NFC",
                              "es":  "NFC"
                          },
    "ooo.q.86.choice.3":  {
                              "nl":  "HDMI",
                              "de":  "HDMI",
                              "fr":  "HDMI",
                              "es":  "Hdmi"
                          },
    "ooo.q.86.odd":  {
                         "nl":  "HDMI",
                         "de":  "HDMI",
                         "fr":  "HDMI",
                         "es":  "Hdmi"
                     },
    "ooo.q.86.group":  {
                           "nl":  "draadloze verbindingstechnologieën",
                           "de":  "drahtlose Verbindungstechnologien",
                           "fr":  "technologies de connexion sans fil",
                           "es":  "tecnologías de conexión inalámbrica"
                       },
    "ooo.q.86.explanation":  {
                                 "nl":  "De andere drie kunnen apparaten draadloos verbinden; HDMI maakt gebruik van een kabel.",
                                 "de":  "Die anderen drei können Geräte drahtlos verbinden; HDMI verwendet ein Kabel.",
                                 "fr":  "Les trois autres peuvent connecter des appareils sans fil ; HDMI utilise un câble.",
                                 "es":  "Los otros tres pueden conectar dispositivos de forma inalámbrica; HDMI utiliza un cable."
                             },
    "ooo.q.87.choice.0":  {
                              "nl":  "CPU",
                              "de":  "CPU",
                              "fr":  "Processeur",
                              "es":  "CPU"
                          },
    "ooo.q.87.choice.1":  {
                              "nl":  "GPU",
                              "de":  "GPU",
                              "fr":  "GPU",
                              "es":  "GPU"
                          },
    "ooo.q.87.choice.2":  {
                              "nl":  "RAM-geheugen",
                              "de":  "RAM",
                              "fr":  "RAM",
                              "es":  "RAM"
                          },
    "ooo.q.87.choice.3":  {
                              "nl":  "Router",
                              "de":  "Router",
                              "fr":  "Routeur",
                              "es":  "Enrutador"
                          },
    "ooo.q.87.odd":  {
                         "nl":  "Router",
                         "de":  "Router",
                         "fr":  "Routeur",
                         "es":  "Enrutador"
                     },
    "ooo.q.87.group":  {
                           "nl":  "computercomponenten",
                           "de":  "Computerkomponenten",
                           "fr":  "composants informatiques",
                           "es":  "componentes de computadora"
                       },
    "ooo.q.87.explanation":  {
                                 "nl":  "De andere drie zijn interne computercomponenten; een router verbindt netwerken.",
                                 "de":  "Die anderen drei sind interne Computerkomponenten; Ein Router verbindet Netzwerke.",
                                 "fr":  "Les trois autres sont des composants informatiques internes ; un routeur connecte les réseaux.",
                                 "es":  "Los otros tres son componentes internos de la computadora; un enrutador conecta redes."
                             },
    "ooo.q.88.choice.0":  {
                              "nl":  "JPEG",
                              "de":  "JPEG",
                              "fr":  "JPEG",
                              "es":  "JPEG"
                          },
    "ooo.q.88.choice.1":  {
                              "nl":  "PNG",
                              "de":  "PNG",
                              "fr":  "PNG",
                              "es":  "PNG"
                          },
    "ooo.q.88.choice.2":  {
                              "nl":  "GIF",
                              "de":  "GIF",
                              "fr":  "GIF",
                              "es":  "GIF"
                          },
    "ooo.q.88.choice.3":  {
                              "nl":  "MP3",
                              "de":  "MP3",
                              "fr":  "MP3",
                              "es":  "MP3"
                          },
    "ooo.q.88.odd":  {
                         "nl":  "MP3",
                         "de":  "MP3",
                         "fr":  "MP3",
                         "es":  "MP3"
                     },
    "ooo.q.88.group":  {
                           "nl":  "bestandsformaten voor afbeeldingen",
                           "de":  "Bilddateiformate",
                           "fr":  "formats de fichiers images",
                           "es":  "formatos de archivos de imagen"
                       },
    "ooo.q.88.explanation":  {
                                 "nl":  "De andere drie zijn afbeeldingsformaten; MP3 is een audioformaat.",
                                 "de":  "Die anderen drei sind Bildformate; MP3 ist ein Audioformat.",
                                 "fr":  "Les trois autres sont des formats d’image ; MP3 est un format audio.",
                                 "es":  "Los otros tres son formatos de imagen; MP3 es un formato de audio."
                             },
    "ooo.q.89.choice.0":  {
                              "nl":  "Google Maps",
                              "de":  "Google Maps",
                              "fr":  "Google Cartes",
                              "es":  "Mapas de google"
                          },
    "ooo.q.89.choice.1":  {
                              "nl":  "Waze",
                              "de":  "Waze",
                              "fr":  "Waze",
                              "es":  "Waze"
                          },
    "ooo.q.89.choice.2":  {
                              "nl":  "Apple-kaarten",
                              "de":  "Apple Maps",
                              "fr":  "Cartes Apple",
                              "es":  "Mapas de Apple"
                          },
    "ooo.q.89.choice.3":  {
                              "nl":  "Spotify",
                              "de":  "Spotify",
                              "fr":  "Spotify",
                              "es":  "Spotify"
                          },
    "ooo.q.89.odd":  {
                         "nl":  "Spotify",
                         "de":  "Spotify",
                         "fr":  "Spotify",
                         "es":  "Spotify"
                     },
    "ooo.q.89.group":  {
                           "nl":  "navigatie-apps",
                           "de":  "Navigations-Apps",
                           "fr":  "applications de navigation",
                           "es":  "aplicaciones de navegación"
                       },
    "ooo.q.89.explanation":  {
                                 "nl":  "De andere drie bieden kaarten en navigatie; Spotify streamt audio.",
                                 "de":  "Die anderen drei bieten Karten und Navigation; Spotify streamt Audio.",
                                 "fr":  "Les trois autres fournissent des cartes et la navigation ; Spotify diffuse de l\u0027audio.",
                                 "es":  "Los otros tres proporcionan mapas y navegación; Spotify transmite audio."
                             },
    "ooo.q.90.choice.0":  {
                              "nl":  "Printer",
                              "de":  "Drucker",
                              "fr":  "Imprimante",
                              "es":  "Impresora"
                          },
    "ooo.q.90.choice.1":  {
                              "nl":  "Spreker",
                              "de":  "Sprecher",
                              "fr":  "Haut-parleur",
                              "es":  "Altavoz"
                          },
    "ooo.q.90.choice.2":  {
                              "nl":  "Koptelefoon",
                              "de":  "Kopfhörer",
                              "fr":  "Écouteurs",
                              "es":  "Auriculares"
                          },
    "ooo.q.90.choice.3":  {
                              "nl":  "Microfoon",
                              "de":  "Mikrofon",
                              "fr":  "Micro",
                              "es":  "Micrófono"
                          },
    "ooo.q.90.odd":  {
                         "nl":  "Microfoon",
                         "de":  "Mikrofon",
                         "fr":  "Micro",
                         "es":  "Micrófono"
                     },
    "ooo.q.90.group":  {
                           "nl":  "uitvoerapparaten",
                           "de":  "Ausgabegeräte",
                           "fr":  "périphériques de sortie",
                           "es":  "dispositivos de salida"
                       },
    "ooo.q.90.explanation":  {
                                 "nl":  "De andere drie sturen geluid of informatie naar de gebruiker; een microfoon vangt de invoer op.",
                                 "de":  "Die anderen drei senden Ton oder Informationen an den Benutzer. Ein Mikrofon erfasst den Input.",
                                 "fr":  "Les trois autres envoient du son ou des informations à l\u0027utilisateur ; un microphone capte l’entrée.",
                                 "es":  "Los otros tres envían sonido o información al usuario; un micrófono captura la entrada."
                             },
    "ooo.q.91.choice.0":  {
                              "nl":  "HTTP",
                              "de":  "HTTP",
                              "fr":  "HTTP",
                              "es":  "HTTP"
                          },
    "ooo.q.91.choice.1":  {
                              "nl":  "FTP",
                              "de":  "FTP",
                              "fr":  "FTP",
                              "es":  "Ftp"
                          },
    "ooo.q.91.choice.2":  {
                              "nl":  "SMTP",
                              "de":  "SMTP",
                              "fr":  "SMTP",
                              "es":  "SMTP"
                          },
    "ooo.q.91.choice.3":  {
                              "nl":  "JPEG",
                              "de":  "JPEG",
                              "fr":  "JPEG",
                              "es":  "JPEG"
                          },
    "ooo.q.91.odd":  {
                         "nl":  "JPEG",
                         "de":  "JPEG",
                         "fr":  "JPEG",
                         "es":  "JPEG"
                     },
    "ooo.q.91.group":  {
                           "nl":  "internetcommunicatieprotocollen",
                           "de":  "Internet-Kommunikationsprotokolle",
                           "fr":  "protocoles de communication Internet",
                           "es":  "protocolos de comunicacion de internet"
                       },
    "ooo.q.91.explanation":  {
                                 "nl":  "De andere drie zijn communicatieprotocollen; JPEG is een afbeeldingsformaat.",
                                 "de":  "Die anderen drei sind Kommunikationsprotokolle; JPEG ist ein Bildformat.",
                                 "fr":  "Les trois autres sont des protocoles de communication ; JPEG est un format d\u0027image.",
                                 "es":  "Los otros tres son protocolos de comunicación; JPEG es un formato de imagen."
                             },
    "ooo.q.92.choice.0":  {
                              "nl":  "QR-code",
                              "de":  "QR-Code",
                              "fr":  "Code QR",
                              "es":  "Código qr"
                          },
    "ooo.q.92.choice.1":  {
                              "nl":  "Streepjescode",
                              "de":  "Barcode",
                              "fr":  "Code à barres",
                              "es":  "Código de barras"
                          },
    "ooo.q.92.choice.2":  {
                              "nl":  "NFC-tag",
                              "de":  "NFC-Tag",
                              "fr":  "Étiquette NFC",
                              "es":  "Etiqueta NFC"
                          },
    "ooo.q.92.choice.3":  {
                              "nl":  "Touchscreen",
                              "de":  "Touchscreen",
                              "fr":  "Écran tactile",
                              "es":  "Pantalla táctil"
                          },
    "ooo.q.92.odd":  {
                         "nl":  "Touchscreen",
                         "de":  "Touchscreen",
                         "fr":  "Écran tactile",
                         "es":  "Pantalla táctil"
                     },
    "ooo.q.92.group":  {
                           "nl":  "scanbare identificatielabels",
                           "de":  "scannbare Identifikationsetiketten",
                           "fr":  "étiquettes d\u0027identification scannables",
                           "es":  "etiquetas de identificación escaneables"
                       },
    "ooo.q.92.explanation":  {
                                 "nl":  "De andere drie kunnen worden gescand als tags of codes; een touchscreen is een invoerscherm.",
                                 "de":  "Die anderen drei können als Tags oder Codes gescannt werden; Ein Touchscreen ist ein Eingabedisplay.",
                                 "fr":  "Les trois autres peuvent être scannés sous forme d\u0027étiquettes ou de codes ; un écran tactile est un affichage d’entrée.",
                                 "es":  "Los otros tres pueden escanearse como etiquetas o códigos; una pantalla táctil es una pantalla de entrada."
                             },
    "ooo.q.93.choice.0":  {
                              "nl":  "Ethernet",
                              "de":  "Ethernet",
                              "fr":  "Ethernet",
                              "es":  "Ethernet"
                          },
    "ooo.q.93.choice.1":  {
                              "nl":  "USB",
                              "de":  "USB",
                              "fr":  "USB",
                              "es":  "USB"
                          },
    "ooo.q.93.choice.2":  {
                              "nl":  "Blikseminslag",
                              "de":  "Blitz",
                              "fr":  "Coup de foudre",
                              "es":  "Rayo"
                          },
    "ooo.q.93.choice.3":  {
                              "nl":  "Wifi",
                              "de":  "WLAN",
                              "fr":  "Wi-Fi",
                              "es":  "Wifi"
                          },
    "ooo.q.93.odd":  {
                         "nl":  "Wifi",
                         "de":  "WLAN",
                         "fr":  "Wi-Fi",
                         "es":  "Wifi"
                     },
    "ooo.q.93.group":  {
                           "nl":  "normen voor bekabelde verbindingen",
                           "de":  "Standards für kabelgebundene Verbindungen",
                           "fr":  "normes de connexion filaire",
                           "es":  "estándares de conexión por cable"
                       },
    "ooo.q.93.explanation":  {
                                 "nl":  "De andere drie gebruiken gewoonlijk fysieke kabels; Wifi is draadloos.",
                                 "de":  "Die anderen drei verwenden üblicherweise physische Kabel; Wi-Fi ist drahtlos.",
                                 "fr":  "Les trois autres utilisent couramment des câbles physiques ; Le Wi-Fi est sans fil.",
                                 "es":  "Los otros tres suelen utilizar cables físicos; El wifi es inalámbrico."
                             },
    "ooo.q.94.choice.0":  {
                              "nl":  "TCP",
                              "de":  "TCP",
                              "fr":  "TCP",
                              "es":  "Tcp"
                          },
    "ooo.q.94.choice.1":  {
                              "nl":  "UDP",
                              "de":  "UDP",
                              "fr":  "UDP",
                              "es":  "UDP"
                          },
    "ooo.q.94.choice.2":  {
                              "nl":  "IP",
                              "de":  "IP",
                              "fr":  "IP",
                              "es":  "IP"
                          },
    "ooo.q.94.choice.3":  {
                              "nl":  "Pdf",
                              "de":  "PDF",
                              "fr":  "PDF",
                              "es":  "PDF"
                          },
    "ooo.q.94.odd":  {
                         "nl":  "Pdf",
                         "de":  "PDF",
                         "fr":  "PDF",
                         "es":  "PDF"
                     },
    "ooo.q.94.group":  {
                           "nl":  "internetcommunicatieprotocollen",
                           "de":  "Internet-Kommunikationsprotokolle",
                           "fr":  "protocoles de communication Internet",
                           "es":  "protocolos de comunicacion de internet"
                       },
    "ooo.q.94.explanation":  {
                                 "nl":  "TCP, UDP en IP zijn netwerkprotocollen; PDF is een documentformaat.",
                                 "de":  "TCP, UDP und IP sind Netzwerkprotokolle; PDF ist ein Dokumentformat.",
                                 "fr":  "TCP, UDP et IP sont des protocoles réseau ; Le PDF est un format de document.",
                                 "es":  "TCP, UDP e IP son protocolos de red; PDF es un formato de documento."
                             },
    "ooo.q.95.choice.0":  {
                              "nl":  "SSD",
                              "de":  "SSD",
                              "fr":  "SSD",
                              "es":  "SSD"
                          },
    "ooo.q.95.choice.1":  {
                              "nl":  "Harde schijf",
                              "de":  "Festplatte",
                              "fr":  "Disque dur",
                              "es":  "Disco duro"
                          },
    "ooo.q.95.choice.2":  {
                              "nl":  "USB-flashdrive",
                              "de":  "USB-Stick",
                              "fr":  "Clé USB",
                              "es":  "Unidad flash USB"
                          },
    "ooo.q.95.choice.3":  {
                              "nl":  "RAM-geheugen",
                              "de":  "RAM",
                              "fr":  "RAM",
                              "es":  "RAM"
                          },
    "ooo.q.95.odd":  {
                         "nl":  "RAM-geheugen",
                         "de":  "RAM",
                         "fr":  "RAM",
                         "es":  "RAM"
                     },
    "ooo.q.95.group":  {
                           "nl":  "niet-vluchtige opslagapparaten",
                           "de":  "nichtflüchtige Speichergeräte",
                           "fr":  "dispositifs de stockage non volatils",
                           "es":  "dispositivos de almacenamiento no volátiles"
                       },
    "ooo.q.95.explanation":  {
                                 "nl":  "De SSD, harde schijf en USB-flashdrive behouden gegevens zonder stroom; RAM is vluchtig werkgeheugen.",
                                 "de":  "Die SSD, die Festplatte und das USB-Flash-Laufwerk speichern Daten ohne Strom; RAM ist ein flüchtiger Arbeitsspeicher.",
                                 "fr":  "Le SSD, le disque dur et la clé USB conservent les données sans alimentation ; La RAM est une mémoire de travail volatile.",
                                 "es":  "El SSD, el disco duro y la unidad flash USB retienen datos sin energía; La RAM es memoria de trabajo volátil."
                             },
    "ooo.q.96.choice.0":  {
                              "nl":  "Smartphone",
                              "de":  "Smartphone",
                              "fr":  "Smartphone",
                              "es":  "Teléfono inteligente"
                          },
    "ooo.q.96.choice.1":  {
                              "nl":  "Tablet",
                              "de":  "Tablette",
                              "fr":  "Tablette",
                              "es":  "Tableta"
                          },
    "ooo.q.96.choice.2":  {
                              "nl":  "Laptop",
                              "de":  "Laptop",
                              "fr":  "Ordinateur portable",
                              "es":  "Portátil"
                          },
    "ooo.q.96.choice.3":  {
                              "nl":  "Magnetron",
                              "de":  "Mikrowelle",
                              "fr":  "Micro-ondes",
                              "es":  "Microondas"
                          },
    "ooo.q.96.odd":  {
                         "nl":  "Magnetron",
                         "de":  "Mikrowelle",
                         "fr":  "Micro-ondes",
                         "es":  "Microondas"
                     },
    "ooo.q.96.group":  {
                           "nl":  "persoonlijke computerapparatuur",
                           "de":  "persönliche Computergeräte",
                           "fr":  "appareils informatiques personnels",
                           "es":  "dispositivos informáticos personales"
                       },
    "ooo.q.96.explanation":  {
                                 "nl":  "De andere drie zijn persoonlijke computerapparatuur; een magnetron is een keukenapparaat.",
                                 "de":  "Bei den anderen drei handelt es sich um Personal-Computing-Geräte; Eine Mikrowelle ist ein Küchengerät.",
                                 "fr":  "Les trois autres sont des appareils informatiques personnels ; un micro-ondes est un appareil de cuisine.",
                                 "es":  "Los otros tres son dispositivos informáticos personales; un microondas es un aparato de cocina."
                             },
    "ooo.q.97.choice.0":  {
                              "nl":  "Chroom",
                              "de":  "Chrom",
                              "fr":  "Chrome",
                              "es":  "Cromo"
                          },
    "ooo.q.97.choice.1":  {
                              "nl":  "Firefox",
                              "de":  "Firefox",
                              "fr":  "Firefox",
                              "es":  "Firefox"
                          },
    "ooo.q.97.choice.2":  {
                              "nl":  "Rand",
                              "de":  "Kante",
                              "fr":  "Bord",
                              "es":  "Borde"
                          },
    "ooo.q.97.choice.3":  {
                              "nl":  "Ramen",
                              "de":  "Windows",
                              "fr":  "Fenêtres",
                              "es":  "Ventanas"
                          },
    "ooo.q.97.odd":  {
                         "nl":  "Ramen",
                         "de":  "Windows",
                         "fr":  "Fenêtres",
                         "es":  "Ventanas"
                     },
    "ooo.q.97.group":  {
                           "nl":  "webbrowsers",
                           "de":  "Webbrowser",
                           "fr":  "navigateurs Web",
                           "es":  "navegadores web"
                       },
    "ooo.q.97.explanation":  {
                                 "nl":  "De andere drie zijn webbrowsers; Windows is een besturingssysteem.",
                                 "de":  "Die anderen drei sind Webbrowser; Windows ist ein Betriebssystem.",
                                 "fr":  "Les trois autres sont des navigateurs Web ; Windows est un système d\u0027exploitation.",
                                 "es":  "Los otros tres son navegadores web; Windows es un sistema operativo."
                             },
    "ooo.q.98.choice.0":  {
                              "nl":  "Woord",
                              "de":  "Wort",
                              "fr":  "Mot",
                              "es":  "Palabra"
                          },
    "ooo.q.98.choice.1":  {
                              "nl":  "Excel",
                              "de":  "Excel",
                              "fr":  "Exceller",
                              "es":  "Excel"
                          },
    "ooo.q.98.choice.2":  {
                              "nl":  "PowerPoint",
                              "de":  "PowerPoint",
                              "fr":  "PowerPoint",
                              "es":  "PowerPoint"
                          },
    "ooo.q.98.choice.3":  {
                              "nl":  "Photoshoppen",
                              "de":  "Photoshop",
                              "fr":  "Photoshop",
                              "es":  "Photoshop"
                          },
    "ooo.q.98.odd":  {
                         "nl":  "Photoshoppen",
                         "de":  "Photoshop",
                         "fr":  "Photoshop",
                         "es":  "Photoshop"
                     },
    "ooo.q.98.group":  {
                           "nl":  "Microsoft Office-toepassingen",
                           "de":  "Microsoft Office-Anwendungen",
                           "fr":  "Applications Microsoft Office",
                           "es":  "Aplicaciones de Microsoft Office"
                       },
    "ooo.q.98.explanation":  {
                                 "nl":  "De andere drie zijn Microsoft Office-applicaties; Photoshop is gemaakt door Adobe.",
                                 "de":  "Die anderen drei sind Microsoft Office-Anwendungen; Photoshop wird von Adobe erstellt.",
                                 "fr":  "Les trois autres sont des applications Microsoft Office ; Photoshop est réalisé par Adobe.",
                                 "es":  "Las otras tres son aplicaciones de Microsoft Office; Photoshop está hecho por Adobe."
                             },
    "ooo.q.99.choice.0":  {
                              "nl":  "PNG",
                              "de":  "PNG",
                              "fr":  "PNG",
                              "es":  "PNG"
                          },
    "ooo.q.99.choice.1":  {
                              "nl":  "JPEG",
                              "de":  "JPEG",
                              "fr":  "JPEG",
                              "es":  "JPEG"
                          },
    "ooo.q.99.choice.2":  {
                              "nl":  "GIF",
                              "de":  "GIF",
                              "fr":  "GIF",
                              "es":  "GIF"
                          },
    "ooo.q.99.choice.3":  {
                              "nl":  "WAV",
                              "de":  "WAV",
                              "fr":  "WAV",
                              "es":  "WAV"
                          },
    "ooo.q.99.odd":  {
                         "nl":  "WAV",
                         "de":  "WAV",
                         "fr":  "WAV",
                         "es":  "WAV"
                     },
    "ooo.q.99.group":  {
                           "nl":  "bestandsformaten voor afbeeldingen",
                           "de":  "Bilddateiformate",
                           "fr":  "formats de fichiers images",
                           "es":  "formatos de archivos de imagen"
                       },
    "ooo.q.99.explanation":  {
                                 "nl":  "De andere drie zijn afbeeldingsbestandsformaten; WAV is een audioformaat.",
                                 "de":  "Die anderen drei sind Bilddateiformate; WAV ist ein Audioformat.",
                                 "fr":  "Les trois autres sont des formats de fichiers image ; WAV est un format audio.",
                                 "es":  "Los otros tres son formatos de archivos de imagen; WAV es un formato de audio."
                             },
    "ooo.q.100.choice.0":  {
                               "nl":  "DNS",
                               "de":  "DNS",
                               "fr":  "DNS",
                               "es":  "DNS"
                           },
    "ooo.q.100.choice.1":  {
                               "nl":  "DHCP",
                               "de":  "DHCP",
                               "fr":  "DHCP",
                               "es":  "DHCP"
                           },
    "ooo.q.100.choice.2":  {
                               "nl":  "HTTP",
                               "de":  "HTTP",
                               "fr":  "HTTP",
                               "es":  "HTTP"
                           },
    "ooo.q.100.choice.3":  {
                               "nl":  "HDMI",
                               "de":  "HDMI",
                               "fr":  "HDMI",
                               "es":  "Hdmi"
                           },
    "ooo.q.100.odd":  {
                          "nl":  "HDMI",
                          "de":  "HDMI",
                          "fr":  "HDMI",
                          "es":  "Hdmi"
                      },
    "ooo.q.100.group":  {
                            "nl":  "netwerkprotocollen",
                            "de":  "Netzwerkprotokolle",
                            "fr":  "protocoles de réseau",
                            "es":  "protocolos de red"
                        },
    "ooo.q.100.explanation":  {
                                  "nl":  "DNS, DHCP en HTTP zijn netwerkprotocollen; HDMI is een audio/video-verbindingsstandaard.",
                                  "de":  "DNS, DHCP und HTTP sind Netzwerkprotokolle; HDMI ist ein Audio-/Video-Verbindungsstandard.",
                                  "fr":  "DNS, DHCP et HTTP sont des protocoles réseau ; HDMI est une norme de connexion audio/vidéo.",
                                  "es":  "DNS, DHCP y HTTP son protocolos de red; HDMI es un estándar de conexión de audio/vídeo."
                              },
    "ooo.q.101.choice.0":  {
                               "nl":  "Eik",
                               "de":  "Eiche",
                               "fr":  "Chêne",
                               "es":  "Roble"
                           },
    "ooo.q.101.choice.1":  {
                               "nl":  "Pijnboom",
                               "de":  "Kiefer",
                               "fr":  "Pin",
                               "es":  "Pino"
                           },
    "ooo.q.101.choice.2":  {
                               "nl":  "Esdoorn",
                               "de":  "Ahorn",
                               "fr":  "Érable",
                               "es":  "Arce"
                           },
    "ooo.q.101.choice.3":  {
                               "nl":  "Tulp",
                               "de":  "Tulpe",
                               "fr":  "Tulipe",
                               "es":  "Tulipán"
                           },
    "ooo.q.101.odd":  {
                          "nl":  "Tulp",
                          "de":  "Tulpe",
                          "fr":  "Tulipe",
                          "es":  "Tulipán"
                      },
    "ooo.q.101.group":  {
                            "nl":  "bomen",
                            "de":  "Bäume",
                            "fr":  "arbres",
                            "es":  "árboles"
                        },
    "ooo.q.101.explanation":  {
                                  "nl":  "De andere drie zijn bomen; een tulp is een bloem.",
                                  "de":  "Die anderen drei sind Bäume; Eine Tulpe ist eine Blume.",
                                  "fr":  "Les trois autres sont des arbres ; une tulipe est une fleur.",
                                  "es":  "Los otros tres son árboles; un tulipán es una flor."
                              },
    "ooo.q.102.choice.0":  {
                               "nl":  "Rivier",
                               "de":  "Fluss",
                               "fr":  "Rivière",
                               "es":  "Río"
                           },
    "ooo.q.102.choice.1":  {
                               "nl":  "Meer",
                               "de":  "See",
                               "fr":  "Lac",
                               "es":  "Lago"
                           },
    "ooo.q.102.choice.2":  {
                               "nl":  "Oceaan",
                               "de":  "Ozean",
                               "fr":  "Océan",
                               "es":  "Océano"
                           },
    "ooo.q.102.choice.3":  {
                               "nl":  "Berg",
                               "de":  "Berg",
                               "fr":  "Montagne",
                               "es":  "Montaña"
                           },
    "ooo.q.102.odd":  {
                          "nl":  "Berg",
                          "de":  "Berg",
                          "fr":  "Montagne",
                          "es":  "Montaña"
                      },
    "ooo.q.102.group":  {
                            "nl":  "waterlichamen",
                            "de":  "Gewässer",
                            "fr":  "plans d\u0027eau",
                            "es":  "cuerpos de agua"
                        },
    "ooo.q.102.explanation":  {
                                  "nl":  "De andere drie zijn watermassa\u0027s; een berg is een landvorm.",
                                  "de":  "Die anderen drei sind Gewässer; Ein Berg ist eine Landform.",
                                  "fr":  "Les trois autres sont des plans d’eau ; une montagne est un relief.",
                                  "es":  "Los otros tres son cuerpos de agua; una montaña es un accidente geográfico."
                              },
    "ooo.q.103.choice.0":  {
                               "nl":  "Regen",
                               "de":  "Regen",
                               "fr":  "Pluie",
                               "es":  "Lluvia"
                           },
    "ooo.q.103.choice.1":  {
                               "nl":  "Sneeuw",
                               "de":  "Schnee",
                               "fr":  "Neige",
                               "es":  "Nieve"
                           },
    "ooo.q.103.choice.2":  {
                               "nl":  "Hagel",
                               "de":  "Heil",
                               "fr":  "Grêle",
                               "es":  "Granizo"
                           },
    "ooo.q.103.choice.3":  {
                               "nl":  "Zonneschijn",
                               "de":  "Sonnenschein",
                               "fr":  "Soleil",
                               "es":  "Sol"
                           },
    "ooo.q.103.odd":  {
                          "nl":  "Zonneschijn",
                          "de":  "Sonnenschein",
                          "fr":  "Soleil",
                          "es":  "Sol"
                      },
    "ooo.q.103.group":  {
                            "nl":  "vormen van neerslag",
                            "de":  "Niederschlagsformen",
                            "fr":  "formes de précipitations",
                            "es":  "formas de precipitación"
                        },
    "ooo.q.103.explanation":  {
                                  "nl":  "De andere drie zijn neerslag; zonneschijn is dat niet.",
                                  "de":  "Die anderen drei sind Niederschlag; Sonnenschein ist es nicht.",
                                  "fr":  "Les trois autres sont des précipitations ; le soleil ne l\u0027est pas.",
                                  "es":  "Los otros tres son precipitaciones; el sol no lo es."
                              },
    "ooo.q.104.choice.0":  {
                               "nl":  "Vulkaan",
                               "de":  "Vulkan",
                               "fr":  "Volcan",
                               "es":  "Volcán"
                           },
    "ooo.q.104.choice.1":  {
                               "nl":  "Aardbeving",
                               "de":  "Erdbeben",
                               "fr":  "Tremblement de terre",
                               "es":  "Terremoto"
                           },
    "ooo.q.104.choice.2":  {
                               "nl":  "Tsunami",
                               "de":  "Tsunami",
                               "fr":  "Tsunami",
                               "es":  "Tsunami"
                           },
    "ooo.q.104.choice.3":  {
                               "nl":  "Regenboog",
                               "de":  "Regenbogen",
                               "fr":  "Arc-en-ciel",
                               "es":  "Arcoiris"
                           },
    "ooo.q.104.odd":  {
                          "nl":  "Regenboog",
                          "de":  "Regenbogen",
                          "fr":  "Arc-en-ciel",
                          "es":  "Arcoiris"
                      },
    "ooo.q.104.group":  {
                            "nl":  "natuurlijke gevaren",
                            "de":  "Naturgefahren",
                            "fr":  "risques naturels",
                            "es":  "peligros naturales"
                        },
    "ooo.q.104.explanation":  {
                                  "nl":  "De andere drie kunnen natuurlijke gevaren zijn; een regenboog is een optisch fenomeen.",
                                  "de":  "Die anderen drei können Naturgefahren sein; Ein Regenbogen ist ein optisches Phänomen.",
                                  "fr":  "Les trois autres peuvent être des risques naturels ; un arc-en-ciel est un phénomène optique.",
                                  "es":  "Los otros tres pueden ser peligros naturales; un arco iris es un fenómeno óptico."
                              },
    "ooo.q.105.choice.0":  {
                               "nl":  "Graniet",
                               "de":  "Granit",
                               "fr":  "Granit",
                               "es":  "Granito"
                           },
    "ooo.q.105.choice.1":  {
                               "nl":  "Marmer",
                               "de":  "Marmor",
                               "fr":  "Marbre",
                               "es":  "Mármol"
                           },
    "ooo.q.105.choice.2":  {
                               "nl":  "Basalt",
                               "de":  "Basalt",
                               "fr":  "Basalte",
                               "es":  "Basalto"
                           },
    "ooo.q.105.choice.3":  {
                               "nl":  "Eik",
                               "de":  "Eiche",
                               "fr":  "Chêne",
                               "es":  "Roble"
                           },
    "ooo.q.105.odd":  {
                          "nl":  "Eik",
                          "de":  "Eiche",
                          "fr":  "Chêne",
                          "es":  "Roble"
                      },
    "ooo.q.105.group":  {
                            "nl":  "rotsen",
                            "de":  "Felsen",
                            "fr":  "rochers",
                            "es":  "rocas"
                        },
    "ooo.q.105.explanation":  {
                                  "nl":  "De andere drie zijn rotsen; eik is een soort boom.",
                                  "de":  "Die anderen drei sind Steine; Eiche ist eine Baumart.",
                                  "fr":  "Les trois autres sont des rochers ; le chêne est un type d\u0027arbre.",
                                  "es":  "Los otros tres son rocas; El roble es un tipo de árbol."
                              },
    "ooo.q.106.choice.0":  {
                               "nl":  "Roos",
                               "de":  "Rose",
                               "fr":  "Rose",
                               "es":  "Rosa"
                           },
    "ooo.q.106.choice.1":  {
                               "nl":  "Tulp",
                               "de":  "Tulpe",
                               "fr":  "Tulipe",
                               "es":  "Tulipán"
                           },
    "ooo.q.106.choice.2":  {
                               "nl":  "Madeliefje",
                               "de":  "Gänseblümchen",
                               "fr":  "Marguerite",
                               "es":  "Margarita"
                           },
    "ooo.q.106.choice.3":  {
                               "nl":  "Varen",
                               "de":  "Farn",
                               "fr":  "Fougère",
                               "es":  "Helecho"
                           },
    "ooo.q.106.odd":  {
                          "nl":  "Varen",
                          "de":  "Farn",
                          "fr":  "Fougère",
                          "es":  "Helecho"
                      },
    "ooo.q.106.group":  {
                            "nl":  "bloeiende planten",
                            "de":  "blühende Pflanzen",
                            "fr":  "plantes à fleurs",
                            "es":  "plantas con flores"
                        },
    "ooo.q.106.explanation":  {
                                  "nl":  "De andere drie zijn bloeiende planten; varens planten zich voort door sporen.",
                                  "de":  "Die anderen drei sind Blütenpflanzen; Farne vermehren sich durch Sporen.",
                                  "fr":  "Les trois autres sont des plantes à fleurs ; les fougères se reproduisent par spores.",
                                  "es":  "Las otras tres son plantas con flores; Los helechos se reproducen por esporas."
                              },
    "ooo.q.107.choice.0":  {
                               "nl":  "Cumulus",
                               "de":  "Cumulus",
                               "fr":  "Cumulus",
                               "es":  "Cúmulo"
                           },
    "ooo.q.107.choice.1":  {
                               "nl":  "Cirrus",
                               "de":  "Cirrus",
                               "fr":  "Cirrus",
                               "es":  "Cirro"
                           },
    "ooo.q.107.choice.2":  {
                               "nl":  "Stratus",
                               "de":  "Stratus",
                               "fr":  "Stratus",
                               "es":  "Estrato"
                           },
    "ooo.q.107.choice.3":  {
                               "nl":  "Graniet",
                               "de":  "Granit",
                               "fr":  "Granit",
                               "es":  "Granito"
                           },
    "ooo.q.107.odd":  {
                          "nl":  "Graniet",
                          "de":  "Granit",
                          "fr":  "Granit",
                          "es":  "Granito"
                      },
    "ooo.q.107.group":  {
                            "nl":  "wolken typen",
                            "de":  "Wolkentypen",
                            "fr":  "types de nuages",
                            "es":  "tipos de nubes"
                        },
    "ooo.q.107.explanation":  {
                                  "nl":  "De andere drie zijn wolkentypes; graniet is een rots.",
                                  "de":  "Die anderen drei sind Wolkentypen; Granit ist ein Stein.",
                                  "fr":  "Les trois autres sont des types de nuages ; le granit est une roche.",
                                  "es":  "Los otros tres son tipos de nubes; El granito es una roca."
                              },
    "ooo.q.108.choice.0":  {
                               "nl":  "Lente",
                               "de":  "Frühling",
                               "fr":  "Printemps",
                               "es":  "Primavera"
                           },
    "ooo.q.108.choice.1":  {
                               "nl":  "Zomer",
                               "de":  "Sommer",
                               "fr":  "Été",
                               "es":  "Verano"
                           },
    "ooo.q.108.choice.2":  {
                               "nl":  "Herfst",
                               "de":  "Herbst",
                               "fr":  "Automne",
                               "es":  "Otoño"
                           },
    "ooo.q.108.choice.3":  {
                               "nl":  "Moesson",
                               "de":  "Monsun",
                               "fr":  "Mousson",
                               "es":  "Monzón"
                           },
    "ooo.q.108.odd":  {
                          "nl":  "Moesson",
                          "de":  "Monsun",
                          "fr":  "Mousson",
                          "es":  "Monzón"
                      },
    "ooo.q.108.group":  {
                            "nl":  "gematigde kalenderseizoenen",
                            "de":  "gemäßigte Kalenderjahreszeiten",
                            "fr":  "saisons tempérées du calendrier",
                            "es":  "estaciones de calendario templado"
                        },
    "ooo.q.108.explanation":  {
                                  "nl":  "De andere drie zijn de bekende gematigde kalenderseizoenen; moesson noemt een seizoensgebonden wind- en regenpatroon.",
                                  "de":  "Die anderen drei sind die bekannten gemäßigten Kalenderjahreszeiten; Monsun bezeichnet ein saisonales Wind- und Regenmuster.",
                                  "fr":  "Les trois autres sont les saisons familières du calendrier tempéré ; la mousson désigne un modèle saisonnier de vent et de pluie.",
                                  "es":  "Las otras tres son las conocidas estaciones del calendario templado; monzón nombra un patrón estacional de viento y lluvia."
                              },
    "ooo.q.109.choice.0":  {
                               "nl":  "Tornado",
                               "de":  "Tornado",
                               "fr":  "Tornade",
                               "es":  "Tornado"
                           },
    "ooo.q.109.choice.1":  {
                               "nl":  "Orkaan",
                               "de":  "Hurrikan",
                               "fr":  "Ouragan",
                               "es":  "Huracán"
                           },
    "ooo.q.109.choice.2":  {
                               "nl":  "Tyfoon",
                               "de":  "Taifun",
                               "fr":  "Typhon",
                               "es":  "Tifón"
                           },
    "ooo.q.109.choice.3":  {
                               "nl":  "Droogte",
                               "de":  "Dürre",
                               "fr":  "Sécheresse",
                               "es":  "Sequía"
                           },
    "ooo.q.109.odd":  {
                          "nl":  "Droogte",
                          "de":  "Dürre",
                          "fr":  "Sécheresse",
                          "es":  "Sequía"
                      },
    "ooo.q.109.group":  {
                            "nl":  "roterende tropische of zware windstormen",
                            "de":  "rotierende tropische oder schwere Stürme",
                            "fr":  "tempêtes tropicales tournantes ou vents violents",
                            "es":  "tormentas de viento tropicales o severas rotativas"
                        },
    "ooo.q.109.explanation":  {
                                  "nl":  "De andere drie zijn windstormen; Droogte is een langdurig gebrek aan regenval.",
                                  "de":  "Die anderen drei sind Stürme; Dürre ist ein anhaltender Mangel an Niederschlägen.",
                                  "fr":  "Les trois autres sont des tempêtes de vent ; la sécheresse est un manque prolongé de précipitations.",
                                  "es":  "Los otros tres son tormentas de viento; La sequía es una falta prolongada de lluvia."
                              },
    "ooo.q.110.choice.0":  {
                               "nl":  "Mos",
                               "de":  "Moos",
                               "fr":  "Mousse",
                               "es":  "Musgo"
                           },
    "ooo.q.110.choice.1":  {
                               "nl":  "Korstmos",
                               "de":  "Flechte",
                               "fr":  "Lichens",
                               "es":  "Liquen"
                           },
    "ooo.q.110.choice.2":  {
                               "nl":  "Algen",
                               "de":  "Algen",
                               "fr":  "Algues",
                               "es":  "Algas"
                           },
    "ooo.q.110.choice.3":  {
                               "nl":  "Paddestoel",
                               "de":  "Pilz",
                               "fr":  "Champignon",
                               "es":  "Hongo"
                           },
    "ooo.q.110.odd":  {
                          "nl":  "Paddestoel",
                          "de":  "Pilz",
                          "fr":  "Champignon",
                          "es":  "Hongo"
                      },
    "ooo.q.110.group":  {
                            "nl":  "eenvoudige organismen die fotosynthetiseren",
                            "de":  "einfache Organismen, die Photosynthese betreiben",
                            "fr":  "organismes simples qui font la photosynthèse",
                            "es":  "organismos simples que realizan la fotosíntesis"
                        },
    "ooo.q.110.explanation":  {
                                  "nl":  "De andere drie kunnen fotosynthetiseren; paddenstoelen zijn schimmels.",
                                  "de":  "Die anderen drei können Photosynthese betreiben; Pilze sind Pilze.",
                                  "fr":  "Les trois autres peuvent faire la photosynthèse ; les champignons sont des champignons.",
                                  "es":  "Los otros tres pueden realizar la fotosíntesis; los hongos son hongos."
                              },
    "ooo.q.111.choice.0":  {
                               "nl":  "Kwarts",
                               "de":  "Quarz",
                               "fr":  "Quartz",
                               "es":  "Cuarzo"
                           },
    "ooo.q.111.choice.1":  {
                               "nl":  "Veldspaat",
                               "de":  "Feldspat",
                               "fr":  "Feldspath",
                               "es":  "Feldespato"
                           },
    "ooo.q.111.choice.2":  {
                               "nl":  "Mica",
                               "de":  "Glimmer",
                               "fr":  "Mica",
                               "es":  "Mica"
                           },
    "ooo.q.111.choice.3":  {
                               "nl":  "Kalksteen",
                               "de":  "Kalkstein",
                               "fr":  "Calcaire",
                               "es":  "Piedra caliza"
                           },
    "ooo.q.111.odd":  {
                          "nl":  "Kalksteen",
                          "de":  "Kalkstein",
                          "fr":  "Calcaire",
                          "es":  "Piedra caliza"
                      },
    "ooo.q.111.group":  {
                            "nl":  "voorkomende mineralen in graniet",
                            "de":  "Gemeinsame Mineralien in Granit",
                            "fr":  "minéraux communs dans le granit",
                            "es":  "minerales comunes en granito"
                        },
    "ooo.q.111.explanation":  {
                                  "nl":  "Kwarts, veldspaat en mica zijn de belangrijkste minerale groepen in graniet; kalksteen is een sedimentair gesteente.",
                                  "de":  "Quarz, Feldspat und Glimmer sind die wichtigsten Mineralgruppen im Granit; Kalkstein ist ein Sedimentgestein.",
                                  "fr":  "Le quartz, le feldspath et le mica sont les principaux groupes minéraux du granite ; le calcaire est une roche sédimentaire.",
                                  "es":  "El cuarzo, el feldespato y la mica son los principales grupos minerales del granito; La piedra caliza es una roca sedimentaria."
                              },
    "ooo.q.112.choice.0":  {
                               "nl":  "Stalactiet",
                               "de":  "Stalaktit",
                               "fr":  "Stalactite",
                               "es":  "Estalactita"
                           },
    "ooo.q.112.choice.1":  {
                               "nl":  "Stalagmiet",
                               "de":  "Stalagmit",
                               "fr":  "Stalagmite",
                               "es":  "Estalagmita"
                           },
    "ooo.q.112.choice.2":  {
                               "nl":  "Stroomsteen",
                               "de":  "Fließstein",
                               "fr":  "Pierre à flux",
                               "es":  "Piedra fluida"
                           },
    "ooo.q.112.choice.3":  {
                               "nl":  "Zandduin",
                               "de":  "Sanddüne",
                               "fr":  "Dune de sable",
                               "es":  "Duna de arena"
                           },
    "ooo.q.112.odd":  {
                          "nl":  "Zandduin",
                          "de":  "Sanddüne",
                          "fr":  "Dune de sable",
                          "es":  "Duna de arena"
                      },
    "ooo.q.112.group":  {
                            "nl":  "grot formaties",
                            "de":  "Höhlenformationen",
                            "fr":  "formations de grottes",
                            "es":  "formaciones de cuevas"
                        },
    "ooo.q.112.explanation":  {
                                  "nl":  "De andere drie kunnen zich in grotten vormen uit minerale afzettingen; een zandduin ontstaat uit door de wind geblazen zand.",
                                  "de":  "Die anderen drei können in Höhlen aus Mineralablagerungen entstehen; Eine Sanddüne bildet sich aus vom Wind verwehtem Sand.",
                                  "fr":  "Les trois autres peuvent se former dans des grottes à partir de gisements minéraux ; une dune de sable se forme à partir du sable soufflé par le vent.",
                                  "es":  "Los otros tres pueden formarse en cuevas a partir de depósitos minerales; se forma una duna de arena a partir de arena arrastrada por el viento."
                              },
    "ooo.q.113.choice.0":  {
                               "nl":  "Lava",
                               "de":  "Lava",
                               "fr":  "Lave",
                               "es":  "Lava"
                           },
    "ooo.q.113.choice.1":  {
                               "nl":  "Magma",
                               "de":  "Magma",
                               "fr":  "Magma",
                               "es":  "Magma"
                           },
    "ooo.q.113.choice.2":  {
                               "nl":  "Basalt",
                               "de":  "Basalt",
                               "fr":  "Basalte",
                               "es":  "Basalto"
                           },
    "ooo.q.113.choice.3":  {
                               "nl":  "Gneis",
                               "de":  "Gneis",
                               "fr":  "Gneiss",
                               "es":  "Gneis"
                           },
    "ooo.q.113.odd":  {
                          "nl":  "Gneis",
                          "de":  "Gneis",
                          "fr":  "Gneiss",
                          "es":  "Gneis"
                      },
    "ooo.q.113.group":  {
                            "nl":  "vulkanisch materiaal of gesteente",
                            "de":  "vulkanisches Material oder Gestein",
                            "fr":  "matière volcanique ou roche",
                            "es":  "material o roca volcánica"
                        },
    "ooo.q.113.explanation":  {
                                  "nl":  "Lava, magma en basalt worden in verband gebracht met vulkanische activiteit; gneis is een metamorf gesteente.",
                                  "de":  "Lava, Magma und Basalt werden mit vulkanischer Aktivität in Verbindung gebracht; Gneis ist ein metamorphes Gestein.",
                                  "fr":  "La lave, le magma et le basalte sont associés à l\u0027activité volcanique ; le gneiss est une roche métamorphique.",
                                  "es":  "La lava, el magma y el basalto están asociados con la actividad volcánica; El gneis es una roca metamórfica."
                              },
    "ooo.q.114.choice.0":  {
                               "nl":  "Getijde",
                               "de":  "Flut",
                               "fr":  "Marée",
                               "es":  "Marea"
                           },
    "ooo.q.114.choice.1":  {
                               "nl":  "Golf",
                               "de":  "Welle",
                               "fr":  "Vague",
                               "es":  "Ola"
                           },
    "ooo.q.114.choice.2":  {
                               "nl":  "Huidig",
                               "de":  "Aktuell",
                               "fr":  "Actuel",
                               "es":  "Actual"
                           },
    "ooo.q.114.choice.3":  {
                               "nl":  "Gletsjer",
                               "de":  "Gletscher",
                               "fr":  "Glacier",
                               "es":  "Glaciar"
                           },
    "ooo.q.114.odd":  {
                          "nl":  "Gletsjer",
                          "de":  "Gletscher",
                          "fr":  "Glacier",
                          "es":  "Glaciar"
                      },
    "ooo.q.114.group":  {
                            "nl":  "bewegend oceaanwater",
                            "de":  "bewegtes Meerwasser",
                            "fr":  "eau de mer en mouvement",
                            "es":  "agua del océano en movimiento"
                        },
    "ooo.q.114.explanation":  {
                                  "nl":  "De andere drie beschrijven bewegingen van oceaanwater; een gletsjer is een massa landijs.",
                                  "de":  "Die anderen drei beschreiben Bewegungen des Meerwassers; Ein Gletscher ist eine Landeismasse.",
                                  "fr":  "Les trois autres décrivent les mouvements de l’eau océanique ; un glacier est une masse de glace terrestre.",
                                  "es":  "Los otros tres describen movimientos del agua del océano; un glaciar es una masa de hielo terrestre."
                              },
    "ooo.q.115.choice.0":  {
                               "nl":  "Dauw",
                               "de":  "Tau",
                               "fr":  "Rosée",
                               "es":  "Rocío"
                           },
    "ooo.q.115.choice.1":  {
                               "nl":  "Vorst",
                               "de":  "Frost",
                               "fr":  "Gel",
                               "es":  "Escarcha"
                           },
    "ooo.q.115.choice.2":  {
                               "nl":  "Mist",
                               "de":  "Nebel",
                               "fr":  "Brouillard",
                               "es":  "Niebla"
                           },
    "ooo.q.115.choice.3":  {
                               "nl":  "Lava",
                               "de":  "Lava",
                               "fr":  "Lave",
                               "es":  "Lava"
                           },
    "ooo.q.115.odd":  {
                          "nl":  "Lava",
                          "de":  "Lava",
                          "fr":  "Lave",
                          "es":  "Lava"
                      },
    "ooo.q.115.group":  {
                            "nl":  "water in vormen nabij het aardoppervlak",
                            "de":  "Wasser in Formen nahe der Erdoberfläche",
                            "fr":  "l\u0027eau sous des formes proches de la surface de la Terre",
                            "es":  "agua en formas cerca de la superficie de la Tierra"
                        },
    "ooo.q.115.explanation":  {
                                  "nl":  "Dauw, vorst en mist zijn vormen van water; lava is gesmolten gesteente.",
                                  "de":  "Tau, Frost und Nebel sind Formen von Wasser; Lava ist geschmolzenes Gestein.",
                                  "fr":  "La rosée, le gel et le brouillard sont des formes d\u0027eau ; la lave est une roche en fusion.",
                                  "es":  "El rocío, la escarcha y la niebla son formas de agua; la lava es roca fundida."
                              },
    "ooo.q.116.choice.0":  {
                               "nl":  "Roos",
                               "de":  "Rose",
                               "fr":  "Rose",
                               "es":  "Rosa"
                           },
    "ooo.q.116.choice.1":  {
                               "nl":  "Zonnebloem",
                               "de":  "Sonnenblume",
                               "fr":  "Tournesol",
                               "es":  "Girasol"
                           },
    "ooo.q.116.choice.2":  {
                               "nl":  "Tulp",
                               "de":  "Tulpe",
                               "fr":  "Tulipe",
                               "es":  "Tulipán"
                           },
    "ooo.q.116.choice.3":  {
                               "nl":  "Eik",
                               "de":  "Eiche",
                               "fr":  "Chêne",
                               "es":  "Roble"
                           },
    "ooo.q.116.odd":  {
                          "nl":  "Eik",
                          "de":  "Eiche",
                          "fr":  "Chêne",
                          "es":  "Roble"
                      },
    "ooo.q.116.group":  {
                            "nl":  "bloemen",
                            "de":  "Blumen",
                            "fr":  "fleurs",
                            "es":  "flores"
                        },
    "ooo.q.116.explanation":  {
                                  "nl":  "De andere drie zijn bloemen; een eik is een boom.",
                                  "de":  "Die anderen drei sind Blumen; Eine Eiche ist ein Baum.",
                                  "fr":  "Les trois autres sont des fleurs ; un chêne est un arbre.",
                                  "es":  "Los otros tres son flores; un roble es un árbol."
                              },
    "ooo.q.117.choice.0":  {
                               "nl":  "Woestijn",
                               "de":  "Wüste",
                               "fr":  "Désert",
                               "es":  "Desierto"
                           },
    "ooo.q.117.choice.1":  {
                               "nl":  "Bos",
                               "de":  "Wald",
                               "fr":  "Forêt",
                               "es":  "Bosque"
                           },
    "ooo.q.117.choice.2":  {
                               "nl":  "Grasland",
                               "de":  "Grasland",
                               "fr":  "Prairie",
                               "es":  "Pastizales"
                           },
    "ooo.q.117.choice.3":  {
                               "nl":  "Dolfijn",
                               "de":  "Delphin",
                               "fr":  "Dauphin",
                               "es":  "Delfín"
                           },
    "ooo.q.117.odd":  {
                          "nl":  "Dolfijn",
                          "de":  "Delphin",
                          "fr":  "Dauphin",
                          "es":  "Delfín"
                      },
    "ooo.q.117.group":  {
                            "nl":  "biomen",
                            "de":  "Biome",
                            "fr":  "biomes",
                            "es":  "biomas"
                        },
    "ooo.q.117.explanation":  {
                                  "nl":  "De andere drie zijn biomen; een dolfijn is een dier.",
                                  "de":  "Die anderen drei sind Biome; Ein Delphin ist ein Tier.",
                                  "fr":  "Les trois autres sont des biomes ; un dauphin est un animal.",
                                  "es":  "Los otros tres son biomas; un delfín es un animal."
                              },
    "ooo.q.118.choice.0":  {
                               "nl":  "Kloof",
                               "de":  "Schlucht",
                               "fr":  "Canyon",
                               "es":  "Cañón"
                           },
    "ooo.q.118.choice.1":  {
                               "nl":  "Vallei",
                               "de":  "Tal",
                               "fr":  "Vallée",
                               "es":  "Valle"
                           },
    "ooo.q.118.choice.2":  {
                               "nl":  "Plateau",
                               "de":  "Plateau",
                               "fr":  "Plateau",
                               "es":  "Meseta"
                           },
    "ooo.q.118.choice.3":  {
                               "nl":  "Orkaan",
                               "de":  "Hurrikan",
                               "fr":  "Ouragan",
                               "es":  "Huracán"
                           },
    "ooo.q.118.odd":  {
                          "nl":  "Orkaan",
                          "de":  "Hurrikan",
                          "fr":  "Ouragan",
                          "es":  "Huracán"
                      },
    "ooo.q.118.group":  {
                            "nl":  "landvormen",
                            "de":  "Landformen",
                            "fr":  "reliefs",
                            "es":  "accidentes geográficos"
                        },
    "ooo.q.118.explanation":  {
                                  "nl":  "De andere drie zijn landvormen; een orkaan is een storm.",
                                  "de":  "Die anderen drei sind Landformen; Ein Hurrikan ist ein Sturm.",
                                  "fr":  "Les trois autres sont des reliefs ; un ouragan est une tempête.",
                                  "es":  "Los otros tres son accidentes geográficos; un huracán es una tormenta."
                              },
    "ooo.q.119.choice.0":  {
                               "nl":  "Regen",
                               "de":  "Regen",
                               "fr":  "Pluie",
                               "es":  "Lluvia"
                           },
    "ooo.q.119.choice.1":  {
                               "nl":  "Natte sneeuw",
                               "de":  "Schneeregen",
                               "fr":  "Grésil",
                               "es":  "Aguanieve"
                           },
    "ooo.q.119.choice.2":  {
                               "nl":  "Hagel",
                               "de":  "Heil",
                               "fr":  "Grêle",
                               "es":  "Granizo"
                           },
    "ooo.q.119.choice.3":  {
                               "nl":  "Aardbeving",
                               "de":  "Erdbeben",
                               "fr":  "Tremblement de terre",
                               "es":  "Terremoto"
                           },
    "ooo.q.119.odd":  {
                          "nl":  "Aardbeving",
                          "de":  "Erdbeben",
                          "fr":  "Tremblement de terre",
                          "es":  "Terremoto"
                      },
    "ooo.q.119.group":  {
                            "nl":  "vormen van neerslag",
                            "de":  "Niederschlagsformen",
                            "fr":  "formes de précipitations",
                            "es":  "formas de precipitación"
                        },
    "ooo.q.119.explanation":  {
                                  "nl":  "De andere drie zijn vormen van neerslag; een aardbeving is grondbeweging.",
                                  "de":  "Die anderen drei sind Niederschlagsformen; Ein Erdbeben ist eine Bodenbewegung.",
                                  "fr":  "Les trois autres sont des formes de précipitations ; un tremblement de terre est un mouvement de sol.",
                                  "es":  "Los otros tres son formas de precipitación; un terremoto es un movimiento de tierra."
                              },
    "ooo.q.120.choice.0":  {
                               "nl":  "Stollingsrijk",
                               "de":  "Eruptiv",
                               "fr":  "Igné",
                               "es":  "Ígneo"
                           },
    "ooo.q.120.choice.1":  {
                               "nl":  "Sedimentair",
                               "de":  "Sedimentär",
                               "fr":  "Sédimentaire",
                               "es":  "Sedimentario"
                           },
    "ooo.q.120.choice.2":  {
                               "nl":  "Metamorf",
                               "de":  "Metamorph",
                               "fr":  "Métamorphique",
                               "es":  "Metamórfico"
                           },
    "ooo.q.120.choice.3":  {
                               "nl":  "Transparant",
                               "de":  "Transparent",
                               "fr":  "Transparente",
                               "es":  "Transparente"
                           },
    "ooo.q.120.odd":  {
                          "nl":  "Transparant",
                          "de":  "Transparent",
                          "fr":  "Transparente",
                          "es":  "Transparente"
                      },
    "ooo.q.120.group":  {
                            "nl":  "gesteente classificaties",
                            "de":  "Gesteinsklassifizierungen",
                            "fr":  "classifications des roches",
                            "es":  "clasificaciones de rocas"
                        },
    "ooo.q.120.explanation":  {
                                  "nl":  "De andere drie classificeren soorten gesteente; transparant beschrijft of iets licht doorlaat.",
                                  "de":  "Die anderen drei klassifizieren Gesteinsarten; transparent beschreibt, ob etwas Licht durchlässt.",
                                  "fr":  "Les trois autres classent les types de roches ; transparent décrit si quelque chose laisse passer la lumière.",
                                  "es":  "Los otros tres clasifican tipos de roca; transparente describe si algo deja pasar la luz."
                              },
    "ooo.q.121.choice.0":  {
                               "nl":  "Harry Potter",
                               "de":  "Harry Potter",
                               "fr":  "Harry Potter",
                               "es":  "Harry potter"
                           },
    "ooo.q.121.choice.1":  {
                               "nl":  "Ron Wemel",
                               "de":  "Ron Weasley",
                               "fr":  "Ron Weasley",
                               "es":  "Ron Weasley"
                           },
    "ooo.q.121.choice.2":  {
                               "nl":  "Hermelien Griffel",
                               "de":  "Hermine Granger",
                               "fr":  "Hermione Granger",
                               "es":  "Hermione Granger"
                           },
    "ooo.q.121.choice.3":  {
                               "nl":  "Shrek",
                               "de":  "Shrek",
                               "fr":  "Shrek",
                               "es":  "Shrek"
                           },
    "ooo.q.121.odd":  {
                          "nl":  "Shrek",
                          "de":  "Shrek",
                          "fr":  "Shrek",
                          "es":  "Shrek"
                      },
    "ooo.q.121.group":  {
                            "nl":  "personages uit de Harry Potter-serie",
                            "de":  "Charaktere aus der Harry-Potter-Reihe",
                            "fr":  "personnages de la série Harry Potter",
                            "es":  "personajes de la serie Harry Potter"
                        },
    "ooo.q.121.explanation":  {
                                  "nl":  "De andere drie zijn personages uit Harry Potter; Shrek komt uit een andere filmserie.",
                                  "de":  "Die anderen drei sind Charaktere aus Harry Potter; Shrek stammt aus einer anderen Filmreihe.",
                                  "fr":  "Les trois autres sont des personnages de Harry Potter ; Shrek vient d\u0027une autre série de films.",
                                  "es":  "Los otros tres son personajes de Harry Potter; Shrek es de una serie de películas diferente."
                              },
    "ooo.q.122.choice.0":  {
                               "nl":  "Elsa",
                               "de":  "Elsa",
                               "fr":  "Elsa",
                               "es":  "Elsa"
                           },
    "ooo.q.122.choice.1":  {
                               "nl":  "Anna",
                               "de":  "Anna",
                               "fr":  "Anna",
                               "es":  "Ana"
                           },
    "ooo.q.122.choice.2":  {
                               "nl":  "Olaf",
                               "de":  "Olaf",
                               "fr":  "Olaf",
                               "es":  "Olaf"
                           },
    "ooo.q.122.choice.3":  {
                               "nl":  "Batman",
                               "de":  "Batman",
                               "fr":  "Batman",
                               "es":  "Batman"
                           },
    "ooo.q.122.odd":  {
                          "nl":  "Batman",
                          "de":  "Batman",
                          "fr":  "Batman",
                          "es":  "Batman"
                      },
    "ooo.q.122.group":  {
                            "nl":  "personages uit Frozen",
                            "de":  "Charaktere aus Frozen",
                            "fr":  "personnages de La Reine des Neiges",
                            "es":  "personajes de frozen"
                        },
    "ooo.q.122.explanation":  {
                                  "nl":  "De andere drie zijn personages uit Frozen; Batman is een DC-superheld.",
                                  "de":  "Die anderen drei sind Charaktere in Frozen; Batman ist ein DC-Superheld.",
                                  "fr":  "Les trois autres sont des personnages de Frozen ; Batman est un super-héros de DC.",
                                  "es":  "Los otros tres son personajes de Frozen; Batman es un superhéroe de DC."
                              },
    "ooo.q.123.choice.0":  {
                               "nl":  "Lucas Skywalker",
                               "de":  "Luke Skywalker",
                               "fr":  "Luc Skywalker",
                               "es":  "Lucas Skywalker"
                           },
    "ooo.q.123.choice.1":  {
                               "nl":  "Prinses Leia",
                               "de":  "Prinzessin Leia",
                               "fr":  "Princesse Leia",
                               "es":  "Princesa leia"
                           },
    "ooo.q.123.choice.2":  {
                               "nl":  "Joda",
                               "de":  "Yoda",
                               "fr":  "Yoda",
                               "es":  "Yoda"
                           },
    "ooo.q.123.choice.3":  {
                               "nl":  "Pikachu",
                               "de":  "Pikachu",
                               "fr":  "Pikachu",
                               "es":  "Pikachu"
                           },
    "ooo.q.123.odd":  {
                          "nl":  "Pikachu",
                          "de":  "Pikachu",
                          "fr":  "Pikachu",
                          "es":  "Pikachu"
                      },
    "ooo.q.123.group":  {
                            "nl":  "Star Wars-personages",
                            "de":  "Star Wars-Charaktere",
                            "fr":  "Personnages de Star Wars",
                            "es":  "personajes de la guerra de las galaxias"
                        },
    "ooo.q.123.explanation":  {
                                  "nl":  "De andere drie zijn personages uit Star Wars; Pikachu komt van Pokémon.",
                                  "de":  "Die anderen drei sind Charaktere aus Star Wars; Pikachu stammt von Pokémon.",
                                  "fr":  "Les trois autres sont des personnages de Star Wars ; Pikachu vient de Pokémon.",
                                  "es":  "Los otros tres son personajes de Star Wars; Pikachu es de Pokémon."
                              },
    "ooo.q.124.choice.0":  {
                               "nl":  "Batman",
                               "de":  "Batman",
                               "fr":  "Batman",
                               "es":  "Batman"
                           },
    "ooo.q.124.choice.1":  {
                               "nl":  "Wondervrouw",
                               "de":  "Wunderfrau",
                               "fr":  "Wonder Woman",
                               "es":  "Mujer maravilla"
                           },
    "ooo.q.124.choice.2":  {
                               "nl":  "Superman",
                               "de":  "Superman",
                               "fr":  "Superman",
                               "es":  "Superhombre"
                           },
    "ooo.q.124.choice.3":  {
                               "nl":  "Spider-Man",
                               "de":  "Spider-Man",
                               "fr":  "Homme araignée",
                               "es":  "Hombre araña"
                           },
    "ooo.q.124.odd":  {
                          "nl":  "Spider-Man",
                          "de":  "Spider-Man",
                          "fr":  "Homme araignée",
                          "es":  "Hombre araña"
                      },
    "ooo.q.124.group":  {
                            "nl":  "DC-superhelden",
                            "de":  "DC-Superhelden",
                            "fr":  "Super-héros DC",
                            "es":  "superhéroes dc"
                        },
    "ooo.q.124.explanation":  {
                                  "nl":  "De andere drie zijn DC-superhelden; Spider-Man is een Marvel-personage.",
                                  "de":  "Die anderen drei sind DC-Superhelden; Spider-Man ist eine Marvel-Figur.",
                                  "fr":  "Les trois autres sont des super-héros de DC ; Spider-Man est un personnage de Marvel.",
                                  "es":  "Los otros tres son superhéroes de DC; Spider-Man es un personaje de Marvel."
                              },
    "ooo.q.125.choice.0":  {
                               "nl":  "Homerus Simpson",
                               "de":  "Homer Simpson",
                               "fr":  "Homer Simpson",
                               "es":  "Homero Simpson"
                           },
    "ooo.q.125.choice.1":  {
                               "nl":  "Bart Simpson",
                               "de":  "Bart Simpson",
                               "fr":  "Bart Simpson",
                               "es":  "Bart Simpson"
                           },
    "ooo.q.125.choice.2":  {
                               "nl":  "Lisa Simpson",
                               "de":  "Lisa Simpson",
                               "fr":  "Lisa Simpson",
                               "es":  "Lisa Simpson"
                           },
    "ooo.q.125.choice.3":  {
                               "nl":  "Gru",
                               "de":  "Gru",
                               "fr":  "Gru",
                               "es":  "Gru"
                           },
    "ooo.q.125.odd":  {
                          "nl":  "Gru",
                          "de":  "Gru",
                          "fr":  "Gru",
                          "es":  "Gru"
                      },
    "ooo.q.125.group":  {
                            "nl":  "personages uit The Simpsons",
                            "de":  "Charaktere aus den Simpsons",
                            "fr":  "personnages des Simpsons",
                            "es":  "personajes de los simpson"
                        },
    "ooo.q.125.explanation":  {
                                  "nl":  "De andere drie zijn leden van de Simpson-familie; Gru komt uit Despicable Me.",
                                  "de":  "Die anderen drei sind Mitglieder der Simpson-Familie; Gru ist von Despicable Me.",
                                  "fr":  "Les trois autres sont membres de la famille Simpson ; Gru vient de Moi, moche et méchant.",
                                  "es":  "Los otros tres son miembros de la familia Simpson; Gru es de Mi Villano Favorito."
                              },
    "ooo.q.126.choice.0":  {
                               "nl":  "Bosrijk",
                               "de":  "Woody",
                               "fr":  "Boisé",
                               "es":  "Leñoso"
                           },
    "ooo.q.126.choice.1":  {
                               "nl":  "Buzz Lichtjaar",
                               "de":  "Buzz Lightyear",
                               "fr":  "Buzz l\u0027Éclair",
                               "es":  "Buzz Lightyear"
                           },
    "ooo.q.126.choice.2":  {
                               "nl":  "Jessie",
                               "de":  "Jessie",
                               "fr":  "Jessie",
                               "es":  "Jessie"
                           },
    "ooo.q.126.choice.3":  {
                               "nl":  "Nemo",
                               "de":  "Nemo",
                               "fr":  "Némo",
                               "es":  "Nemo"
                           },
    "ooo.q.126.odd":  {
                          "nl":  "Nemo",
                          "de":  "Nemo",
                          "fr":  "Némo",
                          "es":  "Nemo"
                      },
    "ooo.q.126.group":  {
                            "nl":  "Toy Story-personages",
                            "de":  "Toy Story-Charaktere",
                            "fr":  "Personnages de Toy Story",
                            "es":  "Personajes de Toy Story"
                        },
    "ooo.q.126.explanation":  {
                                  "nl":  "De andere drie zijn personages uit Toy Story; Nemo komt uit Finding Nemo.",
                                  "de":  "Die anderen drei sind Charaktere aus Toy Story; Nemo stammt aus Finding Nemo.",
                                  "fr":  "Les trois autres sont des personnages de Toy Story ; Nemo vient de Finding Nemo.",
                                  "es":  "Los otros tres son personajes de Toy Story; Nemo es de Buscando a Nemo."
                              },
    "ooo.q.127.choice.0":  {
                               "nl":  "Darth Vader",
                               "de":  "Darth Vader",
                               "fr":  "Dark Vador",
                               "es":  "Darth Vader"
                           },
    "ooo.q.127.choice.1":  {
                               "nl":  "Lucas Skywalker",
                               "de":  "Luke Skywalker",
                               "fr":  "Luc Skywalker",
                               "es":  "Lucas Skywalker"
                           },
    "ooo.q.127.choice.2":  {
                               "nl":  "Joda",
                               "de":  "Yoda",
                               "fr":  "Yoda",
                               "es":  "Yoda"
                           },
    "ooo.q.127.choice.3":  {
                               "nl":  "Harry Potter",
                               "de":  "Harry Potter",
                               "fr":  "Harry Potter",
                               "es":  "Harry potter"
                           },
    "ooo.q.127.odd":  {
                          "nl":  "Harry Potter",
                          "de":  "Harry Potter",
                          "fr":  "Harry Potter",
                          "es":  "Harry potter"
                      },
    "ooo.q.127.group":  {
                            "nl":  "Star Wars-personages",
                            "de":  "Star Wars-Charaktere",
                            "fr":  "Personnages de Star Wars",
                            "es":  "personajes de la guerra de las galaxias"
                        },
    "ooo.q.127.explanation":  {
                                  "nl":  "De andere drie zijn personages uit Star Wars; Harry Potter behoort tot een ander fictief universum.",
                                  "de":  "Die anderen drei sind Charaktere aus Star Wars; Harry Potter gehört zu einem anderen fiktiven Universum.",
                                  "fr":  "Les trois autres sont des personnages de Star Wars ; Harry Potter appartient à un autre univers fictif.",
                                  "es":  "Los otros tres son personajes de Star Wars; Harry Potter pertenece a otro universo ficticio."
                              },
    "ooo.q.128.choice.0":  {
                               "nl":  "Walter Wit",
                               "de":  "Walter Weiß",
                               "fr":  "Walter Blanc",
                               "es":  "Walter Blanco"
                           },
    "ooo.q.128.choice.1":  {
                               "nl":  "Jesse Rozeman",
                               "de":  "Jesse Pinkman",
                               "fr":  "Jesse Pinkman",
                               "es":  "Jesse Pinkman"
                           },
    "ooo.q.128.choice.2":  {
                               "nl":  "Saul Goodman",
                               "de":  "Saul Goodman",
                               "fr":  "Saul Goodman",
                               "es":  "Saúl Goodman"
                           },
    "ooo.q.128.choice.3":  {
                               "nl":  "Sheldon Kuiper",
                               "de":  "Sheldon Cooper",
                               "fr":  "Sheldon Cooper",
                               "es":  "Sheldon Cooper"
                           },
    "ooo.q.128.odd":  {
                          "nl":  "Sheldon Kuiper",
                          "de":  "Sheldon Cooper",
                          "fr":  "Sheldon Cooper",
                          "es":  "Sheldon Cooper"
                      },
    "ooo.q.128.group":  {
                            "nl":  "Breaking Bad-personages",
                            "de":  "Breaking Bad-Charaktere",
                            "fr":  "Personnages de Breaking Bad",
                            "es":  "Personajes de Breaking Bad"
                        },
    "ooo.q.128.explanation":  {
                                  "nl":  "De andere drie verschijnen in Breaking Bad; Sheldon Cooper komt uit The Big Bang Theory.",
                                  "de":  "Die anderen drei erscheinen in Breaking Bad; Sheldon Cooper stammt aus The Big Bang Theory.",
                                  "fr":  "Les trois autres apparaissent dans Breaking Bad ; Sheldon Cooper est de The Big Bang Theory.",
                                  "es":  "Los otros tres aparecen en Breaking Bad; Sheldon Cooper es de The Big Bang Theory."
                              },
    "ooo.q.129.choice.0":  {
                               "nl":  "Assepoester",
                               "de":  "Aschenputtel",
                               "fr":  "Cendrillon",
                               "es":  "Cenicienta"
                           },
    "ooo.q.129.choice.1":  {
                               "nl":  "Belle",
                               "de":  "Belle",
                               "fr":  "Belle",
                               "es":  "Bella"
                           },
    "ooo.q.129.choice.2":  {
                               "nl":  "Ariël",
                               "de":  "Ariel",
                               "fr":  "Ariel",
                               "es":  "Ariel"
                           },
    "ooo.q.129.choice.3":  {
                               "nl":  "SpongeBob SquarePants",
                               "de":  "SpongeBob Schwammkopf",
                               "fr":  "Bob l\u0027éponge",
                               "es":  "Bob Esponja"
                           },
    "ooo.q.129.odd":  {
                          "nl":  "SpongeBob SquarePants",
                          "de":  "SpongeBob Schwammkopf",
                          "fr":  "Bob l\u0027éponge",
                          "es":  "Bob Esponja"
                      },
    "ooo.q.129.group":  {
                            "nl":  "Disney-prinsessen",
                            "de":  "Disney-Prinzessinnen",
                            "fr":  "Princesses Disney",
                            "es":  "princesas disney"
                        },
    "ooo.q.129.explanation":  {
                                  "nl":  "De andere drie zijn Disney-prinsessen; SpongeBob is een stripfiguur die onder de zee leeft.",
                                  "de":  "Die anderen drei sind Disney-Prinzessinnen; SpongeBob ist eine Zeichentrickfigur, die unter dem Meer lebt.",
                                  "fr":  "Les trois autres sont des princesses Disney ; Bob l\u0027éponge est un personnage de dessin animé qui vit sous la mer.",
                                  "es":  "Las otras tres son princesas de Disney; Bob Esponja es un personaje de dibujos animados que vive bajo el mar."
                              },
    "ooo.q.130.choice.0":  {
                               "nl":  "Jon Sneeuw",
                               "de":  "Jon Schnee",
                               "fr":  "Jon Neige",
                               "es":  "Jon Nieve"
                           },
    "ooo.q.130.choice.1":  {
                               "nl":  "Daenerys Targaryen",
                               "de":  "Daenerys Targaryen",
                               "fr":  "Daenerys Targaryen",
                               "es":  "Daenerys Targaryen"
                           },
    "ooo.q.130.choice.2":  {
                               "nl":  "Tyrion Lannister",
                               "de":  "Tyrion Lannister",
                               "fr":  "Tyrion Lannister",
                               "es":  "Tyrion Lannister"
                           },
    "ooo.q.130.choice.3":  {
                               "nl":  "Jac Sparrow",
                               "de":  "Jack Sparrow",
                               "fr":  "Jack Sparrow",
                               "es":  "Gorrión"
                           },
    "ooo.q.130.odd":  {
                          "nl":  "Jac Sparrow",
                          "de":  "Jack Sparrow",
                          "fr":  "Jack Sparrow",
                          "es":  "Gorrión"
                      },
    "ooo.q.130.group":  {
                            "nl":  "Game of Thrones-personages",
                            "de":  "Game of Thrones-Charaktere",
                            "fr":  "Personnages de Game of Thrones",
                            "es":  "Personajes de Juego de Tronos"
                        },
    "ooo.q.130.explanation":  {
                                  "nl":  "De andere drie zijn personages uit Game of Thrones; Jack Sparrow komt uit Pirates of the Caribbean.",
                                  "de":  "Die anderen drei sind Charaktere aus Game of Thrones; Jack Sparrow stammt aus Fluch der Karibik.",
                                  "fr":  "Les trois autres sont des personnages de Game of Thrones ; Jack Sparrow vient de Pirates des Caraïbes.",
                                  "es":  "Los otros tres son personajes de Juego de Tronos; Jack Sparrow es de Piratas del Caribe."
                              },
    "ooo.q.131.choice.0":  {
                               "nl":  "Frodo Balings",
                               "de":  "Frodo Beutlin",
                               "fr":  "Frodon Baggins",
                               "es":  "Frodo Bolsón"
                           },
    "ooo.q.131.choice.1":  {
                               "nl":  "Gandalf",
                               "de":  "Gandalf",
                               "fr":  "Gandalf",
                               "es":  "Gandalf"
                           },
    "ooo.q.131.choice.2":  {
                               "nl":  "Aragorn",
                               "de":  "Aragorn",
                               "fr":  "Aragorn",
                               "es":  "Aragorn"
                           },
    "ooo.q.131.choice.3":  {
                               "nl":  "Perkamentus",
                               "de":  "Dumbledore",
                               "fr":  "Dumbledore",
                               "es":  "Dumbledore"
                           },
    "ooo.q.131.odd":  {
                          "nl":  "Perkamentus",
                          "de":  "Dumbledore",
                          "fr":  "Dumbledore",
                          "es":  "Dumbledore"
                      },
    "ooo.q.131.group":  {
                            "nl":  "De Lord of the Rings-personages",
                            "de":  "Die Charaktere des Herrn der Ringe",
                            "fr":  "Les personnages du Seigneur des Anneaux",
                            "es":  "Personajes de El Señor de los Anillos"
                        },
    "ooo.q.131.explanation":  {
                                  "nl":  "De andere drie komen uit The Lord of the Rings; Perkamentus komt uit Harry Potter.",
                                  "de":  "Die anderen drei stammen aus „Der Herr der Ringe“; Dumbledore stammt aus Harry Potter.",
                                  "fr":  "Les trois autres sont du Seigneur des Anneaux ; Dumbledore vient de Harry Potter.",
                                  "es":  "Los otros tres son de El Señor de los Anillos; Dumbledore es de Harry Potter."
                              },
    "ooo.q.132.choice.0":  {
                               "nl":  "Monica Geller",
                               "de":  "Monica Geller",
                               "fr":  "Monique Geller",
                               "es":  "Mónica Geller"
                           },
    "ooo.q.132.choice.1":  {
                               "nl":  "Rachel Groen",
                               "de":  "Rachel Green",
                               "fr":  "Rachel Green",
                               "es":  "Raquel Verde"
                           },
    "ooo.q.132.choice.2":  {
                               "nl":  "Phoebe Buffay",
                               "de":  "Phoebe Buffay",
                               "fr":  "Phoebe Buffay",
                               "es":  "Phoebe Buffay"
                           },
    "ooo.q.132.choice.3":  {
                               "nl":  "Carry Bradshaw",
                               "de":  "Carrie Bradshaw",
                               "fr":  "Carrie Bradshaw",
                               "es":  "Carrie Bradshaw"
                           },
    "ooo.q.132.odd":  {
                          "nl":  "Carry Bradshaw",
                          "de":  "Carrie Bradshaw",
                          "fr":  "Carrie Bradshaw",
                          "es":  "Carrie Bradshaw"
                      },
    "ooo.q.132.group":  {
                            "nl":  "Vrienden karakters",
                            "de":  "Charaktere von Freunden",
                            "fr":  "Personnages d\u0027amis",
                            "es":  "Personajes amigos"
                        },
    "ooo.q.132.explanation":  {
                                  "nl":  "De andere drie zijn personages uit Friends; Carrie Bradshaw komt uit Sex and the City.",
                                  "de":  "Die anderen drei sind Charaktere aus Friends; Carrie Bradshaw ist aus Sex and the City.",
                                  "fr":  "Les trois autres sont des personnages de Friends ; Carrie Bradshaw est de Sex and the City.",
                                  "es":  "Los otros tres son personajes de Friends; Carrie Bradshaw es de Sex and the City."
                              },
    "ooo.q.133.choice.0":  {
                               "nl":  "IJzeren man",
                               "de":  "Iron Man",
                               "fr":  "Homme de fer",
                               "es":  "Hombre de hierro"
                           },
    "ooo.q.133.choice.1":  {
                               "nl":  "Thor",
                               "de":  "Thor",
                               "fr":  "Thor",
                               "es":  "Thor"
                           },
    "ooo.q.133.choice.2":  {
                               "nl":  "Zwarte Panter",
                               "de":  "Schwarzer Panther",
                               "fr":  "Panthère noire",
                               "es":  "Pantera negra"
                           },
    "ooo.q.133.choice.3":  {
                               "nl":  "Batman",
                               "de":  "Batman",
                               "fr":  "Batman",
                               "es":  "Batman"
                           },
    "ooo.q.133.odd":  {
                          "nl":  "Batman",
                          "de":  "Batman",
                          "fr":  "Batman",
                          "es":  "Batman"
                      },
    "ooo.q.133.group":  {
                            "nl":  "Marvel-superhelden",
                            "de":  "Marvel-Superhelden",
                            "fr":  "Super-héros Marvel",
                            "es":  "superhéroes marvel"
                        },
    "ooo.q.133.explanation":  {
                                  "nl":  "De andere drie zijn Marvel-superhelden; Batman is een DC-personage.",
                                  "de":  "Die anderen drei sind Marvel-Superhelden; Batman ist ein DC-Charakter.",
                                  "fr":  "Les trois autres sont des super-héros Marvel ; Batman est un personnage de DC.",
                                  "es":  "Los otros tres son superhéroes de Marvel; Batman es un personaje de DC."
                              },
    "ooo.q.134.choice.0":  {
                               "nl":  "De Leeuwenkoning",
                               "de":  "Der König der Löwen",
                               "fr":  "Le Roi Lion",
                               "es":  "El Rey León"
                           },
    "ooo.q.134.choice.1":  {
                               "nl":  "Bevroren",
                               "de":  "Gefroren",
                               "fr":  "Congelé",
                               "es":  "Congelado"
                           },
    "ooo.q.134.choice.2":  {
                               "nl":  "Moana",
                               "de":  "Vaiana",
                               "fr":  "Moana",
                               "es":  "Moana"
                           },
    "ooo.q.134.choice.3":  {
                               "nl":  "De ongelofelijken",
                               "de":  "Die Unglaublichen",
                               "fr":  "Les Indestructibles",
                               "es":  "Los Increíbles"
                           },
    "ooo.q.134.odd":  {
                          "nl":  "De ongelofelijken",
                          "de":  "Die Unglaublichen",
                          "fr":  "Les Indestructibles",
                          "es":  "Los Increíbles"
                      },
    "ooo.q.134.group":  {
                            "nl":  "Disney-animatiemusicals",
                            "de":  "Disney-Animationsmusicals",
                            "fr":  "Comédies musicales animées Disney",
                            "es":  "musicales animados de disney"
                        },
    "ooo.q.134.explanation":  {
                                  "nl":  "De andere drie zijn geanimeerde Disney-musicals; The Incredibles is een geanimeerde superheldenfilm.",
                                  "de":  "Die anderen drei sind animierte Disney-Musicals; „Die Unglaublichen“ ist ein animierter Superheldenfilm.",
                                  "fr":  "Les trois autres sont des comédies musicales animées de Disney ; Les Indestructibles est un film d\u0027animation de super-héros.",
                                  "es":  "Los otros tres son musicales animados de Disney; Los Increíbles es una película animada de superhéroes."
                              },
    "ooo.q.135.choice.0":  {
                               "nl":  "Dunder Mifflin",
                               "de":  "Dunder Mifflin",
                               "fr":  "Dunder Mifflin",
                               "es":  "Dunder Mifflin"
                           },
    "ooo.q.135.choice.1":  {
                               "nl":  "Afdeling Pawnee Parks",
                               "de":  "Pawnee Parks-Abteilung",
                               "fr":  "Département des parcs de Pawnee",
                               "es":  "Departamento de Parques de Pawnee"
                           },
    "ooo.q.135.choice.2":  {
                               "nl":  "Centraal Perk",
                               "de":  "Zentraler Vorteil",
                               "fr":  "Avantage central",
                               "es":  "Beneficio central"
                           },
    "ooo.q.135.choice.3":  {
                               "nl":  "De dagelijkse planeet",
                               "de":  "Der tägliche Planet",
                               "fr":  "La planète quotidienne",
                               "es":  "El planeta diario"
                           },
    "ooo.q.135.odd":  {
                          "nl":  "De dagelijkse planeet",
                          "de":  "Der tägliche Planet",
                          "fr":  "La planète quotidienne",
                          "es":  "El planeta diario"
                      },
    "ooo.q.135.group":  {
                            "nl":  "fictieve werkplekken of ontmoetingsplaatsen in sitcoms",
                            "de":  "fiktive Arbeitsplätze oder Treffpunkte in Sitcoms",
                            "fr":  "lieux de travail ou lieux de rencontre fictifs dans les sitcoms",
                            "es":  "lugares de trabajo ficticios o lugares de reunión en comedias de situación"
                        },
    "ooo.q.135.explanation":  {
                                  "nl":  "De andere drie zijn instellingen uit sitcoms; The Daily Planet is een krant in de Superman-verhalen.",
                                  "de":  "Die anderen drei sind Schauplätze aus Sitcoms; Der Daily Planet ist eine Zeitung in den Superman-Geschichten.",
                                  "fr":  "Les trois autres sont des décors de sitcoms ; Le Daily Planet est un journal consacré aux histoires de Superman.",
                                  "es":  "Los otros tres son escenarios de comedias de situación; El Daily Planet es un periódico de las historias de Superman."
                              },
    "ooo.q.136.choice.0":  {
                               "nl":  "Mickey Mouse",
                               "de":  "Micky Maus",
                               "fr":  "Mickey la souris",
                               "es":  "Ratón mickey"
                           },
    "ooo.q.136.choice.1":  {
                               "nl":  "Donald Duck",
                               "de":  "Donald Duck",
                               "fr":  "Donald Canard",
                               "es":  "Pato donald"
                           },
    "ooo.q.136.choice.2":  {
                               "nl":  "Gek",
                               "de":  "Doof",
                               "fr":  "Dingo",
                               "es":  "Tonto"
                           },
    "ooo.q.136.choice.3":  {
                               "nl":  "Shrek",
                               "de":  "Shrek",
                               "fr":  "Shrek",
                               "es":  "Shrek"
                           },
    "ooo.q.136.odd":  {
                          "nl":  "Shrek",
                          "de":  "Shrek",
                          "fr":  "Shrek",
                          "es":  "Shrek"
                      },
    "ooo.q.136.group":  {
                            "nl":  "Disney-personages",
                            "de":  "Disney-Figuren",
                            "fr":  "Personnages Disney",
                            "es":  "personajes de disney"
                        },
    "ooo.q.136.explanation":  {
                                  "nl":  "De andere drie zijn Disney-personages; Shrek is van DreamWorks.",
                                  "de":  "Die anderen drei sind Disney-Figuren; Shrek ist von DreamWorks.",
                                  "fr":  "Les trois autres sont des personnages de Disney ; Shrek vient de DreamWorks.",
                                  "es":  "Los otros tres son personajes de Disney; Shrek es de DreamWorks."
                              },
    "ooo.q.137.choice.0":  {
                               "nl":  "Peter Parker",
                               "de":  "Peter Parker",
                               "fr":  "Pierre Parker",
                               "es":  "Peter Parker"
                           },
    "ooo.q.137.choice.1":  {
                               "nl":  "Bruce Wayne",
                               "de":  "Bruce Wayne",
                               "fr":  "Bruce Wayne",
                               "es":  "Bruce wayne"
                           },
    "ooo.q.137.choice.2":  {
                               "nl":  "Clark Kent",
                               "de":  "Clark Kent",
                               "fr":  "Clark Kent",
                               "es":  "Clark Kent"
                           },
    "ooo.q.137.choice.3":  {
                               "nl":  "Lucas Skywalker",
                               "de":  "Luke Skywalker",
                               "fr":  "Luc Skywalker",
                               "es":  "Lucas Skywalker"
                           },
    "ooo.q.137.odd":  {
                          "nl":  "Lucas Skywalker",
                          "de":  "Luke Skywalker",
                          "fr":  "Luc Skywalker",
                          "es":  "Lucas Skywalker"
                      },
    "ooo.q.137.group":  {
                            "nl":  "superheldenidentiteiten uit stripboeken",
                            "de":  "Identitäten von Comic-Superhelden",
                            "fr":  "identités de super-héros de bandes dessinées",
                            "es":  "identidades de superhéroes de cómic"
                        },
    "ooo.q.137.explanation":  {
                                  "nl":  "De andere drie zijn de geheime identiteiten van superhelden uit stripboeken; Luke Skywalker is een Star Wars-held.",
                                  "de":  "Die anderen drei sind die geheimen Identitäten von Comic-Superhelden; Luke Skywalker ist ein Star Wars-Held.",
                                  "fr":  "Les trois autres sont les identités secrètes des super-héros de bandes dessinées ; Luke Skywalker est un héros de Star Wars.",
                                  "es":  "Los otros tres son las identidades secretas de los superhéroes de los cómics; Luke Skywalker es un héroe de Star Wars."
                              },
    "ooo.q.138.choice.0":  {
                               "nl":  "Elf",
                               "de":  "Elf",
                               "fr":  "Onze",
                               "es":  "Once"
                           },
    "ooo.q.138.choice.1":  {
                               "nl":  "Mike Wieler",
                               "de":  "Mike Wheeler",
                               "fr":  "Mike Wheeler",
                               "es":  "Mike Wheeler"
                           },
    "ooo.q.138.choice.2":  {
                               "nl":  "Dustin Henderson",
                               "de":  "Dustin Henderson",
                               "fr":  "Dustin Henderson",
                               "es":  "David Henderson"
                           },
    "ooo.q.138.choice.3":  {
                               "nl":  "Sheldon Kuiper",
                               "de":  "Sheldon Cooper",
                               "fr":  "Sheldon Cooper",
                               "es":  "Sheldon Cooper"
                           },
    "ooo.q.138.odd":  {
                          "nl":  "Sheldon Kuiper",
                          "de":  "Sheldon Cooper",
                          "fr":  "Sheldon Cooper",
                          "es":  "Sheldon Cooper"
                      },
    "ooo.q.138.group":  {
                            "nl":  "Stranger Things-personages",
                            "de":  "Stranger Things-Charaktere",
                            "fr":  "Personnages de Stranger Things",
                            "es":  "Personajes de cosas más extrañas"
                        },
    "ooo.q.138.explanation":  {
                                  "nl":  "De andere drie zijn personages uit Stranger Things; Sheldon Cooper komt uit The Big Bang Theory.",
                                  "de":  "Die anderen drei sind Charaktere aus Stranger Things; Sheldon Cooper stammt aus The Big Bang Theory.",
                                  "fr":  "Les trois autres sont des personnages de Stranger Things ; Sheldon Cooper est de The Big Bang Theory.",
                                  "es":  "Los otros tres son personajes de Stranger Things; Sheldon Cooper es de The Big Bang Theory."
                              },
    "ooo.q.139.choice.0":  {
                               "nl":  "Elsa",
                               "de":  "Elsa",
                               "fr":  "Elsa",
                               "es":  "Elsa"
                           },
    "ooo.q.139.choice.1":  {
                               "nl":  "Moana",
                               "de":  "Vaiana",
                               "fr":  "Moana",
                               "es":  "Moana"
                           },
    "ooo.q.139.choice.2":  {
                               "nl":  "Belle",
                               "de":  "Belle",
                               "fr":  "Belle",
                               "es":  "Bella"
                           },
    "ooo.q.139.choice.3":  {
                               "nl":  "Buzz Lichtjaar",
                               "de":  "Buzz Lightyear",
                               "fr":  "Buzz l\u0027Éclair",
                               "es":  "Buzz Lightyear"
                           },
    "ooo.q.139.odd":  {
                          "nl":  "Buzz Lichtjaar",
                          "de":  "Buzz Lightyear",
                          "fr":  "Buzz l\u0027Éclair",
                          "es":  "Buzz Lightyear"
                      },
    "ooo.q.139.group":  {
                            "nl":  "vrouwelijke hoofdrolspelers van Disney-animatiefilms",
                            "de":  "weibliche Protagonistinnen von Disney-Animationsfilmen",
                            "fr":  "protagonistes féminines des films d\u0027animation Disney",
                            "es":  "protagonistas femeninas de las películas animadas de Disney"
                        },
    "ooo.q.139.explanation":  {
                                  "nl":  "De andere drie zijn vrouwelijke hoofdrolspelers in Disney-animatiefilms; Buzz Lightyear is een Toy Story-personage.",
                                  "de":  "Die anderen drei sind weibliche Protagonistinnen in Disney-Animationsfilmen; Buzz Lightyear ist eine Toy Story-Figur.",
                                  "fr":  "Les trois autres sont des protagonistes féminines de films d\u0027animation Disney ; Buzz l\u0027Éclair est un personnage de Toy Story.",
                                  "es":  "Las otras tres son protagonistas femeninas de películas animadas de Disney; Buzz Lightyear es un personaje de Toy Story."
                              },
    "ooo.q.140.choice.0":  {
                               "nl":  "Grappenmaker",
                               "de":  "Joker",
                               "fr":  "Joker",
                               "es":  "Comodín"
                           },
    "ooo.q.140.choice.1":  {
                               "nl":  "Lex Luthor",
                               "de":  "Lex Luthor",
                               "fr":  "Lex Luthor",
                               "es":  "Lex Luthor"
                           },
    "ooo.q.140.choice.2":  {
                               "nl":  "Groene Goblin",
                               "de":  "Grüner Kobold",
                               "fr":  "Bouffon Vert",
                               "es":  "Duende verde"
                           },
    "ooo.q.140.choice.3":  {
                               "nl":  "Voldemort",
                               "de":  "Voldemort",
                               "fr":  "Voldemort",
                               "es":  "Voldemort"
                           },
    "ooo.q.140.odd":  {
                          "nl":  "Voldemort",
                          "de":  "Voldemort",
                          "fr":  "Voldemort",
                          "es":  "Voldemort"
                      },
    "ooo.q.140.group":  {
                            "nl":  "superschurken uit stripboeken",
                            "de":  "Comic-Superschurken",
                            "fr":  "super-vilains de bandes dessinées",
                            "es":  "supervillanos del cómic"
                        },
    "ooo.q.140.explanation":  {
                                  "nl":  "De andere drie zijn superschurken uit stripboeken; Voldemort komt uit Harry Potter.",
                                  "de":  "Die anderen drei sind Comic-Superschurken; Voldemort stammt aus Harry Potter.",
                                  "fr":  "Les trois autres sont des super-vilains de bandes dessinées ; Voldemort vient de Harry Potter.",
                                  "es":  "Los otros tres son supervillanos de cómics; Voldemort es de Harry Potter."
                              },
    "ooo.q.141.choice.0":  {
                               "nl":  "Minecraft",
                               "de":  "Minecraft",
                               "fr":  "Minecraft",
                               "es":  "Minecraft"
                           },
    "ooo.q.141.choice.1":  {
                               "nl":  "Fortnite",
                               "de":  "Fortnite",
                               "fr":  "Fortnite",
                               "es":  "Fortnite"
                           },
    "ooo.q.141.choice.2":  {
                               "nl":  "Roblox",
                               "de":  "Roblox",
                               "fr":  "Roblox",
                               "es":  "Roblox"
                           },
    "ooo.q.141.choice.3":  {
                               "nl":  "Harry Potter",
                               "de":  "Harry Potter",
                               "fr":  "Harry Potter",
                               "es":  "Harry potter"
                           },
    "ooo.q.141.odd":  {
                          "nl":  "Harry Potter",
                          "de":  "Harry Potter",
                          "fr":  "Harry Potter",
                          "es":  "Harry potter"
                      },
    "ooo.q.141.group":  {
                            "nl":  "videogames of gamingplatforms",
                            "de":  "Videospiele oder Gaming-Plattformen",
                            "fr":  "jeux vidéo ou plateformes de jeux",
                            "es":  "videojuegos o plataformas de juego"
                        },
    "ooo.q.141.explanation":  {
                                  "nl":  "De andere drie zijn videogames of een gamingplatform; Harry Potter is een boek- en filmpersonage.",
                                  "de":  "Die anderen drei sind Videospiele oder eine Spieleplattform; Harry Potter ist eine Buch- und Filmfigur.",
                                  "fr":  "Les trois autres sont des jeux vidéo ou une plateforme de jeux ; Harry Potter est un personnage de livre et de film.",
                                  "es":  "Los otros tres son videojuegos o una plataforma de juegos; Harry Potter es un personaje de libros y películas."
                              },
    "ooo.q.142.choice.0":  {
                               "nl":  "Mario",
                               "de":  "Mario",
                               "fr":  "Mario",
                               "es":  "Mario"
                           },
    "ooo.q.142.choice.1":  {
                               "nl":  "Luigi",
                               "de":  "Luigi",
                               "fr":  "Luigi",
                               "es":  "Luigi"
                           },
    "ooo.q.142.choice.2":  {
                               "nl":  "Prinses Perzik",
                               "de":  "Prinzessin Peach",
                               "fr":  "Princesse Pêche",
                               "es":  "Princesa durazno"
                           },
    "ooo.q.142.choice.3":  {
                               "nl":  "Pikachu",
                               "de":  "Pikachu",
                               "fr":  "Pikachu",
                               "es":  "Pikachu"
                           },
    "ooo.q.142.odd":  {
                          "nl":  "Pikachu",
                          "de":  "Pikachu",
                          "fr":  "Pikachu",
                          "es":  "Pikachu"
                      },
    "ooo.q.142.group":  {
                            "nl":  "Super Mario-personages",
                            "de":  "Super Mario-Charaktere",
                            "fr":  "Personnages de Super Mario",
                            "es":  "personajes de super mario"
                        },
    "ooo.q.142.explanation":  {
                                  "nl":  "De andere drie zijn personages uit Super Mario; Pikachu komt van Pokémon.",
                                  "de":  "Die anderen drei sind Charaktere aus Super Mario; Pikachu stammt von Pokémon.",
                                  "fr":  "Les trois autres sont des personnages de Super Mario ; Pikachu vient de Pokémon.",
                                  "es":  "Los otros tres son personajes de Super Mario; Pikachu es de Pokémon."
                              },
    "ooo.q.143.choice.0":  {
                               "nl":  "Pikachu",
                               "de":  "Pikachu",
                               "fr":  "Pikachu",
                               "es":  "Pikachu"
                           },
    "ooo.q.143.choice.1":  {
                               "nl":  "Charmander",
                               "de":  "Glumanda",
                               "fr":  "Salamèche",
                               "es":  "Charmander"
                           },
    "ooo.q.143.choice.2":  {
                               "nl":  "Bulbasaur",
                               "de":  "Bisasam",
                               "fr":  "Bulbizarre",
                               "es":  "Bulbasaur"
                           },
    "ooo.q.143.choice.3":  {
                               "nl":  "Batman",
                               "de":  "Batman",
                               "fr":  "Batman",
                               "es":  "Batman"
                           },
    "ooo.q.143.odd":  {
                          "nl":  "Batman",
                          "de":  "Batman",
                          "fr":  "Batman",
                          "es":  "Batman"
                      },
    "ooo.q.143.group":  {
                            "nl":  "Pokémon-personages",
                            "de":  "Pokémon-Charaktere",
                            "fr":  "Personnages Pokémon",
                            "es":  "personajes pokemon"
                        },
    "ooo.q.143.explanation":  {
                                  "nl":  "De andere drie zijn Pokémon; Batman is een superheld uit DC Comics.",
                                  "de":  "Die anderen drei sind Pokémon; Batman ist ein Superheld von DC Comics.",
                                  "fr":  "Les trois autres sont des Pokémon ; Batman est un super-héros de DC Comics.",
                                  "es":  "Los otros tres son Pokémon; Batman es un superhéroe de DC Comics."
                              },
    "ooo.q.144.choice.0":  {
                               "nl":  "Mario Kart",
                               "de":  "Mario Kart",
                               "fr":  "Mario Kart",
                               "es":  "Mario Kart"
                           },
    "ooo.q.144.choice.1":  {
                               "nl":  "Gran Turismo",
                               "de":  "Gran Turismo",
                               "fr":  "Gran Turisme",
                               "es":  "Gran Turismo"
                           },
    "ooo.q.144.choice.2":  {
                               "nl":  "Forza Horizon",
                               "de":  "Forza Horizon",
                               "fr":  "Forza Horizon",
                               "es":  "Forza Horizonte"
                           },
    "ooo.q.144.choice.3":  {
                               "nl":  "Dierenkruising",
                               "de":  "Tierkreuzung",
                               "fr":  "Traversée d\u0027animaux",
                               "es":  "Cruce de animales"
                           },
    "ooo.q.144.odd":  {
                          "nl":  "Dierenkruising",
                          "de":  "Tierkreuzung",
                          "fr":  "Traversée d\u0027animaux",
                          "es":  "Cruce de animales"
                      },
    "ooo.q.144.group":  {
                            "nl":  "race-videogames",
                            "de":  "Rennvideospiele",
                            "fr":  "jeux vidéo de course",
                            "es":  "videojuegos de carreras"
                        },
    "ooo.q.144.explanation":  {
                                  "nl":  "De andere drie zijn racespellen; Animal Crossing is een levenssimulatiespel.",
                                  "de":  "Die anderen drei sind Rennspiele; Animal Crossing ist ein Lebenssimulationsspiel.",
                                  "fr":  "Les trois autres sont des jeux de course ; Animal Crossing est un jeu de simulation de vie.",
                                  "es":  "Los otros tres son juegos de carreras; Animal Crossing es un juego de simulación de vida."
                              },
    "ooo.q.145.choice.0":  {
                               "nl":  "Plichtsroep",
                               "de":  "Call of Duty",
                               "fr":  "Appel du devoir",
                               "es":  "Llamado del deber"
                           },
    "ooo.q.145.choice.1":  {
                               "nl":  "Halo",
                               "de":  "Halo",
                               "fr":  "Halo",
                               "es":  "Aureola"
                           },
    "ooo.q.145.choice.2":  {
                               "nl":  "Fortnite",
                               "de":  "Fortnite",
                               "fr":  "Fortnite",
                               "es":  "Fortnite"
                           },
    "ooo.q.145.choice.3":  {
                               "nl":  "Snoep Crush",
                               "de":  "Candy Crush",
                               "fr":  "Bonbons écrasés",
                               "es":  "Caramelo aplastar"
                           },
    "ooo.q.145.odd":  {
                          "nl":  "Snoep Crush",
                          "de":  "Candy Crush",
                          "fr":  "Bonbons écrasés",
                          "es":  "Caramelo aplastar"
                      },
    "ooo.q.145.group":  {
                            "nl":  "actie- of schietspellen",
                            "de":  "Action- oder Shooter-Spiele",
                            "fr":  "jeux d\u0027action ou de tir",
                            "es":  "juegos de acción o shooter"
                        },
    "ooo.q.145.explanation":  {
                                  "nl":  "De andere drie zijn actieschietspellen; Candy Crush is een drie-op-een-rij-puzzelspel.",
                                  "de":  "Die anderen drei sind Action-Shooter-Spiele; Candy Crush ist ein Match-Three-Puzzlespiel.",
                                  "fr":  "Les trois autres sont des jeux de tir d\u0027action ; Candy Crush est un jeu de puzzle de type série de trois.",
                                  "es":  "Los otros tres son juegos de acción y disparos; Candy Crush es un juego de rompecabezas de combinaciones."
                              },
    "ooo.q.146.choice.0":  {
                               "nl":  "Minecraft",
                               "de":  "Minecraft",
                               "fr":  "Minecraft",
                               "es":  "Minecraft"
                           },
    "ooo.q.146.choice.1":  {
                               "nl":  "Terraria",
                               "de":  "Terrarien",
                               "fr":  "Terrariums",
                               "es":  "Terrarios"
                           },
    "ooo.q.146.choice.2":  {
                               "nl":  "Roblox",
                               "de":  "Roblox",
                               "fr":  "Roblox",
                               "es":  "Roblox"
                           },
    "ooo.q.146.choice.3":  {
                               "nl":  "FIFA",
                               "de":  "FIFA",
                               "fr":  "FIFA",
                               "es":  "Fifa"
                           },
    "ooo.q.146.odd":  {
                          "nl":  "FIFA",
                          "de":  "FIFA",
                          "fr":  "FIFA",
                          "es":  "Fifa"
                      },
    "ooo.q.146.group":  {
                            "nl":  "games gericht op het bouwen of door gebruikers gecreëerde werelden",
                            "de":  "Spiele, die sich auf den Aufbau oder vom Benutzer erstellte Welten konzentrieren",
                            "fr":  "jeux axés sur la construction de mondes ou créés par l\u0027utilisateur",
                            "es":  "Juegos centrados en la construcción o mundos creados por el usuario."
                        },
    "ooo.q.146.explanation":  {
                                  "nl":  "De andere drie richten zich op het bouwen of door gebruikers gecreëerde werelden; FIFA is een voetbalsimulatie.",
                                  "de":  "Die anderen drei konzentrieren sich auf den Aufbau oder vom Benutzer erstellte Welten; FIFA ist eine Fußballsimulation.",
                                  "fr":  "Les trois autres se concentrent sur la construction de mondes créés par les utilisateurs ; FIFA est une simulation de football.",
                                  "es":  "Los otros tres se centran en la construcción de mundos creados por los usuarios; FIFA es una simulación de fútbol."
                              },
    "ooo.q.147.choice.0":  {
                               "nl":  "De Sims",
                               "de":  "Die Sims",
                               "fr":  "Les Sims",
                               "es":  "Los Sims"
                           },
    "ooo.q.147.choice.1":  {
                               "nl":  "Dierenkruising",
                               "de":  "Tierkreuzung",
                               "fr":  "Traversée d\u0027animaux",
                               "es":  "Cruce de animales"
                           },
    "ooo.q.147.choice.2":  {
                               "nl":  "Stardew-vallei",
                               "de":  "Stardew Valley",
                               "fr":  "Vallée des étoiles",
                               "es":  "Valle Stardew"
                           },
    "ooo.q.147.choice.3":  {
                               "nl":  "Dodelijke strijd",
                               "de":  "Mortal Kombat",
                               "fr":  "Combat mortel",
                               "es":  "Mortal kombat"
                           },
    "ooo.q.147.odd":  {
                          "nl":  "Dodelijke strijd",
                          "de":  "Mortal Kombat",
                          "fr":  "Combat mortel",
                          "es":  "Mortal kombat"
                      },
    "ooo.q.147.group":  {
                            "nl":  "levenssimulatiespellen",
                            "de":  "Lebenssimulationsspiele",
                            "fr":  "jeux de simulation de vie",
                            "es":  "juegos de simulación de vida"
                        },
    "ooo.q.147.explanation":  {
                                  "nl":  "De andere drie zijn levenssimulatiespellen; Mortal Kombat is een vechtspel.",
                                  "de":  "Die anderen drei sind Lebenssimulationsspiele; Mortal Kombat ist ein Kampfspiel.",
                                  "fr":  "Les trois autres sont des jeux de simulation de vie ; Mortal Kombat est un jeu de combat.",
                                  "es":  "Los otros tres son juegos de simulación de vida; Mortal Kombat es un juego de lucha."
                              },
    "ooo.q.148.choice.0":  {
                               "nl":  "Grote diefstal auto",
                               "de":  "Grand Theft Auto",
                               "fr":  "Grand Theft Auto",
                               "es":  "Gran robo de auto"
                           },
    "ooo.q.148.choice.1":  {
                               "nl":  "Red Dead-verlossing",
                               "de":  "Red Dead Redemption",
                               "fr":  "Red Dead Rédemption",
                               "es":  "Redención muerta roja"
                           },
    "ooo.q.148.choice.2":  {
                               "nl":  "Maffia",
                               "de":  "Mafia",
                               "fr":  "Mafia",
                               "es":  "Mafia"
                           },
    "ooo.q.148.choice.3":  {
                               "nl":  "Dierenkruising",
                               "de":  "Tierkreuzung",
                               "fr":  "Traversée d\u0027animaux",
                               "es":  "Cruce de animales"
                           },
    "ooo.q.148.odd":  {
                          "nl":  "Dierenkruising",
                          "de":  "Tierkreuzung",
                          "fr":  "Traversée d\u0027animaux",
                          "es":  "Cruce de animales"
                      },
    "ooo.q.148.group":  {
                            "nl":  "misdaadgameserie in de open wereld",
                            "de":  "Open-World-Krimispielserie",
                            "fr":  "série de jeux policiers en monde ouvert",
                            "es":  "serie de juegos de crimen de mundo abierto"
                        },
    "ooo.q.148.explanation":  {
                                  "nl":  "De andere drie zijn misdaadspelseries in de open wereld; Animal Crossing is een levenssimulator.",
                                  "de":  "Bei den anderen drei handelt es sich um Open-World-Krimispielserien; Animal Crossing ist ein Lebenssimulator.",
                                  "fr":  "Les trois autres sont des séries de jeux policiers en monde ouvert ; Animal Crossing est un simulateur de vie.",
                                  "es":  "Los otros tres son series de juegos criminales de mundo abierto; Animal Crossing es un simulador de vida."
                              },
    "ooo.q.149.choice.0":  {
                               "nl":  "Onder ons",
                               "de":  "Unter uns",
                               "fr":  "Parmi nous",
                               "es":  "Entre nosotros"
                           },
    "ooo.q.149.choice.1":  {
                               "nl":  "Herfst jongens",
                               "de":  "Herbst Jungs",
                               "fr":  "Les gars d\u0027automne",
                               "es":  "Chicos de otoño"
                           },
    "ooo.q.149.choice.2":  {
                               "nl":  "Gaar",
                               "de":  "Verkocht",
                               "fr":  "Trop cuit",
                               "es":  "Recocido"
                           },
    "ooo.q.149.choice.3":  {
                               "nl":  "Elden Ring",
                               "de":  "Elden-Ring",
                               "fr":  "Anneau ancien",
                               "es":  "Anillo Elden"
                           },
    "ooo.q.149.odd":  {
                          "nl":  "Elden Ring",
                          "de":  "Elden-Ring",
                          "fr":  "Anneau ancien",
                          "es":  "Anillo Elden"
                      },
    "ooo.q.149.group":  {
                            "nl":  "party- of groepsmultiplayer-spellen",
                            "de":  "Party- oder Gruppen-Multiplayer-Spiele",
                            "fr":  "jeux multijoueurs en groupe ou en groupe",
                            "es":  "juegos multijugador en grupo o en grupo"
                        },
    "ooo.q.149.explanation":  {
                                  "nl":  "De andere drie worden gewoonlijk gespeeld als multiplayer-spellen voor lichte groepen; Elden Ring is een uitdagende actie-RPG.",
                                  "de":  "Die anderen drei werden üblicherweise als leichte Gruppen-Mehrspielerspiele gespielt; Elden Ring ist ein herausforderndes Action-Rollenspiel.",
                                  "fr":  "Les trois autres sont généralement joués sous forme de jeux multijoueurs en groupe léger ; Elden Ring est un RPG d\u0027action stimulant.",
                                  "es":  "Los otros tres se juegan comúnmente como juegos multijugador de grupos ligeros; Elden Ring es un juego de rol de acción desafiante."
                              },
    "ooo.q.150.choice.0":  {
                               "nl":  "De legende van Zelda",
                               "de":  "Die Legende von Zelda",
                               "fr":  "La légende de Zelda",
                               "es":  "La leyenda de Zelda"
                           },
    "ooo.q.150.choice.1":  {
                               "nl":  "Metroid",
                               "de":  "Metroid",
                               "fr":  "Métroïde",
                               "es":  "Metroide"
                           },
    "ooo.q.150.choice.2":  {
                               "nl":  "Dierenkruising",
                               "de":  "Tierkreuzung",
                               "fr":  "Traversée d\u0027animaux",
                               "es":  "Cruce de animales"
                           },
    "ooo.q.150.choice.3":  {
                               "nl":  "De Sims",
                               "de":  "Die Sims",
                               "fr":  "Les Sims",
                               "es":  "Los Sims"
                           },
    "ooo.q.150.odd":  {
                          "nl":  "De Sims",
                          "de":  "Die Sims",
                          "fr":  "Les Sims",
                          "es":  "Los Sims"
                      },
    "ooo.q.150.group":  {
                            "nl":  "Nintendo-gamefranchises",
                            "de":  "Nintendo-Spiele-Franchises",
                            "fr":  "Franchises de jeux Nintendo",
                            "es":  "Franquicias de juegos de Nintendo"
                        },
    "ooo.q.150.explanation":  {
                                  "nl":  "De andere drie zijn Nintendo-gamefranchises; De Sims wordt uitgegeven door Electronic Arts.",
                                  "de":  "Die anderen drei sind Nintendo-Spiele-Franchises; Die Sims wird von Electronic Arts veröffentlicht.",
                                  "fr":  "Les trois autres sont des franchises de jeux Nintendo ; Les Sims est publié par Electronic Arts.",
                                  "es":  "Los otros tres son franquicias de juegos de Nintendo; Los Sims es una publicación de Electronic Arts."
                              },
    "ooo.q.151.choice.0":  {
                               "nl":  "Pac-Man",
                               "de":  "Pac-Man",
                               "fr":  "Pac-Man",
                               "es":  "Pac-Man"
                           },
    "ooo.q.151.choice.1":  {
                               "nl":  "Ruimte-indringers",
                               "de":  "Space Invaders",
                               "fr":  "Envahisseurs de l\u0027espace",
                               "es":  "Invasores espaciales"
                           },
    "ooo.q.151.choice.2":  {
                               "nl":  "Pong",
                               "de":  "Pong",
                               "fr":  "Pong",
                               "es":  "Pong"
                           },
    "ooo.q.151.choice.3":  {
                               "nl":  "De laatste van ons",
                               "de":  "Der Letzte von uns",
                               "fr":  "Le dernier d\u0027entre nous",
                               "es":  "El último de nosotros"
                           },
    "ooo.q.151.odd":  {
                          "nl":  "De laatste van ons",
                          "de":  "Der Letzte von uns",
                          "fr":  "Le dernier d\u0027entre nous",
                          "es":  "El último de nosotros"
                      },
    "ooo.q.151.group":  {
                            "nl":  "klassieke arcadespellen",
                            "de":  "klassische Arcade-Spiele",
                            "fr":  "jeux d\u0027arcade classiques",
                            "es":  "juegos clásicos de arcade"
                        },
    "ooo.q.151.explanation":  {
                                  "nl":  "De andere drie zijn klassieke arcadespellen; The Last of Us is een moderne, verhaalgedreven consolegame.",
                                  "de":  "Die anderen drei sind klassische Arcade-Spiele; The Last of Us ist ein modernes, storybasiertes Konsolenspiel.",
                                  "fr":  "Les trois autres sont des jeux d’arcade classiques ; The Last of Us est un jeu de console moderne basé sur une histoire.",
                                  "es":  "Los otros tres son juegos arcade clásicos; The Last of Us es un juego de consola moderno basado en una historia."
                              },
    "ooo.q.152.choice.0":  {
                               "nl":  "Aloy",
                               "de":  "Aloy",
                               "fr":  "Aloy",
                               "es":  "Aloy"
                           },
    "ooo.q.152.choice.1":  {
                               "nl":  "Lara Croft",
                               "de":  "Lara Croft",
                               "fr":  "Lara Croft",
                               "es":  "Lara Croft"
                           },
    "ooo.q.152.choice.2":  {
                               "nl":  "Nathan Drake",
                               "de":  "Nathan Drake",
                               "fr":  "Nathan Drake",
                               "es":  "Nathan drake"
                           },
    "ooo.q.152.choice.3":  {
                               "nl":  "Kirby",
                               "de":  "Kirby",
                               "fr":  "Kirby",
                               "es":  "Kirby"
                           },
    "ooo.q.152.odd":  {
                          "nl":  "Kirby",
                          "de":  "Kirby",
                          "fr":  "Kirby",
                          "es":  "Kirby"
                      },
    "ooo.q.152.group":  {
                            "nl":  "menselijke hoofdrolspelers in avonturengames",
                            "de":  "Abenteuerspiel mit menschlichen Protagonisten",
                            "fr":  "protagonistes humains du jeu d\u0027aventure",
                            "es":  "protagonistas humanos del juego de aventuras"
                        },
    "ooo.q.152.explanation":  {
                                  "nl":  "De andere drie zijn menselijke hoofdrolspelers in avonturenspellen; Kirby is een ronde roze buitenaardse held.",
                                  "de":  "Die anderen drei sind menschliche Protagonisten in Abenteuerspielen; Kirby ist ein runder rosa Alien-Held.",
                                  "fr":  "Les trois autres sont des protagonistes humains dans des jeux d’aventure ; Kirby est un héros extraterrestre rond et rose.",
                                  "es":  "Los otros tres son protagonistas humanos de juegos de aventuras; Kirby es un héroe alienígena redondo y rosa."
                              },
    "ooo.q.153.choice.0":  {
                               "nl":  "PlayStation",
                               "de":  "PlayStation",
                               "fr":  "PlayStation",
                               "es":  "Estación de juegos"
                           },
    "ooo.q.153.choice.1":  {
                               "nl":  "Xbox",
                               "de":  "Xbox",
                               "fr":  "Xbox",
                               "es":  "Xbox"
                           },
    "ooo.q.153.choice.2":  {
                               "nl":  "Nintendo-schakelaar",
                               "de":  "Nintendo-Switch",
                               "fr":  "Nintendo Switch",
                               "es":  "Interruptor de nintendo"
                           },
    "ooo.q.153.choice.3":  {
                               "nl":  "Stoom",
                               "de":  "Dampf",
                               "fr":  "Vapeur",
                               "es":  "Vapor"
                           },
    "ooo.q.153.odd":  {
                          "nl":  "Stoom",
                          "de":  "Dampf",
                          "fr":  "Vapeur",
                          "es":  "Vapor"
                      },
    "ooo.q.153.group":  {
                            "nl":  "videogameconsoles",
                            "de":  "Videospielkonsolen",
                            "fr":  "consoles de jeux vidéo",
                            "es":  "consolas de videojuegos"
                        },
    "ooo.q.153.explanation":  {
                                  "nl":  "De andere drie zijn videogameconsoles; Steam is een distributieplatform voor pc-games.",
                                  "de":  "Die anderen drei sind Videospielkonsolen; Steam ist eine Vertriebsplattform für PC-Spiele.",
                                  "fr":  "Les trois autres sont des consoles de jeux vidéo ; Steam est une plateforme de distribution de jeux PC.",
                                  "es":  "Los otros tres son consolas de videojuegos; Steam es una plataforma de distribución de juegos para PC."
                              },
    "ooo.q.154.choice.0":  {
                               "nl":  "Tetris",
                               "de":  "Tetris",
                               "fr":  "Tétris",
                               "es":  "Tetris"
                           },
    "ooo.q.154.choice.1":  {
                               "nl":  "Met juwelen versierd",
                               "de":  "Mit Juwelen besetzt",
                               "fr":  "Paré de bijoux",
                               "es":  "Enjoyado"
                           },
    "ooo.q.154.choice.2":  {
                               "nl":  "Snoep Crush",
                               "de":  "Candy Crush",
                               "fr":  "Bonbons écrasés",
                               "es":  "Caramelo aplastar"
                           },
    "ooo.q.154.choice.3":  {
                               "nl":  "Tegenaanval",
                               "de":  "Gegenschlag",
                               "fr":  "Contre-grève",
                               "es":  "Contraataque"
                           },
    "ooo.q.154.odd":  {
                          "nl":  "Tegenaanval",
                          "de":  "Gegenschlag",
                          "fr":  "Contre-grève",
                          "es":  "Contraataque"
                      },
    "ooo.q.154.group":  {
                            "nl":  "tegel- of match-puzzelspellen",
                            "de":  "Kachel- oder Match-Puzzlespiele",
                            "fr":  "jeux de puzzle de tuiles ou de correspondance",
                            "es":  "juegos de rompecabezas de fichas o combinaciones"
                        },
    "ooo.q.154.explanation":  {
                                  "nl":  "De andere drie zijn op tegels gebaseerde puzzelspellen; Counter-Strike is een tactische shooter.",
                                  "de":  "Bei den anderen drei handelt es sich um auf Kacheln basierende Puzzlespiele. Counter-Strike ist ein taktischer Shooter.",
                                  "fr":  "Les trois autres sont des jeux de réflexion basés sur des tuiles ; Counter-Strike est un jeu de tir tactique.",
                                  "es":  "Los otros tres son juegos de rompecabezas basados en fichas; Counter-Strike es un shooter táctico."
                              },
    "ooo.q.155.choice.0":  {
                               "nl":  "Sonic de egel",
                               "de":  "Sonic the Hedgehog",
                               "fr":  "Sonic le hérisson",
                               "es":  "Sonic el erizo"
                           },
    "ooo.q.155.choice.1":  {
                               "nl":  "Crash Bandicoot",
                               "de":  "Crash Bandicoot",
                               "fr":  "Crash Bandicoot",
                               "es":  "Bandicoot choque"
                           },
    "ooo.q.155.choice.2":  {
                               "nl":  "Spyro de Draak",
                               "de":  "Spyro der Drache",
                               "fr":  "Spyro le dragon",
                               "es":  "Spyro el Dragón"
                           },
    "ooo.q.155.choice.3":  {
                               "nl":  "Meester chef",
                               "de":  "Master Chief",
                               "fr":  "Maître chef",
                               "es":  "Jefe Maestro"
                           },
    "ooo.q.155.odd":  {
                          "nl":  "Meester chef",
                          "de":  "Master Chief",
                          "fr":  "Maître chef",
                          "es":  "Jefe Maestro"
                      },
    "ooo.q.155.group":  {
                            "nl":  "mascottes van platformgames",
                            "de":  "Plattformspiel-Maskottchen",
                            "fr":  "mascottes de jeux de plateforme",
                            "es":  "mascotas de juegos de plataformas"
                        },
    "ooo.q.155.explanation":  {
                                  "nl":  "De andere drie zijn helden uit platformgameseries; Master Chief is de hoofdpersoon van Halo.",
                                  "de":  "Die anderen drei sind Helden aus Plattformspielserien; Master Chief ist der Protagonist von Halo.",
                                  "fr":  "Les trois autres sont des héros de séries de jeux de plateforme ; Master Chief est le protagoniste de Halo.",
                                  "es":  "Los otros tres son héroes de series de juegos de plataformas; Master Chief es el protagonista de Halo."
                              },
    "ooo.q.156.choice.0":  {
                               "nl":  "Pikachu",
                               "de":  "Pikachu",
                               "fr":  "Pikachu",
                               "es":  "Pikachu"
                           },
    "ooo.q.156.choice.1":  {
                               "nl":  "Charmander",
                               "de":  "Glumanda",
                               "fr":  "Salamèche",
                               "es":  "Charmander"
                           },
    "ooo.q.156.choice.2":  {
                               "nl":  "Spuiten",
                               "de":  "Eichhörnchen",
                               "fr":  "Carapuce",
                               "es":  "Squirtle"
                           },
    "ooo.q.156.choice.3":  {
                               "nl":  "Sonic de egel",
                               "de":  "Sonic the Hedgehog",
                               "fr":  "Sonic le hérisson",
                               "es":  "Sonic el erizo"
                           },
    "ooo.q.156.odd":  {
                          "nl":  "Sonic de egel",
                          "de":  "Sonic the Hedgehog",
                          "fr":  "Sonic le hérisson",
                          "es":  "Sonic el erizo"
                      },
    "ooo.q.156.group":  {
                            "nl":  "Pokemon",
                            "de":  "Pokémon",
                            "fr":  "Pokémon",
                            "es":  "Pokémon"
                        },
    "ooo.q.156.explanation":  {
                                  "nl":  "De andere drie zijn Pokémon; Sonic is de held van een aparte gameserie.",
                                  "de":  "Die anderen drei sind Pokémon; Sonic ist der Held einer separaten Spieleserie.",
                                  "fr":  "Les trois autres sont des Pokémon ; Sonic est le héros d\u0027une série de jeux distincte.",
                                  "es":  "Los otros tres son Pokémon; Sonic es el héroe de una serie de juegos separada."
                              },
    "ooo.q.157.choice.0":  {
                               "nl":  "Minecraft",
                               "de":  "Minecraft",
                               "fr":  "Minecraft",
                               "es":  "Minecraft"
                           },
    "ooo.q.157.choice.1":  {
                               "nl":  "Terraria",
                               "de":  "Terrarien",
                               "fr":  "Terrariums",
                               "es":  "Terrarios"
                           },
    "ooo.q.157.choice.2":  {
                               "nl":  "Roblox",
                               "de":  "Roblox",
                               "fr":  "Roblox",
                               "es":  "Roblox"
                           },
    "ooo.q.157.choice.3":  {
                               "nl":  "Plichtsroep",
                               "de":  "Call of Duty",
                               "fr":  "Appel du devoir",
                               "es":  "Llamado del deber"
                           },
    "ooo.q.157.odd":  {
                          "nl":  "Plichtsroep",
                          "de":  "Call of Duty",
                          "fr":  "Appel du devoir",
                          "es":  "Llamado del deber"
                      },
    "ooo.q.157.group":  {
                            "nl":  "sandbox-games of gameplatforms",
                            "de":  "Sandbox-Spiele oder Spieleplattformen",
                            "fr":  "jeux sandbox ou plateformes de jeux",
                            "es":  "juegos sandbox o plataformas de juegos"
                        },
    "ooo.q.157.explanation":  {
                                  "nl":  "De andere drie richten zich op sandbox-spelen of door gebruikers gemaakte werelden; Call of Duty is een schietserie.",
                                  "de":  "Die anderen drei konzentrieren sich auf Sandbox-Spiele oder vom Benutzer erstellte Welten. Call of Duty ist eine Shooter-Serie.",
                                  "fr":  "Les trois autres se concentrent sur le jeu sandbox ou sur les mondes créés par les utilisateurs ; Call of Duty est une série de jeux de tir.",
                                  "es":  "Los otros tres se centran en juegos sandbox o mundos creados por usuarios; Call of Duty es una serie de disparos."
                              },
    "ooo.q.158.choice.0":  {
                               "nl":  "Mario",
                               "de":  "Mario",
                               "fr":  "Mario",
                               "es":  "Mario"
                           },
    "ooo.q.158.choice.1":  {
                               "nl":  "Kirby",
                               "de":  "Kirby",
                               "fr":  "Kirby",
                               "es":  "Kirby"
                           },
    "ooo.q.158.choice.2":  {
                               "nl":  "Koppeling",
                               "de":  "Link",
                               "fr":  "Lien",
                               "es":  "Enlace"
                           },
    "ooo.q.158.choice.3":  {
                               "nl":  "Sonisch",
                               "de":  "Sonic",
                               "fr":  "Sonique",
                               "es":  "Sonico"
                           },
    "ooo.q.158.odd":  {
                          "nl":  "Sonisch",
                          "de":  "Sonic",
                          "fr":  "Sonique",
                          "es":  "Sonico"
                      },
    "ooo.q.158.group":  {
                            "nl":  "Nintendo-personages",
                            "de":  "Nintendo-Charaktere",
                            "fr":  "Personnages Nintendo",
                            "es":  "personajes de nintendo"
                        },
    "ooo.q.158.explanation":  {
                                  "nl":  "De andere drie zijn Nintendo-personages; Sonic is de mascotte van Sega.",
                                  "de":  "Die anderen drei sind Nintendo-Charaktere; Sonic ist Segas Maskottchen.",
                                  "fr":  "Les trois autres sont des personnages de Nintendo ; Sonic est la mascotte de Sega.",
                                  "es":  "Los otros tres son personajes de Nintendo; Sonic es la mascota de Sega."
                              },
    "ooo.q.159.choice.0":  {
                               "nl":  "De Sims",
                               "de":  "Die Sims",
                               "fr":  "Les Sims",
                               "es":  "Los Sims"
                           },
    "ooo.q.159.choice.1":  {
                               "nl":  "De Sims2",
                               "de":  "Die Sims 2",
                               "fr":  "Les Sims 2",
                               "es":  "Los Sims 2"
                           },
    "ooo.q.159.choice.2":  {
                               "nl":  "De Sims4",
                               "de":  "Die Sims 4",
                               "fr":  "Les Sims 4",
                               "es":  "Los Sims 4"
                           },
    "ooo.q.159.choice.3":  {
                               "nl":  "Minecraft",
                               "de":  "Minecraft",
                               "fr":  "Minecraft",
                               "es":  "Minecraft"
                           },
    "ooo.q.159.odd":  {
                          "nl":  "Minecraft",
                          "de":  "Minecraft",
                          "fr":  "Minecraft",
                          "es":  "Minecraft"
                      },
    "ooo.q.159.group":  {
                            "nl":  "games in de De Sims-franchise",
                            "de":  "Spiele in der Die Sims-Reihe",
                            "fr":  "jeux de la franchise Les Sims",
                            "es":  "juegos de la franquicia Los Sims"
                        },
    "ooo.q.159.explanation":  {
                                  "nl":  "De andere drie zijn inzendingen in de De Sims-franchise; Minecraft is een apart spel.",
                                  "de":  "Die anderen drei sind Einträge in der Die Sims-Reihe; Minecraft ist ein separates Spiel.",
                                  "fr":  "Les trois autres sont des entrées dans la franchise Les Sims ; Minecraft est un jeu à part.",
                                  "es":  "Los otros tres son entradas de la franquicia Los Sims; Minecraft es un juego independiente."
                              },
    "ooo.q.160.choice.0":  {
                               "nl":  "Overwatch",
                               "de":  "Overwatch",
                               "fr":  "Surveillance",
                               "es":  "Supervisión"
                           },
    "ooo.q.160.choice.1":  {
                               "nl":  "Valorant",
                               "de":  "Valorant",
                               "fr":  "Valorant",
                               "es":  "Valorante"
                           },
    "ooo.q.160.choice.2":  {
                               "nl":  "Tegenaanval",
                               "de":  "Gegenschlag",
                               "fr":  "Contre-grève",
                               "es":  "Contraataque"
                           },
    "ooo.q.160.choice.3":  {
                               "nl":  "Stardew-vallei",
                               "de":  "Stardew Valley",
                               "fr":  "Vallée des étoiles",
                               "es":  "Valle Stardew"
                           },
    "ooo.q.160.odd":  {
                          "nl":  "Stardew-vallei",
                          "de":  "Stardew Valley",
                          "fr":  "Vallée des étoiles",
                          "es":  "Valle Stardew"
                      },
    "ooo.q.160.group":  {
                            "nl":  "teamgebaseerde first-person shooters",
                            "de":  "teambasierte Ego-Shooter",
                            "fr":  "jeux de tir à la première personne en équipe",
                            "es":  "shooters en primera persona por equipos"
                        },
    "ooo.q.160.explanation":  {
                                  "nl":  "De andere drie zijn teamgebaseerde first-person shooters; Stardew Valley is een landbouw- en levenssimulatiespel.",
                                  "de":  "Die anderen drei sind teambasierte Ego-Shooter; Stardew Valley ist ein Landwirtschafts- und Lebenssimulationsspiel.",
                                  "fr":  "Les trois autres sont des jeux de tir à la première personne en équipe ; Stardew Valley est un jeu d\u0027agriculture et de simulation de vie.",
                                  "es":  "Los otros tres son juegos de disparos en primera persona por equipos; Stardew Valley es un juego de simulación de vida y agricultura."
                              },
    "ooo.q.161.choice.0":  {
                               "nl":  "Nike",
                               "de":  "Nike",
                               "fr":  "Nike",
                               "es":  "Nike"
                           },
    "ooo.q.161.choice.1":  {
                               "nl":  "Adidas",
                               "de":  "Adidas",
                               "fr":  "Adidas",
                               "es":  "Adidas"
                           },
    "ooo.q.161.choice.2":  {
                               "nl":  "Poema",
                               "de":  "Puma",
                               "fr":  "Puma",
                               "es":  "Puma"
                           },
    "ooo.q.161.choice.3":  {
                               "nl":  "Ikea",
                               "de":  "IKEA",
                               "fr":  "IKEA",
                               "es":  "Ikea"
                           },
    "ooo.q.161.odd":  {
                          "nl":  "Ikea",
                          "de":  "IKEA",
                          "fr":  "IKEA",
                          "es":  "Ikea"
                      },
    "ooo.q.161.group":  {
                            "nl":  "sportkleding merken",
                            "de":  "Sportbekleidungsmarken",
                            "fr":  "marques de vêtements de sport",
                            "es":  "marcas de ropa deportiva"
                        },
    "ooo.q.161.explanation":  {
                                  "nl":  "De andere drie zijn sportkledingmerken; IKEA verkoopt meubels en woonartikelen.",
                                  "de":  "Die anderen drei sind Sportbekleidungsmarken; IKEA verkauft Möbel und Haushaltswaren.",
                                  "fr":  "Les trois autres sont des marques de vêtements de sport ; IKEA vend des meubles et des articles pour la maison.",
                                  "es":  "Las otras tres son marcas de ropa deportiva; IKEA vende muebles y artículos para el hogar."
                              },
    "ooo.q.162.choice.0":  {
                               "nl":  "Appel",
                               "de":  "Apfel",
                               "fr":  "Pomme",
                               "es":  "Manzana"
                           },
    "ooo.q.162.choice.1":  {
                               "nl":  "Samsung",
                               "de":  "Samsung",
                               "fr":  "Samsung",
                               "es":  "Samsung"
                           },
    "ooo.q.162.choice.2":  {
                               "nl":  "Sony",
                               "de":  "Sony",
                               "fr":  "Sony",
                               "es":  "Sony"
                           },
    "ooo.q.162.choice.3":  {
                               "nl":  "Coca-Cola",
                               "de":  "Coca-Cola",
                               "fr":  "Coca Cola",
                               "es":  "Coca cola"
                           },
    "ooo.q.162.odd":  {
                          "nl":  "Coca-Cola",
                          "de":  "Coca-Cola",
                          "fr":  "Coca Cola",
                          "es":  "Coca cola"
                      },
    "ooo.q.162.group":  {
                            "nl":  "merken voor consumentenelektronica",
                            "de":  "Marken der Unterhaltungselektronik",
                            "fr":  "marques d\u0027électronique grand public",
                            "es":  "marcas de electrónica de consumo"
                        },
    "ooo.q.162.explanation":  {
                                  "nl":  "De andere drie maken consumentenelektronica; Coca-Cola is een drankenmerk.",
                                  "de":  "Die anderen drei stellen Unterhaltungselektronik her; Coca-Cola ist eine Getränkemarke.",
                                  "fr":  "Les trois autres fabriquent des produits électroniques grand public ; Coca-Cola est une marque de boissons.",
                                  "es":  "Los otros tres fabrican productos electrónicos de consumo; Coca-Cola es una marca de bebidas."
                              },
    "ooo.q.163.choice.0":  {
                               "nl":  "McDonald\u0027s",
                               "de":  "McDonald\u0027s",
                               "fr":  "McDonald\u0027s",
                               "es":  "McDonald\u0027s"
                           },
    "ooo.q.163.choice.1":  {
                               "nl":  "Burger King",
                               "de":  "Burger King",
                               "fr":  "Burger King",
                               "es":  "Hamburguesa rey"
                           },
    "ooo.q.163.choice.2":  {
                               "nl":  "KFC",
                               "de":  "KFC",
                               "fr":  "KFC",
                               "es":  "Kfc"
                           },
    "ooo.q.163.choice.3":  {
                               "nl":  "Toyota",
                               "de":  "Toyota",
                               "fr":  "Toyota",
                               "es":  "Toyota"
                           },
    "ooo.q.163.odd":  {
                          "nl":  "Toyota",
                          "de":  "Toyota",
                          "fr":  "Toyota",
                          "es":  "Toyota"
                      },
    "ooo.q.163.group":  {
                            "nl":  "fastfoodketens",
                            "de":  "Fast-Food-Ketten",
                            "fr":  "chaînes de restauration rapide",
                            "es":  "cadenas de comida rápida"
                        },
    "ooo.q.163.explanation":  {
                                  "nl":  "De andere drie zijn fastfoodketens; Toyota maakt voertuigen.",
                                  "de":  "Die anderen drei sind Fast-Food-Ketten; Toyota stellt Fahrzeuge her.",
                                  "fr":  "Les trois autres sont des chaînes de restauration rapide ; Toyota fabrique des véhicules.",
                                  "es":  "Las otras tres son cadenas de comida rápida; Toyota fabrica vehículos."
                              },
    "ooo.q.164.choice.0":  {
                               "nl":  "BMW",
                               "de":  "BMW",
                               "fr":  "BMW",
                               "es":  "Bmw"
                           },
    "ooo.q.164.choice.1":  {
                               "nl":  "Mercedes-Benz",
                               "de":  "Mercedes-Benz",
                               "fr":  "Mercedes-Benz",
                               "es":  "Mercedes-Benz"
                           },
    "ooo.q.164.choice.2":  {
                               "nl":  "Audi",
                               "de":  "Audi",
                               "fr":  "Audi",
                               "es":  "Audi"
                           },
    "ooo.q.164.choice.3":  {
                               "nl":  "Netflix",
                               "de":  "Netflix",
                               "fr":  "Netflix",
                               "es":  "Netflix"
                           },
    "ooo.q.164.odd":  {
                          "nl":  "Netflix",
                          "de":  "Netflix",
                          "fr":  "Netflix",
                          "es":  "Netflix"
                      },
    "ooo.q.164.group":  {
                            "nl":  "autofabrikanten",
                            "de":  "Automobilhersteller",
                            "fr":  "constructeurs automobiles",
                            "es":  "fabricantes de automóviles"
                        },
    "ooo.q.164.explanation":  {
                                  "nl":  "De andere drie zijn autofabrikanten; Netflix is ​​een streamingdienst.",
                                  "de":  "Die anderen drei sind Automobilhersteller; Netflix ist ein Streaming-Dienst.",
                                  "fr":  "Les trois autres sont des constructeurs automobiles ; Netflix est un service de streaming.",
                                  "es":  "Los otros tres son fabricantes de automóviles; Netflix es un servicio de transmisión."
                              },
    "ooo.q.165.choice.0":  {
                               "nl":  "LEGO",
                               "de":  "LEGO",
                               "fr":  "LEGO",
                               "es":  "Lego"
                           },
    "ooo.q.165.choice.1":  {
                               "nl":  "Barbie",
                               "de":  "Barbie",
                               "fr":  "Barbie",
                               "es":  "Barbie"
                           },
    "ooo.q.165.choice.2":  {
                               "nl":  "Playmobil",
                               "de":  "Playmobil",
                               "fr":  "Playmobil",
                               "es":  "Playmobil"
                           },
    "ooo.q.165.choice.3":  {
                               "nl":  "Starbucks",
                               "de":  "Starbucks",
                               "fr":  "Starbucks",
                               "es":  "Starbucks"
                           },
    "ooo.q.165.odd":  {
                          "nl":  "Starbucks",
                          "de":  "Starbucks",
                          "fr":  "Starbucks",
                          "es":  "Starbucks"
                      },
    "ooo.q.165.group":  {
                            "nl":  "speelgoed merken",
                            "de":  "Spielzeugmarken",
                            "fr":  "marques de jouets",
                            "es":  "marcas de juguetes"
                        },
    "ooo.q.165.explanation":  {
                                  "nl":  "De andere drie zijn speelgoedmerken; Starbucks is een koffiehuisketen.",
                                  "de":  "Die anderen drei sind Spielzeugmarken; Starbucks ist eine Kaffeehauskette.",
                                  "fr":  "Les trois autres sont des marques de jouets ; Starbucks est une chaîne de cafés.",
                                  "es":  "Las otras tres son marcas de juguetes; Starbucks es una cadena de cafeterías."
                              },
    "ooo.q.166.choice.0":  {
                               "nl":  "Coca-Cola",
                               "de":  "Coca-Cola",
                               "fr":  "Coca Cola",
                               "es":  "Coca cola"
                           },
    "ooo.q.166.choice.1":  {
                               "nl":  "Pepsi",
                               "de":  "Pepsi",
                               "fr":  "Pepsi",
                               "es":  "Pepsi"
                           },
    "ooo.q.166.choice.2":  {
                               "nl":  "Sprite",
                               "de":  "Sprite",
                               "fr":  "Lutin",
                               "es":  "Duende"
                           },
    "ooo.q.166.choice.3":  {
                               "nl":  "Microsoft",
                               "de":  "Microsoft",
                               "fr":  "Microsoft",
                               "es":  "Microsoft"
                           },
    "ooo.q.166.odd":  {
                          "nl":  "Microsoft",
                          "de":  "Microsoft",
                          "fr":  "Microsoft",
                          "es":  "Microsoft"
                      },
    "ooo.q.166.group":  {
                            "nl":  "frisdrank merken",
                            "de":  "Softdrink-Marken",
                            "fr":  "marques de boissons gazeuses",
                            "es":  "marcas de refrescos"
                        },
    "ooo.q.166.explanation":  {
                                  "nl":  "De andere drie zijn frisdrankmerken; Microsoft maakt software en technologie.",
                                  "de":  "Die anderen drei sind Erfrischungsgetränkemarken; Microsoft stellt Software und Technologie her.",
                                  "fr":  "Les trois autres sont des marques de boissons gazeuses ; Microsoft fabrique des logiciels et des technologies.",
                                  "es":  "Las otras tres son marcas de refrescos; Microsoft fabrica software y tecnología."
                              },
    "ooo.q.167.choice.0":  {
                               "nl":  "Amazone",
                               "de":  "Amazon",
                               "fr":  "Amazone",
                               "es":  "Amazonas"
                           },
    "ooo.q.167.choice.1":  {
                               "nl":  "eBay",
                               "de":  "eBay",
                               "fr":  "eBay",
                               "es":  "eBay"
                           },
    "ooo.q.167.choice.2":  {
                               "nl":  "Etsy",
                               "de":  "Etsy",
                               "fr":  "Etsy",
                               "es":  "Etsy"
                           },
    "ooo.q.167.choice.3":  {
                               "nl":  "Spotify",
                               "de":  "Spotify",
                               "fr":  "Spotify",
                               "es":  "Spotify"
                           },
    "ooo.q.167.odd":  {
                          "nl":  "Spotify",
                          "de":  "Spotify",
                          "fr":  "Spotify",
                          "es":  "Spotify"
                      },
    "ooo.q.167.group":  {
                            "nl":  "online marktplaatsen",
                            "de":  "Online-Marktplätze",
                            "fr":  "marchés en ligne",
                            "es":  "mercados en línea"
                        },
    "ooo.q.167.explanation":  {
                                  "nl":  "De andere drie zijn online marktplaatsen; Spotify is een muziekstreamingdienst.",
                                  "de":  "Die anderen drei sind Online-Marktplätze; Spotify ist ein Musik-Streaming-Dienst.",
                                  "fr":  "Les trois autres sont des marchés en ligne ; Spotify est un service de streaming musical.",
                                  "es":  "Los otros tres son mercados online; Spotify es un servicio de transmisión de música."
                              },
    "ooo.q.168.choice.0":  {
                               "nl":  "Gucci",
                               "de":  "Gucci",
                               "fr":  "Gucci",
                               "es":  "Gucci"
                           },
    "ooo.q.168.choice.1":  {
                               "nl":  "Prada",
                               "de":  "Prada",
                               "fr":  "Prada",
                               "es":  "Prada"
                           },
    "ooo.q.168.choice.2":  {
                               "nl":  "Louis Vuitton",
                               "de":  "Louis Vuitton",
                               "fr":  "Louis Vuitton",
                               "es":  "Luis Vuitton"
                           },
    "ooo.q.168.choice.3":  {
                               "nl":  "Tesla",
                               "de":  "Tesla",
                               "fr":  "Tesla",
                               "es":  "Tesla"
                           },
    "ooo.q.168.odd":  {
                          "nl":  "Tesla",
                          "de":  "Tesla",
                          "fr":  "Tesla",
                          "es":  "Tesla"
                      },
    "ooo.q.168.group":  {
                            "nl":  "luxe modehuizen",
                            "de":  "Luxusmodehäuser",
                            "fr":  "maisons de couture de luxe",
                            "es":  "casas de moda de lujo"
                        },
    "ooo.q.168.explanation":  {
                                  "nl":  "De andere drie zijn luxe modehuizen; Tesla maakt elektrische voertuigen.",
                                  "de":  "Die anderen drei sind Luxusmodehäuser; Tesla stellt Elektrofahrzeuge her.",
                                  "fr":  "Les trois autres sont des maisons de couture de luxe ; Tesla fabrique des véhicules électriques.",
                                  "es":  "Las otras tres son casas de moda de lujo; Tesla fabrica vehículos eléctricos."
                              },
    "ooo.q.169.choice.0":  {
                               "nl":  "PlayStation",
                               "de":  "PlayStation",
                               "fr":  "PlayStation",
                               "es":  "Estación de juegos"
                           },
    "ooo.q.169.choice.1":  {
                               "nl":  "Xbox",
                               "de":  "Xbox",
                               "fr":  "Xbox",
                               "es":  "Xbox"
                           },
    "ooo.q.169.choice.2":  {
                               "nl":  "Nintendo",
                               "de":  "Nintendo",
                               "fr":  "Nintendo",
                               "es":  "Nintendo"
                           },
    "ooo.q.169.choice.3":  {
                               "nl":  "Netflix",
                               "de":  "Netflix",
                               "fr":  "Netflix",
                               "es":  "Netflix"
                           },
    "ooo.q.169.odd":  {
                          "nl":  "Netflix",
                          "de":  "Netflix",
                          "fr":  "Netflix",
                          "es":  "Netflix"
                      },
    "ooo.q.169.group":  {
                            "nl":  "merken voor videogameconsoles",
                            "de":  "Marken von Videospielkonsolen",
                            "fr":  "marques de consoles de jeux vidéo",
                            "es":  "marcas de consolas de videojuegos"
                        },
    "ooo.q.169.explanation":  {
                                  "nl":  "De andere drie maken videogameconsoles; Netflix is ​​een streamingdienst.",
                                  "de":  "Die anderen drei stellen Videospielkonsolen her; Netflix ist ein Streaming-Dienst.",
                                  "fr":  "Les trois autres fabriquent des consoles de jeux vidéo ; Netflix est un service de streaming.",
                                  "es":  "Los otros tres fabrican consolas de videojuegos; Netflix es un servicio de transmisión."
                              },
    "ooo.q.170.choice.0":  {
                               "nl":  "Visum",
                               "de":  "Visum",
                               "fr":  "Visa",
                               "es":  "Visa"
                           },
    "ooo.q.170.choice.1":  {
                               "nl":  "Mastercard",
                               "de":  "Mastercard",
                               "fr":  "Carte Master",
                               "es":  "Mastercard"
                           },
    "ooo.q.170.choice.2":  {
                               "nl":  "Amerikaanse Express",
                               "de":  "American Express",
                               "fr":  "American Express",
                               "es":  "Expreso americano"
                           },
    "ooo.q.170.choice.3":  {
                               "nl":  "PayPal",
                               "de":  "PayPal",
                               "fr":  "Paypal",
                               "es":  "PayPal"
                           },
    "ooo.q.170.odd":  {
                          "nl":  "PayPal",
                          "de":  "PayPal",
                          "fr":  "Paypal",
                          "es":  "PayPal"
                      },
    "ooo.q.170.group":  {
                            "nl":  "betaalkaartnetwerken",
                            "de":  "Zahlungskartennetzwerke",
                            "fr":  "réseaux de cartes de paiement",
                            "es":  "redes de tarjetas de pago"
                        },
    "ooo.q.170.explanation":  {
                                  "nl":  "De andere drie exploiteren betaalkaartnetwerken; PayPal is een digitaal betalingsplatform.",
                                  "de":  "Die anderen drei betreiben Zahlungskartennetzwerke; PayPal ist eine digitale Zahlungsplattform.",
                                  "fr":  "Les trois autres exploitent des réseaux de cartes de paiement ; PayPal est une plateforme de paiement numérique.",
                                  "es":  "Los otros tres operan redes de tarjetas de pago; PayPal es una plataforma de pago digital."
                              },
    "ooo.q.171.choice.0":  {
                               "nl":  "Duif",
                               "de":  "Taube",
                               "fr":  "Colombe",
                               "es":  "Paloma"
                           },
    "ooo.q.171.choice.1":  {
                               "nl":  "Bijl",
                               "de":  "Axt",
                               "fr":  "Hache",
                               "es":  "Hacha"
                           },
    "ooo.q.171.choice.2":  {
                               "nl":  "Rexona",
                               "de":  "Rexona",
                               "fr":  "Rexone",
                               "es":  "Rexona"
                           },
    "ooo.q.171.choice.3":  {
                               "nl":  "Colgate",
                               "de":  "Colgate",
                               "fr":  "Colgate",
                               "es":  "Colgate"
                           },
    "ooo.q.171.odd":  {
                          "nl":  "Colgate",
                          "de":  "Colgate",
                          "fr":  "Colgate",
                          "es":  "Colgate"
                      },
    "ooo.q.171.group":  {
                            "nl":  "merken die eigendom zijn van Unilever",
                            "de":  "Marken von Unilever",
                            "fr":  "marques appartenant à Unilever",
                            "es":  "marcas propiedad de Unilever"
                        },
    "ooo.q.171.explanation":  {
                                  "nl":  "Dove, Axe en Rexona zijn Unilever-merken; Colgate is een merk van Colgate-Palmolive.",
                                  "de":  "Dove, Axe und Rexona sind Unilever-Marken; Colgate ist eine Marke von Colgate-Palmolive.",
                                  "fr":  "Dove, Axe et Rexona sont des marques Unilever ; Colgate est une marque Colgate-Palmolive.",
                                  "es":  "Dove, Axe y Rexona son marcas de Unilever; Colgate es una marca Colgate-Palmolive."
                              },
    "ooo.q.172.choice.0":  {
                               "nl":  "Instagram",
                               "de":  "Instagram",
                               "fr":  "Instagram",
                               "es":  "Instagram"
                           },
    "ooo.q.172.choice.1":  {
                               "nl":  "WhatsAppen",
                               "de":  "WhatsApp",
                               "fr":  "WhatsApp",
                               "es":  "WhatsApp"
                           },
    "ooo.q.172.choice.2":  {
                               "nl":  "Facebook",
                               "de":  "Facebook",
                               "fr":  "Facebook",
                               "es":  "Facebook"
                           },
    "ooo.q.172.choice.3":  {
                               "nl":  "YouTube",
                               "de":  "YouTube",
                               "fr":  "YouTube",
                               "es":  "Youtube"
                           },
    "ooo.q.172.odd":  {
                          "nl":  "YouTube",
                          "de":  "YouTube",
                          "fr":  "YouTube",
                          "es":  "Youtube"
                      },
    "ooo.q.172.group":  {
                            "nl":  "Meta-platforms",
                            "de":  "Metaplattformen",
                            "fr":  "Métaplateformes",
                            "es":  "Metaplataformas"
                        },
    "ooo.q.172.explanation":  {
                                  "nl":  "De andere drie zijn eigendom van Meta; YouTube is eigendom van Google.",
                                  "de":  "Die anderen drei gehören Meta; YouTube gehört Google.",
                                  "fr":  "Les trois autres appartiennent à Meta ; YouTube appartient à Google.",
                                  "es":  "Los otros tres son propiedad de Meta; YouTube es propiedad de Google."
                              },
    "ooo.q.173.choice.0":  {
                               "nl":  "Lexus",
                               "de":  "Lexus",
                               "fr":  "Lexus",
                               "es":  "Lexus"
                           },
    "ooo.q.173.choice.1":  {
                               "nl":  "Acura",
                               "de":  "Acura",
                               "fr":  "Acura",
                               "es":  "Acura"
                           },
    "ooo.q.173.choice.2":  {
                               "nl":  "Infiniti",
                               "de":  "Infiniti",
                               "fr":  "Infiniti",
                               "es":  "Infiniti"
                           },
    "ooo.q.173.choice.3":  {
                               "nl":  "Volvo",
                               "de":  "Volvo",
                               "fr":  "Volvo",
                               "es":  "Volvo"
                           },
    "ooo.q.173.odd":  {
                          "nl":  "Volvo",
                          "de":  "Volvo",
                          "fr":  "Volvo",
                          "es":  "Volvo"
                      },
    "ooo.q.173.group":  {
                            "nl":  "Japanse divisies voor luxe auto\u0027s",
                            "de":  "Japanische Luxusautoabteilungen",
                            "fr":  "Divisions japonaises de voitures de luxe",
                            "es":  "Divisiones japonesas de coches de lujo"
                        },
    "ooo.q.173.explanation":  {
                                  "nl":  "Lexus, Acura en Infiniti zijn Japanse luxedivisies; Volvo is een Zweeds automerk.",
                                  "de":  "Lexus, Acura und Infiniti sind japanische Luxussparten; Volvo ist eine schwedische Automarke.",
                                  "fr":  "Lexus, Acura et Infiniti sont des divisions de luxe japonaises ; Volvo est une marque automobile suédoise.",
                                  "es":  "Lexus, Acura e Infiniti son divisiones de lujo japonesas; Volvo es una marca de automóviles sueca."
                              },
    "ooo.q.174.choice.0":  {
                               "nl":  "Fantasie",
                               "de":  "Fanta",
                               "fr":  "Fantaisie",
                               "es":  "Fanta"
                           },
    "ooo.q.174.choice.1":  {
                               "nl":  "Sprite",
                               "de":  "Sprite",
                               "fr":  "Lutin",
                               "es":  "Duende"
                           },
    "ooo.q.174.choice.2":  {
                               "nl":  "Dr. Peper",
                               "de":  "Dr. Pepper",
                               "fr":  "Dr Poivre",
                               "es":  "Dr. pimienta"
                           },
    "ooo.q.174.choice.3":  {
                               "nl":  "Nescafé",
                               "de":  "Nescafé",
                               "fr":  "Nescafé",
                               "es":  "Nescafé"
                           },
    "ooo.q.174.odd":  {
                          "nl":  "Nescafé",
                          "de":  "Nescafé",
                          "fr":  "Nescafé",
                          "es":  "Nescafé"
                      },
    "ooo.q.174.group":  {
                            "nl":  "frisdrank merken",
                            "de":  "Softdrink-Marken",
                            "fr":  "marques de boissons gazeuses",
                            "es":  "marcas de refrescos"
                        },
    "ooo.q.174.explanation":  {
                                  "nl":  "De andere drie zijn frisdrankmerken; Nescafé is een koffiemerk.",
                                  "de":  "Die anderen drei sind Erfrischungsgetränkemarken; Nescafé ist eine Kaffeemarke.",
                                  "fr":  "Les trois autres sont des marques de boissons gazeuses ; Nescafé est une marque de café.",
                                  "es":  "Las otras tres son marcas de refrescos; Nescafé es una marca de café."
                              },
    "ooo.q.175.choice.0":  {
                               "nl":  "Converseren",
                               "de":  "Umgekehrt",
                               "fr":  "Converser",
                               "es":  "Conversar"
                           },
    "ooo.q.175.choice.1":  {
                               "nl":  "Bestelwagens",
                               "de":  "Vans",
                               "fr":  "Fourgons",
                               "es":  "Furgonetas"
                           },
    "ooo.q.175.choice.2":  {
                               "nl":  "Crocs",
                               "de":  "Crocs",
                               "fr":  "Crocos",
                               "es":  "Cocodrilos"
                           },
    "ooo.q.175.choice.3":  {
                               "nl":  "Kanon",
                               "de":  "Kanon",
                               "fr":  "Canon",
                               "es":  "Canon"
                           },
    "ooo.q.175.odd":  {
                          "nl":  "Kanon",
                          "de":  "Kanon",
                          "fr":  "Canon",
                          "es":  "Canon"
                      },
    "ooo.q.175.group":  {
                            "nl":  "schoenen merken",
                            "de":  "Schuhmarken",
                            "fr":  "marques de chaussures",
                            "es":  "marcas de calzado"
                        },
    "ooo.q.175.explanation":  {
                                  "nl":  "De andere drie maken schoenen; Canon maakt camera\u0027s en beeldverwerkingsproducten.",
                                  "de":  "Die anderen drei stellen Schuhe her; Canon stellt Kameras und Imaging-Produkte her.",
                                  "fr":  "Les trois autres fabriquent des chaussures ; Canon fabrique des appareils photo et des produits d\u0027imagerie.",
                                  "es":  "Los otros tres fabrican calzado; Canon fabrica cámaras y productos de imágenes."
                              },
    "ooo.q.176.choice.0":  {
                               "nl":  "Adidas",
                               "de":  "Adidas",
                               "fr":  "Adidas",
                               "es":  "Adidas"
                           },
    "ooo.q.176.choice.1":  {
                               "nl":  "Nike",
                               "de":  "Nike",
                               "fr":  "Nike",
                               "es":  "Nike"
                           },
    "ooo.q.176.choice.2":  {
                               "nl":  "Poema",
                               "de":  "Puma",
                               "fr":  "Puma",
                               "es":  "Puma"
                           },
    "ooo.q.176.choice.3":  {
                               "nl":  "LEGO",
                               "de":  "LEGO",
                               "fr":  "LEGO",
                               "es":  "Lego"
                           },
    "ooo.q.176.odd":  {
                          "nl":  "LEGO",
                          "de":  "LEGO",
                          "fr":  "LEGO",
                          "es":  "Lego"
                      },
    "ooo.q.176.group":  {
                            "nl":  "sportkleding merken",
                            "de":  "Sportbekleidungsmarken",
                            "fr":  "marques de vêtements de sport",
                            "es":  "marcas de ropa deportiva"
                        },
    "ooo.q.176.explanation":  {
                                  "nl":  "De andere drie zijn sportkledingmerken; LEGO maakt speelgoed en bouwsets.",
                                  "de":  "Die anderen drei sind Sportbekleidungsmarken; LEGO stellt Spielzeug und Baukästen her.",
                                  "fr":  "Les trois autres sont des marques de vêtements de sport ; LEGO fabrique des jouets et des ensembles de construction.",
                                  "es":  "Las otras tres son marcas de ropa deportiva; LEGO fabrica juguetes y juegos de construcción."
                              },
    "ooo.q.177.choice.0":  {
                               "nl":  "Coca-Cola",
                               "de":  "Coca-Cola",
                               "fr":  "Coca Cola",
                               "es":  "Coca cola"
                           },
    "ooo.q.177.choice.1":  {
                               "nl":  "Pepsi",
                               "de":  "Pepsi",
                               "fr":  "Pepsi",
                               "es":  "Pepsi"
                           },
    "ooo.q.177.choice.2":  {
                               "nl":  "Fantasie",
                               "de":  "Fanta",
                               "fr":  "Fantaisie",
                               "es":  "Fanta"
                           },
    "ooo.q.177.choice.3":  {
                               "nl":  "McDonald\u0027s",
                               "de":  "McDonald\u0027s",
                               "fr":  "McDonald\u0027s",
                               "es":  "McDonald\u0027s"
                           },
    "ooo.q.177.odd":  {
                          "nl":  "McDonald\u0027s",
                          "de":  "McDonald\u0027s",
                          "fr":  "McDonald\u0027s",
                          "es":  "McDonald\u0027s"
                      },
    "ooo.q.177.group":  {
                            "nl":  "frisdrank merken",
                            "de":  "Softdrink-Marken",
                            "fr":  "marques de boissons gazeuses",
                            "es":  "marcas de refrescos"
                        },
    "ooo.q.177.explanation":  {
                                  "nl":  "De andere drie zijn frisdrankmerken; McDonald\u0027s is een fastfoodketen.",
                                  "de":  "Die anderen drei sind Erfrischungsgetränkemarken; McDonald\u0027s ist eine Fast-Food-Kette.",
                                  "fr":  "Les trois autres sont des marques de boissons gazeuses ; McDonald\u0027s est une chaîne de restauration rapide.",
                                  "es":  "Las otras tres son marcas de refrescos; McDonald\u0027s es una cadena de comida rápida."
                              },
    "ooo.q.178.choice.0":  {
                               "nl":  "Mercedes-Benz",
                               "de":  "Mercedes-Benz",
                               "fr":  "Mercedes-Benz",
                               "es":  "Mercedes-Benz"
                           },
    "ooo.q.178.choice.1":  {
                               "nl":  "BMW",
                               "de":  "BMW",
                               "fr":  "BMW",
                               "es":  "Bmw"
                           },
    "ooo.q.178.choice.2":  {
                               "nl":  "Audi",
                               "de":  "Audi",
                               "fr":  "Audi",
                               "es":  "Audi"
                           },
    "ooo.q.178.choice.3":  {
                               "nl":  "Nintendo",
                               "de":  "Nintendo",
                               "fr":  "Nintendo",
                               "es":  "Nintendo"
                           },
    "ooo.q.178.odd":  {
                          "nl":  "Nintendo",
                          "de":  "Nintendo",
                          "fr":  "Nintendo",
                          "es":  "Nintendo"
                      },
    "ooo.q.178.group":  {
                            "nl":  "autofabrikanten",
                            "de":  "Automobilhersteller",
                            "fr":  "constructeurs automobiles",
                            "es":  "fabricantes de automóviles"
                        },
    "ooo.q.178.explanation":  {
                                  "nl":  "De andere drie zijn autofabrikanten; Nintendo maakt videogames en consoles.",
                                  "de":  "Die anderen drei sind Automobilhersteller; Nintendo stellt Videospiele und Konsolen her.",
                                  "fr":  "Les trois autres sont des constructeurs automobiles ; Nintendo fabrique des jeux vidéo et des consoles.",
                                  "es":  "Los otros tres son fabricantes de automóviles; Nintendo fabrica videojuegos y consolas."
                              },
    "ooo.q.179.choice.0":  {
                               "nl":  "Netflix",
                               "de":  "Netflix",
                               "fr":  "Netflix",
                               "es":  "Netflix"
                           },
    "ooo.q.179.choice.1":  {
                               "nl":  "Disney+",
                               "de":  "Disney+",
                               "fr":  "Disney+",
                               "es":  "Disney+"
                           },
    "ooo.q.179.choice.2":  {
                               "nl":  "Prime-video",
                               "de":  "Prime Video",
                               "fr":  "Vidéo principale",
                               "es":  "Vídeo principal"
                           },
    "ooo.q.179.choice.3":  {
                               "nl":  "Spotify",
                               "de":  "Spotify",
                               "fr":  "Spotify",
                               "es":  "Spotify"
                           },
    "ooo.q.179.odd":  {
                          "nl":  "Spotify",
                          "de":  "Spotify",
                          "fr":  "Spotify",
                          "es":  "Spotify"
                      },
    "ooo.q.179.group":  {
                            "nl":  "videostreamingdiensten",
                            "de":  "Video-Streaming-Dienste",
                            "fr":  "services de streaming vidéo",
                            "es":  "servicios de transmisión de video"
                        },
    "ooo.q.179.explanation":  {
                                  "nl":  "De andere drie streamen voornamelijk video; Spotify streamt voornamelijk audio.",
                                  "de":  "Die anderen drei streamen hauptsächlich Videos; Spotify streamt hauptsächlich Audio.",
                                  "fr":  "Les trois autres diffusent principalement de la vidéo ; Spotify diffuse principalement de l\u0027audio.",
                                  "es":  "Los otros tres transmiten principalmente vídeo; Spotify transmite principalmente audio."
                              },
    "ooo.q.180.choice.0":  {
                               "nl":  "Pepsi",
                               "de":  "Pepsi",
                               "fr":  "Pepsi",
                               "es":  "Pepsi"
                           },
    "ooo.q.180.choice.1":  {
                               "nl":  "Fantasie",
                               "de":  "Fanta",
                               "fr":  "Fantaisie",
                               "es":  "Fanta"
                           },
    "ooo.q.180.choice.2":  {
                               "nl":  "Sprite",
                               "de":  "Sprite",
                               "fr":  "Lutin",
                               "es":  "Duende"
                           },
    "ooo.q.180.choice.3":  {
                               "nl":  "Gatorade",
                               "de":  "Gatorade",
                               "fr":  "Gatorade",
                               "es":  "Gatorade"
                           },
    "ooo.q.180.odd":  {
                          "nl":  "Gatorade",
                          "de":  "Gatorade",
                          "fr":  "Gatorade",
                          "es":  "Gatorade"
                      },
    "ooo.q.180.group":  {
                            "nl":  "frisdranken",
                            "de":  "alkoholfreie Getränke",
                            "fr":  "boissons gazeuses",
                            "es":  "refrescos"
                        },
    "ooo.q.180.explanation":  {
                                  "nl":  "De andere drie zijn koolzuurhoudende frisdranken; Gatorade is een sportdrank.",
                                  "de":  "Die anderen drei sind kohlensäurehaltige Erfrischungsgetränke; Gatorade ist ein Sportgetränk.",
                                  "fr":  "Les trois autres sont des boissons gazeuses ; Gatorade est une boisson pour sportifs.",
                                  "es":  "Los otros tres son refrescos carbonatados; Gatorade es una bebida deportiva."
                              },
    "ooo.q.181.choice.0":  {
                               "nl":  "Vork",
                               "de":  "Gabel",
                               "fr":  "Fourchette",
                               "es":  "Tenedor"
                           },
    "ooo.q.181.choice.1":  {
                               "nl":  "Lepel",
                               "de":  "Löffel",
                               "fr":  "Cuillère",
                               "es":  "Cuchara"
                           },
    "ooo.q.181.choice.2":  {
                               "nl":  "Mes",
                               "de":  "Messer",
                               "fr":  "Couteau",
                               "es":  "Cuchillo"
                           },
    "ooo.q.181.choice.3":  {
                               "nl":  "Kussen",
                               "de":  "Kissen",
                               "fr":  "Oreiller",
                               "es":  "Almohada"
                           },
    "ooo.q.181.odd":  {
                          "nl":  "Kussen",
                          "de":  "Kissen",
                          "fr":  "Oreiller",
                          "es":  "Almohada"
                      },
    "ooo.q.181.group":  {
                            "nl":  "bestek",
                            "de":  "Besteck",
                            "fr":  "couverts",
                            "es":  "cubiertos"
                        },
    "ooo.q.181.explanation":  {
                                  "nl":  "De andere drie zijn bestekstukken; een kussen is beddengoed.",
                                  "de":  "Die anderen drei sind Besteckteile; Ein Kissen ist Bettzeug.",
                                  "fr":  "Les trois autres sont des couverts ; un oreiller est une literie.",
                                  "es":  "Los otros tres son cubiertos; una almohada es ropa de cama."
                              },
    "ooo.q.182.choice.0":  {
                               "nl":  "Tandenborstel",
                               "de":  "Zahnbürste",
                               "fr":  "Brosse à dents",
                               "es":  "Cepillo de dientes"
                           },
    "ooo.q.182.choice.1":  {
                               "nl":  "Kam",
                               "de":  "Kamm",
                               "fr":  "Peigne",
                               "es":  "Peine"
                           },
    "ooo.q.182.choice.2":  {
                               "nl":  "Zeep",
                               "de":  "Seife",
                               "fr":  "Savon",
                               "es":  "Jabón"
                           },
    "ooo.q.182.choice.3":  {
                               "nl":  "Plaat",
                               "de":  "Platte",
                               "fr":  "Assiette",
                               "es":  "Plato"
                           },
    "ooo.q.182.odd":  {
                          "nl":  "Plaat",
                          "de":  "Platte",
                          "fr":  "Assiette",
                          "es":  "Plato"
                      },
    "ooo.q.182.group":  {
                            "nl":  "artikelen voor persoonlijke verzorging",
                            "de":  "Körperpflegeartikel",
                            "fr":  "articles de soins personnels",
                            "es":  "artículos de cuidado personal"
                        },
    "ooo.q.182.explanation":  {
                                  "nl":  "De andere drie worden gebruikt voor persoonlijke verzorging; een bord is serviesgoed.",
                                  "de":  "Die anderen drei dienen der Körperpflege; Ein Teller ist Geschirr.",
                                  "fr":  "Les trois autres sont utilisés pour les soins personnels ; une assiette est de la vaisselle.",
                                  "es":  "Los otros tres se utilizan para el cuidado personal; un plato es vajilla."
                              },
    "ooo.q.183.choice.0":  {
                               "nl":  "Stoel",
                               "de":  "Vorsitzender",
                               "fr":  "Chaise",
                               "es":  "Silla"
                           },
    "ooo.q.183.choice.1":  {
                               "nl":  "Tafel",
                               "de":  "Tisch",
                               "fr":  "Tableau",
                               "es":  "Mesa"
                           },
    "ooo.q.183.choice.2":  {
                               "nl":  "Bank",
                               "de":  "Sofa",
                               "fr":  "Canapé",
                               "es":  "Sofá"
                           },
    "ooo.q.183.choice.3":  {
                               "nl":  "Fiets",
                               "de":  "Fahrrad",
                               "fr":  "Vélo",
                               "es":  "Bicicleta"
                           },
    "ooo.q.183.odd":  {
                          "nl":  "Fiets",
                          "de":  "Fahrrad",
                          "fr":  "Vélo",
                          "es":  "Bicicleta"
                      },
    "ooo.q.183.group":  {
                            "nl":  "meubilair",
                            "de":  "Möbel",
                            "fr":  "meubles",
                            "es":  "muebles"
                        },
    "ooo.q.183.explanation":  {
                                  "nl":  "De andere drie zijn meubels; een fiets is een voertuig.",
                                  "de":  "Die anderen drei sind Möbel; Ein Fahrrad ist ein Fahrzeug.",
                                  "fr":  "Les trois autres sont des meubles ; un vélo est un véhicule.",
                                  "es":  "Los otros tres son muebles; una bicicleta es un vehículo."
                              },
    "ooo.q.184.choice.0":  {
                               "nl":  "Potlood",
                               "de":  "Bleistift",
                               "fr":  "Crayon",
                               "es":  "Lápiz"
                           },
    "ooo.q.184.choice.1":  {
                               "nl":  "Pen",
                               "de":  "Stift",
                               "fr":  "Stylo",
                               "es":  "Bolígrafo"
                           },
    "ooo.q.184.choice.2":  {
                               "nl":  "Markering",
                               "de":  "Markierung",
                               "fr":  "Marqueur",
                               "es":  "Marcador"
                           },
    "ooo.q.184.choice.3":  {
                               "nl":  "Banaan",
                               "de":  "Banane",
                               "fr":  "Banane",
                               "es":  "Plátano"
                           },
    "ooo.q.184.odd":  {
                          "nl":  "Banaan",
                          "de":  "Banane",
                          "fr":  "Banane",
                          "es":  "Plátano"
                      },
    "ooo.q.184.group":  {
                            "nl":  "schrijfhulpmiddelen",
                            "de":  "Schreibwerkzeuge",
                            "fr":  "outils d\u0027écriture",
                            "es":  "herramientas de escritura"
                        },
    "ooo.q.184.explanation":  {
                                  "nl":  "De andere drie zijn schrijfhulpmiddelen; een banaan is voedsel.",
                                  "de":  "Die anderen drei sind Schreibwerkzeuge; Eine Banane ist Essen.",
                                  "fr":  "Les trois autres sont des outils d’écriture ; une banane est de la nourriture.",
                                  "es":  "Los otros tres son herramientas de escritura; un plátano es comida."
                              },
    "ooo.q.185.choice.0":  {
                               "nl":  "Waterkoker",
                               "de":  "Wasserkocher",
                               "fr":  "Bouilloire",
                               "es":  "Hervidor"
                           },
    "ooo.q.185.choice.1":  {
                               "nl":  "Broodrooster",
                               "de":  "Toaster",
                               "fr":  "Grille-pain",
                               "es":  "Tostadora"
                           },
    "ooo.q.185.choice.2":  {
                               "nl":  "Blender",
                               "de":  "Mixer",
                               "fr":  "Mélangeur",
                               "es":  "Licuadora"
                           },
    "ooo.q.185.choice.3":  {
                               "nl":  "Sneaker",
                               "de":  "Sneaker",
                               "fr":  "Baskets",
                               "es":  "Zapatilla"
                           },
    "ooo.q.185.odd":  {
                          "nl":  "Sneaker",
                          "de":  "Sneaker",
                          "fr":  "Baskets",
                          "es":  "Zapatilla"
                      },
    "ooo.q.185.group":  {
                            "nl":  "keukenapparatuur",
                            "de":  "Küchengeräte",
                            "fr":  "appareils de cuisine",
                            "es":  "electrodomésticos de cocina"
                        },
    "ooo.q.185.explanation":  {
                                  "nl":  "De andere drie zijn keukenapparatuur; een sneaker is schoeisel.",
                                  "de":  "Die anderen drei sind Küchengeräte; Ein Sneaker ist Schuhwerk.",
                                  "fr":  "Les trois autres sont des appareils de cuisine ; une sneaker est une chaussure.",
                                  "es":  "Los otros tres son electrodomésticos de cocina; una zapatilla es calzado."
                              },
    "ooo.q.186.choice.0":  {
                               "nl":  "Klok",
                               "de":  "Uhr",
                               "fr":  "Horloge",
                               "es":  "Reloj"
                           },
    "ooo.q.186.choice.1":  {
                               "nl":  "Kijk",
                               "de":  "Beobachten Sie",
                               "fr":  "Regarder",
                               "es":  "Ver"
                           },
    "ooo.q.186.choice.2":  {
                               "nl":  "Kalender",
                               "de":  "Kalender",
                               "fr":  "Calendrier",
                               "es":  "Calendario"
                           },
    "ooo.q.186.choice.3":  {
                               "nl":  "Appel",
                               "de":  "Apfel",
                               "fr":  "Pomme",
                               "es":  "Manzana"
                           },
    "ooo.q.186.odd":  {
                          "nl":  "Appel",
                          "de":  "Apfel",
                          "fr":  "Pomme",
                          "es":  "Manzana"
                      },
    "ooo.q.186.group":  {
                            "nl":  "tijdwaarnemingsartikelen",
                            "de":  "Zeitmessgeräte",
                            "fr":  "articles de chronométrage",
                            "es":  "elementos de cronometraje"
                        },
    "ooo.q.186.explanation":  {
                                  "nl":  "De andere drie helpen bij het bijhouden van tijd of datums; een appel is vrucht.",
                                  "de":  "Die anderen drei helfen dabei, Zeit oder Daten zu verfolgen. Ein Apfel ist Frucht.",
                                  "fr":  "Les trois autres aident à suivre l’heure ou les dates ; une pomme est un fruit.",
                                  "es":  "Los otros tres ayudan a realizar un seguimiento del tiempo o las fechas; una manzana es fruta."
                              },
    "ooo.q.187.choice.0":  {
                               "nl":  "Koffer",
                               "de":  "Koffer",
                               "fr":  "Valise",
                               "es":  "Maleta"
                           },
    "ooo.q.187.choice.1":  {
                               "nl":  "Rugzak",
                               "de":  "Rucksack",
                               "fr":  "Sac à dos",
                               "es":  "Mochila"
                           },
    "ooo.q.187.choice.2":  {
                               "nl":  "Handtas",
                               "de":  "Handtasche",
                               "fr":  "Sac à main",
                               "es":  "Bolso"
                           },
    "ooo.q.187.choice.3":  {
                               "nl":  "Koelkast",
                               "de":  "Kühlschrank",
                               "fr":  "Réfrigérateur",
                               "es":  "Refrigerador"
                           },
    "ooo.q.187.odd":  {
                          "nl":  "Koelkast",
                          "de":  "Kühlschrank",
                          "fr":  "Réfrigérateur",
                          "es":  "Refrigerador"
                      },
    "ooo.q.187.group":  {
                            "nl":  "tassen om spullen in te vervoeren",
                            "de":  "Taschen zum Tragen von Gegenständen",
                            "fr":  "sacs pour transporter des affaires",
                            "es":  "bolsas para llevar pertenencias"
                        },
    "ooo.q.187.explanation":  {
                                  "nl":  "De andere drie zijn tassen; een koelkast is een apparaat.",
                                  "de":  "Die anderen drei sind Taschen; Ein Kühlschrank ist ein Gerät.",
                                  "fr":  "Les trois autres sont des sacs ; un réfrigérateur est un appareil électroménager.",
                                  "es":  "Los otros tres son bolsos; un frigorífico es un electrodoméstico."
                              },
    "ooo.q.188.choice.0":  {
                               "nl":  "Mok",
                               "de":  "Becher",
                               "fr":  "Tasse",
                               "es":  "Taza"
                           },
    "ooo.q.188.choice.1":  {
                               "nl":  "Glas",
                               "de":  "Glas",
                               "fr":  "Verre",
                               "es":  "Vidrio"
                           },
    "ooo.q.188.choice.2":  {
                               "nl":  "Kop",
                               "de":  "Tasse",
                               "fr":  "Coupe",
                               "es":  "Copa"
                           },
    "ooo.q.188.choice.3":  {
                               "nl":  "Hoed",
                               "de":  "Hut",
                               "fr":  "Chapeau",
                               "es":  "Sombrero"
                           },
    "ooo.q.188.odd":  {
                          "nl":  "Hoed",
                          "de":  "Hut",
                          "fr":  "Chapeau",
                          "es":  "Sombrero"
                      },
    "ooo.q.188.group":  {
                            "nl":  "drinkbekers",
                            "de":  "Trinkgefäße",
                            "fr":  "récipients à boire",
                            "es":  "vasos para beber"
                        },
    "ooo.q.188.explanation":  {
                                  "nl":  "De andere drie houden drankjes vast; op het hoofd wordt een hoed gedragen.",
                                  "de":  "Die anderen drei halten Getränke bereit; Auf dem Kopf wird ein Hut getragen.",
                                  "fr":  "Les trois autres tiennent des boissons ; un chapeau est porté sur la tête.",
                                  "es":  "Los otros tres sostienen bebidas; se lleva un sombrero en la cabeza."
                              },
    "ooo.q.189.choice.0":  {
                               "nl":  "Schroevendraaier",
                               "de":  "Schraubendreher",
                               "fr":  "Tournevis",
                               "es":  "Destornillador"
                           },
    "ooo.q.189.choice.1":  {
                               "nl":  "Hamer",
                               "de":  "Hammer",
                               "fr":  "Marteau",
                               "es":  "Martillo"
                           },
    "ooo.q.189.choice.2":  {
                               "nl":  "Moersleutel",
                               "de":  "Schraubenschlüssel",
                               "fr":  "Clé",
                               "es":  "Llave inglesa"
                           },
    "ooo.q.189.choice.3":  {
                               "nl":  "Kussen",
                               "de":  "Kissen",
                               "fr":  "Oreiller",
                               "es":  "Almohada"
                           },
    "ooo.q.189.odd":  {
                          "nl":  "Kussen",
                          "de":  "Kissen",
                          "fr":  "Oreiller",
                          "es":  "Almohada"
                      },
    "ooo.q.189.group":  {
                            "nl":  "handgereedschap",
                            "de":  "Handwerkzeuge",
                            "fr":  "outils à main",
                            "es":  "herramientas manuales"
                        },
    "ooo.q.189.explanation":  {
                                  "nl":  "De andere drie zijn handgereedschap; een kussen is beddengoed.",
                                  "de":  "Die anderen drei sind Handwerkzeuge; Ein Kissen ist Bettzeug.",
                                  "fr":  "Les trois autres sont des outils à main ; un oreiller est une literie.",
                                  "es":  "Los otros tres son herramientas manuales; una almohada es ropa de cama."
                              },
    "ooo.q.190.choice.0":  {
                               "nl":  "Bank",
                               "de":  "Sofa",
                               "fr":  "Canapé",
                               "es":  "Sofá"
                           },
    "ooo.q.190.choice.1":  {
                               "nl":  "Fauteuil",
                               "de":  "Sessel",
                               "fr":  "Fauteuil",
                               "es":  "Sillón"
                           },
    "ooo.q.190.choice.2":  {
                               "nl":  "Fauteuil",
                               "de":  "Liege",
                               "fr":  "Fauteuil inclinable",
                               "es":  "Sillón reclinable"
                           },
    "ooo.q.190.choice.3":  {
                               "nl":  "Boekenplank",
                               "de":  "Bücherregal",
                               "fr":  "Bibliothèque",
                               "es":  "Estantería"
                           },
    "ooo.q.190.odd":  {
                          "nl":  "Boekenplank",
                          "de":  "Bücherregal",
                          "fr":  "Bibliothèque",
                          "es":  "Estantería"
                      },
    "ooo.q.190.group":  {
                            "nl":  "zitmeubelen",
                            "de":  "Sitzmöbel",
                            "fr":  "meubles de sièges",
                            "es":  "muebles para sentarse"
                        },
    "ooo.q.190.explanation":  {
                                  "nl":  "De andere drie zijn gemaakt om op te zitten; een boekenplank bewaart boeken.",
                                  "de":  "Die anderen drei sind zum Sitzen gedacht; Ein Bücherregal lagert Bücher.",
                                  "fr":  "Les trois autres sont faits pour s\u0027asseoir ; une étagère stocke des livres.",
                                  "es":  "Los otros tres están hechos para sentarse; una estantería almacena libros."
                              },
    "ooo.q.191.choice.0":  {
                               "nl":  "Vergiet",
                               "de":  "Sieb",
                               "fr":  "Passoire",
                               "es":  "Colador"
                           },
    "ooo.q.191.choice.1":  {
                               "nl":  "Zeef",
                               "de":  "Sieb",
                               "fr":  "Tamis",
                               "es":  "Tamiz"
                           },
    "ooo.q.191.choice.2":  {
                               "nl":  "Zeef",
                               "de":  "Sieb",
                               "fr":  "Crépine",
                               "es":  "Colador"
                           },
    "ooo.q.191.choice.3":  {
                               "nl":  "Steelpan",
                               "de":  "Topf",
                               "fr":  "Casserole",
                               "es":  "Cacerola"
                           },
    "ooo.q.191.odd":  {
                          "nl":  "Steelpan",
                          "de":  "Topf",
                          "fr":  "Casserole",
                          "es":  "Cacerola"
                      },
    "ooo.q.191.group":  {
                            "nl":  "keukengereedschap dat leegloopt of zeven",
                            "de":  "Küchengeräte zum Abtropfen oder Sieben",
                            "fr":  "ustensiles de cuisine qui égouttent ou tamisent",
                            "es":  "utensilios de cocina que escurren o tamizan"
                        },
    "ooo.q.191.explanation":  {
                                  "nl":  "De andere drie laten vloeistof of fijne deeltjes door; een pan bevat voedsel terwijl het kookt.",
                                  "de":  "Die anderen drei lassen Flüssigkeit oder feine Partikel durch; Ein Topf hält Essen, während es kocht.",
                                  "fr":  "Les trois autres laissent passer du liquide ou des particules fines ; une casserole contient de la nourriture pendant la cuisson.",
                                  "es":  "Los otros tres dejan pasar líquidos o partículas finas; una cacerola contiene comida mientras se cocina."
                              },
    "ooo.q.192.choice.0":  {
                               "nl":  "Envelop",
                               "de":  "Umschlag",
                               "fr":  "Enveloppe",
                               "es":  "Sobre"
                           },
    "ooo.q.192.choice.1":  {
                               "nl":  "Briefkaart",
                               "de":  "Postkarte",
                               "fr":  "Carte postale",
                               "es":  "Postal"
                           },
    "ooo.q.192.choice.2":  {
                               "nl":  "Stempel",
                               "de":  "Stempel",
                               "fr":  "Timbre",
                               "es":  "Sello"
                           },
    "ooo.q.192.choice.3":  {
                               "nl":  "Nietmachine",
                               "de":  "Hefter",
                               "fr":  "Agrafeuse",
                               "es":  "Grapadora"
                           },
    "ooo.q.192.odd":  {
                          "nl":  "Nietmachine",
                          "de":  "Hefter",
                          "fr":  "Agrafeuse",
                          "es":  "Grapadora"
                      },
    "ooo.q.192.group":  {
                            "nl":  "items die worden gebruikt om traditionele post te verzenden",
                            "de":  "Elemente, die zum Versenden herkömmlicher Post verwendet werden",
                            "fr":  "objets utilisés pour envoyer du courrier traditionnel",
                            "es":  "Artículos utilizados para enviar correo tradicional."
                        },
    "ooo.q.192.explanation":  {
                                  "nl":  "De andere drie worden gebruikt om post klaar te maken of te betalen; een nietmachine voegt vellen samen.",
                                  "de":  "Die anderen drei dienen der Vorbereitung oder Bezahlung der Post; Ein Hefter verbindet Blätter.",
                                  "fr":  "Les trois autres servent à préparer ou à payer le courrier ; une agrafeuse relie les feuilles ensemble.",
                                  "es":  "Los otros tres se utilizan para preparar o pagar el correo; una grapadora une las hojas."
                              },
    "ooo.q.193.choice.0":  {
                               "nl":  "Shampoo",
                               "de":  "Shampoo",
                               "fr":  "Shampoing",
                               "es":  "Champú"
                           },
    "ooo.q.193.choice.1":  {
                               "nl":  "Conditioner",
                               "de":  "Spülung",
                               "fr":  "Après-shampooing",
                               "es":  "Acondicionador"
                           },
    "ooo.q.193.choice.2":  {
                               "nl":  "Lichaamswas",
                               "de":  "Körperwäsche",
                               "fr":  "Gel douche",
                               "es":  "Gel de baño"
                           },
    "ooo.q.193.choice.3":  {
                               "nl":  "Wasmiddel",
                               "de":  "Waschmittel",
                               "fr":  "Détergent à lessive",
                               "es":  "Detergente para ropa"
                           },
    "ooo.q.193.odd":  {
                          "nl":  "Wasmiddel",
                          "de":  "Waschmittel",
                          "fr":  "Détergent à lessive",
                          "es":  "Detergente para ropa"
                      },
    "ooo.q.193.group":  {
                            "nl":  "producten voor persoonlijke verzorging",
                            "de":  "Körperpflegeprodukte",
                            "fr":  "produits de soins personnels",
                            "es":  "productos de cuidado personal"
                        },
    "ooo.q.193.explanation":  {
                                  "nl":  "De andere drie worden gebruikt om het lichaam of het haar te wassen; wasmiddel is voor kleding.",
                                  "de":  "Die anderen drei werden zum Waschen des Körpers oder der Haare verwendet; Waschmittel ist für Kleidung.",
                                  "fr":  "Les trois autres servent à laver le corps ou les cheveux ; la lessive est destinée aux vêtements.",
                                  "es":  "Los otros tres se utilizan para lavar el cuerpo o el cabello; El detergente para ropa es para la ropa."
                              },
    "ooo.q.194.choice.0":  {
                               "nl":  "Schroef",
                               "de":  "Schraube",
                               "fr":  "Vis",
                               "es":  "Tornillo"
                           },
    "ooo.q.194.choice.1":  {
                               "nl":  "Nagel",
                               "de":  "Nagel",
                               "fr":  "Clou",
                               "es":  "Uñas"
                           },
    "ooo.q.194.choice.2":  {
                               "nl":  "Bout",
                               "de":  "Bolzen",
                               "fr":  "Boulon",
                               "es":  "Perno"
                           },
    "ooo.q.194.choice.3":  {
                               "nl":  "Wasmachine",
                               "de":  "Waschmaschine",
                               "fr":  "Laveuse",
                               "es":  "Lavadora"
                           },
    "ooo.q.194.odd":  {
                          "nl":  "Wasmachine",
                          "de":  "Waschmaschine",
                          "fr":  "Laveuse",
                          "es":  "Lavadora"
                      },
    "ooo.q.194.group":  {
                            "nl":  "bevestigingsmiddelen die in materiaal worden gedreven of geschroefd",
                            "de":  "Befestigungselemente, die in das Material eingetrieben oder eingeschraubt werden",
                            "fr":  "fixations enfoncées ou filetées dans le matériau",
                            "es":  "sujetadores que se introducen o roscan en el material"
                        },
    "ooo.q.194.explanation":  {
                                  "nl":  "De schroef, spijker en bout bevestigen materialen door erin te draaien of te schroefdraad; een ring is een steunring.",
                                  "de":  "Die Schrauben, Nägel und Bolzen befestigen Materialien durch Eintreiben oder Einschrauben; Eine Unterlegscheibe ist ein Stützring.",
                                  "fr":  "Les vis, clous et boulons fixent les matériaux en étant enfoncés ou filetés ; une rondelle est un anneau de support.",
                                  "es":  "El tornillo, el clavo y el perno sujetan los materiales al introducirlos o roscarlos; una arandela es un anillo de soporte."
                              },
    "ooo.q.195.choice.0":  {
                               "nl":  "Thermometer",
                               "de":  "Thermometer",
                               "fr":  "Thermomètre",
                               "es":  "Termómetro"
                           },
    "ooo.q.195.choice.1":  {
                               "nl":  "Schaal",
                               "de":  "Maßstab",
                               "fr":  "Échelle",
                               "es":  "Escala"
                           },
    "ooo.q.195.choice.2":  {
                               "nl":  "Meetlint",
                               "de":  "Maßband",
                               "fr":  "Ruban à mesurer",
                               "es":  "Cinta métrica"
                           },
    "ooo.q.195.choice.3":  {
                               "nl":  "Kompas",
                               "de":  "Kompass",
                               "fr":  "Boussole",
                               "es":  "Brújula"
                           },
    "ooo.q.195.odd":  {
                          "nl":  "Kompas",
                          "de":  "Kompass",
                          "fr":  "Boussole",
                          "es":  "Brújula"
                      },
    "ooo.q.195.group":  {
                            "nl":  "instrumenten die een fysieke grootheid meten",
                            "de":  "Instrumente, die eine physikalische Größe messen",
                            "fr":  "instruments qui mesurent une quantité physique",
                            "es":  "Instrumentos que miden una cantidad física."
                        },
    "ooo.q.195.explanation":  {
                                  "nl":  "Een thermometer, schaal en meetlint meten de temperatuur, massa en lengte; een kompas geeft richting aan.",
                                  "de":  "Ein Thermometer, eine Waage und ein Maßband messen Temperatur, Masse und Länge; ein Kompass zeigt die Richtung an.",
                                  "fr":  "Un thermomètre, une balance et un ruban à mesurer mesurent la température, la masse et la longueur ; une boussole indique la direction.",
                                  "es":  "Un termómetro, una báscula y una cinta métrica miden la temperatura, la masa y la longitud; una brújula muestra la dirección."
                              },
    "ooo.q.196.choice.0":  {
                               "nl":  "Theepot",
                               "de":  "Teekanne",
                               "fr":  "Théière",
                               "es":  "Tetera"
                           },
    "ooo.q.196.choice.1":  {
                               "nl":  "Waterkoker",
                               "de":  "Wasserkocher",
                               "fr":  "Bouilloire",
                               "es":  "Hervidor"
                           },
    "ooo.q.196.choice.2":  {
                               "nl":  "Steelpan",
                               "de":  "Topf",
                               "fr":  "Casserole",
                               "es":  "Cacerola"
                           },
    "ooo.q.196.choice.3":  {
                               "nl":  "Sneakers",
                               "de":  "Turnschuhe",
                               "fr":  "Baskets",
                               "es":  "Zapatillas"
                           },
    "ooo.q.196.odd":  {
                          "nl":  "Sneakers",
                          "de":  "Turnschuhe",
                          "fr":  "Baskets",
                          "es":  "Zapatillas"
                      },
    "ooo.q.196.group":  {
                            "nl":  "keuken artikelen",
                            "de":  "Küchenartikel",
                            "fr":  "articles de cuisine",
                            "es":  "artículos de cocina"
                        },
    "ooo.q.196.explanation":  {
                                  "nl":  "De andere drie zijn keukenartikelen; sneakers zijn schoenen.",
                                  "de":  "Die anderen drei sind Küchenartikel; Turnschuhe sind Schuhwerk.",
                                  "fr":  "Les trois autres sont des articles de cuisine ; les baskets sont des chaussures.",
                                  "es":  "Los otros tres son artículos de cocina; Las zapatillas son calzado."
                              },
    "ooo.q.197.choice.0":  {
                               "nl":  "Kam",
                               "de":  "Kamm",
                               "fr":  "Peigne",
                               "es":  "Peine"
                           },
    "ooo.q.197.choice.1":  {
                               "nl":  "Haarborstel",
                               "de":  "Haarbürste",
                               "fr":  "Brosse à cheveux",
                               "es":  "Cepillo para el cabello"
                           },
    "ooo.q.197.choice.2":  {
                               "nl":  "Tandenborstel",
                               "de":  "Zahnbürste",
                               "fr":  "Brosse à dents",
                               "es":  "Cepillo de dientes"
                           },
    "ooo.q.197.choice.3":  {
                               "nl":  "Kussen",
                               "de":  "Kissen",
                               "fr":  "Oreiller",
                               "es":  "Almohada"
                           },
    "ooo.q.197.odd":  {
                          "nl":  "Kussen",
                          "de":  "Kissen",
                          "fr":  "Oreiller",
                          "es":  "Almohada"
                      },
    "ooo.q.197.group":  {
                            "nl":  "persoonlijke verzorgingshulpmiddelen",
                            "de":  "Persönliche Pflegeutensilien",
                            "fr":  "outils de soins personnels",
                            "es":  "herramientas de aseo personal"
                        },
    "ooo.q.197.explanation":  {
                                  "nl":  "De andere drie worden gebruikt voor persoonlijke verzorging; een kussen is beddengoed.",
                                  "de":  "Die anderen drei werden für die Körperpflege verwendet; Ein Kissen ist Bettzeug.",
                                  "fr":  "Les trois autres sont utilisés pour le toilettage personnel ; un oreiller est une literie.",
                                  "es":  "Los otros tres se utilizan para el aseo personal; una almohada es ropa de cama."
                              },
    "ooo.q.198.choice.0":  {
                               "nl":  "Kom",
                               "de":  "Schüssel",
                               "fr":  "Bol",
                               "es":  "Tazón"
                           },
    "ooo.q.198.choice.1":  {
                               "nl":  "Plaat",
                               "de":  "Platte",
                               "fr":  "Assiette",
                               "es":  "Plato"
                           },
    "ooo.q.198.choice.2":  {
                               "nl":  "Mok",
                               "de":  "Becher",
                               "fr":  "Tasse",
                               "es":  "Taza"
                           },
    "ooo.q.198.choice.3":  {
                               "nl":  "Koekenpan",
                               "de":  "Bratpfanne",
                               "fr":  "Poêle à frire",
                               "es":  "Sartén"
                           },
    "ooo.q.198.odd":  {
                          "nl":  "Koekenpan",
                          "de":  "Bratpfanne",
                          "fr":  "Poêle à frire",
                          "es":  "Sartén"
                      },
    "ooo.q.198.group":  {
                            "nl":  "serviesgoed voor het serveren van eten of drinken",
                            "de":  "Geschirr zum Servieren von Speisen oder Getränken",
                            "fr":  "vaisselle pour servir de la nourriture ou des boissons",
                            "es":  "vajilla para servir comida o bebidas"
                        },
    "ooo.q.198.explanation":  {
                                  "nl":  "De kom, het bord en de mok zijn serviesgoed; een koekenpan is kookgerei.",
                                  "de":  "Schüssel, Teller und Becher sind Geschirr; Eine Bratpfanne ist Kochgeschirr.",
                                  "fr":  "Le bol, l\u0027assiette et la tasse sont de la vaisselle ; une poêle à frire est un ustensile de cuisine.",
                                  "es":  "El cuenco, el plato y la taza son vajillas; una sartén es un utensilio de cocina."
                              },
    "ooo.q.199.choice.0":  {
                               "nl":  "Heerser",
                               "de":  "Herrscher",
                               "fr":  "Règle",
                               "es":  "Gobernante"
                           },
    "ooo.q.199.choice.1":  {
                               "nl":  "Meetlint",
                               "de":  "Maßband",
                               "fr":  "Ruban à mesurer",
                               "es":  "Cinta métrica"
                           },
    "ooo.q.199.choice.2":  {
                               "nl":  "Remklauw",
                               "de":  "Bremssattel",
                               "fr":  "Étrier",
                               "es":  "Calibre"
                           },
    "ooo.q.199.choice.3":  {
                               "nl":  "Tandenborstel",
                               "de":  "Zahnbürste",
                               "fr":  "Brosse à dents",
                               "es":  "Cepillo de dientes"
                           },
    "ooo.q.199.odd":  {
                          "nl":  "Tandenborstel",
                          "de":  "Zahnbürste",
                          "fr":  "Brosse à dents",
                          "es":  "Cepillo de dientes"
                      },
    "ooo.q.199.group":  {
                            "nl":  "gereedschap voor het meten van lengte of afstand",
                            "de":  "Werkzeuge zum Messen von Längen oder Entfernungen",
                            "fr":  "outils pour mesurer la longueur ou la distance",
                            "es":  "Herramientas para medir longitudes o distancias."
                        },
    "ooo.q.199.explanation":  {
                                  "nl":  "De andere drie meten lengte of afstand; een tandenborstel is voor tandheelkundige zorg.",
                                  "de":  "Die anderen drei messen Länge oder Entfernung; Eine Zahnbürste dient der Zahnpflege.",
                                  "fr":  "Les trois autres mesurent la longueur ou la distance ; une brosse à dents est destinée aux soins dentaires.",
                                  "es":  "Los otros tres miden longitud o distancia; un cepillo de dientes es para el cuidado dental."
                              },
    "ooo.q.200.choice.0":  {
                               "nl":  "Hangslot",
                               "de":  "Vorhängeschloss",
                               "fr":  "Cadenas",
                               "es":  "Candado"
                           },
    "ooo.q.200.choice.1":  {
                               "nl":  "Sleutel",
                               "de":  "Schlüssel",
                               "fr":  "Clé",
                               "es":  "Clave"
                           },
    "ooo.q.200.choice.2":  {
                               "nl":  "Combinatieslot",
                               "de":  "Zahlenschloss",
                               "fr":  "Serrure à combinaison",
                               "es":  "Cerradura de combinación"
                           },
    "ooo.q.200.choice.3":  {
                               "nl":  "Schroevendraaier",
                               "de":  "Schraubendreher",
                               "fr":  "Tournevis",
                               "es":  "Destornillador"
                           },
    "ooo.q.200.odd":  {
                          "nl":  "Schroevendraaier",
                          "de":  "Schraubendreher",
                          "fr":  "Tournevis",
                          "es":  "Destornillador"
                      },
    "ooo.q.200.group":  {
                            "nl":  "voorwerpen die worden gebruikt om sloten te beveiligen of te openen",
                            "de":  "Gegenstände, die zum Sichern oder Öffnen von Schlössern verwendet werden",
                            "fr":  "objets utilisés pour sécuriser ou ouvrir les serrures",
                            "es":  "Artículos utilizados para asegurar o abrir cerraduras."
                        },
    "ooo.q.200.explanation":  {
                                  "nl":  "De andere drie stellen iets vast of openen een slot; een schroevendraaier is een handgereedschap.",
                                  "de":  "Die anderen drei sichern etwas oder öffnen ein Schloss; Ein Schraubenzieher ist ein Handwerkzeug.",
                                  "fr":  "Les trois autres sécurisent quelque chose ou ouvrent une serrure ; un tournevis est un outil à main.",
                                  "es":  "Los otros tres aseguran algo o abren una cerradura; un destornillador es una herramienta manual."
                              },
    "ooo.q.201.choice.0":  {
                               "nl":  "Gitaar",
                               "de":  "Gitarre",
                               "fr":  "Guitare",
                               "es":  "Guitarra"
                           },
    "ooo.q.201.choice.1":  {
                               "nl":  "Piano",
                               "de":  "Klavier",
                               "fr":  "Piano",
                               "es":  "Piano"
                           },
    "ooo.q.201.choice.2":  {
                               "nl":  "Viool",
                               "de":  "Violine",
                               "fr":  "Violon",
                               "es":  "Violín"
                           },
    "ooo.q.201.choice.3":  {
                               "nl":  "Trompet",
                               "de":  "Trompete",
                               "fr":  "Trompette",
                               "es":  "Trompeta"
                           },
    "ooo.q.201.odd":  {
                          "nl":  "Trompet",
                          "de":  "Trompete",
                          "fr":  "Trompette",
                          "es":  "Trompeta"
                      },
    "ooo.q.201.group":  {
                            "nl":  "instrumenten die geen blaasmondstuk gebruiken",
                            "de":  "Instrumente, die kein Blasmundstück verwenden",
                            "fr":  "instruments qui n\u0027utilisent pas d\u0027embouchure à vent",
                            "es":  "Instrumentos que no utilizan boquilla de viento."
                        },
    "ooo.q.201.explanation":  {
                                  "nl":  "De andere drie zijn snaar- of toetsinstrumenten; een trompet is een koperen blaasinstrument.",
                                  "de":  "Die anderen drei sind Streich- oder Tasteninstrumente; Eine Trompete ist ein Blechblasinstrument.",
                                  "fr":  "Les trois autres sont des instruments à cordes ou à clavier ; une trompette est un instrument à vent en cuivre.",
                                  "es":  "Los otros tres son instrumentos de cuerda o de teclado; una trompeta es un instrumento de viento de metal."
                              },
    "ooo.q.202.choice.0":  {
                               "nl":  "Trommels",
                               "de":  "Schlagzeug",
                               "fr":  "Tambours",
                               "es":  "Tambores"
                           },
    "ooo.q.202.choice.1":  {
                               "nl":  "Tamboerijn",
                               "de":  "Tamburin",
                               "fr":  "Tambourin",
                               "es":  "Pandereta"
                           },
    "ooo.q.202.choice.2":  {
                               "nl":  "Bekkens",
                               "de":  "Becken",
                               "fr":  "Cymbales",
                               "es":  "Platillos"
                           },
    "ooo.q.202.choice.3":  {
                               "nl":  "Fluit",
                               "de":  "Flöte",
                               "fr":  "Flûte",
                               "es":  "Flauta"
                           },
    "ooo.q.202.odd":  {
                          "nl":  "Fluit",
                          "de":  "Flöte",
                          "fr":  "Flûte",
                          "es":  "Flauta"
                      },
    "ooo.q.202.group":  {
                            "nl":  "percussie instrumenten",
                            "de":  "Schlaginstrumente",
                            "fr":  "instruments à percussion",
                            "es":  "instrumentos de percusión"
                        },
    "ooo.q.202.explanation":  {
                                  "nl":  "De andere drie zijn percussie-instrumenten; een fluit is een blaasinstrument.",
                                  "de":  "Die anderen drei sind Schlaginstrumente; Eine Flöte ist ein Blasinstrument.",
                                  "fr":  "Les trois autres sont des instruments à percussion ; une flûte est un instrument à vent.",
                                  "es":  "Los otros tres son instrumentos de percusión; una flauta es un instrumento de viento."
                              },
    "ooo.q.203.choice.0":  {
                               "nl":  "Rots",
                               "de":  "Rock",
                               "fr":  "Roche",
                               "es":  "Roca"
                           },
    "ooo.q.203.choice.1":  {
                               "nl":  "Jazz",
                               "de":  "Jazz",
                               "fr":  "Jazz",
                               "es":  "Jazz"
                           },
    "ooo.q.203.choice.2":  {
                               "nl":  "Hiphop",
                               "de":  "Hip-Hop",
                               "fr":  "Hip-hop",
                               "es":  "Hip-hop"
                           },
    "ooo.q.203.choice.3":  {
                               "nl":  "Cello",
                               "de":  "Cello",
                               "fr":  "Violoncelle",
                               "es":  "Violonchelo"
                           },
    "ooo.q.203.odd":  {
                          "nl":  "Cello",
                          "de":  "Cello",
                          "fr":  "Violoncelle",
                          "es":  "Violonchelo"
                      },
    "ooo.q.203.group":  {
                            "nl":  "muziekgenres",
                            "de":  "Musikgenres",
                            "fr":  "genres musicaux",
                            "es":  "géneros musicales"
                        },
    "ooo.q.203.explanation":  {
                                  "nl":  "De andere drie zijn muziekgenres; een cello is een instrument.",
                                  "de":  "Die anderen drei sind Musikgenres; Ein Cello ist ein Instrument.",
                                  "fr":  "Les trois autres sont des genres musicaux ; un violoncelle est un instrument.",
                                  "es":  "Los otros tres son géneros musicales; un violonchelo es un instrumento."
                              },
    "ooo.q.204.choice.0":  {
                               "nl":  "Adèle",
                               "de":  "Adele",
                               "fr":  "Adèle",
                               "es":  "Adela"
                           },
    "ooo.q.204.choice.1":  {
                               "nl":  "Taylor Swift",
                               "de":  "Taylor Swift",
                               "fr":  "Taylor Swift",
                               "es":  "Taylor Swift"
                           },
    "ooo.q.204.choice.2":  {
                               "nl":  "Beyonce",
                               "de":  "Beyoncé",
                               "fr":  "Beyoncé",
                               "es":  "Beyoncé"
                           },
    "ooo.q.204.choice.3":  {
                               "nl":  "Mozart",
                               "de":  "Mozart",
                               "fr":  "Mozart",
                               "es":  "Mozart"
                           },
    "ooo.q.204.odd":  {
                          "nl":  "Mozart",
                          "de":  "Mozart",
                          "fr":  "Mozart",
                          "es":  "Mozart"
                      },
    "ooo.q.204.group":  {
                            "nl":  "moderne populaire muziekartiesten",
                            "de":  "Künstler der modernen Popmusik",
                            "fr":  "artistes de musique populaire moderne",
                            "es":  "artistas de música popular moderna"
                        },
    "ooo.q.204.explanation":  {
                                  "nl":  "De andere drie zijn moderne popartiesten; Mozart was een klassieke componist.",
                                  "de":  "Die anderen drei sind moderne Pop-Künstler; Mozart war ein klassischer Komponist.",
                                  "fr":  "Les trois autres sont des artistes pop modernes ; Mozart était un compositeur classique.",
                                  "es":  "Los otros tres son artistas pop modernos; Mozart fue un compositor clásico."
                              },
    "ooo.q.205.choice.0":  {
                               "nl":  "Saxofoon",
                               "de":  "Saxophon",
                               "fr":  "Saxophone",
                               "es":  "Saxofón"
                           },
    "ooo.q.205.choice.1":  {
                               "nl":  "Trompet",
                               "de":  "Trompete",
                               "fr":  "Trompette",
                               "es":  "Trompeta"
                           },
    "ooo.q.205.choice.2":  {
                               "nl":  "Klarinet",
                               "de":  "Klarinette",
                               "fr":  "Clarinette",
                               "es":  "Clarinete"
                           },
    "ooo.q.205.choice.3":  {
                               "nl":  "Drumstel",
                               "de":  "Schlagzeug",
                               "fr":  "Kit de batterie",
                               "es":  "Batería"
                           },
    "ooo.q.205.odd":  {
                          "nl":  "Drumstel",
                          "de":  "Schlagzeug",
                          "fr":  "Kit de batterie",
                          "es":  "Batería"
                      },
    "ooo.q.205.group":  {
                            "nl":  "blaasinstrumenten",
                            "de":  "Blasinstrumente",
                            "fr":  "instruments à vent",
                            "es":  "instrumentos de viento"
                        },
    "ooo.q.205.explanation":  {
                                  "nl":  "De andere drie zijn blaasinstrumenten; een drumstel is percussie.",
                                  "de":  "Die anderen drei sind Blasinstrumente; Ein Schlagzeug ist Percussion.",
                                  "fr":  "Les trois autres sont des instruments à vent ; une batterie est une percussion.",
                                  "es":  "Los otros tres son instrumentos de viento; una batería es percusión."
                              },
    "ooo.q.206.choice.0":  {
                               "nl":  "Viool",
                               "de":  "Violine",
                               "fr":  "Violon",
                               "es":  "Violín"
                           },
    "ooo.q.206.choice.1":  {
                               "nl":  "Altviool",
                               "de":  "Viola",
                               "fr":  "Alto",
                               "es":  "Viola"
                           },
    "ooo.q.206.choice.2":  {
                               "nl":  "Cello",
                               "de":  "Cello",
                               "fr":  "Violoncelle",
                               "es":  "Violonchelo"
                           },
    "ooo.q.206.choice.3":  {
                               "nl":  "Harp",
                               "de":  "Harfe",
                               "fr":  "Harpe",
                               "es":  "Arpa"
                           },
    "ooo.q.206.odd":  {
                          "nl":  "Harp",
                          "de":  "Harfe",
                          "fr":  "Harpe",
                          "es":  "Arpa"
                      },
    "ooo.q.206.group":  {
                            "nl":  "strijkinstrumenten",
                            "de":  "Streichinstrumente",
                            "fr":  "instruments à cordes frottées",
                            "es":  "instrumentos de cuerda frotada"
                        },
    "ooo.q.206.explanation":  {
                                  "nl":  "De viool, altviool en cello zijn strijkinstrumenten; er wordt een harp tokkeld.",
                                  "de":  "Geige, Bratsche und Cello sind Streichinstrumente; eine Harfe wird gezupft.",
                                  "fr":  "Le violon, l\u0027alto et le violoncelle sont des instruments à cordes frottées ; une harpe est pincée.",
                                  "es":  "El violín, la viola y el violonchelo son instrumentos de cuerda frotada; se toca un arpa."
                              },
    "ooo.q.207.choice.0":  {
                               "nl":  "Spotify",
                               "de":  "Spotify",
                               "fr":  "Spotify",
                               "es":  "Spotify"
                           },
    "ooo.q.207.choice.1":  {
                               "nl":  "Apple-muziek",
                               "de":  "Apple-Musik",
                               "fr":  "Pomme Musique",
                               "es":  "Música de manzana"
                           },
    "ooo.q.207.choice.2":  {
                               "nl":  "GeluidCloud",
                               "de":  "SoundCloud",
                               "fr":  "SoundCloud",
                               "es":  "Nube de sonido"
                           },
    "ooo.q.207.choice.3":  {
                               "nl":  "Netflix",
                               "de":  "Netflix",
                               "fr":  "Netflix",
                               "es":  "Netflix"
                           },
    "ooo.q.207.odd":  {
                          "nl":  "Netflix",
                          "de":  "Netflix",
                          "fr":  "Netflix",
                          "es":  "Netflix"
                      },
    "ooo.q.207.group":  {
                            "nl":  "muziekstreamingdiensten",
                            "de":  "Musik-Streaming-Dienste",
                            "fr":  "services de streaming musical",
                            "es":  "servicios de transmisión de música"
                        },
    "ooo.q.207.explanation":  {
                                  "nl":  "De andere drie streamen voornamelijk muziek; Netflix streamt video.",
                                  "de":  "Die anderen drei streamen hauptsächlich Musik; Netflix streamt Videos.",
                                  "fr":  "Les trois autres diffusent principalement de la musique ; Netflix diffuse des vidéos.",
                                  "es":  "Los otros tres transmiten principalmente música; Netflix transmite vídeo."
                              },
    "ooo.q.208.choice.0":  {
                               "nl":  "Doen",
                               "de":  "Tun Sie es",
                               "fr":  "Faire",
                               "es":  "Hacer"
                           },
    "ooo.q.208.choice.1":  {
                               "nl":  "Re",
                               "de":  "Betreff",
                               "fr":  "Ré",
                               "es":  "Re"
                           },
    "ooo.q.208.choice.2":  {
                               "nl":  "Mi",
                               "de":  "Mi",
                               "fr":  "Mi",
                               "es":  "Mi"
                           },
    "ooo.q.208.choice.3":  {
                               "nl":  "G-sleutel",
                               "de":  "Violinschlüssel",
                               "fr":  "Clé de sol",
                               "es":  "Clave de sol"
                           },
    "ooo.q.208.odd":  {
                          "nl":  "G-sleutel",
                          "de":  "Violinschlüssel",
                          "fr":  "Clé de sol",
                          "es":  "Clave de sol"
                      },
    "ooo.q.208.group":  {
                            "nl":  "solfège lettergrepen",
                            "de":  "Solfège-Silben",
                            "fr":  "syllabes de solfège",
                            "es":  "sílabas de solfeo"
                        },
    "ooo.q.208.explanation":  {
                                  "nl":  "De andere drie zijn solfège-lettergrepen; een g-sleutel is een muzikaal symbool.",
                                  "de":  "Die anderen drei sind Solfège-Silben; Ein Violinschlüssel ist ein musikalisches Symbol.",
                                  "fr":  "Les trois autres sont des syllabes de solfège ; une clé de sol est un symbole musical.",
                                  "es":  "Las otras tres son sílabas de solfeo; una clave de sol es un símbolo musical."
                              },
    "ooo.q.209.choice.0":  {
                               "nl":  "Barok",
                               "de":  "Barock",
                               "fr":  "Baroque",
                               "es":  "Barroco"
                           },
    "ooo.q.209.choice.1":  {
                               "nl":  "Klassiek",
                               "de":  "Klassisch",
                               "fr":  "Classique",
                               "es":  "Clásico"
                           },
    "ooo.q.209.choice.2":  {
                               "nl":  "Romantisch",
                               "de":  "Romantisch",
                               "fr":  "Romantique",
                               "es":  "Romantico"
                           },
    "ooo.q.209.choice.3":  {
                               "nl":  "Reggae",
                               "de":  "Reggae",
                               "fr":  "Reggae",
                               "es":  "Reggae"
                           },
    "ooo.q.209.odd":  {
                          "nl":  "Reggae",
                          "de":  "Reggae",
                          "fr":  "Reggae",
                          "es":  "Reggae"
                      },
    "ooo.q.209.group":  {
                            "nl":  "periodes in de westerse klassieke muziek",
                            "de":  "Perioden der westlichen klassischen Musik",
                            "fr":  "périodes de la musique classique occidentale",
                            "es":  "Períodos de la música clásica occidental."
                        },
    "ooo.q.209.explanation":  {
                                  "nl":  "De andere drie naamperioden in de westerse klassieke muziek; reggae is een muziekgenre.",
                                  "de":  "Die anderen drei Namensperioden in der westlichen klassischen Musik; Reggae ist ein Musikgenre.",
                                  "fr":  "Les trois autres périodes de noms de la musique classique occidentale ; le reggae est un genre musical.",
                                  "es":  "Los otros tres nombran períodos de la música clásica occidental; El reggae es un género musical."
                              },
    "ooo.q.210.choice.0":  {
                               "nl":  "Microfoon",
                               "de":  "Mikrofon",
                               "fr":  "Micro",
                               "es":  "Micrófono"
                           },
    "ooo.q.210.choice.1":  {
                               "nl":  "Versterker",
                               "de":  "Verstärker",
                               "fr":  "Amplificateur",
                               "es":  "Amplificador"
                           },
    "ooo.q.210.choice.2":  {
                               "nl":  "Koptelefoon",
                               "de":  "Kopfhörer",
                               "fr":  "Écouteurs",
                               "es":  "Auriculares"
                           },
    "ooo.q.210.choice.3":  {
                               "nl":  "Broodrooster",
                               "de":  "Toaster",
                               "fr":  "Grille-pain",
                               "es":  "Tostadora"
                           },
    "ooo.q.210.odd":  {
                          "nl":  "Broodrooster",
                          "de":  "Toaster",
                          "fr":  "Grille-pain",
                          "es":  "Tostadora"
                      },
    "ooo.q.210.group":  {
                            "nl":  "audio-apparatuur",
                            "de":  "Audiogeräte",
                            "fr":  "équipement audio",
                            "es":  "equipo de audio"
                        },
    "ooo.q.210.explanation":  {
                                  "nl":  "De andere drie zijn audioapparatuur; een broodrooster is een keukenapparaat.",
                                  "de":  "Die anderen drei sind Audiogeräte; Ein Toaster ist ein Küchengerät.",
                                  "fr":  "Les trois autres sont des équipements audio ; un grille-pain est un appareil de cuisine.",
                                  "es":  "Los otros tres son equipos de audio; una tostadora es un aparato de cocina."
                              },
    "ooo.q.211.choice.0":  {
                               "nl":  "Bes",
                               "de":  "B-Dur",
                               "fr":  "Si bémol",
                               "es":  "Si bemol"
                           },
    "ooo.q.211.choice.1":  {
                               "nl":  "F-scherp",
                               "de":  "Fis",
                               "fr":  "Fa dièse",
                               "es":  "Fa sostenido"
                           },
    "ooo.q.211.choice.2":  {
                               "nl":  "C-natuurlijk",
                               "de":  "C-natürlich",
                               "fr":  "C-naturel",
                               "es":  "C-natural"
                           },
    "ooo.q.211.choice.3":  {
                               "nl":  "Allegro",
                               "de":  "Allegro",
                               "fr":  "Allegro",
                               "es":  "Allegro"
                           },
    "ooo.q.211.odd":  {
                          "nl":  "Allegro",
                          "de":  "Allegro",
                          "fr":  "Allegro",
                          "es":  "Allegro"
                      },
    "ooo.q.211.group":  {
                            "nl":  "noten of notennamen",
                            "de":  "Notizen oder Notiznamen",
                            "fr":  "notes ou noms de notes",
                            "es":  "notas o nombres de notas"
                        },
    "ooo.q.211.explanation":  {
                                  "nl":  "De andere drie zijn muzieknootnamen; allegro is een tempomarkering.",
                                  "de":  "Die anderen drei sind Namen von Musiknoten; Allegro ist eine Tempoangabe.",
                                  "fr":  "Les trois autres sont des noms de notes de musique ; allegro est un marquage de tempo.",
                                  "es":  "Los otros tres son nombres de notas musicales; allegro es una marca de tempo."
                              },
    "ooo.q.212.choice.0":  {
                               "nl":  "Hobo",
                               "de":  "Oboe",
                               "fr":  "Hautbois",
                               "es":  "Oboe"
                           },
    "ooo.q.212.choice.1":  {
                               "nl":  "Fagot",
                               "de":  "Fagott",
                               "fr":  "Basson",
                               "es":  "Fagot"
                           },
    "ooo.q.212.choice.2":  {
                               "nl":  "Klarinet",
                               "de":  "Klarinette",
                               "fr":  "Clarinette",
                               "es":  "Clarinete"
                           },
    "ooo.q.212.choice.3":  {
                               "nl":  "Trombone",
                               "de":  "Posaune",
                               "fr":  "Trombone",
                               "es":  "Trombón"
                           },
    "ooo.q.212.odd":  {
                          "nl":  "Trombone",
                          "de":  "Posaune",
                          "fr":  "Trombone",
                          "es":  "Trombón"
                      },
    "ooo.q.212.group":  {
                            "nl":  "houtblazers",
                            "de":  "Holzblasinstrumente",
                            "fr":  "instruments à vent",
                            "es":  "instrumentos de viento de madera"
                        },
    "ooo.q.212.explanation":  {
                                  "nl":  "De hobo, fagot en klarinet zijn houtblazers; een trombone is van koper.",
                                  "de":  "Oboe, Fagott und Klarinette sind Holzbläser; Eine Posaune besteht aus Messing.",
                                  "fr":  "Le hautbois, le basson et la clarinette sont des bois ; un trombone est en laiton.",
                                  "es":  "El oboe, el fagot y el clarinete son instrumentos de viento de madera; un trombón es latón."
                              },
    "ooo.q.213.choice.0":  {
                               "nl":  "Sopraan",
                               "de":  "Sopran",
                               "fr":  "Soprano",
                               "es":  "Soprano"
                           },
    "ooo.q.213.choice.1":  {
                               "nl":  "Alt",
                               "de":  "Alt",
                               "fr":  "Alto",
                               "es":  "Alto"
                           },
    "ooo.q.213.choice.2":  {
                               "nl":  "Tenor",
                               "de":  "Tenor",
                               "fr":  "Ténor",
                               "es":  "Tenor"
                           },
    "ooo.q.213.choice.3":  {
                               "nl":  "Baritonsaxofoon",
                               "de":  "Baritonsaxophon",
                               "fr":  "Saxophone baryton",
                               "es":  "Saxofón barítono"
                           },
    "ooo.q.213.odd":  {
                          "nl":  "Baritonsaxofoon",
                          "de":  "Baritonsaxophon",
                          "fr":  "Saxophone baryton",
                          "es":  "Saxofón barítono"
                      },
    "ooo.q.213.group":  {
                            "nl":  "vocale bereiken",
                            "de":  "Stimmumfang",
                            "fr":  "gammes vocales",
                            "es":  "rangos vocales"
                        },
    "ooo.q.213.explanation":  {
                                  "nl":  "De andere drie zijn stembereiken; een baritonsaxofoon is een instrument.",
                                  "de":  "Die anderen drei sind Stimmbereiche; Ein Baritonsaxophon ist ein Instrument.",
                                  "fr":  "Les trois autres sont des gammes vocales ; un saxophone baryton est un instrument.",
                                  "es":  "Los otros tres son rangos vocales; un saxofón barítono es un instrumento."
                              },
    "ooo.q.214.choice.0":  {
                               "nl":  "Sonate",
                               "de":  "Sonate",
                               "fr":  "Sonate",
                               "es":  "Sonata"
                           },
    "ooo.q.214.choice.1":  {
                               "nl":  "Concerto",
                               "de":  "Konzert",
                               "fr":  "Concerto",
                               "es":  "Concierto"
                           },
    "ooo.q.214.choice.2":  {
                               "nl":  "Symfonie",
                               "de":  "Symphonie",
                               "fr":  "Symphonie",
                               "es":  "Sinfonía"
                           },
    "ooo.q.214.choice.3":  {
                               "nl":  "Operazanger",
                               "de":  "Opernsänger",
                               "fr":  "Chanteuse d\u0027opéra",
                               "es":  "Cantante de opera"
                           },
    "ooo.q.214.odd":  {
                          "nl":  "Operazanger",
                          "de":  "Opernsänger",
                          "fr":  "Chanteuse d\u0027opéra",
                          "es":  "Cantante de opera"
                      },
    "ooo.q.214.group":  {
                            "nl":  "muzikale composities",
                            "de":  "Musikalische Kompositionen",
                            "fr":  "compositions musicales",
                            "es":  "composiciones musicales"
                        },
    "ooo.q.214.explanation":  {
                                  "nl":  "De andere drie zijn vormen van muzikale compositie; een operazanger is een artiest.",
                                  "de":  "Die anderen drei sind Formen der musikalischen Komposition; Ein Opernsänger ist ein Performer.",
                                  "fr":  "Les trois autres sont des formes de composition musicale ; un chanteur d\u0027opéra est un interprète.",
                                  "es":  "Los otros tres son formas de composición musical; un cantante de ópera es un intérprete."
                              },
    "ooo.q.215.choice.0":  {
                               "nl":  "Adèle",
                               "de":  "Adele",
                               "fr":  "Adèle",
                               "es":  "Adela"
                           },
    "ooo.q.215.choice.1":  {
                               "nl":  "Taylor Swift",
                               "de":  "Taylor Swift",
                               "fr":  "Taylor Swift",
                               "es":  "Taylor Swift"
                           },
    "ooo.q.215.choice.2":  {
                               "nl":  "Beyonce",
                               "de":  "Beyoncé",
                               "fr":  "Beyoncé",
                               "es":  "Beyoncé"
                           },
    "ooo.q.215.choice.3":  {
                               "nl":  "Hans Zimmer",
                               "de":  "Hans Zimmer",
                               "fr":  "Hans Zimmer",
                               "es":  "Hans Zimmer"
                           },
    "ooo.q.215.odd":  {
                          "nl":  "Hans Zimmer",
                          "de":  "Hans Zimmer",
                          "fr":  "Hans Zimmer",
                          "es":  "Hans Zimmer"
                      },
    "ooo.q.215.group":  {
                            "nl":  "populaire zangers",
                            "de":  "beliebte Sänger",
                            "fr":  "chanteurs populaires",
                            "es":  "cantantes populares"
                        },
    "ooo.q.215.explanation":  {
                                  "nl":  "De andere drie zijn populaire zangers; Hans Zimmer is een componist van filmmuziek.",
                                  "de":  "Die anderen drei sind beliebte Sänger; Hans Zimmer ist Filmkomponist.",
                                  "fr":  "Les trois autres sont des chanteurs populaires ; Hans Zimmer est un compositeur de musiques de films.",
                                  "es":  "Los otros tres son cantantes populares; Hans Zimmer es un compositor de bandas sonoras para películas."
                              },
    "ooo.q.216.choice.0":  {
                               "nl":  "Piano",
                               "de":  "Klavier",
                               "fr":  "Piano",
                               "es":  "Piano"
                           },
    "ooo.q.216.choice.1":  {
                               "nl":  "Gitaar",
                               "de":  "Gitarre",
                               "fr":  "Guitare",
                               "es":  "Guitarra"
                           },
    "ooo.q.216.choice.2":  {
                               "nl":  "Harp",
                               "de":  "Harfe",
                               "fr":  "Harpe",
                               "es":  "Arpa"
                           },
    "ooo.q.216.choice.3":  {
                               "nl":  "Saxofoon",
                               "de":  "Saxophon",
                               "fr":  "Saxophone",
                               "es":  "Saxofón"
                           },
    "ooo.q.216.odd":  {
                          "nl":  "Saxofoon",
                          "de":  "Saxophon",
                          "fr":  "Saxophone",
                          "es":  "Saxofón"
                      },
    "ooo.q.216.group":  {
                            "nl":  "snaarinstrumenten",
                            "de":  "Saiteninstrumente",
                            "fr":  "instruments à cordes",
                            "es":  "instrumentos de cuerda"
                        },
    "ooo.q.216.explanation":  {
                                  "nl":  "De andere drie zijn snaarinstrumenten; een saxofoon is een blaasinstrument.",
                                  "de":  "Die anderen drei sind Streichinstrumente; Ein Saxophon ist ein Blasinstrument.",
                                  "fr":  "Les trois autres sont des instruments à cordes ; un saxophone est un instrument à vent.",
                                  "es":  "Los otros tres son instrumentos de cuerda; un saxofón es un instrumento de viento."
                              },
    "ooo.q.217.choice.0":  {
                               "nl":  "Rots",
                               "de":  "Rock",
                               "fr":  "Roche",
                               "es":  "Roca"
                           },
    "ooo.q.217.choice.1":  {
                               "nl":  "Jazz",
                               "de":  "Jazz",
                               "fr":  "Jazz",
                               "es":  "Jazz"
                           },
    "ooo.q.217.choice.2":  {
                               "nl":  "Reggae",
                               "de":  "Reggae",
                               "fr":  "Reggae",
                               "es":  "Reggae"
                           },
    "ooo.q.217.choice.3":  {
                               "nl":  "Ukelele",
                               "de":  "Ukulele",
                               "fr":  "Ukulélé",
                               "es":  "Ukelele"
                           },
    "ooo.q.217.odd":  {
                          "nl":  "Ukelele",
                          "de":  "Ukulele",
                          "fr":  "Ukulélé",
                          "es":  "Ukelele"
                      },
    "ooo.q.217.group":  {
                            "nl":  "muziekgenres",
                            "de":  "Musikgenres",
                            "fr":  "genres musicaux",
                            "es":  "géneros musicales"
                        },
    "ooo.q.217.explanation":  {
                                  "nl":  "De andere drie zijn muziekgenres; een ukelele is een instrument.",
                                  "de":  "Die anderen drei sind Musikgenres; Eine Ukulele ist ein Instrument.",
                                  "fr":  "Les trois autres sont des genres musicaux ; un ukulélé est un instrument.",
                                  "es":  "Los otros tres son géneros musicales; un ukelele es un instrumento."
                              },
    "ooo.q.218.choice.0":  {
                               "nl":  "Viool",
                               "de":  "Violine",
                               "fr":  "Violon",
                               "es":  "Violín"
                           },
    "ooo.q.218.choice.1":  {
                               "nl":  "Altviool",
                               "de":  "Viola",
                               "fr":  "Alto",
                               "es":  "Viola"
                           },
    "ooo.q.218.choice.2":  {
                               "nl":  "Cello",
                               "de":  "Cello",
                               "fr":  "Violoncelle",
                               "es":  "Violonchelo"
                           },
    "ooo.q.218.choice.3":  {
                               "nl":  "Fluit",
                               "de":  "Flöte",
                               "fr":  "Flûte",
                               "es":  "Flauta"
                           },
    "ooo.q.218.odd":  {
                          "nl":  "Fluit",
                          "de":  "Flöte",
                          "fr":  "Flûte",
                          "es":  "Flauta"
                      },
    "ooo.q.218.group":  {
                            "nl":  "strijkinstrumenten",
                            "de":  "Streichinstrumente",
                            "fr":  "instruments à cordes frottées",
                            "es":  "instrumentos de cuerda frotada"
                        },
    "ooo.q.218.explanation":  {
                                  "nl":  "De andere drie zijn strijkinstrumenten; een fluit is een blaasinstrument.",
                                  "de":  "Die anderen drei sind Streichinstrumente; Eine Flöte ist ein Blasinstrument.",
                                  "fr":  "Les trois autres sont des instruments à cordes frottées ; une flûte est un instrument à vent.",
                                  "es":  "Los otros tres son instrumentos de cuerda frotada; una flauta es un instrumento de viento."
                              },
    "ooo.q.219.choice.0":  {
                               "nl":  "Boheemse rapsodie",
                               "de":  "Böhmische Rhapsodie",
                               "fr":  "Rhapsodie bohémienne",
                               "es":  "Rapsodia bohemia"
                           },
    "ooo.q.219.choice.1":  {
                               "nl":  "Stel je voor",
                               "de":  "Stellen Sie sich vor",
                               "fr":  "Imaginez",
                               "es":  "Imagina"
                           },
    "ooo.q.219.choice.2":  {
                               "nl":  "Billie Jean",
                               "de":  "Billie Jean",
                               "fr":  "Billie Jean",
                               "es":  "Billie Jean"
                           },
    "ooo.q.219.choice.3":  {
                               "nl":  "Lodewijk van Beethoven",
                               "de":  "Ludwig van Beethoven",
                               "fr":  "Ludwig van Beethoven",
                               "es":  "Ludwig van Beethoven"
                           },
    "ooo.q.219.odd":  {
                          "nl":  "Lodewijk van Beethoven",
                          "de":  "Ludwig van Beethoven",
                          "fr":  "Ludwig van Beethoven",
                          "es":  "Ludwig van Beethoven"
                      },
    "ooo.q.219.group":  {
                            "nl":  "bekende songtitels",
                            "de":  "bekannte Songtitel",
                            "fr":  "titres de chansons connues",
                            "es":  "títulos de canciones conocidas"
                        },
    "ooo.q.219.explanation":  {
                                  "nl":  "De andere drie zijn songtitels; Ludwig van Beethoven was een componist.",
                                  "de":  "Die anderen drei sind Liedtitel; Ludwig van Beethoven war ein Komponist.",
                                  "fr":  "Les trois autres sont des titres de chansons ; Ludwig van Beethoven était un compositeur.",
                                  "es":  "Los otros tres son títulos de canciones; Ludwig van Beethoven fue un compositor."
                              },
    "ooo.q.220.choice.0":  {
                               "nl":  "Sonate",
                               "de":  "Sonate",
                               "fr":  "Sonate",
                               "es":  "Sonata"
                           },
    "ooo.q.220.choice.1":  {
                               "nl":  "Concerto",
                               "de":  "Konzert",
                               "fr":  "Concerto",
                               "es":  "Concierto"
                           },
    "ooo.q.220.choice.2":  {
                               "nl":  "Symfonie",
                               "de":  "Symphonie",
                               "fr":  "Symphonie",
                               "es":  "Sinfonía"
                           },
    "ooo.q.220.choice.3":  {
                               "nl":  "Sopraan",
                               "de":  "Sopran",
                               "fr":  "Soprano",
                               "es":  "Soprano"
                           },
    "ooo.q.220.odd":  {
                          "nl":  "Sopraan",
                          "de":  "Sopran",
                          "fr":  "Soprano",
                          "es":  "Soprano"
                      },
    "ooo.q.220.group":  {
                            "nl":  "vormen van muzikale compositie",
                            "de":  "Formen der musikalischen Komposition",
                            "fr":  "formes de composition musicale",
                            "es":  "formas de composicion musical"
                        },
    "ooo.q.220.explanation":  {
                                  "nl":  "Een sonate, concert en symfonie zijn compositievormen; sopraan is een stembereik.",
                                  "de":  "Eine Sonate, ein Konzert und eine Sinfonie sind Kompositionsformen; Sopran ist ein Stimmumfang.",
                                  "fr":  "Une sonate, un concerto et une symphonie sont des formes de composition ; la soprano est une gamme vocale.",
                                  "es":  "Una sonata, un concierto y una sinfonía son formas de composición; soprano es un rango vocal."
                              },
    "ooo.q.221.choice.0":  {
                               "nl":  "Sedan",
                               "de":  "Limousine",
                               "fr":  "Berline",
                               "es":  "Sedán"
                           },
    "ooo.q.221.choice.1":  {
                               "nl":  "SUV",
                               "de":  "SUV",
                               "fr":  "VUS",
                               "es":  "Todoterreno"
                           },
    "ooo.q.221.choice.2":  {
                               "nl":  "Hatchback",
                               "de":  "Fließheck",
                               "fr":  "Hayon",
                               "es":  "Hatchback"
                           },
    "ooo.q.221.choice.3":  {
                               "nl":  "Zeilboot",
                               "de":  "Segelboot",
                               "fr":  "Voilier",
                               "es":  "Velero"
                           },
    "ooo.q.221.odd":  {
                          "nl":  "Zeilboot",
                          "de":  "Segelboot",
                          "fr":  "Voilier",
                          "es":  "Velero"
                      },
    "ooo.q.221.group":  {
                            "nl":  "auto\u0027s",
                            "de":  "Autos",
                            "fr":  "voitures",
                            "es":  "carros"
                        },
    "ooo.q.221.explanation":  {
                                  "nl":  "De andere drie zijn soorten auto\u0027s; een zeilboot vaart over water.",
                                  "de":  "Die anderen drei sind Autotypen; Ein Segelboot fährt auf dem Wasser.",
                                  "fr":  "Les trois autres sont des types de voitures ; un voilier voyage sur l\u0027eau.",
                                  "es":  "Los otros tres son tipos de coches; un velero viaja sobre el agua."
                              },
    "ooo.q.222.choice.0":  {
                               "nl":  "Vliegtuig",
                               "de":  "Flugzeug",
                               "fr":  "Avion",
                               "es":  "Avion"
                           },
    "ooo.q.222.choice.1":  {
                               "nl":  "Helikopter",
                               "de":  "Hubschrauber",
                               "fr":  "Hélicoptère",
                               "es":  "Helicóptero"
                           },
    "ooo.q.222.choice.2":  {
                               "nl":  "Zweefvliegtuig",
                               "de":  "Segelflugzeug",
                               "fr":  "Planeur",
                               "es":  "Planeador"
                           },
    "ooo.q.222.choice.3":  {
                               "nl":  "Onderzeeër",
                               "de":  "U-Boot",
                               "fr":  "Sous-marin",
                               "es":  "Submarino"
                           },
    "ooo.q.222.odd":  {
                          "nl":  "Onderzeeër",
                          "de":  "U-Boot",
                          "fr":  "Sous-marin",
                          "es":  "Submarino"
                      },
    "ooo.q.222.group":  {
                            "nl":  "vliegtuigen",
                            "de":  "Flugzeuge",
                            "fr":  "avion",
                            "es":  "avión"
                        },
    "ooo.q.222.explanation":  {
                                  "nl":  "De andere drie vliegen door de lucht; een onderzeeër vaart onder water.",
                                  "de":  "Die anderen drei fliegen durch die Luft; Ein U-Boot fährt unter Wasser.",
                                  "fr":  "Les trois autres volent dans les airs ; un sous-marin voyage sous l’eau.",
                                  "es":  "Los otros tres vuelan por el aire; un submarino viaja bajo el agua."
                              },
    "ooo.q.223.choice.0":  {
                               "nl":  "Motorfiets",
                               "de":  "Motorrad",
                               "fr":  "Moto",
                               "es":  "Motocicleta"
                           },
    "ooo.q.223.choice.1":  {
                               "nl":  "Scooter",
                               "de":  "Roller",
                               "fr":  "Trottinette",
                               "es":  "Vespa"
                           },
    "ooo.q.223.choice.2":  {
                               "nl":  "Bromfiets",
                               "de":  "Moped",
                               "fr":  "Cyclomoteur",
                               "es":  "Ciclomotor"
                           },
    "ooo.q.223.choice.3":  {
                               "nl":  "Fiets",
                               "de":  "Fahrrad",
                               "fr":  "Vélo",
                               "es":  "Bicicleta"
                           },
    "ooo.q.223.odd":  {
                          "nl":  "Fiets",
                          "de":  "Fahrrad",
                          "fr":  "Vélo",
                          "es":  "Bicicleta"
                      },
    "ooo.q.223.group":  {
                            "nl":  "gemotoriseerde tweewielers",
                            "de":  "motorisierte Zweiräder",
                            "fr":  "deux-roues motorisés",
                            "es":  "vehículos motorizados de dos ruedas"
                        },
    "ooo.q.223.explanation":  {
                                  "nl":  "De andere drie hebben een motor; een fiets wordt aangedreven door trappen.",
                                  "de":  "Die anderen drei haben einen Motor; Ein Fahrrad wird durch Treten angetrieben.",
                                  "fr":  "Les trois autres ont un moteur ; un vélo est propulsé par le pédalage.",
                                  "es":  "Los otros tres tienen motor; una bicicleta se mueve pedaleando."
                              },
    "ooo.q.224.choice.0":  {
                               "nl":  "Trein",
                               "de":  "Zug",
                               "fr":  "Former",
                               "es":  "Tren"
                           },
    "ooo.q.224.choice.1":  {
                               "nl":  "Tram",
                               "de":  "Straßenbahn",
                               "fr":  "Tramway",
                               "es":  "Tranvía"
                           },
    "ooo.q.224.choice.2":  {
                               "nl":  "Metro",
                               "de":  "U-Bahn",
                               "fr":  "Métro",
                               "es":  "Metro"
                           },
    "ooo.q.224.choice.3":  {
                               "nl":  "Fiets",
                               "de":  "Fahrrad",
                               "fr":  "Vélo",
                               "es":  "Bicicleta"
                           },
    "ooo.q.224.odd":  {
                          "nl":  "Fiets",
                          "de":  "Fahrrad",
                          "fr":  "Vélo",
                          "es":  "Bicicleta"
                      },
    "ooo.q.224.group":  {
                            "nl":  "spoorvoertuigen",
                            "de":  "Schienenfahrzeuge",
                            "fr":  "véhicules ferroviaires",
                            "es":  "vehículos ferroviarios"
                        },
    "ooo.q.224.explanation":  {
                                  "nl":  "De andere drie lopen op rails; een fiets reist over wegen of paden.",
                                  "de":  "Die anderen drei laufen auf Schienen; Ein Fahrrad fährt auf Straßen oder Wegen.",
                                  "fr":  "Les trois autres roulent sur des rails ; un vélo circule sur des routes ou des chemins.",
                                  "es":  "Los otros tres circulan sobre raíles; una bicicleta circula por carreteras o caminos."
                              },
    "ooo.q.225.choice.0":  {
                               "nl":  "Boeing-747",
                               "de":  "Boeing 747",
                               "fr":  "Boeing 747",
                               "es":  "Boeing 747"
                           },
    "ooo.q.225.choice.1":  {
                               "nl":  "Luchtbus A380",
                               "de":  "Airbus A380",
                               "fr":  "AirbusA380",
                               "es":  "Airbus A380"
                           },
    "ooo.q.225.choice.2":  {
                               "nl":  "Concorde",
                               "de":  "Concorde",
                               "fr":  "Concorde",
                               "es":  "Concordia"
                           },
    "ooo.q.225.choice.3":  {
                               "nl":  "Tesla-model 3",
                               "de":  "Tesla Model 3",
                               "fr":  "Tesla modèle 3",
                               "es":  "Tesla modelo 3"
                           },
    "ooo.q.225.odd":  {
                          "nl":  "Tesla-model 3",
                          "de":  "Tesla Model 3",
                          "fr":  "Tesla modèle 3",
                          "es":  "Tesla modelo 3"
                      },
    "ooo.q.225.group":  {
                            "nl":  "vliegtuigen",
                            "de":  "Flugzeuge",
                            "fr":  "avions",
                            "es":  "aviones"
                        },
    "ooo.q.225.explanation":  {
                                  "nl":  "De andere drie zijn vliegtuigen; de Tesla Model 3 is een auto.",
                                  "de":  "Die anderen drei sind Flugzeuge; das Tesla Model 3 ist ein Auto.",
                                  "fr":  "Les trois autres sont des avions ; la Tesla Model 3 est une voiture.",
                                  "es":  "Los otros tres son aviones; El Tesla Model 3 es un coche."
                              },
    "ooo.q.226.choice.0":  {
                               "nl":  "Pick-up vrachtwagen",
                               "de":  "Pickup-Truck",
                               "fr":  "Camionnette",
                               "es":  "Camioneta"
                           },
    "ooo.q.226.choice.1":  {
                               "nl":  "Van",
                               "de":  "Van",
                               "fr":  "Fourgon",
                               "es":  "Furgoneta"
                           },
    "ooo.q.226.choice.2":  {
                               "nl":  "SUV",
                               "de":  "SUV",
                               "fr":  "VUS",
                               "es":  "Todoterreno"
                           },
    "ooo.q.226.choice.3":  {
                               "nl":  "Jacht",
                               "de":  "Yacht",
                               "fr":  "Yacht",
                               "es":  "Yate"
                           },
    "ooo.q.226.odd":  {
                          "nl":  "Jacht",
                          "de":  "Yacht",
                          "fr":  "Yacht",
                          "es":  "Yate"
                      },
    "ooo.q.226.group":  {
                            "nl":  "wegvoertuigen",
                            "de":  "Straßenfahrzeuge",
                            "fr":  "véhicules routiers",
                            "es":  "vehículos de carretera"
                        },
    "ooo.q.226.explanation":  {
                                  "nl":  "De andere drie zijn wegvoertuigen; een jacht is een boot.",
                                  "de":  "Die anderen drei sind Straßenfahrzeuge; Eine Yacht ist ein Boot.",
                                  "fr":  "Les trois autres sont des véhicules routiers ; un yacht est un bateau.",
                                  "es":  "Los otros tres son vehículos de carretera; un yate es un barco."
                              },
    "ooo.q.227.choice.0":  {
                               "nl":  "Schoolbus",
                               "de":  "Schulbus",
                               "fr":  "Autobus scolaire",
                               "es":  "Autobús escolar"
                           },
    "ooo.q.227.choice.1":  {
                               "nl":  "Stadsbus",
                               "de":  "Stadtbus",
                               "fr":  "Autobus urbain",
                               "es":  "Autobús urbano"
                           },
    "ooo.q.227.choice.2":  {
                               "nl":  "Dubbeldekkerbus",
                               "de":  "Doppeldeckerbus",
                               "fr":  "Autobus à deux étages",
                               "es":  "Autobús de dos pisos"
                           },
    "ooo.q.227.choice.3":  {
                               "nl":  "Taxi",
                               "de":  "Taxi",
                               "fr":  "Taxis",
                               "es":  "Taxi"
                           },
    "ooo.q.227.odd":  {
                          "nl":  "Taxi",
                          "de":  "Taxi",
                          "fr":  "Taxis",
                          "es":  "Taxi"
                      },
    "ooo.q.227.group":  {
                            "nl":  "soorten bussen",
                            "de":  "Arten von Bussen",
                            "fr":  "types de bus",
                            "es":  "tipos de autobuses"
                        },
    "ooo.q.227.explanation":  {
                                  "nl":  "De andere drie zijn bussen; een taxi is een personenauto.",
                                  "de":  "Die anderen drei sind Busse; Ein Taxi ist ein Personenkraftwagen.",
                                  "fr":  "Les trois autres sont des bus ; un taxi est une voiture de tourisme.",
                                  "es":  "Los otros tres son autobuses; un taxi es un vehículo de pasajeros."
                              },
    "ooo.q.228.choice.0":  {
                               "nl":  "Ziekenwagen",
                               "de":  "Krankenwagen",
                               "fr":  "Ambulance",
                               "es":  "Ambulancia"
                           },
    "ooo.q.228.choice.1":  {
                               "nl":  "Brandweerwagen",
                               "de":  "Feuerwehrauto",
                               "fr":  "Camion de pompiers",
                               "es":  "Camion de bomberos"
                           },
    "ooo.q.228.choice.2":  {
                               "nl":  "Politie auto",
                               "de":  "Polizeiauto",
                               "fr":  "Voiture de police",
                               "es":  "Coche de policia"
                           },
    "ooo.q.228.choice.3":  {
                               "nl":  "Camper",
                               "de":  "Wohnmobil",
                               "fr":  "Camping-car",
                               "es":  "Furgoneta camper"
                           },
    "ooo.q.228.odd":  {
                          "nl":  "Camper",
                          "de":  "Wohnmobil",
                          "fr":  "Camping-car",
                          "es":  "Furgoneta camper"
                      },
    "ooo.q.228.group":  {
                            "nl":  "voertuigen van de hulpdiensten",
                            "de":  "Rettungsfahrzeuge",
                            "fr":  "véhicules de secours",
                            "es":  "vehículos de servicio de emergencia"
                        },
    "ooo.q.228.explanation":  {
                                  "nl":  "De andere drie zijn voertuigen voor hulpdiensten; een camper is voor reizen en recreatie.",
                                  "de":  "Die anderen drei sind Einsatzfahrzeuge; Ein Wohnmobil dient der Reise und der Erholung.",
                                  "fr":  "Les trois autres sont des véhicules de service d\u0027urgence ; un camping-car est destiné aux voyages et aux loisirs.",
                                  "es":  "Los otros tres son vehículos de servicios de emergencia; una autocaravana es para viajes y recreación."
                              },
    "ooo.q.229.choice.0":  {
                               "nl":  "Veerboot",
                               "de":  "Fähre",
                               "fr":  "Traversier",
                               "es":  "Ferry"
                           },
    "ooo.q.229.choice.1":  {
                               "nl":  "Cruiseschip",
                               "de":  "Kreuzfahrtschiff",
                               "fr":  "Bateau de croisière",
                               "es":  "Crucero"
                           },
    "ooo.q.229.choice.2":  {
                               "nl":  "Vrachtschip",
                               "de":  "Frachtschiff",
                               "fr":  "Navire cargo",
                               "es":  "Buque de carga"
                           },
    "ooo.q.229.choice.3":  {
                               "nl":  "Kajakken",
                               "de":  "Kajak",
                               "fr":  "Kayak",
                               "es":  "Kayak"
                           },
    "ooo.q.229.odd":  {
                          "nl":  "Kajakken",
                          "de":  "Kajak",
                          "fr":  "Kayak",
                          "es":  "Kayak"
                      },
    "ooo.q.229.group":  {
                            "nl":  "grote schepen",
                            "de":  "große Schiffe",
                            "fr":  "grands navires",
                            "es":  "barcos grandes"
                        },
    "ooo.q.229.explanation":  {
                                  "nl":  "De andere drie zijn grote schepen; een kajak is een klein vaartuig dat door peddels wordt aangedreven.",
                                  "de":  "Die anderen drei sind große Schiffe; Ein Kajak ist ein kleines, paddelbetriebenes Boot.",
                                  "fr":  "Les trois autres sont de grands navires ; un kayak est une petite embarcation propulsée par des pagaies.",
                                  "es":  "Los otros tres son barcos grandes; Un kayak es una pequeña embarcación propulsada por remo."
                              },
    "ooo.q.230.choice.0":  {
                               "nl":  "Elektrische auto",
                               "de":  "Elektroauto",
                               "fr":  "Voiture électrique",
                               "es":  "Coche electrico"
                           },
    "ooo.q.230.choice.1":  {
                               "nl":  "Hybride auto",
                               "de":  "Hybridauto",
                               "fr":  "Voiture hybride",
                               "es":  "Coche híbrido"
                           },
    "ooo.q.230.choice.2":  {
                               "nl":  "Benzine auto",
                               "de":  "Benzinauto",
                               "fr":  "Voiture essence",
                               "es":  "Coche de gasolina"
                           },
    "ooo.q.230.choice.3":  {
                               "nl":  "Helikopter",
                               "de":  "Hubschrauber",
                               "fr":  "Hélicoptère",
                               "es":  "Helicóptero"
                           },
    "ooo.q.230.odd":  {
                          "nl":  "Helikopter",
                          "de":  "Hubschrauber",
                          "fr":  "Hélicoptère",
                          "es":  "Helicóptero"
                      },
    "ooo.q.230.group":  {
                            "nl":  "soorten auto\u0027s",
                            "de":  "Arten von Autos",
                            "fr":  "types de voitures",
                            "es":  "tipos de autos"
                        },
    "ooo.q.230.explanation":  {
                                  "nl":  "De andere drie zijn auto\u0027s met verschillende aandrijflijnen; een helikopter is een vliegtuig.",
                                  "de":  "Die anderen drei sind Autos mit unterschiedlichen Antriebssträngen; Ein Hubschrauber ist ein Flugzeug.",
                                  "fr":  "Les trois autres sont des voitures dotées de groupes motopropulseurs différents ; un hélicoptère est un avion.",
                                  "es":  "Los otros tres son coches con diferentes sistemas de propulsión; un helicóptero es un avión."
                              },
    "ooo.q.231.choice.0":  {
                               "nl":  "Schoener",
                               "de":  "Schoner",
                               "fr":  "Goélette",
                               "es":  "Goleta"
                           },
    "ooo.q.231.choice.1":  {
                               "nl":  "Sloep",
                               "de":  "Schaluppe",
                               "fr":  "Sloop",
                               "es":  "Balandra"
                           },
    "ooo.q.231.choice.2":  {
                               "nl":  "Ketch",
                               "de":  "Ketch",
                               "fr":  "Ketch",
                               "es":  "Queche"
                           },
    "ooo.q.231.choice.3":  {
                               "nl":  "Gondel",
                               "de":  "Gondel",
                               "fr":  "Gondole",
                               "es":  "Góndola"
                           },
    "ooo.q.231.odd":  {
                          "nl":  "Gondel",
                          "de":  "Gondel",
                          "fr":  "Gondole",
                          "es":  "Góndola"
                      },
    "ooo.q.231.group":  {
                            "nl":  "typen zeilboten",
                            "de":  "Rigg-Typen für Segelboote",
                            "fr":  "types de gréements pour voiliers",
                            "es":  "tipos de aparejos para veleros"
                        },
    "ooo.q.231.explanation":  {
                                  "nl":  "De schoener, sloep en kits zijn typen zeilboten; een gondel is een Venetiaanse roeiboot.",
                                  "de":  "Der Schoner, die Schaluppe und die Ketsch sind Riggtypen für Segelboote; Eine Gondel ist ein venezianisches Ruderboot.",
                                  "fr":  "La goélette, le sloop et le ketch sont des types de gréements de voiliers ; une gondole est un bateau à rames vénitien.",
                                  "es":  "La goleta, el balandro y el queche son tipos de aparejos de veleros; una góndola es un bote de remos veneciano."
                              },
    "ooo.q.232.choice.0":  {
                               "nl":  "Goederentrein",
                               "de":  "Güterzug",
                               "fr":  "Train de marchandises",
                               "es":  "Tren de carga"
                           },
    "ooo.q.232.choice.1":  {
                               "nl":  "Forensentrein",
                               "de":  "Nahverkehrszug",
                               "fr":  "Train de banlieue",
                               "es":  "Tren de cercanías"
                           },
    "ooo.q.232.choice.2":  {
                               "nl":  "Hogesnelheidstrein",
                               "de":  "Hochgeschwindigkeitszug",
                               "fr":  "Train à grande vitesse",
                               "es":  "Tren de alta velocidad"
                           },
    "ooo.q.232.choice.3":  {
                               "nl":  "Trolleybus",
                               "de":  "Trolleybus",
                               "fr":  "Trolleybus",
                               "es":  "Trolebús"
                           },
    "ooo.q.232.odd":  {
                          "nl":  "Trolleybus",
                          "de":  "Trolleybus",
                          "fr":  "Trolleybus",
                          "es":  "Trolebús"
                      },
    "ooo.q.232.group":  {
                            "nl":  "spoorweg treinen",
                            "de":  "Eisenbahnzüge",
                            "fr":  "trains ferroviaires",
                            "es":  "trenes ferroviarios"
                        },
    "ooo.q.232.explanation":  {
                                  "nl":  "De andere drie rijden op spoorlijnen; een trolleybus rijdt over wegen en bovenleidingen.",
                                  "de":  "Die anderen drei verkehren auf Bahngleisen; Ein Trolleybus fährt auf Straßen und Oberleitungen.",
                                  "fr":  "Les trois autres circulent sur des voies ferrées ; un trolleybus circule sur les routes et les caténaires.",
                                  "es":  "Los otros tres discurren por vías de ferrocarril; un trolebús circula por carreteras y cables aéreos."
                              },
    "ooo.q.233.choice.0":  {
                               "nl":  "Kajakken",
                               "de":  "Kajak",
                               "fr":  "Kayak",
                               "es":  "Kayak"
                           },
    "ooo.q.233.choice.1":  {
                               "nl":  "Kano",
                               "de":  "Kanu",
                               "fr":  "Canoë",
                               "es":  "Canoa"
                           },
    "ooo.q.233.choice.2":  {
                               "nl":  "Roeiboot",
                               "de":  "Ruderboot",
                               "fr":  "Chaloupe",
                               "es":  "Bote de remos"
                           },
    "ooo.q.233.choice.3":  {
                               "nl":  "Jetski",
                               "de":  "Jetski",
                               "fr":  "Jet-ski",
                               "es":  "Moto acuática"
                           },
    "ooo.q.233.odd":  {
                          "nl":  "Jetski",
                          "de":  "Jetski",
                          "fr":  "Jet-ski",
                          "es":  "Moto acuática"
                      },
    "ooo.q.233.group":  {
                            "nl":  "door mensen aangedreven kleine boten",
                            "de":  "von Menschen angetriebene kleine Boote",
                            "fr":  "petits bateaux à propulsion humaine",
                            "es":  "pequeñas embarcaciones de propulsión humana"
                        },
    "ooo.q.233.explanation":  {
                                  "nl":  "De andere drie zijn door mensen aangedreven boten; een jetski heeft een motor.",
                                  "de":  "Die anderen drei sind von Menschen angetriebene Boote; Ein Jetski hat einen Motor.",
                                  "fr":  "Les trois autres sont des bateaux à propulsion humaine ; un jet ski a un moteur.",
                                  "es":  "Los otros tres son barcos de propulsión humana; una moto de agua tiene motor."
                              },
    "ooo.q.234.choice.0":  {
                               "nl":  "Monorail",
                               "de":  "Einschienenbahn",
                               "fr":  "Monorail",
                               "es":  "Monorraíl"
                           },
    "ooo.q.234.choice.1":  {
                               "nl":  "Maglev-trein",
                               "de":  "Magnetschwebebahn",
                               "fr":  "Train Maglev",
                               "es":  "Tren maglev"
                           },
    "ooo.q.234.choice.2":  {
                               "nl":  "Tram",
                               "de":  "Straßenbahn",
                               "fr":  "Tramway",
                               "es":  "Tranvía"
                           },
    "ooo.q.234.choice.3":  {
                               "nl":  "Taxi",
                               "de":  "Taxi",
                               "fr":  "Taxis",
                               "es":  "Taxi"
                           },
    "ooo.q.234.odd":  {
                          "nl":  "Taxi",
                          "de":  "Taxi",
                          "fr":  "Taxis",
                          "es":  "Taxi"
                      },
    "ooo.q.234.group":  {
                            "nl":  "railgeleide voertuigen",
                            "de":  "schienengeführte Fahrzeuge",
                            "fr":  "véhicules guidés sur rails",
                            "es":  "vehículos guiados por rieles"
                        },
    "ooo.q.234.explanation":  {
                                  "nl":  "De andere drie zijn railgeleide voertuigen; een taxi rijdt over wegen.",
                                  "de":  "Die anderen drei sind schienengeführte Fahrzeuge; Ein Taxi fährt auf Straßen.",
                                  "fr":  "Les trois autres sont des véhicules guidés par rails ; un taxi circule sur les routes.",
                                  "es":  "Los otros tres son vehículos guiados por rieles; un taxi viaja por las carreteras."
                              },
    "ooo.q.235.choice.0":  {
                               "nl":  "Diesellocomotief",
                               "de":  "Diesellokomotive",
                               "fr":  "Locomotive diesel",
                               "es":  "Locomotora diésel"
                           },
    "ooo.q.235.choice.1":  {
                               "nl":  "Stoomlocomotief",
                               "de":  "Dampflokomotive",
                               "fr":  "Locomotive à vapeur",
                               "es":  "Locomotora de vapor"
                           },
    "ooo.q.235.choice.2":  {
                               "nl":  "Elektrische locomotief",
                               "de":  "Elektrische Lokomotive",
                               "fr":  "Locomotive électrique",
                               "es":  "Locomotora electrica"
                           },
    "ooo.q.235.choice.3":  {
                               "nl":  "Goederenwagon",
                               "de":  "Güterwagen",
                               "fr":  "Wagon de marchandises",
                               "es":  "Vagón de mercancías"
                           },
    "ooo.q.235.odd":  {
                          "nl":  "Goederenwagon",
                          "de":  "Güterwagen",
                          "fr":  "Wagon de marchandises",
                          "es":  "Vagón de mercancías"
                      },
    "ooo.q.235.group":  {
                            "nl":  "spoorweglocomotieven",
                            "de":  "Eisenbahnlokomotiven",
                            "fr":  "locomotives ferroviaires",
                            "es":  "locomotoras de ferrocarril"
                        },
    "ooo.q.235.explanation":  {
                                  "nl":  "De andere drie locomotieven zorgen voor de kracht om een trein voort te bewegen; een goederenwagen vervoert vracht.",
                                  "de":  "Die anderen drei Lokomotiven liefern die Kraft, einen Zug zu bewegen; Ein Güterwagen transportiert Fracht.",
                                  "fr":  "Les trois autres locomotives fournissent la puissance nécessaire pour déplacer un train ; un wagon de marchandises transporte des marchandises.",
                                  "es":  "Las otras tres locomotoras proporcionan la potencia para mover un tren; un vagón de mercancías transporta carga."
                              },
    "ooo.q.236.choice.0":  {
                               "nl":  "Auto",
                               "de":  "Auto",
                               "fr":  "Voiture",
                               "es":  "Coche"
                           },
    "ooo.q.236.choice.1":  {
                               "nl":  "Bus",
                               "de":  "Bus",
                               "fr":  "Autobus",
                               "es":  "Autobús"
                           },
    "ooo.q.236.choice.2":  {
                               "nl":  "Vrachtwagen",
                               "de":  "LKW",
                               "fr":  "Camion",
                               "es":  "Camión"
                           },
    "ooo.q.236.choice.3":  {
                               "nl":  "Vliegtuig",
                               "de":  "Flugzeug",
                               "fr":  "Avion",
                               "es":  "Avion"
                           },
    "ooo.q.236.odd":  {
                          "nl":  "Vliegtuig",
                          "de":  "Flugzeug",
                          "fr":  "Avion",
                          "es":  "Avion"
                      },
    "ooo.q.236.group":  {
                            "nl":  "wegvoertuigen",
                            "de":  "Straßenfahrzeuge",
                            "fr":  "véhicules routiers",
                            "es":  "vehículos de carretera"
                        },
    "ooo.q.236.explanation":  {
                                  "nl":  "De andere drie zijn wegvoertuigen; een vliegtuig is een vliegtuig.",
                                  "de":  "Die anderen drei sind Straßenfahrzeuge; ein Flugzeug ist ein Flugzeug.",
                                  "fr":  "Les trois autres sont des véhicules routiers ; un avion est un avion.",
                                  "es":  "Los otros tres son vehículos de carretera; un avión es un avión."
                              },
    "ooo.q.237.choice.0":  {
                               "nl":  "Londense taxi",
                               "de":  "Londoner Taxi",
                               "fr":  "Taxi londonien",
                               "es":  "Taxi londres"
                           },
    "ooo.q.237.choice.1":  {
                               "nl":  "Gele taxi",
                               "de":  "Gelbes Taxi",
                               "fr":  "Taxi jaune",
                               "es":  "Taxi amarillo"
                           },
    "ooo.q.237.choice.2":  {
                               "nl":  "Zwarte cabine",
                               "de":  "Schwarzes Taxi",
                               "fr":  "Cabine noire",
                               "es":  "Taxi negro"
                           },
    "ooo.q.237.choice.3":  {
                               "nl":  "Londense bus",
                               "de":  "Londoner Bus",
                               "fr":  "Autobus de Londres",
                               "es":  "Autobús de Londres"
                           },
    "ooo.q.237.odd":  {
                          "nl":  "Londense bus",
                          "de":  "Londoner Bus",
                          "fr":  "Autobus de Londres",
                          "es":  "Autobús de Londres"
                      },
    "ooo.q.237.group":  {
                            "nl":  "soorten taxi",
                            "de":  "Arten von Taxis",
                            "fr":  "types de taxis",
                            "es":  "tipos de taxi"
                        },
    "ooo.q.237.explanation":  {
                                  "nl":  "De andere drie zijn taxi\u0027s; een Londense bus is openbaar vervoer.",
                                  "de":  "Die anderen drei sind Taxis; Ein Londoner Bus ist ein öffentlicher Nahverkehr.",
                                  "fr":  "Les trois autres sont des taxis ; un bus londonien est un transport en commun.",
                                  "es":  "Los otros tres son taxis; un autobús de Londres es transporte público."
                              },
    "ooo.q.238.choice.0":  {
                               "nl":  "Fiets",
                               "de":  "Fahrrad",
                               "fr":  "Vélo",
                               "es":  "Bicicleta"
                           },
    "ooo.q.238.choice.1":  {
                               "nl":  "Scooter",
                               "de":  "Roller",
                               "fr":  "Trottinette",
                               "es":  "Vespa"
                           },
    "ooo.q.238.choice.2":  {
                               "nl":  "Bromfiets",
                               "de":  "Moped",
                               "fr":  "Cyclomoteur",
                               "es":  "Ciclomotor"
                           },
    "ooo.q.238.choice.3":  {
                               "nl":  "Metro trein",
                               "de":  "U-Bahn",
                               "fr":  "Rame de métro",
                               "es":  "Tren subterráneo"
                           },
    "ooo.q.238.odd":  {
                          "nl":  "Metro trein",
                          "de":  "U-Bahn",
                          "fr":  "Rame de métro",
                          "es":  "Tren subterráneo"
                      },
    "ooo.q.238.group":  {
                            "nl":  "tweewielige wegvoertuigen",
                            "de":  "zweirädrige Straßenfahrzeuge",
                            "fr":  "véhicules routiers à deux roues",
                            "es":  "vehículos de carretera de dos ruedas"
                        },
    "ooo.q.238.explanation":  {
                                  "nl":  "De andere drie zijn tweewielige wegvoertuigen; een metrotrein rijdt op rails.",
                                  "de":  "Die anderen drei sind zweirädrige Straßenfahrzeuge; Eine U-Bahn fährt auf Schienen.",
                                  "fr":  "Les trois autres sont des véhicules routiers à deux roues ; une rame de métro circule sur des rails.",
                                  "es":  "Los otros tres son vehículos de carretera de dos ruedas; un tren subterráneo circula sobre rieles."
                              },
    "ooo.q.239.choice.0":  {
                               "nl":  "Ziekenwagen",
                               "de":  "Krankenwagen",
                               "fr":  "Ambulance",
                               "es":  "Ambulancia"
                           },
    "ooo.q.239.choice.1":  {
                               "nl":  "Brandweerwagen",
                               "de":  "Feuerwehrauto",
                               "fr":  "Camion de pompiers",
                               "es":  "Camion de bomberos"
                           },
    "ooo.q.239.choice.2":  {
                               "nl":  "Politie auto",
                               "de":  "Polizeiauto",
                               "fr":  "Voiture de police",
                               "es":  "Coche de policia"
                           },
    "ooo.q.239.choice.3":  {
                               "nl":  "Taxi",
                               "de":  "Taxi",
                               "fr":  "Taxis",
                               "es":  "Taxi"
                           },
    "ooo.q.239.odd":  {
                          "nl":  "Taxi",
                          "de":  "Taxi",
                          "fr":  "Taxis",
                          "es":  "Taxi"
                      },
    "ooo.q.239.group":  {
                            "nl":  "voertuigen van de hulpdiensten",
                            "de":  "Rettungsfahrzeuge",
                            "fr":  "véhicules de secours",
                            "es":  "vehículos de servicio de emergencia"
                        },
    "ooo.q.239.explanation":  {
                                  "nl":  "De andere drie zijn voertuigen voor hulpdiensten; een taxi vervoert passagiers tegen een tarief.",
                                  "de":  "Die anderen drei sind Einsatzfahrzeuge; Ein Taxi befördert Fahrgäste gegen eine Gebühr.",
                                  "fr":  "Les trois autres sont des véhicules de service d\u0027urgence ; un taxi transporte des passagers moyennant un tarif.",
                                  "es":  "Los otros tres son vehículos de servicios de emergencia; un taxi transporta pasajeros por una tarifa."
                              },
    "ooo.q.240.choice.0":  {
                               "nl":  "Kano",
                               "de":  "Kanu",
                               "fr":  "Canoë",
                               "es":  "Canoa"
                           },
    "ooo.q.240.choice.1":  {
                               "nl":  "Kajakken",
                               "de":  "Kajak",
                               "fr":  "Kayak",
                               "es":  "Kayak"
                           },
    "ooo.q.240.choice.2":  {
                               "nl":  "Roeiboot",
                               "de":  "Ruderboot",
                               "fr":  "Chaloupe",
                               "es":  "Bote de remos"
                           },
    "ooo.q.240.choice.3":  {
                               "nl":  "Onderzeeër",
                               "de":  "U-Boot",
                               "fr":  "Sous-marin",
                               "es":  "Submarino"
                           },
    "ooo.q.240.odd":  {
                          "nl":  "Onderzeeër",
                          "de":  "U-Boot",
                          "fr":  "Sous-marin",
                          "es":  "Submarino"
                      },
    "ooo.q.240.group":  {
                            "nl":  "door mensen aangedreven boten",
                            "de":  "Von Menschen angetriebene Boote",
                            "fr":  "bateaux à propulsion humaine",
                            "es":  "barcos de propulsión humana"
                        },
    "ooo.q.240.explanation":  {
                                  "nl":  "De kano, kajak en roeiboot zijn door mensen aangedreven boten; een onderzeeër is een gemotoriseerd onderwaterschip.",
                                  "de":  "Kanu, Kajak und Ruderboot sind von Menschen angetriebene Boote; Ein U-Boot ist ein motorisiertes Unterwasserschiff.",
                                  "fr":  "Le canoë, le kayak et la chaloupe sont des bateaux à propulsion humaine ; un sous-marin est un navire sous-marin motorisé.",
                                  "es":  "La canoa, el kayak y el bote de remos son embarcaciones de propulsión humana; un submarino es una embarcación submarina motorizada."
                              },
    "ooo.category.food":  {
                              "nl":  "Eten en drinken",
                              "de":  "Essen und Trinken",
                              "fr":  "Nourriture et boissons",
                              "es":  "Alimentos y bebidas"
                          },
    "ooo.category.sports":  {
                                "nl":  "Sport",
                                "de":  "Sport",
                                "fr":  "Sport",
                                "es":  "Deportes"
                            },
    "ooo.category.animals":  {
                                 "nl":  "Dieren",
                                 "de":  "Tiere",
                                 "fr":  "Animaux",
                                 "es":  "Animales"
                             },
    "ooo.category.geography":  {
                                   "nl":  "Landen \u0026 Geografie",
                                   "de":  "Länder und Geographie",
                                   "fr":  "Pays et géographie",
                                   "es":  "Países y geografía"
                               },
    "ooo.category.technology":  {
                                    "nl":  "Technologie",
                                    "de":  "Technologie",
                                    "fr":  "Technologie",
                                    "es":  "Tecnología"
                                },
    "ooo.category.nature":  {
                                "nl":  "Natuur",
                                "de":  "Natur",
                                "fr":  "Nature",
                                "es":  "Naturaleza"
                            },
    "ooo.category.movies-tv":  {
                                   "nl":  "Films en televisie",
                                   "de":  "Filme und Fernsehen",
                                   "fr":  "Films et télévision",
                                   "es":  "Películas y televisión"
                               },
    "ooo.category.video-games":  {
                                     "nl":  "Videogames",
                                     "de":  "Videospiele",
                                     "fr":  "Jeux vidéo",
                                     "es":  "Videojuegos"
                                 },
    "ooo.category.brands":  {
                                "nl":  "Merken",
                                "de":  "Marken",
                                "fr":  "Marques",
                                "es":  "Marcas"
                            },
    "ooo.category.objects":  {
                                 "nl":  "Alledaagse voorwerpen",
                                 "de":  "Alltagsgegenstände",
                                 "fr":  "Objets du quotidien",
                                 "es":  "Objetos cotidianos"
                             },
    "ooo.category.music":  {
                               "nl":  "Muziek",
                               "de":  "Musik",
                               "fr":  "Musique",
                               "es":  "Musica"
                           },
    "ooo.category.vehicles":  {
                                  "nl":  "Voertuigen",
                                  "de":  "Fahrzeuge",
                                  "fr":  "Véhicules",
                                  "es":  "Vehículos"
                              },
    "ooo.difficulty.easy":  {
                                "nl":  "Gemakkelijk",
                                "de":  "Einfach",
                                "fr":  "Facile",
                                "es":  "fácil"
                            },
    "ooo.difficulty.hard":  {
                                "nl":  "Moeilijk",
                                "de":  "Schwer",
                                "fr":  "Difficile",
                                "es":  "duro"
                            },
    "ooo.difficulty.all":  {
                               "nl":  "Allemaal moeilijkheden",
                               "de":  "Alle Schwierigkeiten",
                               "fr":  "Toutes les difficultés",
                               "es":  "Todas las dificultades"
                           },
    "ooo.difficulty.medium":  {
                                  "nl":  "Middelmatig",
                                  "de":  "Mittel",
                                  "fr":  "Moyen",
                                  "es":  "Medio"
                              },
    "ooo.ui.allCategories":  {
                                 "nl":  "Alle categorieën",
                                 "de":  "Alle Kategorien",
                                 "fr":  "Toutes les catégories",
                                 "es":  "Todas las categorías"
                             },
    "ooo.ui.allDifficulties":  {
                                   "nl":  "Allemaal moeilijkheden",
                                   "de":  "Alle Schwierigkeiten",
                                   "fr":  "Toutes les difficultés",
                                   "es":  "Todas las dificultades"
                               },
    "ooo.ui.easy":  {
                        "nl":  "Gemakkelijk",
                        "de":  "Einfach",
                        "fr":  "Facile",
                        "es":  "fácil"
                    },
    "ooo.ui.medium":  {
                          "nl":  "Middelmatig",
                          "de":  "Mittel",
                          "fr":  "Moyen",
                          "es":  "Medio"
                      },
    "ooo.ui.hard":  {
                        "nl":  "Moeilijk",
                        "de":  "Schwer",
                        "fr":  "Difficile",
                        "es":  "duro"
                    },
    "ooo.ui.captionAll":  {
                              "nl":  "Een beetje van alles",
                              "de":  "Von allem ein bisschen",
                              "fr":  "Un peu de tout",
                              "es":  "un poco de todo"
                          },
    "ooo.ui.captionEasy":  {
                               "nl":  "Duidelijke links en bekende antwoorden",
                               "de":  "Klare Links und bekannte Antworten",
                               "fr":  "Liens clairs et réponses familières",
                               "es":  "Enlaces claros y respuestas familiares"
                           },
    "ooo.ui.captionMedium":  {
                                 "nl":  "Zoek naar het minder voor de hand liggende verband",
                                 "de":  "Suchen Sie nach der weniger offensichtlichen Verbindung",
                                 "fr":  "Recherchez la connexion la moins évidente",
                                 "es":  "Busque la conexión menos obvia"
                             },
    "ooo.ui.captionHard":  {
                               "nl":  "Neem de tijd en denk er goed over na",
                               "de":  "Nehmen Sie sich Zeit und denken Sie darüber nach",
                               "fr":  "Prends ton temps et réfléchis",
                               "es":  "Tómate tu tiempo y piénsalo bien."
                           },
    "ooo.ui.questions":  {
                             "nl":  "vragen",
                             "de":  "Fragen",
                             "fr":  "des questions",
                             "es":  "preguntas"
                         },
    "ooo.ui.setupAvailable":  {
                                  "nl":  "__TOTAL__ samengestelde vragen beschikbaar · __RUN__ vragen in een run.",
                                  "de":  "__TOTAL__ kuratierte Fragen verfügbar · __RUN__ Fragen in einem Durchgang.",
                                  "fr":  "__TOTAL__ questions organisées disponibles · __RUN__ questions dans une série.",
                                  "es":  "__TOTAL__ preguntas seleccionadas disponibles · __EJECUTAR__ preguntas seguidas."
                              },
    "ooo.ui.noQuestions":  {
                               "nl":  "Er zijn nog geen vragen voor deze selectie.",
                               "de":  "Zu dieser Auswahl gibt es noch keine Fragen.",
                               "fr":  "Il n\u0027y a pas encore de questions pour cette sélection.",
                               "es":  "Aún no hay preguntas para esta selección."
                           },
    "ooo.ui.notEnoughQuestions":  {
                                      "nl":  "Er zijn nog niet genoeg unieke vragen voor deze selectie.",
                                      "de":  "Für diese Auswahl gibt es noch nicht genügend eindeutige Fragen.",
                                      "fr":  "Il n’y a pas encore assez de questions uniques pour cette sélection.",
                                      "es":  "Aún no hay suficientes preguntas únicas para esta selección."
                                  },
    "ooo.ui.repair":  {
                          "nl":  "De vragenset heeft een snelle reparatie nodig voordat dit spel kan beginnen.",
                          "de":  "Der Fragensatz muss schnell repariert werden, bevor dieses Spiel beginnen kann.",
                          "fr":  "L\u0027ensemble de questions nécessite une réparation rapide avant que ce jeu puisse commencer.",
                          "es":  "El conjunto de preguntas necesita una reparación rápida antes de que pueda comenzar este juego."
                      },
    "ooo.ui.option":  {
                          "nl":  "Optie __LETTER__: __KEUZE__",
                          "de":  "Option __LETTER__: __CHOICE__",
                          "fr":  "Option __LETTRE__ : __CHOIX__",
                          "es":  "Opción __LETTER__: __ELECCIÓN__"
                      },
    "ooo.ui.correct":  {
                           "nl":  "Juist!",
                           "de":  "Richtig!",
                           "fr":  "Correct!",
                           "es":  "¡Correcto!"
                       },
    "ooo.ui.incorrect":  {
                             "nl":  "Niet helemaal!",
                             "de":  "Nicht ganz!",
                             "fr":  "Pas tout à fait !",
                             "es":  "¡No del todo!"
                         },
    "ooo.ui.answerReveal":  {
                                "nl":  "__ANSWER__ is een vreemde eend in de bijt.",
                                "de":  "__ANSWER__ ist das Seltsame.",
                                "fr":  "__ANSWER__ est l\u0027intrus.",
                                "es":  "__ANSWER__ es el extraño."
                            },
    "ooo.ui.streakNew":  {
                             "nl":  "Een nieuwe reeks krijgt vorm!",
                             "de":  "Eine neue Serie nimmt Gestalt an!",
                             "fr":  "Une nouvelle séquence se dessine !",
                             "es":  "¡Una nueva racha está tomando forma!"
                         },
    "ooo.ui.streakContinue":  {
                                  "nl":  "__COUNT__ op rij — ga zo door!",
                                  "de":  "__COUNT__ in Folge – weiter so!",
                                  "fr":  "__COUNT__ d\u0027affilée – continuez comme ça !",
                                  "es":  "__CONTAR__ seguidos: ¡sigue así!"
                              },
    "ooo.ui.streakEnds":  {
                              "nl":  "Je reeks van __COUNT__ antwoorden eindigt hier.",
                              "de":  "Ihre __COUNT__-Antwortserie endet hier.",
                              "fr":  "Votre séquence de __COUNT__ réponses se termine ici.",
                              "es":  "Tu racha de __COUNT__ respuestas termina aquí."
                          },
    "ooo.ui.streakReset":  {
                               "nl":  "Je streak wordt gereset. De volgende is van jou.",
                               "de":  "Dein Streak wird zurückgesetzt. Der nächste gehört dir.",
                               "fr":  "Votre séquence est réinitialisée. Le prochain est le vôtre.",
                               "es":  "Tu racha se reinicia. El próximo es tuyo."
                           },
    "ooo.ui.seeResults":  {
                              "nl":  "Zie Resultaten",
                              "de":  "Siehe Ergebnisse",
                              "fr":  "Voir les résultats",
                              "es":  "Ver resultados"
                          },
    "ooo.ui.nextQuestion":  {
                                "nl":  "Volgende vraag",
                                "de":  "Nächste Frage",
                                "fr":  "Question suivante",
                                "es":  "Siguiente pregunta"
                            },
    "ooo.ui.resultPerfectTitle":  {
                                      "nl":  "Geweldig!",
                                      "de":  "Erstaunlich!",
                                      "fr":  "Incroyable !",
                                      "es":  "¡Increíble!"
                                  },
    "ooo.ui.resultPerfectMessage":  {
                                        "nl":  "Een perfecte run. Je hebt elk verband opgemerkt.",
                                        "de":  "Ein perfekter Lauf. Du hast jede Verbindung erkannt.",
                                        "fr":  "Une course parfaite. Vous avez repéré chaque connexion.",
                                        "es":  "Una carrera perfecta. Detectaste cada conexión."
                                    },
    "ooo.ui.resultGreatTitle":  {
                                    "nl":  "Geweldig werk!",
                                    "de":  "Tolle Arbeit!",
                                    "fr":  "Super travail !",
                                    "es":  "¡Buen trabajo!"
                                },
    "ooo.ui.resultGreatMessage":  {
                                      "nl":  "Scherp denken. Je hebt de meeste vreemde exemplaren gevonden.",
                                      "de":  "Scharfes Denken. Sie haben die meisten seltsamen herausgefunden.",
                                      "fr":  "Pensée pointue. Vous avez trouvé la plupart des étranges.",
                                      "es":  "Pensamiento agudo. Descubriste a la mayoría de los extraños."
                                  },
    "ooo.ui.resultNiceTitle":  {
                                   "nl":  "Leuk geprobeerd!",
                                   "de":  "Schöner Versuch!",
                                   "fr":  "Bien essayé !",
                                   "es":  "¡Buen intento!"
                               },
    "ooo.ui.resultNiceMessage":  {
                                     "nl":  "Elke ronde is een nieuw patroon om te ontdekken. Blijf doorgaan.",
                                     "de":  "In jeder Runde gibt es ein neues Muster zu entdecken. Weitermachen.",
                                     "fr":  "Chaque tour est un nouveau motif à repérer. Continue.",
                                     "es":  "Cada ronda es un nuevo patrón a detectar. Sigue adelante."
                                 },
    "ooo.ui.resultPracticeTitle":  {
                                       "nl":  "Blijf oefenen!",
                                       "de":  "Übe weiter!",
                                       "fr":  "Continuez à vous entraîner !",
                                       "es":  "¡Sigue practicando!"
                                   },
    "ooo.ui.resultPracticeMessage":  {
                                         "nl":  "De verbindingen worden bij elke run gemakkelijker te herkennen.",
                                         "de":  "Mit jedem Lauf werden die Zusammenhänge leichter zu erkennen.",
                                         "fr":  "Les connexions deviennent plus faciles à repérer à chaque course.",
                                         "es":  "Las conexiones se vuelven más fáciles de detectar con cada ejecución."
                                     },
    "ooo.ui.round":  {
                         "nl":  "ROND",
                         "de":  "RUND",
                         "fr":  "ROND",
                         "es":  "REDONDO"
                     },
    "ooo.ui.score":  {
                         "nl":  "SCORE",
                         "de":  "ERGEBNIS",
                         "fr":  "NOTE",
                         "es":  "PUNTUACIÓN"
                     },
    "ooo.ui.streak":  {
                          "nl":  "STREK",
                          "de":  "STREICHE",
                          "fr":  "SÉRIE",
                          "es":  "RACHA"
                      }
};
if (typeof window !== 'undefined' && window.JB_I18N) {
    window.JB_I18N.registerCatalog(ODD_ONE_OUT_I18N_CATALOG);
}

if (typeof window !== 'undefined' && window.JB_I18N) {
    window.JB_I18N.registerCatalog({
        "ooo.ui.correctLabel": { "nl": "GOED", "de": "RICHTIG", "fr": "CORRECT", "es": "ACIERTOS" },
        "ooo.ui.wrongLabel": { "nl": "FOUT", "de": "FALSCH", "fr": "FAUX", "es": "INCORRECTAS" },
        "ooo.ui.accuracyLabel": { "nl": "NAUWKEURIGHEID", "de": "GENAUIGKEIT", "fr": "PRÉCISION", "es": "PRECISIÓN" },
        "ooo.ui.bestStreakLabel": { "nl": "BESTE REEKS", "de": "LÄNGSTE SERIE", "fr": "MEILLEURE SÉRIE", "es": "MEJOR RACHA" },
        "ooo.ui.thatWrap": { "nl": "DAT WAS 'M", "de": "DAS WAR'S", "fr": "C'EST TERMINÉ", "es": "¡SE ACABÓ!" },
        "ooo.ui.pointsLabel": { "nl": "PUNTEN", "de": "PUNKTE", "fr": "POINTS", "es": "PUNTOS" },
        "ooo.ui.playAgain": { "nl": "NOG EEN KEER", "de": "NOCHMAL SPIELEN", "fr": "REJOUER", "es": "JUGAR DE NUEVO" },
        "ooo.ui.backToCategories": { "nl": "← TERUG NAAR CATEGORIEËN", "de": "← ZURÜCK ZU DEN KATEGORIEN", "fr": "← RETOUR AUX CATÉGORIES", "es": "← VOLVER A LAS CATEGORÍAS" },
        "ooo.ui.streak": { "nl": "REEKS", "de": "SERIE", "fr": "SÉRIE", "es": "RACHA" }
    });
}