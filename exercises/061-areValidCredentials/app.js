"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function areValidCredentials(name, pass) {
    // your code here
    const validName = name.length > 3;
    const validPass = pass.length > 8;
    return validName && validPass;
}
