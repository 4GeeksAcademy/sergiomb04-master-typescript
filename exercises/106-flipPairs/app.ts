function flipPairs(input: string): string {
  return input.replace(/(.)(.)/g, '$2$1');
}

export {};
