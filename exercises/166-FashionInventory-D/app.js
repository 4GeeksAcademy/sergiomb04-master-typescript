"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLaceNameDataForShoes(inventory) {
    const result = [];
    inventory.forEach((designer) => {
        designer.shoes.forEach((shoe) => {
            const words = shoe.name.split(' ');
            const targetIndex = words.findIndex((word) => word.startsWith('lace'));
            if (targetIndex !== -1) {
                result.push({ nameWords: words, targetWordIndex: targetIndex });
            }
        });
    });
    return result;
}
