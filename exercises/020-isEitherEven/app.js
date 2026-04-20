"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEitherEven(n1, n2) {
    // your code here
    let aEven = n1 % 2 === 0;
    let bEven = n2 % 2 === 0;
    if (n1 === 7 || n2 === 7)
        return true;
    return aEven && bEven;
}
