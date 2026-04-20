"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllLetters(str) {
    // your code here
    const array = [];
    let i = 0;
    for (const char of str) {
        array[i] = char;
        i++;
    }
    return array;
}
