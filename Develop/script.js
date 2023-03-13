// Assignment code here
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// function to get the desired password criteria
function passwordCriteria(){
  // prompt for desired password length
  var length = parseInt(prompt("Enter password length - between 8 and 128:"));
  // added alert for password length less than 8 or greater than 128
  if (length < 8 || length > 128){
    alert("Password length must be between 8 and 128");
    return null;
  };

  var upperCase = confirm("Include upper case letters?");
  var lowerCase = confirm("Include lower case letters?");
  var number = confirm("Include numbers?");
  var specialChar = confirm("Include special characters?");
  // add alert if none of the criteria is selected
  if(!upperCase && !lowerCase && !number && !specialChar){
    alert("At least one character criteria must be selected");
    return null;
  }
  
  return{
    length: length, 
    upperCase: upperCase, 
    lowerCase: lowerCase, 
    number: number, 
    specialChar: specialChar
  };

}

function generatePassword(passwordCriteria){
  var charOptions = "";
  var password = "";

  if (passwordCriteria.upperCase){charOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";} //split char options into array
  if (passwordCriteria.lowerCase){charOptions += "abcdefghijklmnopqrstuvwxyz";} //split char options into array
  if (passwordCriteria.number){charOptions += "1234567890";}
  // if (passwordCriteria.number){charOptions += "1234567890".split()};
  if (passwordCriteria.specialChar){charOptions += "!@#$%^&*()_+-={}[]|\/?.>,<`~";
};
  
  for (var i=0; i < passwordCriteria.length; i++){
    password += charOptions.charAt(Math.floor(Math.random() * charOptions.length));
   
    // var randomIndex = Math.floor(Math.random() * charOptions.length);
    // password += charOptions[randomIndex];
  }
  return password;
};

generatePassword(passwordCriteria());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) { //function 'writePassword' called when user clicks button to generate new password
  // prevent default action if there's a button in a form
  event.preventDefault();
  var password = generatePassword(passwordCriteria()); //added passwordCriteria
  var passwordText = document.querySelector("#password"); //use querySelector method of the document object to select the HTML element with an id of password
  // var passwordText = document.getElementById("password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// on page load, prompts are loaded, need to remove that
// need to add validation for each prompt