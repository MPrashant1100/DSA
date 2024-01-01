const minMaxSum = (arr) => {
    arr.sort((a,b) => a - b)

    let minSum = 0;
    let maxSum = 0;

    for(let i in arr) {
        if( i < 4) {
            minSum += arr[i];
        } 
        if( i > 0) {
            maxSum += arr[i];
        }
    }
    
    console.log(minSum, maxSum)
}

const array = [4,5,6,7,8];
const result = minMaxSum(array);
