import crypto from 'crypto';

export function randomNumber(min: number, max: number, previousNumber: number): number {
    let number = crypto.randomInt(min, max);
    if(number === previousNumber) {
        return randomNumber(min, max, previousNumber);
    }
    return crypto.randomInt(min, max);
}
