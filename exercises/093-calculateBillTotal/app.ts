const impuestoVentas = 9.5;
const propina = 15;

function calculateBillTotal(preTaxAndTipAmount: number): number {
  const base = preTaxAndTipAmount;

  // Sumar impuesto ventas
  preTaxAndTipAmount += getTaxPercentage(base, impuestoVentas);

  // Sumar propina
  preTaxAndTipAmount += getTaxPercentage(base, propina);

  return preTaxAndTipAmount;
}

const getTaxPercentage = (num: number, tax: number): number => {
  if (tax > 1.0) {
    tax = getPercentageNumber(tax);
  }
  return num * tax;
}

const getPercentageNumber = (num: number): number => {
  return num / 100;
}


export {};
