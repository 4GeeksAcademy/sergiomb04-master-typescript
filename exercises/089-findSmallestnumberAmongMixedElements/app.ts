function findSmallestNumberAmongMixedElements(arr: unknown[], arg2: string, arg3: number, arg4: unknown): number {
  // your code here
  
  const strArray: number[] = arr.filter(value => typeof value === "number");
  if (strArray.length == 0) return 0;


  let shortest = strArray[0];
  for (const element of strArray) {
    if (element < shortest) shortest = element;
  }

  return shortest;
}

export {};
