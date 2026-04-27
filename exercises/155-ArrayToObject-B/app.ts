function fromListToObject(array: [string, any][]): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, value] of array) {
    result[key] = value;
  }
  return result;
}

export {};
