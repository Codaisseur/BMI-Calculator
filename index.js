// console.log("What does process.argv contain?", process.argv);

var weightInKg = parseInt(process.argv[2]);
var heightInM = parseFloat(process.argv[3]);

// hardcode the data for age
var age = 32;

// Checking myself
console.log("age:", age);

// The formula for BMI is: weight (kg) / (height (m) x height (m))
var BMI = weightInKg / (heightInM * heightInM);

// Assumptions ideal BMI is 22.5
// The formula for idealWeight is 22.5 x height (m) x height (m)
var idealWeight = 22.5 * heightInM * heightInM;

// The formula for Basal Metabolic Rate (BMR) is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
var heightInCm = heightInM * 100;
var BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age;

// Checking myself
console.log("BMR", BMR);

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
