function getOddLengthWordsAtProperty(obj: any, key: string): string[] {
  if (Array.isArray(obj[key])) {
    return obj[key].filter((e: any) => typeof e === 'string' && e.length % 2 !== 0);
  }
  return [];
}

export {};
