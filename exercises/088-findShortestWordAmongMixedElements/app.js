"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestWordAmongMixedElements(arr, arg2, arg3, arg4) {
    // your code here
    const strArray = arr.filter(value => typeof value === "string");
    if (strArray.length == 0)
        return '';
    let shortest = strArray[0];
    for (const element of strArray) {
        if (element.length < shortest.length)
            shortest = element;
    }
    return shortest;
}
