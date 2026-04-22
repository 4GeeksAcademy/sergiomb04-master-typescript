function findSmallestElement(arr: number[], arg2: unknown): number {
  if (arr.length == 0) return 0;
  let smallest = arr[0];
  for (const num of arr) {
    if (smallest > num ) smallest = num;
  }
  return smallest;
}

export {};
