/* 
Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach einem Passwort fragt und dann den Benutzer begrüßt.
 
Jedes Passwort wird erstmal akzeptiert.
 
Viel Erfolg!
 */
// let user = (<HTMLInputElement>document.getElementsByName("userInp")[0]).value;
 function greetUser(user: string) {
    document.getElementById("mySpan")!.textContent += "Hello " + user;
 }


