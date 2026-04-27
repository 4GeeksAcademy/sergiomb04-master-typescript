"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOddElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key].filter((e) => typeof e === 'number' && e % 2 !== 0);
    }
    return [];
}
