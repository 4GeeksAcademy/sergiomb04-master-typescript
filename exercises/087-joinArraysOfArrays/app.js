"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function joinArrayOfArrays(arr, arg2, arg3, arg4, arg5, arg6, arg7) {
    // your code here
    let finalArray = [];
    for (const arrElement of arr) {
        finalArray = finalArray.concat(arrElement);
    }
    return finalArray;
}
