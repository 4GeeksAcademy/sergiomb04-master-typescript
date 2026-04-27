"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSumOfAllElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key].reduce((acc, val) => acc + val, 0);
    }
    return 0;
}
