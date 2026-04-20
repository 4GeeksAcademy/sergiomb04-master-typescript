"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    if (num1 == 7 && num2 == 7)
        return true;
    if (num1 % 2 == 0)
        return true;
    if (num2 % 2 == 0)
        return true;
    return false;
}
