
'use strict'; // will help you to follow strict javascript rules

// FROM THE IN-CLASS VSCODE DEMO:
// console.log("I am in the HTML"); // proof of life to see if our external Javascript is connected to our HTML)
// alert("WELCOME!"); 

// Ask the user a question with prompt
// Store the user's input (what we get back from prompt) in a variable so that we can refer to it later on.
// const usersName = prompt("Hi! What is your name?");
// console.log(usersName);

function getName (){
  const usersName = prompt("Hi! What is your name?");
  // declaring a constant variable called usersName, assigning it the value of what the prompt returns (the user's input)
  return usersName;
}

// the getName function is invoked in line 13 of index.html

function greetUser(){
  document.write("Hi " + theirName + "!");
}

// the greetUser function is invoked in line 14 of index.html


// // Ask the user another question with prompt and store
// const response = confirm("Click 'ok' if this your first time here?");

// if (response) {
//     // add code if the user pressed the Ok button
//     document.write("<br> Thank you for visiting!");
// } else {
//     // add code if the user pressed the Cancel button
//     document.write("<br> Welcome Back!");
// }

function getResponse(){
  const usersResponse = confirm("Click 'Ok' if this is your first time here?")
  if (usersResponse){
    document.write("<br> Thank you for visiting!");
  } else {
    document.write("<br> Welcome Back!");
  }
}

// the getResponse function is invoked in line 22 of index.html

// // Ask the user another question with prompt and store
// const usersAns = prompt("Are you looking for a furry friend?")
// console.log(usersAns);

// // CONDITIONAL LOGIC

// // BASIC STRUCTURE
// // if (this is true) {execute this code} else if (this is true){execute this code} else {for literally anything else not previously specified, do this}

// if (usersAns == "Yes"){
//     document.write("<br> Let's get searching!");
//   } else if (usersAns == "yes"){
//     document.write("<br> Let's get searching!");
//   } else if (usersAns == "YES"){
//     document.write("<br> Let's get searching!");
//   } else {
//     document.write("<br> Glad to have you here!");
//   }

 function letsGoSearching() {
  document.write("<br> Let's get searching!");
 }
  function getAnswer(){
    const usersAnswer = prompt ("Are you looking for a furry friend?")
    console.log(usersAnswer);
    if (usersAnswer == "Yes"){
      letsGoSearching();
    } else if (usersAnswer == "yes"){
      letsGoSearching();
    } else if (usersAnswer == "YES"){
      letsGoSearching();
    } else {
      document.write("<br> Glad to have you here!");
    }
  }

  // the getAnswer function is invoked in line 23 of index.html

