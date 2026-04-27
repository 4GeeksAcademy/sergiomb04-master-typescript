"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderInventory(inventory) {
    const result = [];
    inventory.forEach((designer) => {
        designer.shoes.forEach((shoe) => {
            result.push([designer.name, shoe.name, shoe.price]);
        });
    });
    return result;
}
