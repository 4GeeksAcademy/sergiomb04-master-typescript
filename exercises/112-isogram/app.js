"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIsogram(text) {
    const lowerCaseText = text.toLowerCase();
    return new Set(lowerCaseText).size === lowerCaseText.length;
}
