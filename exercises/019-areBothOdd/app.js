"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function areBothOdd(a, b) {
    // your code here
    let aOdd = a % 2 !== 0;
    let bOdd = b % 2 !== 0;
    return aOdd && bOdd;
}
