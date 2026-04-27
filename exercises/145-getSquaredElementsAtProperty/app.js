"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSquaredElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key].map((e) => typeof e === 'number' ? e * e : e);
    }
    return [];
}
