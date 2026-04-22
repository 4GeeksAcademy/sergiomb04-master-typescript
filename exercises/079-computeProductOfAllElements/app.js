"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeProductOfAllElements(arr, arg2) {
    // your code here
    if (arr.length == 0)
        return 0;
    let result = 1;
    for (const num of arr) {
        result *= num;
    }
    return result;
}
