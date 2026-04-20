function getStringLength(string: string): number {
  // your code here
  let count = 0;
  for (let _ of string) {
    count++;
  }
  return count;
}

export {};
