function getAllButLastElementOfProperty(obj: any, key: string): any[] {
  if (Array.isArray(obj[key])) {
    return obj[key].slice(0, -1);
  }
  return [];
}

export {};
