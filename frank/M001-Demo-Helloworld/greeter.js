"use strict";
function giveAge(geburtsjahr) {
    return 2020 - geburtsjahr;
}
let gebJahr = 1975;
//document.body.textContent! += giveAge(gebJahr);
document.getElementsByTagName("span")[0].textContent += giveAge(gebJahr);
