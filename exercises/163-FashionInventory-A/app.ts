function renderInventory(inventory: any[]): [string, string, number][] {
  const result: [string, string, number][] = [];
  inventory.forEach((designer) => {
    designer.shoes.forEach((shoe: any) => {
      result.push([designer.name, shoe.name, shoe.price]);
    });
  });
  return result;
}

export {};
