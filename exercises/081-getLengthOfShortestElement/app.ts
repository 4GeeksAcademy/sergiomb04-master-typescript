function getLengthOfShortestElement(arr: string[], arg2: string): number {
  // your code here
  if (arr.length == 0) return 0;
  let length = arr[0].length;
  for (const str of arr) {
    if (length > str.length) length = str.length;
  }
  return length;
}

export {};
