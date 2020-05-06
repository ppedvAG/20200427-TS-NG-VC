function berechne(z1: number, z2: number, op: string): void {
    let result: number = NaN;
    switch (op) {
        case '+':
            result = z1 + z2;
            break;
        case '-':
            result = z1 - z2;
            break;
        case '*':
            result = z1 * z2;
            break;
        case '/':
            result = z1 / z2;
            break;
        default:
            console.log('smth went wrong');
            break;
    }
    (<HTMLInputElement>document.getElementById("resultat")!).value = String(result);
}