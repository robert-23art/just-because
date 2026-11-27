$ErrorActionPreference = 'Stop'
$assetRoot = Join-Path (Get-Location) 'games\where-am-i-assets'
$dataDir = Join-Path $env:TEMP 'where-am-i-ne-50m'
if (-not (Test-Path $dataDir)) {
    Expand-Archive -LiteralPath (Join-Path $assetRoot 'natural-earth-50m-admin-0-countries.zip') -DestinationPath $dataDir
}
$db = [IO.File]::ReadAllBytes((Get-ChildItem $dataDir -Filter '*.dbf' | Select-Object -First 1 -ExpandProperty FullName))
$shape = [IO.File]::ReadAllBytes((Get-ChildItem $dataDir -Filter '*.shp' | Select-Object -First 1 -ExpandProperty FullName))
$headerLength = [BitConverter]::ToUInt16($db, 8)
$recordLength = [BitConverter]::ToUInt16($db, 10)
$fields = @()
for ($p = 32; $p -lt $headerLength - 1; $p += 32) {
    $name = [Text.Encoding]::ASCII.GetString($db, $p, 11).Trim([char]0, ' ')
    if (-not $name) { break }
    $fields += ,@{ Name = $name; Length = $db[$p + 16] }
}
$fieldStarts = @{}
$offset = 1
foreach ($field in $fields) { $fieldStarts[$field.Name] = @{ Offset = $offset; Length = $field.Length }; $offset += $field.Length }
$rows = @()
$rowCount = [BitConverter]::ToUInt32($db, 4)
for ($i = 0; $i -lt $rowCount; $i++) {
    $base = $headerLength + $i * $recordLength
    $row = [ordered]@{}
    foreach ($name in @('NAME_EN','ADMIN','SOVEREIGNT','TYPE','REGION_UN','SUBREGION','ISO_A3','NE_ID')) {
        $field = $fieldStarts[$name]
        $row[$name] = [Text.Encoding]::UTF8.GetString($db, $base + $field.Offset, $field.Length).Trim([char]0, ' ')
    }
    $rows += [pscustomobject]$row
}
Write-Output "Read $($rows.Count) Natural Earth attribute rows."

$geometries = @()
$position = 100
while ($position -lt $shape.Length) {
    $wordCount = [System.Net.IPAddress]::NetworkToHostOrder([BitConverter]::ToInt32($shape, $position + 4))
    $content = $position + 8
    $parts = @()
    if ([BitConverter]::ToInt32($shape, $content) -eq 5) {
        $partCount = [BitConverter]::ToInt32($shape, $content + 36)
        $pointCount = [BitConverter]::ToInt32($shape, $content + 40)
        $partsAt = $content + 44
        $pointsAt = $partsAt + $partCount * 4
        $starts = @()
        for ($j = 0; $j -lt $partCount; $j++) { $starts += [BitConverter]::ToInt32($shape, $partsAt + $j * 4) }
        for ($j = 0; $j -lt $partCount; $j++) {
            $from = $starts[$j]
            $to = if ($j + 1 -lt $partCount) { $starts[$j + 1] } else { $pointCount }
            $points = @()
            for ($k = $from; $k -lt $to; $k++) {
                $points += ,[pscustomobject]@{ X = [BitConverter]::ToDouble($shape, $pointsAt + $k * 16); Y = [BitConverter]::ToDouble($shape, $pointsAt + $k * 16 + 8) }
            }
            $parts += ,$points
        }
    }
    $geometries += ,$parts
    $position += 8 + $wordCount * 2
}
if ($geometries.Count -ne $rows.Count) { throw "Shapefile row count mismatch: $($geometries.Count) shapes, $($rows.Count) names." }
Write-Output "Read $($geometries.Count) country geometries. Converting selected country outlines..."

