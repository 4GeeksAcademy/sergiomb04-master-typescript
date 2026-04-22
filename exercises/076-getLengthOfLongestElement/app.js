"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLengthOfLongestElement(arr, arg2) {
    // your code here
    let length = 0;
    for (const value of arr) {
        if (length < value.length)
            length = value.length;
    }
    return length;
}
