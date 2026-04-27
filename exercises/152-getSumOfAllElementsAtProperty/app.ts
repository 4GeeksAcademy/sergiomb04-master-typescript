function getSumOfAllElementsAtProperty(obj: any, key: string): number {
  if (Array.isArray(obj[key])) {
    return obj[key].reduce((acc: number, val: number) => acc + val, 0);
  }
  return 0;
}

export {};
