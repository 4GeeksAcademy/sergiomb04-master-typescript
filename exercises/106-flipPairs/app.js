"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flipPairs(input) {
    return input.replace(/(.)(.)/g, '$2$1');
}
