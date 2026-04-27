function removeEvenValues(obj: any): any {
  for (const key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      delete obj[key];
    }
  }
  return obj;
}

export {};
