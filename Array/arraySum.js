const simpleArraySum = (ar) => {
  // Using reduce to calculate the sum of the array elements.
  // reduce() is a higher-order function in JavaScript used 
  // to perform a cumulative operation on the elements of an array 
  // and reduce them to a single value. It takes a callback function 
  // as an argument form left to right.

  const sum = ar.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
};

const array = [1, 2, 3, 4, 5, 7, 9];
const result = simpleArraySum(array);
console.log(result);
