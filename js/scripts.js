function verif_signup(event) {
  event.preventDefault();
  var pmail = document.forms["form"]["pmail"];
  var cemail = document.forms["form"]["cemail"];
  var pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var mdp = document.forms["form"]["mdp"];
  var name = document.forms["form"]["name"];
  var pattern2 = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;

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

  if (!pmail.value.match(pattern)) {
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

  if (!mdp.value.match(pattern2)) {
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
function verif_login(event) {
  event.preventDefault();
  var lmail = document.forms["forml"]["lmail"];
  var pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var mdp = document.forms["forml"]["psw"];
  var pattern2 = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;

  if (!lmail.value) {
    document.getElementById("erroremail").innerHTML =
      "Veuillez saisir votre mail";
    lmail.focus();
    return false;
  } else {
    document.getElementById("erroremail").innerHTML = "";
  }

  if (!mdp.value) {
    document.getElementById("errormdp").innerHTML =
      "Veuillez saisir votre mot de passe";
    mdp.focus();
    return false;
  } else {
    document.getElementById("errormdp").innerHTML = "";
  }

  if (!mdp.value.match(pattern2)) {
    document.getElementById("errormdp").innerHTML =
      "Le mot de passe doit contenir au moins 8 caractères, dont au moins : Une lettre majuscule, Une lettre minuscule et un nombre et un caractére speciale";
    mdp.focus();
    return false;
  } else {
    document.getElementById("errormdp").innerHTML = "";
  }

  if (!lmail.value.match(pattern)) {
    document.getElementById("errorcemail").innerHTML =
      "Veuillez vérifier votre mail";
    lmail.focus();
    return false;
  } else {
    document.getElementById("errorcemail").innerHTML = "";
  }
}
