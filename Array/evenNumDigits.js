//  Find Numbers with Even Number of Digits

const evenNumDigit = (nums) => {
  let count = 0;

  for (let num of nums) {
    const numDigit = num.toString().length;
    if (numDigit % 2 === 0) {
      count++;
    }
  }
  return count;
};

// Test cases
const nums1 = [12, 1, 0, 199, 1, 1444];
console.log(evenNumDigit(nums1)); 

const nums2 = [ 52, 189, 148, 511];
console.log(evenNumDigit(nums2))