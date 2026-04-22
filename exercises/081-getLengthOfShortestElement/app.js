"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLengthOfShortestElement(arr, arg2) {
    // your code here
    if (arr.length == 0)
        return 0;
    let length = arr[0].length;
    for (const str of arr) {
        if (length > str.length)
            length = str.length;
    }
    return length;
}
