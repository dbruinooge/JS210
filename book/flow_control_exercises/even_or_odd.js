function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Not an integer')
    return
  }
  else if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd('hello');
evenOrOdd(3);
evenOrOdd(4);