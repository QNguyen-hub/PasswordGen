// Assignment Code
var generateBtn = document.querySelector("#generate");
var bigLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialchar = ["#", "$", "%", "&", "*", "=", "@", "~"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Goes throught the array of bigLetters and return with Lower case letters
var smallLetters = bigLetters.map((array) => {
  return array.toLowerCase();
});

var allChar = smallLetters.concat(bigLetters, specialchar, numbers);
//Prompt user for option on numbers of char and what kind.
var userInputNum = prompt("How many character for your password?");
if (isNaN(userInputNum)) {
  alert("Only numbers please.");
} else {
  var userInputSpec = prompt("Would you like special characters?");
}

//Generate randompassword from the Array
function generatePassword() {
  var password = "";
  for (var i = 0; i < userInputNum; i++) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
