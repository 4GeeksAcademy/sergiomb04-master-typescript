function computeAverageOfNumbers(nums: unknown[], arg2: number, arg3: unknown): number {
  // your code here
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += Number(nums[i]);
  }
  return nums.length === 0 ? 0 : result / nums.length;
}

export {};
