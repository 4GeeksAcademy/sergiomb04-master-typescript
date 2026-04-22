"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestElement(arr, arg2) {
    if (arr.length == 0)
        return '';
    let smallest = arr[0];
    for (const str of arr) {
        if (smallest.length > str.length)
            smallest = str;
    }
    return smallest;
}
