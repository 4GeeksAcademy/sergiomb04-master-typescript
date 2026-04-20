function checkAge(name: string, age: number): string {
  // your code here
    const isOldEnough = age >= 21;
    return isOldEnough ? `Welcome, ${name}!` : `Go home, ${name}!`;
}

export {};
