"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderInventory(shoeList) {
    const result = [];
    shoeList.forEach((designer) => {
        designer.shoes.forEach((shoe) => {
            if (shoe.name.includes('black')) {
                result.push([designer.name, shoe.name, shoe.price]);
            }
        });
    });
    return result;
}
