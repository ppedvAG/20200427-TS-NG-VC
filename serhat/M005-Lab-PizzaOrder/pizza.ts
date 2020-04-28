enum PizzaGröße { klein = 1, mittel, groß, family }

function bestelle(input: number) {
    let pizzaGröße: string = "";
    // Add new property in enum
    enum PizzaGröße {super = 5}

    switch (input) {
        case 1:
            // PizzaGröße[1] selects text
            // PizzaGröße.klein selects value
            pizzaGröße = PizzaGröße[1];
            break;
        case 2:
            pizzaGröße = PizzaGröße[2];
            break;
        case 3:
            pizzaGröße = PizzaGröße[3];
            break;
        case 4:
            pizzaGröße = PizzaGröße[4];
            break;
        default:
            pizzaGröße = "Select an option, idiot!";
    }
    
    console.log('pizzaGröße :>> ', pizzaGröße);
    (<HTMLInputElement>document.getElementById("output")!).textContent = pizzaGröße;
}