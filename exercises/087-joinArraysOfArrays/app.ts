function joinArrayOfArrays(arr: unknown[], arg2: unknown, arg3: unknown[], arg4: unknown, arg5: unknown[], arg6: string, arg7: unknown): unknown[] {
  // your code here
  let finalArray: unknown[] = [];
  for (const arrElement of arr) {
    finalArray = finalArray.concat(arrElement)
  }
  return finalArray;
}

export {};
