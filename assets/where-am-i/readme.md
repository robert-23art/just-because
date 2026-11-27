# Where Am I? map data

`natural-earth-50m-admin-0-countries.zip` contains the Natural Earth 1:50m Admin 0 countries source layer (version 5.1.1). Natural Earth places its vector data in the public domain; see its [terms of use](https://www.naturalearthdata.com/about/terms-of-use/).

`build-data.ps1` converts the local shapefile into `games/where-am-i-data.js`. Run it from the project root in PowerShell. The game itself reads only the generated local SVG paths; it does not call an external map service.

The filter keeps country rows whose Natural Earth sovereign/admin records match, plus its Israel and Palestine records. It excludes dependent territories, Somaliland, Northern Cyprus, Antarctica, and open-ocean features. Taiwan is retained under the source layer's sovereign-country classification. Distant parts more than 70 degrees from a country's largest polygon are omitted to keep the main outline legible. This is a curated country collection, not a claim about the legal status of borders or recognition.
