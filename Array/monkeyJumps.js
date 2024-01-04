
const monkeyJumps = (x1, v1, x2, v2) => {
    if (v2 >= v1) {
        return "NO";
    }

    const jumps = (x2 - x1) % (v1 - v2);
    return jumps === 0 ? "YES" : "NO"
}

console.log(monkeyJumps(2,3,6,2));
console.log(monkeyJumps(3,2,6,2));