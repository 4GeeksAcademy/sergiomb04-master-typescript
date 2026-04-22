"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSmallestNumberAmongMixedElements(arr, arg2, arg3, arg4) {
    // your code here
    const strArray = arr.filter(value => typeof value === "number");
    if (strArray.length == 0)
        return 0;
    let shortest = strArray[0];
    for (const element of strArray) {
        if (element < shortest)
            shortest = element;
    }
    return shortest;
}
