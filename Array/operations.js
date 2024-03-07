var finalValueAfterOperations = function(operations) {
    let X = 0;
    for ( let operation of operations) {
        if( ++operation || operation++) {   // found any alternate for this 
            X++ ;
            console.log(X)
        }
        else {
            X-- ;
        }
    }
    return X;
    
};

const operations1 = ["--X", "X++", "X++"];
console.log(finalValueAfterOperations(operations1));