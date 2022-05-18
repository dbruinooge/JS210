const logMultiples = function(factor) {
  for (let number = 100; number >= 0; number--) {
    if (number % factor === 0 && number % 2 === 1) console.log(number);
  }
};

logMultiples(17);
logMultiples(21);

const logMultiples2 = function(factor) {
  let largestMultiple = Math.floor(100 / factor) * factor;
  for (let number = largestMultiple; number >= factor; number -= factor) {
    if (number % 2 === 1) console.log(number);
  }
};

logMultiples2(17);
logMultiples2(21);
