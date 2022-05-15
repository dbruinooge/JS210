let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squares = numbers.map(function(num) {
  return num * num;
});

console.log(squares);

squares = numbers.map(num => num * num);

console.log(squares);