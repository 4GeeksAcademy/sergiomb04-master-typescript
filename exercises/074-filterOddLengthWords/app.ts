function filterOddLengthWords(words: string[]): string[] {
  // your code here
    return words.filter(str => str.length % 2 == 1);
}

export {};
