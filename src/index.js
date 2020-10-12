// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix &&matrix.length){
        return matrix.map((arr, index) => index % 2 === 0 ? arr : arr.reverse())
            .reduce((resArr, arr) => resArr.concat(arr));
    }else{
        return [];
    }


}
