function sum(numbers) {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }

  return total;
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

console.log(average([2, 4, 9, 10, 0]));

let temperatures = [35, 5, 25, 16, 31];

console.log(average(temperatures));
