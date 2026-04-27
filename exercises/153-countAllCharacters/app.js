"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countAllCharacters(str) {
    const result = {};
    for (const char of str) {
        result[char] = (result[char] || 0) + 1;
    }
    return result;
}
