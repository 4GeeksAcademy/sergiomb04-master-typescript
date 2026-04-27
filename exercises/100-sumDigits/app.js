"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumDigits(num) {
    const numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === '-') {
            sum -= Number(numStr[i + 1]);
            i++;
        }
        else {
            sum += Number(numStr[i]);
        }
    }
    return sum;
}
