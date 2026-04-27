function getElementOfArrayProperty(obj: any, key: string, index: number): any {
  if (Array.isArray(obj[key])) {
    return obj[key][index];
  }
  return undefined;
}

export {};
