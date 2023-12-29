// FROM THE IN-CLASS VSCODE DEMO:
console.log("I am in the HTML"); // proof of life to see if our external Javascript is connected to our HTML)
alert("WELCOME!"); 

// Ask the user a question with prompt
// Store the user's input (what we get back from prompt) in a variable so that we can refer to it later on.
const usersName = prompt("What is your name?");
console.log(usersName);

// string concatenation - chaining data types together
document.write("Hi " + usersName + "!");

// Ask the user another question with prompt and store
const response = confirm("Click 'ok' if this your first time here?");

if (response) {
    // add code if the user pressed the Ok button
    document.write("<br> Thank you for visiting!");
} else {
    // add code if the user pressed the Cancel button
    document.write("<br> Welcome Back!");
}

// Ask the user another question with prompt and store
const usersAns = prompt("Are you looking for a furry friend?")
console.log(usersAns);

// CONDITIONAL LOGIC

// BASIC STRUCTURE
// if (this is true) {execute this code} else if (this is true){execute this code} else {for literally anything else not previously specified, do this}

if (usersAns == "Yes"){
    document.write("<br> Let's get searching!");
  } else if (usersAns == "yes"){
    document.write("<br> Let's get searching!");
  } else if (usersAns == "YES"){
    document.write("<br> Let's get searching!");
  } else {
    document.write("<br> Glad to have you here!");
  }

