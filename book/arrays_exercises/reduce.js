let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, element) => accumulator + element, 0);

console.log(sum);

sum = numbers.reduce(function(num, element) {
  return num + element;
}, 0);

console.log(sum);

let strings = ['a', 'b', 'c', 'd', 'e'];

let concatenation = strings.reduce((accumulator, element) => accumulator + element, '');

console.log(concatenation);

concatenation = strings.reduce(function(accumulator, element) {
  return accumulator + element;
}, '');

console.log(concatenation);