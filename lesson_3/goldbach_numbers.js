function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) return false;
  for (let index = 2; index < number; index++) {
    if (number % index === 0) return false;
  }
  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let primes = [];
  for (let number = 2; number <= expectedSum / 2; number++) {
    if (isPrime(number)) primes.push(number);
  }

  primes.forEach(function(prime) {
    let difference = expectedSum - prime;
    if (isPrime(difference)) {
      let pair = [prime, difference].sort();
      console.log(pair[0], pair[1]);
    }
  });
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
