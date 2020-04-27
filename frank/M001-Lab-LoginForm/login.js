"use strict";
/*
Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach einem Passwort fragt und dann den Benutzer begrüßt.
 
Jedes Passwort wird erstmal akzeptiert.
 
Viel Erfolg!
 */
function btn_login_pressed() {
    var username = "";
    var passwort = "";
    var myMessage = "";
    username = document.getElementById('name').value;
    passwort = document.getElementById('pwd').value;
    if (passwort === "") {
        myMessage = "you have to enter a passwort";
    }
    else {
        myMessage = "Hello " + username + " Welcome Back";
    }
    document.getElementById("welcome").textContent = myMessage;
}
