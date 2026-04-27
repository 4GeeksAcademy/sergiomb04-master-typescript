function removeStringValuesLongerThan(num: number, obj: any): any {
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].length > num) {
      delete obj[key];
    }
  }
  return obj;
}

export {};
