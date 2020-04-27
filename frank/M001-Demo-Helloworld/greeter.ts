

function giveAge(geburtsjahr: number) {
    return 2020 - geburtsjahr;
}

let gebJahr: number = 1975;

//document.body.textContent! += giveAge(gebJahr);

document.getElementsByTagName("span")[0].textContent! += giveAge(gebJahr);




