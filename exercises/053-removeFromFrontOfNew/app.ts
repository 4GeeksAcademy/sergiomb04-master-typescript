function removeFromFrontOfNew(arr: unknown[], arg2: unknown): unknown[] {
  const newArray = [...arr];
  newArray.shift();
  return newArray;
}

export {};
