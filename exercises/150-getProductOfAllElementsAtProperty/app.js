"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProductOfAllElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return obj[key].reduce((acc, val) => acc * val, 1);
    }
    return 0;
}
