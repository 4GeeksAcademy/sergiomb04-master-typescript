"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEitherEvenAndLessThan9(num1, num2) {
    const haveEvenNumber = num1 % 2 == 0 || num2 % 2 == 0;
    const bothLess9 = num1 < 9 && num2 < 9;
    if (haveEvenNumber && bothLess9)
        return true;
    return false;
}
