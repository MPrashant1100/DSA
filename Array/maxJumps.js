function hurdleRace(k, height) {
    // Use object distructuring and Math.max - for finding maximum value
    const maxValue = Math.max( ...height );
    // let doses = 0;
    // for (let i = 0; i < height.length; i++) {
    //     if(k >= maxValue) {
    //         return 0
    //     } else {
    //         return doses = maxValue - k ;
    //     }
    // }

    // Other method

    const dosesNeeded = Math.max(0, maxValue - k)

    return dosesNeeded;
}

const k = 3;
const height = [1, 6, 3, 5, 2];
console.log(hurdleRace(k, height)); 