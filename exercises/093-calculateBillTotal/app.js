"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const impuestoVentas = 9.5;
const propina = 15;
function calculateBillTotal(preTaxAndTipAmount) {
    const base = preTaxAndTipAmount;
    // Sumar impuesto ventas
    preTaxAndTipAmount += getTaxPercentage(base, impuestoVentas);
    // Sumar propina
    preTaxAndTipAmount += getTaxPercentage(base, propina);
    return preTaxAndTipAmount;
}
const getTaxPercentage = (num, tax) => {
    if (tax > 1.0) {
        tax = getPercentageNumber(tax);
    }
    return num * tax;
};
const getPercentageNumber = (num) => {
    return num / 100;
};
