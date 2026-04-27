"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addFullNameProperty(obj) {
    obj.fullName = `${obj.firstName} ${obj.lastName}`;
    return obj;
}
