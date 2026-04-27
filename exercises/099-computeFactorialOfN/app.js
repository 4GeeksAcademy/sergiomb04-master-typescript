"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeFactorialOfN(n) {
    let aux = 1;
    for (let i = 1; i <= n; i++) {
        aux *= i;
    }
    return aux;
}
