"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementOfArrayProperty(obj, key, index) {
    if (Array.isArray(obj[key])) {
        return obj[key][index];
    }
    return undefined;
}
