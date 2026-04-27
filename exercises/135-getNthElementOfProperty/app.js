"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNthElementOfProperty(obj, key, n) {
    if (Array.isArray(obj[key])) {
        return obj[key][n];
    }
    return undefined;
}
