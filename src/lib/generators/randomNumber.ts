import crypto from 'crypto';

export function randomNumber(min: number, max: number, previousNumber: number): number {
    let number = crypto.randomInt(min, max);
    if(number === previousNumber) {
        return randomNumber(min, max, previousNumber);
    }
    return number;
}

export function getRandomInt(max : number, previousNumber: number | undefined): number {
    let number =  Math.floor(Math.random() * max);
    if(previousNumber === number) {
        return getRandomInt(max, previousNumber);
    }
    return number;
  }

// create a function that returns a random number between min and max

