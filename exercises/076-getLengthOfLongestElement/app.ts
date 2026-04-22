function getLengthOfLongestElement(arr: string[], arg2: string): number {
  // your code here
  let length = 0;
  for (const value of arr) {
    if (length < value.length) length = value.length;
  }
  return length;
}

export {};
