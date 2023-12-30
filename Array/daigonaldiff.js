const daigonalDifference = (arr) => {
    let firstDaigonal = 0;
    let secondDaigonal = 0;
    const n = arr.length;
    
    for (let i=0; i<n; i++) {
        firstDaigonal += arr[i][i];
        secondDaigonal += arr[i][n-1-i]
    }

    // Here Math.abs is for making absolute value just to avoid '-'ve
    return Math.abs(firstDaigonal - secondDaigonal);
}

const array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, -9]
];

const array2 = [
    [3, 4],
    [5, -6]
];

console.log(daigonalDifference(array1));
console.log(daigonalDifference(array2)); 