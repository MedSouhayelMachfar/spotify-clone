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
  // error elements
  let errorEmailElement = document.getElementById("erroremail");
  let errorCeEmailElement = document.getElementById("errorcemail");
  let errorNameElement = document.getElementById("errorname");
  let errorPasswordElement = document.getElementById("errormdp");
  // Validating form inputs
  if (isEmpty(pmail.value)) {
    errorEmailElement.innerHTML = "Veuillez saisir votre mail";
    pmail.focus();
    return false;
  } else {
    errorEmailElement.innerHTML = "";
  }

  if (isEmpty(cemail.value)) {
    errorCeEmailElement.innerHTML = "Veuillez confirmer votre adresse email";
    cemail.focus();
    return false;
  } else {
    errorCeEmailElement.innerHTML = "";
  }
  if (cemail.value !== pmail.value) {
    errorCeEmailElement.innerHTML = "les emails doivent correspondre";
    cemail.focus();
    return false;
  } else {
    errorCeEmailElement.innerHTML = "";
  }

  if (!isValidEmail(pmail.value)) {
    errorCeEmailElement.innerHTML = "Veuillez vérifier votre mail";
    pmail.focus();
    return false;
  } else {
    errorCeEmailElement.innerHTML = "";
  }

  if (!mdp.value) {
    errorPasswordElement.innerHTML = "Veuillez saisir votre mot de passe";
    mdp.focus();
    return false;
  } else {
    errorPasswordElement.innerHTML = "";
  }

  if (!isValidPassword(mdp.value)) {
    errorPasswordElement.innerHTML =
      "Le mot de passe doit contenir au moins 8 caractères, dont au moins : Une lettre majuscule, Une lettre minuscule et un nombre et un caractére speciale";
    mdp.focus();
    return false;
  } else {
    errorPasswordElement.innerHTML = "";
  }

  if (!name.value) {
    errorNameElement.innerHTML = "Veuillez saisir votre Nom";
    name.focus();
    return false;
  } else {
    errorNameElement.innerHTML = "";
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
  let emailInput = document.forms["forml"]["lmail"];
  let mdpInput = document.forms["forml"]["psw"];

  let errorEmailElement = document.getElementById("erroremail");
  let errorPwdElement = document.getElementById("errormdp");

  // Validating form inputs
  if (!emailInput.value) {
    errorEmailElement.innerHTML = "Veuillez saisir votre mail";
    emailInput.focus();
    return false;
  } else {
    errorEmailElement.innerHTML = "";
  }

  if (!mdpInput.value) {
    errorPwdElement.innerHTML = "Veuillez saisir votre mot de passe";
    mdpInput.focus();
    return false;
  } else {
    errorPwdElement.innerHTML = "";
  }

  if (!isValidPassword(mdpInput.value)) {
    errorPwdElement.innerHTML =
      "Le mot de passe doit contenir au moins 8 caractères, dont au moins : Une lettre majuscule, Une lettre minuscule et un nombre et un caractére speciale";
    mdpInput.focus();
    return false;
  } else {
    errorPwdElement.innerHTML = "";
  }

  if (!isValidEmail(emailInput.value)) {
    errorPwdElement.innerHTML = "Veuillez vérifier votre mail";
    emailInput.focus();
    return false;
  } else {
    errorPwdElement.innerHTML = "";
  }
}
