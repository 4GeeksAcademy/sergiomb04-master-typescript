function computeFactorialOfN(n: number): number {
  let aux = 1;
  for (let i = 1; i <= n; i++) {
    aux *= i;
  }
  return aux;
}

export {};
