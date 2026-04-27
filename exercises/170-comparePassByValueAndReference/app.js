"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function comparePassByValueAndReference(input) {
    input.count += 1;
    return { externalCount: input.count };
}
