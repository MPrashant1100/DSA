
const getMaxFromArray = (array) => {
    let max = 0;

    array.forEach((item) => { 
        if (max < item) max = item        
    });
}

const array = [7,8,9,2,5]
console.log(getMaxFromArray[array])