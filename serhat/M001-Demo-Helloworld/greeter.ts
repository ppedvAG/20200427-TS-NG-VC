function giveAge(birthYear: number) {
    return 2020 - birthYear;
}

let birthYear: number = 1987;

document.getElementsByTagName("span")[0].textContent! 
                                    += String(giveAge(birthYear));