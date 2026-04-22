function findShortestElement(arr: string[], arg2: string): string {
  if (arr.length == 0) return '';
  let smallest = arr[0];
  for (const str of arr) {
    if (smallest.length > str.length ) smallest = str;
  }
  return smallest;
}

export {};
