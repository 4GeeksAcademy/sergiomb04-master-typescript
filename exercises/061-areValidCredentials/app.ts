function areValidCredentials(name: string, pass: string): boolean {
  // your code here
  const validName = name.length > 3;
  const validPass = pass.length > 8;
  return validName && validPass;
}

export {};
