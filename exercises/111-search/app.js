"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function search(array, value) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (array[mid] === value)
            return mid;
        if (array[mid] < value)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return null;
}
