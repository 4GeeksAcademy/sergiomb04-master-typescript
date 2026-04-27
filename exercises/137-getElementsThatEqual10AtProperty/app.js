"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementsThatEqual10AtProperty(obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key].filter((e) => e === 10);
    }
    return [];
}
