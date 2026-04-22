"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLargestNumberAmongMixedElements(arr) {
    const numArray = arr.filter(value => typeof value === "number");
    if (numArray.length == 0)
        return 0;
    let largest = numArray[0];
    for (const element of numArray) {
        if (element > largest)
            largest = element;
    }
    return largest;
}
