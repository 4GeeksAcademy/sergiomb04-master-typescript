"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSmallestElementAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return Math.min(...obj[key]);
    }
    return [];
}
