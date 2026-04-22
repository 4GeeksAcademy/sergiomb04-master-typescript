function getLargestElement(arr: number[], arg2: unknown): number {
  // your code here
  if (arr.length == 0) return 0;
  let largest = arr[0];
  for (const num of arr) {
    if (largest < num) largest = num;
  }
  return largest;
}

export {};
