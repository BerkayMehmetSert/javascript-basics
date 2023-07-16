let age;
const question = "How old are you?";
const greater = "You are older than 18";
const equal = "You are 18";
const less = "You are younger than 18";

age = prompt(question);
age = parseInt(age); // convert string to number

if (age == 18) {
    document.write(equal);
} else if (age > 18) {
    document.write(greater);
} else {
    document.write(less);
}

// document.write("<p>Using ternary operator</p>");
// age >= 18 ? document.write(greater) : document.write(less);