function getFirstElement(array: unknown[]): number | undefined {
  // your code here
  if (array.length == 0) return undefined;
  return Number(array[0]);
}

export {};
