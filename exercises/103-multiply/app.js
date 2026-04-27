"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiply(num1, num2) {
    if (num1 === 0 || num2 === 0)
        return 0;
    const isNegative = (num1 < 0) !== (num2 < 0);
    const absNum1 = Math.abs(num1);
    const absNum2 = Math.abs(num2);
    let result = 0;
    for (let i = 0; i < absNum2; i++) {
        result += absNum1;
    }
    return isNegative ? -result : result;
}
