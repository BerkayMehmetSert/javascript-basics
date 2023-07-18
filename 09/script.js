// Document Properties
document.write("<h1>Document Properties</h1>");
document.write("<p>URL: " + document.URL + "</p>");
document.write("<p>Domain: " + document.domain + "</p>");
document.write("<p>Referrer: " + document.referrer + "</p>");
document.write("<p>Title: " + document.title + "</p>");
document.write("<p>Cookie: " + document.cookie + "</p>");
document.write("<p>Last Modified: " + document.lastModified + "</p>");
document.write("<p>Ready State: " + document.readyState + "</p>");
document.write("<p>Character Set: " + document.characterSet + "</p>");
document.write("<p>Content Type: " + document.contentType + "</p>");

// Document Methods
document.write("<h1>Document Methods</h1>");
document.write("<p>Get Element By ID: " + document.getElementById("test") + "</p>");
let result = document.getElementById("test").innerHTML = "Updated";
let color = document.getElementById("test").style.color = "red";
document.write("<p>Update Element By ID: " + result + "</p>");
document.write("<p>Update Element By ID: " + color + "</p>");

document.write("<p>Get Elements By Tag Name: " + document.getElementsByTagName("p") + "</p>");
let result2 = document.getElementsByTagName("p")[0].innerHTML = "Updated";
let color2 = document.getElementsByTagName("p")[0].style.color = "blue";
document.write("<p>Update Element By Tag Name: " + result2 + "</p>");
document.write("<p>Update Element By Tag Name: " + color2 + "</p>");

document.write("<p>Get Elements By Class Name: " + document.getElementsByClassName("test") + "</p>");
let result3 = document.getElementsByClassName("test")[0].innerHTML = "Updated";
let color3 = document.getElementsByClassName("test")[0].style.color = "green";
document.write("<p>Update Element By Class Name: " + result3 + "</p>");
document.write("<p>Update Element By Class Name: " + color3 + "</p>");

document.write("<p>Get Elements By Name: " + document.getElementsByName("p") + "</p>");
let result4 = document.getElementsByName("p")[0].innerHTML = "Updated";
let color4 = document.getElementsByName("p")[0].style.color = "yellow";
document.write("<p>Update Element By Name: " + result4 + "</p>");
document.write("<p>Update Element By Name: " + color4 + "</p>");