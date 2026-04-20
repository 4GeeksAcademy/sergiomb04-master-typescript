function getAllLetters(str: string): string[] {
  // your code here
  const array = [];
  let i = 0;
  for (const char of str) {
    array[i] = char;
    i++;
  }
  return array;
}

export {};
