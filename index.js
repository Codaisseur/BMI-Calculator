// console.log("What does process.argv contain?", process.argv);

var weightInKg = parseInt(process.argv[2]);
var heightInM = parseFloat(process.argv[3]);

// The formula for BMI is: weight (kg) / (height (m) x height (m))
var BMI = weightInKg / (heightInM * heightInM);

// Assumptions ideal BMI is 22.5
// The formula for idealWeight is 22.5 x height (m) x height (m)
var idealWeight = 22.5 * heightInM * heightInM;

console.log(`
**************
BMI CALCULATOR
**************

height: ${heightInM} m
weight: ${weightInKg} kg

****************
FACING THE FACTS
****************

Your BMI is ${Math.round(BMI)}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight

Your ideal weight is ${Math.round(idealWeight)} kg
`);
