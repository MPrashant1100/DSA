// Find max number of consecutive 1 comes into the array

const maxConsecutiveCount = (nums) => {
  maxCount = 0;
  currentCount = 0;

  for (let num of nums) {
    if (num === 1) {
      currentCount++;
      // Math.max :- Returns the larger of a set of supplied numeric expressions.
      maxCount = Math.max(currentCount, maxCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
};

// Test cases
const nums1 = [1, 1, 0, 1, 1, 1];
console.log(maxConsecutiveCount(nums1)); // Output: 3

const nums2 = [1, 0, 1, 1, 0, 1];
console.log(maxConsecutiveCount(nums2)); // Output: 2
