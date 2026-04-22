"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(arr) {
    let result = 0;
    for (const num of arr) {
        result += num;
    }
    return result;
}
function average(arr, arg2) {
    // your code here
    return sum(arr) / arr.length;
}
