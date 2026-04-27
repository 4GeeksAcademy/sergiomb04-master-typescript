"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderAverageCostPerDesigner(inventory) {
    return inventory.map((designer) => {
        const totalCost = designer.shoes.reduce((sum, shoe) => sum + shoe.price, 0);
        return {
            name: designer.name,
            averagePrice: totalCost / designer.shoes.length
        };
    });
}
