"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEvenAndGreaterThanTen(num) {
    // your code here
    const even = num % 2 == 0;
    const greater = num > 10;
    return even && greater;
}
