const numbers = [2, 2, 5, 6, 8];

const sentences = ["Play", "Game"];

const tableOfTwo = numbers.map((number) => {
  return number * 5;
});

const tableOfThree = numbers.map((number) => {
  return number * 3;
});

const makePurals = sentences.map((sentence) => {
  return sentence + "s";
});

console.log(tableOfTwo);
console.log(tableOfThree);
console.log(makePurals);


// Map //