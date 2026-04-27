"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transposeMatrix(matrix) {
    if (matrix.length === 0)
        return [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    for (let j = 0; j < cols; j++) {
        result[j] = [];
        for (let i = 0; i < rows; i++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
