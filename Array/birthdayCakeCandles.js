const birthdayCakeCandles = (candles) => {
// Math.max = function to find max value of an array
    let tallest = Math.max(...candles);

    let count = 0;
    for(let candle of candles) {
        if(candle === tallest) {
            count ++;
        }
    }
    return count;

    // This second method of doing same

    // candles.sort((a,b) => b - a)

    // let tallest = candles[0];
    // let count = 0;

    // for (let i = 0; i < candles.length; i++) {
    //     if (candles[i] === tallest) {
    //         count ++ ;
    //     } else {
    //         break;
    //     }
    // }

    return count;
}

const array = [1,2,9,8,9,2,9];
const result = console.log(birthdayCakeCandles(array));