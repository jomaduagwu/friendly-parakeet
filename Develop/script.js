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

//need to set password options - uppercase, lowercase, numbers and special characters
//need a prompt for each
//need to specify the length--> 8 >= length < 129
function generatePassword(length){
  var charOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={}[]|\;:'/?.>,<`~";
  var passwordLength = 
  for (var i=0; i < length; i++){
    var randomIndex = Math.floor(Math.random()*charOptions.length);
  }
  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { //function 'writePassword' called when user clicks button to generate new password
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //use querySelector method of the document object to select the HTML element with an id of password

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
