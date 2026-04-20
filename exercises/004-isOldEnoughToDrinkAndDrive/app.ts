function isOldEnoughToDrinkAndDrive(age: number): boolean {
  // your code here
  const canDrink = age >= 21;
  if (canDrink) return false;

  const canDrive = age >= 16;
  if (canDrive) return false;

  return false;
}

export {};
