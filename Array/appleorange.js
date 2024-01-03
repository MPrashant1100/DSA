// Problem Statement //
// find apple and orange on the house apple tree at pos a 
// orange tree at pos b house location is between s & t

const countApplesAndOranges = (s,t,a,b,apples,oranges) => {
    
    let appleOnHouse = 0;
    let orangeOnHouse = 0;

    for (let apple of apples ) {
        const landingPos = a + apple;
        if (landingPos >= s && landingPos <= t) {
            appleOnHouse ++ ;
        }
    }

    for (let orange of oranges ) {
        const landingPos = b + orange;
        if (landingPos >= s && landingPos <= t ) {
            orangeOnHouse ++ ;
        }
    }

    console.log(appleOnHouse);
    console.log(orangeOnHouse);
}

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     const applesOnHouse = apples.filter(apple => (a + apple) >= s && (a + apple) <= t).length;
//     const orangesOnHouse = oranges.filter(orange => (b + orange) >= s && (b + orange) <= t).length;

//     console.log(applesOnHouse);
//     console.log(orangesOnHouse);
// }

const s = 5;
const t = 9;
const a = 3;
const b = 11;
const apples = [6,8,7,3,2];
const oranges = [4,-6,8,-12,5]

countApplesAndOranges(s,t,a,b,apples,oranges);