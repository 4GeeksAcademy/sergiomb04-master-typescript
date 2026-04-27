"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAverageOfElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        const sum = obj[key].reduce((acc, val) => acc + val, 0);
        return sum / obj[key].length;
    }
    return 0;
}
