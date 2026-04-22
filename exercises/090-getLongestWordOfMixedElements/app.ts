function getLongestWordOfMixedElements(arr: unknown[]): string {
  const strArray: string[]= arr.filter(value => typeof value === "string");
  if (strArray.length == 0) return '';

  let longest = strArray[0];
  for (const element of strArray) {
    if (element.length > longest.length) longest = element;
  }

  return longest;
}

export {};
