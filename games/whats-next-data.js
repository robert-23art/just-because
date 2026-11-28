// Every puzzle is authored as a fixed record. Answers and explanations are kept together.
// [category, difficulty, puzzle, options, answer, hint, explanation]
const WHATS_NEXT_DATA = {
    roundsPerGame: 10,
    categories: [
        { id: "patterns", name: "Number Patterns", icon: "↗" },
        { id: "tricky", name: "Tricky Math", icon: "×" },
        { id: "visual", name: "Visual Math", icon: "△" }
    ],
    questions: [
        // NUMBER PATTERNS · EASY
        ["patterns","easy","2 · 4 · 8 · 16 · ?",["24","30","32","36"],"32","Compare each term with the one before it.","Each term doubles: 16 × 2 = 32."],
        ["patterns","easy","5 · 8 · 11 · 14 · ?",["16","17","18","19"],"17","The same amount is added each time.","Add 3 each time, so 14 + 3 = 17."],
        ["patterns","easy","1 · 4 · 9 · 16 · ?",["20","24","25","36"],"25","These are square numbers.","They are 1², 2², 3², 4²; the next is 5² = 25."],
        ["patterns","easy","30 · 25 · 20 · 15 · ?",["5","10","12","20"],"10","The sequence counts down in equal steps.","Subtract 5 each time: 15 − 5 = 10."],
        ["patterns","easy","3 · 6 · 12 · 24 · ?",["36","42","48","54"],"48","Watch how each number grows, not the difference.","Each term doubles, so 24 × 2 = 48."],
        ["patterns","easy","2 · 5 · 8 · 11 · ?",["13","14","15","16"],"14","Look for a constant difference.","Add 3 each time: 11 + 3 = 14."],
        ["patterns","easy","1 · 2 · 4 · 7 · 11 · ?",["15","16","17","18"],"16","The jumps get one bigger each time.","The steps are +1, +2, +3, +4; next is +5, giving 16."],
        ["patterns","easy","100 · 90 · 80 · 70 · ?",["20","50","60","65"],"60","The numbers are walking down evenly.","Subtract 10 each time: 70 − 10 = 60."],
        ["patterns","easy","1 · 3 · 6 · 10 · 15 · ?",["18","20","21","25"],"21","The amount added increases by one each step.","Add 2, then 3, 4, and 5; next add 6 to get 21."],
        ["patterns","easy","7 · 14 · 21 · 28 · ?",["32","35","36","42"],"35","These are multiples of the first number.","The sequence adds 7 each time; 28 + 7 = 35."],
        ["patterns","easy","1 · 2 · 3 · 5 · 8 · ?",["11","12","13","16"],"13","Each new term combines the previous two.","This is Fibonacci: 5 + 8 = 13."],
        ["patterns","easy","4 · 8 · 12 · 16 · ?",["18","20","22","24"],"20","The multiples keep the same gap.","Add 4 each time, so the next term is 20."],
        ["patterns","easy","2 · 6 · 18 · 54 · ?",["108","126","162","216"],"162","Each step uses the same multiplication.","Multiply by 3: 54 × 3 = 162."],
        ["patterns","easy","50 · 45 · 40 · 35 · ?",["25","30","32","40"],"30","Count down by the repeated jump.","Subtract 5 from 35 to get 30."],
        ["patterns","easy","9 · 18 · 27 · 36 · ?",["42","45","48","54"],"45","These are consecutive multiples of 9.","The next multiple is 9 × 5 = 45."],
        ["patterns","easy","1 · 4 · 7 · 10 · ?",["11","12","13","14"],"13","The same small jump repeats.","Add 3 to 10 to get 13."],
        ["patterns","easy","2 · 4 · 6 · 8 · ?",["9","10","11","12"],"10","These are consecutive even numbers.","The next even number after 8 is 10."],
        ["patterns","easy","64 · 32 · 16 · 8 · ?",["2","4","6","12"],"4","Each term is half of the previous one.","Halve 8 to get 4."],
        ["patterns","easy","3 · 9 · 27 · ?",["54","72","81","90"],"81","The terms are powers of 3.","Multiply by 3 again: 27 × 3 = 81."],
        ["patterns","easy","11 · 22 · 33 · 44 · ?",["50","55","56","66"],"55","The same two-digit number is being repeated.","The next multiple of 11 is 11 × 5 = 55."],

        // NUMBER PATTERNS · MEDIUM
        ["patterns","medium","2 · 5 · 10 · 17 · 26 · ?",["35","36","37","38"],"37","Compare the gaps between terms.","The gaps are +3, +5, +7, +9; next is +11, so 26 + 11 = 37."],
        ["patterns","medium","1 · 8 · 27 · 64 · ?",["100","121","125","216"],"125","Think of whole numbers raised to a power.","These are cubes 1³ through 4³; the next is 5³ = 125."],
        ["patterns","medium","3 · 4 · 6 · 9 · 13 · ?",["16","17","18","19"],"18","The jumps grow by one each time.","The gaps are +1, +2, +3, +4; next add 5 to get 18."],
        ["patterns","medium","2 · 7 · 4 · 9 · 6 · ?",["8","10","11","13"],"11","Separate the positions: odd and even places behave differently.","Odd places are 2, 4, 6; even places are 7, 9, so the next even-place term is 11."],
        ["patterns","medium","5 · 10 · 8 · 16 · 14 · ?",["18","24","26","28"],"28","The operations alternate.","Multiply by 2, subtract 2, repeat: 14 × 2 = 28."],
        ["patterns","medium","4 · 7 · 13 · 25 · 49 · ?",["73","91","97","99"],"97","Each gap is twice the one before it.","The gaps double: +3, +6, +12, +24; next +48 gives 97."],
        ["patterns","medium","1 · 2 · 6 · 24 · 120 · ?",["480","600","720","840"],"720","The multiplier increases by one each time.","Multiply by 2, 3, 4, 5; next multiply by 6: 120 × 6 = 720."],
        ["patterns","medium","10 · 13 · 12 · 15 · 14 · ?",["15","16","17","18"],"17","There is a repeating pair of operations.","Add 3, subtract 1, repeat; after 14 add 3 to get 17."],
        ["patterns","medium","2 · 3 · 5 · 8 · 12 · ?",["15","16","17","18"],"17","The gaps increase one at a time.","The gaps are +1, +2, +3, +4; next add 5 to get 17."],
        ["patterns","medium","81 · 27 · 9 · 3 · ?",["0","1","2","1.5"],"1","Each term is divided by the same number.","Divide by 3 each time: 3 ÷ 3 = 1."],
        ["patterns","medium","2 · 4 · 7 · 11 · 16 · ?",["20","21","22","23"],"22","The steps are growing steadily.","Add 2, 3, 4, 5; next add 6 to reach 22."],
        ["patterns","medium","1 · 4 · 2 · 8 · 4 · ?",["6","12","16","20"],"16","Odd and even positions each have their own pattern.","Even positions are 4, 8, 16; each doubles. The next term is 16."],
        ["patterns","medium","6 · 11 · 21 · 41 · ?",["61","71","81","82"],"81","Look at each gap, then at how those gaps change.","The gaps double: +5, +10, +20; next +40 gives 81."],
        ["patterns","medium","3 · 8 · 15 · 24 · 35 · ?",["44","46","48","49"],"48","Each term is one less than a square.","The terms are 2²−1, 3²−1, up to 6²−1; next 7²−1 = 48."],
        ["patterns","medium","2 · 10 · 4 · 20 · 6 · ?",["12","24","30","40"],"30","Separate alternating positions.","Odd positions are 2, 4, 6; even positions are 10, 20, so next is 30."],
        ["patterns","medium","100 · 96 · 88 · 76 · 60 · ?",["36","40","42","44"],"40","The amount subtracted grows by four.","Subtract 4, 8, 12, 16; next subtract 20: 60 − 20 = 40."],
        ["patterns","medium","1 · 5 · 14 · 30 · 55 · ?",["81","89","91","95"],"91","Look at the increasing gaps.","The gaps are +4, +9, +16, +25; next +36 gives 91."],
        ["patterns","medium","2 · 3 · 6 · 11 · 18 · ?",["25","26","27","28"],"27","The gaps are consecutive odd numbers.","Add 1, 3, 5, 7; next add 9 to get 27."],
        ["patterns","medium","7 · 14 · 12 · 24 · 22 · ?",["40","42","44","46"],"44","Alternate doubling with subtracting two.","Double 7, subtract 2, double, subtract 2; next 22 × 2 = 44."],
        ["patterns","medium","1 · 3 · 12 · 60 · 360 · ?",["1,800","2,160","2,520","3,600"],"2,520","The multiplier rises by one.","Multiply by 3, 4, 5, 6; next multiply by 7: 360 × 7 = 2,520."],

        // NUMBER PATTERNS · HARD
        ["patterns","hard","4 · 9 · 19 · 39 · 79 · ?",["149","158","159","160"],"159","Double each term, then add the same small amount.","Each term is doubled and 1 is added: 79 × 2 + 1 = 159."],
        ["patterns","hard","2 · 6 · 15 · 31 · 56 · ?",["82","87","92","97"],"92","The gaps are themselves a familiar sequence.","The gaps are 4, 9, 16, 25 (squares); next add 36 to get 92."],
        ["patterns","hard","1 · 4 · 10 · 20 · 35 · ?",["50","54","56","60"],"56","These are sums of triangular numbers.","The gaps are 3, 6, 10, 15; next gap is 21, giving 56."],
        ["patterns","hard","2 · 9 · 4 · 27 · 8 · ?",["16","36","54","81"],"81","Read odd and even positions separately.","Odd positions double: 2, 4, 8. Even positions triple: 9, 27, 81."],
        ["patterns","hard","3 · 7 · 15 · 31 · 63 · ?",["95","111","127","129"],"127","Each term doubles, then gains one.","63 × 2 + 1 = 127."],
        ["patterns","hard","5 · 11 · 23 · 47 · 95 · ?",["181","189","191","193"],"191","Double, then add a steadily changing amount.","The rule is ×2 +1: 95 × 2 + 1 = 191."],
        ["patterns","hard","2 · 12 · 36 · 80 · 150 · ?",["216","240","252","264"],"252","Each term is built from its position number.","These are n²(n+1): 1²·2, 2²·3, …, 5²·6; next 6²·7 = 252."],
        ["patterns","hard","1 · 2 · 6 · 15 · 31 · 56 · ?",["81","87","92","98"],"92","The gaps grow by consecutive squares.","The gaps are 1, 4, 9, 16, 25; next add 36 to get 92."],
        ["patterns","hard","2 · 5 · 11 · 23 · 47 · ?",["93","94","95","96"],"95","Apply the same doubling rule with a small adjustment.","Each term is doubled and 1 added: 47 × 2 + 1 = 95."],
        ["patterns","hard","1 · 5 · 14 · 30 · 55 · 91 · ?",["126","130","140","146"],"140","The gaps are products of consecutive whole numbers.","The gaps are 4, 9, 16, 25, 36; next is 49, giving 140."],
        ["patterns","hard","2 · 4 · 12 · 48 · 240 · ?",["960","1,200","1,440","1,680"],"1,440","The multiplier increases each step.","Multiply by 2, 3, 4, 5; next multiply by 6: 240 × 6 = 1,440."],
        ["patterns","hard","1 · 8 · 9 · 17 · 26 · 43 · ?",["60","69","70","72"],"69","Each new term adds the previous two.","This is a Fibonacci-style sequence: 26 + 43 = 69."],
        ["patterns","hard","10 · 12 · 16 · 24 · 40 · ?",["56","64","68","72"],"72","The gaps double each time.","The gaps are +2, +4, +8, +16; next +32 gives 72."],
        ["patterns","hard","1 · 3 · 7 · 15 · 31 · ?",["47","61","63","64"],"63","Think of powers of two with a tiny subtraction.","Each term is doubled and 1 added: 31 × 2 + 1 = 63."],
        ["patterns","hard","2 · 3 · 5 · 9 · 17 · ?",["25","31","33","34"],"33","The differences double.","The gaps are +1, +2, +4, +8; next +16 gives 33."],
        ["patterns","hard","4 · 6 · 12 · 14 · 28 · 30 · ?",["32","56","60","62"],"60","Alternate adding two and doubling.","After 30, double it: 30 × 2 = 60."],
        ["patterns","hard","3 · 12 · 27 · 48 · 75 · ?",["96","102","108","111"],"108","Each term is three times a square.","The terms are 3·1² through 3·5²; next is 3·6² = 108."],
        ["patterns","hard","2 · 8 · 18 · 32 · 50 · ?",["64","68","72","74"],"72","Look at the differences and how they grow.","The gaps are 6, 10, 14, 18; next gap 22 gives 72."],
        ["patterns","hard","1 · 2 · 5 · 14 · 41 · ?",["120","122","123","124"],"122","Each term follows one repeating multiplication and adjustment.","Multiply by 3 and subtract 1: 41 × 3 − 1 = 122."],
        ["patterns","hard","6 · 13 · 27 · 55 · 111 · ?",["219","221","223","225"],"223","Double each term and add one.","111 × 2 + 1 = 223."],

        // TRICKY MATH · EASY
        ["tricky","easy","What is 10 + 10 × 2?",["20","22","30","40"],"30","Multiplication gets its turn before addition.","Multiply first: 10 × 2 = 20, then add 10 to get 30."],
        ["tricky","easy","A movie ticket costs $8. What do 3 tickets cost?",["$11","$16","$24","$32"],"$24","Multiply the price by the number of tickets.","3 × $8 = $24."],
        ["tricky","easy","You have 12 cookies and eat 3. How many remain?",["3","8","9","15"],"9","Eating cookies is subtraction. Sadly.","12 − 3 = 9 cookies remain."],
        ["tricky","easy","What is half of 18, then plus 2?",["9","10","11","13"],"11","Do the words in order.","Half of 18 is 9; 9 + 2 = 11."],
        ["tricky","easy","A dozen socks lose 2 socks in the laundry. How many are left?",["10","12","14","24"],"10","A dozen means twelve.","12 − 2 = 10 socks."],
        ["tricky","easy","What is 6 + 4 ÷ 2?",["5","8","10","12"],"8","Division comes before addition.","4 ÷ 2 = 2, then 6 + 2 = 8."],
        ["tricky","easy","There are 4 tables with 3 legs each. How many legs total?",["7","12","14","16"],"12","Same number of legs at every table.","4 × 3 = 12 legs."],
        ["tricky","easy","What is 20 − 5 × 2?",["10","15","30","50"],"10","Multiply before subtracting.","5 × 2 = 10, then 20 − 10 = 10."],
        ["tricky","easy","A pizza has 8 slices. You eat 3. What fraction remains?",["3/8","5/8","5/3","8/5"],"5/8","Count the slices left out of the original eight.","8 − 3 = 5 slices remain, so the fraction is 5/8."],
        ["tricky","easy","What is 3² + 1?",["7","9","10","12"],"10","The small 2 means multiply 3 by itself.","3² = 9; 9 + 1 = 10."],
        ["tricky","easy","A snail climbs 2 steps each hour for 4 hours. How many steps?",["6","8","10","12"],"8","Multiply steps per hour by hours.","2 × 4 = 8 steps."],
        ["tricky","easy","What is 15 ÷ 3 + 4?",["3","5","9","12"],"9","Divide before adding.","15 ÷ 3 = 5; 5 + 4 = 9."],
        ["tricky","easy","You buy 2 $5 notebooks and pay with $20. What change do you get?",["$5","$10","$15","$18"],"$10","First find the total cost.","The notebooks cost $10, so $20 − $10 = $10 change."],
        ["tricky","easy","What is 7 + 3 × 0?",["0","7","10","21"],"7","Zero makes the multiplication disappear.","3 × 0 = 0, then 7 + 0 = 7."],
        ["tricky","easy","What is 24 ÷ 6 × 2?",["2","8","12","24"],"8","Multiplication and division go left to right.","24 ÷ 6 = 4, then 4 × 2 = 8."],
        ["tricky","easy","A clock shows 3:00. What time is it 4 hours later?",["6:00","7:00","8:00","9:00"],"7:00","Move forward four hours, not four numbers on the clock face.","3 + 4 = 7, so it is 7:00."],
        ["tricky","easy","What is 5 × (2 + 1)?",["11","13","15","18"],"15","Do the parentheses first.","2 + 1 = 3, and 5 × 3 = 15."],
        ["tricky","easy","There are 18 birds. Half fly away. How many stay?",["6","8","9","12"],"9","Half means divide by two.","18 ÷ 2 = 9 birds stay."],
        ["tricky","easy","What is 100 − 25 − 25?",["25","50","75","100"],"50","Subtract both amounts, left to right.","100 − 25 = 75; 75 − 25 = 50."],
        ["tricky","easy","A robot takes 3 steps, then 2 more. How many steps?",["1","5","6","9"],"5","Add the two walks.","3 + 2 = 5 steps."],

        // TRICKY MATH · MEDIUM
        ["tricky","medium","What is 18 − 6 ÷ 3 × 2?",["8","14","16","24"],"14","Division and multiplication happen left to right before subtraction.","6 ÷ 3 = 2, then 2 × 2 = 4; 18 − 4 = 14."],
        ["tricky","medium","A $40 jacket is 25% off. What is the sale price?",["$10","$25","$30","$35"],"$30","Find one quarter of $40 and subtract it.","25% of $40 is $10; $40 − $10 = $30."],
        ["tricky","medium","What is (8 + 4) × 3 − 5?",["27","31","35","41"],"31","Start inside the parentheses.","8 + 4 = 12; 12 × 3 = 36; 36 − 5 = 31."],
        ["tricky","medium","Three friends split 27 slices equally. How many each?",["7","8","9","10"],"9","Divide the slices among three people.","27 ÷ 3 = 9 slices each."],
        ["tricky","medium","A taxi charges $4 plus $2 per mile. What is a 6-mile ride?",["$10","$12","$16","$20"],"$16","Add the fixed fee to six mileage charges.","$2 × 6 = $12; $12 + $4 = $16."],
        ["tricky","medium","What is 2³ + 3²?",["13","17","25","36"],"17","Evaluate each exponent before adding.","2³ = 8 and 3² = 9; 8 + 9 = 17."],
        ["tricky","medium","A number is doubled, then 7 is added. Starting from 9, what is it?",["23","25","32","35"],"25","Double first, then add seven.","9 × 2 = 18; 18 + 7 = 25."],
        ["tricky","medium","What is 48 ÷ (2 × 4)?",["3","6","12","24"],"6","The parentheses make one divisor.","2 × 4 = 8; 48 ÷ 8 = 6."],
        ["tricky","medium","A 90-minute film starts at 6:40. When does it end?",["7:50","8:00","8:10","8:20"],"8:10","Add 60 minutes, then the remaining 30.","90 minutes is 1 hour 30 minutes; 6:40 + 1:30 = 8:10."],
        ["tricky","medium","What is 5 × 6 − 4 × 3?",["6","18","22","42"],"18","Do both multiplications first.","30 − 12 = 18."],
        ["tricky","medium","A $60 bill is shared equally by 4 people, then each adds a $2 tip. Total each?",["$15","$17","$18","$20"],"$17","Split the bill before adding each person's tip.","$60 ÷ 4 = $15; $15 + $2 = $17."],
        ["tricky","medium","What is 3/4 of 28?",["7","18","21","24"],"21","Divide by four, then take three parts.","28 ÷ 4 = 7; 7 × 3 = 21."],
        ["tricky","medium","A square has side 7. What is its perimeter?",["14","28","35","49"],"28","A square has four equal sides.","4 × 7 = 28 units around the square."],
        ["tricky","medium","What is 100 ÷ 5 + 6 × 3?",["38","42","48","78"],"38","Do division and multiplication before addition.","100 ÷ 5 = 20; 6 × 3 = 18; 20 + 18 = 38."],
        ["tricky","medium","A bus has 32 people. 9 get off and 5 get on. How many now?",["18","27","28","36"],"28","Subtract those leaving, then add those boarding.","32 − 9 + 5 = 28."],
        ["tricky","medium","What is 7 × 8 − 7 × 3?",["21","28","35","56"],"35","Factor out the repeated 7, or multiply each part.","56 − 21 = 35."],
        ["tricky","medium","A recipe for 4 needs 300 g of flour. How much for 6?",["400 g","450 g","500 g","600 g"],"450 g","Scale by 6/4, or find one serving first.","300 ÷ 4 = 75 g each; 75 × 6 = 450 g."],
        ["tricky","medium","What is 2 × (9 − 3)²?",["24","36","72","108"],"72","Parentheses, then the exponent, then multiplication.","9 − 3 = 6; 6² = 36; 2 × 36 = 72."],
        ["tricky","medium","You save $5 each week for 8 weeks, then spend $13. What remains?",["$27","$35","$40","$53"],"$27","Work out the savings before the spending.","5 × 8 = $40; $40 − $13 = $27."],
        ["tricky","medium","What is 64 ÷ 8 + 4²?",["12","20","24","32"],"24","Evaluate the exponent and division before adding.","64 ÷ 8 = 8; 4² = 16; 8 + 16 = 24."],

        // TRICKY MATH · HARD
        ["tricky","hard","What is 48 ÷ [2 × (3 + 1)]?",["6","12","24","96"],"6","Work inside the parentheses and brackets first.","3 + 1 = 4; 2 × 4 = 8; 48 ÷ 8 = 6."],
        ["tricky","hard","A $80 item rises by 25%, then falls by 20%. What is the final price?",["$76","$80","$84","$100"],"$80","Percent changes apply to the current price, not the original one.","$80 × 1.25 = $100; $100 × 0.8 = $80."],
        ["tricky","hard","Solve: 3(x − 2) = 21. What is x?",["5","7","9","11"],"9","Undo multiplication before undoing subtraction.","Divide by 3: x − 2 = 7; add 2, so x = 9."],
        ["tricky","hard","A train travels 180 km in 2.5 hours. What is its average speed?",["60 km/h","70 km/h","72 km/h","75 km/h"],"72 km/h","Average speed is distance divided by time.","180 ÷ 2.5 = 72 km/h."],
        ["tricky","hard","What is 5 + 2 × (12 − 4) ÷ 2?",["9","13","21","28"],"13","Parentheses first; then multiplication and division left to right.","12 − 4 = 8; 2 × 8 ÷ 2 = 8; 5 + 8 = 13."],
        ["tricky","hard","A tank is 2/3 full with 48 L. What is its full capacity?",["64 L","72 L","80 L","96 L"],"72 L","Forty-eight litres is two equal thirds.","One third is 24 L, so three thirds are 72 L."],
        ["tricky","hard","What is the mean of 12, 18, 21, and 29?",["18","19","20","21"],"20","Add them and divide by four values.","12 + 18 + 21 + 29 = 80; 80 ÷ 4 = 20."],
        ["tricky","hard","A $50 purchase has 8% tax. What is the total?",["$52","$54","$58","$58.50"],"$54","Find 8% of $50 and add it to the price.","8% of $50 is $4, so the total is $54."],
        ["tricky","hard","If 4 workers finish a job in 6 hours, how many worker-hours is that?",["10","20","24","30"],"24","Multiply workers by hours for worker-hours.","4 × 6 = 24 worker-hours."],
        ["tricky","hard","What is 2⁵ − 3³?",["−5","5","9","17"],"5","Evaluate both powers first.","2⁵ = 32 and 3³ = 27; 32 − 27 = 5."],
        ["tricky","hard","A rectangle is 12 by 7. What is its area minus its perimeter?",["38","42","46","50"],"46","Find area and perimeter separately.","Area is 84; perimeter is 2(12 + 7) = 38; 84 − 38 = 46."],
        ["tricky","hard","A number divided by 4, then plus 9, equals 17. What is the number?",["24","28","32","36"],"32","Undo the +9, then undo division by 4.","The number divided by 4 is 8, so the number is 8 × 4 = 32."],
        ["tricky","hard","What is 15% of 240?",["24","30","36","40"],"36","Find 10% and 5%, then add them.","10% is 24 and 5% is 12; total 36."],
        ["tricky","hard","A 120 m track is run 3.5 times. How far is that?",["360 m","400 m","420 m","480 m"],"420 m","Three laps plus half a lap.","120 × 3.5 = 420 m."],
        ["tricky","hard","What is (18² − 6²) ÷ 12?",["12","18","24","30"],"24","Use the difference of squares or calculate both squares.","324 − 36 = 288; 288 ÷ 12 = 24."],
        ["tricky","hard","A phone is 30% off $200, then a $10 coupon is applied. Price?",["$120","$130","$140","$150"],"$130","Apply the percentage discount, then subtract the coupon.","30% of $200 is $60; $200 − $60 − $10 = $130."],
        ["tricky","hard","If 3 identical pumps fill 90 L in 5 minutes, how much does one pump fill per minute?",["3 L","5 L","6 L","18 L"],"6 L","Find the total rate, then divide by three pumps.","90 ÷ 5 = 18 L/min together; 18 ÷ 3 = 6 L/min per pump."],
        ["tricky","hard","What is 7² + 4 × (9 − 5) − 10?",["39","49","55","59"],"55","Powers and parentheses come before multiplication and addition.","7² = 49; 4 × 4 = 16; 49 + 16 − 10 = 55."],
        ["tricky","hard","A $120 bill is split 5 ways, then everyone adds a $4 tip. Each pays?",["$24","$26","$28","$30"],"$28","Split first, then add each person's tip.","$120 ÷ 5 = $24; $24 + $4 = $28."],
        ["tricky","hard","A number is increased by 40%, becoming 98. What was the original?",["60","70","75","80"],"70","The new amount is 140% of the original.","98 ÷ 1.4 = 70."],

        // VISUAL MATH · EASY
        ["visual","easy","● + ● = 10\n● = ?",["3","4","5","6"],"5","Two identical circles make ten.","Each circle is 10 ÷ 2 = 5."],
        ["visual","easy","▲ + ▲ + ▲ = 12\n▲ = ?",["3","4","5","6"],"4","Three matching triangles share the total equally.","12 ÷ 3 = 4."],
        ["visual","easy","★ + 2 = 9\n★ = ?",["5","6","7","8"],"7","Undo the +2.","9 − 2 = 7."],
        ["visual","easy","■ + ● = 9\n■ = 5\n● = ?",["2","3","4","5"],"4","Subtract the square's value from the total.","9 − 5 = 4."],
        ["visual","easy","○ + ○ + 3 = 11\n○ = ?",["3","4","5","6"],"4","Remove 3, then split the rest between two circles.","11 − 3 = 8; 8 ÷ 2 = 4."],
        ["visual","easy","◆ = 3\n◆ + ◆ + ◆ + ◆ = ?",["9","10","12","15"],"12","There are four diamonds worth three each.","4 × 3 = 12."],
        ["visual","easy","☀ + 4 = 13\n☀ = ?",["7","8","9","10"],"9","Take four away from thirteen.","13 − 4 = 9."],
        ["visual","easy","● = 6\n● − ▲ = 2\n▲ = ?",["2","3","4","5"],"4","Find what must be subtracted from six to leave two.","6 − 2 = 4, so the triangle is 4."],
        ["visual","easy","2 ★ = 14\n★ = ?",["5","6","7","8"],"7","Two stars share fourteen equally.","14 ÷ 2 = 7."],
        ["visual","easy","■ + 1 = 8\n■ + 1 = ?",["7","8","9","10"],"8","The same square appears both times.","The square is 7, so 7 + 1 = 8."],
        ["visual","easy","● + ▲ = 10\n● = 4\n▲ = ?",["4","5","6","7"],"6","Subtract the circle's value.","10 − 4 = 6."],
        ["visual","easy","♥ = 2\n♥ + ♥ + ♥ + 1 = ?",["5","6","7","8"],"7","Three hearts are worth two each, then add one.","3 × 2 + 1 = 7."],
        ["visual","easy","☂ − 3 = 5\n☂ = ?",["2","8","9","10"],"8","Add three back.","5 + 3 = 8."],
        ["visual","easy","▲ = 3\n▲ × ● = 18\n● = ?",["5","6","7","9"],"6","Divide eighteen by the triangle's value.","18 ÷ 3 = 6."],
        ["visual","easy","◆ + 5 = 5 + ◆\n◆ = ?",["0","1","5","any number"],"any number","The same thing is added to both sides.","Both sides are identical for any value of ◆."],
        ["visual","easy","● = 2\n● + ● + ● + ● + ● = ?",["8","9","10","12"],"10","Count five circles, each worth two.","5 × 2 = 10."],
        ["visual","easy","■ = 9\n■ ÷ 3 = ?",["2","3","4","6"],"3","Split the square's value into three equal parts.","9 ÷ 3 = 3."],
        ["visual","easy","☾ + ☾ = 16\n☾ − 2 = ?",["4","5","6","8"],"6","First find one moon's value.","Each moon is 8; 8 − 2 = 6."],
        ["visual","easy","▲ + 4 = 10\n▲ + 6 = ?",["10","11","12","13"],"12","Find the triangle, then use the second line.","▲ = 6, so 6 + 6 = 12."],
        ["visual","easy","● = 3, ▲ = 5\n● + ▲ + ● = ?",["8","9","10","11"],"11","Use the values shown for each symbol.","3 + 5 + 3 = 11."],

        // VISUAL MATH · MEDIUM
        ["visual","medium","● + ● + ▲ = 14\n● = 4\n▲ = ?",["4","5","6","8"],"6","Replace both circles with four, then subtract.","4 + 4 + ▲ = 14, so ▲ = 6."],
        ["visual","medium","▲ + ▲ = 18\n■ = 4\n▲ − ■ = ?",["3","5","7","9"],"5","Find one triangle, then subtract the square.","Each triangle is 9; 9 − 4 = 5."],
        ["visual","medium","● + ▲ = 12\n● − ▲ = 4\n● = ?",["4","6","8","10"],"8","Add the two equations to remove the triangles.","Adding gives 2● = 16, so ● = 8."],
        ["visual","medium","★ = 3\n★ × (● + 1) = 18\n● = ?",["4","5","6","7"],"5","Divide by the star first.","3 × (● + 1) = 18, so ● + 1 = 6 and ● = 5."],
        ["visual","medium","● + ● + ● = 21\n▲ + ● = 11\n▲ = ?",["3","4","5","6"],"4","Find the circle from the first line.","Each circle is 7; ▲ + 7 = 11, so ▲ = 4."],
        ["visual","medium","■ = 5\n■ × ▲ = 35\n▲ + 2 = ?",["7","8","9","10"],"9","Divide to find the triangle, then add two.","▲ = 35 ÷ 5 = 7; 7 + 2 = 9."],
        ["visual","medium","● + ▲ = 15\n▲ = 2●\n● = ?",["4","5","6","7"],"5","The total is three circles' worth.","● + 2● = 15, so ● = 5."],
        ["visual","medium","◆ + ◆ + 4 = 20\n◆ × 2 = ?",["12","14","16","18"],"16","Remove four, then double one diamond.","2◆ = 16, so ◆ × 2 = 16."],
        ["visual","medium","● = 2\n▲ = 3●\n▲ + ● × 2 = ?",["10","12","14","16"],"10","Multiplication happens before addition.","▲ = 6; 6 + 2 × 2 = 10."],
        ["visual","medium","▲ + ▲ + ● = 17\n▲ = 6\n● − 3 = ?",["1","2","3","4"],"2","Find the circle after substituting two sixes.","● = 17 − 12 = 5; 5 − 3 = 2."],
        ["visual","medium","● + ▲ = 13\n● = ▲ + 3\n▲ = ?",["4","5","6","7"],"5","Replace the circle with triangle plus three.","2▲ + 3 = 13, so ▲ = 5."],
        ["visual","medium","★ is positive. ★ × ★ = 49\n★ − 4 = ?",["1","2","3","4"],"3","A positive whole number squared is forty-nine.","The star is 7, and 7 − 4 = 3."],
        ["visual","medium","● + ● + ▲ = 23\n● = ▲ + 1\n▲ = ?",["4","5","6","7"],"7","Replace both circles with triangle plus one.","2(▲ + 1) + ▲ = 23, so ▲ = 7 and the circle is 8."],
        ["visual","medium","■ = 4\n● + ■ = 13\n● − ■ = ?",["3","4","5","6"],"5","Find the circle, then subtract four.","● = 9; 9 − 4 = 5."],
        ["visual","medium","▲ = 2●\n● + ▲ = 18\n▲ − ● = ?",["4","6","8","10"],"6","Find a circle from the combined total.","3● = 18, so ● = 6 and ▲ = 12; 12 − 6 = 6."],
        ["visual","medium","● = 3, ▲ = 5\n(● + ▲) × ■ = 32\n■ = ?",["2","3","4","5"],"4","Add the known symbols before dividing.","(3 + 5) × ■ = 32, so ■ = 4."],
        ["visual","medium","◆ + 7 = 2 × ◆\n◆ + ◆ + ◆ = ?",["18","21","24","27"],"21","The first line tells you the diamond's value.","◆ = 7; three diamonds total 21."],
        ["visual","medium","● + ● = 16\n▲ = ● − 5\n● + ▲ = ?",["9","11","13","15"],"11","Find one circle, then the triangle.","● = 8, ▲ = 3; 8 + 3 = 11."],
        ["visual","medium","★ + ★ + ● = 22\n★ = 7\n● ÷ 2 = ?",["3","4","5","6"],"4","Subtract both stars before halving the circle.","● = 22 − 14 = 8; 8 ÷ 2 = 4."],
        ["visual","medium","3 × circle = triangle + 4\ncircle = 6\ntriangle − circle = ?",["2","4","6","8"],"8","Calculate the triangle, then subtract the circle.","3 × 6 = 18, so the triangle is 14; 14 − 6 = 8."],

        // VISUAL MATH · HARD
        ["visual","hard","● + ▲ = 17\n● − ▲ = 5\n● × ▲ = ?",["60","66","72","84"],"66","Add and subtract the equations to find each symbol.","Adding gives ● = 11; then ▲ = 6, and 11 × 6 = 66."],
        ["visual","hard","● + ▲ + ■ = 18\n● = 2▲\n■ = ▲ + 2\n▲ = ?",["3","4","5","6"],"4","Write every symbol in terms of the triangle.","2▲ + ▲ + ▲ + 2 = 18; 4▲ = 16, so ▲ = 4."],
        ["visual","hard","★ is positive. ★ × ★ = 64\n★ + ● = 13\n● × 2 = ?",["8","10","12","16"],"10","Use the positive square root, then find the circle.","★ = 8, so ● = 5 and ● × 2 = 10."],
        ["visual","hard","● + ● + ▲ = 22\n● = ▲ + 2\n● × ▲ = ?",["42","48","56","64"],"48","Substitute triangle plus two for each circle.","2(▲ + 2) + ▲ = 22, so ▲ = 6 and ● = 8; 8 × 6 = 48."],
        ["visual","hard","■ = 3\n● × ■ = 27\n▲ = ● − 4\n▲ + ■ = ?",["8","10","12","14"],"8","Find the circle from the product first.","● = 9; ▲ = 5; 5 + 3 = 8."],
        ["visual","hard","● + ▲ = 20\n● = 3▲ − 4\n● − ▲ = ?",["6","8","10","12"],"8","Substitute the circle expression into the total.","4▲ − 4 = 20, so ▲ = 6 and ● = 14; difference is 8."],
        ["visual","hard","◆ + ◆ = 18\n● = ◆ ÷ 3\n◆ + ● × 2 = ?",["12","13","15","16"],"15","Remember multiplication before addition.","◆ = 9 and ● = 3; 9 + 3 × 2 = 15."],
        ["visual","hard","● + ▲ = 14\n▲ + ■ = 11\n● + ■ = 13\n● = ?",["7","8","9","10"],"8","Add the first and third equations, then compare with the second.","Solving gives ● = 8, ▲ = 6, ■ = 5; 8 + 6 = 14."],
        ["visual","hard","★ = 4\n● × ★ + ● = 25\n● + ▲ = 9\n▲ × 2 = ?",["4","6","8","10"],"8","Factor out the circle in the second line.","5● = 25, so ● = 5 and ▲ = 4; double ▲ to get 8."],
        ["visual","hard","● + ● + ▲ = 26\n▲ = ● + 2\n● × ▲ = ?",["48","64","72","80"],"80","Substitute circle plus two for the triangle.","3● + 2 = 26, so ● = 8 and ▲ = 10; product is 80."],
        ["visual","hard","■ = 2●\n▲ = ■ + 3\n● = 3\n● + ■ + ▲ = ?",["17","18","19","20"],"18","Express the square and triangle in circles.","● = 3, ■ = 6, ▲ = 9; their total is 3 + 6 + 9 = 18."],
        ["visual","hard","● is positive. ● × ● = 36\n● + ▲ = 11\n▲ × 2 = ?",["4","6","10","12"],"10","Use the positive whole-number root.","● = 6, so ▲ = 5 and 2 × 5 = 10."],
        ["visual","hard","● + ▲ = 15\n● × ▲ = 56\n● is the larger value. ● − ▲ = ?",["1","3","5","7"],"1","The pair of factors of 56 must add to 15.","The values are 8 and 7; the circle is larger, so ● − ▲ = 1."],
        ["visual","hard","◆ = 5\n● = ◆² − 9\n▲ = ● ÷ 4\n▲ + ◆ = ?",["7","8","9","10"],"9","Evaluate each symbol one line at a time.","● = 25 − 9 = 16; ▲ = 4; 4 + 5 = 9."],
        ["visual","hard","● + ● + ▲ = 27\n● = 2▲ + 1\n● − ▲ = ?",["4","6","8","10"],"6","Substitute twice the triangle plus one.","2(2▲ + 1) + ▲ = 27, so ▲ = 5 and ● = 11; 11 − 5 = 6."],
        ["visual","hard","■ = 7\n● + ■ = 19\n▲ × ● = 36\n▲ − ■ = ?",["−4","−1","0","2"],"−4","Find the circle, then the triangle.","● = 12, so ▲ = 3; 3 − 7 = −4."],
        ["visual","hard","● + ▲ = 18\n● = ▲ + 4\n● × ▲ = ?",["56","63","70","77"],"77","The two values differ by four and add to eighteen.","The values are 11 and 7; their product is 77."],
        ["visual","hard","★ = 3●\n★ + ● = 28\n▲ = ● − 2\n▲² = ?",["16","25","36","49"],"25","Solve the first two lines for the circle.","4● = 28, so ● = 7 and ▲ = 5; ▲² = 25."],
        ["visual","hard","● + ▲ = 12\n●² + ▲² = 74\n● × ▲ = ?",["25","30","35","40"],"35","Square the sum and compare it with the sum of squares.","(● + ▲)² = 144 = 74 + 2●▲, so ●▲ = 35."],
        ["visual","hard","■ = 4\n● = ■ + ▲\n▲ = 3\n● × ▲ − ■ = ?",["14","17","20","24"],"17","Find the circle before doing the final operations.","● = 4 + 3 = 7; 7 × 3 − 4 = 17."]
    ]
};

const WHATS_NEXT_I18N_CATALOG = {
    "wn.q.48.option.3":  {
                             "fr":  "98",
                             "de":  "98",
                             "nl":  "98",
                             "es":  "98"
                         },
    "wn.q.50.prompt":  {
                           "fr":  "1 · 5 · 14 · 30 · 55 · 91 · ?",
                           "de":  "1 · 5 · 14 · 30 · 55 · 91 · ?",
                           "nl":  "1 · 5 · 14 · 30 · 55 · 91 · ?",
                           "es":  "1 · 5 · 14 · 30 · 55 · 91 · ?"
                       },
    "wn.q.103.hint":  {
                          "fr":  "Annulez la multiplication avant d’annuler la soustraction.",
                          "de":  "Machen Sie die Multiplikation rückgängig, bevor Sie die Subtraktion rückgängig machen.",
                          "nl":  "Maak de vermenigvuldiging ongedaan voordat u de aftrekking ongedaan maakt.",
                          "es":  "Deshacer la multiplicación antes de deshacer la resta."
                      },
    "wn.q.129.option.0":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.91.option.0":  {
                             "fr":  "$15",
                             "de":  "$15",
                             "nl":  "$15",
                             "es":  "$15"
                         },
    "wn.q.178.option.0":  {
                              "fr":  "16",
                              "de":  "16",
                              "nl":  "16",
                              "es":  "16"
                          },
    "wn.q.104.explanation":  {
                                 "fr":  "180 ÷ 2.5 = 72 km/h.",
                                 "de":  "180 ÷ 2.5 = 72 km/h.",
                                 "nl":  "180 ÷ 2.5 = 72 km/h.",
                                 "es":  "180 ÷ 2.5 = 72 km/h."
                             },
    "wn.q.112.hint":  {
                          "fr":  "Annulez le +9, puis annulez la division par 4.",
                          "de":  "Machen Sie +9 rückgängig und machen Sie dann die Division durch 4 rückgängig.",
                          "nl":  "Maak de +9 ongedaan en maak vervolgens de deling door 4 ongedaan.",
                          "es":  "Deshaga +9, luego deshaga la división por 4."
                      },
    "wn.q.152.option.1":  {
                              "fr":  "2",
                              "de":  "2",
                              "nl":  "2",
                              "es":  "2"
                          },
    "wn.q.71.prompt":  {
                           "fr":  "Un escargot gravit les marches 2 chaque heure pendant des heures 4. Combien de pas ?",
                           "de":  "Eine Schnecke klettert 2 Stunden lang stündlich 2 Schritte. Wie viele Schritte?",
                           "nl":  "Een slak beklimt 2-stappen elk uur gedurende 4-uren. Hoeveel stappen?",
                           "es":  "Un caracol sube escalones 2 cada hora durante horas 4. ¿Cuantos pasos?"
                       },
    "wn.q.8.option.2":  {
                            "fr":  "60",
                            "de":  "60",
                            "nl":  "60",
                            "es":  "60"
                        },
    "wn.q.82.option.0":  {
                             "fr":  "$10",
                             "de":  "$10",
                             "nl":  "$10",
                             "es":  "$10"
                         },
    "wn.q.74.option.0":  {
                             "fr":  "0",
                             "de":  "0",
                             "nl":  "0",
                             "es":  "0"
                         },
    "wn.q.130.option.2":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.42.explanation":  {
                                "fr":  "Les espaces sont 4, 9, 16, 25 (carrés) ; ajoutez ensuite 36 pour obtenir 92.",
                                "de":  "Die Lücken sind 4, 9, 16, 25 (Quadrate); Als nächstes fügen Sie 36 hinzu, um 92 zu erhalten.",
                                "nl":  "De gaten zijn 4, 9, 16, 25 (vierkantjes); voeg vervolgens 36 toe om 92 te krijgen.",
                                "es":  "Los espacios son 4, 9, 16, 25 (cuadrados); Luego agregue 36 para obtener 92."
                            },
    "wn.q.77.option.3":  {
                             "fr":  "18",
                             "de":  "18",
                             "nl":  "18",
                             "es":  "18"
                         },
    "wn.q.173.prompt":  {
                            "fr":  "● + ▲ = 15\n● × ▲ = 56\n● est la valeur la plus grande. ● − ▲ = ?",
                            "de":  "● + ▲ = 15\n● × ▲ = 56\n● ist der größere Wert. ● − ▲ = ?",
                            "nl":  "● + ▲ = 15\n● × ▲ = 56\n● is de grotere waarde. ● − ▲ = ?",
                            "es":  "● + ▲ = 15\n● × ▲ = 56\n● es el valor mayor. ● − ▲ =?"
                        },
    "wn.q.76.option.0":  {
                             "fr":  "6:00",
                             "de":  "6:00",
                             "nl":  "6:00",
                             "es":  "6:00"
                         },
    "wn.q.115.option.1":  {
                              "fr":  "18",
                              "de":  "18",
                              "nl":  "18",
                              "es":  "18"
                          },
    "wn.q.164.option.2":  {
                              "fr":  "56",
                              "de":  "56",
                              "nl":  "56",
                              "es":  "56"
                          },
    "wn.q.178.hint":  {
                          "fr":  "Résolvez les deux premières lignes du cercle.",
                          "de":  "Lösen Sie die ersten beiden Zeilen nach dem Kreis auf.",
                          "nl":  "Los de eerste twee lijnen van de cirkel op.",
                          "es":  "Resuelve las dos primeras líneas del círculo."
                      },
    "wn.q.100.option.1":  {
                              "fr":  "20",
                              "de":  "20",
                              "nl":  "20",
                              "es":  "20"
                          },
    "wn.q.7.option.3":  {
                            "fr":  "18",
                            "de":  "18",
                            "nl":  "18",
                            "es":  "18"
                        },
    "wn.q.112.option.0":  {
                              "fr":  "24",
                              "de":  "24",
                              "nl":  "24",
                              "es":  "24"
                          },
    "wn.q.93.option.1":  {
                             "fr":  "28",
                             "de":  "28",
                             "nl":  "28",
                             "es":  "28"
                         },
    "wn.q.91.hint":  {
                         "fr":  "Divisez l\u0027addition avant d\u0027ajouter le pourboire de chaque personne.",
                         "de":  "Teilen Sie die Rechnung auf, bevor Sie das Trinkgeld jeder Person hinzufügen.",
                         "nl":  "Splits de rekening voordat u de fooi van elke persoon toevoegt.",
                         "es":  "Divide la cuenta antes de agregar la propina de cada persona."
                     },
    "wn.q.124.explanation":  {
                                 "fr":  "9 − 5 = 4.",
                                 "de":  "9 − 5 = 4.",
                                 "nl":  "9 − 5 = 4.",
                                 "es":  "9 − 5 = 4."
                             },
    "wn.q.83.option.3":  {
                             "fr":  "41",
                             "de":  "41",
                             "nl":  "41",
                             "es":  "41"
                         },
    "wn.q.104.option.3":  {
                              "fr":  "75 km/h",
                              "de":  "75 km/h",
                              "nl":  "75 km/h",
                              "es":  "75 km/h"
                          },
    "wn.q.57.option.0":  {
                             "fr":  "96",
                             "de":  "96",
                             "nl":  "96",
                             "es":  "96"
                         },
    "wn.q.167.option.1":  {
                              "fr":  "13",
                              "de":  "13",
                              "nl":  "13",
                              "es":  "13"
                          },
    "wn.q.110.explanation":  {
                                 "fr":  "2⁵ = 32 et 3³ = 27 ; 32 − 27 = 5.",
                                 "de":  "2⁵ = 32 und 3³ = 27; 32 − 27 = 5.",
                                 "nl":  "2⁵ = 32 en 3³ = 27; 32 − 27 = 5.",
                                 "es":  "2⁵ = 32 y 3³ = 27; 32 − 27 = 5."
                             },
    "wn.q.18.explanation":  {
                                "fr":  "Réduisez de moitié 8 pour obtenir 4.",
                                "de":  "Halbieren Sie 8, um 4 zu erhalten.",
                                "nl":  "Halveer 8 om 4 te krijgen.",
                                "es":  "Reduzca a la mitad 8 para obtener 4."
                            },
    "wn.q.115.prompt":  {
                            "fr":  "Qu\u0027est-ce que (18² − 6²) ÷ 12 ?",
                            "de":  "Was ist (18² − 6²) ÷ 12?",
                            "nl":  "Wat is (18² − 6²) ÷ 12?",
                            "es":  "¿Qué es (18² − 6²) ÷ 12?"
                        },
    "wn.q.32.option.1":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.176.hint":  {
                          "fr":  "Trouvez le cercle, puis le triangle.",
                          "de":  "Finden Sie den Kreis und dann das Dreieck.",
                          "nl":  "Zoek de cirkel en vervolgens de driehoek.",
                          "es":  "Encuentra el círculo, luego el triángulo."
                      },
    "wn.q.162.explanation":  {
                                 "fr":  "2▲ + ▲ + ▲ + 2 = 18 ; 4▲ = 16, donc ▲ = 4.",
                                 "de":  "2▲ + ▲ + ▲ + 2 = 18; 4▲ = 16, also ▲ = 4.",
                                 "nl":  "2▲ + ▲ + ▲ + 2 = 18; 4▲ = 16, dus ▲ = 4.",
                                 "es":  "2▲ + ▲ + ▲ + 2 = 18; 4▲ = 16, entonces ▲ = 4."
                             },
    "wn.q.12.hint":  {
                         "fr":  "Les multiples gardent le même écart.",
                         "de":  "Die Vielfachen behalten die gleiche Lücke.",
                         "nl":  "De veelvouden behouden dezelfde kloof.",
                         "es":  "Los múltiplos mantienen la misma brecha."
                     },
    "wn.q.50.option.3":  {
                             "fr":  "146",
                             "de":  "146",
                             "nl":  "146",
                             "es":  "146"
                         },
    "wn.q.60.option.2":  {
                             "fr":  "223",
                             "de":  "223",
                             "nl":  "223",
                             "es":  "223"
                         },
    "wn.q.173.option.2":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.19.option.1":  {
                             "fr":  "72",
                             "de":  "72",
                             "nl":  "72",
                             "es":  "72"
                         },
    "wn.q.38.hint":  {
                         "fr":  "Les écarts sont des nombres impairs consécutifs.",
                         "de":  "Die Lücken sind aufeinanderfolgende ungerade Zahlen.",
                         "nl":  "De gaten zijn opeenvolgende oneven getallen.",
                         "es":  "Los espacios son números impares consecutivos."
                     },
    "wn.q.101.prompt":  {
                            "fr":  "Qu\u0027est-ce que 48 ÷ [2 × (3 + 1)] ?",
                            "de":  "Was ist 48 ÷ [2 × (3 + 1)]?",
                            "nl":  "Wat is 48 ÷ [2 × (3 + 1)]?",
                            "es":  "¿Qué es 48 ÷ [2 × (3 + 1)]?"
                        },
    "wn.q.45.option.2":  {
                             "fr":  "127",
                             "de":  "127",
                             "nl":  "127",
                             "es":  "127"
                         },
    "wn.q.107.option.2":  {
                              "fr":  "20",
                              "de":  "20",
                              "nl":  "20",
                              "es":  "20"
                          },
    "wn.q.24.option.2":  {
                             "fr":  "11",
                             "de":  "11",
                             "nl":  "11",
                             "es":  "11"
                         },
    "wn.q.73.option.3":  {
                             "fr":  "$18",
                             "de":  "$18",
                             "nl":  "$18",
                             "es":  "$18"
                         },
    "wn.q.47.hint":  {
                         "fr":  "Chaque terme est construit à partir de son numéro de position.",
                         "de":  "Jeder Begriff wird aus seiner Positionsnummer gebildet.",
                         "nl":  "Elke term is opgebouwd uit zijn positienummer.",
                         "es":  "Cada término se construye a partir de su número de posición."
                     },
    "wn.q.138.option.2":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.84.prompt":  {
                           "fr":  "Trois amis se partagent les tranches de 27 à parts égales. Combien chacun ?",
                           "de":  "Drei Freunde teilen 27-Slices gleichmäßig auf. Wie viele jeweils?",
                           "nl":  "Drie vrienden verdeelden de plakjes 27 gelijk. Hoeveel elk?",
                           "es":  "Tres amigos dividen las porciones de 27 en partes iguales. ¿Cuantos cada uno?"
                       },
    "wn.q.127.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.173.option.0":  {
                              "fr":  "1",
                              "de":  "1",
                              "nl":  "1",
                              "es":  "1"
                          },
    "wn.q.143.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.170.explanation":  {
                                 "fr":  "3● + 2 = 26, donc ● = 8 et ▲ = 10 ; le produit est 80.",
                                 "de":  "3● + 2 = 26, also ● = 8 und ▲ = 10; Produkt ist 80.",
                                 "nl":  "3● + 2 = 26, dus ● = 8 en ▲ = 10; product is 80.",
                                 "es":  "3● + 2 = 26, entonces ● = 8 y ▲ = 10; El producto es 80."
                             },
    "wn.q.4.option.2":  {
                            "fr":  "12",
                            "de":  "12",
                            "nl":  "12",
                            "es":  "12"
                        },
    "wn.q.153.option.2":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.121.option.0":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.112.option.2":  {
                              "fr":  "32",
                              "de":  "32",
                              "nl":  "32",
                              "es":  "32"
                          },
    "wn.q.28.prompt":  {
                           "fr":  "10 · 13 · 12 · 15 · 14 · ?",
                           "de":  "10 · 13 · 12 · 15 · 14 · ?",
                           "nl":  "10 · 13 · 12 · 15 · 14 · ?",
                           "es":  "10 · 13 · 12 · 15 · 14 · ?"
                       },
    "wn.q.96.option.3":  {
                             "fr":  "56",
                             "de":  "56",
                             "nl":  "56",
                             "es":  "56"
                         },
    "wn.q.83.explanation":  {
                                "fr":  "8 + 4 = 12; 12 × 3 = 36; 36 − 5 = 31.",
                                "de":  "8 + 4 = 12; 12 × 3 = 36; 36 − 5 = 31.",
                                "nl":  "8 + 4 = 12; 12 × 3 = 36; 36 − 5 = 31.",
                                "es":  "8 + 4 = 12; 12 × 3 = 36; 36 − 5 = 31."
                            },
    "wn.q.126.explanation":  {
                                 "fr":  "4 × 3 = 12.",
                                 "de":  "4 × 3 = 12.",
                                 "nl":  "4 × 3 = 12.",
                                 "es":  "4 × 3 = 12."
                             },
    "wn.q.142.hint":  {
                          "fr":  "Trouvez un triangle, puis soustrayez le carré.",
                          "de":  "Finden Sie ein Dreieck und subtrahieren Sie dann das Quadrat.",
                          "nl":  "Zoek één driehoek en trek het vierkant daarvan af.",
                          "es":  "Encuentra un triángulo y luego resta el cuadrado."
                      },
    "wn.q.87.prompt":  {
                           "fr":  "Un nombre est doublé, puis 7 est ajouté. À partir de 9, qu’est-ce que c’est ?",
                           "de":  "Eine Zahl wird verdoppelt, dann wird 7 hinzugefügt. Beginnend mit 9, was ist das?",
                           "nl":  "Een getal wordt verdubbeld en vervolgens wordt 7 toegevoegd. Wat is het, beginnend bij 9?",
                           "es":  "Se duplica un número y luego se suma 7. A partir de 9, ¿qué es?"
                       },
    "wn.q.65.explanation":  {
                                "fr":  "12 − 2 = chaussettes 10.",
                                "de":  "12 − 2 = 10 Socken.",
                                "nl":  "12 − 2 = 10 sokken.",
                                "es":  "12 − 2 = 10 calcetines."
                            },
    "wn.q.117.hint":  {
                          "fr":  "Trouvez le débit total, puis divisez par trois pompes.",
                          "de":  "Ermitteln Sie die Gesamtrate und dividieren Sie sie durch drei Pumpen.",
                          "nl":  "Bereken de totale snelheid en deel deze door drie pompen.",
                          "es":  "Encuentre la tasa total, luego divídala por tres bombas."
                      },
    "wn.q.33.option.0":  {
                             "fr":  "61",
                             "de":  "61",
                             "nl":  "61",
                             "es":  "61"
                         },
    "wn.q.58.option.0":  {
                             "fr":  "64",
                             "de":  "64",
                             "nl":  "64",
                             "es":  "64"
                         },
    "wn.q.110.option.1":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.106.option.0":  {
                              "fr":  "64 L",
                              "de":  "64 L",
                              "nl":  "64 L",
                              "es":  "64 L"
                          },
    "wn.q.142.prompt":  {
                            "fr":  "▲ + ▲ = 18\n■ = 4\n▲ − ■ = ?",
                            "de":  "▲ + ▲ = 18\n■ = 4\n▲ − ■ = ?",
                            "nl":  "▲ + ▲ = 18\n■ = 4\n▲ − ■ = ?",
                            "es":  "▲ + ▲ = 18\n■ = 4\n▲ − ■ = ?"
                        },
    "wn.q.106.option.1":  {
                              "fr":  "72 L",
                              "de":  "72 L",
                              "nl":  "72 L",
                              "es":  "72 L"
                          },
    "wn.q.1.explanation":  {
                               "fr":  "Chaque terme double : 16 × 2 = 32.",
                               "de":  "Jeder Term verdoppelt sich: 16 × 2 = 32.",
                               "nl":  "Elke term verdubbelt: 16 × 2 = 32.",
                               "es":  "Cada término se duplica: 16 × 2 = 32."
                           },
    "wn.q.158.prompt":  {
                            "fr":  "● + ● = 16\n▲ = ● − 5\n● + ▲ = ?",
                            "de":  "● + ● = 16\n▲ = ● − 5\n● + ▲ = ?",
                            "nl":  "● + ● = 16\n▲ = ● − 5\n● + ▲ = ?",
                            "es":  "● + ● = 16\n▲ = ● − 5\n● + ▲ = ?"
                        },
    "wn.q.123.option.2":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.55.explanation":  {
                                "fr":  "Les écarts sont +1, +2, +4, +8 ; suivant +16 donne 33.",
                                "de":  "Die Lücken sind +1, +2, +4, +8; next +16 ergibt 33.",
                                "nl":  "De gaten zijn +1, +2, +4, +8; volgende +16 geeft 33.",
                                "es":  "Los espacios son +1, +2, +4, +8; siguiente +16 da 33."
                            },
    "wn.q.159.prompt":  {
                            "fr":  "★ + ★ + ● = 22\n★ = 7\n● ÷ 2 = ?",
                            "de":  "★ + ★ + ● = 22\n★ = 7\n● ÷ 2 = ?",
                            "nl":  "★ + ★ + ● = 22\n★ = 7\n● ÷ 2 = ?",
                            "es":  "★ + ★ + ● = 22\n★ = 7\n● ÷ 2 = ?"
                        },
    "wn.q.122.option.3":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.38.prompt":  {
                           "fr":  "2 · 3 · 6 · 11 · 18 · ?",
                           "de":  "2 · 3 · 6 · 11 · 18 · ?",
                           "nl":  "2 · 3 · 6 · 11 · 18 · ?",
                           "es":  "2 · 3 · 6 · 11 · 18 · ?"
                       },
    "wn.q.17.option.0":  {
                             "fr":  "9",
                             "de":  "9",
                             "nl":  "9",
                             "es":  "9"
                         },
    "wn.q.177.option.2":  {
                              "fr":  "70",
                              "de":  "70",
                              "nl":  "70",
                              "es":  "70"
                          },
    "wn.q.171.explanation":  {
                                 "fr":  "● = 3, ■ = 6, ▲ = 9 ; leur total est 3 + 6 + 9 = 18.",
                                 "de":  "● = 3, ■ = 6, ▲ = 9; ihre Summe ist 3 + 6 + 9 = 18.",
                                 "nl":  "● = 3, ■ = 6, ▲ = 9; hun totaal is 3 + 6 + 9 = 18.",
                                 "es":  "● = 3, ■ = 6, ▲ = 9; su total es 3 + 6 + 9 = 18."
                             },
    "wn.q.99.option.0":  {
                             "fr":  "$27",
                             "de":  "$27",
                             "nl":  "$27",
                             "es":  "$27"
                         },
    "wn.q.88.prompt":  {
                           "fr":  "Qu\u0027est-ce que 48 ÷ (2 × 4) ?",
                           "de":  "Was ist 48 ÷ (2 × 4)?",
                           "nl":  "Wat is 48 ÷ (2 × 4)?",
                           "es":  "¿Qué es 48 ÷ (2 × 4)?"
                       },
    "wn.q.36.hint":  {
                         "fr":  "Le montant soustrait augmente de quatre.",
                         "de":  "Der subtrahierte Betrag erhöht sich um vier.",
                         "nl":  "Het afgetrokken bedrag groeit met vier.",
                         "es":  "La cantidad restada crece en cuatro."
                     },
    "wn.q.86.prompt":  {
                           "fr":  "Qu\u0027est-ce que 2³ + 3² ?",
                           "de":  "Was ist 2³ + 3²?",
                           "nl":  "Wat is 2³ + 3²?",
                           "es":  "¿Qué es 2³ + 3²?"
                       },
    "wn.q.115.option.2":  {
                              "fr":  "24",
                              "de":  "24",
                              "nl":  "24",
                              "es":  "24"
                          },
    "wn.q.63.option.3":  {
                             "fr":  "15",
                             "de":  "15",
                             "nl":  "15",
                             "es":  "15"
                         },
    "wn.q.146.hint":  {
                          "fr":  "Divisez pour trouver le triangle, puis ajoutez-en deux.",
                          "de":  "Teilen Sie, um das Dreieck zu finden, und addieren Sie dann zwei.",
                          "nl":  "Verdeel om de driehoek te vinden en tel er vervolgens twee bij op.",
                          "es":  "Divide para encontrar el triángulo, luego suma dos."
                      },
    "wn.q.49.hint":  {
                         "fr":  "Appliquez la même règle de doublement avec un petit ajustement.",
                         "de":  "Wenden Sie die gleiche Verdoppelungsregel mit einer kleinen Anpassung an.",
                         "nl":  "Pas dezelfde verdubbelingsregel toe met een kleine aanpassing.",
                         "es":  "Aplique la misma regla de duplicación con un pequeño ajuste."
                     },
    "wn.q.18.prompt":  {
                           "fr":  "64 · 32 · 16 · 8 · ?",
                           "de":  "64 · 32 · 16 · 8 · ?",
                           "nl":  "64 · 32 · 16 · 8 · ?",
                           "es":  "64 · 32 · 16 · 8 · ?"
                       },
    "wn.q.149.hint":  {
                          "fr":  "La multiplication a lieu avant l\u0027addition.",
                          "de":  "Die Multiplikation erfolgt vor der Addition.",
                          "nl":  "Vermenigvuldiging vindt plaats vóór optelling.",
                          "es":  "La multiplicación ocurre antes que la suma."
                      },
    "wn.q.129.option.2":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.8.hint":  {
                        "fr":  "Les chiffres diminuent uniformément.",
                        "de":  "Die Zahlen gehen gleichmäßig zurück.",
                        "nl":  "De cijfers lopen gelijkmatig naar beneden.",
                        "es":  "Los números están bajando de manera uniforme."
                    },
    "wn.q.6.explanation":  {
                               "fr":  "Ajoutez 3 à chaque fois : 11 + 3 = 14.",
                               "de":  "Fügen Sie jedes Mal 3 hinzu: 11 + 3 = 14.",
                               "nl":  "Voeg elke keer 3 toe: 11 + 3 = 14.",
                               "es":  "Agregue 3 cada vez: 11 + 3 = 14."
                           },
    "wn.q.131.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.168.explanation":  {
                                 "fr":  "La résolution donne ● = 8, ▲ = 6, ■ = 5 ; 8 + 6 = 14.",
                                 "de":  "Das Auflösen ergibt ● = 8, ▲ = 6, ■ = 5; 8 + 6 = 14.",
                                 "nl":  "Oplossen geeft ● = 8, ▲ = 6, ■ = 5; 8 + 6 = 14.",
                                 "es":  "Al resolver se obtiene ● = 8, ▲ = 6, ■ = 5; 8 + 6 = 14."
                             },
    "wn.q.108.option.2":  {
                              "fr":  "$58",
                              "de":  "$58",
                              "nl":  "$58",
                              "es":  "$58"
                          },
    "wn.q.154.hint":  {
                          "fr":  "Trouvez le cercle, puis soustrayez quatre.",
                          "de":  "Finden Sie den Kreis und subtrahieren Sie dann vier.",
                          "nl":  "Zoek de cirkel en trek er vier af.",
                          "es":  "Encuentra el círculo, luego resta cuatro."
                      },
    "wn.q.15.option.2":  {
                             "fr":  "48",
                             "de":  "48",
                             "nl":  "48",
                             "es":  "48"
                         },
    "wn.q.54.explanation":  {
                                "fr":  "Chaque terme est doublé et 1 ajouté : 31 × 2 + 1 = 63.",
                                "de":  "Jeder Term wird verdoppelt und 1 hinzugefügt: 31 × 2 + 1 = 63.",
                                "nl":  "Elke term wordt verdubbeld en 1 toegevoegd: 31 × 2 + 1 = 63.",
                                "es":  "Cada término se duplica y se suma 1: 31 × 2 + 1 = 63."
                            },
    "wn.q.74.option.2":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.51.option.0":  {
                             "fr":  "960",
                             "de":  "960",
                             "nl":  "960",
                             "es":  "960"
                         },
    "wn.q.162.option.0":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.163.option.0":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.75.option.2":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.4.option.1":  {
                            "fr":  "10",
                            "de":  "10",
                            "nl":  "10",
                            "es":  "10"
                        },
    "wn.q.131.hint":  {
                          "fr":  "Soustrayez la valeur du cercle.",
                          "de":  "Subtrahieren Sie den Wert des Kreises.",
                          "nl":  "Trek de waarde van de cirkel af.",
                          "es":  "Resta el valor del círculo."
                      },
    "wn.q.90.prompt":  {
                           "fr":  "Qu\u0027est-ce que 5 × 6 − 4 × 3 ?",
                           "de":  "Was ist 5 × 6 − 4 × 3?",
                           "nl":  "Wat is 5 × 6 − 4 × 3?",
                           "es":  "¿Qué es 5 × 6 − 4 × 3?"
                       },
    "wn.q.21.option.2":  {
                             "fr":  "37",
                             "de":  "37",
                             "nl":  "37",
                             "es":  "37"
                         },
    "wn.q.69.explanation":  {
                                "fr":  "8 − 3 = Les tranches 5 restent, donc la fraction est 5/8.",
                                "de":  "8 − 3 = 5 Slices bleiben übrig, daher ist der Bruch 5/8.",
                                "nl":  "8 − 3 = 5-segmenten blijven over, dus de breuk is 5/8.",
                                "es":  "8 − 3 = Quedan porciones 5, por lo que la fracción es 5/8."
                            },
    "wn.q.124.option.0":  {
                              "fr":  "2",
                              "de":  "2",
                              "nl":  "2",
                              "es":  "2"
                          },
    "wn.q.107.explanation":  {
                                 "fr":  "12 + 18 + 21 + 29 = 80; 80 ÷ 4 = 20.",
                                 "de":  "12 + 18 + 21 + 29 = 80; 80 ÷ 4 = 20.",
                                 "nl":  "12 + 18 + 21 + 29 = 80; 80 ÷ 4 = 20.",
                                 "es":  "12 + 18 + 21 + 29 = 80; 80 ÷ 4 = 20."
                             },
    "wn.q.16.option.3":  {
                             "fr":  "14",
                             "de":  "14",
                             "nl":  "14",
                             "es":  "14"
                         },
    "wn.q.24.prompt":  {
                           "fr":  "2 · 7 · 4 · 9 · 6 · ?",
                           "de":  "2 · 7 · 4 · 9 · 6 · ?",
                           "nl":  "2 · 7 · 4 · 9 · 6 · ?",
                           "es":  "2 · 7 · 4 · 9 · 6 · ?"
                       },
    "wn.q.124.option.1":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.72.option.3":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.83.prompt":  {
                           "fr":  "Qu\u0027est-ce que (8 + 4) × 3 − 5 ?",
                           "de":  "Was ist (8 + 4) × 3 − 5?",
                           "nl":  "Wat is (8 + 4) × 3 − 5?",
                           "es":  "¿Qué es (8 + 4) × 3 − 5?"
                       },
    "wn.q.170.option.2":  {
                              "fr":  "72",
                              "de":  "72",
                              "nl":  "72",
                              "es":  "72"
                          },
    "wn.q.114.explanation":  {
                                 "fr":  "120 × 3.5 = 420 m.",
                                 "de":  "120 × 3.5 = 420 m.",
                                 "nl":  "120 × 3.5 = 420 m.",
                                 "es":  "120 × 3.5 = 420 m."
                             },
    "wn.q.5.option.3":  {
                            "fr":  "54",
                            "de":  "54",
                            "nl":  "54",
                            "es":  "54"
                        },
    "wn.q.153.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.108.option.1":  {
                              "fr":  "$54",
                              "de":  "$54",
                              "nl":  "$54",
                              "es":  "$54"
                          },
    "wn.q.22.option.1":  {
                             "fr":  "121",
                             "de":  "121",
                             "nl":  "121",
                             "es":  "121"
                         },
    "wn.q.13.hint":  {
                         "fr":  "Chaque étape utilise la même multiplication.",
                         "de":  "Jeder Schritt verwendet die gleiche Multiplikation.",
                         "nl":  "Elke stap gebruikt dezelfde vermenigvuldiging.",
                         "es":  "Cada paso utiliza la misma multiplicación."
                     },
    "wn.q.21.option.3":  {
                             "fr":  "38",
                             "de":  "38",
                             "nl":  "38",
                             "es":  "38"
                         },
    "wn.q.89.hint":  {
                         "fr":  "Ajoutez les minutes 60, puis les minutes 30 restantes.",
                         "de":  "Fügen Sie 60 Minuten und dann die verbleibenden 30 hinzu.",
                         "nl":  "Voeg 60 minuten toe en vervolgens de resterende 30.",
                         "es":  "Agregue los minutos 60 y luego el 30 restante."
                     },
    "wn.q.175.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.57.hint":  {
                         "fr":  "Chaque terme correspond à trois fois un carré.",
                         "de":  "Jeder Term ist dreimal ein Quadrat.",
                         "nl":  "Elke term is drie keer een vierkant.",
                         "es":  "Cada término es tres veces un cuadrado."
                     },
    "wn.q.34.option.1":  {
                             "fr":  "46",
                             "de":  "46",
                             "nl":  "46",
                             "es":  "46"
                         },
    "wn.q.98.hint":  {
                         "fr":  "Parenthèses, puis l\u0027exposant, puis la multiplication.",
                         "de":  "Klammern, dann der Exponent, dann die Multiplikation.",
                         "nl":  "Haakjes, dan de exponent en dan vermenigvuldiging.",
                         "es":  "Paréntesis, luego el exponente, luego la multiplicación."
                     },
    "wn.q.59.option.2":  {
                             "fr":  "123",
                             "de":  "123",
                             "nl":  "123",
                             "es":  "123"
                         },
    "wn.q.102.option.2":  {
                              "fr":  "$84",
                              "de":  "$84",
                              "nl":  "$84",
                              "es":  "$84"
                          },
    "wn.q.41.option.0":  {
                             "fr":  "149",
                             "de":  "149",
                             "nl":  "149",
                             "es":  "149"
                         },
    "wn.difficulty.all":  {
                              "fr":  "Toutes les difficultés",
                              "de":  "Alle Schwierigkeiten",
                              "nl":  "Alle moeilijkheden",
                              "es":  "Todas las dificultades"
                          },
    "wn.q.82.prompt":  {
                           "fr":  "Une veste $40 est à 25 % de réduction. Quel est le prix de vente ?",
                           "de":  "Auf eine $40 Jacke gibt es 25 % Rabatt. Wie hoch ist der Verkaufspreis?",
                           "nl":  "Op een $40-jas zit 25% korting. Wat is de verkoopprijs?",
                           "es":  "Una chaqueta de $40 tiene un 25 % de descuento. ¿Cuál es el precio de venta?"
                       },
    "wn.q.70.option.3":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.117.option.0":  {
                              "fr":  "3 L",
                              "de":  "3 L",
                              "nl":  "3 L",
                              "es":  "3 L"
                          },
    "wn.q.14.hint":  {
                         "fr":  "Compte à rebours par le saut répété.",
                         "de":  "Zählen Sie mit dem wiederholten Sprung herunter.",
                         "nl":  "Tel af bij de herhaalde sprong.",
                         "es":  "Cuenta regresiva por el salto repetido."
                     },
    "wn.q.158.option.3":  {
                              "fr":  "15",
                              "de":  "15",
                              "nl":  "15",
                              "es":  "15"
                          },
    "wn.q.92.option.2":  {
                             "fr":  "21",
                             "de":  "21",
                             "nl":  "21",
                             "es":  "21"
                         },
    "wn.q.73.option.0":  {
                             "fr":  "$5",
                             "de":  "$5",
                             "nl":  "$5",
                             "es":  "$5"
                         },
    "wn.q.141.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.145.option.3":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.105.option.2":  {
                              "fr":  "21",
                              "de":  "21",
                              "nl":  "21",
                              "es":  "21"
                          },
    "wn.q.166.option.2":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.78.option.1":  {
                             "fr":  "8",
                             "de":  "8",
                             "nl":  "8",
                             "es":  "8"
                         },
    "wn.q.66.option.2":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.79.hint":  {
                         "fr":  "Soustrayez les deux montants, de gauche à droite.",
                         "de":  "Subtrahieren Sie beide Beträge von links nach rechts.",
                         "nl":  "Trek beide bedragen van links naar rechts af.",
                         "es":  "Resta ambas cantidades, de izquierda a derecha."
                     },
    "wn.q.21.explanation":  {
                                "fr":  "Les écarts sont +3, +5, +7, +9 ; le suivant est +11, donc 26 + 11 = 37.",
                                "de":  "Die Lücken sind +3, +5, +7, +9; Als nächstes kommt +11, also 26 + 11 = 37.",
                                "nl":  "De gaten zijn +3, +5, +7, +9; het volgende is +11, dus 26 + 11 = 37.",
                                "es":  "Los espacios son +3, +5, +7, +9; el siguiente es +11, por lo que 26 + 11 = 37."
                            },
    "wn.q.26.option.1":  {
                             "fr":  "91",
                             "de":  "91",
                             "nl":  "91",
                             "es":  "91"
                         },
    "wn.q.72.option.1":  {
                             "fr":  "5",
                             "de":  "5",
                             "nl":  "5",
                             "es":  "5"
                         },
    "wn.q.151.hint":  {
                          "fr":  "Remplacez le cercle par un triangle plus trois.",
                          "de":  "Ersetzen Sie den Kreis durch ein Dreieck plus drei.",
                          "nl":  "Vervang de cirkel door een driehoek plus drie.",
                          "es":  "Reemplaza el círculo con un triángulo más tres."
                      },
    "wn.q.8.option.0":  {
                            "fr":  "20",
                            "de":  "20",
                            "nl":  "20",
                            "es":  "20"
                        },
    "wn.q.94.option.1":  {
                             "fr":  "42",
                             "de":  "42",
                             "nl":  "42",
                             "es":  "42"
                         },
    "wn.q.154.option.3":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.180.prompt":  {
                            "fr":  "■ = 4\n● = ■ + ▲\n▲ = 3\n● × ▲ − ■ = ?",
                            "de":  "■ = 4\n● = ■ + ▲\n▲ = 3\n● × ▲ − ■ = ?",
                            "nl":  "■ = 4\n● = ■ + ▲\n▲ = 3\n● × ▲ − ■ = ?",
                            "es":  "■ = 4\n● = ■ + ▲\n▲ = 3\n● × ▲ − ■ = ?"
                        },
    "wn.q.132.prompt":  {
                            "fr":  "♥ = 2\n♥ + ♥ + ♥ + 1 = ?",
                            "de":  "♥ = 2\n♥ + ♥ + ♥ + 1 = ?",
                            "nl":  "♥ = 2\n♥ + ♥ + ♥ + 1 = ?",
                            "es":  "♥ = 2\n♥ + ♥ + ♥ + 1 = ?"
                        },
    "wn.q.94.option.3":  {
                             "fr":  "78",
                             "de":  "78",
                             "nl":  "78",
                             "es":  "78"
                         },
    "wn.q.33.option.1":  {
                             "fr":  "71",
                             "de":  "71",
                             "nl":  "71",
                             "es":  "71"
                         },
    "wn.q.29.option.1":  {
                             "fr":  "16",
                             "de":  "16",
                             "nl":  "16",
                             "es":  "16"
                         },
    "wn.q.105.option.1":  {
                              "fr":  "13",
                              "de":  "13",
                              "nl":  "13",
                              "es":  "13"
                          },
    "wn.q.165.prompt":  {
                            "fr":  "■ = 3\n● × ■ = 27\n▲ = ● − 4\n▲ + ■ = ?",
                            "de":  "■ = 3\n● × ■ = 27\n▲ = ● − 4\n▲ + ■ = ?",
                            "nl":  "■ = 3\n● × ■ = 27\n▲ = ● − 4\n▲ + ■ = ?",
                            "es":  "■ = 3\n● × ■ = 27\n▲ = ● − 4\n▲ + ■ = ?"
                        },
    "wn.q.113.hint":  {
                          "fr":  "Recherchez 10% et 5%, puis ajoutez-les.",
                          "de":  "Suchen Sie nach 10% und 5% und fügen Sie sie hinzu.",
                          "nl":  "Zoek 10% en 5% en voeg ze toe.",
                          "es":  "Encuentre 10% y 5% y luego agréguelos."
                      },
    "wn.q.73.explanation":  {
                                "fr":  "Les ordinateurs portables coûtent $10, donc $20 − $10 = $10 changement.",
                                "de":  "Die Notebooks kosten $10, also $20 − $10 = $10 ändern.",
                                "nl":  "De notebooks kosten $10, dus $20 − $10 = $10 wisselgeld.",
                                "es":  "Las libretas cuestan $10, por lo que $20 − $10 = $10 al cambio."
                            },
    "wn.q.24.option.1":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.137.option.0":  {
                              "fr":  "2",
                              "de":  "2",
                              "nl":  "2",
                              "es":  "2"
                          },
    "wn.q.18.option.0":  {
                             "fr":  "2",
                             "de":  "2",
                             "nl":  "2",
                             "es":  "2"
                         },
    "wn.q.179.option.1":  {
                              "fr":  "30",
                              "de":  "30",
                              "nl":  "30",
                              "es":  "30"
                          },
    "wn.q.145.option.1":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.44.explanation":  {
                                "fr":  "Positions impaires doubles : 2, 4, 8. Même positions triples : 9, 27, 81.",
                                "de":  "Ungerade Positionen doppelt: 2, 4, 8. Gerade Positionen dreifach: 9, 27, 81.",
                                "nl":  "Oneven posities verdubbelen: 2, 4, 8. Even posities verdrievoudigen: 9, 27, 81.",
                                "es":  "Posiciones impares dobles: 2, 4, 8. Las posiciones pares se triplican: 9, 27, 81."
                            },
    "wn.q.107.option.3":  {
                              "fr":  "21",
                              "de":  "21",
                              "nl":  "21",
                              "es":  "21"
                          },
    "wn.q.158.option.0":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.139.option.2":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.38.option.1":  {
                             "fr":  "26",
                             "de":  "26",
                             "nl":  "26",
                             "es":  "26"
                         },
    "wn.q.148.prompt":  {
                            "fr":  "◆ + ◆ + 4 = 20\n◆ × 2 = ?",
                            "de":  "◆ + ◆ + 4 = 20\n◆ × 2 = ?",
                            "nl":  "◆ + ◆ + 4 = 20\n◆ × 2 = ?",
                            "es":  "◆ + ◆ + 4 = 20\n◆ × 2 = ?"
                        },
    "wn.q.157.explanation":  {
                                 "fr":  "ZXQGARDER2QXZ = ZXQGARDER1QXZ ; trois diamants au total 21.",
                                 "de":  "◆ = 7; insgesamt drei Diamanten 21.",
                                 "nl":  "◆ = 7; drie diamanten totaal 21.",
                                 "es":  "◆ = 7; tres diamantes en total 21."
                             },
    "wn.q.146.prompt":  {
                            "fr":  "■ = 5\n■ × ▲ = 35\n▲ + 2 = ?",
                            "de":  "■ = 5\n■ × ▲ = 35\n▲ + 2 = ?",
                            "nl":  "■ = 5\n■ × ▲ = 35\n▲ + 2 = ?",
                            "es":  "■ = 5\n■ × ▲ = 35\n▲ + 2 = ?"
                        },
    "wn.q.17.hint":  {
                         "fr":  "Ce sont des nombres pairs consécutifs.",
                         "de":  "Dies sind aufeinanderfolgende gerade Zahlen.",
                         "nl":  "Dit zijn opeenvolgende even getallen.",
                         "es":  "Estos son números pares consecutivos."
                     },
    "wn.q.179.option.3":  {
                              "fr":  "40",
                              "de":  "40",
                              "nl":  "40",
                              "es":  "40"
                          },
    "wn.q.90.option.3":  {
                             "fr":  "42",
                             "de":  "42",
                             "nl":  "42",
                             "es":  "42"
                         },
    "wn.q.28.hint":  {
                         "fr":  "Il y a une paire d’opérations répétitives.",
                         "de":  "Es gibt ein sich wiederholendes Paar von Operationen.",
                         "nl":  "Er is sprake van een herhalend paar handelingen.",
                         "es":  "Hay un par de operaciones que se repiten."
                     },
    "wn.q.152.option.0":  {
                              "fr":  "1",
                              "de":  "1",
                              "nl":  "1",
                              "es":  "1"
                          },
    "wn.q.20.explanation":  {
                                "fr":  "Le multiple suivant de 11 est 11 × 5 = 55.",
                                "de":  "Das nächste Vielfache von 11 ist 11 × 5 = 55.",
                                "nl":  "Het volgende veelvoud van 11 is 11 × 5 = 55.",
                                "es":  "El siguiente múltiplo de 11 es 11 × 5 = 55."
                            },
    "wn.q.89.option.0":  {
                             "fr":  "7:50",
                             "de":  "7:50",
                             "nl":  "7:50",
                             "es":  "7:50"
                         },
    "wn.q.113.option.1":  {
                              "fr":  "30",
                              "de":  "30",
                              "nl":  "30",
                              "es":  "30"
                          },
    "wn.q.58.hint":  {
                         "fr":  "Regardez les différences et comment elles s\u0027accentuent.",
                         "de":  "Schauen Sie sich die Unterschiede an und wie sie wachsen.",
                         "nl":  "Kijk naar de verschillen en hoe ze groeien.",
                         "es":  "Mira las diferencias y cómo crecen."
                     },
    "wn.q.64.option.0":  {
                             "fr":  "9",
                             "de":  "9",
                             "nl":  "9",
                             "es":  "9"
                         },
    "wn.q.155.prompt":  {
                            "fr":  "▲ = 2●\n● + ▲ = 18\n▲ − ● = ?",
                            "de":  "▲ = 2●\n● + ▲ = 18\n▲ − ● = ?",
                            "nl":  "▲ = 2●\n● + ▲ = 18\n▲ − ● = ?",
                            "es":  "▲ = 2●\n● + ▲ = 18\n▲ − ● = ?"
                        },
    "wn.q.122.prompt":  {
                            "fr":  "▲ + ▲ + ▲ = 12\n▲ = ?",
                            "de":  "▲ + ▲ + ▲ = 12\n▲ = ?",
                            "nl":  "▲ + ▲ + ▲ = 12\n▲ = ?",
                            "es":  "▲ + ▲ + ▲ = 12\n▲ = ?"
                        },
    "wn.q.164.option.1":  {
                              "fr":  "48",
                              "de":  "48",
                              "nl":  "48",
                              "es":  "48"
                          },
    "wn.q.108.option.0":  {
                              "fr":  "$52",
                              "de":  "$52",
                              "nl":  "$52",
                              "es":  "$52"
                          },
    "wn.q.152.hint":  {
                          "fr":  "Un nombre entier positif au carré est quarante-neuf.",
                          "de":  "Eine positive ganze Zahl im Quadrat ist neunundvierzig.",
                          "nl":  "Een positief geheel getal in het kwadraat is negenenveertig.",
                          "es":  "Un número entero positivo al cuadrado es cuarenta y nueve."
                      },
    "wn.q.43.option.1":  {
                             "fr":  "54",
                             "de":  "54",
                             "nl":  "54",
                             "es":  "54"
                         },
    "wn.q.41.option.2":  {
                             "fr":  "159",
                             "de":  "159",
                             "nl":  "159",
                             "es":  "159"
                         },
    "wn.q.37.option.1":  {
                             "fr":  "89",
                             "de":  "89",
                             "nl":  "89",
                             "es":  "89"
                         },
    "wn.q.177.hint":  {
                          "fr":  "Les deux valeurs diffèrent de quatre et totalisent dix-huit.",
                          "de":  "Die beiden Werte unterscheiden sich um vier und ergeben zusammen achtzehn.",
                          "nl":  "De twee waarden verschillen vier en worden opgeteld bij achttien.",
                          "es":  "Los dos valores difieren en cuatro y suman dieciocho."
                      },
    "wn.q.149.prompt":  {
                            "fr":  "● = 2\n▲ = 3●\n▲ + ● × 2 = ?",
                            "de":  "● = 2\n▲ = 3●\n▲ + ● × 2 = ?",
                            "nl":  "● = 2\n▲ = 3●\n▲ + ● × 2 = ?",
                            "es":  "● = 2\n▲ = 3●\n▲ + ● × 2 = ?"
                        },
    "wn.q.113.prompt":  {
                            "fr":  "Qu\u0027est-ce que 15% de 240 ?",
                            "de":  "Was ist 15 % von 240?",
                            "nl":  "Wat is 15% van 240?",
                            "es":  "¿Qué es 15% de 240?"
                        },
    "wn.q.169.explanation":  {
                                 "fr":  "5● = 25, donc ● = 5 et ▲ = 4 ; doublez ▲ pour obtenir 8.",
                                 "de":  "5● = 25, also ● = 5 und ▲ = 4; verdoppeln Sie ▲, um 8 zu erhalten.",
                                 "nl":  "5● = 25, dus ● = 5 en ▲ = 4; verdubbel ▲ om 8 te krijgen.",
                                 "es":  "5● = 25, entonces ● = 5 y ▲ = 4; duplique ▲ para obtener 8."
                             },
    "wn.q.149.option.2":  {
                              "fr":  "14",
                              "de":  "14",
                              "nl":  "14",
                              "es":  "14"
                          },
    "wn.q.159.option.0":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.138.explanation":  {
                                 "fr":  "Chaque lune est 8 ; 8 − 2 = 6.",
                                 "de":  "Jeder Mond ist 8; 8 − 2 = 6.",
                                 "nl":  "Elke maan is 8; 8 − 2 = 6.",
                                 "es":  "Cada luna es 8; 8 − 2 = 6."
                             },
    "wn.q.133.option.0":  {
                              "fr":  "2",
                              "de":  "2",
                              "nl":  "2",
                              "es":  "2"
                          },
    "wn.q.31.option.3":  {
                             "fr":  "23",
                             "de":  "23",
                             "nl":  "23",
                             "es":  "23"
                         },
    "wn.q.128.option.1":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.5.explanation":  {
                               "fr":  "Chaque terme double, donc 24 × 2 = 48.",
                               "de":  "Jeder Term verdoppelt sich, also 24 × 2 = 48.",
                               "nl":  "Elke term verdubbelt, dus 24 × 2 = 48.",
                               "es":  "Cada término se duplica, por lo que 24 × 2 = 48."
                           },
    "wn.q.134.option.1":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.5.option.0":  {
                            "fr":  "36",
                            "de":  "36",
                            "nl":  "36",
                            "es":  "36"
                        },
    "wn.q.23.option.2":  {
                             "fr":  "18",
                             "de":  "18",
                             "nl":  "18",
                             "es":  "18"
                         },
    "wn.q.155.option.1":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.35.hint":  {
                         "fr":  "Postes alternés séparés.",
                         "de":  "Separate Wechselpositionen.",
                         "nl":  "Aparte afwisselende posities.",
                         "es":  "Posiciones alternas separadas."
                     },
    "wn.q.174.option.0":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.30.prompt":  {
                           "fr":  "81 · 27 · 9 · 3 · ?",
                           "de":  "81 · 27 · 9 · 3 · ?",
                           "nl":  "81 · 27 · 9 · 3 · ?",
                           "es":  "81 · 27 · 9 · 3 · ?"
                       },
    "wn.q.142.explanation":  {
                                 "fr":  "Chaque triangle est 9 ; 9 − 4 = 5.",
                                 "de":  "Jedes Dreieck ist 9; 9 − 4 = 5.",
                                 "nl":  "Elke driehoek is 9; 9 − 4 = 5.",
                                 "es":  "Cada triángulo es 9; 9 − 4 = 5."
                             },
    "wn.q.1.hint":  {
                        "fr":  "Comparez chaque terme avec celui qui le précède.",
                        "de":  "Vergleichen Sie jeden Begriff mit dem davor.",
                        "nl":  "Vergelijk elke term met de voorgaande.",
                        "es":  "Compara cada término con el anterior."
                    },
    "wn.q.142.option.2":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.68.option.0":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.142.option.0":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.64.option.2":  {
                             "fr":  "11",
                             "de":  "11",
                             "nl":  "11",
                             "es":  "11"
                         },
    "wn.q.158.hint":  {
                          "fr":  "Trouvez un cercle, puis le triangle.",
                          "de":  "Finden Sie einen Kreis und dann das Dreieck.",
                          "nl":  "Zoek één cirkel en vervolgens de driehoek.",
                          "es":  "Encuentra un círculo, luego el triángulo."
                      },
    "wn.q.26.hint":  {
                         "fr":  "Chaque espace est le double de celui qui le précède.",
                         "de":  "Jede Lücke ist doppelt so groß wie die davor.",
                         "nl":  "Elke opening is tweemaal de opening ervoor.",
                         "es":  "Cada espacio es el doble del anterior."
                     },
    "wn.q.56.option.2":  {
                             "fr":  "60",
                             "de":  "60",
                             "nl":  "60",
                             "es":  "60"
                         },
    "wn.q.156.hint":  {
                          "fr":  "Ajoutez les symboles connus avant de diviser.",
                          "de":  "Fügen Sie vor dem Teilen die bekannten Symbole hinzu.",
                          "nl":  "Voeg de bekende symbolen toe voordat u gaat delen.",
                          "es":  "Suma los símbolos conocidos antes de dividir."
                      },
    "wn.q.56.option.0":  {
                             "fr":  "32",
                             "de":  "32",
                             "nl":  "32",
                             "es":  "32"
                         },
    "wn.q.177.option.3":  {
                              "fr":  "77",
                              "de":  "77",
                              "nl":  "77",
                              "es":  "77"
                          },
    "wn.q.131.explanation":  {
                                 "fr":  "10 − 4 = 6.",
                                 "de":  "10 − 4 = 6.",
                                 "nl":  "10 − 4 = 6.",
                                 "es":  "10 − 4 = 6."
                             },
    "wn.q.140.hint":  {
                          "fr":  "Utilisez les valeurs indiquées pour chaque symbole.",
                          "de":  "Verwenden Sie die für jedes Symbol angezeigten Werte.",
                          "nl":  "Gebruik de waarden die voor elk symbool worden weergegeven.",
                          "es":  "Utilice los valores que se muestran para cada símbolo."
                      },
    "wn.q.27.option.1":  {
                             "fr":  "600",
                             "de":  "600",
                             "nl":  "600",
                             "es":  "600"
                         },
    "wn.q.86.option.0":  {
                             "fr":  "13",
                             "de":  "13",
                             "nl":  "13",
                             "es":  "13"
                         },
    "wn.difficulty.easy":  {
                               "fr":  "Facile",
                               "de":  "Einfach",
                               "nl":  "Gemakkelijk",
                               "es":  "fácil"
                           },
    "wn.q.101.option.3":  {
                              "fr":  "96",
                              "de":  "96",
                              "nl":  "96",
                              "es":  "96"
                          },
    "wn.q.39.option.1":  {
                             "fr":  "42",
                             "de":  "42",
                             "nl":  "42",
                             "es":  "42"
                         },
    "wn.q.85.option.1":  {
                             "fr":  "$12",
                             "de":  "$12",
                             "nl":  "$12",
                             "es":  "$12"
                         },
    "wn.q.156.explanation":  {
                                 "fr":  "(3 + 5) × ■ = 32, donc ■ = 4.",
                                 "de":  "(3 + 5) × ■ = 32, also ■ = 4.",
                                 "nl":  "(3 + 5) × ■ = 32, dus ■ = 4.",
                                 "es":  "(3 + 5) × ■ = 32, entonces ■ = 4."
                             },
    "wn.difficulty.medium":  {
                                 "fr":  "Moyen",
                                 "de":  "Mittel",
                                 "nl":  "Middelmatig",
                                 "es":  "Medio"
                             },
    "wn.q.19.hint":  {
                         "fr":  "Les termes sont des pouvoirs de 3.",
                         "de":  "Die Bedingungen sind Befugnisse von 3.",
                         "nl":  "De voorwaarden zijn bevoegdheden van 3.",
                         "es":  "Los términos son potencias de 3."
                     },
    "wn.q.145.explanation":  {
                                 "fr":  "Chaque cercle est 7 ; ▲ + 7 = 11, donc ▲ = 4.",
                                 "de":  "Jeder Kreis ist 7; ▲ + 7 = 11, also ▲ = 4.",
                                 "nl":  "Elke cirkel is 7; ▲ + 7 = 11, dus ▲ = 4.",
                                 "es":  "Cada círculo es 7; ▲ + 7 = 11, entonces ▲ = 4."
                             },
    "wn.q.52.explanation":  {
                                "fr":  "Il s\u0027agit d\u0027une séquence de style Fibonacci : 26 + 43 = 69.",
                                "de":  "Dies ist eine Sequenz im Fibonacci-Stil: 26 + 43 = 69.",
                                "nl":  "Dit is een reeks in Fibonacci-stijl: 26 + 43 = 69.",
                                "es":  "Esta es una secuencia de estilo Fibonacci: 26 + 43 = 69."
                            },
    "wn.q.135.explanation":  {
                                 "fr":  "Les deux côtés sont identiques pour toute valeur de ◆.",
                                 "de":  "Für jeden Wert von ◆ sind beide Seiten identisch.",
                                 "nl":  "Beide zijden zijn identiek voor elke waarde van ◆.",
                                 "es":  "Ambos lados son idénticos para cualquier valor de ◆."
                             },
    "wn.q.28.explanation":  {
                                "fr":  "Ajoutez 3, soustrayez 1, répétez ; après 14, ajoutez 3 pour obtenir 17.",
                                "de":  "Addiere 3, subtrahiere 1, wiederhole; Fügen Sie nach 14 3 hinzu, um 17 zu erhalten.",
                                "nl":  "3 optellen, 1 aftrekken, herhalen; voeg na 14 3 toe om 17 te krijgen.",
                                "es":  "Sume 3, reste 1, repita; después de 14 agregue 3 para obtener 17."
                            },
    "wn.q.28.option.3":  {
                             "fr":  "18",
                             "de":  "18",
                             "nl":  "18",
                             "es":  "18"
                         },
    "wn.q.143.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.157.prompt":  {
                            "fr":  "◆ + 7 = 2 × ◆\n◆ + ◆ + ◆ = ?",
                            "de":  "◆ + 7 = 2 × ◆\n◆ + ◆ + ◆ = ?",
                            "nl":  "◆ + 7 = 2 × ◆\n◆ + ◆ + ◆ = ?",
                            "es":  "◆ + 7 = 2 × ◆\n◆ + ◆ + ◆ = ?"
                        },
    "wn.q.111.option.2":  {
                              "fr":  "46",
                              "de":  "46",
                              "nl":  "46",
                              "es":  "46"
                          },
    "wn.q.122.explanation":  {
                                 "fr":  "12 ÷ 3 = 4.",
                                 "de":  "12 ÷ 3 = 4.",
                                 "nl":  "12 ÷ 3 = 4.",
                                 "es":  "12 ÷ 3 = 4."
                             },
    "wn.q.60.option.0":  {
                             "fr":  "219",
                             "de":  "219",
                             "nl":  "219",
                             "es":  "219"
                         },
    "wn.q.162.option.2":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.12.explanation":  {
                                "fr":  "Ajoutez 4 à chaque fois, le terme suivant sera donc 20.",
                                "de":  "Fügen Sie jedes Mal 4 hinzu, sodass der nächste Begriff 20 ist.",
                                "nl":  "Voeg elke keer 4 toe, zodat de volgende term 20 is.",
                                "es":  "Agregue 4 cada vez, de modo que el siguiente término sea 20."
                            },
    "wn.q.92.prompt":  {
                           "fr":  "Qu\u0027est-ce que 3/4 ou 28 ?",
                           "de":  "Was ist 3/4 von 28?",
                           "nl":  "Wat is 3/4 van 28?",
                           "es":  "¿Qué es 3/4 de 28?"
                       },
    "wn.q.120.option.0":  {
                              "fr":  "60",
                              "de":  "60",
                              "nl":  "60",
                              "es":  "60"
                          },
    "wn.q.88.option.0":  {
                             "fr":  "3",
                             "de":  "3",
                             "nl":  "3",
                             "es":  "3"
                         },
    "wn.q.156.option.3":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.137.prompt":  {
                            "fr":  "■ = 9\n■ ÷ 3 = ?",
                            "de":  "■ = 9\n■ ÷ 3 = ?",
                            "nl":  "■ = 9\n■ ÷ 3 = ?",
                            "es":  "■ = 9\n■ ÷ 3 = ?"
                        },
    "wn.q.129.hint":  {
                          "fr":  "Deux étoiles se partagent quatorze à parts égales.",
                          "de":  "Zwei Sterne teilen sich zu gleichen Teilen vierzehn.",
                          "nl":  "Twee sterren delen er veertien in gelijke mate.",
                          "es":  "Dos estrellas comparten catorce a partes iguales."
                      },
    "wn.q.103.option.1":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.173.explanation":  {
                                 "fr":  "Les valeurs sont 8 et 7 ; le cercle est plus grand, donc ● − ▲ = 1.",
                                 "de":  "Die Werte sind 8 und 7; Der Kreis ist größer, also ● − ▲ = 1.",
                                 "nl":  "De waarden zijn 8 en 7; de cirkel is groter, dus ● − ▲ = 1.",
                                 "es":  "Los valores son 8 y 7; el círculo es más grande, entonces ● − ▲ = 1."
                             },
    "wn.q.33.hint":  {
                         "fr":  "Examinez chaque écart, puis voyez comment ces écarts évoluent.",
                         "de":  "Schauen Sie sich jede Lücke an und sehen Sie dann, wie sich diese Lücken verändern.",
                         "nl":  "Kijk naar elke kloof en kijk vervolgens hoe die gaten veranderen.",
                         "es":  "Mire cada brecha y luego observe cómo cambian esas brechas."
                     },
    "wn.q.117.option.1":  {
                              "fr":  "5 L",
                              "de":  "5 L",
                              "nl":  "5 L",
                              "es":  "5 L"
                          },
    "wn.q.20.option.2":  {
                             "fr":  "56",
                             "de":  "56",
                             "nl":  "56",
                             "es":  "56"
                         },
    "wn.q.60.explanation":  {
                                "fr":  "111 × 2 + 1 = 223.",
                                "de":  "111 × 2 + 1 = 223.",
                                "nl":  "111 × 2 + 1 = 223.",
                                "es":  "111 × 2 + 1 = 223."
                            },
    "wn.q.171.prompt":  {
                            "fr":  "■ = 2●\n▲ = ■ + 3\n● = 3\n● + ■ + ▲ = ?",
                            "de":  "■ = 2●\n▲ = ■ + 3\n● = 3\n● + ■ + ▲ = ?",
                            "nl":  "■ = 2●\n▲ = ■ + 3\n● = 3\n● + ■ + ▲ = ?",
                            "es":  "■ = 2●\n▲ = ■ + 3\n● = 3\n● + ■ + ▲ = ?"
                        },
    "wn.q.138.option.3":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.92.option.0":  {
                             "fr":  "7",
                             "de":  "7",
                             "nl":  "7",
                             "es":  "7"
                         },
    "wn.q.121.explanation":  {
                                 "fr":  "Chaque cercle est 10 ÷ 2 = 5.",
                                 "de":  "Jeder Kreis ist 10 ÷ 2 = 5.",
                                 "nl":  "Elke cirkel is 10 ÷ 2 = 5.",
                                 "es":  "Cada círculo es 10 ÷ 2 = 5."
                             },
    "wn.q.139.option.3":  {
                              "fr":  "13",
                              "de":  "13",
                              "nl":  "13",
                              "es":  "13"
                          },
    "wn.q.77.explanation":  {
                                "fr":  "2 + 1 = 3 et 5 × 3 = 15.",
                                "de":  "2 + 1 = 3 und 5 × 3 = 15.",
                                "nl":  "2 + 1 = 3, en 5 × 3 = 15.",
                                "es":  "2 + 1 = 3, y 5 × 3 = 15."
                            },
    "wn.q.125.option.0":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.50.option.0":  {
                             "fr":  "126",
                             "de":  "126",
                             "nl":  "126",
                             "es":  "126"
                         },
    "wn.q.146.option.1":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.91.option.3":  {
                             "fr":  "$20",
                             "de":  "$20",
                             "nl":  "$20",
                             "es":  "$20"
                         },
    "wn.q.145.option.2":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.55.option.2":  {
                             "fr":  "33",
                             "de":  "33",
                             "nl":  "33",
                             "es":  "33"
                         },
    "wn.q.151.prompt":  {
                            "fr":  "● + ▲ = 13\n● = ▲ + 3\n▲ = ?",
                            "de":  "● + ▲ = 13\n● = ▲ + 3\n▲ = ?",
                            "nl":  "● + ▲ = 13\n● = ▲ + 3\n▲ = ?",
                            "es":  "● + ▲ = 13\n● = ▲ + 3\n▲ = ?"
                        },
    "wn.q.143.explanation":  {
                                 "fr":  "L\u0027ajout donne 2● = 16, donc ● = 8.",
                                 "de":  "Das Addieren ergibt 2● = 16, also ● = 8.",
                                 "nl":  "Optellen geeft 2● = 16, dus ● = 8.",
                                 "es":  "Sumar da 2● = 16, por lo que ● = 8."
                             },
    "wn.q.135.option.0":  {
                              "fr":  "0",
                              "de":  "0",
                              "nl":  "0",
                              "es":  "0"
                          },
    "wn.q.84.option.1":  {
                             "fr":  "8",
                             "de":  "8",
                             "nl":  "8",
                             "es":  "8"
                         },
    "wn.q.58.option.2":  {
                             "fr":  "72",
                             "de":  "72",
                             "nl":  "72",
                             "es":  "72"
                         },
    "wn.q.52.hint":  {
                         "fr":  "Chaque nouveau terme ajoute les deux précédents.",
                         "de":  "Jeder neue Begriff fügt die beiden vorherigen hinzu.",
                         "nl":  "Elke nieuwe term voegt de vorige twee toe.",
                         "es":  "Cada nuevo término suma los dos anteriores."
                     },
    "wn.q.128.option.3":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.80.prompt":  {
                           "fr":  "Un robot effectue des pas 3, puis 2 davantage. Combien de pas ?",
                           "de":  "Ein Roboter macht 3 Schritte, dann 2 weitere. Wie viele Schritte?",
                           "nl":  "Een robot neemt 3-stappen, en vervolgens nog 2. Hoeveel stappen?",
                           "es":  "Un robot da pasos 3, luego 2 más. ¿Cuantos pasos?"
                       },
    "wn.q.135.option.2":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.119.explanation":  {
                                 "fr":  "$120 ÷ 5 = $24; $24 + $4 = $28.",
                                 "de":  "$120 ÷ 5 = $24; $24 + $4 = $28.",
                                 "nl":  "$120 ÷ 5 = $24; $24 + $4 = $28.",
                                 "es":  "$120 ÷ 5 = $24; $24 + $4 = $28."
                             },
    "wn.q.143.option.2":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.70.option.1":  {
                             "fr":  "9",
                             "de":  "9",
                             "nl":  "9",
                             "es":  "9"
                         },
    "wn.q.40.hint":  {
                         "fr":  "Le multiplicateur augmente de un.",
                         "de":  "Der Multiplikator erhöht sich um eins.",
                         "nl":  "De vermenigvuldiger stijgt met één.",
                         "es":  "El multiplicador aumenta en uno."
                     },
    "wn.q.132.option.3":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.153.hint":  {
                          "fr":  "Remplacez les deux cercles par un triangle plus un.",
                          "de":  "Ersetzen Sie beide Kreise durch ein Dreieck plus eins.",
                          "nl":  "Vervang beide cirkels door een driehoek plus één.",
                          "es":  "Reemplaza ambos círculos con un triángulo más uno."
                      },
    "wn.q.89.option.1":  {
                             "fr":  "8:00",
                             "de":  "8:00",
                             "nl":  "8:00",
                             "es":  "8:00"
                         },
    "wn.q.148.option.2":  {
                              "fr":  "16",
                              "de":  "16",
                              "nl":  "16",
                              "es":  "16"
                          },
    "wn.q.95.hint":  {
                         "fr":  "Soustrayez ceux qui partent, puis ajoutez ceux qui embarquent.",
                         "de":  "Subtrahieren Sie die Abgänge und addieren Sie dann die Einsteiger.",
                         "nl":  "Trek degenen die weggaan af en tel daar de instappers bij op.",
                         "es":  "Resta los que salen y luego suma los que suben."
                     },
    "wn.q.20.hint":  {
                         "fr":  "Le même numéro à deux chiffres est répété.",
                         "de":  "Die gleiche zweistellige Zahl wird wiederholt.",
                         "nl":  "Hetzelfde tweecijferige nummer wordt herhaald.",
                         "es":  "Se repite el mismo número de dos dígitos."
                     },
    "wn.q.49.option.0":  {
                             "fr":  "93",
                             "de":  "93",
                             "nl":  "93",
                             "es":  "93"
                         },
    "wn.q.39.option.3":  {
                             "fr":  "46",
                             "de":  "46",
                             "nl":  "46",
                             "es":  "46"
                         },
    "wn.q.128.hint":  {
                          "fr":  "Trouvez ce qui doit être soustrait de six pour en laisser deux.",
                          "de":  "Finden Sie heraus, was von sechs abgezogen werden muss, um zwei übrig zu lassen.",
                          "nl":  "Zoek wat er van zes moet worden afgetrokken om er twee over te houden.",
                          "es":  "Calcula lo que hay que restar de seis para quedar dos."
                      },
    "wn.q.56.hint":  {
                         "fr":  "Alternez en ajoutant deux et en doublant.",
                         "de":  "Abwechselnd zwei addieren und verdoppeln.",
                         "nl":  "Wissel af door twee toe te voegen en te verdubbelen.",
                         "es":  "Alterne sumando dos y duplicando."
                     },
    "wn.q.127.hint":  {
                          "fr":  "Soustrayez quatre de treize.",
                          "de":  "Nehmen Sie vier von dreizehn weg.",
                          "nl":  "Neem er vier af van de dertien.",
                          "es":  "Quita cuatro de trece."
                      },
    "wn.q.168.option.0":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.26.option.3":  {
                             "fr":  "99",
                             "de":  "99",
                             "nl":  "99",
                             "es":  "99"
                         },
    "wn.q.61.option.2":  {
                             "fr":  "30",
                             "de":  "30",
                             "nl":  "30",
                             "es":  "30"
                         },
    "wn.q.157.option.2":  {
                              "fr":  "24",
                              "de":  "24",
                              "nl":  "24",
                              "es":  "24"
                          },
    "wn.q.115.option.0":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.176.option.1":  {
                              "fr":  "−1",
                              "de":  "−1",
                              "nl":  "−1",
                              "es":  "−1"
                          },
    "wn.q.149.option.1":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.74.explanation":  {
                                "fr":  "3 × 0 = 0, puis 7 + 0 = 7.",
                                "de":  "3 × 0 = 0, dann 7 + 0 = 7.",
                                "nl":  "3 × 0 = 0, dan 7 + 0 = 7.",
                                "es":  "3 × 0 = 0, luego 7 + 0 = 7."
                            },
    "wn.q.44.option.0":  {
                             "fr":  "16",
                             "de":  "16",
                             "nl":  "16",
                             "es":  "16"
                         },
    "wn.q.95.option.2":  {
                             "fr":  "28",
                             "de":  "28",
                             "nl":  "28",
                             "es":  "28"
                         },
    "wn.q.132.option.1":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.33.option.3":  {
                             "fr":  "82",
                             "de":  "82",
                             "nl":  "82",
                             "es":  "82"
                         },
    "wn.q.18.option.2":  {
                             "fr":  "6",
                             "de":  "6",
                             "nl":  "6",
                             "es":  "6"
                         },
    "wn.q.134.option.2":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.167.explanation":  {
                                 "fr":  "◆ = 9 et ● = 3 ; 9 + 3 × 2 = 15.",
                                 "de":  "◆ = 9 und ● = 3; 9 + 3 × 2 = 15.",
                                 "nl":  "◆ = 9 en ● = 3; 9 + 3 × 2 = 15.",
                                 "es":  "◆ = 9 y ● = 3; 9 + 3 × 2 = 15."
                             },
    "wn.q.22.explanation":  {
                                "fr":  "Il s\u0027agit des cubes 1³ à 4³ ; le suivant est 5³ = 125.",
                                "de":  "Dies sind die Würfel 1³ bis 4³; Das nächste ist 5³ = 125.",
                                "nl":  "Dit zijn kubussen 1³ tot en met 4³; de volgende is 5³ = 125.",
                                "es":  "Estos son los cubos desde 1³ hasta 4³; el siguiente es 5³ = 125."
                            },
    "wn.q.153.explanation":  {
                                 "fr":  "2(▲ + 1) + ▲ = 23, donc ▲ = 7 et le cercle est 8.",
                                 "de":  "2(▲ + 1) + ▲ = 23, also ▲ = 7 und der Kreis ist 8.",
                                 "nl":  "2(▲ + 1) + ▲ = 23, dus ▲ = 7 en de cirkel is 8.",
                                 "es":  "2(▲ + 1) + ▲ = 23, entonces ▲ = 7 y el círculo es 8."
                             },
    "wn.q.155.explanation":  {
                                 "fr":  "3● = 18, donc ● = 6 et ▲ = 12 ; 12 − 6 = 6.",
                                 "de":  "3● = 18, also ● = 6 und ▲ = 12; 12 − 6 = 6.",
                                 "nl":  "3● = 18, dus ● = 6 en ▲ = 12; 12 − 6 = 6.",
                                 "es":  "3● = 18, entonces ● = 6 y ▲ = 12; 12 − 6 = 6."
                             },
    "wn.q.135.option.3":  {
                              "fr":  "n\u0027importe quel numéro",
                              "de":  "eine beliebige Zahl",
                              "nl":  "elk nummer",
                              "es":  "cualquier numero"
                          },
    "wn.q.152.option.3":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.178.option.2":  {
                              "fr":  "36",
                              "de":  "36",
                              "nl":  "36",
                              "es":  "36"
                          },
    "wn.q.6.option.0":  {
                            "fr":  "13",
                            "de":  "13",
                            "nl":  "13",
                            "es":  "13"
                        },
    "wn.q.129.option.1":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.123.hint":  {
                          "fr":  "Annulez le +2.",
                          "de":  "Machen Sie +2 rückgängig.",
                          "nl":  "Maak de +2 ongedaan.",
                          "es":  "Deshacer el +2."
                      },
    "wn.q.92.hint":  {
                         "fr":  "Divisez par quatre, puis prenez trois parties.",
                         "de":  "Teilen Sie durch vier und nehmen Sie dann drei Teile.",
                         "nl":  "Deel door vier en neem dan drie delen.",
                         "es":  "Divida entre cuatro y luego tome tres partes."
                     },
    "wn.q.122.option.2":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.124.hint":  {
                          "fr":  "Soustrayez la valeur du carré du total.",
                          "de":  "Subtrahieren Sie den Wert des Quadrats von der Summe.",
                          "nl":  "Trek de waarde van het vierkant af van het totaal.",
                          "es":  "Resta el valor del cuadrado del total."
                      },
    "wn.q.8.option.3":  {
                            "fr":  "65",
                            "de":  "65",
                            "nl":  "65",
                            "es":  "65"
                        },
    "wn.q.44.prompt":  {
                           "fr":  "2 · 9 · 4 · 27 · 8 · ?",
                           "de":  "2 · 9 · 4 · 27 · 8 · ?",
                           "nl":  "2 · 9 · 4 · 27 · 8 · ?",
                           "es":  "2 · 9 · 4 · 27 · 8 · ?"
                       },
    "wn.q.8.explanation":  {
                               "fr":  "Soustrayez 10 à chaque fois : 70 − 10 = 60.",
                               "de":  "Subtrahieren Sie jedes Mal 10: 70 − 10 = 60.",
                               "nl":  "Trek 10 elke keer af: 70 − 10 = 60.",
                               "es":  "Resta 10 cada vez: 70 − 10 = 60."
                           },
    "wn.q.140.option.0":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.79.option.2":  {
                             "fr":  "75",
                             "de":  "75",
                             "nl":  "75",
                             "es":  "75"
                         },
    "wn.q.86.option.2":  {
                             "fr":  "25",
                             "de":  "25",
                             "nl":  "25",
                             "es":  "25"
                         },
    "wn.q.29.option.3":  {
                             "fr":  "18",
                             "de":  "18",
                             "nl":  "18",
                             "es":  "18"
                         },
    "wn.q.54.option.2":  {
                             "fr":  "63",
                             "de":  "63",
                             "nl":  "63",
                             "es":  "63"
                         },
    "wn.q.94.prompt":  {
                           "fr":  "Qu\u0027est-ce que 100 ÷ 5 + 6 × 3 ?",
                           "de":  "Was ist 100 ÷ 5 + 6 × 3?",
                           "nl":  "Wat is 100 ÷ 5 + 6 × 3?",
                           "es":  "¿Qué es 100 ÷ 5 + 6 × 3?"
                       },
    "wn.q.123.option.1":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.4.prompt":  {
                          "fr":  "30 · 25 · 20 · 15 · ?",
                          "de":  "30 · 25 · 20 · 15 · ?",
                          "nl":  "30 · 25 · 20 · 15 · ?",
                          "es":  "30 · 25 · 20 · 15 · ?"
                      },
    "wn.q.74.hint":  {
                         "fr":  "Zéro fait disparaître la multiplication.",
                         "de":  "Null lässt die Multiplikation verschwinden.",
                         "nl":  "Nul zorgt ervoor dat de vermenigvuldiging verdwijnt.",
                         "es":  "El cero hace desaparecer la multiplicación."
                     },
    "wn.q.76.option.1":  {
                             "fr":  "7:00",
                             "de":  "7:00",
                             "nl":  "7:00",
                             "es":  "7:00"
                         },
    "wn.q.178.explanation":  {
                                 "fr":  "4● = 28, donc ● = 7 et ▲ = 5 ; ▲² = 25.",
                                 "de":  "4● = 28, also ● = 7 und ▲ = 5; ▲² = 25.",
                                 "nl":  "4● = 28, dus ● = 7 en ▲ = 5; ▲² = 25.",
                                 "es":  "4● = 28, entonces ● = 7 y ▲ = 5; ▲² = 25."
                             },
    "wn.q.7.option.2":  {
                            "fr":  "17",
                            "de":  "17",
                            "nl":  "17",
                            "es":  "17"
                        },
    "wn.q.62.explanation":  {
                                "fr":  "3 × $8 = $24.",
                                "de":  "3 × $8 = $24.",
                                "nl":  "3 × $8 = $24.",
                                "es":  "3 × $8 = $24."
                            },
    "wn.q.2.option.3":  {
                            "fr":  "19",
                            "de":  "19",
                            "nl":  "19",
                            "es":  "19"
                        },
    "wn.q.60.prompt":  {
                           "fr":  "6 · 13 · 27 · 55 · 111 · ?",
                           "de":  "6 · 13 · 27 · 55 · 111 · ?",
                           "nl":  "6 · 13 · 27 · 55 · 111 · ?",
                           "es":  "6 · 13 · 27 · 55 · 111 · ?"
                       },
    "wn.q.3.option.2":  {
                            "fr":  "25",
                            "de":  "25",
                            "nl":  "25",
                            "es":  "25"
                        },
    "wn.q.88.explanation":  {
                                "fr":  "2 × 4 = 8; 48 ÷ 8 = 6.",
                                "de":  "2 × 4 = 8; 48 ÷ 8 = 6.",
                                "nl":  "2 × 4 = 8; 48 ÷ 8 = 6.",
                                "es":  "2 × 4 = 8; 48 ÷ 8 = 6."
                            },
    "wn.q.109.option.3":  {
                              "fr":  "30",
                              "de":  "30",
                              "nl":  "30",
                              "es":  "30"
                          },
    "wn.q.37.option.3":  {
                             "fr":  "95",
                             "de":  "95",
                             "nl":  "95",
                             "es":  "95"
                         },
    "wn.q.55.option.0":  {
                             "fr":  "25",
                             "de":  "25",
                             "nl":  "25",
                             "es":  "25"
                         },
    "wn.q.58.explanation":  {
                                "fr":  "Les écarts sont 6, 10, 14, 18 ; l\u0027écart suivant 22 donne 72.",
                                "de":  "Die Lücken sind 6, 10, 14, 18; nächste Lücke 22 ergibt 72.",
                                "nl":  "De gaten zijn 6, 10, 14, 18; volgende opening 22 geeft 72.",
                                "es":  "Los espacios son 6, 10, 14, 18; El siguiente espacio 22 da 72."
                            },
    "wn.q.113.explanation":  {
                                 "fr":  "10% est 24 et 5% est 12 ; total 36.",
                                 "de":  "10% ist 24 und 5% ist 12; insgesamt 36.",
                                 "nl":  "10% is 24 en 5% is 12; totaal 36.",
                                 "es":  "10% es 24 y 5% es 12; total 36."
                             },
    "wn.q.102.option.0":  {
                              "fr":  "$76",
                              "de":  "$76",
                              "nl":  "$76",
                              "es":  "$76"
                          },
    "wn.q.45.hint":  {
                         "fr":  "Chaque terme double, puis en gagne un.",
                         "de":  "Jeder Term verdoppelt sich und erhält dann eins dazu.",
                         "nl":  "Elke term verdubbelt en wint er vervolgens één.",
                         "es":  "Cada término se duplica y luego gana uno."
                     },
    "wn.q.27.hint":  {
                         "fr":  "Le multiplicateur augmente de un à chaque fois.",
                         "de":  "Der Multiplikator erhöht sich jedes Mal um eins.",
                         "nl":  "De vermenigvuldiger wordt elke keer met één verhoogd.",
                         "es":  "El multiplicador aumenta en uno cada vez."
                     },
    "wn.q.53.explanation":  {
                                "fr":  "Les écarts sont +2, +4, +8, +16 ; suivant +32 donne 72.",
                                "de":  "Die Lücken sind +2, +4, +8, +16; next +32 ergibt 72.",
                                "nl":  "De gaten zijn +2, +4, +8, +16; volgende +32 geeft 72.",
                                "es":  "Los espacios son +2, +4, +8, +16; siguiente +32 da 72."
                            },
    "wn.q.4.hint":  {
                        "fr":  "La séquence compte à rebours par étapes égales.",
                        "de":  "Die Sequenz zählt in gleichen Schritten herunter.",
                        "nl":  "De reeks telt in gelijke stappen af.",
                        "es":  "La secuencia cuenta atrás en pasos iguales."
                    },
    "wn.q.48.option.1":  {
                             "fr":  "87",
                             "de":  "87",
                             "nl":  "87",
                             "es":  "87"
                         },
    "wn.q.148.option.1":  {
                              "fr":  "14",
                              "de":  "14",
                              "nl":  "14",
                              "es":  "14"
                          },
    "wn.q.108.prompt":  {
                            "fr":  "Un achat de $50 comporte une taxe de 8 %. Quel est le total ?",
                            "de":  "Für einen Kauf im Wert von $50 fällt eine Steuer von 8 % an. Wie hoch ist die Summe?",
                            "nl":  "Op een aankoop van $50 zit 8% belasting. Wat is het totaal?",
                            "es":  "Una compra de $50 tiene un impuesto del 8%. ¿Cuál es el total?"
                        },
    "wn.q.97.hint":  {
                         "fr":  "Échellez par 6/4, ou trouvez d\u0027abord une portion.",
                         "de":  "Skalieren Sie nach 6/4 oder finden Sie zuerst eine Portion.",
                         "nl":  "Schaal op 6/4, of zoek eerst een portie.",
                         "es":  "Escale por 6/4, o busque una porción primero."
                     },
    "wn.q.101.option.2":  {
                              "fr":  "24",
                              "de":  "24",
                              "nl":  "24",
                              "es":  "24"
                          },
    "wn.q.70.explanation":  {
                                "fr":  "3² = 9; 9 + 1 = 10.",
                                "de":  "3² = 9; 9 + 1 = 10.",
                                "nl":  "3² = 9; 9 + 1 = 10.",
                                "es":  "3² = 9; 9 + 1 = 10."
                            },
    "wn.q.62.option.1":  {
                             "fr":  "$16",
                             "de":  "$16",
                             "nl":  "$16",
                             "es":  "$16"
                         },
    "wn.q.169.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.6.option.3":  {
                            "fr":  "16",
                            "de":  "16",
                            "nl":  "16",
                            "es":  "16"
                        },
    "wn.q.9.hint":  {
                        "fr":  "Le montant ajouté augmente de un à chaque étape.",
                        "de":  "Die hinzugefügte Menge erhöht sich mit jedem Schritt um eins.",
                        "nl":  "Het toegevoegde bedrag wordt elke stap met één verhoogd.",
                        "es":  "La cantidad agregada aumenta en uno en cada paso."
                    },
    "wn.q.99.option.1":  {
                             "fr":  "$35",
                             "de":  "$35",
                             "nl":  "$35",
                             "es":  "$35"
                         },
    "wn.q.55.prompt":  {
                           "fr":  "2 · 3 · 5 · 9 · 17 · ?",
                           "de":  "2 · 3 · 5 · 9 · 17 · ?",
                           "nl":  "2 · 3 · 5 · 9 · 17 · ?",
                           "es":  "2 · 3 · 5 · 9 · 17 · ?"
                       },
    "wn.q.149.option.3":  {
                              "fr":  "16",
                              "de":  "16",
                              "nl":  "16",
                              "es":  "16"
                          },
    "wn.q.64.option.3":  {
                             "fr":  "13",
                             "de":  "13",
                             "nl":  "13",
                             "es":  "13"
                         },
    "wn.q.123.option.0":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.69.option.1":  {
                             "fr":  "5/8",
                             "de":  "5/8",
                             "nl":  "5/8",
                             "es":  "5/8"
                         },
    "wn.q.96.option.2":  {
                             "fr":  "35",
                             "de":  "35",
                             "nl":  "35",
                             "es":  "35"
                         },
    "wn.q.68.hint":  {
                         "fr":  "Multipliez avant de soustraire.",
                         "de":  "Multiplizieren Sie, bevor Sie subtrahieren.",
                         "nl":  "Vermenigvuldig voordat je aftrekt.",
                         "es":  "Multiplica antes de restar."
                     },
    "wn.q.34.explanation":  {
                                "fr":  "Les termes sont 2²−1, 3²−1, jusqu\u0027à 6²−1 ; suivant 7²−1 = 48.",
                                "de":  "Die Bedingungen sind 2²−1, 3²−1, bis 6²−1; nächster 7²−1 = 48.",
                                "nl":  "De voorwaarden zijn 2²−1, 3²−1, tot en met 6²−1; volgende 7²−1 = 48.",
                                "es":  "Los términos son 2²−1, 3²−1, hasta 6²−1; siguiente 7²−1 = 48."
                            },
    "wn.q.53.prompt":  {
                           "fr":  "10 · 12 · 16 · 24 · 40 · ?",
                           "de":  "10 · 12 · 16 · 24 · 40 · ?",
                           "nl":  "10 · 12 · 16 · 24 · 40 · ?",
                           "es":  "10 · 12 · 16 · 24 · 40 · ?"
                       },
    "wn.q.1.option.0":  {
                            "fr":  "24",
                            "de":  "24",
                            "nl":  "24",
                            "es":  "24"
                        },
    "wn.q.45.option.1":  {
                             "fr":  "111",
                             "de":  "111",
                             "nl":  "111",
                             "es":  "111"
                         },
    "wn.q.176.option.2":  {
                              "fr":  "0",
                              "de":  "0",
                              "nl":  "0",
                              "es":  "0"
                          },
    "wn.q.84.option.2":  {
                             "fr":  "9",
                             "de":  "9",
                             "nl":  "9",
                             "es":  "9"
                         },
    "wn.q.13.prompt":  {
                           "fr":  "2 · 6 · 18 · 54 · ?",
                           "de":  "2 · 6 · 18 · 54 · ?",
                           "nl":  "2 · 6 · 18 · 54 · ?",
                           "es":  "2 · 6 · 18 · 54 · ?"
                       },
    "wn.q.120.option.3":  {
                              "fr":  "80",
                              "de":  "80",
                              "nl":  "80",
                              "es":  "80"
                          },
    "wn.q.81.option.0":  {
                             "fr":  "8",
                             "de":  "8",
                             "nl":  "8",
                             "es":  "8"
                         },
    "wn.q.102.prompt":  {
                            "fr":  "Un article $80 augmente de 25%, puis diminue de 20%. Quel est le prix final ?",
                            "de":  "Ein $80-Element steigt um 25 % und fällt dann um 20 %. Wie hoch ist der Endpreis?",
                            "nl":  "Een item van $80 stijgt met 25% en daalt vervolgens met 20%. Wat is de uiteindelijke prijs?",
                            "es":  "Un artículo $80 sube un 25% y luego cae un 20%. ¿Cuál es el precio final?"
                        },
    "wn.q.106.option.2":  {
                              "fr":  "80 L",
                              "de":  "80 L",
                              "nl":  "80 L",
                              "es":  "80 L"
                          },
    "wn.q.163.explanation":  {
                                 "fr":  "★ = 8, donc ● = 5 et ● × 2 = 10.",
                                 "de":  "★ = 8, also ● = 5 und ● × 2 = 10.",
                                 "nl":  "★ = 8, dus ● = 5 en ● × 2 = 10.",
                                 "es":  "★ = 8, entonces ● = 5 y ● × 2 = 10."
                             },
    "wn.q.9.option.2":  {
                            "fr":  "21",
                            "de":  "21",
                            "nl":  "21",
                            "es":  "21"
                        },
    "wn.q.170.prompt":  {
                            "fr":  "● + ● + ▲ = 26\n▲ = ● + 2\n● × ▲ = ?",
                            "de":  "● + ● + ▲ = 26\n▲ = ● + 2\n● × ▲ = ?",
                            "nl":  "● + ● + ▲ = 26\n▲ = ● + 2\n● × ▲ = ?",
                            "es":  "● + ● + ▲ = 26\n▲ = ● + 2\n● × ▲ = ?"
                        },
    "wn.q.28.option.1":  {
                             "fr":  "16",
                             "de":  "16",
                             "nl":  "16",
                             "es":  "16"
                         },
    "wn.q.146.option.0":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.157.hint":  {
                          "fr":  "La première ligne vous indique la valeur du diamant.",
                          "de":  "In der ersten Zeile erfahren Sie den Wert des Diamanten.",
                          "nl":  "De eerste regel vertelt u de waarde van de diamant.",
                          "es":  "La primera línea te indica el valor del diamante."
                      },
    "wn.q.165.option.3":  {
                              "fr":  "14",
                              "de":  "14",
                              "nl":  "14",
                              "es":  "14"
                          },
    "wn.q.59.option.1":  {
                             "fr":  "122",
                             "de":  "122",
                             "nl":  "122",
                             "es":  "122"
                         },
    "wn.q.15.option.0":  {
                             "fr":  "42",
                             "de":  "42",
                             "nl":  "42",
                             "es":  "42"
                         },
    "wn.category.tricky":  {
                               "fr":  "Mathématiques délicates",
                               "de":  "Knifflige Mathematik",
                               "nl":  "Lastige wiskunde",
                               "es":  "Matemáticas complicadas"
                           },
    "wn.q.130.prompt":  {
                            "fr":  "■ + 1 = 8\n■ + 1 = ?",
                            "de":  "■ + 1 = 8\n■ + 1 = ?",
                            "nl":  "■ + 1 = 8\n■ + 1 = ?",
                            "es":  "■ + 1 = 8\n■ + 1 = ?"
                        },
    "wn.q.112.option.1":  {
                              "fr":  "28",
                              "de":  "28",
                              "nl":  "28",
                              "es":  "28"
                          },
    "wn.category.patterns":  {
                                 "fr":  "Modèles de nombres",
                                 "de":  "Zahlenmuster",
                                 "nl":  "Nummerpatronen",
                                 "es":  "Patrones numéricos"
                             },
    "wn.q.102.explanation":  {
                                 "fr":  "$80 × 1.25 = $100; $100 × 0.8 = $80.",
                                 "de":  "$80 × 1.25 = $100; $100 × 0.8 = $80.",
                                 "nl":  "$80 × 1.25 = $100; $100 × 0.8 = $80.",
                                 "es":  "$80 × 1.25 = $100; $100 × 0.8 = $80."
                             },
    "wn.q.92.option.3":  {
                             "fr":  "24",
                             "de":  "24",
                             "nl":  "24",
                             "es":  "24"
                         },
    "wn.q.124.prompt":  {
                            "fr":  "■ + ● = 9\n■ = 5\n● = ?",
                            "de":  "■ + ● = 9\n■ = 5\n● = ?",
                            "nl":  "■ + ● = 9\n■ = 5\n● = ?",
                            "es":  "■ + ● = 9\n■ = 5\n● = ?"
                        },
    "wn.q.51.explanation":  {
                                "fr":  "Multipliez par 2, 3, 4, 5 ; multipliez ensuite par 6 : 240 × 6 = 1,440.",
                                "de":  "Multiplizieren Sie mit 2, 3, 4, 5; Nächste Multiplikation mit 6: 240 × 6 = 1,440.",
                                "nl":  "Vermenigvuldig met 2, 3, 4, 5; vermenigvuldig vervolgens met 6: 240 × 6 = 1,440.",
                                "es":  "Multiplicar por 2, 3, 4, 5; luego multiplica por 6: 240 × 6 = 1,440."
                            },
    "wn.q.63.option.0":  {
                             "fr":  "3",
                             "de":  "3",
                             "nl":  "3",
                             "es":  "3"
                         },
    "wn.q.44.option.1":  {
                             "fr":  "36",
                             "de":  "36",
                             "nl":  "36",
                             "es":  "36"
                         },
    "wn.q.18.hint":  {
                         "fr":  "Chaque terme est la moitié du précédent.",
                         "de":  "Jeder Begriff ist die Hälfte des vorherigen.",
                         "nl":  "Elke term is de helft van de vorige.",
                         "es":  "Cada término es la mitad del anterior."
                     },
    "wn.q.166.explanation":  {
                                 "fr":  "4▲ − 4 = 20, donc ▲ = 6 et ● = 14 ; la différence est 8.",
                                 "de":  "4▲ − 4 = 20, also ▲ = 6 und ● = 14; Der Unterschied ist 8.",
                                 "nl":  "4▲ − 4 = 20, dus ▲ = 6 en ● = 14; het verschil is 8.",
                                 "es":  "4▲ − 4 = 20, entonces ▲ = 6 y ● = 14; La diferencia es 8."
                             },
    "wn.q.76.prompt":  {
                           "fr":  "Une horloge indique 3:00. Quelle heure est-il 4 heures plus tard ?",
                           "de":  "Eine Uhr zeigt 3:00. Wie spät ist es 4 Stunden später?",
                           "nl":  "Een klok toont 3:00. Hoe laat is het 4 uur later?",
                           "es":  "Un reloj muestra 3:00. ¿Qué hora es 4 horas más tarde?"
                       },
    "wn.q.30.hint":  {
                         "fr":  "Chaque terme est divisé par le même nombre.",
                         "de":  "Jeder Term wird durch dieselbe Zahl dividiert.",
                         "nl":  "Elke term wordt gedeeld door hetzelfde getal.",
                         "es":  "Cada término se divide por el mismo número."
                     },
    "wn.q.41.explanation":  {
                                "fr":  "Chaque terme est doublé et 1 est ajouté : 79 × 2 + 1 = 159.",
                                "de":  "Jeder Term wird verdoppelt und 1 hinzugefügt: 79 × 2 + 1 = 159.",
                                "nl":  "Elke term wordt verdubbeld en 1 wordt toegevoegd: 79 × 2 + 1 = 159.",
                                "es":  "Cada término se duplica y se suma 1: 79 × 2 + 1 = 159."
                            },
    "wn.q.71.option.2":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.3.option.1":  {
                            "fr":  "24",
                            "de":  "24",
                            "nl":  "24",
                            "es":  "24"
                        },
    "wn.q.80.option.1":  {
                             "fr":  "5",
                             "de":  "5",
                             "nl":  "5",
                             "es":  "5"
                         },
    "wn.q.125.option.2":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.75.hint":  {
                         "fr":  "La multiplication et la division se font de gauche à droite.",
                         "de":  "Multiplikation und Division erfolgen von links nach rechts.",
                         "nl":  "Vermenigvuldigen en delen gaan van links naar rechts.",
                         "es":  "La multiplicación y la división van de izquierda a derecha."
                     },
    "wn.q.81.option.3":  {
                             "fr":  "24",
                             "de":  "24",
                             "nl":  "24",
                             "es":  "24"
                         },
    "wn.q.6.option.1":  {
                            "fr":  "14",
                            "de":  "14",
                            "nl":  "14",
                            "es":  "14"
                        },
    "wn.q.179.prompt":  {
                            "fr":  "● + ▲ = 12\n●² + ▲² = 74\n● × ▲ = ?",
                            "de":  "● + ▲ = 12\n●² + ▲² = 74\n● × ▲ = ?",
                            "nl":  "● + ▲ = 12\n●² + ▲² = 74\n● × ▲ = ?",
                            "es":  "● + ▲ = 12\n●² + ▲² = 74\n● × ▲ = ?"
                        },
    "wn.q.79.explanation":  {
                                "fr":  "100 − 25 = 75; 75 − 25 = 50.",
                                "de":  "100 − 25 = 75; 75 − 25 = 50.",
                                "nl":  "100 − 25 = 75; 75 − 25 = 50.",
                                "es":  "100 − 25 = 75; 75 − 25 = 50."
                            },
    "wn.q.42.hint":  {
                         "fr":  "Les écarts sont eux-mêmes une séquence familière.",
                         "de":  "Die Lücken selbst sind eine vertraute Abfolge.",
                         "nl":  "De gaten vormen zelf een bekende reeks.",
                         "es":  "Las brechas son en sí mismas una secuencia familiar."
                     },
    "wn.q.152.explanation":  {
                                 "fr":  "L\u0027étoile est 7 et 7 − 4 = 3.",
                                 "de":  "Der Stern ist 7 und 7 − 4 = 3.",
                                 "nl":  "De ster is 7, en 7 − 4 = 3.",
                                 "es":  "La estrella es 7 y 7 − 4 = 3."
                             },
    "wn.q.65.option.1":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.126.hint":  {
                          "fr":  "Il y a quatre diamants qui en valent trois chacun.",
                          "de":  "Es gibt vier Diamanten im Wert von jeweils drei.",
                          "nl":  "Er zijn vier diamanten die elk drie waard zijn.",
                          "es":  "Hay cuatro diamantes que valen tres cada uno."
                      },
    "wn.q.98.prompt":  {
                           "fr":  "Qu\u0027est-ce que 2 × (9 − 3)² ?",
                           "de":  "Was ist 2 × (9 − 3)²?",
                           "nl":  "Wat is 2 × (9 − 3)²?",
                           "es":  "¿Qué es 2 × (9 − 3)²?"
                       },
    "wn.q.63.prompt":  {
                           "fr":  "Vous avez des cookies 12 et mangez du 3. Combien en reste-t-il ?",
                           "de":  "Sie haben 12 Kekse und essen 3. Wie viele sind noch übrig?",
                           "nl":  "Je hebt 12-koekjes en eet 3. Hoeveel blijven er over?",
                           "es":  "Tienes galletas 12 y comes 3. ¿Cuantos quedan?"
                       },
    "wn.q.138.hint":  {
                          "fr":  "Trouvez d’abord la valeur d’une lune.",
                          "de":  "Ermitteln Sie zunächst den Wert eines Mondes.",
                          "nl":  "Zoek eerst de waarde van één maan.",
                          "es":  "Primero encuentre el valor de una luna."
                      },
    "wn.q.125.hint":  {
                          "fr":  "Supprimez 3, puis divisez le reste entre deux cercles.",
                          "de":  "Entfernen Sie 3 und teilen Sie den Rest auf zwei Kreise auf.",
                          "nl":  "Verwijder 3 en verdeel de rest over twee cirkels.",
                          "es":  "Retire 3, luego divida el resto entre dos círculos."
                      },
    "wn.q.81.hint":  {
                         "fr":  "La division et la multiplication s\u0027effectuent de gauche à droite avant la soustraction.",
                         "de":  "Division und Multiplikation erfolgen von links nach rechts vor der Subtraktion.",
                         "nl":  "Delen en vermenigvuldigen gebeuren van links naar rechts vóór het aftrekken.",
                         "es":  "La división y la multiplicación se realizan de izquierda a derecha antes de la resta."
                     },
    "wn.q.106.option.3":  {
                              "fr":  "96 L",
                              "de":  "96 L",
                              "nl":  "96 L",
                              "es":  "96 L"
                          },
    "wn.q.109.option.0":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.88.option.2":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.99.option.3":  {
                             "fr":  "$53",
                             "de":  "$53",
                             "nl":  "$53",
                             "es":  "$53"
                         },
    "wn.q.144.option.1":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.89.option.3":  {
                             "fr":  "8:20",
                             "de":  "8:20",
                             "nl":  "8:20",
                             "es":  "8:20"
                         },
    "wn.q.171.option.2":  {
                              "fr":  "19",
                              "de":  "19",
                              "nl":  "19",
                              "es":  "19"
                          },
    "wn.q.121.option.1":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.78.option.0":  {
                             "fr":  "6",
                             "de":  "6",
                             "nl":  "6",
                             "es":  "6"
                         },
    "wn.q.160.option.0":  {
                              "fr":  "2",
                              "de":  "2",
                              "nl":  "2",
                              "es":  "2"
                          },
    "wn.q.89.prompt":  {
                           "fr":  "Un film d\u0027une minute 90 commence à 6:40. Quand est-ce que ça se termine ?",
                           "de":  "Ein 90-minütiger Film beginnt bei 6:40. Wann endet es?",
                           "nl":  "Een film van 90 minuten begint bij 6:40. Wanneer eindigt het?",
                           "es":  "Una película de minutos 90 comienza en 6:40. ¿Cuándo termina?"
                       },
    "wn.q.5.option.2":  {
                            "fr":  "48",
                            "de":  "48",
                            "nl":  "48",
                            "es":  "48"
                        },
    "wn.q.30.option.2":  {
                             "fr":  "2",
                             "de":  "2",
                             "nl":  "2",
                             "es":  "2"
                         },
    "wn.q.10.option.1":  {
                             "fr":  "35",
                             "de":  "35",
                             "nl":  "35",
                             "es":  "35"
                         },
    "wn.q.1.option.2":  {
                            "fr":  "32",
                            "de":  "32",
                            "nl":  "32",
                            "es":  "32"
                        },
    "wn.q.172.option.2":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.11.explanation":  {
                                "fr":  "Il s\u0027agit de Fibonacci : 5 + 8 = 13.",
                                "de":  "Das ist Fibonacci: 5 + 8 = 13.",
                                "nl":  "Dit is Fibonacci: 5 + 8 = 13.",
                                "es":  "Esto es Fibonacci: 5 + 8 = 13."
                            },
    "wn.q.19.explanation":  {
                                "fr":  "Multipliez à nouveau par 3 : 27 × 3 = 81.",
                                "de":  "Nochmals mit 3 multiplizieren: 27 × 3 = 81.",
                                "nl":  "Vermenigvuldig opnieuw met 3: 27 × 3 = 81.",
                                "es":  "Multiplicar por 3 nuevamente: 27 × 3 = 81."
                            },
    "wn.q.117.option.3":  {
                              "fr":  "18 L",
                              "de":  "18 L",
                              "nl":  "18 L",
                              "es":  "18 L"
                          },
    "wn.q.10.prompt":  {
                           "fr":  "7 · 14 · 21 · 28 · ?",
                           "de":  "7 · 14 · 21 · 28 · ?",
                           "nl":  "7 · 14 · 21 · 28 · ?",
                           "es":  "7 · 14 · 21 · 28 · ?"
                       },
    "wn.q.62.prompt":  {
                           "fr":  "Un billet de cinéma coûte 8 $. Que coûtent les billets 3 ?",
                           "de":  "Eine Kinokarte kostet $8. Was kosten 3-Tickets?",
                           "nl":  "Een bioscoopkaartje kost $8. Wat kosten 3-tickets?",
                           "es":  "Una entrada al cine cuesta $8. ¿Cuánto cuestan las entradas 3?"
                       },
    "wn.q.157.option.0":  {
                              "fr":  "18",
                              "de":  "18",
                              "nl":  "18",
                              "es":  "18"
                          },
    "wn.q.178.prompt":  {
                            "fr":  "★ = 3●\n★ + ● = 28\n▲ = ● − 2\n▲² = ?",
                            "de":  "★ = 3●\n★ + ● = 28\n▲ = ● − 2\n▲² = ?",
                            "nl":  "★ = 3●\n★ + ● = 28\n▲ = ● − 2\n▲² = ?",
                            "es":  "★ = 3●\n★ + ● = 28\n▲ = ● − 2\n▲² = ?"
                        },
    "wn.q.36.option.1":  {
                             "fr":  "40",
                             "de":  "40",
                             "nl":  "40",
                             "es":  "40"
                         },
    "wn.q.46.option.3":  {
                             "fr":  "193",
                             "de":  "193",
                             "nl":  "193",
                             "es":  "193"
                         },
    "wn.q.11.option.0":  {
                             "fr":  "11",
                             "de":  "11",
                             "nl":  "11",
                             "es":  "11"
                         },
    "wn.q.178.option.1":  {
                              "fr":  "25",
                              "de":  "25",
                              "nl":  "25",
                              "es":  "25"
                          },
    "wn.q.108.explanation":  {
                                 "fr":  "8% de $50 est $4, le total est donc $54.",
                                 "de":  "8 % von $50 beträgt $4, die Summe beträgt also $54.",
                                 "nl":  "8% van $50 is $4, dus het totaal is $54.",
                                 "es":  "El 8% de $50 es $4, por lo que el total es $54."
                             },
    "wn.q.103.option.2":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.47.option.0":  {
                             "fr":  "216",
                             "de":  "216",
                             "nl":  "216",
                             "es":  "216"
                         },
    "wn.q.113.option.3":  {
                              "fr":  "40",
                              "de":  "40",
                              "nl":  "40",
                              "es":  "40"
                          },
    "wn.q.42.option.3":  {
                             "fr":  "97",
                             "de":  "97",
                             "nl":  "97",
                             "es":  "97"
                         },
    "wn.q.146.option.2":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.17.option.1":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.48.explanation":  {
                                "fr":  "Les écarts sont 1, 4, 9, 16, 25 ; ajoutez ensuite 36 pour obtenir 92.",
                                "de":  "Die Lücken sind 1, 4, 9, 16, 25; Als nächstes fügen Sie 36 hinzu, um 92 zu erhalten.",
                                "nl":  "De gaten zijn 1, 4, 9, 16, 25; voeg vervolgens 36 toe om 92 te krijgen.",
                                "es":  "Los espacios son 1, 4, 9, 16, 25; Luego agregue 36 para obtener 92."
                            },
    "wn.q.9.option.1":  {
                            "fr":  "20",
                            "de":  "20",
                            "nl":  "20",
                            "es":  "20"
                        },
    "wn.q.49.option.3":  {
                             "fr":  "96",
                             "de":  "96",
                             "nl":  "96",
                             "es":  "96"
                         },
    "wn.q.135.option.1":  {
                              "fr":  "1",
                              "de":  "1",
                              "nl":  "1",
                              "es":  "1"
                          },
    "wn.q.82.hint":  {
                         "fr":  "Trouvez un quart de $40 et soustrayez-le.",
                         "de":  "Finden Sie ein Viertel von $40 und subtrahieren Sie es.",
                         "nl":  "Zoek een kwart van $40 en trek dit af.",
                         "es":  "Encuentra un cuarto de $40 y réstalo."
                     },
    "wn.q.30.explanation":  {
                                "fr":  "Divisez par 3 à chaque fois : 3 ÷ 3 = 1.",
                                "de":  "Jedes Mal durch 3 dividieren: 3 ÷ 3 = 1.",
                                "nl":  "Elke keer delen door 3: 3 ÷ 3 = 1.",
                                "es":  "Divida por 3 cada vez: 3 ÷ 3 = 1."
                            },
    "wn.q.175.option.1":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.80.explanation":  {
                                "fr":  "3 + 2 = étapes 5.",
                                "de":  "3 + 2 = 5 Schritte.",
                                "nl":  "3 + 2 = 5-stappen.",
                                "es":  "Pasos 3 + 2 = 5."
                            },
    "wn.q.105.prompt":  {
                            "fr":  "Qu\u0027est-ce que 5 + 2 × (12 − 4) ÷ 2 ?",
                            "de":  "Was ist 5 + 2 × (12 − 4) ÷ 2?",
                            "nl":  "Wat is 5 + 2 × (12 − 4) ÷ 2?",
                            "es":  "¿Qué es 5 + 2 × (12 − 4) ÷ 2?"
                        },
    "wn.q.82.option.2":  {
                             "fr":  "$30",
                             "de":  "$30",
                             "nl":  "$30",
                             "es":  "$30"
                         },
    "wn.q.118.option.1":  {
                              "fr":  "49",
                              "de":  "49",
                              "nl":  "49",
                              "es":  "49"
                          },
    "wn.q.158.option.1":  {
                              "fr":  "11",
                              "de":  "11",
                              "nl":  "11",
                              "es":  "11"
                          },
    "wn.q.111.hint":  {
                          "fr":  "Trouvez la zone et le périmètre séparément.",
                          "de":  "Finden Sie Fläche und Umfang getrennt.",
                          "nl":  "Zoek oppervlakte en omtrek afzonderlijk.",
                          "es":  "Calcula el área y el perímetro por separado."
                      },
    "wn.q.91.prompt":  {
                           "fr":  "Une facture $60 est partagée à parts égales par les personnes 4, puis chacune ajoute un pourboire $2. Total chacun ?",
                           "de":  "Eine Rechnung im Wert von $60 wird zu gleichen Teilen von 4-Personen geteilt, dann fügt jeder ein Trinkgeld von $2 hinzu. Insgesamt jeweils?",
                           "nl":  "Een rekening van $60 wordt gelijkelijk gedeeld door 4-mensen, waarna iedereen een fooi van $2 toevoegt. Totaal elk?",
                           "es":  "Una factura de $60 se comparte equitativamente entre las personas 4, luego cada una agrega una propina de $2. ¿Total cada uno?"
                       },
    "wn.q.133.option.2":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.25.prompt":  {
                           "fr":  "5 · 10 · 8 · 16 · 14 · ?",
                           "de":  "5 · 10 · 8 · 16 · 14 · ?",
                           "nl":  "5 · 10 · 8 · 16 · 14 · ?",
                           "es":  "5 · 10 · 8 · 16 · 14 · ?"
                       },
    "wn.q.97.prompt":  {
                           "fr":  "Une recette de 4 nécessite 300 g de farine. Combien pour 6?",
                           "de":  "Ein Rezept für 4 benötigt 300 g Mehl. Wie viel kostet 6?",
                           "nl":  "Voor een recept voor 4 is 300 g bloem nodig. Hoeveel voor 6?",
                           "es":  "Una receta de 4 necesita 300 g de harina. ¿Cuánto por 6?"
                       },
    "wn.q.72.explanation":  {
                                "fr":  "15 ÷ 3 = 5; 5 + 4 = 9.",
                                "de":  "15 ÷ 3 = 5; 5 + 4 = 9.",
                                "nl":  "15 ÷ 3 = 5; 5 + 4 = 9.",
                                "es":  "15 ÷ 3 = 5; 5 + 4 = 9."
                            },
    "wn.q.143.option.1":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.163.prompt":  {
                            "fr":  "★ est positif. ★ × ★ = 64\n★ + ● = 13\n● × 2 = ?",
                            "de":  "★ ist positiv. ★ × ★ = 64\n★ + ● = 13\n● × 2 = ?",
                            "nl":  "★ is positief. ★ × ★ = 64\n★ + ● = 13\n● × 2 = ?",
                            "es":  "★ es positivo. ★ × ★ = 64\n★ + ● = 13\n● × 2 =?"
                        },
    "wn.q.123.explanation":  {
                                 "fr":  "9 − 2 = 7.",
                                 "de":  "9 − 2 = 7.",
                                 "nl":  "9 − 2 = 7.",
                                 "es":  "9 − 2 = 7."
                             },
    "wn.q.117.explanation":  {
                                 "fr":  "90 ÷ 5 = 18 L/min ensemble ; 18 ÷ 3 = 6 L/min par pompe.",
                                 "de":  "90 ÷ 5 = 18 L/min zusammen; 18 ÷ 3 = 6 L/min pro Pumpe.",
                                 "nl":  "90 ÷ 5 = 18 L/min samen; 18 ÷ 3 = 6 L/min per pomp.",
                                 "es":  "90 ÷ 5 = 18 L/min juntos; 18 ÷ 3 = 6 L/min por bomba."
                             },
    "wn.q.51.option.1":  {
                             "fr":  "1,200",
                             "de":  "1,200",
                             "nl":  "1,200",
                             "es":  "1,200"
                         },
    "wn.q.111.explanation":  {
                                 "fr":  "La zone est 84 ; le périmètre est 2(12 + 7) = 38 ; 84 − 38 = 46.",
                                 "de":  "Bereich ist 84; Umfang ist 2(12 + 7) = 38; 84 − 38 = 46.",
                                 "nl":  "Gebied is 84; omtrek is 2(12 + 7) = 38; 84 − 38 = 46.",
                                 "es":  "El área es 84; el perímetro es 2(12 + 7) = 38; 84 − 38 = 46."
                             },
    "wn.q.159.option.3":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.5.hint":  {
                        "fr":  "Regardez comment chaque nombre augmente, pas la différence.",
                        "de":  "Beobachten Sie, wie jede Zahl wächst, nicht den Unterschied.",
                        "nl":  "Kijk hoe elk getal groeit, niet het verschil.",
                        "es":  "Observa cómo crece cada número, no la diferencia."
                    },
    "wn.q.125.prompt":  {
                            "fr":  "○ + ○ + 3 = 11\n○ = ?",
                            "de":  "○ + ○ + 3 = 11\n○ = ?",
                            "nl":  "○ + ○ + 3 = 11\n○ = ?",
                            "es":  "○ + ○ + 3 = 11\n○ = ?"
                        },
    "wn.q.2.option.1":  {
                            "fr":  "17",
                            "de":  "17",
                            "nl":  "17",
                            "es":  "17"
                        },
    "wn.q.6.hint":  {
                        "fr":  "Recherchez une différence constante.",
                        "de":  "Suchen Sie nach einem konstanten Unterschied.",
                        "nl":  "Zoek naar een constant verschil.",
                        "es":  "Busque una diferencia constante."
                    },
    "wn.q.57.option.3":  {
                             "fr":  "111",
                             "de":  "111",
                             "nl":  "111",
                             "es":  "111"
                         },
    "wn.q.81.option.1":  {
                             "fr":  "14",
                             "de":  "14",
                             "nl":  "14",
                             "es":  "14"
                         },
    "wn.q.104.option.2":  {
                              "fr":  "72 km/h",
                              "de":  "72 km/h",
                              "nl":  "72 km/h",
                              "es":  "72 km/h"
                          },
    "wn.q.68.option.2":  {
                             "fr":  "30",
                             "de":  "30",
                             "nl":  "30",
                             "es":  "30"
                         },
    "wn.q.149.explanation":  {
                                 "fr":  "▲ = 6; 6 + 2 × 2 = 10.",
                                 "de":  "▲ = 6; 6 + 2 × 2 = 10.",
                                 "nl":  "▲ = 6; 6 + 2 × 2 = 10.",
                                 "es":  "▲ = 6; 6 + 2 × 2 = 10."
                             },
    "wn.q.42.option.2":  {
                             "fr":  "92",
                             "de":  "92",
                             "nl":  "92",
                             "es":  "92"
                         },
    "wn.q.71.option.0":  {
                             "fr":  "6",
                             "de":  "6",
                             "nl":  "6",
                             "es":  "6"
                         },
    "wn.q.160.option.2":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.32.option.2":  {
                             "fr":  "16",
                             "de":  "16",
                             "nl":  "16",
                             "es":  "16"
                         },
    "wn.q.172.prompt":  {
                            "fr":  "● est positif. ● × ● = 36\n● + ▲ = 11\n▲ × 2 = ?",
                            "de":  "● ist positiv. ● × ● = 36\n● + ▲ = 11\n▲ × 2 = ?",
                            "nl":  "● is positief. ● × ● = 36\n● + ▲ = 11\n▲ × 2 = ?",
                            "es":  "● es positivo. ● × ● = 36\n● + ▲ = 11\n▲ × 2 =?"
                        },
    "wn.q.119.option.3":  {
                              "fr":  "$30",
                              "de":  "$30",
                              "nl":  "$30",
                              "es":  "$30"
                          },
    "wn.q.175.prompt":  {
                            "fr":  "● + ● + ▲ = 27\n● = 2▲ + 1\n● − ▲ = ?",
                            "de":  "● + ● + ▲ = 27\n● = 2▲ + 1\n● − ▲ = ?",
                            "nl":  "● + ● + ▲ = 27\n● = 2▲ + 1\n● − ▲ = ?",
                            "es":  "● + ● + ▲ = 27\n● = 2▲ + 1\n● − ▲ = ?"
                        },
    "wn.q.50.option.2":  {
                             "fr":  "140",
                             "de":  "140",
                             "nl":  "140",
                             "es":  "140"
                         },
    "wn.q.105.explanation":  {
                                 "fr":  "12 − 4 = 8; 2 × 8 ÷ 2 = 8; 5 + 8 = 13.",
                                 "de":  "12 − 4 = 8; 2 × 8 ÷ 2 = 8; 5 + 8 = 13.",
                                 "nl":  "12 − 4 = 8; 2 × 8 ÷ 2 = 8; 5 + 8 = 13.",
                                 "es":  "12 − 4 = 8; 2 × 8 ÷ 2 = 8; 5 + 8 = 13."
                             },
    "wn.q.161.option.0":  {
                              "fr":  "60",
                              "de":  "60",
                              "nl":  "60",
                              "es":  "60"
                          },
    "wn.q.134.prompt":  {
                            "fr":  "▲ = 3\n▲ × ● = 18\n● = ?",
                            "de":  "▲ = 3\n▲ × ● = 18\n● = ?",
                            "nl":  "▲ = 3\n▲ × ● = 18\n● = ?",
                            "es":  "▲ = 3\n▲ × ● = 18\n● = ?"
                        },
    "wn.q.172.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.148.option.3":  {
                              "fr":  "18",
                              "de":  "18",
                              "nl":  "18",
                              "es":  "18"
                          },
    "wn.q.173.option.1":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.130.option.0":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.66.hint":  {
                         "fr":  "La division précède l\u0027addition.",
                         "de":  "Die Division kommt vor der Addition.",
                         "nl":  "Deling komt vóór de optelling.",
                         "es":  "La división viene antes que la suma."
                     },
    "wn.q.137.option.2":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.177.explanation":  {
                                 "fr":  "Les valeurs sont 11 et 7 ; leur produit est 77.",
                                 "de":  "Die Werte sind 11 und 7; Ihr Produkt ist 77.",
                                 "nl":  "De waarden zijn 11 en 7; hun product is 77.",
                                 "es":  "Los valores son 11 y 7; su producto es 77."
                             },
    "wn.q.87.explanation":  {
                                "fr":  "9 × 2 = 18; 18 + 7 = 25.",
                                "de":  "9 × 2 = 18; 18 + 7 = 25.",
                                "nl":  "9 × 2 = 18; 18 + 7 = 25.",
                                "es":  "9 × 2 = 18; 18 + 7 = 25."
                            },
    "wn.q.66.option.0":  {
                             "fr":  "5",
                             "de":  "5",
                             "nl":  "5",
                             "es":  "5"
                         },
    "wn.q.73.option.2":  {
                             "fr":  "$15",
                             "de":  "$15",
                             "nl":  "$15",
                             "es":  "$15"
                         },
    "wn.q.78.option.3":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.166.option.1":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.59.hint":  {
                         "fr":  "Chaque terme suit une multiplication et un ajustement répétitifs.",
                         "de":  "Auf jeden Term folgt eine sich wiederholende Multiplikation und Anpassung.",
                         "nl":  "Elke term volgt op één zich herhalende vermenigvuldiging en aanpassing.",
                         "es":  "Cada término sigue una multiplicación y ajuste repetidos."
                     },
    "wn.q.114.prompt":  {
                            "fr":  "Une piste 120 m est exécutée fois 3.5. C\u0027est jusqu\u0027où ?",
                            "de":  "Eine 120 m-Strecke wird 3.5-mal gefahren. Wie weit ist das?",
                            "nl":  "Een 120 m-track wordt 3.5 keer uitgevoerd. Hoe ver is dat?",
                            "es":  "Una pista 120 m se recorre 3.5 veces. ¿Qué tan lejos está eso?"
                        },
    "wn.q.41.option.1":  {
                             "fr":  "158",
                             "de":  "158",
                             "nl":  "158",
                             "es":  "158"
                         },
    "wn.q.84.hint":  {
                         "fr":  "Répartissez les tranches entre trois personnes.",
                         "de":  "Teilen Sie die Scheiben auf drei Personen auf.",
                         "nl":  "Verdeel de plakjes over drie personen.",
                         "es":  "Divida las rebanadas entre tres personas."
                     },
    "wn.q.25.explanation":  {
                                "fr":  "Multipliez par 2, soustrayez 2, répétez : 14 × 2 = 28.",
                                "de":  "Mit 2 multiplizieren, 2 subtrahieren, wiederholen: 14 × 2 = 28.",
                                "nl":  "Vermenigvuldig met 2, trek 2 af, herhaal: 14 × 2 = 28.",
                                "es":  "Multiplica por 2, resta 2, repite: 14 × 2 = 28."
                            },
    "wn.q.176.prompt":  {
                            "fr":  "■ = 7\n● + ■ = 19\n▲ × ● = 36\n▲ − ■ = ?",
                            "de":  "■ = 7\n● + ■ = 19\n▲ × ● = 36\n▲ − ■ = ?",
                            "nl":  "■ = 7\n● + ■ = 19\n▲ × ● = 36\n▲ − ■ = ?",
                            "es":  "■ = 7\n● + ■ = 19\n▲ × ● = 36\n▲ − ■ = ?"
                        },
    "wn.q.160.explanation":  {
                                 "fr":  "3 × 6 = 18, donc le triangle est 14 ; 14 − 6 = 8.",
                                 "de":  "3 × 6 = 18, also ist das Dreieck 14; 14 − 6 = 8.",
                                 "nl":  "3 × 6 = 18, dus de driehoek is 14; 14 − 6 = 8.",
                                 "es":  "3 × 6 = 18, entonces el triángulo es 14; 14 − 6 = 8."
                             },
    "wn.q.180.option.1":  {
                              "fr":  "17",
                              "de":  "17",
                              "nl":  "17",
                              "es":  "17"
                          },
    "wn.q.156.option.2":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.163.hint":  {
                          "fr":  "Utilisez la racine carrée positive, puis trouvez le cercle.",
                          "de":  "Verwenden Sie die positive Quadratwurzel und ermitteln Sie dann den Kreis.",
                          "nl":  "Gebruik de positieve vierkantswortel en zoek vervolgens de cirkel.",
                          "es":  "Usa la raíz cuadrada positiva y luego encuentra el círculo."
                      },
    "wn.q.168.option.1":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.149.option.0":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.53.option.3":  {
                             "fr":  "72",
                             "de":  "72",
                             "nl":  "72",
                             "es":  "72"
                         },
    "wn.q.162.option.1":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.118.option.0":  {
                              "fr":  "39",
                              "de":  "39",
                              "nl":  "39",
                              "es":  "39"
                          },
    "wn.q.12.option.0":  {
                             "fr":  "18",
                             "de":  "18",
                             "nl":  "18",
                             "es":  "18"
                         },
    "wn.q.51.prompt":  {
                           "fr":  "2 · 4 · 12 · 48 · 240 · ?",
                           "de":  "2 · 4 · 12 · 48 · 240 · ?",
                           "nl":  "2 · 4 · 12 · 48 · 240 · ?",
                           "es":  "2 · 4 · 12 · 48 · 240 · ?"
                       },
    "wn.q.93.option.0":  {
                             "fr":  "14",
                             "de":  "14",
                             "nl":  "14",
                             "es":  "14"
                         },
    "wn.q.121.hint":  {
                          "fr":  "Deux cercles identiques font dix.",
                          "de":  "Zwei identische Kreise ergeben zehn.",
                          "nl":  "Twee identieke cirkels zijn tien.",
                          "es":  "Dos círculos idénticos suman diez."
                      },
    "wn.q.136.option.1":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.62.option.3":  {
                             "fr":  "$32",
                             "de":  "$32",
                             "nl":  "$32",
                             "es":  "$32"
                         },
    "wn.q.61.option.0":  {
                             "fr":  "20",
                             "de":  "20",
                             "nl":  "20",
                             "es":  "20"
                         },
    "wn.q.167.option.3":  {
                              "fr":  "16",
                              "de":  "16",
                              "nl":  "16",
                              "es":  "16"
                          },
    "wn.q.84.option.0":  {
                             "fr":  "7",
                             "de":  "7",
                             "nl":  "7",
                             "es":  "7"
                         },
    "wn.q.34.option.0":  {
                             "fr":  "44",
                             "de":  "44",
                             "nl":  "44",
                             "es":  "44"
                         },
    "wn.q.141.option.1":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.121.prompt":  {
                            "fr":  "● + ● = 10\n● = ?",
                            "de":  "● + ● = 10\n● = ?",
                            "nl":  "● + ● = 10\n● = ?",
                            "es":  "● + ● = 10\n● = ?"
                        },
    "wn.q.150.prompt":  {
                            "fr":  "▲ + ▲ + ● = 17\n▲ = 6\n● − 3 = ?",
                            "de":  "▲ + ▲ + ● = 17\n▲ = 6\n● − 3 = ?",
                            "nl":  "▲ + ▲ + ● = 17\n▲ = 6\n● − 3 = ?",
                            "es":  "▲ + ▲ + ● = 17\n▲ = 6\n● − 3 = ?"
                        },
    "wn.q.129.option.3":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.166.option.3":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.133.option.1":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.111.option.0":  {
                              "fr":  "38",
                              "de":  "38",
                              "nl":  "38",
                              "es":  "38"
                          },
    "wn.q.169.option.1":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.59.option.3":  {
                             "fr":  "124",
                             "de":  "124",
                             "nl":  "124",
                             "es":  "124"
                         },
    "wn.q.120.option.1":  {
                              "fr":  "70",
                              "de":  "70",
                              "nl":  "70",
                              "es":  "70"
                          },
    "wn.q.38.option.3":  {
                             "fr":  "28",
                             "de":  "28",
                             "nl":  "28",
                             "es":  "28"
                         },
    "wn.q.167.hint":  {
                          "fr":  "N\u0027oubliez pas la multiplication avant l\u0027addition.",
                          "de":  "Denken Sie an die Multiplikation vor der Addition.",
                          "nl":  "Denk aan vermenigvuldigen vóór optellen.",
                          "es":  "Recuerda la multiplicación antes de la suma."
                      },
    "wn.q.154.option.0":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.170.option.1":  {
                              "fr":  "64",
                              "de":  "64",
                              "nl":  "64",
                              "es":  "64"
                          },
    "wn.q.57.option.2":  {
                             "fr":  "108",
                             "de":  "108",
                             "nl":  "108",
                             "es":  "108"
                         },
    "wn.q.54.option.0":  {
                             "fr":  "47",
                             "de":  "47",
                             "nl":  "47",
                             "es":  "47"
                         },
    "wn.q.90.option.1":  {
                             "fr":  "18",
                             "de":  "18",
                             "nl":  "18",
                             "es":  "18"
                         },
    "wn.q.136.option.0":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.43.hint":  {
                         "fr":  "Ce sont des sommes de nombres triangulaires.",
                         "de":  "Das sind Summen von Dreieckszahlen.",
                         "nl":  "Dit zijn sommen van driehoekige getallen.",
                         "es":  "Estas son sumas de números triangulares."
                     },
    "wn.q.44.option.3":  {
                             "fr":  "81",
                             "de":  "81",
                             "nl":  "81",
                             "es":  "81"
                         },
    "wn.q.47.option.1":  {
                             "fr":  "240",
                             "de":  "240",
                             "nl":  "240",
                             "es":  "240"
                         },
    "wn.q.99.hint":  {
                         "fr":  "Calculez les économies avant les dépenses.",
                         "de":  "Berechnen Sie die Ersparnisse, bevor Sie Geld ausgeben.",
                         "nl":  "Bereken de besparingen vóór de uitgaven.",
                         "es":  "Calcule los ahorros antes de gastar."
                     },
    "wn.q.70.option.2":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.165.option.2":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.97.option.2":  {
                             "fr":  "500 g",
                             "de":  "500 g",
                             "nl":  "500 g",
                             "es":  "500 g"
                         },
    "wn.q.164.option.3":  {
                              "fr":  "64",
                              "de":  "64",
                              "nl":  "64",
                              "es":  "64"
                          },
    "wn.q.43.option.3":  {
                             "fr":  "60",
                             "de":  "60",
                             "nl":  "60",
                             "es":  "60"
                         },
    "wn.q.25.hint":  {
                         "fr":  "Les opérations alternent.",
                         "de":  "Die Operationen wechseln sich ab.",
                         "nl":  "De werkzaamheden wisselen elkaar af.",
                         "es":  "Las operaciones se alternan."
                     },
    "wn.q.39.prompt":  {
                           "fr":  "7 · 14 · 12 · 24 · 22 · ?",
                           "de":  "7 · 14 · 12 · 24 · 22 · ?",
                           "nl":  "7 · 14 · 12 · 24 · 22 · ?",
                           "es":  "7 · 14 · 12 · 24 · 22 · ?"
                       },
    "wn.q.74.option.3":  {
                             "fr":  "21",
                             "de":  "21",
                             "nl":  "21",
                             "es":  "21"
                         },
    "wn.q.147.explanation":  {
                                 "fr":  "● + 2● = 15, donc ● = 5.",
                                 "de":  "● + 2● = 15, also ● = 5.",
                                 "nl":  "● + 2● = 15, dus ● = 5.",
                                 "es":  "● + 2● = 15, entonces ● = 5."
                             },
    "wn.q.165.hint":  {
                          "fr":  "Trouvez d\u0027abord le cercle du produit.",
                          "de":  "Suchen Sie zuerst den Kreis aus dem Produkt.",
                          "nl":  "Zoek eerst de cirkel van het product.",
                          "es":  "Primero encuentra el círculo del producto."
                      },
    "wn.q.164.option.0":  {
                              "fr":  "42",
                              "de":  "42",
                              "nl":  "42",
                              "es":  "42"
                          },
    "wn.q.176.explanation":  {
                                 "fr":  "● = 12, donc ▲ = 3 ; 3 − 7 = −4.",
                                 "de":  "● = 12, also ▲ = 3; 3 − 7 = −4.",
                                 "nl":  "● = 12, dus ▲ = 3; 3 − 7 = −4.",
                                 "es":  "● = 12, entonces ▲ = 3; 3 − 7 = −4."
                             },
    "wn.q.169.hint":  {
                          "fr":  "Factorisez le cercle sur la deuxième ligne.",
                          "de":  "Berücksichtigen Sie den Kreis in der zweiten Zeile.",
                          "nl":  "Factor de cirkel in de tweede regel uit.",
                          "es":  "Factoriza el círculo en la segunda línea."
                      },
    "wn.q.11.option.2":  {
                             "fr":  "13",
                             "de":  "13",
                             "nl":  "13",
                             "es":  "13"
                         },
    "wn.q.151.explanation":  {
                                 "fr":  "2▲ + 3 = 13, donc ▲ = 5.",
                                 "de":  "2▲ + 3 = 13, also ▲ = 5.",
                                 "nl":  "2▲ + 3 = 13, dus ▲ = 5.",
                                 "es":  "2▲ + 3 = 13, entonces ▲ = 5."
                             },
    "wn.q.19.prompt":  {
                           "fr":  "3 · 9 · 27 · ?",
                           "de":  "3 · 9 · 27 · ?",
                           "nl":  "3 · 9 · 27 · ?",
                           "es":  "3 · 9 · 27 · ?"
                       },
    "wn.q.65.prompt":  {
                           "fr":  "Une douzaine de chaussettes perdent les chaussettes 2 dans la lessive. Combien en reste-t-il ?",
                           "de":  "Ein Dutzend Socken verlieren 2 Socken in der Wäsche. Wie viele sind noch übrig?",
                           "nl":  "Een tiental sokken verliezen 2 sokken in de was. Hoeveel zijn er nog over?",
                           "es":  "Una docena de calcetines se pierden 2 en la lavandería. ¿Cuantos quedan?"
                       },
    "wn.q.150.explanation":  {
                                 "fr":  "● = 17 − 12 = 5; 5 − 3 = 2.",
                                 "de":  "● = 17 − 12 = 5; 5 − 3 = 2.",
                                 "nl":  "● = 17 − 12 = 5; 5 − 3 = 2.",
                                 "es":  "● = 17 − 12 = 5; 5 − 3 = 2."
                             },
    "wn.q.72.prompt":  {
                           "fr":  "Qu\u0027est-ce que 15 ÷ 3 + 4 ?",
                           "de":  "Was ist 15 ÷ 3 + 4?",
                           "nl":  "Wat is 15 ÷ 3 + 4?",
                           "es":  "¿Qué es 15 ÷ 3 + 4?"
                       },
    "wn.q.19.option.3":  {
                             "fr":  "90",
                             "de":  "90",
                             "nl":  "90",
                             "es":  "90"
                         },
    "wn.q.127.option.0":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.99.explanation":  {
                                "fr":  "5 × 8 = $40; $40 − $13 = $27.",
                                "de":  "5 × 8 = $40; $40 − $13 = $27.",
                                "nl":  "5 × 8 = $40; $40 − $13 = $27.",
                                "es":  "5 × 8 = $40; $40 − $13 = $27."
                            },
    "wn.q.42.option.0":  {
                             "fr":  "82",
                             "de":  "82",
                             "nl":  "82",
                             "es":  "82"
                         },
    "wn.q.14.option.1":  {
                             "fr":  "30",
                             "de":  "30",
                             "nl":  "30",
                             "es":  "30"
                         },
    "wn.q.126.option.3":  {
                              "fr":  "15",
                              "de":  "15",
                              "nl":  "15",
                              "es":  "15"
                          },
    "wn.q.160.option.3":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.146.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.148.explanation":  {
                                 "fr":  "2◆ = 16, donc ◆ × 2 = 16.",
                                 "de":  "2◆ = 16, also ◆ × 2 = 16.",
                                 "nl":  "2◆ = 16, dus ◆ × 2 = 16.",
                                 "es":  "2◆ = 16, entonces ◆ × 2 = 16."
                             },
    "wn.q.63.option.1":  {
                             "fr":  "8",
                             "de":  "8",
                             "nl":  "8",
                             "es":  "8"
                         },
    "wn.q.2.hint":  {
                        "fr":  "Le même montant est ajouté à chaque fois.",
                        "de":  "Es wird jedes Mal die gleiche Menge hinzugefügt.",
                        "nl":  "Telkens wordt hetzelfde bedrag toegevoegd.",
                        "es":  "Cada vez se agrega la misma cantidad."
                    },
    "wn.q.10.option.3":  {
                             "fr":  "42",
                             "de":  "42",
                             "nl":  "42",
                             "es":  "42"
                         },
    "wn.q.116.explanation":  {
                                 "fr":  "30% de $200 est $60 ; $200 − $60 − $10 = $130.",
                                 "de":  "30 % von $200 ist $60; $200 − $60 − $10 = $130.",
                                 "nl":  "30% van $200 is $60; $200 − $60 − $10 = $130.",
                                 "es":  "30% de $200 es $60; $200 − $60 − $10 = $130."
                             },
    "wn.q.96.hint":  {
                         "fr":  "Factorisez le 7 répété ou multipliez chaque partie.",
                         "de":  "Faktorisieren Sie die wiederholten 7 oder multiplizieren Sie jeden Teil.",
                         "nl":  "Tel de herhaalde 7 uit, of vermenigvuldig elk deel.",
                         "es":  "Factoriza el 7 repetido o multiplica cada parte."
                     },
    "wn.q.130.hint":  {
                          "fr":  "Le même carré apparaît les deux fois.",
                          "de":  "Das gleiche Quadrat erscheint beide Male.",
                          "nl":  "Hetzelfde vierkant verschijnt beide keren.",
                          "es":  "El mismo cuadrado aparece ambas veces."
                      },
    "wn.q.55.option.3":  {
                             "fr":  "34",
                             "de":  "34",
                             "nl":  "34",
                             "es":  "34"
                         },
    "wn.q.132.hint":  {
                          "fr":  "Trois cœurs en valent deux chacun, puis ajoutez-en un.",
                          "de":  "Drei Herzen sind jeweils zwei wert, dann addiere eins.",
                          "nl":  "Drie harten zijn elk twee waard, voeg er dan één toe.",
                          "es":  "Tres corazones valen dos cada uno, luego suma uno."
                      },
    "wn.q.83.hint":  {
                         "fr":  "Commencez entre parenthèses.",
                         "de":  "Beginnen Sie innerhalb der Klammern.",
                         "nl":  "Begin tussen de haakjes.",
                         "es":  "Comience dentro del paréntesis."
                     },
    "wn.q.139.hint":  {
                          "fr":  "Trouvez le triangle, puis utilisez la deuxième ligne.",
                          "de":  "Suchen Sie das Dreieck und verwenden Sie dann die zweite Linie.",
                          "nl":  "Zoek de driehoek en gebruik vervolgens de tweede lijn.",
                          "es":  "Encuentra el triángulo, luego usa la segunda línea."
                      },
    "wn.q.69.option.3":  {
                             "fr":  "8/5",
                             "de":  "8/5",
                             "nl":  "8/5",
                             "es":  "8/5"
                         },
    "wn.q.36.option.2":  {
                             "fr":  "42",
                             "de":  "42",
                             "nl":  "42",
                             "es":  "42"
                         },
    "wn.q.36.option.3":  {
                             "fr":  "44",
                             "de":  "44",
                             "nl":  "44",
                             "es":  "44"
                         },
    "wn.q.179.hint":  {
                          "fr":  "Mettez la somme au carré et comparez-la avec la somme des carrés.",
                          "de":  "Quadrieren Sie die Summe und vergleichen Sie sie mit der Summe der Quadrate.",
                          "nl":  "Kwadraat de som en vergelijk deze met de som der kwadraten.",
                          "es":  "Eleva la suma al cuadrado y compárala con la suma de cuadrados."
                      },
    "wn.q.110.option.2":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.102.option.1":  {
                              "fr":  "$80",
                              "de":  "$80",
                              "nl":  "$80",
                              "es":  "$80"
                          },
    "wn.q.86.option.3":  {
                             "fr":  "36",
                             "de":  "36",
                             "nl":  "36",
                             "es":  "36"
                         },
    "wn.q.135.prompt":  {
                            "fr":  "◆ + 5 = 5 + ◆\n◆ = ?",
                            "de":  "◆ + 5 = 5 + ◆\n◆ = ?",
                            "nl":  "◆ + 5 = 5 + ◆\n◆ = ?",
                            "es":  "◆ + 5 = 5 + ◆\n◆ = ?"
                        },
    "wn.q.148.hint":  {
                          "fr":  "Retirez-en quatre, puis doublez un diamant.",
                          "de":  "Entfernen Sie vier und verdoppeln Sie dann einen Diamanten.",
                          "nl":  "Verwijder er vier en verdubbel vervolgens één diamant.",
                          "es":  "Retire cuatro y luego duplique un diamante."
                      },
    "wn.q.87.option.2":  {
                             "fr":  "32",
                             "de":  "32",
                             "nl":  "32",
                             "es":  "32"
                         },
    "wn.q.49.explanation":  {
                                "fr":  "Chaque terme est doublé et 1 ajouté : 47 × 2 + 1 = 95.",
                                "de":  "Jeder Term wird verdoppelt und 1 hinzugefügt: 47 × 2 + 1 = 95.",
                                "nl":  "Elke term wordt verdubbeld en 1 toegevoegd: 47 × 2 + 1 = 95.",
                                "es":  "Cada término se duplica y se suma 1: 47 × 2 + 1 = 95."
                            },
    "wn.q.55.option.1":  {
                             "fr":  "31",
                             "de":  "31",
                             "nl":  "31",
                             "es":  "31"
                         },
    "wn.q.156.option.0":  {
                              "fr":  "2",
                              "de":  "2",
                              "nl":  "2",
                              "es":  "2"
                          },
    "wn.q.169.option.2":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.175.explanation":  {
                                 "fr":  "2(2▲ + 1) + ▲ = 27, donc ▲ = 5 et ● = 11 ; 11 − 5 = 6.",
                                 "de":  "2(2▲ + 1) + ▲ = 27, also ▲ = 5 und ● = 11; 11 − 5 = 6.",
                                 "nl":  "2(2▲ + 1) + ▲ = 27, dus ▲ = 5 en ● = 11; 11 − 5 = 6.",
                                 "es":  "2(2▲ + 1) + ▲ = 27, entonces ▲ = 5 y ● = 11; 11 − 5 = 6."
                             },
    "wn.q.68.option.3":  {
                             "fr":  "50",
                             "de":  "50",
                             "nl":  "50",
                             "es":  "50"
                         },
    "wn.q.131.prompt":  {
                            "fr":  "● + ▲ = 10\n● = 4\n▲ = ?",
                            "de":  "● + ▲ = 10\n● = 4\n▲ = ?",
                            "nl":  "● + ▲ = 10\n● = 4\n▲ = ?",
                            "es":  "● + ▲ = 10\n● = 4\n▲ = ?"
                        },
    "wn.q.75.option.0":  {
                             "fr":  "2",
                             "de":  "2",
                             "nl":  "2",
                             "es":  "2"
                         },
    "wn.q.139.prompt":  {
                            "fr":  "▲ + 4 = 10\n▲ + 6 = ?",
                            "de":  "▲ + 4 = 10\n▲ + 6 = ?",
                            "nl":  "▲ + 4 = 10\n▲ + 6 = ?",
                            "es":  "▲ + 4 = 10\n▲ + 6 = ?"
                        },
    "wn.q.16.explanation":  {
                                "fr":  "Ajoutez 3 à 10 pour obtenir 13.",
                                "de":  "Fügen Sie 3 zu 10 hinzu, um 13 zu erhalten.",
                                "nl":  "Voeg 3 toe aan 10 om 13 te krijgen.",
                                "es":  "Agregue 3 a 10 para obtener 13."
                            },
    "wn.q.80.option.3":  {
                             "fr":  "9",
                             "de":  "9",
                             "nl":  "9",
                             "es":  "9"
                         },
    "wn.q.154.explanation":  {
                                 "fr":  "● = 9; 9 − 4 = 5.",
                                 "de":  "● = 9; 9 − 4 = 5.",
                                 "nl":  "● = 9; 9 − 4 = 5.",
                                 "es":  "● = 9; 9 − 4 = 5."
                             },
    "wn.q.91.option.2":  {
                             "fr":  "$18",
                             "de":  "$18",
                             "nl":  "$18",
                             "es":  "$18"
                         },
    "wn.q.174.option.2":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.72.option.2":  {
                             "fr":  "9",
                             "de":  "9",
                             "nl":  "9",
                             "es":  "9"
                         },
    "wn.q.61.prompt":  {
                           "fr":  "Qu\u0027est-ce que 10 + 10 × 2 ?",
                           "de":  "Was ist 10 + 10 × 2?",
                           "nl":  "Wat is 10 + 10 × 2?",
                           "es":  "¿Qué es 10 + 10 × 2?"
                       },
    "wn.q.160.option.1":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.86.explanation":  {
                                "fr":  "2³ = 8 et 3² = 9 ; 8 + 9 = 17.",
                                "de":  "2³ = 8 und 3² = 9; 8 + 9 = 17.",
                                "nl":  "2³ = 8 en 3² = 9; 8 + 9 = 17.",
                                "es":  "2³ = 8 y 3² = 9; 8 + 9 = 17."
                            },
    "wn.q.154.option.2":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.21.option.0":  {
                             "fr":  "35",
                             "de":  "35",
                             "nl":  "35",
                             "es":  "35"
                         },
    "wn.q.119.prompt":  {
                            "fr":  "Une facture $120 est divisée de manière 5, puis tout le monde ajoute un pourboire $4. Chacun paie ?",
                            "de":  "Eine Rechnung im Wert von $120 wird auf 5 aufgeteilt, dann fügt jeder ein Trinkgeld in Höhe von $4 hinzu. Jeder zahlt?",
                            "nl":  "Een rekening van $120 wordt op 5 gesplitst, waarna iedereen een fooi van $4 toevoegt. Ieder betaalt?",
                            "es":  "Una factura de $120 se divide en 5, luego todos agregan una propina de $4. ¿Cada uno paga?"
                        },
    "wn.q.161.option.1":  {
                              "fr":  "66",
                              "de":  "66",
                              "nl":  "66",
                              "es":  "66"
                          },
    "wn.q.51.option.3":  {
                             "fr":  "1,680",
                             "de":  "1,680",
                             "nl":  "1,680",
                             "es":  "1,680"
                         },
    "wn.q.51.option.2":  {
                             "fr":  "1,440",
                             "de":  "1,440",
                             "nl":  "1,440",
                             "es":  "1,440"
                         },
    "wn.q.82.explanation":  {
                                "fr":  "25% de $40 est $10 ; $40 − $10 = $30.",
                                "de":  "25 % von $40 ist $10; $40 − $10 = $30.",
                                "nl":  "25% van $40 is $10; $40 − $10 = $30.",
                                "es":  "25% de $40 es $10; $40 − $10 = $30."
                            },
    "wn.q.12.option.2":  {
                             "fr":  "22",
                             "de":  "22",
                             "nl":  "22",
                             "es":  "22"
                         },
    "wn.q.41.prompt":  {
                           "fr":  "4 · 9 · 19 · 39 · 79 · ?",
                           "de":  "4 · 9 · 19 · 39 · 79 · ?",
                           "nl":  "4 · 9 · 19 · 39 · 79 · ?",
                           "es":  "4 · 9 · 19 · 39 · 79 · ?"
                       },
    "wn.q.161.option.3":  {
                              "fr":  "84",
                              "de":  "84",
                              "nl":  "84",
                              "es":  "84"
                          },
    "wn.q.57.option.1":  {
                             "fr":  "102",
                             "de":  "102",
                             "nl":  "102",
                             "es":  "102"
                         },
    "wn.q.67.hint":  {
                         "fr":  "Même nombre de pieds à chaque table.",
                         "de":  "Gleiche Anzahl Beine an jedem Tisch.",
                         "nl":  "Hetzelfde aantal poten aan elke tafel.",
                         "es":  "El mismo número de patas en cada mesa."
                     },
    "wn.q.4.option.0":  {
                            "fr":  "5",
                            "de":  "5",
                            "nl":  "5",
                            "es":  "5"
                        },
    "wn.q.33.explanation":  {
                                "fr":  "Les écarts doublent : +5, +10, +20 ; suivant +40 donne 81.",
                                "de":  "Die Lücken verdoppeln sich: +5, +10, +20; next +40 ergibt 81.",
                                "nl":  "De gaten verdubbelen: +5, +10, +20; volgende +40 geeft 81.",
                                "es":  "Las brechas se duplican: +5, +10, +20; siguiente +40 da 81."
                            },
    "wn.q.176.option.0":  {
                              "fr":  "−4",
                              "de":  "−4",
                              "nl":  "−4",
                              "es":  "−4"
                          },
    "wn.q.165.option.0":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.54.hint":  {
                         "fr":  "Pensez aux puissances de deux avec une petite soustraction.",
                         "de":  "Stellen Sie sich Zweierpotenzen mit einer kleinen Subtraktion vor.",
                         "nl":  "Denk aan machten van twee met een kleine aftrekking.",
                         "es":  "Piense en potencias de dos con una pequeña resta."
                     },
    "wn.q.64.hint":  {
                         "fr":  "Faites les mots dans l\u0027ordre.",
                         "de":  "Machen Sie die Wörter der Reihe nach.",
                         "nl":  "Voer de woorden op volgorde uit.",
                         "es":  "Haz las palabras en orden."
                     },
    "wn.q.144.explanation":  {
                                 "fr":  "3 × (● + 1) = 18, donc ● + 1 = 6 et ● = 5.",
                                 "de":  "3 × (● + 1) = 18, also ● + 1 = 6 und ● = 5.",
                                 "nl":  "3 × (● + 1) = 18, dus ● + 1 = 6 en ● = 5.",
                                 "es":  "3 × (● + 1) = 18, entonces ● + 1 = 6 y ● = 5."
                             },
    "wn.q.67.option.0":  {
                             "fr":  "7",
                             "de":  "7",
                             "nl":  "7",
                             "es":  "7"
                         },
    "wn.q.79.option.3":  {
                             "fr":  "100",
                             "de":  "100",
                             "nl":  "100",
                             "es":  "100"
                         },
    "wn.q.52.option.2":  {
                             "fr":  "70",
                             "de":  "70",
                             "nl":  "70",
                             "es":  "70"
                         },
    "wn.q.81.option.2":  {
                             "fr":  "16",
                             "de":  "16",
                             "nl":  "16",
                             "es":  "16"
                         },
    "wn.q.27.explanation":  {
                                "fr":  "Multipliez par 2, 3, 4, 5 ; multipliez ensuite par 6 : 120 × 6 = 720.",
                                "de":  "Multiplizieren Sie mit 2, 3, 4, 5; Nächste Multiplikation mit 6: 120 × 6 = 720.",
                                "nl":  "Vermenigvuldig met 2, 3, 4, 5; vermenigvuldig vervolgens met 6: 120 × 6 = 720.",
                                "es":  "Multiplicar por 2, 3, 4, 5; luego multiplica por 6: 120 × 6 = 720."
                            },
    "wn.q.114.option.1":  {
                              "fr":  "400 m",
                              "de":  "400 m",
                              "nl":  "400 m",
                              "es":  "400 m"
                          },
    "wn.q.137.hint":  {
                          "fr":  "Divisez la valeur du carré en trois parties égales.",
                          "de":  "Teilen Sie den Wert des Quadrats in drei gleiche Teile.",
                          "nl":  "Verdeel de waarde van het vierkant in drie gelijke delen.",
                          "es":  "Divide el valor del cuadrado en tres partes iguales."
                      },
    "wn.q.60.option.1":  {
                             "fr":  "221",
                             "de":  "221",
                             "nl":  "221",
                             "es":  "221"
                         },
    "wn.q.175.option.2":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.19.option.2":  {
                             "fr":  "81",
                             "de":  "81",
                             "nl":  "81",
                             "es":  "81"
                         },
    "wn.q.161.hint":  {
                          "fr":  "Ajoutez et soustrayez les équations pour trouver chaque symbole.",
                          "de":  "Addiere und subtrahiere die Gleichungen, um jedes Symbol zu finden.",
                          "nl":  "Voeg de vergelijkingen toe en trek ze af om elk symbool te vinden.",
                          "es":  "Suma y resta las ecuaciones para encontrar cada símbolo."
                      },
    "wn.q.2.option.0":  {
                            "fr":  "16",
                            "de":  "16",
                            "nl":  "16",
                            "es":  "16"
                        },
    "wn.q.162.option.3":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.35.option.0":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.167.option.2":  {
                              "fr":  "15",
                              "de":  "15",
                              "nl":  "15",
                              "es":  "15"
                          },
    "wn.q.74.prompt":  {
                           "fr":  "Qu\u0027est-ce que 7 + 3 × 0 ?",
                           "de":  "Was ist 7 + 3 × 0?",
                           "nl":  "Wat is 7 + 3 × 0?",
                           "es":  "¿Qué es 7 + 3 × 0?"
                       },
    "wn.q.137.option.3":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.90.hint":  {
                         "fr":  "Faites d\u0027abord les deux multiplications.",
                         "de":  "Führen Sie zuerst beide Multiplikationen durch.",
                         "nl":  "Voer eerst beide vermenigvuldigingen uit.",
                         "es":  "Haz ambas multiplicaciones primero."
                     },
    "wn.q.41.option.3":  {
                             "fr":  "160",
                             "de":  "160",
                             "nl":  "160",
                             "es":  "160"
                         },
    "wn.q.103.option.0":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.16.option.0":  {
                             "fr":  "11",
                             "de":  "11",
                             "nl":  "11",
                             "es":  "11"
                         },
    "wn.q.56.explanation":  {
                                "fr":  "Après 30, doublez-le : 30 × 2 = 60.",
                                "de":  "Nach 30 verdoppeln Sie es: 30 × 2 = 60.",
                                "nl":  "Na 30 verdubbel je het: 30 × 2 = 60.",
                                "es":  "Después de 30, duplíquelo: 30 × 2 = 60."
                            },
    "wn.q.153.option.1":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.151.option.2":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.161.prompt":  {
                            "fr":  "● + ▲ = 17\n● − ▲ = 5\n● × ▲ = ?",
                            "de":  "● + ▲ = 17\n● − ▲ = 5\n● × ▲ = ?",
                            "nl":  "● + ▲ = 17\n● − ▲ = 5\n● × ▲ = ?",
                            "es":  "● + ▲ = 17\n● − ▲ = 5\n● × ▲ = ?"
                        },
    "wn.q.34.prompt":  {
                           "fr":  "3 · 8 · 15 · 24 · 35 · ?",
                           "de":  "3 · 8 · 15 · 24 · 35 · ?",
                           "nl":  "3 · 8 · 15 · 24 · 35 · ?",
                           "es":  "3 · 8 · 15 · 24 · 35 · ?"
                       },
    "wn.q.54.prompt":  {
                           "fr":  "1 · 3 · 7 · 15 · 31 · ?",
                           "de":  "1 · 3 · 7 · 15 · 31 · ?",
                           "nl":  "1 · 3 · 7 · 15 · 31 · ?",
                           "es":  "1 · 3 · 7 · 15 · 31 · ?"
                       },
    "wn.q.53.option.1":  {
                             "fr":  "64",
                             "de":  "64",
                             "nl":  "64",
                             "es":  "64"
                         },
    "wn.q.120.hint":  {
                          "fr":  "Le nouveau montant correspond à 140 % de l\u0027original.",
                          "de":  "Der neue Betrag beträgt 140 % des Originals.",
                          "nl":  "Het nieuwe bedrag is 140% van het origineel.",
                          "es":  "La nueva cantidad es 140% del original."
                      },
    "wn.q.117.prompt":  {
                            "fr":  "Si des pompes identiques 3 remplissent 90 L en 5 minutes, combien de pompe remplit-elle par minute ?",
                            "de":  "Wenn identische Pumpen 3 90 L in 5 Minuten füllen, wie viel füllt dann eine Pumpe pro Minute?",
                            "nl":  "Als 3 identieke pompen 90 L vullen in 5 minuten, hoeveel vult één pomp dan per minuut?",
                            "es":  "Si bombas idénticas 3 llenan 90 L en minutos 5, ¿cuánto llena una bomba por minuto?"
                        },
    "wn.q.31.option.2":  {
                             "fr":  "22",
                             "de":  "22",
                             "nl":  "22",
                             "es":  "22"
                         },
    "wn.q.133.explanation":  {
                                 "fr":  "5 + 3 = 8.",
                                 "de":  "5 + 3 = 8.",
                                 "nl":  "5 + 3 = 8.",
                                 "es":  "5 + 3 = 8."
                             },
    "wn.q.136.option.3":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.152.option.2":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.141.option.3":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.155.option.2":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.93.option.3":  {
                             "fr":  "49",
                             "de":  "49",
                             "nl":  "49",
                             "es":  "49"
                         },
    "wn.q.141.prompt":  {
                            "fr":  "● + ● + ▲ = 14\n● = 4\n▲ = ?",
                            "de":  "● + ● + ▲ = 14\n● = 4\n▲ = ?",
                            "nl":  "● + ● + ▲ = 14\n● = 4\n▲ = ?",
                            "es":  "● + ● + ▲ = 14\n● = 4\n▲ = ?"
                        },
    "wn.q.14.prompt":  {
                           "fr":  "50 · 45 · 40 · 35 · ?",
                           "de":  "50 · 45 · 40 · 35 · ?",
                           "nl":  "50 · 45 · 40 · 35 · ?",
                           "es":  "50 · 45 · 40 · 35 · ?"
                       },
    "wn.q.87.option.0":  {
                             "fr":  "23",
                             "de":  "23",
                             "nl":  "23",
                             "es":  "23"
                         },
    "wn.q.45.prompt":  {
                           "fr":  "3 · 7 · 15 · 31 · 63 · ?",
                           "de":  "3 · 7 · 15 · 31 · 63 · ?",
                           "nl":  "3 · 7 · 15 · 31 · 63 · ?",
                           "es":  "3 · 7 · 15 · 31 · 63 · ?"
                       },
    "wn.q.142.option.3":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.78.option.2":  {
                             "fr":  "9",
                             "de":  "9",
                             "nl":  "9",
                             "es":  "9"
                         },
    "wn.q.9.option.0":  {
                            "fr":  "18",
                            "de":  "18",
                            "nl":  "18",
                            "es":  "18"
                        },
    "wn.q.112.prompt":  {
                            "fr":  "Un nombre divisé par 4, puis plus 9, est égal à 17. Quel est le numéro ?",
                            "de":  "Eine Zahl dividiert durch 4, dann plus 9, ergibt 17. Wie lautet die Nummer?",
                            "nl":  "Een getal gedeeld door 4, plus 9, is gelijk aan 17. Wat is het nummer?",
                            "es":  "Un número dividido por 4, luego más 9, es igual a 17. ¿Cuál es el número?"
                        },
    "wn.q.8.option.1":  {
                            "fr":  "50",
                            "de":  "50",
                            "nl":  "50",
                            "es":  "50"
                        },
    "wn.q.116.option.0":  {
                              "fr":  "$120",
                              "de":  "$120",
                              "nl":  "$120",
                              "es":  "$120"
                          },
    "wn.q.30.option.3":  {
                             "fr":  "1.5",
                             "de":  "1.5",
                             "nl":  "1.5",
                             "es":  "1.5"
                         },
    "wn.q.56.option.3":  {
                             "fr":  "62",
                             "de":  "62",
                             "nl":  "62",
                             "es":  "62"
                         },
    "wn.q.134.hint":  {
                          "fr":  "Divisez dix-huit par la valeur du triangle.",
                          "de":  "Teilen Sie achtzehn durch den Wert des Dreiecks.",
                          "nl":  "Deel achttien door de waarde van de driehoek.",
                          "es":  "Divide dieciocho por el valor del triángulo."
                      },
    "wn.q.118.option.3":  {
                              "fr":  "59",
                              "de":  "59",
                              "nl":  "59",
                              "es":  "59"
                          },
    "wn.q.17.prompt":  {
                           "fr":  "2 · 4 · 6 · 8 · ?",
                           "de":  "2 · 4 · 6 · 8 · ?",
                           "nl":  "2 · 4 · 6 · 8 · ?",
                           "es":  "2 · 4 · 6 · 8 · ?"
                       },
    "wn.q.155.hint":  {
                          "fr":  "Trouvez un cercle à partir du total combiné.",
                          "de":  "Finden Sie einen Kreis aus der Gesamtsumme.",
                          "nl":  "Zoek een cirkel uit het gecombineerde totaal.",
                          "es":  "Encuentra un círculo del total combinado."
                      },
    "wn.q.104.option.0":  {
                              "fr":  "60 km/h",
                              "de":  "60 km/h",
                              "nl":  "60 km/h",
                              "es":  "60 km/h"
                          },
    "wn.q.40.option.0":  {
                             "fr":  "1,800",
                             "de":  "1,800",
                             "nl":  "1,800",
                             "es":  "1,800"
                         },
    "wn.q.27.option.2":  {
                             "fr":  "720",
                             "de":  "720",
                             "nl":  "720",
                             "es":  "720"
                         },
    "wn.q.95.prompt":  {
                           "fr":  "Un bus a des personnes 32. 9 descend et 5 monte. Combien maintenant ?",
                           "de":  "Ein Bus hat 32 Leute. 9 aussteigen und 5 einsteigen. Wie viele jetzt?",
                           "nl":  "Een bus heeft 32-mensen. 9 stapt uit en 5 stapt in. Hoeveel nu?",
                           "es":  "Un autobús tiene personas 32. Baja 9 y sube 5. ¿Cuantos ahora?"
                       },
    "wn.q.84.option.3":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.85.option.2":  {
                             "fr":  "$16",
                             "de":  "$16",
                             "nl":  "$16",
                             "es":  "$16"
                         },
    "wn.q.150.option.1":  {
                              "fr":  "2",
                              "de":  "2",
                              "nl":  "2",
                              "es":  "2"
                          },
    "wn.q.109.option.2":  {
                              "fr":  "24",
                              "de":  "24",
                              "nl":  "24",
                              "es":  "24"
                          },
    "wn.q.35.option.2":  {
                             "fr":  "30",
                             "de":  "30",
                             "nl":  "30",
                             "es":  "30"
                         },
    "wn.q.74.option.1":  {
                             "fr":  "7",
                             "de":  "7",
                             "nl":  "7",
                             "es":  "7"
                         },
    "wn.q.14.option.3":  {
                             "fr":  "40",
                             "de":  "40",
                             "nl":  "40",
                             "es":  "40"
                         },
    "wn.q.32.explanation":  {
                                "fr":  "Les positions paires sont 4, 8, 16 ; chacun double. Le terme suivant est 16.",
                                "de":  "Gerade Positionen sind 4, 8, 16; jeder verdoppelt sich. Der nächste Begriff ist 16.",
                                "nl":  "Even posities zijn 4, 8, 16; elk verdubbelt. De volgende term is 16.",
                                "es":  "Las posiciones pares son 4, 8, 16; cada uno se duplica. El siguiente término es 16."
                            },
    "wn.q.63.option.2":  {
                             "fr":  "9",
                             "de":  "9",
                             "nl":  "9",
                             "es":  "9"
                         },
    "wn.q.2.option.2":  {
                            "fr":  "18",
                            "de":  "18",
                            "nl":  "18",
                            "es":  "18"
                        },
    "wn.q.144.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.126.option.1":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.23.explanation":  {
                                "fr":  "Les écarts sont +1, +2, +3, +4 ; ajoutez ensuite 5 pour obtenir 18.",
                                "de":  "Die Lücken sind +1, +2, +3, +4; Als nächstes fügen Sie 5 hinzu, um 18 zu erhalten.",
                                "nl":  "De gaten zijn +1, +2, +3, +4; voeg vervolgens 5 toe om 18 te krijgen.",
                                "es":  "Los espacios son +1, +2, +3, +4; Luego agregue 5 para obtener 18."
                            },
    "wn.q.32.option.0":  {
                             "fr":  "6",
                             "de":  "6",
                             "nl":  "6",
                             "es":  "6"
                         },
    "wn.q.128.option.2":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.10.hint":  {
                         "fr":  "Ce sont des multiples du premier nombre.",
                         "de":  "Dies sind Vielfache der ersten Zahl.",
                         "nl":  "Dit zijn veelvouden van het eerste getal.",
                         "es":  "Estos son múltiplos del primer número."
                     },
    "wn.q.77.hint":  {
                         "fr":  "Faites d\u0027abord les parenthèses.",
                         "de":  "Machen Sie zuerst die Klammern.",
                         "nl":  "Maak eerst de haakjes.",
                         "es":  "Haz los paréntesis primero."
                     },
    "wn.q.98.option.3":  {
                             "fr":  "108",
                             "de":  "108",
                             "nl":  "108",
                             "es":  "108"
                         },
    "wn.q.180.hint":  {
                          "fr":  "Trouvez le cercle avant de faire les opérations finales.",
                          "de":  "Finden Sie den Kreis, bevor Sie die letzten Operationen durchführen.",
                          "nl":  "Zoek de cirkel voordat u de laatste bewerkingen uitvoert.",
                          "es":  "Encuentra el círculo antes de hacer las operaciones finales."
                      },
    "wn.q.21.option.1":  {
                             "fr":  "36",
                             "de":  "36",
                             "nl":  "36",
                             "es":  "36"
                         },
    "wn.q.17.explanation":  {
                                "fr":  "Le nombre pair suivant après 8 est 10.",
                                "de":  "Die nächste gerade Zahl nach 8 ist 10.",
                                "nl":  "Het volgende even getal na 8 is 10.",
                                "es":  "El siguiente número par después de 8 es 10."
                            },
    "wn.q.86.hint":  {
                         "fr":  "Évaluez chaque exposant avant de l’ajouter.",
                         "de":  "Bewerten Sie jeden Exponenten, bevor Sie ihn hinzufügen.",
                         "nl":  "Evalueer elke exponent voordat u deze optelt.",
                         "es":  "Evalúa cada exponente antes de sumar."
                     },
    "wn.q.145.prompt":  {
                            "fr":  "● + ● + ● = 21\n▲ + ● = 11\n▲ = ?",
                            "de":  "● + ● + ● = 21\n▲ + ● = 11\n▲ = ?",
                            "nl":  "● + ● + ● = 21\n▲ + ● = 11\n▲ = ?",
                            "es":  "● + ● + ● = 21\n▲ + ● = 11\n▲ = ?"
                        },
    "wn.q.153.prompt":  {
                            "fr":  "● + ● + ▲ = 23\n● = ▲ + 1\n▲ = ?",
                            "de":  "● + ● + ▲ = 23\n● = ▲ + 1\n▲ = ?",
                            "nl":  "● + ● + ▲ = 23\n● = ▲ + 1\n▲ = ?",
                            "es":  "● + ● + ▲ = 23\n● = ▲ + 1\n▲ = ?"
                        },
    "wn.q.154.option.1":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.20.option.3":  {
                             "fr":  "66",
                             "de":  "66",
                             "nl":  "66",
                             "es":  "66"
                         },
    "wn.q.144.option.2":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.150.option.0":  {
                              "fr":  "1",
                              "de":  "1",
                              "nl":  "1",
                              "es":  "1"
                          },
    "wn.category.visual":  {
                               "fr":  "Mathématiques visuelles",
                               "de":  "Visuelle Mathematik",
                               "nl":  "Visuele wiskunde",
                               "es":  "Matemáticas visuales"
                           },
    "wn.q.125.option.3":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.167.prompt":  {
                            "fr":  "◆ + ◆ = 18\n● = ◆ ÷ 3\n◆ + ● × 2 = ?",
                            "de":  "◆ + ◆ = 18\n● = ◆ ÷ 3\n◆ + ● × 2 = ?",
                            "nl":  "◆ + ◆ = 18\n● = ◆ ÷ 3\n◆ + ● × 2 = ?",
                            "es":  "◆ + ◆ = 18\n● = ◆ ÷ 3\n◆ + ● × 2 = ?"
                        },
    "wn.q.107.prompt":  {
                            "fr":  "Quelle est la moyenne de 12, 18, 21 et 29 ?",
                            "de":  "Was bedeuten 12, 18, 21 und 29?",
                            "nl":  "Wat is het gemiddelde van 12, 18, 21 en 29?",
                            "es":  "¿Cuál es la media de 12, 18, 21 y 29?"
                        },
    "wn.q.43.explanation":  {
                                "fr":  "Les écarts sont 3, 6, 10, 15 ; le prochain écart est 21, ce qui donne 56.",
                                "de":  "Die Lücken sind 3, 6, 10, 15; Die nächste Lücke ist 21, was 56 ergibt.",
                                "nl":  "De gaten zijn 3, 6, 10, 15; het volgende gat is 21, wat 56 oplevert.",
                                "es":  "Los espacios son 3, 6, 10, 15; El siguiente espacio es 21, lo que da 56."
                            },
    "wn.q.115.explanation":  {
                                 "fr":  "324 − 36 = 288; 288 ÷ 12 = 24.",
                                 "de":  "324 − 36 = 288; 288 ÷ 12 = 24.",
                                 "nl":  "324 − 36 = 288; 288 ÷ 12 = 24.",
                                 "es":  "324 − 36 = 288; 288 ÷ 12 = 24."
                             },
    "wn.q.22.option.2":  {
                             "fr":  "125",
                             "de":  "125",
                             "nl":  "125",
                             "es":  "125"
                         },
    "wn.q.93.prompt":  {
                           "fr":  "Un carré a un côté 7. Quel est son périmètre ?",
                           "de":  "Ein Quadrat hat die Seite 7. Was ist sein Umfang?",
                           "nl":  "Een vierkant heeft zijde 7. Wat is de omtrek ervan?",
                           "es":  "Un cuadrado tiene lado 7. ¿Cuál es su perímetro?"
                       },
    "wn.q.159.explanation":  {
                                 "fr":  "● = 22 − 14 = 8; 8 ÷ 2 = 4.",
                                 "de":  "● = 22 − 14 = 8; 8 ÷ 2 = 4.",
                                 "nl":  "● = 22 − 14 = 8; 8 ÷ 2 = 4.",
                                 "es":  "● = 22 − 14 = 8; 8 ÷ 2 = 4."
                             },
    "wn.q.48.hint":  {
                         "fr":  "Les écarts augmentent de carrés consécutifs.",
                         "de":  "Die Lücken vergrößern sich um aufeinanderfolgende Quadrate.",
                         "nl":  "De gaten groeien met opeenvolgende vierkanten.",
                         "es":  "Los huecos crecen en casillas consecutivas."
                     },
    "wn.q.170.hint":  {
                          "fr":  "Remplacez le triangle par un cercle plus deux.",
                          "de":  "Ersetzen Sie das Dreieck durch Kreis plus zwei.",
                          "nl":  "Vervang cirkel plus twee voor de driehoek.",
                          "es":  "Sustituye el triángulo por un círculo más dos."
                      },
    "wn.q.52.option.3":  {
                             "fr":  "72",
                             "de":  "72",
                             "nl":  "72",
                             "es":  "72"
                         },
    "wn.q.58.option.3":  {
                             "fr":  "74",
                             "de":  "74",
                             "nl":  "74",
                             "es":  "74"
                         },
    "wn.q.103.prompt":  {
                            "fr":  "Résoudre : 3(x − 2) = 21. Qu\u0027est-ce que x ?",
                            "de":  "Lösen Sie: 3(x − 2) = 21. Was ist x?",
                            "nl":  "Oplossen: 3(x − 2) = 21. Wat is x?",
                            "es":  "Resuelva: 3(x − 2) = 21. ¿Qué es x?"
                        },
    "wn.q.86.option.1":  {
                             "fr":  "17",
                             "de":  "17",
                             "nl":  "17",
                             "es":  "17"
                         },
    "wn.q.100.prompt":  {
                            "fr":  "Qu\u0027est-ce que 64 ÷ 8 + 4² ?",
                            "de":  "Was ist 64 ÷ 8 + 4²?",
                            "nl":  "Wat is 64 ÷ 8 + 4²?",
                            "es":  "¿Qué es 64 ÷ 8 + 4²?"
                        },
    "wn.q.172.option.3":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.172.explanation":  {
                                 "fr":  "● = 6, donc ▲ = 5 et 2 × 5 = 10.",
                                 "de":  "● = 6, also ▲ = 5 und 2 × 5 = 10.",
                                 "nl":  "● = 6, dus ▲ = 5 en 2 × 5 = 10.",
                                 "es":  "● = 6, entonces ▲ = 5 y 2 × 5 = 10."
                             },
    "wn.q.132.option.2":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.78.hint":  {
                         "fr":  "La moitié signifie diviser par deux.",
                         "de":  "Halb bedeutet, durch zwei teilen.",
                         "nl":  "Half betekent delen door twee.",
                         "es":  "La mitad significa dividir por dos."
                     },
    "wn.q.12.option.3":  {
                             "fr":  "24",
                             "de":  "24",
                             "nl":  "24",
                             "es":  "24"
                         },
    "wn.q.116.option.2":  {
                              "fr":  "$140",
                              "de":  "$140",
                              "nl":  "$140",
                              "es":  "$140"
                          },
    "wn.q.116.hint":  {
                          "fr":  "Appliquez le pourcentage de remise, puis soustrayez le coupon.",
                          "de":  "Wenden Sie den prozentualen Rabatt an und ziehen Sie dann den Coupon ab.",
                          "nl":  "Pas het kortingspercentage toe en trek vervolgens de coupon af.",
                          "es":  "Aplique el porcentaje de descuento y luego reste el cupón."
                      },
    "wn.q.40.explanation":  {
                                "fr":  "Multipliez par 3, 4, 5, 6 ; multipliez ensuite par 7 : 360 × 7 = 2,520.",
                                "de":  "Multiplizieren Sie mit 3, 4, 5, 6; Nächste Multiplikation mit 7: 360 × 7 = 2,520.",
                                "nl":  "Vermenigvuldig met 3, 4, 5, 6; vermenigvuldig vervolgens met 7: 360 × 7 = 2,520.",
                                "es":  "Multiplicar por 3, 4, 5, 6; luego multiplica por 7: 360 × 7 = 2,520."
                            },
    "wn.q.78.explanation":  {
                                "fr":  "18 ÷ 2 = 9 les oiseaux restent.",
                                "de":  "18 ÷ 2 = 9 Vögel bleiben.",
                                "nl":  "18 ÷ 2 = 9 vogels blijven.",
                                "es":  "18 ÷ 2 = 9 los pájaros se quedan."
                            },
    "wn.q.39.option.2":  {
                             "fr":  "44",
                             "de":  "44",
                             "nl":  "44",
                             "es":  "44"
                         },
    "wn.q.133.hint":  {
                          "fr":  "Ajoutez-en trois.",
                          "de":  "Fügen Sie drei wieder hinzu.",
                          "nl":  "Voeg er drie terug toe.",
                          "es":  "Añade tres atrás."
                      },
    "wn.q.35.explanation":  {
                                "fr":  "Les positions impaires sont 2, 4, 6 ; les positions paires sont 10, 20, donc ensuite 30.",
                                "de":  "Ungerade Positionen sind 2, 4, 6; gerade Positionen sind 10, 20, als nächstes folgt 30.",
                                "nl":  "Oneven posities zijn 2, 4, 6; even posities zijn 10, 20, dus de volgende is 30.",
                                "es":  "Las posiciones impares son 2, 4, 6; Las posiciones pares son 10, 20, por lo que la siguiente es 30."
                            },
    "wn.q.97.option.0":  {
                             "fr":  "400 g",
                             "de":  "400 g",
                             "nl":  "400 g",
                             "es":  "400 g"
                         },
    "wn.q.26.option.2":  {
                             "fr":  "97",
                             "de":  "97",
                             "nl":  "97",
                             "es":  "97"
                         },
    "wn.q.112.option.3":  {
                              "fr":  "36",
                              "de":  "36",
                              "nl":  "36",
                              "es":  "36"
                          },
    "wn.q.39.option.0":  {
                             "fr":  "40",
                             "de":  "40",
                             "nl":  "40",
                             "es":  "40"
                         },
    "wn.q.62.option.0":  {
                             "fr":  "$11",
                             "de":  "$11",
                             "nl":  "$11",
                             "es":  "$11"
                         },
    "wn.q.127.explanation":  {
                                 "fr":  "13 − 4 = 9.",
                                 "de":  "13 − 4 = 9.",
                                 "nl":  "13 − 4 = 9.",
                                 "es":  "13 − 4 = 9."
                             },
    "wn.q.147.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.37.hint":  {
                         "fr":  "Regardez les écarts qui se creusent.",
                         "de":  "Schauen Sie sich die wachsenden Lücken an.",
                         "nl":  "Kijk naar de toenemende kloof.",
                         "es":  "Mire las crecientes brechas."
                     },
    "wn.q.175.hint":  {
                          "fr":  "Remplacez deux fois le triangle plus un.",
                          "de":  "Ersetzen Sie das Doppelte des Dreiecks plus eins.",
                          "nl":  "Vervang tweemaal de driehoek plus één.",
                          "es":  "Sustituye el doble del triángulo más uno."
                      },
    "wn.q.45.option.0":  {
                             "fr":  "95",
                             "de":  "95",
                             "nl":  "95",
                             "es":  "95"
                         },
    "wn.q.33.option.2":  {
                             "fr":  "81",
                             "de":  "81",
                             "nl":  "81",
                             "es":  "81"
                         },
    "wn.q.18.option.3":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.73.hint":  {
                         "fr":  "Trouvez d’abord le coût total.",
                         "de":  "Ermitteln Sie zunächst die Gesamtkosten.",
                         "nl":  "Zoek eerst de totale kosten.",
                         "es":  "Primero encuentre el costo total."
                     },
    "wn.q.4.explanation":  {
                               "fr":  "Soustrayez 5 à chaque fois : 15 − 5 = 10.",
                               "de":  "Subtrahieren Sie jedes Mal 5: 15 − 5 = 10.",
                               "nl":  "Trek 5 elke keer af: 15 − 5 = 10.",
                               "es":  "Resta 5 cada vez: 15 − 5 = 10."
                           },
    "wn.q.89.option.2":  {
                             "fr":  "8:10",
                             "de":  "8:10",
                             "nl":  "8:10",
                             "es":  "8:10"
                         },
    "wn.q.55.hint":  {
                         "fr":  "Les différences doublent.",
                         "de":  "Die Unterschiede verdoppeln sich.",
                         "nl":  "De verschillen verdubbelen.",
                         "es":  "Las diferencias se duplican."
                     },
    "wn.q.116.prompt":  {
                            "fr":  "Un téléphone bénéficie d\u0027une réduction 30 % sur $200, puis un coupon $10 est appliqué. Prix?",
                            "de":  "Auf ein Telefon gibt es 30 % Rabatt auf $200, dann wird ein Gutschein über $10 angewendet. Preis?",
                            "nl":  "Op een telefoon is 30% korting op $200, waarna een kortingsbon van $10 wordt toegepast. Prijs?",
                            "es":  "Un teléfono tiene un 30% de descuento de $200, luego se aplica un cupón de $10. ¿Precio?"
                        },
    "wn.q.88.hint":  {
                         "fr":  "Les parenthèses forment un diviseur.",
                         "de":  "Die Klammern ergeben einen Teiler.",
                         "nl":  "De haakjes vormen één deler.",
                         "es":  "Los paréntesis forman un divisor."
                     },
    "wn.q.13.option.1":  {
                             "fr":  "126",
                             "de":  "126",
                             "nl":  "126",
                             "es":  "126"
                         },
    "wn.q.40.option.2":  {
                             "fr":  "2,520",
                             "de":  "2,520",
                             "nl":  "2,520",
                             "es":  "2,520"
                         },
    "wn.q.172.hint":  {
                          "fr":  "Utilisez la racine entière positive.",
                          "de":  "Verwenden Sie die positive ganzzahlige Wurzel.",
                          "nl":  "Gebruik de positieve geheel getalwortel.",
                          "es":  "Utilice la raíz de números enteros positivos."
                      },
    "wn.q.97.option.1":  {
                             "fr":  "450 g",
                             "de":  "450 g",
                             "nl":  "450 g",
                             "es":  "450 g"
                         },
    "wn.q.16.hint":  {
                         "fr":  "Le même petit saut se répète.",
                         "de":  "Der gleiche kleine Sprung wiederholt sich.",
                         "nl":  "Dezelfde kleine sprong herhaalt zich.",
                         "es":  "Se repite el mismo pequeño salto."
                     },
    "wn.q.13.option.3":  {
                             "fr":  "216",
                             "de":  "216",
                             "nl":  "216",
                             "es":  "216"
                         },
    "wn.q.70.hint":  {
                         "fr":  "Le petit 2 signifie multiplier 3 par lui-même.",
                         "de":  "Das kleine 2 bedeutet, dass 3 mit sich selbst multipliziert wird.",
                         "nl":  "De kleine 2 betekent dat je 3 met zichzelf vermenigvuldigt.",
                         "es":  "El pequeño 2 significa multiplicar 3 por sí mismo."
                     },
    "wn.q.65.option.3":  {
                             "fr":  "24",
                             "de":  "24",
                             "nl":  "24",
                             "es":  "24"
                         },
    "wn.q.116.option.1":  {
                              "fr":  "$130",
                              "de":  "$130",
                              "nl":  "$130",
                              "es":  "$130"
                          },
    "wn.q.124.option.3":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.12.prompt":  {
                           "fr":  "4 · 8 · 12 · 16 · ?",
                           "de":  "4 · 8 · 12 · 16 · ?",
                           "nl":  "4 · 8 · 12 · 16 · ?",
                           "es":  "4 · 8 · 12 · 16 · ?"
                       },
    "wn.q.49.option.2":  {
                             "fr":  "95",
                             "de":  "95",
                             "nl":  "95",
                             "es":  "95"
                         },
    "wn.q.3.option.0":  {
                            "fr":  "20",
                            "de":  "20",
                            "nl":  "20",
                            "es":  "20"
                        },
    "wn.q.118.hint":  {
                          "fr":  "Les puissances et les parenthèses précèdent la multiplication et l\u0027addition.",
                          "de":  "Potenzen und Klammern stehen vor Multiplikation und Addition.",
                          "nl":  "Machten en haakjes komen vóór vermenigvuldigen en optellen.",
                          "es":  "Las potencias y los paréntesis van antes de la multiplicación y la suma."
                      },
    "wn.q.54.option.3":  {
                             "fr":  "64",
                             "de":  "64",
                             "nl":  "64",
                             "es":  "64"
                         },
    "wn.q.124.option.2":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.47.explanation":  {
                                "fr":  "Il s\u0027agit de n²(n+1) : 1²·2, 2²·3, …, 5²·6 ; suivant 6²·7 = 252.",
                                "de":  "Dies sind n²(n+1): 1²·2, 2²·3, …, 5²·6; nächster 6²·7 = 252.",
                                "nl":  "Dit zijn n²(n+1): 1²·2, 2²·3, …, ZXQHOUD8QXZZXQHOUD7QXZZXQHOUD6QXZZXQHOUD5QXZ; volgende 6²·7 = 252.",
                                "es":  "Estos son n²(n+1): 1²·2, 2²·3,…, 5²·6; siguiente 6²·7 = 252."
                            },
    "wn.q.121.option.3":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.29.option.0":  {
                             "fr":  "15",
                             "de":  "15",
                             "nl":  "15",
                             "es":  "15"
                         },
    "wn.q.137.explanation":  {
                                 "fr":  "9 ÷ 3 = 3.",
                                 "de":  "9 ÷ 3 = 3.",
                                 "nl":  "9 ÷ 3 = 3.",
                                 "es":  "9 ÷ 3 = 3."
                             },
    "wn.q.64.option.1":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.91.option.1":  {
                             "fr":  "$17",
                             "de":  "$17",
                             "nl":  "$17",
                             "es":  "$17"
                         },
    "wn.q.85.explanation":  {
                                "fr":  "$2 × 6 = $12; $12 + $4 = $16.",
                                "de":  "$2 × 6 = $12; $12 + $4 = $16.",
                                "nl":  "$2 × 6 = $12; $12 + $4 = $16.",
                                "es":  "$2 × 6 = $12; $12 + $4 = $16."
                            },
    "wn.q.1.prompt":  {
                          "fr":  "2 · 4 · 8 · 16 · ?",
                          "de":  "2 · 4 · 8 · 16 · ?",
                          "nl":  "2 · 4 · 8 · 16 · ?",
                          "es":  "2 · 4 · 8 · 16 · ?"
                      },
    "wn.q.76.option.2":  {
                             "fr":  "8:00",
                             "de":  "8:00",
                             "nl":  "8:00",
                             "es":  "8:00"
                         },
    "wn.q.102.option.3":  {
                              "fr":  "$100",
                              "de":  "$100",
                              "nl":  "$100",
                              "es":  "$100"
                          },
    "wn.q.3.option.3":  {
                            "fr":  "36",
                            "de":  "36",
                            "nl":  "36",
                            "es":  "36"
                        },
    "wn.q.104.hint":  {
                          "fr":  "La vitesse moyenne est la distance divisée par le temps.",
                          "de":  "Die Durchschnittsgeschwindigkeit ist die zurückgelegte Strecke geteilt durch die Zeit.",
                          "nl":  "De gemiddelde snelheid is de afstand gedeeld door de tijd.",
                          "es":  "La velocidad promedio es la distancia dividida por el tiempo."
                      },
    "wn.q.98.option.0":  {
                             "fr":  "24",
                             "de":  "24",
                             "nl":  "24",
                             "es":  "24"
                         },
    "wn.q.22.option.0":  {
                             "fr":  "100",
                             "de":  "100",
                             "nl":  "100",
                             "es":  "100"
                         },
    "wn.q.37.option.2":  {
                             "fr":  "91",
                             "de":  "91",
                             "nl":  "91",
                             "es":  "91"
                         },
    "wn.q.34.option.2":  {
                             "fr":  "48",
                             "de":  "48",
                             "nl":  "48",
                             "es":  "48"
                         },
    "wn.q.66.explanation":  {
                                "fr":  "4 ÷ 2 = 2, puis 6 + 2 = 8.",
                                "de":  "4 ÷ 2 = 2, dann 6 + 2 = 8.",
                                "nl":  "4 ÷ 2 = 2, dan 6 + 2 = 8.",
                                "es":  "4 ÷ 2 = 2, luego 6 + 2 = 8."
                            },
    "wn.q.140.option.3":  {
                              "fr":  "11",
                              "de":  "11",
                              "nl":  "11",
                              "es":  "11"
                          },
    "wn.q.7.explanation":  {
                               "fr":  "Les étapes sont +1, +2, +3, +4 ; le suivant est +5, donnant 16.",
                               "de":  "Die Schritte sind +1, +2, +3, +4; Als nächstes kommt +5, was 16 ergibt.",
                               "nl":  "De stappen zijn +1, +2, +3, +4; het volgende is +5, wat 16 oplevert.",
                               "es":  "Los pasos son +1, +2, +3, +4; el siguiente es +5, dando 16."
                           },
    "wn.q.119.option.2":  {
                              "fr":  "$28",
                              "de":  "$28",
                              "nl":  "$28",
                              "es":  "$28"
                          },
    "wn.q.108.option.3":  {
                              "fr":  "$58.50",
                              "de":  "$58.50",
                              "nl":  "$58.50",
                              "es":  "$58.50"
                          },
    "wn.q.138.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.178.option.3":  {
                              "fr":  "49",
                              "de":  "49",
                              "nl":  "49",
                              "es":  "49"
                          },
    "wn.q.133.prompt":  {
                            "fr":  "☂ − 3 = 5\n☂ = ?",
                            "de":  "☂ − 3 = 5\n☂ = ?",
                            "nl":  "☂ − 3 = 5\n☂ = ?",
                            "es":  "☂ − 3 = 5\n☂ = ?"
                        },
    "wn.q.160.prompt":  {
                            "fr":  "3 × cercle = triangle + 4\ncercle = 6\ntriangle − cercle = ?",
                            "de":  "3 × Kreis = Dreieck + 4\nKreis = 6\nDreieck − Kreis = ?",
                            "nl":  "3 × cirkel = driehoek + 4\ncirkel = 6\ndriehoek − cirkel = ?",
                            "es":  "3 × círculo = triángulo + 4\ncírculo = 6\ntriángulo − círculo =?"
                        },
    "wn.q.17.option.3":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.18.option.1":  {
                             "fr":  "4",
                             "de":  "4",
                             "nl":  "4",
                             "es":  "4"
                         },
    "wn.q.49.option.1":  {
                             "fr":  "94",
                             "de":  "94",
                             "nl":  "94",
                             "es":  "94"
                         },
    "wn.q.29.hint":  {
                         "fr":  "Les écarts augmentent un à un.",
                         "de":  "Die Lücken vergrößern sich nach und nach.",
                         "nl":  "De gaten worden één voor één groter.",
                         "es":  "Las brechas aumentan una a la vez."
                     },
    "wn.q.158.explanation":  {
                                 "fr":  "● = 8, ▲ = 3; 8 + 3 = 11.",
                                 "de":  "● = 8, ▲ = 3; 8 + 3 = 11.",
                                 "nl":  "● = 8, ▲ = 3; 8 + 3 = 11.",
                                 "es":  "● = 8, ▲ = 3; 8 + 3 = 11."
                             },
    "wn.q.29.prompt":  {
                           "fr":  "2 · 3 · 5 · 8 · 12 · ?",
                           "de":  "2 · 3 · 5 · 8 · 12 · ?",
                           "nl":  "2 · 3 · 5 · 8 · 12 · ?",
                           "es":  "2 · 3 · 5 · 8 · 12 · ?"
                       },
    "wn.q.128.option.0":  {
                              "fr":  "2",
                              "de":  "2",
                              "nl":  "2",
                              "es":  "2"
                          },
    "wn.q.25.option.0":  {
                             "fr":  "18",
                             "de":  "18",
                             "nl":  "18",
                             "es":  "18"
                         },
    "wn.q.125.explanation":  {
                                 "fr":  "11 − 3 = 8; 8 ÷ 2 = 4.",
                                 "de":  "11 − 3 = 8; 8 ÷ 2 = 4.",
                                 "nl":  "11 − 3 = 8; 8 ÷ 2 = 4.",
                                 "es":  "11 − 3 = 8; 8 ÷ 2 = 4."
                             },
    "wn.q.136.hint":  {
                          "fr":  "Comptez cinq cercles, chacun valant deux.",
                          "de":  "Zählen Sie fünf Kreise, jeder ist zwei wert.",
                          "nl":  "Tel vijf cirkels, elk twee waard.",
                          "es":  "Cuente cinco círculos, cada uno de los cuales vale dos."
                      },
    "wn.q.130.explanation":  {
                                 "fr":  "Le carré est 7, donc 7 + 1 = 8.",
                                 "de":  "Das Quadrat ist 7, also 7 + 1 = 8.",
                                 "nl":  "Het kwadraat is 7, dus 7 + 1 = 8.",
                                 "es":  "El cuadrado es 7, entonces 7 + 1 = 8."
                             },
    "wn.q.38.explanation":  {
                                "fr":  "Ajoutez 1, 3, 5, 7 ; ajoutez ensuite 9 pour obtenir 27.",
                                "de":  "Fügen Sie 1, 3, 5, 7 hinzu; Als nächstes fügen Sie 9 hinzu, um 27 zu erhalten.",
                                "nl":  "1, 3, 5, 7 toevoegen; voeg vervolgens 9 toe om 27 te krijgen.",
                                "es":  "Agregue 1, 3, 5, 7; Luego agregue 9 para obtener 27."
                            },
    "wn.q.19.option.0":  {
                             "fr":  "54",
                             "de":  "54",
                             "nl":  "54",
                             "es":  "54"
                         },
    "wn.q.168.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.162.prompt":  {
                            "fr":  "● + ▲ + ■ = 18\n● = 2▲\n■ = ▲ + 2\n▲ = ?",
                            "de":  "● + ▲ + ■ = 18\n● = 2▲\n■ = ▲ + 2\n▲ = ?",
                            "nl":  "● + ▲ + ■ = 18\n● = 2▲\n■ = ▲ + 2\n▲ = ?",
                            "es":  "● + ▲ + ■ = 18\n● = 2▲\n■ = ▲ + 2\n▲ = ?"
                        },
    "wn.q.131.option.3":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.30.option.1":  {
                             "fr":  "1",
                             "de":  "1",
                             "nl":  "1",
                             "es":  "1"
                         },
    "wn.q.56.option.1":  {
                             "fr":  "56",
                             "de":  "56",
                             "nl":  "56",
                             "es":  "56"
                         },
    "wn.q.24.option.0":  {
                             "fr":  "8",
                             "de":  "8",
                             "nl":  "8",
                             "es":  "8"
                         },
    "wn.q.82.option.3":  {
                             "fr":  "$35",
                             "de":  "$35",
                             "nl":  "$35",
                             "es":  "$35"
                         },
    "wn.q.147.option.2":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.103.explanation":  {
                                 "fr":  "Diviser par 3 : x − 2 = 7 ; ajoutez 2, donc x = 9.",
                                 "de":  "Division durch 3: x − 2 = 7; füge 2 hinzu, also x = 9.",
                                 "nl":  "Delen door 3: x − 2 = 7; voeg 2 toe, dus x = 9.",
                                 "es":  "Dividir por 3: x − 2 = 7; agregue 2, entonces x = 9."
                             },
    "wn.q.7.option.0":  {
                            "fr":  "15",
                            "de":  "15",
                            "nl":  "15",
                            "es":  "15"
                        },
    "wn.q.98.option.1":  {
                             "fr":  "36",
                             "de":  "36",
                             "nl":  "36",
                             "es":  "36"
                         },
    "wn.q.150.option.3":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.87.hint":  {
                         "fr":  "Doublez d’abord, puis ajoutez-en sept.",
                         "de":  "Zuerst verdoppeln, dann sieben addieren.",
                         "nl":  "Verdubbel eerst en voeg dan zeven toe.",
                         "es":  "Primero duplica y luego suma siete."
                     },
    "wn.q.36.option.0":  {
                             "fr":  "36",
                             "de":  "36",
                             "nl":  "36",
                             "es":  "36"
                         },
    "wn.q.141.explanation":  {
                                 "fr":  "4 + 4 + ▲ = 14, donc ▲ = 6.",
                                 "de":  "4 + 4 + ▲ = 14, also ▲ = 6.",
                                 "nl":  "4 + 4 + ▲ = 14, dus ▲ = 6.",
                                 "es":  "4 + 4 + ▲ = 14, entonces ▲ = 6."
                             },
    "wn.q.9.option.3":  {
                            "fr":  "25",
                            "de":  "25",
                            "nl":  "25",
                            "es":  "25"
                        },
    "wn.q.180.explanation":  {
                                 "fr":  "● = 4 + 3 = 7; 7 × 3 − 4 = 17.",
                                 "de":  "● = 4 + 3 = 7; 7 × 3 − 4 = 17.",
                                 "nl":  "● = 4 + 3 = 7; 7 × 3 − 4 = 17.",
                                 "es":  "● = 4 + 3 = 7; 7 × 3 − 4 = 17."
                             },
    "wn.q.159.option.1":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.168.prompt":  {
                            "fr":  "● + ▲ = 14\n▲ + ■ = 11\n● + ■ = 13\n● = ?",
                            "de":  "● + ▲ = 14\n▲ + ■ = 11\n● + ■ = 13\n● = ?",
                            "nl":  "● + ▲ = 14\n▲ + ■ = 11\n● + ■ = 13\n● = ?",
                            "es":  "● + ▲ = 14\n▲ + ■ = 11\n● + ■ = 13\n● = ?"
                        },
    "wn.q.135.hint":  {
                          "fr":  "La même chose est ajoutée des deux côtés.",
                          "de":  "Auf beiden Seiten wird das Gleiche hinzugefügt.",
                          "nl":  "Aan beide kanten wordt hetzelfde toegevoegd.",
                          "es":  "Se añade lo mismo a ambos lados."
                      },
    "wn.q.92.explanation":  {
                                "fr":  "28 ÷ 4 = 7; 7 × 3 = 21.",
                                "de":  "28 ÷ 4 = 7; 7 × 3 = 21.",
                                "nl":  "28 ÷ 4 = 7; 7 × 3 = 21.",
                                "es":  "28 ÷ 4 = 7; 7 × 3 = 21."
                            },
    "wn.q.120.option.2":  {
                              "fr":  "75",
                              "de":  "75",
                              "nl":  "75",
                              "es":  "75"
                          },
    "wn.q.38.option.2":  {
                             "fr":  "27",
                             "de":  "27",
                             "nl":  "27",
                             "es":  "27"
                         },
    "wn.q.128.explanation":  {
                                 "fr":  "6 − 2 = 4, donc le triangle est 4.",
                                 "de":  "6 − 2 = 4, das Dreieck ist also 4.",
                                 "nl":  "6 − 2 = 4, dus de driehoek is 4.",
                                 "es":  "6 − 2 = 4, entonces el triángulo es 4."
                             },
    "wn.q.170.option.0":  {
                              "fr":  "48",
                              "de":  "48",
                              "nl":  "48",
                              "es":  "48"
                          },
    "wn.q.72.hint":  {
                         "fr":  "Divisez avant d\u0027ajouter.",
                         "de":  "Vor dem Hinzufügen teilen.",
                         "nl":  "Verdeel voordat u toevoegt.",
                         "es":  "Divida antes de agregar."
                     },
    "wn.q.115.option.3":  {
                              "fr":  "30",
                              "de":  "30",
                              "nl":  "30",
                              "es":  "30"
                          },
    "wn.q.5.prompt":  {
                          "fr":  "3 · 6 · 12 · 24 · ?",
                          "de":  "3 · 6 · 12 · 24 · ?",
                          "nl":  "3 · 6 · 12 · 24 · ?",
                          "es":  "3 · 6 · 12 · 24 · ?"
                      },
    "wn.q.14.explanation":  {
                                "fr":  "Soustrayez 5 de 35 pour obtenir 30.",
                                "de":  "Subtrahieren Sie 5 von 35, um 30 zu erhalten.",
                                "nl":  "Trek 5 af van 35 om 30 te krijgen.",
                                "es":  "Resta 5 de 35 para obtener 30."
                            },
    "wn.q.166.prompt":  {
                            "fr":  "● + ▲ = 20\n● = 3▲ − 4\n● − ▲ = ?",
                            "de":  "● + ▲ = 20\n● = 3▲ − 4\n● − ▲ = ?",
                            "nl":  "● + ▲ = 20\n● = 3▲ − 4\n● − ▲ = ?",
                            "es":  "● + ▲ = 20\n● = 3▲ − 4\n● − ▲ = ?"
                        },
    "wn.q.20.option.1":  {
                             "fr":  "55",
                             "de":  "55",
                             "nl":  "55",
                             "es":  "55"
                         },
    "wn.q.66.option.3":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.119.option.1":  {
                              "fr":  "$26",
                              "de":  "$26",
                              "nl":  "$26",
                              "es":  "$26"
                          },
    "wn.q.75.explanation":  {
                                "fr":  "24 ÷ 6 = 4, puis 4 × 2 = 8.",
                                "de":  "24 ÷ 6 = 4, dann 4 × 2 = 8.",
                                "nl":  "24 ÷ 6 = 4, dan 4 × 2 = 8.",
                                "es":  "24 ÷ 6 = 4, luego 4 × 2 = 8."
                            },
    "wn.q.173.hint":  {
                          "fr":  "La paire de facteurs de 56 doit s\u0027ajouter à 15.",
                          "de":  "Das Faktorenpaar 56 muss zu 15 addiert werden.",
                          "nl":  "Het paar factoren 56 moet worden opgeteld bij 15.",
                          "es":  "El par de factores de 56 debe sumarse a 15."
                      },
    "wn.q.137.option.1":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.52.option.0":  {
                             "fr":  "60",
                             "de":  "60",
                             "nl":  "60",
                             "es":  "60"
                         },
    "wn.q.43.option.2":  {
                             "fr":  "56",
                             "de":  "56",
                             "nl":  "56",
                             "es":  "56"
                         },
    "wn.q.104.option.1":  {
                              "fr":  "70 km/h",
                              "de":  "70 km/h",
                              "nl":  "70 km/h",
                              "es":  "70 km/h"
                          },
    "wn.q.179.option.0":  {
                              "fr":  "25",
                              "de":  "25",
                              "nl":  "25",
                              "es":  "25"
                          },
    "wn.q.164.hint":  {
                          "fr":  "Remplacez le triangle plus deux pour chaque cercle.",
                          "de":  "Ersetzen Sie jeden Kreis durch ein Dreieck plus zwei.",
                          "nl":  "Vervang driehoek plus twee voor elke cirkel.",
                          "es":  "Sustituye triángulo más dos por cada círculo."
                      },
    "wn.q.107.option.1":  {
                              "fr":  "19",
                              "de":  "19",
                              "nl":  "19",
                              "es":  "19"
                          },
    "wn.q.68.explanation":  {
                                "fr":  "5 × 2 = 10, puis 20 − 10 = 10.",
                                "de":  "5 × 2 = 10, dann 20 − 10 = 10.",
                                "nl":  "5 × 2 = 10, dan 20 − 10 = 10.",
                                "es":  "5 × 2 = 10, luego 20 − 10 = 10."
                            },
    "wn.q.76.hint":  {
                         "fr":  "Avancez de quatre heures, et non de quatre chiffres sur le cadran de l\u0027horloge.",
                         "de":  "Bewegen Sie sich vier Stunden vorwärts, nicht vier Zahlen auf dem Zifferblatt.",
                         "nl":  "Ga vier uur vooruit, niet vier cijfers op de wijzerplaat.",
                         "es":  "Avance cuatro horas, no cuatro números en la esfera del reloj."
                     },
    "wn.q.117.option.2":  {
                              "fr":  "6 L",
                              "de":  "6 L",
                              "nl":  "6 L",
                              "es":  "6 L"
                          },
    "wn.q.127.option.2":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.96.explanation":  {
                                "fr":  "56 − 21 = 35.",
                                "de":  "56 − 21 = 35.",
                                "nl":  "56 − 21 = 35.",
                                "es":  "56 − 21 = 35."
                            },
    "wn.q.11.option.3":  {
                             "fr":  "16",
                             "de":  "16",
                             "nl":  "16",
                             "es":  "16"
                         },
    "wn.q.126.prompt":  {
                            "fr":  "◆ = 3\n◆ + ◆ + ◆ + ◆ = ?",
                            "de":  "◆ = 3\n◆ + ◆ + ◆ + ◆ = ?",
                            "nl":  "◆ = 3\n◆ + ◆ + ◆ + ◆ = ?",
                            "es":  "◆ = 3\n◆ + ◆ + ◆ + ◆ = ?"
                        },
    "wn.q.67.option.3":  {
                             "fr":  "16",
                             "de":  "16",
                             "nl":  "16",
                             "es":  "16"
                         },
    "wn.q.94.hint":  {
                         "fr":  "Faites la division et la multiplication avant l\u0027addition.",
                         "de":  "Führen Sie vor der Addition eine Division und Multiplikation durch.",
                         "nl":  "Doe eerst deling en vermenigvuldiging vóór de optelling.",
                         "es":  "Haz división y multiplicación antes de la suma."
                     },
    "wn.q.77.prompt":  {
                           "fr":  "Qu\u0027est-ce que 5 × (2 + 1) ?",
                           "de":  "Was ist 5 × (2 + 1)?",
                           "nl":  "Wat is 5 × (2 + 1)?",
                           "es":  "¿Qué es 5 × (2 + 1)?"
                       },
    "wn.q.134.option.0":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.65.option.2":  {
                             "fr":  "14",
                             "de":  "14",
                             "nl":  "14",
                             "es":  "14"
                         },
    "wn.q.157.option.1":  {
                              "fr":  "21",
                              "de":  "21",
                              "nl":  "21",
                              "es":  "21"
                          },
    "wn.q.81.prompt":  {
                           "fr":  "Qu\u0027est-ce que 18 − 6 ÷ 3 × 2 ?",
                           "de":  "Was ist 18 − 6 ÷ 3 × 2?",
                           "nl":  "Wat is 18 − 6 ÷ 3 × 2?",
                           "es":  "¿Qué es 18 − 6 ÷ 3 × 2?"
                       },
    "wn.q.126.option.2":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.171.option.3":  {
                              "fr":  "20",
                              "de":  "20",
                              "nl":  "20",
                              "es":  "20"
                          },
    "wn.q.118.explanation":  {
                                 "fr":  "7² = 49; 4 × 4 = 16; 49 + 16 − 10 = 55.",
                                 "de":  "7² = 49; 4 × 4 = 16; 49 + 16 − 10 = 55.",
                                 "nl":  "7² = 49; 4 × 4 = 16; 49 + 16 − 10 = 55.",
                                 "es":  "7² = 49; 4 × 4 = 16; 49 + 16 − 10 = 55."
                             },
    "wn.q.123.option.3":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.134.explanation":  {
                                 "fr":  "18 ÷ 3 = 6.",
                                 "de":  "18 ÷ 3 = 6.",
                                 "nl":  "18 ÷ 3 = 6.",
                                 "es":  "18 ÷ 3 = 6."
                             },
    "wn.q.151.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.110.prompt":  {
                            "fr":  "Qu\u0027est-ce que 2⁵ − 3³ ?",
                            "de":  "Was ist 2⁵ − 3³?",
                            "nl":  "Wat is 2⁵ − 3³?",
                            "es":  "¿Qué es 2⁵ − 3³?"
                        },
    "wn.q.82.option.1":  {
                             "fr":  "$25",
                             "de":  "$25",
                             "nl":  "$25",
                             "es":  "$25"
                         },
    "wn.q.68.prompt":  {
                           "fr":  "Qu\u0027est-ce que 20 − 5 × 2 ?",
                           "de":  "Was ist 20 − 5 × 2?",
                           "nl":  "Wat is 20 − 5 × 2?",
                           "es":  "¿Qué es 20 − 5 × 2?"
                       },
    "wn.q.180.option.3":  {
                              "fr":  "24",
                              "de":  "24",
                              "nl":  "24",
                              "es":  "24"
                          },
    "wn.q.1.option.3":  {
                            "fr":  "36",
                            "de":  "36",
                            "nl":  "36",
                            "es":  "36"
                        },
    "wn.q.46.explanation":  {
                                "fr":  "La règle est ×2 + 1 : 95 × 2 + 1 = 191.",
                                "de":  "Die Regel lautet ×2 +1: 95 × 2 + 1 = 191.",
                                "nl":  "De regel is ×2 +1: 95 × 2 + 1 = 191.",
                                "es":  "La regla es ×2 +1: 95 × 2 + 1 = 191."
                            },
    "wn.q.99.prompt":  {
                           "fr":  "Vous économisez $5 chaque semaine pendant les semaines 8, puis dépensez $13. Que reste-t-il ?",
                           "de":  "Sie sparen 8 Wochen lang jede Woche $5 und geben dann $13 aus. Was bleibt?",
                           "nl":  "U spaart elke week $5 gedurende 8-weken en geeft vervolgens $13 uit. Wat blijft er over?",
                           "es":  "Ahorras $5 cada semana durante semanas 8 y luego gastas $13. ¿Qué queda?"
                       },
    "wn.q.71.hint":  {
                         "fr":  "Multipliez les pas par heure par heures.",
                         "de":  "Multiplizieren Sie Schritte pro Stunde mit Stunden.",
                         "nl":  "Vermenigvuldig stappen per uur met uren.",
                         "es":  "Multiplica los pasos por hora por horas."
                     },
    "wn.q.61.option.1":  {
                             "fr":  "22",
                             "de":  "22",
                             "nl":  "22",
                             "es":  "22"
                         },
    "wn.q.60.option.3":  {
                             "fr":  "225",
                             "de":  "225",
                             "nl":  "225",
                             "es":  "225"
                         },
    "wn.q.59.explanation":  {
                                "fr":  "Multipliez par 3 et soustrayez 1 : 41 × 3 − 1 = 122.",
                                "de":  "Mit 3 multiplizieren und 1 subtrahieren: 41 × 3 − 1 = 122.",
                                "nl":  "Vermenigvuldig met 3 en trek 1 af: 41 × 3 − 1 = 122.",
                                "es":  "Multiplica por 3 y resta 1: 41 × 3 − 1 = 122."
                            },
    "wn.q.112.explanation":  {
                                 "fr":  "Le nombre divisé par 4 est 8, donc le nombre est 8 × 4 = 32.",
                                 "de":  "Die Zahl geteilt durch 4 ist 8, also ist die Zahl 8 × 4 = 32.",
                                 "nl":  "Het getal gedeeld door 4 is 8, dus het getal is 8 × 4 = 32.",
                                 "es":  "El número dividido por 4 es 8, por lo que el número es 8 × 4 = 32."
                             },
    "wn.q.46.option.2":  {
                             "fr":  "191",
                             "de":  "191",
                             "nl":  "191",
                             "es":  "191"
                         },
    "wn.q.48.prompt":  {
                           "fr":  "1 · 2 · 6 · 15 · 31 · 56 · ?",
                           "de":  "1 · 2 · 6 · 15 · 31 · 56 · ?",
                           "nl":  "1 · 2 · 6 · 15 · 31 · 56 · ?",
                           "es":  "1 · 2 · 6 · 15 · 31 · 56 · ?"
                       },
    "wn.q.47.option.3":  {
                             "fr":  "264",
                             "de":  "264",
                             "nl":  "264",
                             "es":  "264"
                         },
    "wn.q.131.option.1":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.31.hint":  {
                         "fr":  "Les marches se multiplient régulièrement.",
                         "de":  "Die Schritte wachsen stetig.",
                         "nl":  "De stappen groeien gestaag.",
                         "es":  "Los pasos crecen constantemente."
                     },
    "wn.q.129.explanation":  {
                                 "fr":  "14 ÷ 2 = 7.",
                                 "de":  "14 ÷ 2 = 7.",
                                 "nl":  "14 ÷ 2 = 7.",
                                 "es":  "14 ÷ 2 = 7."
                             },
    "wn.q.15.option.3":  {
                             "fr":  "54",
                             "de":  "54",
                             "nl":  "54",
                             "es":  "54"
                         },
    "wn.q.101.hint":  {
                          "fr":  "Travaillez d’abord à l’intérieur des parenthèses et des crochets.",
                          "de":  "Arbeiten Sie zuerst innerhalb der Klammern und Klammern.",
                          "nl":  "Werk eerst tussen de haakjes en haakjes.",
                          "es":  "Trabaja primero dentro de los paréntesis y corchetes."
                      },
    "wn.q.8.prompt":  {
                          "fr":  "100 · 90 · 80 · 70 · ?",
                          "de":  "100 · 90 · 80 · 70 · ?",
                          "nl":  "100 · 90 · 80 · 70 · ?",
                          "es":  "100 · 90 · 80 · 70 · ?"
                      },
    "wn.q.15.option.1":  {
                             "fr":  "45",
                             "de":  "45",
                             "nl":  "45",
                             "es":  "45"
                         },
    "wn.q.16.option.1":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.61.explanation":  {
                                "fr":  "Multipliez d\u0027abord : 10 × 2 = 20, puis ajoutez 10 pour obtenir 30.",
                                "de":  "Zuerst multiplizieren: 10 × 2 = 20, dann 10 addieren, um 30 zu erhalten.",
                                "nl":  "Vermenigvuldig eerst: 10 × 2 = 20 en tel vervolgens 10 op om 30 te krijgen.",
                                "es":  "Primero multiplica: 10 × 2 = 20, luego suma 10 para obtener 30."
                            },
    "wn.q.156.prompt":  {
                            "fr":  "● = 3, ▲ = 5\n(● + ▲) × ■ = 32\n■ = ?",
                            "de":  "● = 3, ▲ = 5\n(● + ▲) × ■ = 32\n■ = ?",
                            "nl":  "● = 3, ▲ = 5\n(● + ▲) × ■ = 32\n■ = ?",
                            "es":  "● = 3, ▲ = 5\n(● + ▲) × ■ = 32\n■ = ?"
                        },
    "wn.q.100.option.0":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.80.option.2":  {
                             "fr":  "6",
                             "de":  "6",
                             "nl":  "6",
                             "es":  "6"
                         },
    "wn.q.144.prompt":  {
                            "fr":  "★ = 3\n★ × (● + 1) = 18\n● = ?",
                            "de":  "★ = 3\n★ × (● + 1) = 18\n● = ?",
                            "nl":  "★ = 3\n★ × (● + 1) = 18\n● = ?",
                            "es":  "★ = 3\n★ × (● + 1) = 18\n● = ?"
                        },
    "wn.q.164.explanation":  {
                                 "fr":  "2(▲ + 2) + ▲ = 22, donc ▲ = 6 et ● = 8 ; 8 × 6 = 48.",
                                 "de":  "2(▲ + 2) + ▲ = 22, also ▲ = 6 und ● = 8; 8 × 6 = 48.",
                                 "nl":  "2(▲ + 2) + ▲ = 22, dus ▲ = 6 en ● = 8; 8 × 6 = 48.",
                                 "es":  "2(▲ + 2) + ▲ = 22, entonces ▲ = 6 y ● = 8; 8 × 6 = 48."
                             },
    "wn.q.69.option.2":  {
                             "fr":  "5/3",
                             "de":  "5/3",
                             "nl":  "5/3",
                             "es":  "5/3"
                         },
    "wn.q.41.hint":  {
                         "fr":  "Doublez chaque terme, puis ajoutez la même petite quantité.",
                         "de":  "Verdoppeln Sie jeden Term und fügen Sie dann den gleichen kleinen Betrag hinzu.",
                         "nl":  "Verdubbel elke term en voeg dan hetzelfde kleine bedrag toe.",
                         "es":  "Duplique cada término y luego agregue la misma cantidad pequeña."
                     },
    "wn.q.56.prompt":  {
                           "fr":  "4 · 6 · 12 · 14 · 28 · 30 · ?",
                           "de":  "4 · 6 · 12 · 14 · 28 · 30 · ?",
                           "nl":  "4 · 6 · 12 · 14 · 28 · 30 · ?",
                           "es":  "4 · 6 · 12 · 14 · 28 · 30 · ?"
                       },
    "wn.q.30.option.0":  {
                             "fr":  "0",
                             "de":  "0",
                             "nl":  "0",
                             "es":  "0"
                         },
    "wn.q.90.option.2":  {
                             "fr":  "22",
                             "de":  "22",
                             "nl":  "22",
                             "es":  "22"
                         },
    "wn.q.125.option.1":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.133.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.36.explanation":  {
                                "fr":  "Soustraire 4, 8, 12, 16 ; soustrayez ensuite 20 : 60 − 20 = 40.",
                                "de":  "Subtrahieren Sie 4, 8, 12, 16; Nächstes subtrahieren 20: 60 − 20 = 40.",
                                "nl":  "Trek 4, 8, 12, 16 af; trek vervolgens 20 af: 60 − 20 = 40.",
                                "es":  "Resta 4, 8, 12, 16; siguiente resta 20: 60 − 20 = 40."
                            },
    "wn.q.23.option.0":  {
                             "fr":  "16",
                             "de":  "16",
                             "nl":  "16",
                             "es":  "16"
                         },
    "wn.q.16.option.2":  {
                             "fr":  "13",
                             "de":  "13",
                             "nl":  "13",
                             "es":  "13"
                         },
    "wn.q.138.option.1":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.170.option.3":  {
                              "fr":  "80",
                              "de":  "80",
                              "nl":  "80",
                              "es":  "80"
                          },
    "wn.q.16.prompt":  {
                           "fr":  "1 · 4 · 7 · 10 · ?",
                           "de":  "1 · 4 · 7 · 10 · ?",
                           "nl":  "1 · 4 · 7 · 10 · ?",
                           "es":  "1 · 4 · 7 · 10 · ?"
                       },
    "wn.q.97.explanation":  {
                                "fr":  "300 ÷ 4 = 75 g chacun ; 75 × 6 = 450 g.",
                                "de":  "300 ÷ 4 = 75 jeweils g; 75 × 6 = 450 g.",
                                "nl":  "300 ÷ 4 = 75 g elk; 75 × 6 = 450 g.",
                                "es":  "300 ÷ 4 = 75 g cada uno; 75 × 6 = 450 g."
                            },
    "wn.q.7.option.1":  {
                            "fr":  "16",
                            "de":  "16",
                            "nl":  "16",
                            "es":  "16"
                        },
    "wn.q.169.prompt":  {
                            "fr":  "★ = 4\n● × ★ + ● = 25\n● + ▲ = 9\n▲ × 2 = ?",
                            "de":  "★ = 4\n● × ★ + ● = 25\n● + ▲ = 9\n▲ × 2 = ?",
                            "nl":  "★ = 4\n● × ★ + ● = 25\n● + ▲ = 9\n▲ × 2 = ?",
                            "es":  "★ = 4\n● × ★ + ● = 25\n● + ▲ = 9\n▲ × 2 = ?"
                        },
    "wn.q.25.option.2":  {
                             "fr":  "26",
                             "de":  "26",
                             "nl":  "26",
                             "es":  "26"
                         },
    "wn.q.104.prompt":  {
                            "fr":  "Un train parcourt 180 km en heures 2.5. Quelle est sa vitesse moyenne ?",
                            "de":  "Ein Zug legt 180 km in 2.5 Stunden zurück. Wie hoch ist seine Durchschnittsgeschwindigkeit?",
                            "nl":  "Een trein legt 180 km af in 2.5 uur. Wat is de gemiddelde snelheid?",
                            "es":  "Un tren recorre 180 km en 2.5 horas. ¿Cuál es su rapidez promedio?"
                        },
    "wn.q.79.prompt":  {
                           "fr":  "Qu\u0027est-ce que 100 − 25 − 25 ?",
                           "de":  "Was ist 100 − 25 − 25?",
                           "nl":  "Wat is 100 − 25 − 25?",
                           "es":  "¿Qué es 100 − 25 − 25?"
                       },
    "wn.q.110.hint":  {
                          "fr":  "Évaluez d’abord les deux pouvoirs.",
                          "de":  "Bewerten Sie zuerst beide Kräfte.",
                          "nl":  "Evalueer eerst beide bevoegdheden.",
                          "es":  "Evalúe ambos poderes primero."
                      },
    "wn.q.109.explanation":  {
                                 "fr":  "4 × 6 = 24 heures-travailleur.",
                                 "de":  "4 × 6 = 24 Arbeitsstunden.",
                                 "nl":  "4 × 6 = 24 werkuren.",
                                 "es":  "4 × 6 = 24 horas-trabajador."
                             },
    "wn.q.43.prompt":  {
                           "fr":  "1 · 4 · 10 · 20 · 35 · ?",
                           "de":  "1 · 4 · 10 · 20 · 35 · ?",
                           "nl":  "1 · 4 · 10 · 20 · 35 · ?",
                           "es":  "1 · 4 · 10 · 20 · 35 · ?"
                       },
    "wn.q.168.option.2":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.69.option.0":  {
                             "fr":  "3/8",
                             "de":  "3/8",
                             "nl":  "3/8",
                             "es":  "3/8"
                         },
    "wn.q.10.explanation":  {
                                "fr":  "La séquence ajoute 7 à chaque fois ; 28 + 7 = 35.",
                                "de":  "Die Sequenz fügt jedes Mal 7 hinzu; 28 + 7 = 35.",
                                "nl":  "De reeks voegt elke keer 7 toe; 28 + 7 = 35.",
                                "es":  "La secuencia agrega 7 cada vez; 28 + 7 = 35."
                            },
    "wn.q.119.hint":  {
                          "fr":  "Divisez d\u0027abord, puis ajoutez le pourboire de chaque personne.",
                          "de":  "Zuerst aufteilen und dann das Trinkgeld jeder Person hinzufügen.",
                          "nl":  "Splits eerst en voeg vervolgens de fooi van elke persoon toe.",
                          "es":  "Primero divida, luego agregue la propina de cada persona."
                      },
    "wn.q.144.option.3":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.42.option.1":  {
                             "fr":  "87",
                             "de":  "87",
                             "nl":  "87",
                             "es":  "87"
                         },
    "wn.q.122.hint":  {
                          "fr":  "Trois triangles correspondants se partagent le total à parts égales.",
                          "de":  "Drei passende Dreiecke teilen sich die Summe gleichmäßig auf.",
                          "nl":  "Drie bijpassende driehoeken delen het totaal gelijkelijk.",
                          "es":  "Tres triángulos iguales comparten el total en partes iguales."
                      },
    "wn.q.140.prompt":  {
                            "fr":  "● = 3, ▲ = 5\n● + ▲ + ● = ?",
                            "de":  "● = 3, ▲ = 5\n● + ▲ + ● = ?",
                            "nl":  "● = 3, ▲ = 5\n● + ▲ + ● = ?",
                            "es":  "● = 3, ▲ = 5\n● + ▲ + ● = ?"
                        },
    "wn.q.32.option.3":  {
                             "fr":  "20",
                             "de":  "20",
                             "nl":  "20",
                             "es":  "20"
                         },
    "wn.q.159.hint":  {
                          "fr":  "Soustrayez les deux étoiles avant de diviser par deux le cercle.",
                          "de":  "Subtrahieren Sie beide Sterne, bevor Sie den Kreis halbieren.",
                          "nl":  "Trek beide sterren af voordat u de cirkel halveert.",
                          "es":  "Resta ambas estrellas antes de dividir el círculo por la mitad."
                      },
    "wn.q.79.option.0":  {
                             "fr":  "25",
                             "de":  "25",
                             "nl":  "25",
                             "es":  "25"
                         },
    "wn.q.93.option.2":  {
                             "fr":  "35",
                             "de":  "35",
                             "nl":  "35",
                             "es":  "35"
                         },
    "wn.q.13.option.0":  {
                             "fr":  "108",
                             "de":  "108",
                             "nl":  "108",
                             "es":  "108"
                         },
    "wn.q.96.option.0":  {
                             "fr":  "21",
                             "de":  "21",
                             "nl":  "21",
                             "es":  "21"
                         },
    "wn.q.127.prompt":  {
                            "fr":  "☀ + 4 = 13\n☀ = ?",
                            "de":  "☀ + 4 = 13\n☀ = ?",
                            "nl":  "☀ + 4 = 13\n☀ = ?",
                            "es":  "☀ + 4 = 13\n☀ = ?"
                        },
    "wn.q.21.prompt":  {
                           "fr":  "2 · 5 · 10 · 17 · 26 · ?",
                           "de":  "2 · 5 · 10 · 17 · 26 · ?",
                           "nl":  "2 · 5 · 10 · 17 · 26 · ?",
                           "es":  "2 · 5 · 10 · 17 · 26 · ?"
                       },
    "wn.q.100.option.3":  {
                              "fr":  "32",
                              "de":  "32",
                              "nl":  "32",
                              "es":  "32"
                          },
    "wn.q.48.option.2":  {
                             "fr":  "92",
                             "de":  "92",
                             "nl":  "92",
                             "es":  "92"
                         },
    "wn.q.29.explanation":  {
                                "fr":  "Les écarts sont +1, +2, +3, +4 ; ajoutez ensuite 5 pour obtenir 17.",
                                "de":  "Die Lücken sind +1, +2, +3, +4; Als nächstes fügen Sie 5 hinzu, um 17 zu erhalten.",
                                "nl":  "De gaten zijn +1, +2, +3, +4; voeg vervolgens 5 toe om 17 te krijgen.",
                                "es":  "Los espacios son +1, +2, +3, +4; Luego agregue 5 para obtener 17."
                            },
    "wn.q.93.explanation":  {
                                "fr":  "4 × 7 = unités 28 autour du carré.",
                                "de":  "4 × 7 = 28 Einheiten um das Quadrat.",
                                "nl":  "4 × 7 = 28 eenheden rond het plein.",
                                "es":  "4 × 7 = 28 unidades alrededor del cuadrado."
                            },
    "wn.q.147.option.1":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.53.hint":  {
                         "fr":  "Les écarts doublent à chaque fois.",
                         "de":  "Die Lücken verdoppeln sich jedes Mal.",
                         "nl":  "Elke keer verdubbelen de gaten.",
                         "es":  "Las brechas se duplican cada vez."
                     },
    "wn.q.20.option.0":  {
                             "fr":  "50",
                             "de":  "50",
                             "nl":  "50",
                             "es":  "50"
                         },
    "wn.q.90.explanation":  {
                                "fr":  "30 − 12 = 18.",
                                "de":  "30 − 12 = 18.",
                                "nl":  "30 − 12 = 18.",
                                "es":  "30 − 12 = 18."
                            },
    "wn.q.42.prompt":  {
                           "fr":  "2 · 6 · 15 · 31 · 56 · ?",
                           "de":  "2 · 6 · 15 · 31 · 56 · ?",
                           "nl":  "2 · 6 · 15 · 31 · 56 · ?",
                           "es":  "2 · 6 · 15 · 31 · 56 · ?"
                       },
    "wn.q.75.option.1":  {
                             "fr":  "8",
                             "de":  "8",
                             "nl":  "8",
                             "es":  "8"
                         },
    "wn.q.62.option.2":  {
                             "fr":  "$24",
                             "de":  "$24",
                             "nl":  "$24",
                             "es":  "$24"
                         },
    "wn.q.64.explanation":  {
                                "fr":  "La moitié de 18 est 9 ; 9 + 2 = 11.",
                                "de":  "Die Hälfte von 18 ist 9; 9 + 2 = 11.",
                                "nl":  "De helft van 18 is 9; 9 + 2 = 11.",
                                "es":  "La mitad de 18 es 9; 9 + 2 = 11."
                            },
    "wn.q.32.hint":  {
                         "fr":  "Les positions impaires et paires ont chacune leur propre modèle.",
                         "de":  "Ungerade und gerade Positionen haben jeweils ihr eigenes Muster.",
                         "nl":  "Oneven en even posities hebben elk hun eigen patroon.",
                         "es":  "Las posiciones pares e impares tienen cada una su propio patrón."
                     },
    "wn.q.99.option.2":  {
                             "fr":  "$40",
                             "de":  "$40",
                             "nl":  "$40",
                             "es":  "$40"
                         },
    "wn.q.101.option.0":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.14.option.0":  {
                             "fr":  "25",
                             "de":  "25",
                             "nl":  "25",
                             "es":  "25"
                         },
    "wn.q.171.option.0":  {
                              "fr":  "17",
                              "de":  "17",
                              "nl":  "17",
                              "es":  "17"
                          },
    "wn.q.140.option.1":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.156.option.1":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.151.option.1":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.64.prompt":  {
                           "fr":  "Quelle est la moitié de 18, puis plus 2 ?",
                           "de":  "Was ist die Hälfte von 18 plus 2?",
                           "nl":  "Wat is de helft van 18, plus 2?",
                           "es":  "¿Cuánto es la mitad de 18 y luego más 2?"
                       },
    "wn.q.77.option.2":  {
                             "fr":  "15",
                             "de":  "15",
                             "nl":  "15",
                             "es":  "15"
                         },
    "wn.q.94.option.2":  {
                             "fr":  "48",
                             "de":  "48",
                             "nl":  "48",
                             "es":  "48"
                         },
    "wn.q.53.option.2":  {
                             "fr":  "68",
                             "de":  "68",
                             "nl":  "68",
                             "es":  "68"
                         },
    "wn.q.58.prompt":  {
                           "fr":  "2 · 8 · 18 · 32 · 50 · ?",
                           "de":  "2 · 8 · 18 · 32 · 50 · ?",
                           "nl":  "2 · 8 · 18 · 32 · 50 · ?",
                           "es":  "2 · 8 · 18 · 32 · 50 · ?"
                       },
    "wn.q.76.explanation":  {
                                "fr":  "3 + 4 = 7, c\u0027est donc 7:00.",
                                "de":  "3 + 4 = 7, also ist es 7:00.",
                                "nl":  "3 + 4 = 7, dus het is 7:00.",
                                "es":  "3 + 4 = 7, por lo que es 7:00."
                            },
    "wn.q.100.option.2":  {
                              "fr":  "24",
                              "de":  "24",
                              "nl":  "24",
                              "es":  "24"
                          },
    "wn.q.57.prompt":  {
                           "fr":  "3 · 12 · 27 · 48 · 75 · ?",
                           "de":  "3 · 12 · 27 · 48 · 75 · ?",
                           "nl":  "3 · 12 · 27 · 48 · 75 · ?",
                           "es":  "3 · 12 · 27 · 48 · 75 · ?"
                       },
    "wn.q.176.option.3":  {
                              "fr":  "2",
                              "de":  "2",
                              "nl":  "2",
                              "es":  "2"
                          },
    "wn.q.128.prompt":  {
                            "fr":  "● = 6\n● − ▲ = 2\n▲ = ?",
                            "de":  "● = 6\n● − ▲ = 2\n▲ = ?",
                            "nl":  "● = 6\n● − ▲ = 2\n▲ = ?",
                            "es":  "● = 6\n● − ▲ = 2\n▲ = ?"
                        },
    "wn.q.31.prompt":  {
                           "fr":  "2 · 4 · 7 · 11 · 16 · ?",
                           "de":  "2 · 4 · 7 · 11 · 16 · ?",
                           "nl":  "2 · 4 · 7 · 11 · 16 · ?",
                           "es":  "2 · 4 · 7 · 11 · 16 · ?"
                       },
    "wn.q.161.option.2":  {
                              "fr":  "72",
                              "de":  "72",
                              "nl":  "72",
                              "es":  "72"
                          },
    "wn.q.85.option.0":  {
                             "fr":  "$10",
                             "de":  "$10",
                             "nl":  "$10",
                             "es":  "$10"
                         },
    "wn.q.83.option.2":  {
                             "fr":  "35",
                             "de":  "35",
                             "nl":  "35",
                             "es":  "35"
                         },
    "wn.q.3.hint":  {
                        "fr":  "Ce sont des nombres carrés.",
                        "de":  "Das sind Quadratzahlen.",
                        "nl":  "Dit zijn vierkante getallen.",
                        "es":  "Estos son números cuadrados."
                    },
    "wn.q.173.option.3":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.68.option.1":  {
                             "fr":  "15",
                             "de":  "15",
                             "nl":  "15",
                             "es":  "15"
                         },
    "wn.q.143.prompt":  {
                            "fr":  "● + ▲ = 12\n● − ▲ = 4\n● = ?",
                            "de":  "● + ▲ = 12\n● − ▲ = 4\n● = ?",
                            "nl":  "● + ▲ = 12\n● − ▲ = 4\n● = ?",
                            "es":  "● + ▲ = 12\n● − ▲ = 4\n● = ?"
                        },
    "wn.q.147.option.3":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.179.option.2":  {
                              "fr":  "35",
                              "de":  "35",
                              "nl":  "35",
                              "es":  "35"
                          },
    "wn.q.44.hint":  {
                         "fr":  "Lisez les positions paires et impaires séparément.",
                         "de":  "Lesen Sie ungerade und gerade Positionen getrennt.",
                         "nl":  "Lees oneven en even posities afzonderlijk.",
                         "es":  "Lea las posiciones pares e impares por separado."
                     },
    "wn.q.47.prompt":  {
                           "fr":  "2 · 12 · 36 · 80 · 150 · ?",
                           "de":  "2 · 12 · 36 · 80 · 150 · ?",
                           "nl":  "2 · 12 · 36 · 80 · 150 · ?",
                           "es":  "2 · 12 · 36 · 80 · 150 · ?"
                       },
    "wn.q.83.option.0":  {
                             "fr":  "27",
                             "de":  "27",
                             "nl":  "27",
                             "es":  "27"
                         },
    "wn.q.114.option.0":  {
                              "fr":  "360 m",
                              "de":  "360 m",
                              "nl":  "360 m",
                              "es":  "360 m"
                          },
    "wn.q.11.prompt":  {
                           "fr":  "1 · 2 · 3 · 5 · 8 · ?",
                           "de":  "1 · 2 · 3 · 5 · 8 · ?",
                           "nl":  "1 · 2 · 3 · 5 · 8 · ?",
                           "es":  "1 · 2 · 3 · 5 · 8 · ?"
                       },
    "wn.q.140.explanation":  {
                                 "fr":  "3 + 5 + 3 = 11.",
                                 "de":  "3 + 5 + 3 = 11.",
                                 "nl":  "3 + 5 + 3 = 11.",
                                 "es":  "3 + 5 + 3 = 11."
                             },
    "wn.q.62.hint":  {
                         "fr":  "Multipliez le prix par le nombre de billets.",
                         "de":  "Multiplizieren Sie den Preis mit der Anzahl der Tickets.",
                         "nl":  "Vermenigvuldig de prijs met het aantal tickets.",
                         "es":  "Multiplica el precio por el número de entradas."
                     },
    "wn.q.93.hint":  {
                         "fr":  "Un carré a quatre côtés égaux.",
                         "de":  "Ein Quadrat hat vier gleiche Seiten.",
                         "nl":  "Een vierkant heeft vier gelijke zijden.",
                         "es":  "Un cuadrado tiene cuatro lados iguales."
                     },
    "wn.q.22.hint":  {
                         "fr":  "Pensez à des nombres entiers élevés à une puissance.",
                         "de":  "Stellen Sie sich ganze Zahlen potenziert vor.",
                         "nl":  "Denk aan hele getallen tot een macht.",
                         "es":  "Piense en números enteros elevados a una potencia."
                     },
    "wn.q.106.hint":  {
                          "fr":  "Quarante-huit litres font deux tiers égaux.",
                          "de":  "Achtundvierzig Liter sind zwei gleiche Drittel.",
                          "nl":  "Achtenveertig liter is twee gelijke derde.",
                          "es":  "Cuarenta y ocho litros son dos tercios iguales."
                      },
    "wn.q.122.option.0":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.69.hint":  {
                         "fr":  "Comptez les tranches restantes sur les huit originales.",
                         "de":  "Zählen Sie die von den ursprünglichen acht übriggebliebenen Scheiben.",
                         "nl":  "Tel de overgebleven plakjes van de oorspronkelijke acht.",
                         "es":  "Cuente las porciones que quedan de las ocho originales."
                     },
    "wn.q.129.prompt":  {
                            "fr":  "2 ★ = 14\n★ = ?",
                            "de":  "2 ★ = 14\n★ = ?",
                            "nl":  "2 ★ = 14\n★ = ?",
                            "es":  "2 ★ = 14\n★ = ?"
                        },
    "wn.q.38.option.0":  {
                             "fr":  "25",
                             "de":  "25",
                             "nl":  "25",
                             "es":  "25"
                         },
    "wn.q.44.option.2":  {
                             "fr":  "54",
                             "de":  "54",
                             "nl":  "54",
                             "es":  "54"
                         },
    "wn.q.141.hint":  {
                          "fr":  "Remplacez les deux cercles par quatre, puis soustrayez.",
                          "de":  "Ersetzen Sie beide Kreise durch vier und subtrahieren Sie dann.",
                          "nl":  "Vervang beide cirkels door vier en trek ze vervolgens af.",
                          "es":  "Reemplaza ambos círculos con cuatro y luego resta."
                      },
    "wn.q.166.option.0":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.45.option.3":  {
                             "fr":  "129",
                             "de":  "129",
                             "nl":  "129",
                             "es":  "129"
                         },
    "wn.q.101.explanation":  {
                                 "fr":  "3 + 1 = 4; 2 × 4 = 8; 48 ÷ 8 = 6.",
                                 "de":  "3 + 1 = 4; 2 × 4 = 8; 48 ÷ 8 = 6.",
                                 "nl":  "3 + 1 = 4; 2 × 4 = 8; 48 ÷ 8 = 6.",
                                 "es":  "3 + 1 = 4; 2 × 4 = 8; 48 ÷ 8 = 6."
                             },
    "wn.q.165.option.1":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.91.explanation":  {
                                "fr":  "$60 ÷ 4 = $15; $15 + $2 = $17.",
                                "de":  "$60 ÷ 4 = $15; $15 + $2 = $17.",
                                "nl":  "$60 ÷ 4 = $15; $15 + $2 = $17.",
                                "es":  "$60 ÷ 4 = $15; $15 + $2 = $17."
                            },
    "wn.q.87.option.1":  {
                             "fr":  "25",
                             "de":  "25",
                             "nl":  "25",
                             "es":  "25"
                         },
    "wn.q.174.hint":  {
                          "fr":  "Évaluez chaque symbole une ligne à la fois.",
                          "de":  "Werten Sie jedes Symbol Zeile für Zeile aus.",
                          "nl":  "Evalueer elk symbool regel voor regel.",
                          "es":  "Evalúe cada símbolo una línea a la vez."
                      },
    "wn.q.152.prompt":  {
                            "fr":  "★ est positif. ★ × ★ = 49\n★ − 4 = ?",
                            "de":  "★ ist positiv. ★ × ★ = 49\n★ − 4 = ?",
                            "nl":  "★ is positief. ★ × ★ = 49\n★ − 4 = ?",
                            "es":  "★ es positivo. ★ × ★ = 49\n★ − 4 =?"
                        },
    "wn.q.109.option.1":  {
                              "fr":  "20",
                              "de":  "20",
                              "nl":  "20",
                              "es":  "20"
                          },
    "wn.q.35.option.3":  {
                             "fr":  "40",
                             "de":  "40",
                             "nl":  "40",
                             "es":  "40"
                         },
    "wn.q.46.prompt":  {
                           "fr":  "5 · 11 · 23 · 47 · 95 · ?",
                           "de":  "5 · 11 · 23 · 47 · 95 · ?",
                           "nl":  "5 · 11 · 23 · 47 · 95 · ?",
                           "es":  "5 · 11 · 23 · 47 · 95 · ?"
                       },
    "wn.difficulty.hard":  {
                               "fr":  "Difficile",
                               "de":  "Schwer",
                               "nl":  "Moeilijk",
                               "es":  "duro"
                           },
    "wn.q.2.prompt":  {
                          "fr":  "5 · 8 · 11 · 14 · ?",
                          "de":  "5 · 8 · 11 · 14 · ?",
                          "nl":  "5 · 8 · 11 · 14 · ?",
                          "es":  "5 · 8 · 11 · 14 · ?"
                      },
    "wn.q.153.option.3":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.85.prompt":  {
                           "fr":  "Un taxi facture $4 plus $2 par mile. Qu\u0027est-ce qu\u0027un trajet 6-mile ?",
                           "de":  "Ein Taxi kostet $4 plus $2 pro Meile. Was ist eine 6-Meilenfahrt?",
                           "nl":  "Een taxi kost $4 plus $2 per mijl. Wat is een 6-mijlrit?",
                           "es":  "Un taxi cobra $4 más $2 por milla. ¿Qué es un viaje de millas 6?"
                       },
    "wn.q.46.option.1":  {
                             "fr":  "189",
                             "de":  "189",
                             "nl":  "189",
                             "es":  "189"
                         },
    "wn.q.6.prompt":  {
                          "fr":  "2 · 5 · 8 · 11 · ?",
                          "de":  "2 · 5 · 8 · 11 · ?",
                          "nl":  "2 · 5 · 8 · 11 · ?",
                          "es":  "2 · 5 · 8 · 11 · ?"
                      },
    "wn.q.150.option.2":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.163.option.1":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.98.option.2":  {
                             "fr":  "72",
                             "de":  "72",
                             "nl":  "72",
                             "es":  "72"
                         },
    "wn.q.139.option.0":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.31.option.0":  {
                             "fr":  "20",
                             "de":  "20",
                             "nl":  "20",
                             "es":  "20"
                         },
    "wn.q.23.option.1":  {
                             "fr":  "17",
                             "de":  "17",
                             "nl":  "17",
                             "es":  "17"
                         },
    "wn.q.110.option.0":  {
                              "fr":  "−5",
                              "de":  "−5",
                              "nl":  "−5",
                              "es":  "−5"
                          },
    "wn.q.136.explanation":  {
                                 "fr":  "5 × 2 = 10.",
                                 "de":  "5 × 2 = 10.",
                                 "nl":  "5 × 2 = 10.",
                                 "es":  "5 × 2 = 10."
                             },
    "wn.q.165.explanation":  {
                                 "fr":  "● = 9; ▲ = 5; 5 + 3 = 8.",
                                 "de":  "● = 9; ▲ = 5; 5 + 3 = 8.",
                                 "nl":  "● = 9; ▲ = 5; 5 + 3 = 8.",
                                 "es":  "● = 9; ▲ = 5; 5 + 3 = 8."
                             },
    "wn.q.13.explanation":  {
                                "fr":  "Multipliez par 3 : 54 × 3 = 162.",
                                "de":  "Mit 3 multiplizieren: 54 × 3 = 162.",
                                "nl":  "Vermenigvuldig met 3: 54 × 3 = 162.",
                                "es":  "Multiplicar por 3: 54 × 3 = 162."
                            },
    "wn.q.14.option.2":  {
                             "fr":  "32",
                             "de":  "32",
                             "nl":  "32",
                             "es":  "32"
                         },
    "wn.q.32.prompt":  {
                           "fr":  "1 · 4 · 2 · 8 · 4 · ?",
                           "de":  "1 · 4 · 2 · 8 · 4 · ?",
                           "nl":  "1 · 4 · 2 · 8 · 4 · ?",
                           "es":  "1 · 4 · 2 · 8 · 4 · ?"
                       },
    "wn.q.171.option.1":  {
                              "fr":  "18",
                              "de":  "18",
                              "nl":  "18",
                              "es":  "18"
                          },
    "wn.q.73.prompt":  {
                           "fr":  "Vous achetez des ordinateurs portables 2 $5 et payez avec $20. Quel changement obtenez-vous ?",
                           "de":  "Sie kaufen 2 $5 Notebooks und bezahlen mit $20. Welche Veränderung erhalten Sie?",
                           "nl":  "U koopt 2 $5-notebooks en betaalt met $20. Welke verandering krijg je?",
                           "es":  "Compras libretas 2 $5 y pagas con $20. ¿Qué cambio obtienes?"
                       },
    "wn.q.2.explanation":  {
                               "fr":  "Ajoutez 3 à chaque fois, donc 14 + 3 = 17.",
                               "de":  "Fügen Sie jedes Mal 3 hinzu, also 14 + 3 = 17.",
                               "nl":  "Voeg elke keer 3 toe, dus 14 + 3 = 17.",
                               "es":  "Agregue 3 cada vez, por lo que 14 + 3 = 17."
                           },
    "wn.q.9.explanation":  {
                               "fr":  "Ajoutez 2, puis 3, 4 et 5 ; ajoutez ensuite 6 pour obtenir 21.",
                               "de":  "Fügen Sie 2, dann 3, 4 und 5 hinzu; Als nächstes fügen Sie 6 hinzu, um 21 zu erhalten.",
                               "nl":  "Voeg 2 toe, vervolgens 3, 4 en 5; voeg vervolgens 6 toe om 21 te krijgen.",
                               "es":  "Agregue 2, luego 3, 4 y 5; Luego agregue 6 para obtener 21."
                           },
    "wn.q.10.option.0":  {
                             "fr":  "32",
                             "de":  "32",
                             "nl":  "32",
                             "es":  "32"
                         },
    "wn.q.10.option.2":  {
                             "fr":  "36",
                             "de":  "36",
                             "nl":  "36",
                             "es":  "36"
                         },
    "wn.q.67.option.2":  {
                             "fr":  "14",
                             "de":  "14",
                             "nl":  "14",
                             "es":  "14"
                         },
    "wn.q.22.option.3":  {
                             "fr":  "216",
                             "de":  "216",
                             "nl":  "216",
                             "es":  "216"
                         },
    "wn.q.45.explanation":  {
                                "fr":  "63 × 2 + 1 = 127.",
                                "de":  "63 × 2 + 1 = 127.",
                                "nl":  "63 × 2 + 1 = 127.",
                                "es":  "63 × 2 + 1 = 127."
                            },
    "wn.q.154.prompt":  {
                            "fr":  "■ = 4\n● + ■ = 13\n● − ■ = ?",
                            "de":  "■ = 4\n● + ■ = 13\n● − ■ = ?",
                            "nl":  "■ = 4\n● + ■ = 13\n● − ■ = ?",
                            "es":  "■ = 4\n● + ■ = 13\n● − ■ = ?"
                        },
    "wn.q.114.hint":  {
                          "fr":  "Trois tours plus un demi-tour.",
                          "de":  "Drei Runden plus eine halbe Runde.",
                          "nl":  "Drie ronden plus een halve ronde.",
                          "es":  "Tres vueltas más media vuelta."
                      },
    "wn.q.179.explanation":  {
                                 "fr":  "(● + ▲)² = 144 = 74 + 2●▲, donc ●▲ = 35.",
                                 "de":  "(● + ▲)² = 144 = 74 + 2●▲, also ●▲ = 35.",
                                 "nl":  "(● + ▲)² = 144 = 74 + 2●▲, dus ●▲ = 35.",
                                 "es":  "(● + ▲)² = 144 = 74 + 2●▲, entonces ●▲ = 35."
                             },
    "wn.q.77.option.0":  {
                             "fr":  "11",
                             "de":  "11",
                             "nl":  "11",
                             "es":  "11"
                         },
    "wn.q.25.option.3":  {
                             "fr":  "28",
                             "de":  "28",
                             "nl":  "28",
                             "es":  "28"
                         },
    "wn.q.63.explanation":  {
                                "fr":  "12 − 3 = Les cookies 9 restent.",
                                "de":  "12 − 3 = 9 Cookies bleiben bestehen.",
                                "nl":  "12 − 3 = 9-cookies blijven bestaan.",
                                "es":  "12 − 3 = 9 las cookies permanecen."
                            },
    "wn.q.26.option.0":  {
                             "fr":  "73",
                             "de":  "73",
                             "nl":  "73",
                             "es":  "73"
                         },
    "wn.q.27.prompt":  {
                           "fr":  "1 · 2 · 6 · 24 · 120 · ?",
                           "de":  "1 · 2 · 6 · 24 · 120 · ?",
                           "nl":  "1 · 2 · 6 · 24 · 120 · ?",
                           "es":  "1 · 2 · 6 · 24 · 120 · ?"
                       },
    "wn.q.72.option.0":  {
                             "fr":  "3",
                             "de":  "3",
                             "nl":  "3",
                             "es":  "3"
                         },
    "wn.q.50.explanation":  {
                                "fr":  "Les écarts sont 4, 9, 16, 25, 36 ; Vient ensuite 49, donnant 140.",
                                "de":  "Die Lücken sind 4, 9, 16, 25, 36; Als nächstes folgt 49, was 140 ergibt.",
                                "nl":  "De gaten zijn 4, 9, 16, 25, 36; de volgende is 49, wat 140 oplevert.",
                                "es":  "Los espacios son 4, 9, 16, 25, 36; el siguiente es 49, dando 140."
                            },
    "wn.q.87.option.3":  {
                             "fr":  "35",
                             "de":  "35",
                             "nl":  "35",
                             "es":  "35"
                         },
    "wn.q.111.option.3":  {
                              "fr":  "50",
                              "de":  "50",
                              "nl":  "50",
                              "es":  "50"
                          },
    "wn.q.142.option.1":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.141.option.2":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.34.hint":  {
                         "fr":  "Chaque terme vaut un de moins qu\u0027un carré.",
                         "de":  "Jeder Term ist eins kleiner als ein Quadrat.",
                         "nl":  "Elke term is één minder dan een vierkant.",
                         "es":  "Cada término es uno menos que un cuadrado."
                     },
    "wn.q.108.hint":  {
                          "fr":  "Trouvez 8% de $50 et ajoutez-le au prix.",
                          "de":  "Finden Sie 8 % von $50 und addieren Sie es zum Preis.",
                          "nl":  "Vind 8% van $50 en voeg dit toe aan de prijs.",
                          "es":  "Encuentre el 8% de $50 y agréguelo al precio."
                      },
    "wn.q.53.option.0":  {
                             "fr":  "56",
                             "de":  "56",
                             "nl":  "56",
                             "es":  "56"
                         },
    "wn.q.111.option.1":  {
                              "fr":  "42",
                              "de":  "42",
                              "nl":  "42",
                              "es":  "42"
                          },
    "wn.q.28.option.2":  {
                             "fr":  "17",
                             "de":  "17",
                             "nl":  "17",
                             "es":  "17"
                         },
    "wn.q.164.prompt":  {
                            "fr":  "● + ● + ▲ = 22\n● = ▲ + 2\n● × ▲ = ?",
                            "de":  "● + ● + ▲ = 22\n● = ▲ + 2\n● × ▲ = ?",
                            "nl":  "● + ● + ▲ = 22\n● = ▲ + 2\n● × ▲ = ?",
                            "es":  "● + ● + ▲ = 22\n● = ▲ + 2\n● × ▲ = ?"
                        },
    "wn.q.88.option.1":  {
                             "fr":  "6",
                             "de":  "6",
                             "nl":  "6",
                             "es":  "6"
                         },
    "wn.q.95.explanation":  {
                                "fr":  "32 − 9 + 5 = 28.",
                                "de":  "32 − 9 + 5 = 28.",
                                "nl":  "32 − 9 + 5 = 28.",
                                "es":  "32 − 9 + 5 = 28."
                            },
    "wn.q.163.option.3":  {
                              "fr":  "16",
                              "de":  "16",
                              "nl":  "16",
                              "es":  "16"
                          },
    "wn.q.155.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.95.option.0":  {
                             "fr":  "18",
                             "de":  "18",
                             "nl":  "18",
                             "es":  "18"
                         },
    "wn.q.174.option.1":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.171.hint":  {
                          "fr":  "Exprimez le carré et le triangle en cercles.",
                          "de":  "Drücken Sie das Quadrat und das Dreieck in Kreisen aus.",
                          "nl":  "Druk het vierkant en de driehoek uit in cirkels.",
                          "es":  "Expresa el cuadrado y el triángulo en círculos."
                      },
    "wn.q.139.explanation":  {
                                 "fr":  "▲ = 6, donc 6 + 6 = 12.",
                                 "de":  "▲ = 6, also 6 + 6 = 12.",
                                 "nl":  "▲ = 6, dus 6 + 6 = 12.",
                                 "es":  "▲ = 6, entonces 6 + 6 = 12."
                             },
    "wn.q.26.prompt":  {
                           "fr":  "4 · 7 · 13 · 25 · 49 · ?",
                           "de":  "4 · 7 · 13 · 25 · 49 · ?",
                           "nl":  "4 · 7 · 13 · 25 · 49 · ?",
                           "es":  "4 · 7 · 13 · 25 · 49 · ?"
                       },
    "wn.q.24.explanation":  {
                                "fr":  "Les endroits impairs sont 2, 4, 6 ; les lieux pairs sont 7, 9, donc le prochain terme pair est 11.",
                                "de":  "Ungerade Orte sind 2, 4, 6; gerade Stellen sind 7, 9, daher ist der nächste gerade Stellenterm 11.",
                                "nl":  "Vreemde plaatsen zijn 2, 4, 6; even plaatsen zijn 7, 9, dus de volgende term voor even plaatsen is 11.",
                                "es":  "Los lugares impares son 2, 4, 6; Los lugares pares son 7, 9, por lo que el siguiente término de lugares pares es 11."
                            },
    "wn.q.4.option.3":  {
                            "fr":  "20",
                            "de":  "20",
                            "nl":  "20",
                            "es":  "20"
                        },
    "wn.q.94.option.0":  {
                             "fr":  "38",
                             "de":  "38",
                             "nl":  "38",
                             "es":  "38"
                         },
    "wn.q.145.option.0":  {
                              "fr":  "3",
                              "de":  "3",
                              "nl":  "3",
                              "es":  "3"
                          },
    "wn.q.80.hint":  {
                         "fr":  "Ajoutez les deux promenades.",
                         "de":  "Fügen Sie die beiden Spaziergänge hinzu.",
                         "nl":  "Voeg de twee wandelingen toe.",
                         "es":  "Suma los dos paseos."
                     },
    "wn.q.52.prompt":  {
                           "fr":  "1 · 8 · 9 · 17 · 26 · 43 · ?",
                           "de":  "1 · 8 · 9 · 17 · 26 · 43 · ?",
                           "nl":  "1 · 8 · 9 · 17 · 26 · 43 · ?",
                           "es":  "1 · 8 · 9 · 17 · 26 · 43 · ?"
                       },
    "wn.q.113.option.0":  {
                              "fr":  "24",
                              "de":  "24",
                              "nl":  "24",
                              "es":  "24"
                          },
    "wn.q.37.prompt":  {
                           "fr":  "1 · 5 · 14 · 30 · 55 · ?",
                           "de":  "1 · 5 · 14 · 30 · 55 · ?",
                           "nl":  "1 · 5 · 14 · 30 · 55 · ?",
                           "es":  "1 · 5 · 14 · 30 · 55 · ?"
                       },
    "wn.q.138.prompt":  {
                            "fr":  "☾ + ☾ = 16\n☾ − 2 = ?",
                            "de":  "☾ + ☾ = 16\n☾ − 2 = ?",
                            "nl":  "☾ + ☾ = 16\n☾ − 2 = ?",
                            "es":  "☾ + ☾ = 16\n☾ − 2 = ?"
                        },
    "wn.q.101.option.1":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.163.option.2":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.40.option.1":  {
                             "fr":  "2,160",
                             "de":  "2,160",
                             "nl":  "2,160",
                             "es":  "2,160"
                         },
    "wn.q.120.explanation":  {
                                 "fr":  "98 ÷ 1.4 = 70.",
                                 "de":  "98 ÷ 1.4 = 70.",
                                 "nl":  "98 ÷ 1.4 = 70.",
                                 "es":  "98 ÷ 1.4 = 70."
                             },
    "wn.q.95.option.1":  {
                             "fr":  "27",
                             "de":  "27",
                             "nl":  "27",
                             "es":  "27"
                         },
    "wn.q.150.hint":  {
                          "fr":  "Trouvez le cercle après avoir remplacé deux six.",
                          "de":  "Finden Sie den Kreis, nachdem Sie zwei Sechser ersetzt haben.",
                          "nl":  "Vind de cirkel nadat je twee zessen hebt vervangen.",
                          "es":  "Encuentra el círculo después de sustituir dos seises."
                      },
    "wn.q.107.hint":  {
                          "fr":  "Additionnez-les et divisez par quatre valeurs.",
                          "de":  "Addiere sie und dividiere durch vier Werte.",
                          "nl":  "Voeg ze toe en deel door vier waarden.",
                          "es":  "Súmalos y divide por cuatro valores."
                      },
    "wn.q.174.prompt":  {
                            "fr":  "◆ = 5\n● = ◆² − 9\n▲ = ● ÷ 4\n▲ + ◆ = ?",
                            "de":  "◆ = 5\n● = ◆² − 9\n▲ = ● ÷ 4\n▲ + ◆ = ?",
                            "nl":  "◆ = 5\n● = ◆² − 9\n▲ = ● ÷ 4\n▲ + ◆ = ?",
                            "es":  "◆ = 5\n● = ◆² − 9\n▲ = ● ÷ 4\n▲ + ◆ = ?"
                        },
    "wn.q.118.prompt":  {
                            "fr":  "Qu\u0027est-ce que 7² + 4 × (9 − 5) − 10 ?",
                            "de":  "Was ist 7² + 4 × (9 − 5) − 10?",
                            "nl":  "Wat is 7² + 4 × (9 − 5) − 10?",
                            "es":  "¿Qué es 7² + 4 × (9 − 5) − 10?"
                        },
    "wn.q.3.explanation":  {
                               "fr":  "Il s\u0027agit de 1², 2², 3², 4² ; le suivant est 5² = 25.",
                               "de":  "Sie sind 1², 2², 3², 4²; Das nächste ist 5² = 25.",
                               "nl":  "Het zijn 1², 2², 3², 4²; de volgende is 5² = 25.",
                               "es":  "Son 1², 2², 3², 4²; el siguiente es 5² = 25."
                           },
    "wn.q.43.option.0":  {
                             "fr":  "50",
                             "de":  "50",
                             "nl":  "50",
                             "es":  "50"
                         },
    "wn.q.37.option.0":  {
                             "fr":  "81",
                             "de":  "81",
                             "nl":  "81",
                             "es":  "81"
                         },
    "wn.q.119.option.0":  {
                              "fr":  "$24",
                              "de":  "$24",
                              "nl":  "$24",
                              "es":  "$24"
                          },
    "wn.q.172.option.1":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.79.option.1":  {
                             "fr":  "50",
                             "de":  "50",
                             "nl":  "50",
                             "es":  "50"
                         },
    "wn.q.130.option.1":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.145.hint":  {
                          "fr":  "Trouvez le cercle de la première ligne.",
                          "de":  "Finden Sie den Kreis aus der ersten Zeile.",
                          "nl":  "Zoek de cirkel vanaf de eerste lijn.",
                          "es":  "Encuentra el círculo de la primera línea."
                      },
    "wn.q.136.prompt":  {
                            "fr":  "● = 2\n● + ● + ● + ● + ● = ?",
                            "de":  "● = 2\n● + ● + ● + ● + ● = ?",
                            "nl":  "● = 2\n● + ● + ● + ● + ● = ?",
                            "es":  "● = 2\n● + ● + ● + ● + ● = ?"
                        },
    "wn.q.48.option.0":  {
                             "fr":  "81",
                             "de":  "81",
                             "nl":  "81",
                             "es":  "81"
                         },
    "wn.q.126.option.0":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.174.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.66.option.1":  {
                             "fr":  "8",
                             "de":  "8",
                             "nl":  "8",
                             "es":  "8"
                         },
    "wn.q.105.option.3":  {
                              "fr":  "28",
                              "de":  "28",
                              "nl":  "28",
                              "es":  "28"
                          },
    "wn.q.169.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.23.prompt":  {
                           "fr":  "3 · 4 · 6 · 9 · 13 · ?",
                           "de":  "3 · 4 · 6 · 9 · 13 · ?",
                           "nl":  "3 · 4 · 6 · 9 · 13 · ?",
                           "es":  "3 · 4 · 6 · 9 · 13 · ?"
                       },
    "wn.q.155.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.67.explanation":  {
                                "fr":  "4 × 3 = pieds 12.",
                                "de":  "4 × 3 = 12 Beine.",
                                "nl":  "4 × 3 = 12 poten.",
                                "es":  "4 × 3 = 12 patas."
                            },
    "wn.q.58.option.1":  {
                             "fr":  "68",
                             "de":  "68",
                             "nl":  "68",
                             "es":  "68"
                         },
    "wn.q.7.hint":  {
                        "fr":  "Les sauts deviennent plus gros à chaque fois.",
                        "de":  "Die Sprünge werden jedes Mal größer.",
                        "nl":  "De sprongen worden elke keer één groter.",
                        "es":  "Los saltos se hacen cada vez más grandes."
                    },
    "wn.q.3.prompt":  {
                          "fr":  "1 · 4 · 9 · 16 · ?",
                          "de":  "1 · 4 · 9 · 16 · ?",
                          "nl":  "1 · 4 · 9 · 16 · ?",
                          "es":  "1 · 4 · 9 · 16 · ?"
                      },
    "wn.q.123.prompt":  {
                            "fr":  "★ + 2 = 9\n★ = ?",
                            "de":  "★ + 2 = 9\n★ = ?",
                            "nl":  "★ + 2 = 9\n★ = ?",
                            "es":  "★ + 2 = 9\n★ = ?"
                        },
    "wn.q.132.option.0":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.180.option.2":  {
                              "fr":  "20",
                              "de":  "20",
                              "nl":  "20",
                              "es":  "20"
                          },
    "wn.q.151.option.3":  {
                              "fr":  "7",
                              "de":  "7",
                              "nl":  "7",
                              "es":  "7"
                          },
    "wn.q.175.option.0":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.12.option.1":  {
                             "fr":  "20",
                             "de":  "20",
                             "nl":  "20",
                             "es":  "20"
                         },
    "wn.q.22.prompt":  {
                           "fr":  "1 · 8 · 27 · 64 · ?",
                           "de":  "1 · 8 · 27 · 64 · ?",
                           "nl":  "1 · 8 · 27 · 64 · ?",
                           "es":  "1 · 8 · 27 · 64 · ?"
                       },
    "wn.q.31.option.1":  {
                             "fr":  "21",
                             "de":  "21",
                             "nl":  "21",
                             "es":  "21"
                         },
    "wn.q.177.option.0":  {
                              "fr":  "56",
                              "de":  "56",
                              "nl":  "56",
                              "es":  "56"
                          },
    "wn.q.63.hint":  {
                         "fr":  "Manger des cookies est une soustraction. Malheureusement.",
                         "de":  "Kekse essen ist Subtraktion. Leider.",
                         "nl":  "Koekjes eten is aftrekken. Helaas.",
                         "es":  "Comer galletas es resta. Desafortunadamente."
                     },
    "wn.q.136.option.2":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.167.option.0":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.23.hint":  {
                         "fr":  "Les sauts augmentent d\u0027un à chaque fois.",
                         "de":  "Die Sprünge wachsen jedes Mal um eins.",
                         "nl":  "De sprongen groeien elke keer met één.",
                         "es":  "Los saltos crecen uno cada vez."
                     },
    "wn.q.75.prompt":  {
                           "fr":  "Qu\u0027est-ce que 24 ÷ 6 × 2 ?",
                           "de":  "Was ist 24 ÷ 6 × 2?",
                           "nl":  "Wat is 24 ÷ 6 × 2?",
                           "es":  "¿Qué es 24 ÷ 6 × 2?"
                       },
    "wn.q.67.option.1":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.98.explanation":  {
                                "fr":  "9 − 3 = 6; 6² = 36; 2 × 36 = 72.",
                                "de":  "9 − 3 = 6; 6² = 36; 2 × 36 = 72.",
                                "nl":  "9 − 3 = 6; 6² = 36; 2 × 36 = 72.",
                                "es":  "9 − 3 = 6; 6² = 36; 2 × 36 = 72."
                            },
    "wn.q.168.hint":  {
                          "fr":  "Additionnez les première et troisième équations, puis comparez avec la seconde.",
                          "de":  "Addieren Sie die erste und dritte Gleichung und vergleichen Sie sie dann mit der zweiten.",
                          "nl":  "Voeg de eerste en derde vergelijking toe en vergelijk deze met de tweede.",
                          "es":  "Suma la primera y tercera ecuaciones, luego compáralas con la segunda."
                      },
    "wn.q.27.option.0":  {
                             "fr":  "480",
                             "de":  "480",
                             "nl":  "480",
                             "es":  "480"
                         },
    "wn.q.105.hint":  {
                          "fr":  "Les parenthèses d\u0027abord ; puis multiplication et division de gauche à droite.",
                          "de":  "Klammern zuerst; dann Multiplikation und Division von links nach rechts.",
                          "nl":  "Haakjes eerst; vervolgens vermenigvuldigen en delen van links naar rechts.",
                          "es":  "Primero los paréntesis; luego multiplicación y división de izquierda a derecha."
                      },
    "wn.q.97.option.3":  {
                             "fr":  "600 g",
                             "de":  "600 g",
                             "nl":  "600 g",
                             "es":  "600 g"
                         },
    "wn.q.50.hint":  {
                         "fr":  "Les écarts sont des produits de nombres entiers consécutifs.",
                         "de":  "Die Lücken sind Produkte aufeinanderfolgender ganzer Zahlen.",
                         "nl":  "De gaten zijn producten van opeenvolgende gehele getallen.",
                         "es":  "Los huecos son productos de números enteros consecutivos."
                     },
    "wn.q.116.option.3":  {
                              "fr":  "$150",
                              "de":  "$150",
                              "nl":  "$150",
                              "es":  "$150"
                          },
    "wn.q.35.prompt":  {
                           "fr":  "2 · 10 · 4 · 20 · 6 · ?",
                           "de":  "2 · 10 · 4 · 20 · 6 · ?",
                           "nl":  "2 · 10 · 4 · 20 · 6 · ?",
                           "es":  "2 · 10 · 4 · 20 · 6 · ?"
                       },
    "wn.q.131.option.2":  {
                              "fr":  "6",
                              "de":  "6",
                              "nl":  "6",
                              "es":  "6"
                          },
    "wn.q.85.hint":  {
                         "fr":  "Ajoutez les frais fixes à six frais kilométriques.",
                         "de":  "Addieren Sie die Festgebühr zu den sechs Meilengebühren.",
                         "nl":  "Voeg het vaste tarief toe aan de zes kilometervergoeding.",
                         "es":  "Agregue la tarifa fija a los cargos por seis millas."
                     },
    "wn.q.59.option.0":  {
                             "fr":  "120",
                             "de":  "120",
                             "nl":  "120",
                             "es":  "120"
                         },
    "wn.q.29.option.2":  {
                             "fr":  "17",
                             "de":  "17",
                             "nl":  "17",
                             "es":  "17"
                         },
    "wn.q.54.option.1":  {
                             "fr":  "61",
                             "de":  "61",
                             "nl":  "61",
                             "es":  "61"
                         },
    "wn.q.77.option.1":  {
                             "fr":  "13",
                             "de":  "13",
                             "nl":  "13",
                             "es":  "13"
                         },
    "wn.q.162.hint":  {
                          "fr":  "Écrivez chaque symbole en termes de triangle.",
                          "de":  "Schreiben Sie jedes Symbol in Bezug auf das Dreieck.",
                          "nl":  "Schrijf elk symbool in termen van de driehoek.",
                          "es":  "Escribe cada símbolo en términos del triángulo."
                      },
    "wn.q.102.hint":  {
                          "fr":  "Les changements en pourcentage s\u0027appliquent au prix actuel et non au prix d\u0027origine.",
                          "de":  "Prozentuale Änderungen gelten für den aktuellen Preis, nicht für den Originalpreis.",
                          "nl":  "Procentuele wijzigingen zijn van toepassing op de huidige prijs, niet op de oorspronkelijke prijs.",
                          "es":  "Los cambios porcentuales se aplican al precio actual, no al original."
                      },
    "wn.q.160.hint":  {
                          "fr":  "Calculez le triangle, puis soustrayez le cercle.",
                          "de":  "Berechnen Sie das Dreieck und subtrahieren Sie dann den Kreis.",
                          "nl":  "Bereken de driehoek en trek vervolgens de cirkel af.",
                          "es":  "Calcula el triángulo y luego resta el círculo."
                      },
    "wn.q.146.explanation":  {
                                 "fr":  "▲ = 35 ÷ 5 = 7; 7 + 2 = 9.",
                                 "de":  "▲ = 35 ÷ 5 = 7; 7 + 2 = 9.",
                                 "nl":  "▲ = 35 ÷ 5 = 7; 7 + 2 = 9.",
                                 "es":  "▲ = 35 ÷ 5 = 7; 7 + 2 = 9."
                             },
    "wn.q.15.prompt":  {
                           "fr":  "9 · 18 · 27 · 36 · ?",
                           "de":  "9 · 18 · 27 · 36 · ?",
                           "nl":  "9 · 18 · 27 · 36 · ?",
                           "es":  "9 · 18 · 27 · 36 · ?"
                       },
    "wn.q.109.prompt":  {
                            "fr":  "Si les travailleurs 4 terminent un travail en heures 6, cela représente combien d\u0027heures-travailleur ?",
                            "de":  "Wenn 4-Arbeiter einen Job in 6-Stunden beenden, wie viele Arbeitsstunden sind das?",
                            "nl":  "Als 4-werknemers een taak binnen 6-uren voltooien, hoeveel werkuren is dat dan?",
                            "es":  "Si los trabajadores 4 terminan un trabajo en horas 6, ¿cuántas horas de trabajo son eso?"
                        },
    "wn.q.85.option.3":  {
                             "fr":  "$20",
                             "de":  "$20",
                             "nl":  "$20",
                             "es":  "$20"
                         },
    "wn.q.39.explanation":  {
                                "fr":  "Doublez 7, soustrayez 2, doublez, soustrayez 2 ; suivant 22 × 2 = 44.",
                                "de":  "Verdoppeln Sie 7, subtrahieren Sie 2, verdoppeln Sie, subtrahieren Sie 2; nächster 22 × 2 = 44.",
                                "nl":  "Dubbel 7, trek 2 af, dubbel, trek 2 af; volgende 22 × 2 = 44.",
                                "es":  "Doble 7, reste 2, doble, reste 2; siguiente 22 × 2 = 44."
                            },
    "wn.q.39.hint":  {
                         "fr":  "Alternez le doublement et la soustraction de deux.",
                         "de":  "Abwechselndes Verdoppeln mit Subtrahieren von zwei.",
                         "nl":  "Wissel het verdubbelen af met het aftrekken van twee.",
                         "es":  "Alterna la duplicación con la resta de dos."
                     },
    "wn.q.71.option.1":  {
                             "fr":  "8",
                             "de":  "8",
                             "nl":  "8",
                             "es":  "8"
                         },
    "wn.q.35.option.1":  {
                             "fr":  "24",
                             "de":  "24",
                             "nl":  "24",
                             "es":  "24"
                         },
    "wn.q.76.option.3":  {
                             "fr":  "9:00",
                             "de":  "9:00",
                             "nl":  "9:00",
                             "es":  "9:00"
                         },
    "wn.q.174.explanation":  {
                                 "fr":  "● = 25 − 9 = 16; ▲ = 4; 4 + 5 = 9.",
                                 "de":  "● = 25 − 9 = 16; ▲ = 4; 4 + 5 = 9.",
                                 "nl":  "● = 25 − 9 = 16; ▲ = 4; 4 + 5 = 9.",
                                 "es":  "● = 25 − 9 = 16; ▲ = 4; 4 + 5 = 9."
                             },
    "wn.q.147.prompt":  {
                            "fr":  "● + ▲ = 15\n▲ = 2●\n● = ?",
                            "de":  "● + ▲ = 15\n▲ = 2●\n● = ?",
                            "nl":  "● + ▲ = 15\n▲ = 2●\n● = ?",
                            "es":  "● + ▲ = 15\n▲ = 2●\n● = ?"
                        },
    "wn.q.94.explanation":  {
                                "fr":  "100 ÷ 5 = 20; 6 × 3 = 18; 20 + 18 = 38.",
                                "de":  "100 ÷ 5 = 20; 6 × 3 = 18; 20 + 18 = 38.",
                                "nl":  "100 ÷ 5 = 20; 6 × 3 = 18; 20 + 18 = 38.",
                                "es":  "100 ÷ 5 = 20; 6 × 3 = 18; 20 + 18 = 38."
                            },
    "wn.q.65.option.0":  {
                             "fr":  "10",
                             "de":  "10",
                             "nl":  "10",
                             "es":  "10"
                         },
    "wn.q.50.option.1":  {
                             "fr":  "130",
                             "de":  "130",
                             "nl":  "130",
                             "es":  "130"
                         },
    "wn.q.84.explanation":  {
                                "fr":  "27 ÷ 3 = 9 tranches chacune.",
                                "de":  "27 ÷ 3 = 9 jeweils Scheiben.",
                                "nl":  "27 ÷ 3 = 9 snijdt elk.",
                                "es":  "27 ÷ 3 = 9 rebanadas cada una."
                            },
    "wn.q.166.hint":  {
                          "fr":  "Remplacez l’expression du cercle par le total.",
                          "de":  "Setzen Sie den Kreisausdruck in die Summe ein.",
                          "nl":  "Vervang de cirkeluitdrukking door het totaal.",
                          "es":  "Sustituye la expresión del círculo en el total."
                      },
    "wn.q.114.option.2":  {
                              "fr":  "420 m",
                              "de":  "420 m",
                              "nl":  "420 m",
                              "es":  "420 m"
                          },
    "wn.q.23.option.3":  {
                             "fr":  "19",
                             "de":  "19",
                             "nl":  "19",
                             "es":  "19"
                         },
    "wn.q.134.option.3":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.105.option.0":  {
                              "fr":  "9",
                              "de":  "9",
                              "nl":  "9",
                              "es":  "9"
                          },
    "wn.q.73.option.1":  {
                             "fr":  "$10",
                             "de":  "$10",
                             "nl":  "$10",
                             "es":  "$10"
                         },
    "wn.q.148.option.0":  {
                              "fr":  "12",
                              "de":  "12",
                              "nl":  "12",
                              "es":  "12"
                          },
    "wn.q.90.option.0":  {
                             "fr":  "6",
                             "de":  "6",
                             "nl":  "6",
                             "es":  "6"
                         },
    "wn.q.139.option.1":  {
                              "fr":  "11",
                              "de":  "11",
                              "nl":  "11",
                              "es":  "11"
                          },
    "wn.q.127.option.1":  {
                              "fr":  "8",
                              "de":  "8",
                              "nl":  "8",
                              "es":  "8"
                          },
    "wn.q.61.hint":  {
                         "fr":  "La multiplication a son tour avant l\u0027addition.",
                         "de":  "Vor der Addition kommt die Multiplikation an die Reihe.",
                         "nl":  "Vermenigvuldigen komt vóór de optelling aan de beurt.",
                         "es":  "La multiplicación tiene su turno antes que la suma."
                     },
    "wn.q.80.option.0":  {
                             "fr":  "1",
                             "de":  "1",
                             "nl":  "1",
                             "es":  "1"
                         },
    "wn.q.36.prompt":  {
                           "fr":  "100 · 96 · 88 · 76 · 60 · ?",
                           "de":  "100 · 96 · 88 · 76 · 60 · ?",
                           "nl":  "100 · 96 · 88 · 76 · 60 · ?",
                           "es":  "100 · 96 · 88 · 76 · 60 · ?"
                       },
    "wn.q.7.prompt":  {
                          "fr":  "1 · 2 · 4 · 7 · 11 · ?",
                          "de":  "1 · 2 · 4 · 7 · 11 · ?",
                          "nl":  "1 · 2 · 4 · 7 · 11 · ?",
                          "es":  "1 · 2 · 4 · 7 · 11 · ?"
                      },
    "wn.q.110.option.3":  {
                              "fr":  "17",
                              "de":  "17",
                              "nl":  "17",
                              "es":  "17"
                          },
    "wn.q.75.option.3":  {
                             "fr":  "24",
                             "de":  "24",
                             "nl":  "24",
                             "es":  "24"
                         },
    "wn.q.37.explanation":  {
                                "fr":  "Les écarts sont +4, +9, +16, +25 ; suivant +36 donne 91.",
                                "de":  "Die Lücken sind +4, +9, +16, +25; next +36 ergibt 91.",
                                "nl":  "De gaten zijn +4, +9, +16, +25; volgende +36 geeft 91.",
                                "es":  "Los espacios son +4, +9, +16, +25; siguiente +36 da 91."
                            },
    "wn.q.71.explanation":  {
                                "fr":  "2 × 4 = étapes 8.",
                                "de":  "2 × 4 = 8 Schritte.",
                                "nl":  "2 × 4 = 8 stappen.",
                                "es":  "2 × 4 = 8 pasos."
                            },
    "wn.q.100.explanation":  {
                                 "fr":  "64 ÷ 8 = 8; 4² = 16; 8 + 16 = 24.",
                                 "de":  "64 ÷ 8 = 8; 4² = 16; 8 + 16 = 24.",
                                 "nl":  "64 ÷ 8 = 8; 4² = 16; 8 + 16 = 24.",
                                 "es":  "64 ÷ 8 = 8; 4² = 16; 8 + 16 = 24."
                             },
    "wn.q.25.option.1":  {
                             "fr":  "24",
                             "de":  "24",
                             "nl":  "24",
                             "es":  "24"
                         },
    "wn.q.157.option.3":  {
                              "fr":  "27",
                              "de":  "27",
                              "nl":  "27",
                              "es":  "27"
                          },
    "wn.q.161.explanation":  {
                                 "fr":  "L\u0027ajout donne ● = 11 ; alors ▲ = 6 et 11 × 6 = 66.",
                                 "de":  "Das Addieren ergibt ● = 11; dann ist ▲ = 6 und 11 × 6 = 66.",
                                 "nl":  "Optellen geeft ● = 11; dan ▲ = 6, en 11 × 6 = 66.",
                                 "es":  "Sumar da ● = 11; luego ▲ = 6, y 11 × 6 = 66."
                             },
    "wn.q.120.prompt":  {
                            "fr":  "Un nombre est augmenté de 40%, devenant 98. Quelle était l\u0027originale ?",
                            "de":  "Eine Zahl wird um 40 % erhöht und wird zu 98. Was war das Original?",
                            "nl":  "Een getal wordt verhoogd met 40% en wordt 98. Wat was het origineel?",
                            "es":  "Un número aumenta en 40%, convirtiéndose en 98. ¿Cuál fue el original?"
                        },
    "wn.q.46.hint":  {
                         "fr":  "Doublez, puis ajoutez un montant qui change régulièrement.",
                         "de":  "Verdoppeln Sie die Menge und fügen Sie dann eine sich stetig ändernde Menge hinzu.",
                         "nl":  "Verdubbel en voeg vervolgens een steeds wisselende hoeveelheid toe.",
                         "es":  "Duplique y luego agregue una cantidad que cambia constantemente."
                     },
    "wn.q.24.hint":  {
                         "fr":  "Séparez les positions : les lieux impairs et pairs se comportent différemment.",
                         "de":  "Trennen Sie die Positionen: Ungerade und gerade Orte verhalten sich unterschiedlich.",
                         "nl":  "Scheid de posities: oneven en even plaatsen gedragen zich verschillend.",
                         "es":  "Separar las posiciones: los lugares pares e impares se comportan de manera diferente."
                     },
    "wn.q.24.option.3":  {
                             "fr":  "13",
                             "de":  "13",
                             "nl":  "13",
                             "es":  "13"
                         },
    "wn.q.60.hint":  {
                         "fr":  "Doublez chaque terme et ajoutez-en un.",
                         "de":  "Verdoppeln Sie jeden Begriff und fügen Sie einen hinzu.",
                         "nl":  "Verdubbel elke term en voeg er één toe.",
                         "es":  "Duplica cada término y suma uno."
                     },
    "wn.q.106.prompt":  {
                            "fr":  "Un réservoir est 2/3 plein de 48 L. Quelle est sa capacité totale ?",
                            "de":  "Ein Tank ist 2/3 voll mit 48 L. Wie groß ist sein volles Fassungsvermögen?",
                            "nl":  "Een tank is 2/3 vol met 48 L. Wat is de volledige inhoud ervan?",
                            "es":  "Un tanque está 2/3 lleno con 48 L. ¿Cuál es su capacidad total?"
                        },
    "wn.q.13.option.2":  {
                             "fr":  "162",
                             "de":  "162",
                             "nl":  "162",
                             "es":  "162"
                         },
    "wn.q.26.explanation":  {
                                "fr":  "Les écarts doublent : +3, +6, +12, +24 ; suivant +48 donne 97.",
                                "de":  "Die Lücken verdoppeln sich: +3, +6, +12, +24; next +48 ergibt 97.",
                                "nl":  "De gaten verdubbelen: +3, +6, +12, +24; volgende +48 geeft 97.",
                                "es":  "Las brechas se duplican: +3, +6, +12, +24; siguiente +48 da 97."
                            },
    "wn.q.158.option.2":  {
                              "fr":  "13",
                              "de":  "13",
                              "nl":  "13",
                              "es":  "13"
                          },
    "wn.q.89.explanation":  {
                                "fr":  "Les minutes 90 correspondent aux minutes 1 ; 6:40 + 1:30 = 8:10.",
                                "de":  "90 Minuten sind 1 Stunden; 30 Minuten; 6:40 + 1:30 = 8:10.",
                                "nl":  "90 minuten is 1 uur 30 minuten; 6:40 + 1:30 = 8:10.",
                                "es":  "Los minutos 90 son los minutos 1 de hora 30; 6:40 + 1:30 = 8:10."
                            },
    "wn.q.122.option.1":  {
                              "fr":  "4",
                              "de":  "4",
                              "nl":  "4",
                              "es":  "4"
                          },
    "wn.q.115.hint":  {
                          "fr":  "Utilisez la différence des carrés ou calculez les deux carrés.",
                          "de":  "Benutzen Sie die Differenz der Quadrate oder berechnen Sie beide Quadrate.",
                          "nl":  "Gebruik het verschil tussen de vierkanten of bereken beide vierkanten.",
                          "es":  "Usa la diferencia de cuadrados o calcula ambos cuadrados."
                      },
    "wn.q.118.option.2":  {
                              "fr":  "55",
                              "de":  "55",
                              "nl":  "55",
                              "es":  "55"
                          },
    "wn.q.143.hint":  {
                          "fr":  "Additionnez les deux équations pour supprimer les triangles.",
                          "de":  "Addiere die beiden Gleichungen, um die Dreiecke zu entfernen.",
                          "nl":  "Voeg de twee vergelijkingen toe om de driehoeken te verwijderen.",
                          "es":  "Suma las dos ecuaciones para eliminar los triángulos."
                      },
    "wn.q.40.prompt":  {
                           "fr":  "1 · 3 · 12 · 60 · 360 · ?",
                           "de":  "1 · 3 · 12 · 60 · 360 · ?",
                           "nl":  "1 · 3 · 12 · 60 · 360 · ?",
                           "es":  "1 · 3 · 12 · 60 · 360 · ?"
                       },
    "wn.q.70.option.0":  {
                             "fr":  "7",
                             "de":  "7",
                             "nl":  "7",
                             "es":  "7"
                         },
    "wn.q.28.option.0":  {
                             "fr":  "15",
                             "de":  "15",
                             "nl":  "15",
                             "es":  "15"
                         },
    "wn.q.111.prompt":  {
                            "fr":  "Un rectangle est 12 par 7. Quelle est son aire moins son périmètre ?",
                            "de":  "Ein Rechteck ist 12 von 7. Wie groß ist seine Fläche minus seinem Umfang?",
                            "nl":  "Een rechthoek is 12 bij 7. Wat is de oppervlakte minus de omtrek?",
                            "es":  "Un rectángulo es 12 por 7. ¿Cuál es su área menos su perímetro?"
                        },
    "wn.q.92.option.1":  {
                             "fr":  "18",
                             "de":  "18",
                             "nl":  "18",
                             "es":  "18"
                         },
    "wn.q.27.option.3":  {
                             "fr":  "840",
                             "de":  "840",
                             "nl":  "840",
                             "es":  "840"
                         },
    "wn.q.57.explanation":  {
                                "fr":  "Les termes sont 3·1² à 3·5² ; le suivant est 3·6² = 108.",
                                "de":  "Die Bedingungen sind 3·1² bis 3·5²; Als nächstes folgt 3·6² = 108.",
                                "nl":  "De voorwaarden zijn 3·1² tot en met 3·5²; de volgende is 3·6² = 108.",
                                "es":  "Los términos son 3·1² a 3·5²; el siguiente es 3·6² = 108."
                            },
    "wn.q.47.option.2":  {
                             "fr":  "252",
                             "de":  "252",
                             "nl":  "252",
                             "es":  "252"
                         },
    "wn.q.159.option.2":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.109.hint":  {
                          "fr":  "Multipliez les travailleurs par les heures pour les heures-travailleur.",
                          "de":  "Für Arbeitsstunden multiplizieren Sie die Zahl der Arbeiter mit den Stunden.",
                          "nl":  "Vermenigvuldig werknemers met uren voor werknemersuren.",
                          "es":  "Multiplique los trabajadores por horas para obtener las horas-trabajador."
                      },
    "wn.q.71.option.3":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.83.option.1":  {
                             "fr":  "31",
                             "de":  "31",
                             "nl":  "31",
                             "es":  "31"
                         },
    "wn.q.100.hint":  {
                          "fr":  "Évaluez l’exposant et la division avant d’ajouter.",
                          "de":  "Werten Sie den Exponenten und die Division aus, bevor Sie addieren.",
                          "nl":  "Evalueer de exponent en deling voordat u deze optelt.",
                          "es":  "Evalúa el exponente y la división antes de sumar."
                      },
    "wn.q.132.explanation":  {
                                 "fr":  "3 × 2 + 1 = 7.",
                                 "de":  "3 × 2 + 1 = 7.",
                                 "nl":  "3 × 2 + 1 = 7.",
                                 "es":  "3 × 2 + 1 = 7."
                             },
    "wn.q.103.option.3":  {
                              "fr":  "11",
                              "de":  "11",
                              "nl":  "11",
                              "es":  "11"
                          },
    "wn.q.144.hint":  {
                          "fr":  "Divisez d\u0027abord par l\u0027étoile.",
                          "de":  "Teilen Sie zuerst durch den Stern.",
                          "nl":  "Deel eerst door de ster.",
                          "es":  "Primero divide por la estrella."
                      },
    "wn.q.31.explanation":  {
                                "fr":  "Ajoutez 2, 3, 4, 5 ; ajoutez ensuite 6 pour atteindre 22.",
                                "de":  "Fügen Sie 2, 3, 4, 5 hinzu; Als nächstes fügen Sie 6 hinzu, um 22 zu erreichen.",
                                "nl":  "2, 3, 4, 5 toevoegen; voeg vervolgens 6 toe om 22 te bereiken.",
                                "es":  "Agregue 2, 3, 4, 5; luego agregue 6 para llegar a 22."
                            },
    "wn.q.6.option.2":  {
                            "fr":  "15",
                            "de":  "15",
                            "nl":  "15",
                            "es":  "15"
                        },
    "wn.q.177.option.1":  {
                              "fr":  "63",
                              "de":  "63",
                              "nl":  "63",
                              "es":  "63"
                          },
    "wn.q.40.option.3":  {
                             "fr":  "3,600",
                             "de":  "3,600",
                             "nl":  "3,600",
                             "es":  "3,600"
                         },
    "wn.q.147.hint":  {
                          "fr":  "Le total vaut trois cercles.",
                          "de":  "Die Summe entspricht dem Wert von drei Kreisen.",
                          "nl":  "Het totaal is drie cirkels waard.",
                          "es":  "El total equivale a tres círculos."
                      },
    "wn.q.95.option.3":  {
                             "fr":  "36",
                             "de":  "36",
                             "nl":  "36",
                             "es":  "36"
                         },
    "wn.q.78.prompt":  {
                           "fr":  "Il y a des oiseaux 18. À moitié s\u0027envoler. Combien restent ?",
                           "de":  "Es gibt 18 Vögel. Die Hälfte fliegt weg. Wie viele bleiben?",
                           "nl":  "Er zijn 18-vogels. Vlieg half weg. Hoeveel blijven?",
                           "es":  "Hay pájaros 18. Medio vuelo. ¿Cuantos se quedan?"
                       },
    "wn.q.11.option.1":  {
                             "fr":  "12",
                             "de":  "12",
                             "nl":  "12",
                             "es":  "12"
                         },
    "wn.q.114.option.3":  {
                              "fr":  "480 m",
                              "de":  "480 m",
                              "nl":  "480 m",
                              "es":  "480 m"
                          },
    "wn.q.81.explanation":  {
                                "fr":  "6 ÷ 3 = 2, puis 2 × 2 = 4 ; 18 − 4 = 14.",
                                "de":  "6 ÷ 3 = 2, dann 2 × 2 = 4; 18 − 4 = 14.",
                                "nl":  "6 ÷ 3 = 2, vervolgens 2 × 2 = 4; 18 − 4 = 14.",
                                "es":  "6 ÷ 3 = 2, luego 2 × 2 = 4; 18 − 4 = 14."
                            },
    "wn.q.52.option.1":  {
                             "fr":  "69",
                             "de":  "69",
                             "nl":  "69",
                             "es":  "69"
                         },
    "wn.q.180.option.0":  {
                              "fr":  "14",
                              "de":  "14",
                              "nl":  "14",
                              "es":  "14"
                          },
    "wn.q.20.prompt":  {
                           "fr":  "11 · 22 · 33 · 44 · ?",
                           "de":  "11 · 22 · 33 · 44 · ?",
                           "nl":  "11 · 22 · 33 · 44 · ?",
                           "es":  "11 · 22 · 33 · 44 · ?"
                       },
    "wn.q.88.option.3":  {
                             "fr":  "24",
                             "de":  "24",
                             "nl":  "24",
                             "es":  "24"
                         },
    "wn.q.67.prompt":  {
                           "fr":  "Il existe des tables 4 avec chacune des pieds 3. Combien de jambes au total ?",
                           "de":  "Es gibt 4-Tische mit jeweils 3-Beinen. Wie viele Beine insgesamt?",
                           "nl":  "Er zijn 4 tafels met elk 3 poten. Hoeveel poten totaal?",
                           "es":  "Hay mesas 4 con patas 3 cada una. ¿Cuántas patas en total?"
                       },
    "wn.q.33.prompt":  {
                           "fr":  "6 · 11 · 21 · 41 · ?",
                           "de":  "6 · 11 · 21 · 41 · ?",
                           "nl":  "6 · 11 · 21 · 41 · ?",
                           "es":  "6 · 11 · 21 · 41 · ?"
                       },
    "wn.q.69.prompt":  {
                           "fr":  "Une pizza comporte des tranches 8. Vous mangez du 3. Quelle fraction reste-t-il ?",
                           "de":  "Eine Pizza besteht aus 8 Scheiben. Du isst 3. Welcher Bruchteil bleibt übrig?",
                           "nl":  "Een pizza heeft plakjes 8. Je eet 3. Welk deel blijft over?",
                           "es":  "Una pizza tiene porciones 8. Comes 3. ¿Qué fracción queda?"
                       },
    "wn.q.121.option.2":  {
                              "fr":  "5",
                              "de":  "5",
                              "nl":  "5",
                              "es":  "5"
                          },
    "wn.q.107.option.0":  {
                              "fr":  "18",
                              "de":  "18",
                              "nl":  "18",
                              "es":  "18"
                          },
    "wn.q.5.option.1":  {
                            "fr":  "42",
                            "de":  "42",
                            "nl":  "42",
                            "es":  "42"
                        },
    "wn.q.177.prompt":  {
                            "fr":  "● + ▲ = 18\n● = ▲ + 4\n● × ▲ = ?",
                            "de":  "● + ▲ = 18\n● = ▲ + 4\n● × ▲ = ?",
                            "nl":  "● + ▲ = 18\n● = ▲ + 4\n● × ▲ = ?",
                            "es":  "● + ▲ = 18\n● = ▲ + 4\n● × ▲ = ?"
                        },
    "wn.q.15.hint":  {
                         "fr":  "Ce sont des multiples consécutifs de 9.",
                         "de":  "Dies sind aufeinanderfolgende Vielfache von 9.",
                         "nl":  "Dit zijn opeenvolgende veelvouden van 9.",
                         "es":  "Estos son múltiplos consecutivos de 9."
                     },
    "wn.q.106.explanation":  {
                                 "fr":  "Un tiers est 24 L, donc les trois tiers sont 72 L.",
                                 "de":  "Ein Drittel ist 24 L, also sind drei Drittel 72 L.",
                                 "nl":  "Eén derde is 24 L, dus drie derde is 72 L.",
                                 "es":  "Un tercio es 24 L, por lo que tres tercios son 72 L."
                             },
    "wn.q.59.prompt":  {
                           "fr":  "1 · 2 · 5 · 14 · 41 · ?",
                           "de":  "1 · 2 · 5 · 14 · 41 · ?",
                           "nl":  "1 · 2 · 5 · 14 · 41 · ?",
                           "es":  "1 · 2 · 5 · 14 · 41 · ?"
                       },
    "wn.q.1.option.1":  {
                            "fr":  "30",
                            "de":  "30",
                            "nl":  "30",
                            "es":  "30"
                        },
    "wn.q.130.option.3":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.51.hint":  {
                         "fr":  "Le multiplicateur augmente à chaque étape.",
                         "de":  "Der Multiplikator erhöht sich mit jedem Schritt.",
                         "nl":  "De vermenigvuldiger wordt elke stap groter.",
                         "es":  "El multiplicador aumenta en cada paso."
                     },
    "wn.q.61.option.3":  {
                             "fr":  "40",
                             "de":  "40",
                             "nl":  "40",
                             "es":  "40"
                         },
    "wn.q.49.prompt":  {
                           "fr":  "2 · 5 · 11 · 23 · 47 · ?",
                           "de":  "2 · 5 · 11 · 23 · 47 · ?",
                           "nl":  "2 · 5 · 11 · 23 · 47 · ?",
                           "es":  "2 · 5 · 11 · 23 · 47 · ?"
                       },
    "wn.q.21.hint":  {
                         "fr":  "Comparez les écarts entre les termes.",
                         "de":  "Vergleichen Sie die Lücken zwischen den Begriffen.",
                         "nl":  "Vergelijk de gaten tussen de termen.",
                         "es":  "Compara las brechas entre términos."
                     },
    "wn.q.70.prompt":  {
                           "fr":  "Qu\u0027est-ce que 3² + 1 ?",
                           "de":  "Was ist 3² + 1?",
                           "nl":  "Wat is 3² + 1?",
                           "es":  "¿Qué es 3² + 1?"
                       },
    "wn.q.34.option.3":  {
                             "fr":  "49",
                             "de":  "49",
                             "nl":  "49",
                             "es":  "49"
                         },
    "wn.q.96.option.1":  {
                             "fr":  "28",
                             "de":  "28",
                             "nl":  "28",
                             "es":  "28"
                         },
    "wn.q.140.option.2":  {
                              "fr":  "10",
                              "de":  "10",
                              "nl":  "10",
                              "es":  "10"
                          },
    "wn.q.65.hint":  {
                         "fr":  "Une douzaine signifie douze.",
                         "de":  "Ein Dutzend bedeutet zwölf.",
                         "nl":  "Een dozijn betekent twaalf.",
                         "es":  "Una docena significa doce."
                     },
    "wn.q.46.option.0":  {
                             "fr":  "181",
                             "de":  "181",
                             "nl":  "181",
                             "es":  "181"
                         },
    "wn.q.66.prompt":  {
                           "fr":  "Qu\u0027est-ce que 6 + 4 ÷ 2 ?",
                           "de":  "Was ist 6 + 4 ÷ 2?",
                           "nl":  "Wat is 6 + 4 ÷ 2?",
                           "es":  "¿Qué es 6 + 4 ÷ 2?"
                       },
    "wn.q.9.prompt":  {
                          "fr":  "1 · 3 · 6 · 10 · 15 · ?",
                          "de":  "1 · 3 · 6 · 10 · 15 · ?",
                          "nl":  "1 · 3 · 6 · 10 · 15 · ?",
                          "es":  "1 · 3 · 6 · 10 · 15 · ?"
                      },
    "wn.q.96.prompt":  {
                           "fr":  "Qu\u0027est-ce que 7 × 8 − 7 × 3 ?",
                           "de":  "Was ist 7 × 8 − 7 × 3?",
                           "nl":  "Wat is 7 × 8 − 7 × 3?",
                           "es":  "¿Qué es 7 × 8 − 7 × 3?"
                       },
    "wn.q.113.option.2":  {
                              "fr":  "36",
                              "de":  "36",
                              "nl":  "36",
                              "es":  "36"
                          },
    "wn.q.11.hint":  {
                         "fr":  "Chaque nouveau terme combine les deux précédents.",
                         "de":  "Jeder neue Begriff kombiniert die beiden vorherigen.",
                         "nl":  "Elke nieuwe term combineert de vorige twee.",
                         "es":  "Cada nuevo término combina los dos anteriores."
                     },
    "wn.q.15.explanation":  {
                                "fr":  "Le multiple suivant est 9 × 5 = 45.",
                                "de":  "Das nächste Vielfache ist 9 × 5 = 45.",
                                "nl":  "Het volgende veelvoud is 9 × 5 = 45.",
                                "es":  "El siguiente múltiplo es 9 × 5 = 45."
                            },
    "wn.q.17.option.2":  {
                             "fr":  "11",
                             "de":  "11",
                             "nl":  "11",
                             "es":  "11"
                         }
};

WHATS_NEXT_I18N_CATALOG["wn.q.65.prompt"] = {"fr":"Une douzaine de chaussettes perd 2 chaussettes dans la lessive. Combien en reste-t-il ?","de":"Ein Dutzend Socken verliert in der Wäsche 2 Socken. Wie viele sind noch übrig?","nl":"Een dozijn sokken verliest 2 sokken in de was. Hoeveel zijn er nog over?","es":"Una docena de calcetines pierde 2 calcetines en la colada. ¿Cuántos quedan?"};
WHATS_NEXT_I18N_CATALOG["wn.q.71.prompt"] = {"fr":"Un escargot gravit 2 marches par heure pendant 4 heures. Combien de marches gravit-il ?","de":"Eine Schnecke steigt 2 Stufen pro Stunde und zwar 4 Stunden lang hinauf. Wie viele Stufen steigt sie?","nl":"Een slak klimt elk uur 2 treden gedurende 4 uur. Hoeveel treden klimt de slak?","es":"Un caracol sube 2 escalones cada hora durante 4 horas. ¿Cuántos escalones sube?"};
WHATS_NEXT_I18N_CATALOG["wn.q.89.prompt"] = {"fr":"Un film de 90 minutes commence à 6:40. À quelle heure se termine-t-il ?","de":"Ein 90-minütiger Film beginnt um 6:40. Wann endet er?","nl":"Een film van 90 minuten begint om 6:40. Hoe laat is de film afgelopen?","es":"Una película de 90 minutos comienza a las 6:40. ¿A qué hora termina?"};
WHATS_NEXT_I18N_CATALOG["wn.q.99.prompt"] = {"fr":"Vous économisez 5 $ par semaine pendant 8 semaines, puis dépensez 13 $. Que vous reste-t-il ?","de":"Du sparst 8 Wochen lang jede Woche 5 $ und gibst dann 13 $ aus. Was bleibt übrig?","nl":"Je spaart 8 weken lang $5 per week en geeft daarna $13 uit. Wat blijft er over?","es":"Ahorras 5 $ cada semana durante 8 semanas y luego gastas 13 $. ¿Cuánto te queda?"};
WHATS_NEXT_I18N_CATALOG["wn.q.104.prompt"] = {"fr":"Un train parcourt 180 km en 2.5 heures. Quelle est sa vitesse moyenne ?","de":"Ein Zug fährt 180 km in 2.5 Stunden. Wie hoch ist seine Durchschnittsgeschwindigkeit?","nl":"Een trein rijdt 180 km in 2.5 uur. Wat is de gemiddelde snelheid?","es":"Un tren recorre 180 km en 2.5 horas. ¿Cuál es su velocidad media?"};
WHATS_NEXT_I18N_CATALOG["wn.q.106.prompt"] = {"fr":"Un réservoir est rempli aux 2/3 avec 48 L. Quelle est sa capacité totale ?","de":"Ein Tank ist zu 2/3 mit 48 L gefüllt. Wie groß ist sein Fassungsvermögen?","nl":"Een tank is voor 2/3 gevuld met 48 L. Wat is de volledige inhoud?","es":"Un tanque está lleno hasta 2/3 con 48 L. ¿Cuál es su capacidad total?"};
WHATS_NEXT_I18N_CATALOG["wn.q.114.prompt"] = {"fr":"Une piste de 120 m est parcourue 3.5 fois. Quelle distance cela représente-t-il ?","de":"Eine 120 m lange Strecke wird 3.5-mal gelaufen. Wie weit ist das?","nl":"Een parcours van 120 m wordt 3.5 keer afgelegd. Hoe ver is dat?","es":"Se recorre una pista de 120 m 3.5 veces. ¿Qué distancia es?"};
WHATS_NEXT_I18N_CATALOG["wn.q.119.prompt"] = {"fr":"Une facture de 120 $ est partagée entre 5 personnes, puis chacun ajoute un pourboire de 4 $. Combien chacun paie-t-il ?","de":"Eine Rechnung über 120 $ wird auf 5 Personen aufgeteilt. Anschließend gibt jeder 4 $ Trinkgeld. Wie viel zahlt jede Person?","nl":"Een rekening van $120 wordt door 5 personen gedeeld. Iedereen voegt daarna $4 fooi toe. Hoeveel betaalt ieder?","es":"Una cuenta de 120 $ se divide entre 5 personas y luego cada una añade 4 $ de propina. ¿Cuánto paga cada persona?"};
WHATS_NEXT_I18N_CATALOG["wn.category.all"] = {
    nl: "Alle puzzels",
    de: "Alle Rätsel",
    fr: "Toutes les énigmes",
    es: "Todos los acertijos"
};
WHATS_NEXT_I18N_CATALOG["wn.feedback.correct"] = {
    nl: "Dat klopt.",
    de: "Richtig.",
    fr: "C'est ça.",
    es: "¡Así es!"
};
WHATS_NEXT_I18N_CATALOG["wn.feedback.answer"] = {
    nl: "Het antwoord is",
    de: "Die Antwort lautet",
    fr: "La réponse est",
    es: "La respuesta es"
};

if (typeof window !== 'undefined' && window.JB_I18N) {
    window.JB_I18N.registerCatalog(WHATS_NEXT_I18N_CATALOG);
}
