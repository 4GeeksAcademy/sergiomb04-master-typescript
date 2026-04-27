function select(arr: string[], obj: any): any {
  const newObj: any = {};
  arr.forEach((key) => {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

export {};
