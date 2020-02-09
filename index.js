// console.log("What does process.argv contain?", process.argv);

var weightInKg = process.argv[2];
var heightInM = process.argv[3];

// The formula for BMI is: weight (kg) / (height (m) x height (m))
var BMI = weightInKg / (heightInM * heightInM);

console.log(`
**************
BMI CALCULATOR
**************

height: ${heightInM}
weight: ${weightInKg}

****************
FACING THE FACTS
****************

Your BMI is ${Math.round(BMI)}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight
`);
