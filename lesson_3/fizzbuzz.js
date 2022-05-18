function fizzbuzz() {
  for (let index = 1; index <= 100; index ++) {
    if (index % 5 === 0 && index % 3 === 0) {
      console.log('FizzBuzz');
    } else if (index % 5 === 0) {
      console.log('Buzz');
    } else if (index % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(index);
    }
  }
}

fizzbuzz();

function fizzbuzz_refactored() {
  for (let number = 1; number <= 100; number++) {
    let message = '';
    if (number % 3 === 0) message += 'Fizz';
    if (number % 5 === 0) message += 'Buzz';
    console.log(message || number);
  }
}

fizzbuzz_refactored();