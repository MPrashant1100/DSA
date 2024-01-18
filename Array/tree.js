function utopianTree(n) {
    let height = 1;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            // Spring (odd cycles): double the height
            height *= 2;
        } else {
            // Summer (even cycles): increase the height by 1
            height += 1;
        }
    }

    return height;
}



const testCases = [0, 1, 4, 5];
for (const testCase of testCases) {
    console.log(`After ${testCase} cycles, the height is ${utopianTree(testCase)}`);
}
const test2Cases = [0, 1, 4, 5];
for (const testCase of testCases) {
    console.log(`After ${testCase} cycles, the height is ${utopianTree(testCase)}`);
}
