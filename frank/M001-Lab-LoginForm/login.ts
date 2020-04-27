/* 
Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach einem Passwort fragt und dann den Benutzer begrüßt.
 
Jedes Passwort wird erstmal akzeptiert.
 
Viel Erfolg!
 */



 

 function btn_login_pressed() {
    
    let username: string = "";
    let passwort: string = "";
    let myMessage: string = "";

    username = (<HTMLInputElement> document.getElementById('name')!).value;
    passwort = (<HTMLInputElement> document.getElementById('pwd')!).value;

    if (passwort === "")
    {
        myMessage = "you have to enter a passwort";
    }
    else 
    { 
        myMessage = "Hello " + username  + " Welcome Back";
    }

    document.getElementById("welcome")!.textContent += myMessage ;

 }