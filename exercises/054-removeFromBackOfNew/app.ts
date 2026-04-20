function removeFromBackOfNew(arr: unknown[], arg2: unknown): unknown[] {
  // your code here
  const newArray = [...arr];
  newArray.pop();
  return newArray;
}

export {};
