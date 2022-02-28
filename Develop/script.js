//create array of charactors 

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "J", "K", "L", "M",
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    

//FUNCTION THAT PROMPTS USER FOR PASSWORD OPTIONS

function generatePassword(){
  var options = getPasswordOptions()
  //var to store password options
  var result = []
  //arry to store types of characters to include in password
  var possibleCharacters = []
  //array that will contain one of each type of chosen charactors 
  var guaranteedCharactors = []
  //check if obtion exists, if not exit the function
  if (!options) return null
}

//conditonal statements that check if they dont include certin charators

if (length < 8){
  alert("Password must be at least eight charactors long")
}




//cerate var that stores user options in an object

var speacialCharactors = confirm("Click OK to confim special charactors.")
var numericCharactors = confirm("Click OK to confim numeric charactors.")
var lowerCase = confirm("Click OK to confirm lower case charactors.")
var upperCase = confirm ("Click OK to confirm upper case charactors.")

//function that generates random number stord in the above var





// Assignment Code


  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//

// Add event listener to generate button
var generateBtn = document.querySelector("#generate")
generate.addEventListener("click", writePassword);

writePassword();
