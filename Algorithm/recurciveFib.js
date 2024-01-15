const recurciveFib = (n) => {

    // Base Case
    if(n < 2) {
        return n;
    }

    // Recurcive Function
    return recurciveFib(n-1) + recurciveFib(n - 2);
}


console.log(recurciveFib(11));