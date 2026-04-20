"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countCharacter(str, char) {
    // your code here
    let count = 0;
    for (const iChar of str) {
        if (iChar === char)
            count++;
    }
    return count;
}
