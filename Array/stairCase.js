
const stairCase = (n) => {

    for( let i=1; i<= n; i++) {
        let stair = '';
        for (let j=1; j<= n; j++) {
            if(j <= n-i) {
                stair += ' ';
            } else {
                stair += '#';
            }
        }
        console.log(stair)
    }
}

const stairArray = [9];
const result = stairCase(stairArray);