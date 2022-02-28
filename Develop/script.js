//create array of charactors 

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "J", "K", "L", "M",
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    

//FUNCTION THAT PROMPTS USER FOR PASSWORD OPTIONS

function getPasswordOptions(){
var length = parseInt(
  prompt("How long would you like yopur password to be?")
)
//conditonal statement to ensure proper length

if (length < 8 || length > 128){
  alert("Password must be at least eight charactors long and less than 128 charactors.")
  return null;
}

//cerate var that stores user options in an object

var specialCharactors = confirm("Click OK to confim special charactors.")
var numericCharactors = confirm("Click OK to confim numeric charactors.")
var lowerCase = confirm("Click OK to confirm lower case charactors.")
var upperCase = confirm ("Click OK to confirm upper case charactors.")

//coditional statements to check if the password does not include certin charactors

if ( 
  specialCharactors === false &&
  numericCharactors === false &&
  lowerCase === false &&
  upperCase === false ){
    alert("Must contain at least 1 special, numeric, and upper case charactor.")
    return null;
  }



//object to store user input
var getPasswordOptions = {
  length: length,
  specialCharactors: specialCharactors,
  numericCharactors: numericCharactors,
  lowerCase: lowerCase,
  upperCase: upperCase
}

return getPasswordOptions;

};

//function for getting random charactors from the array

function getRandom(arr){
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// function to generate password with user input


function generatePassword(){
  var options = getPasswordOptions()
  //var to store password options
  var result = []

  //array to store types of characters to include in password
  var possibleCharacters = []

  //array that will contain one of each type of chosen charactors 
  var guaranteedCharactors = []

  //check if option exists, if not exit the function
  if (!options) return null

//conditional statements that add user input to charactor specific arrays

if (options.specialCharactors){
  possibleCharacters = possibleCharacters.concat(special);
  guaranteedCharactors.push(getRandom(special));
}
if (options.numericCharactors){
  possibleCharacters = possibleCharacters.concat(number);
  guaranteedCharactors.push(getRandom(number));
}
if (options.lowerCase){
  possibleCharacters = possibleCharacters.concat(lettersLower);
  guaranteedCharactors.push(getRandom(lettersLower));
}
if (options.upperCase){
  possibleCharacters = possibleCharacters.concat(lettersUpper);
  guaranteedCharactors.push(getRandom(lettersUpper));
}

//for loop to iterate over the length from the option object, selecting random indices from the array of possible charactors and
//concatenating those charcotrs into the result variable

for (var i = 0; i < options.length; i++){
  var possibleCharacters = getRandom(possibleCharacters);
  result.push(possibleCharacters);
}

//add at least one of the guaranteedCharactors in the result. 

for (var i = 0; i < guaranteedCharactors.length; i++){
 result[i] = guaranteedCharactors[i];
}

//turn the result into a string and pass into writePassword

return result.join("")

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
var generateBtn = document.querySelector("#generate")
generate.addEventListener("click", writePassword);

writePassword();
