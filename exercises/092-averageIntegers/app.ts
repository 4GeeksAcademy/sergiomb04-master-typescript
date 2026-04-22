function sum(arr: number[]): number {
  let result = 0;
  for (const num of arr) {
    result += num;
  }
  return result;
}

function average(arr: number[], arg2: unknown): number {
  // your code here
  return sum(arr) / arr.length;
}

export {};
