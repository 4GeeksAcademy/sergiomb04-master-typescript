"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestElement(arr) {
    if (arr.length == 0)
        return '';
    let longest = arr[0];
    for (const str of arr) {
        if (longest.length < str.length)
            longest = str;
    }
    return longest;
}
