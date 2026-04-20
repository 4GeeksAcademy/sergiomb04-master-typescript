function countCharacter(str: string, char: string): number {
  // your code here
  let count = 0;
  for (const iChar of str) {
    if (iChar === char) count++;
  }
  return count;
}

export {};
