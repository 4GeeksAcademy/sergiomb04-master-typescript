function findShortestWordAmongMixedElements(arr: unknown[], arg2: string, arg3: number, arg4: string): string {
  // your code here
  
  const strArray: string[] = arr.filter(value => typeof value === "string");
  if (strArray.length == 0) return '';


  let shortest = strArray[0];
  for (const element of strArray) {
    if (element.length < shortest.length) shortest = element;
  }

  return shortest;
}

export {};
