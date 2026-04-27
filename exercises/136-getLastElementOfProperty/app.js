"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLastElementOfProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key][obj[key].length - 1];
    }
    return undefined;
}
