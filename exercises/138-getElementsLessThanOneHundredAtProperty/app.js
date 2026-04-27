"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementsLessThan100AtProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key].filter((e) => e < 100);
    }
    return [];
}
