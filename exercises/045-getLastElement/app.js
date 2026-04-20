"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLastElement(array, arg2) {
    // your code here
    if (array.length == 0)
        return undefined;
    return Number(array[array.length - 1]);
}
