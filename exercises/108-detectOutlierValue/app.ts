function detectOutlierValue(string: string): number {
  const numbers = string.split(' ').map(Number);
  const evens = numbers.filter((n) => n % 2 === 0);
  const odds = numbers.filter((n) => n % 2 !== 0);

  if (evens.length === 1) {
    return numbers.indexOf(evens[0]) + 1;
  } else {
    return numbers.indexOf(odds[0]) + 1;
  }
}

export {};
