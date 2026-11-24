/* =========================================================
   JUST BECAUSE — GUESS THE COLOR DATA
   Each family contains related shades so every round has
   four plausible names from one color family.
========================================================= */

const GUESS_COLOR_DATA = {
    greens: {
        name: "Green Family",
        colors: [
            { name: "Lime Green", hex: "#32CD32" },
            { name: "Mint Green", hex: "#98FF98" },
            { name: "Sage Green", hex: "#9CAF88" },
            { name: "Sea Green", hex: "#2E8B57" },
            { name: "Forest Green", hex: "#228B22" },
            { name: "Olive Green", hex: "#556B2F" },
            { name: "Emerald Green", hex: "#50C878" },
            { name: "Jade Green", hex: "#00A86B" },
            { name: "Moss Green", hex: "#8A9A5B" },
            { name: "Pistachio Green", hex: "#93C572" },
            { name: "Hunter Green", hex: "#355E3B" },
            { name: "Kelly Green", hex: "#4CBB17" }
        ]
    },

    blues: {
        name: "Blue Family",
        colors: [
            { name: "Sky Blue", hex: "#87CEEB" },
            { name: "Powder Blue", hex: "#B0E0E6" },
            { name: "Cornflower Blue", hex: "#6495ED" },
            { name: "Royal Blue", hex: "#4169E1" },
            { name: "Navy Blue", hex: "#000080" },
            { name: "Steel Blue", hex: "#4682B4" },
            { name: "Cerulean Blue", hex: "#2A52BE" },
            { name: "Sapphire Blue", hex: "#0F52BA" },
            { name: "Periwinkle Blue", hex: "#CCCCFF" },
            { name: "Azure Blue", hex: "#007FFF" },
            { name: "Teal Blue", hex: "#367588" },
            { name: "Midnight Blue", hex: "#191970" }
        ]
    },

    reds: {
        name: "Red Family",
        colors: [
            { name: "Crimson Red", hex: "#DC143C" },
            { name: "Scarlet Red", hex: "#FF2400" },
            { name: "Ruby Red", hex: "#9B111E" },
            { name: "Cherry Red", hex: "#D2042D" },
            { name: "Burgundy Red", hex: "#800020" },
            { name: "Maroon Red", hex: "#800000" },
            { name: "Firebrick Red", hex: "#B22222" },
            { name: "Fire Engine Red", hex: "#CE2029" },
            { name: "Coral Red", hex: "#FF4040" },
            { name: "Cardinal Red", hex: "#C41E3A" },
            { name: "Carmine Red", hex: "#960018" },
            { name: "Tomato Red", hex: "#FF6347" }
        ]
    },

    purples: {
        name: "Purple Family",
        colors: [
            { name: "Lavender", hex: "#E6E6FA" },
            { name: "Lilac", hex: "#C8A2C8" },
            { name: "Violet", hex: "#EE82EE" },
            { name: "Indigo", hex: "#4B0082" },
            { name: "Plum Purple", hex: "#DDA0DD" },
            { name: "Orchid Purple", hex: "#DA70D6" },
            { name: "Amethyst Purple", hex: "#9966CC" },
            { name: "Mauve", hex: "#E0B0FF" },
            { name: "Grape Purple", hex: "#6F2DA8" },
            { name: "Eggplant Purple", hex: "#614051" },
            { name: "Wisteria Purple", hex: "#C9A0DC" },
            { name: "Royal Purple", hex: "#7851A9" }
        ]
    },

    yellows: {
        name: "Yellow Family",
        colors: [
            { name: "Lemon Yellow", hex: "#FFF44F" },
            { name: "Golden Yellow", hex: "#FFDF00" },
            { name: "Mustard Yellow", hex: "#FFDB58" },
            { name: "Butter Yellow", hex: "#F6E7A1" },
            { name: "Canary Yellow", hex: "#FFEF00" },
            { name: "Sunflower Yellow", hex: "#FFDA03" },
            { name: "Corn Yellow", hex: "#FBEC5D" },
            { name: "Daffodil Yellow", hex: "#FFFF31" },
            { name: "Amber Yellow", hex: "#FFBF00" },
            { name: "Flax Yellow", hex: "#EEDC82" },
            { name: "Chartreuse Yellow", hex: "#DFFF00" },
            { name: "Saffron Yellow", hex: "#F4C430" }
        ]
    },

    oranges: {
        name: "Orange Family",
        colors: [
            { name: "Tangerine Orange", hex: "#F28500" },
            { name: "Apricot Orange", hex: "#FBCEB1" },
            { name: "Burnt Orange", hex: "#CC5500" },
            { name: "Pumpkin Orange", hex: "#FF7518" },
            { name: "Peach Orange", hex: "#FFCC99" },
            { name: "Copper Orange", hex: "#D2691E" },
            { name: "Persimmon Orange", hex: "#EC5800" },
            { name: "Amber Orange", hex: "#FFBF00" },
            { name: "Carrot Orange", hex: "#ED9121" },
            { name: "Rust Orange", hex: "#C45508" },
            { name: "Papaya Whip", hex: "#FFEFD5" },
            { name: "Safety Orange", hex: "#FF7800" }
        ]
    },

    pinks: {
        name: "Pink Family",
        colors: [
            { name: "Hot Pink", hex: "#FF69B4" },
            { name: "Rose Pink", hex: "#FF66CC" },
            { name: "Blush Pink", hex: "#DE5D83" },
            { name: "Dusty Rose Pink", hex: "#DCAE96" },
            { name: "Fuchsia Pink", hex: "#FF00FF" },
            { name: "Salmon Pink", hex: "#FF91A4" },
            { name: "Bubblegum Pink", hex: "#FFC1CC" },
            { name: "Coral Pink", hex: "#F88379" },
            { name: "Ballet Slipper Pink", hex: "#F3D9DF" },
            { name: "Raspberry Pink", hex: "#E30B5C" },
            { name: "Carnation Pink", hex: "#FFA6C9" },
            { name: "Magenta Pink", hex: "#D0417E" }
        ]
    },

    browns: {
        name: "Brown Family",
        colors: [
            { name: "Chocolate Brown", hex: "#7B3F00" },
            { name: "Chestnut Brown", hex: "#954535" },
            { name: "Coffee Brown", hex: "#6F4E37" },
            { name: "Caramel Brown", hex: "#C68E17" },
            { name: "Taupe Brown", hex: "#483C32" },
            { name: "Cocoa Brown", hex: "#D2691E" },
            { name: "Umber Brown", hex: "#635147" },
            { name: "Mahogany Brown", hex: "#C04000" },
            { name: "Sienna Brown", hex: "#A0522D" },
            { name: "Walnut Brown", hex: "#773F1A" },
            { name: "Sepia Brown", hex: "#704214" },
            { name: "Sand Brown", hex: "#F4A460" }
        ]
    },

    grays: {
        name: "Gray Family",
        colors: [
            { name: "Charcoal Gray", hex: "#36454F" },
            { name: "Slate Gray", hex: "#708090" },
            { name: "Silver Gray", hex: "#C0C0C0" },
            { name: "Ash Gray", hex: "#B2BEB5" },
            { name: "Graphite Gray", hex: "#383838" },
            { name: "Pearl Gray", hex: "#D9D9D9" },
            { name: "Stone Gray", hex: "#928E85" },
            { name: "Dove Gray", hex: "#DCDCDC" },
            { name: "Smoke Gray", hex: "#738276" },
            { name: "Gunmetal Gray", hex: "#2A3439" },
            { name: "Platinum Gray", hex: "#E5E4E2" },
            { name: "Warm Gray", hex: "#A89F91" }
        ]
    }
};
