function multiplesOfThreeAndFive() {
  for (let number = 1; number <= 100; number ++) {
    if (number % 5 === 0 && number % 3 === 0) {
      console.log(`${number}!`);
    } else {
      console.log(number);
    }
  }
}

multiplesOfThreeAndFive();

// Further exploration

function multiplesOfThreeAndFive2(start_num, end_num) {
  for (let number = start_num; number <= end_num; number ++) {
    if (number % 5 === 0 && number % 3 === 0) {
      console.log(`${number}!`);
    } else {
      console.log(number);
    }
  }
}

multiplesOfThreeAndFive2(16, 148);
