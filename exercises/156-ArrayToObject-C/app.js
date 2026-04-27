"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformEmployeeData(array) {
    return array.map((employee) => {
        const obj = {};
        employee.forEach(([key, value]) => {
            obj[key] = value;
        });
        return obj;
    });
}
