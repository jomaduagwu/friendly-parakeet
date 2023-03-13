// Assignment code here

// function to get the desired password criteria
function passwordCriteria(){
  // prompt for desired password length
  var length = parseInt(prompt("Enter password length - between 8 and 128:"));
  // add alert if user inputs a password length less than 8, greater than 128, or a non-integer value
  if (length < 8 || length > 128 || isNaN(length)){
    alert("Password length must be a number between 8 and 128");
    return null;
  };

  var upperCase = confirm("Include upper case letters?");
  var lowerCase = confirm("Include lower case letters?");
  var number = confirm("Include numbers?");
  var specialChar = confirm("Include special characters?");
  // add alert if none of the criteria is selected
  if(!upperCase && !lowerCase && !number && !specialChar){
    alert("At least one password criteria must be selected");
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

// function to generate a password based on user's selected password criteria
function generatePassword(passwordCriteria){
  var charOptions = "";
  var password = "";

  if (passwordCriteria.upperCase){charOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
  if (passwordCriteria.lowerCase){charOptions += "abcdefghijklmnopqrstuvwxyz";} 
  if (passwordCriteria.number){charOptions += "1234567890";}
  if (passwordCriteria.specialChar){charOptions += "!@#$%^&*()_+-={}[]|\/?.>,<`~";};
  
  for (var i=0; i < passwordCriteria.length; i++){
    password += charOptions.charAt(Math.floor(Math.random() * charOptions.length));
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) { 
  // prevent default action if there's a button in a form
  event.preventDefault();
  var password = generatePassword(passwordCriteria()); //added passwordCriteria
  var passwordText = document.querySelector("#password"); 
  
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

