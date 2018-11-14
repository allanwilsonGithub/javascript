/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //comment
console.log(isFullAge)

var ageJohn = now - yearJohn;
console.log("John is: " + ageJohn)
var ageMark = 35;
var average = ageJohn + ageMark / 2;
console.log(average)

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 -6 // 26
console.log(x, y);

*/


//Coding Challenge:

var markHeight = prompt("What is Mark's height in metres?: ");
console.log(markHeight + ' metres');
var markMass = prompt("What is Mark's mass in kgs?: ");
console.log(markMass + ' kgs');

// Get Height's and Mass (the challenge said mass but I think it should be 'weight')
var johnHeight = prompt("What is John's height in metres?: ");
console.log(johnHeight + ' metres');
var johnMass = prompt("What is John's mass in kgs?: ");
console.log(johnMass);

// Calculate BMI
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI,johnBMI);

// Who is a fat fecker?
var isMarkBMIGreaterThanJohnBMI = markBMI > johnBMI;
console.log("Mark's BMI is greater than John's: " + isMarkBMIGreaterThanJohnBMI);
alert("Mark's BMI is greater than John's: " + isMarkBMIGreaterThanJohnBMI);