function removeArrayValues(obj: any): any {
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      delete obj[key];
    }
  }
  return obj;
}

export {};
