/**
 *
 * Sign up submit handler
 *
 */

function verify_signup(event) {
  event.preventDefault();
  let pmail = document.forms["form"]["pmail"];
  let cemail = document.forms["form"]["cemail"];
  let mdp = document.forms["form"]["mdp"];
  let name = document.forms["form"]["name"];

  if (!pmail.value) {
    document.getElementById("erroremail").innerHTML =
      "Veuillez saisir votre mail";
    pmail.focus();
    return false;
  } else {
    document.getElementById("erroremail").innerHTML = "";
  }

  if (!cemail.value) {
    document.getElementById("errorcemail").innerHTML =
      "Veuillez confirmer votre adresse email";
    cemail.focus();
    return false;
  } else {
    document.getElementById("errorcemail").innerHTML = "";
  }
  if (cemail.value !== pmail.value) {
    document.getElementById("errorcemail").innerHTML =
      "les emails doivent correspondre";
    cemail.focus();
    return false;
  } else {
    document.getElementById("errorcemail").innerHTML = "";
  }

  if (!isValidEmail(pmail.value)) {
    document.getElementById("errorcemail").innerHTML =
      "Veuillez vérifier votre mail";
    pmail.focus();
    return false;
  } else {
    document.getElementById("errorcemail").innerHTML = "";
  }

  if (!mdp.value) {
    document.getElementById("errormdp").innerHTML =
      "Veuillez saisir votre mot de passe";
    mdp.focus();
    return false;
  } else {
    document.getElementById("errormdp").innerHTML = "";
  }

  if (!isValidPassword(mdp.value)) {
    document.getElementById("errormdp").innerHTML =
      "Le mot de passe doit contenir au moins 8 caractères, dont au moins : Une lettre majuscule, Une lettre minuscule et un nombre et un caractére speciale";
    mdp.focus();
    return false;
  } else {
    document.getElementById("errormdp").innerHTML = "";
  }

  if (!name.value) {
    document.getElementById("errorname").innerHTML =
      "Veuillez saisir votre Nom";
    name.focus();
    return false;
  } else {
    document.getElementById("errorname").innerHTML = "";
  }
}

/**
 *
 * Login page submit handler
 *
 */
function verify_login(event) {
  event.preventDefault();
  let emailInput = document.forms["forml"]["lmail"];
  let mdpInput = document.forms["forml"]["psw"];

  if (!emailInput.value) {
    document.getElementById("erroremail").innerHTML =
      "Veuillez saisir votre mail";
    emailInput.focus();
    return false;
  } else {
    document.getElementById("erroremail").innerHTML = "";
  }

  if (!mdpInput.value) {
    document.getElementById("errormdp").innerHTML =
      "Veuillez saisir votre mot de passe";
    mdpInput.focus();
    return false;
  } else {
    document.getElementById("errormdp").innerHTML = "";
  }

  if (!isValidPassword(mdpInput.value)) {
    document.getElementById("errormdp").innerHTML =
      "Le mot de passe doit contenir au moins 8 caractères, dont au moins : Une lettre majuscule, Une lettre minuscule et un nombre et un caractére speciale";
    mdpInput.focus();
    return false;
  } else {
    document.getElementById("errormdp").innerHTML = "";
  }

  if (!isValidEmail(emailInput.value)) {
    document.getElementById("errorcemail").innerHTML =
      "Veuillez vérifier votre mail";
    emailInput.focus();
    return false;
  } else {
    document.getElementById("errorcemail").innerHTML = "";
  }
}
