function isEvenAndGreaterThanTen(num: number): boolean {
  // your code here
  const even = num % 2 == 0;
  const greater = num > 10;
  return even && greater;
}

export {};
