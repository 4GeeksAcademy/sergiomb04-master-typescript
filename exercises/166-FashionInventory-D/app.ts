function getLaceNameDataForShoes(inventory: any[]): { nameWords: string[], targetWordIndex: number }[] {
  const result: { nameWords: string[], targetWordIndex: number }[] = [];
  inventory.forEach((designer) => {
    designer.shoes.forEach((shoe: any) => {
      const words = shoe.name.split(' ');
      const targetIndex = words.findIndex((word: string) => word.startsWith('lace'));
      if (targetIndex !== -1) {
        result.push({ nameWords: words, targetWordIndex: targetIndex });
      }
    });
  });
  return result;
}

export {};
