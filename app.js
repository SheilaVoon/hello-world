
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



  function rateMyPage() {
    while (true) {
      let rating = prompt("How many stars would you rate my page? (1-5)");
  
      // Check if the input is a valid number within the 1-5 range
      if (!isNaN(rating) && rating >= 1 && rating <= 5) {
        console.log(rating);
  
        for (let i = 1; i <= rating; i++) {
          document.write("<img class='puppy-img' src='Cute pupper 1.png' alt='cute lil pupper' />");
        }
  
        break; // Exit the loop if the input is valid
      } else {
        alert("Please enter a valid rating between 1 and 5.");
      }
    }
  }

    // the rateMyPage function is invoked in line 11 of index.html

    function petsOwned() {
      while (true) {
        debugger;
        let petNumber = prompt("How many pets do you currently have?");
    
        // Validate input using parseInt and check for valid conditions
        let parsedPetNumber = parseInt(petNumber);
        
        if (!isNaN(parsedPetNumber)) {
          if (parsedPetNumber === 0) {
            alert("Aw, you don't have any pets right now? No worries, you can still enjoy some cute puppers!");
            document.write("<img class='groupsofpuppies-img' src='puppygroup.png' alt='cute lil pupper' />");
            break; // Show one image for 0 pets and exit the loop
          } else if (parsedPetNumber === 1) {
            console.log(petNumber);
            for (let i = 1; i <= petNumber; i++) {
              document.getElementById("output").textContent = "You have " + petNumber + " pet:";
              document.write("<img class='puppy-img' src='Cute pupper 2.png' alt='cute lil pupper' />");
            }
            break;
          } else if (parsedPetNumber >1){
            console.log(petNumber);
            for (let i = 1; i <= petNumber; i++) {
              document.getElementById("output").textContent = "You have " + petNumber + " pets:";
              document.write("<img class='puppy-img' src='Cute pupper 2.png' alt='cute lil pupper' />");
            }
            break;
          }
       } else {
        alert("Please enter a valid number");
      }
      }
    }

       // the petsOwned function is invoked in line 13 of index.html

  

