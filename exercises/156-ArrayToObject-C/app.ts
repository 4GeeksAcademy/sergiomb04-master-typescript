function transformEmployeeData(array: [string, any][][]): Record<string, any>[] {
  return array.map((employee) => {
    const obj: Record<string, any> = {};
    employee.forEach(([key, value]) => {
      obj[key] = value;
    });
    return obj;
  });
}

export {};
