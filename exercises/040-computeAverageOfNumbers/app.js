"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeAverageOfNumbers(nums, arg2, arg3) {
    // your code here
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += Number(nums[i]);
    }
    return nums.length === 0 ? 0 : result / nums.length;
}
