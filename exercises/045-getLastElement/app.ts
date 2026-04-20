function getLastElement(array: unknown[], arg2: unknown): number | undefined {
  // your code here
  if (array.length == 0) return undefined;
  return Number(array[array.length-1]);
}

export {};
