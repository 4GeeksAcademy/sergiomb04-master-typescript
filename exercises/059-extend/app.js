"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extend(obj1, obj2) {
    // your code here
    for (const key in obj2) {
        if (obj1[key] != null)
            continue;
        obj1[key] = obj2[key];
    }
    return [];
}
