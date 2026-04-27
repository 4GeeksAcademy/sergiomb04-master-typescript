"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstElementOfProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key][0];
    }
    return undefined;
}
