// Operators
let number1, number2;
const question = "Enter the number";
const additionAnswer = "Addition of two numbers is ";
const subtractionAnswer = "Subtraction of two numbers is ";
const multiplicationAnswer = "Multiplication of two numbers is ";
const divisionAnswer = "Division of two numbers is ";
const modulusAnswer = "Modulus of two numbers is ";

number1 = prompt(question);
number1 = Number(number1); // Convert string to number
number2 = prompt(question);
number2 = Number(number2); // Convert string to number

// Addition
let additionResult = number1 + number2;
document.write("<p>" + additionAnswer + additionResult + "</p>");

// Subtraction
let subtractionResult = number1 - number2;
document.write("<p>" + subtractionAnswer + subtractionResult + "</p>");

// Multiplication
let multiplicationResult = number1 * number2;
document.write("<p>" + multiplicationAnswer + multiplicationResult + "</p>");

// Division
let divisionResult = number1 / number2;
document.write("<p>" + divisionAnswer + divisionResult + "</p>");

// Modulus
let modulusResult = number1 % number2;
document.write("<p>" + modulusAnswer + modulusResult + "</p>");

// increment
let incrementResult = ++number1;
document.write("<p>Increment of number1 is " + incrementResult + "</p>");

// decrement
let decrementResult = --number1;
document.write("<p>Decrement of number1 is " + decrementResult + "</p>");

// equal to
let equalToResult = number1 == number2;
document.write("<p>Is number1 equal to number2? " + equalToResult + "</p>");

// not equal to
let notEqualToResult = number1 != number2;
document.write("<p>Is number1 not equal to number2? " + notEqualToResult + "</p>");

// greater than
let greaterThanResult = number1 > number2;
document.write("<p>Is number1 greater than number2? " + greaterThanResult + "</p>");

// less than
let lessThanResult = number1 < number2;
document.write("<p>Is number1 less than number2? " + lessThanResult + "</p>");

// greater than or equal to
let greaterThanOrEqualToResult = number1 >= number2;
document.write("<p>Is number1 greater than or equal to number2? " + greaterThanOrEqualToResult + "</p>");

// less than or equal to
let lessThanOrEqualToResult = number1 <= number2;
document.write("<p>Is number1 less than or equal to number2? " + lessThanOrEqualToResult + "</p>");

