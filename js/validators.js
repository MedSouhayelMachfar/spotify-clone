// Email validation
// To be valid : (match the email patters: ****@***.***)
// Return true if it's valid
// Return false if it's  not valid
function isValidEmail(email) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(regexEmail) ? true : false;
}

// Alphabetic string validation
// To be valid : (only alphabetical letters are allowed)
// Return true if it's valid
// Return false if it's  not valid
function isValidAlphabetLetter(letters) {
  let regexAlphabetical = /^[a-zA-Z]+$/;
  return letters.match(regexAlphabetical) ? true : false;
}

// Password validation
// To be valid : (minimum 8 characters long including => 1 uppercase letter, 1 number, 1 symbol)
// Return true if it's valid
// Return false if it's  not valid
function isValidPassword(pwd) {
  let regexPassword = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
  return pwd.match(regexPassword) ? true : false;
}

// Empty string validation
// To be valid : the string should be empty
// Return true if it's valid
// Return false if it's  not valid
function isEmpty(ch) {
  return ch === "" ? true : false;
}
