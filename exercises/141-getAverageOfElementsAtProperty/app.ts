function getAverageOfElementsAtProperty(obj: any, key: string): number {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    const sum = obj[key].reduce((acc: number, val: number) => acc + val, 0);
    return sum / obj[key].length;
  }
  return 0;
}

export {};
