function removeNumbersLargerThan(num: number, obj: any): any {
  for (const key in obj) {
    if (typeof obj[key] === 'number' && obj[key] > num) {
      delete obj[key];
    }
  }
  return obj;
}

export {};
