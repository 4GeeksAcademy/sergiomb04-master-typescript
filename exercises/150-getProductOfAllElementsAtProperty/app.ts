function getProductOfAllElementsAtProperty(obj: any, key: string): number {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].reduce((acc: number, val: number) => acc * val, 1);
  }
  return 0;
}

export {};
