function addFullNameProperty(obj: any): any {
  obj.fullName = `${obj.firstName} ${obj.lastName}`;
  return obj;
}

export {};
