const cartesianProd = (ar1, ar2) => {
  const result = [];
  for (let i = 0; i < ar1.length; i++) {
    for (let j = 0; j < ar2.length; j++) {
      result.push([ar1[i], ar2[j]]);
    }
  }

  return result;
};


const arr1 = [2,5,6]
const arr2 = [1,3,7]
console.log(cartesianProd(arr1,arr2));