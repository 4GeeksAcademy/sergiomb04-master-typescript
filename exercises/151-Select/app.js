"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function select(arr, obj) {
    const newObj = {};
    arr.forEach((key) => {
        if (obj[key] !== undefined) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
}
