function gcd(num1, num2) {
  let max = num1 < num2 ? num1 : num2;
  for (let index = max; index >= 1; index--) {
    if (num1 % index === 0 && num2 % index === 0) return index;
  }
}

function gcd_array(array) {
  let numbers = array.slice()
  let greatest = array[0];
  while (numbers.length > 1) {
    let new_greatest = gcd(numbers[0], numbers[1]);
    greatest = new_greatest < greatest ? new_greatest : greatest;
    numbers.shift();
  }
  return greatest;
}

console.log(gcd_array([12, 4, 8]));   // 4
