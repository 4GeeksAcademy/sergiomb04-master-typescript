function isEvenWithoutModulo(num: number): boolean {
  if (num === 0) return true;
  const absNum = Math.abs(num);
  const half = Math.floor(absNum / 2);
  return absNum === half * 2;
}

export {};
