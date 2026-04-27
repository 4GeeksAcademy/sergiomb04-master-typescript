function getFirstElementOfProperty(obj: any, key: string): any {
  if (Array.isArray(obj[key])) {
    return obj[key][0];
  }
  return undefined;
}

export {};
