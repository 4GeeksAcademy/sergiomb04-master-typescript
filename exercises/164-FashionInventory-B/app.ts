function renderAverageCostPerDesigner(inventory: any[]): { name: string, averagePrice: number }[] {
  return inventory.map((designer) => {
    const totalCost = designer.shoes.reduce((sum: number, shoe: any) => sum + shoe.price, 0);
    return {
      name: designer.name,
      averagePrice: totalCost / designer.shoes.length
    };
  });
}

export {};
