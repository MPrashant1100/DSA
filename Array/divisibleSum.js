function divisibleSum(n, ar, k) {
    let count = 0;

    // Iterate through the array and check for pairs that satisfy the condition
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }

    return count;
}

// Example usage:
const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];

console.log(divisibleSum(n, ar, k)); // Output: 5
