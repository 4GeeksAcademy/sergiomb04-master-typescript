function getNthElementOfProperty(obj: any, key: string, n: number): any {
  if (Array.isArray(obj[key])) {
    return obj[key][n];
  }
  return undefined;
}

export {};