$easy = @('Algeria','Argentina','Australia','Brazil','Canada','Chile','China','Colombia','Cuba','Egypt','Ethiopia','Finland','France','Germany','Greece','Iceland','India','Indonesia','Ireland','Israel','Italy','Japan','Kenya','Madagascar','Malaysia','Mexico','Morocco','New Zealand','Nigeria','Norway','Pakistan','Peru','Philippines','Poland','Portugal','Russia','Saudi Arabia','South Africa','South Korea','Spain','Sweden','Taiwan','Tanzania','Thailand','Turkey','Ukraine','United Kingdom','United States of America','Vietnam')
$hard = @('Albania','Andorra','Antigua and Barbuda','Armenia','Azerbaijan','Bahrain','Barbados','Belize','Benin','Bhutan','Bosnia and Herzegovina','Brunei','Burundi','Cape Verde','Comoros','Costa Rica','Cyprus','Dominica','El Salvador','Estonia','Eswatini','Fiji','The Gambia','Georgia','Grenada','Guinea-Bissau','Guyana','Haiti','Honduras','Jamaica','Jordan','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liechtenstein','Lithuania','Luxembourg','Maldives','Malta','Marshall Islands','Mauritius','Federated States of Micronesia','Moldova','Monaco','Montenegro','Nauru','Nepal','Nicaragua','North Macedonia','Palau','Panama','Paraguay','Qatar','Republic of the Congo','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','São Tomé and Príncipe','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','Suriname','Togo','Tonga','Trinidad and Tobago','Tunisia','Tuvalu','Uruguay','Vanuatu')
$displayName = @{ 'United States of America'='United States'; "People's Republic of China"='China'; 'Czech Republic'='Czechia'; 'East Timor'='Timor-Leste' }
$aliases = @{
    'United States of America'=@('USA','US','United States','United States of America')
    'United Kingdom'=@('UK','U.K.','Britain','Great Britain','United Kingdom of Great Britain and Northern Ireland')
    'Czech Republic'=@('Czechia')
    'South Korea'=@('Republic of Korea','Korea, Republic of')
    'North Korea'=@('Democratic People''s Republic of Korea','DPRK')
    "People's Republic of China"=@('China','PRC')
    'Turkey'=@('Türkiye','Turkiye','Republic of Turkey')
    'Ivory Coast'=@('Côte d''Ivoire','Cote d Ivoire','Cote dIvoire')
    'Eswatini'=@('Swaziland')
    'Myanmar'=@('Burma')
    'East Timor'=@('Timor-Leste','Timor Leste')
    'Russia'=@('Russian Federation')
    'The Gambia'=@('Gambia')
    'The Bahamas'=@('Bahamas')
    'United Arab Emirates'=@('UAE')
    'Democratic Republic of the Congo'=@('DR Congo','DRC','Congo-Kinshasa')
    'Republic of the Congo'=@('Congo-Brazzaville')
    'Bolivia'=@('Plurinational State of Bolivia')
    'Venezuela'=@('Bolivarian Republic of Venezuela')
    'Tanzania'=@('United Republic of Tanzania')
    'Palestine'=@('State of Palestine')
    'Iran'=@('Iran, Islamic Republic of')
    'Syria'=@('Syrian Arab Republic')
    'Vietnam'=@('Viet Nam')
    'Moldova'=@('Republic of Moldova')
    'North Macedonia'=@('Republic of North Macedonia')
    'Cape Verde'=@('Cabo Verde')
    'Brunei'=@('Brunei Darussalam')
}
$countries = @()
for ($rowIndex = 0; $rowIndex -lt $rows.Count; $rowIndex++) {
    $row = $rows[$rowIndex]
    $recognizedType = $row.TYPE -in @('Sovereign country','Country','Sovereignty')
    $specialCountry = $row.NAME_EN -in @('Israel','Palestine')
    if (-not (($recognizedType -and $row.ADMIN -eq $row.SOVEREIGNT) -or $specialCountry)) { continue }
    if ($row.NAME_EN -in @('Somaliland','Turkish Republic of Northern Cyprus') -or $row.REGION_UN -in @('Antarctica','Seven seas (open ocean)')) { continue }
    $parts = $geometries[$rowIndex]
    if (-not $parts.Count) { continue }

    # Unwrap the antimeridian by cutting at the largest longitude gap.
    $allLongitudes = @($parts | ForEach-Object { $_ } | ForEach-Object { if ($_.X -lt 0) { $_.X + 360 } else { $_.X } })
    $sortedLongitudes = @($allLongitudes | Sort-Object -Unique)
    $largestGap = -1; $arcStart = $sortedLongitudes[0]
    for ($i = 0; $i -lt $sortedLongitudes.Count; $i++) {
        $next = if ($i + 1 -lt $sortedLongitudes.Count) { $sortedLongitudes[$i + 1] } else { $sortedLongitudes[0] + 360 }
        if (($next - $sortedLongitudes[$i]) -gt $largestGap) { $largestGap = $next - $sortedLongitudes[$i]; $arcStart = if ($i + 1 -lt $sortedLongitudes.Count) { $sortedLongitudes[$i + 1] } else { $sortedLongitudes[0] } }
    }
    $longitudeMap = @{}
    foreach ($lon in $sortedLongitudes) { $longitudeMap[[string]$lon] = if ($lon -lt $arcStart) { $lon + 360 } else { $lon } }
    $mappedParts = @()
    foreach ($part in $parts) {
        $mapped = @()
        foreach ($point in $part) { $lon = $point.X; if ($lon -lt 0) { $lon += 360 }; $mapped += ,[pscustomobject]@{ X = [double]$longitudeMap[[string]$lon]; Y = $point.Y } }
        $mappedParts += ,$mapped
    }

    # Keep nearby islands but omit distant overseas territories from the recognizable country outline.
    $largestPartIndex = 0; $largestArea = 0.0
    for ($i = 0; $i -lt $mappedParts.Count; $i++) {
        $poly = $mappedParts[$i]; $area = 0.0
        for ($j = 0; $j -lt $poly.Count; $j++) { $next = ($j + 1) % $poly.Count; $area += $poly[$j].X * $poly[$next].Y - $poly[$next].X * $poly[$j].Y }
        if ([Math]::Abs($area) -gt $largestArea) { $largestArea = [Math]::Abs($area); $largestPartIndex = $i }
    }
    $mainPart = $mappedParts[$largestPartIndex]
    if (-not $mainPart -or $mainPart.Count -lt 3) { Write-Warning "No usable polygon points for $($row.NAME_EN). Parts: $($parts.Count); mapped parts: $($mappedParts.Count)."; continue }
    $mainX = ($mainPart | Measure-Object X -Average).Average; $mainY = ($mainPart | Measure-Object Y -Average).Average
    $keptParts = @()
    for ($i = 0; $i -lt $mappedParts.Count; $i++) {
        $part = $mappedParts[$i]; $centerX = ($part | Measure-Object X -Average).Average; $centerY = ($part | Measure-Object Y -Average).Average
        $distanceX = [Math]::Abs($centerX - $mainX); $distanceX = [Math]::Min($distanceX, 360 - $distanceX)
        if ([Math]::Sqrt($distanceX * $distanceX + ($centerY - $mainY) * ($centerY - $mainY)) -le 70 -or $i -eq $largestPartIndex) { $keptParts += ,$part }
    }
    $points = @($keptParts | ForEach-Object { $_ }); $minX = ($points | Measure-Object X -Minimum).Minimum; $maxX = ($points | Measure-Object X -Maximum).Maximum
    $minY = ($points | Measure-Object Y -Minimum).Minimum; $maxY = ($points | Measure-Object Y -Maximum).Maximum
    $width = $maxX - $minX; $height = $maxY - $minY
    if ($width -le 0 -or $height -le 0) { continue }
    $scale = [Math]::Min(800 / $width, 500 / $height); $left = (1000 - $width * $scale) / 2; $top = (650 - $height * $scale) / 2
    $pathParts = @()
    foreach ($part in $keptParts) {
        if ($part.Count -lt 3) { continue }
        $commands = @()
        for ($i = 0; $i -lt $part.Count; $i++) {
            $x = [Math]::Round($left + ($part[$i].X - $minX) * $scale, 1); $y = [Math]::Round($top + ($maxY - $part[$i].Y) * $scale, 1)
            $commands += if ($i -eq 0) { "M$x,$y" } else { "L$x,$y" }
        }
        $commands += 'Z'; $pathParts += ($commands -join '')
    }
    $region = if ($row.REGION_UN -eq 'Americas') { if ($row.SUBREGION -eq 'South America') { 'South America' } else { 'North America' } } else { $row.REGION_UN }
    if ($region -notin @('Africa','Asia','Europe','North America','South America','Oceania')) { continue }
    $difficulty = if ($easy -contains $row.NAME_EN) { 'easy' } elseif ($hard -contains $row.NAME_EN) { 'hard' } else { 'medium' }
    $name = if ($displayName.ContainsKey($row.NAME_EN)) { $displayName[$row.NAME_EN] } else { $row.NAME_EN }
    $countryAliases = if ($aliases.ContainsKey($row.NAME_EN)) { @($aliases[$row.NAME_EN]) } else { @() }
    $countries += [pscustomobject]@{ id=$row.NE_ID; name=$name; aliases=$countryAliases; region=$region; difficulty=$difficulty; path=($pathParts -join '') }
}

$metadata = [ordered]@{
    source='Natural Earth Admin 0 - Countries'; version='5.1.1'; scale='1:50m'
    sourceUrl='https://www.naturalearthdata.com/downloads/50m-cultural-vectors/50m-admin-0-countries/'
    license='Public domain'; licenseUrl='https://www.naturalearthdata.com/about/terms-of-use/'
    provenance='Locally generated SVG paths from the included official shapefile. Includes recognized sovereign country records and Taiwan, Israel, and Palestine. Excludes dependent territories, Somaliland, Northern Cyprus, Antarctica, ocean regions, and distant overseas parts more than 70 degrees from the main polygon.'
}
$payload = [ordered]@{ metadata=$metadata; countries=$countries }
$json = ConvertTo-Json -InputObject $payload -Depth 6 -Compress
$outputPath = Join-Path (Get-Location) 'games\where-am-i-data.js'
[IO.File]::WriteAllText($outputPath, "window.WHERE_AM_I_DATA = $json;`n", [Text.UTF8Encoding]::new($false))
Write-Output "Generated $($countries.Count) country silhouettes."
$countries | Group-Object region | Sort-Object Name | ForEach-Object { Write-Output "$($_.Name): $($_.Count)" }
