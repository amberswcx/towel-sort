// You should implement your task here.

module.exports = function towelSort(matrix) {
    const result = [];
    if (!matrix) return result;
    return matrix.map((line, i) => (i % 2) ? line.reverse() : line).flat();
}

/*
// without flat:
module.exports = function towelSort(matrix) {
    const result = [];
    if (!matrix) return result;
    matrix.forEach((line, i) => (i % 2) ? addLine(line.reverse()) : addLine(line));
    return result;

    function addLine(l) {
        l.forEach(n => result.push(n));
    }
}
*/
