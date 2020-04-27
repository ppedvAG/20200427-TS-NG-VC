"use strict";
function giveAge(birthYear) {
    return 2020 - birthYear;
}
var birthYear = 1987;
document.getElementsByTagName("span")[0].textContent
    += String(giveAge(birthYear));
