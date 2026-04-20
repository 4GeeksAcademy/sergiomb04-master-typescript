"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFromFrontOfNew(arr, arg2) {
    const newArray = [...arr];
    newArray.shift();
    return newArray;
}
