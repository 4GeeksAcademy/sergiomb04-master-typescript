function getLargestElementAtProperty(obj: any, key: string): any {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return Math.max(...obj[key]);
  }
  return [];
}

export {};
