export function getRandomInt(max : number, previousNumber: number | undefined): number {
    let number =  Math.floor(Math.random() * max);
    if(previousNumber === number) {
        return getRandomInt(max, previousNumber);
    }
    return number;
  }

