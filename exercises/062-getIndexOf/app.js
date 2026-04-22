"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIndexOf(char, str) {
    // your code here
    let index = -1;
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (currentChar === char) {
            index = i;
            break;
        }
    }
    return index;
}
