"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binarySearchSortedArray(values, target) {
    let low = 0;
    let high = values.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (values[mid] === target)
            return mid;
        if (values[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}
