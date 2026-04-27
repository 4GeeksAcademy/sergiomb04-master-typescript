function removeNumberValues(obj: any): any {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      delete obj[key];
    }
  }
  return obj;
}

export {};
