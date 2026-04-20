function getNthElement(array: unknown[], n: number): number | undefined {
  // your code here
  if (n < array.length) return Number(array[n]);
  return undefined;
}

export {};
