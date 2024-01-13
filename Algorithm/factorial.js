// factorial of n numbers 

const factorial = (n) => {
   let result = 1;
    
    for(let i = 2; i < n; i++) {
        result *= i ;
    }
    return result;
}


console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(9))