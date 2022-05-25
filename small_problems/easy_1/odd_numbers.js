for (let number = 1; number <= 99; number += 1) {
  if (number % 2 === 1) {
    console.log(number);
  }
}

// Further exploration

function oddNumbers(max) {
  for (let number = 1; number <= max; number += 2) {
    console.log(number);
  }
}

oddNumbers(120);
