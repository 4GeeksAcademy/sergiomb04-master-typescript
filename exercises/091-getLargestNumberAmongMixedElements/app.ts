function getLargestNumberAmongMixedElements(arr: unknown[]): number {
  const numArray: number[]= arr.filter(value => typeof value === "number");
  if (numArray.length == 0) return 0;

  let largest = numArray[0];
  for (const element of numArray) {
    if (element > largest) largest = element;
  }

  return largest;
}

export {};
