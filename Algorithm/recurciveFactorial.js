const recurciveFactorial = (n) => {
// Base Case
    if( n === 0) {
        return 1;
    }
// Recursive Function
    return n * recurciveFactorial(n-1);
}


console.log(recurciveFactorial(5))
console.log(recurciveFactorial(9))
console.log(recurciveFactorial(4))