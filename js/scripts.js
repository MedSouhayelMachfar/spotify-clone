/**
 *
 * Sign up submit handler
 *
 */

function verify_signup(event) {
  // Preventing the default browser behavior
  // Not refreshing the page when submitting
  event.preventDefault();

  // Getting the DOM elements
  // main elements
  let pmail = document.forms["form"]["pmail"];
  let cemail = document.forms["form"]["cemail"];
  let mdp = document.forms["form"]["mdp"];
  let name = document.forms["form"]["name"];
  let dateDayElement = document.getElementById("date-day");
  let dateMonthElement = document.getElementById("date-month");
  let dateYearElement = document.getElementById("date-year");

  // error elements
  let errorEmailElement = document.getElementById("erroremail");
  let errorCeEmailElement = document.getElementById("errorcemail");
  let errorNameElement = document.getElementById("errorname");
  let errorPasswordElement = document.getElementById("errormdp");
  let errorDateElement = document.getElementById("errorDate");

  // Resetting error messages
  errorEmailElement.innerHTML = "";
  errorCeEmailElement.innerHTML = "";
  errorNameElement.innerHTML = "";
  errorPasswordElement.innerHTML = "";
  errorPasswordElement.innerHTML = "";
  errorDateElement.innerHTML = "";

  // Validating form inputs
  if (isEmpty(pmail.value)) {
    errorEmailElement.innerHTML = "Veuillez saisir votre mail";
    pmail.focus();
    return;
  }

  if (isEmpty(cemail.value)) {
    errorCeEmailElement.innerHTML = "Veuillez confirmer votre adresse email";
    cemail.focus();
    return;
  }
  if (!isSimilar(cemail.value, pmail.value)) {
    errorCeEmailElement.innerHTML = "les emails doivent correspondre";
    cemail.focus();
    return;
  }

  if (!isValidEmail(pmail.value)) {
    errorCeEmailElement.innerHTML = "Veuillez vérifier votre mail";
    pmail.focus();
    return;
  }

  if (isEmpty(mdp.value)) {
    errorPasswordElement.innerHTML = "Veuillez saisir votre mot de passe";
    mdp.focus();
    return;
  }

  if (!isValidPassword(mdp.value)) {
    errorPasswordElement.innerHTML =
      "Le mot de passe doit contenir au moins 8 caractères, Une lettre majuscule, minuscule, un nombre et un caractére speciale";
    mdp.focus();
    return;
  }

  if (isEmpty(name.value)) {
    errorNameElement.innerHTML = "Veuillez saisir votre Nom";
    name.focus();
    return;
  }

  if (
    isEmpty(dateDayElement.value) ||
    isEmpty(dateMonthElement.value) ||
    isEmpty(dateYearElement.value)
  ) {
    errorDateElement.innerHTML = "Veuillez saisir votre date de naissance";
    dateYearElement.focus();
    return;
  }
}

/**
 *
 * Login page submit handler
 *
 */
function verify_login(event) {
  // Preventing the default browser behavior
  // Not refreshing the page when submitting
  event.preventDefault();

  // Getting the DOM elements
  // main elements
  let emailInput = document.forms["forml"]["lmail"];
  let mdpInput = document.forms["forml"]["psw"];

  //error elements
  let errorEmailElement = document.getElementById("erroremail");
  let errorPwdElement = document.getElementById("errormdp");

  // Resetting error messages
  errorPwdElement.innerHTML = "";
  errorEmailElement.innerHTML = "";

  // Validating form inputs
  if (isEmpty(emailInput.value)) {
    errorEmailElement.innerHTML = "Veuillez saisir votre mail";
    emailInput.focus();
    return;
  }

  if (isEmpty(mdpInput.value)) {
    errorPwdElement.innerHTML = "Veuillez saisir votre mot de passe";
    mdpInput.focus();
    return;
  }

  if (!isValidPassword(mdpInput.value)) {
    errorPwdElement.innerHTML =
      "Le mot de passe doit contenir au moins 8 caractères, dont au moins : Une lettre majuscule, Une lettre minuscule et un nombre et un caractére speciale";
    mdpInput.focus();
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    errorPwdElement.innerHTML = "Veuillez vérifier votre mail";
    emailInput.focus();
    return;
  }
}
