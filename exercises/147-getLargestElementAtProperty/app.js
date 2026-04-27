"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLargestElementAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return Math.max(...obj[key]);
    }
    return [];
}
