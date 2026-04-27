"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertScoreToGradeWithPlusAndMinus(score) {
    if (score > 100 || score < 0)
        return 'INVALID SCORE';
    if (score >= 90) {
        if (score <= 92)
            return 'A-';
        if (score >= 98)
            return 'A+';
        return 'A';
    }
    if (score >= 80) {
        if (score <= 82)
            return 'B-';
        if (score >= 88)
            return 'B+';
        return 'B';
    }
    if (score >= 70) {
        if (score <= 72)
            return 'C-';
        if (score >= 78)
            return 'C+';
        return 'C';
    }
    if (score >= 60) {
        if (score <= 62)
            return 'D-';
        if (score >= 68)
            return 'D+';
        return 'D';
    }
    return 'F';
}
