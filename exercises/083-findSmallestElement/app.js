"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSmallestElement(arr, arg2) {
    if (arr.length == 0)
        return 0;
    let smallest = arr[0];
    for (const num of arr) {
        if (smallest > num)
            smallest = num;
    }
    return smallest;
}
