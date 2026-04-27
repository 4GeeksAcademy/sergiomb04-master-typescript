function transformFirstAndLast(array: string[]): Record<string, string> {
  if (array.length === 0) return {};
  return { [array[0]]: array[array.length - 1] };
}

export {};
