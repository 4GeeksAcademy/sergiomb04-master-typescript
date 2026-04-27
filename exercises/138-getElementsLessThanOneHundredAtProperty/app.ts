function getElementsLessThan100AtProperty(obj: any, key: string): number[] {
  if (Array.isArray(obj[key])) {
    return obj[key].filter((e: any) => e < 100);
  }
  return [];
}

export {};
