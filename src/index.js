// You should implement your task here.
module.exports = function towelSort(matrix = []) {
    let result = [];
    let i = 0;
    for (let item of matrix) {
        if (i % 2 === 0) {
            result = result.concat(item);
        } else {
            result = result.concat(item.reverse());
        }
        i++
    }
    return result;
}
