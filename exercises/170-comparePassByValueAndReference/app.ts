function comparePassByValueAndReference(input: any): any {
  input.count += 1;
  return { externalCount: input.count };
}

export {};
