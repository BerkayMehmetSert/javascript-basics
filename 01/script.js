// Variables
var text;
text = "Hello World!";
var number, number2;
number = 10;
number2 = 20;

// Constants
const PI = 3.14;
let x = 10;

// Output
alert(text); // Shows an alert box
document.write(text); // Writes to the HTML document
console.log(text); // Writes to the console
document.getElementById("heading").innerHTML = text; // Writes to an HTML element

let userInput = prompt("Please enter your name"); // Prompts the user for input
document.write("Hello " + userInput + "!"); // Concatenates strings

// Variable types
let stringType = "Hello World!";
let numberType = 10;
let booleanType = true;
let objectType = {name: "John", age: 30, city: "New York"};

document.write(typeof stringType + "<br/>"); // Outputs "string"
document.write(typeof numberType + "<br/>"); // Outputs "number"
document.write(typeof booleanType + "<br/>"); // Outputs "boolean"
document.write(typeof objectType + "<br/>"); // Outputs "object"

// Data Type Conversion
let numberToString = 10;
let stringToNumber = "10";

//let result = String(numberToString);
let result = Number(stringToNumber);

document.write(typeof result + "<br/>");

