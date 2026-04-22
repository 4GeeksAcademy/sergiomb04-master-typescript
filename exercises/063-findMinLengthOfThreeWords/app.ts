function findMinLengthOfThreeWords(word1: string, word2: string, word3: string): number {
  return Math.min(word1.length, word2.length, word3.length);
}

export {};
