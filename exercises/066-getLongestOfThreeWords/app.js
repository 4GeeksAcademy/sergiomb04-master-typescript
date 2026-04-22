"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    const length1 = word1.length;
    const length2 = word2.length;
    const length3 = word3.length;
    const max = Math.max(length1, length2, length3);
    // Word 1
    if (length1 == max && (length1 != length2 || length1 != length3))
        return word1;
    // Word 2
    if (length2 == max && (length2 != length1 || length2 != length3))
        return word2;
    // Word 3
    if (length3 == max && (length3 != length2 || length3 != length1))
        return word3;
    return word1;
}
