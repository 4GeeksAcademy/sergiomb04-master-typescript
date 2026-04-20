function isEitherEvenAndLessThan9(num1: number, num2: number): boolean {
  const haveEvenNumber = num1 % 2 == 0 || num2 % 2 == 0;
  const bothLess9 = num1 < 9 && num2 < 9;
  if (haveEvenNumber && bothLess9) return true;
  return false;
}

export {};
