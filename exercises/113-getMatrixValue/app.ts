function getMatrixValue(matrix: number[][], row: number, col: number): number | undefined {
  if (matrix[row] && matrix[row][col] !== undefined) {
    return matrix[row][col];
  }
  return undefined;
}

export {};
