"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOddWithoutModulo(num) {
    if (num === 0)
        return false;
    const absNum = Math.abs(num);
    const half = Math.floor(absNum / 2);
    return absNum !== half * 2;
}
