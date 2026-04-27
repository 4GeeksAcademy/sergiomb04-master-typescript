function getSquaredElementsAtProperty(obj: any, key: string): number[] {
  if (Array.isArray(obj[key])) {
    return obj[key].map((e: any) => typeof e === 'number' ? e * e : e);
  }
  return [];
}

export {};
