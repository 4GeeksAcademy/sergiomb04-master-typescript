"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllButLastElementOfProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key].slice(0, -1);
    }
    return [];
}
