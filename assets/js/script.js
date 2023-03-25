
////  PASSWORD CRITERIA NEEDED FOR PROMPTS TO GENERATE A PASSWORD ////

var passwordLength;
var lowerCaseCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberCharacter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '|', '?', '<', '>']

var generateBtn = document.querySelector("#generate");



////  PROMPTS THE USER NEEDS TO ANSWER BEFORE GENERATING A PASSWORD  ////

function promptAnswers(){
  passArray = [];
  passwordLength = parseInt(prompt('How long do you want your password? (8 - 128 characters)'));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return false;
  }

  if (confirm ("Would you like lowercase letters?")) {
    passArray = passArray.concat(lowerCaseCharacter);
  }

  if (confirm ("Would you like uppercase letters?")) {
    passArray = passArray.concat(upperCaseCharacter);
  }

  if (confirm ("Would you like numbers?")) {
    passArray = passArray.concat(numberCharacter);
  }

  if (confirm ("Would you like special characters?")) {
    passArray = passArray.concat(specialCharacter);
  }
  return true;
}



//// ONCE PROMPTS ARE CORRECT////

function writePassword() {
  var correctAnswers = promptAnswers();
  var passwordText = document.querySelector("#password");


  if (correctAnswers) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }
}

generateBtn.addEventListener("click", writePassword);


function generatePassword () {
  var password = '';
  for(i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * passArray.length);
    password = password + passArray[randomIndex];
  }
  return password;
}
