"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function modulo(num1, num2) {
    if (num2 === 0 || isNaN(num1) || isNaN(num2))
        return NaN;
    if (num1 === 0)
        return 0;
    const isNegative = num1 < 0;
    const absNum1 = Math.abs(num1);
    const absNum2 = Math.abs(num2);
    let result = absNum1;
    while (result >= absNum2) {
        result -= absNum2;
    }
    return isNegative ? -result : result;
}
