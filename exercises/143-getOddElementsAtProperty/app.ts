function getOddElementsAtProperty(obj: any, key: string): number[] {
  if (Array.isArray(obj[key])) {
    return obj[key].filter((e: any) => typeof e === 'number' && e % 2 !== 0);
  }
  return [];
}

export {};
