function getSmallestElementAtProperty(obj: any, key: string): any {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return Math.min(...obj[key]);
  }
  return [];
}

export {};
