module.exports = function solveSudoku(matrix) {
    let elem = [];
    let index = 0;

    function isPossible(horz, vert) {
        for (let i = 0; i < 9; i++) {
            if (matrix[horz][vert] == 0) return false;
            if (matrix[i][vert] == matrix[horz][vert] && i != horz) return false;
            if (matrix[horz][i] == matrix[horz][vert] && i != vert) return false;
            let x = Math.floor(horz / 3) * 3 + i % 3;
            let y = Math.floor(vert / 3) * 3 + Math.floor(i / 3)
            if (matrix[x][y] == matrix[horz][vert] && x != horz && y != vert) return false;
        }
        return true
    }
    for (let x = 0; x < 81; x++) {
        let i = Math.floor(x / 9);
        let j = x % 9;
        if (matrix[i][j] == 0) {
            let newItem = [i, j];
            elem.push(newItem);
        }
    }
    do {
        while (matrix[elem[index][0]][elem[index][1]] < 10 && !isPossible(elem[index][0], elem[index][1])) {
            matrix[elem[index][0]][elem[index][1]] += 1;
        }
        if (matrix[elem[index][0]][elem[index][1]] == 10) {
            matrix[elem[index][0]][elem[index][1]] = 0;
            index -= 1;
            matrix[elem[index][0]][elem[index][1]] += 1;
        } else {
            index += 1;
        }
    } while (index < elem.length);
    return matrix;
}