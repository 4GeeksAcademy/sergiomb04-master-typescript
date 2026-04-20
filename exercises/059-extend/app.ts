function extend(obj1: Record<string, any>, obj2: Record<string, any>): object[] {
  // your code here
  for (const key in obj2) {
    if (obj1[key] != null) continue;
    obj1[key] = obj2[key];
  }
    return [];
}

export {};
