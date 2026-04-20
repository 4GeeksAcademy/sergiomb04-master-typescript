"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOldEnoughToDrinkAndDrive(age) {
    // your code here
    const canDrink = age >= 21;
    if (canDrink)
        return false;
    const canDrive = age >= 16;
    if (canDrive)
        return false;
    return false;
}
