function factorial(number) {
  let result = 1
  for (let factor = 1; factor <= number; factor += 1) {
    result *= factor;
  }
  return result;
}

console.log(factorial(8))