function productExceptSelf(nums) {
    const n = nums.length;
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    const answer = new Array(n);

    // Calculate prefix products
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
        console.log('Here', prefix)
    }

    // Calculate suffix products
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
        console.log('suffix', suffix)
    }

    // Calculate answer array
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
        console.log('ANS', answer)
    }

    return answer;
}

// Test the function
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
