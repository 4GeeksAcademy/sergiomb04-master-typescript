function renderInventory(shoeList: any[]): [string, string, number][] {
  const result: [string, string, number][] = [];
  shoeList.forEach((designer) => {
    designer.shoes.forEach((shoe: any) => {
      if (shoe.name.includes('black')) {
        result.push([designer.name, shoe.name, shoe.price]);
      }
    });
  });
  return result;
}

export {};
