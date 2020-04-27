"use strict";
function giveAge(geburtsjahr) {
    return 2020 - geburtsjahr;
}
let gebJahr = 1984;
// 
document.getElementsByTagName("span")[0].textContent += String(giveAge(gebJahr));
