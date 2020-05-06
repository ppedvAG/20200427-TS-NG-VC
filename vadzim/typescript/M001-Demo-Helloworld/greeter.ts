function giveAge(geburtsjahr: number) {
    return 2020 - geburtsjahr;
}

let gebJahr: number = 1984;
document.getElementsByTagName("span")[0].textContent! += String(giveAge(gebJahr));

// window object in typescript
window.alert("message"); // funktioniert