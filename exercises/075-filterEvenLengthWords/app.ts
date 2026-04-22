function filterEvenLengthWords(words: string[], arg2: string): string[] {
  // your code here
  return words.filter(str => str.length % 2 == 0);
}

export {};
