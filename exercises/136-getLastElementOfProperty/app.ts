function getLastElementOfProperty(obj: any, key: string): any {
  if (Array.isArray(obj[key])) {
    return obj[key][obj[key].length - 1];
  }
  return undefined;
}

export {};
