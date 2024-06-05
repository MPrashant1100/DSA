const intersection = (num1, num2) => {
    return num1.filter( num => num2.includes(num))
}


// Test cases
console.log(intersection([1,2,2,1], [2,2,2])); 
console.log(intersection([4,9,5], [9,4,9,8,4])); // Output: [4,9]