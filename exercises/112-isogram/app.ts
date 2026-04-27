function isIsogram(text: string): boolean {
  const lowerCaseText = text.toLowerCase();
  return new Set(lowerCaseText).size === lowerCaseText.length;
}

export {};
