export function getRandomInt(max : number, previousNumber: number | undefined): number {
    let number =  Math.floor(Math.random() * max);
    if(previousNumber && previousNumber === number) {
        return getRandomInt(max, previousNumber);
    }
    return number;
}

export function getTwoRandomNumbers(max : number): [number, number] {
    let number =  Math.floor(Math.random() * max);
    let number2 = number + 10;

    return [number, number2];
}
