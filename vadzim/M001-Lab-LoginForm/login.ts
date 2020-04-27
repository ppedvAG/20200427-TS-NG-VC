/* 
Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach einem Passwort fragt und dann den Benutzer begrüßt.
Jedes Passwort wird erstmal akzeptiert.
Viel Erfolg!
*/
function login(u: string) {
    return "Hello" + u;
}
let user: string = (<HTMLInputElement> document.getElementById('user')!).value;
document.getElementById('hi')!.textContent = login(user);