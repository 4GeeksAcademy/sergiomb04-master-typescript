"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkAge(name, age) {
    // your code here
    const isOldEnough = age >= 21;
    return isOldEnough ? `Welcome, ${name}!` : `Go home, ${name}!`;
}
