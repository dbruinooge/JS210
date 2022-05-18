function logOddNumbers(number) {
  for (let index = 1; index <= number; index++) {
    if (index % 2 === 1) console.log(index);
  }
}

logOddNumbers(19);

// Further exploration

function logOddNumbers2(number) {
  for (let index = 1; index <= number; index += 2) {
    console.log(index);
  }
}

logOddNumbers2(19);

function logOddNumbers3(number) {
  for (let index = 1; index <= number; index++) {
    if (index % 2 === 0) continue;
    console.log(index);
  }
}

logOddNumbers3(19);