function addiere(): void {
   let result: number = Number((<HTMLInputElement> document.getElementById("zahl1")!).value) + Number((<HTMLInputElement> document.getElementById("zahl2")!).value);
   (<HTMLInputElement> document.getElementById("resultat")!).value = String(result);
}
function subtrahiere():void {
    let result: number = Number((<HTMLInputElement> document.getElementById("zahl1")!).value) - Number((<HTMLInputElement> document.getElementById("zahl2")!).value)
   document.getElementById("resultat")!.textContent = String(result);
}
function multipliziere():void {
    let result: number = Number((<HTMLInputElement> document.getElementById("zahl1")!).value) * Number((<HTMLInputElement> document.getElementById("zahl2")!).value)
   document.getElementById("resultat")!.textContent = String(result);
}
function teile():void {
    let result: number = Number((<HTMLInputElement> document.getElementById("zahl1")!).value) / Number((<HTMLInputElement> document.getElementById("zahl2")!).value)
    document.getElementById("resultat")!.textContent = String(result);
}