function removeStringValues(obj: any): any {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      delete obj[key];
    }
  }
  return obj;
}

export {};
