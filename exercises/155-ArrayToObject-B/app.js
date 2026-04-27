"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fromListToObject(array) {
    const result = {};
    for (const [key, value] of array) {
        result[key] = value;
    }
    return result;
}
