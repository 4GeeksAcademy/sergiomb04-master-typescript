"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOddLengthWordsAtProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key].filter((e) => typeof e === 'string' && e.length % 2 !== 0);
    }
    return [];
}
