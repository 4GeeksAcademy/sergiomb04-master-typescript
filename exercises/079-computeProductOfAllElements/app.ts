function computeProductOfAllElements(arr: number[], arg2: unknown): number {
  // your code here
  if (arr.length == 0) return 0;
  let result = 1;
  for (const num of arr) {
    result *= num;
  }
  return result;
}

export {};
