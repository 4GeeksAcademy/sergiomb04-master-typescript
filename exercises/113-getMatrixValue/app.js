"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMatrixValue(matrix, row, col) {
    if (matrix[row] && matrix[row][col] !== undefined) {
        return matrix[row][col];
    }
    return undefined;
}
