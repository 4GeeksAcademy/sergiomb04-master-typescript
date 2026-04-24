function countCharacter(str: string, char: string): number {
  // your code here
  let count = 0;
  for (const iChar of str) {
    if (iChar === char) count++;
  }
  return count;
}

// Pensado en clase, se podría convertir a array de chars, luego ponerle filter y obtener el length (Menos complicación necesitada)
function countCharacter2(str: string, char: string): number {
  return str.split('').filter(c => c === char).length;
}

export {};
