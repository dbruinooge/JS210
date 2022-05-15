let array = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((accumulator, number) => accumulator + (number * number), 0);
}

console.log(sumOfSquares(array)); // => 83