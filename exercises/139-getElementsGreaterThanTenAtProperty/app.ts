function getElementsGreaterThan10AtProperty(obj: any, key: string): number[] {
  if (Array.isArray(obj[key])) {
    return obj[key].filter((e: any) => e > 10);
  }
  return [];
}

export {};
