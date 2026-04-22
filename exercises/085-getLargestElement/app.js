"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLargestElement(arr, arg2) {
    // your code here
    if (arr.length == 0)
        return 0;
    let largest = arr[0];
    for (const num of arr) {
        if (largest < num)
            largest = num;
    }
    return largest;
}
