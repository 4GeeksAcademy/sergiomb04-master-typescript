function getAllElementsButNth(array: unknown[], n: number): unknown[] {
  // your code here
  array.splice(n, 1);
  return array;
}

export {};
