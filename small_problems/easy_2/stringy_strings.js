function stringy(number) {
  let result = '';
  for (let index = 1; index <= number; index += 1) {
    let char = (index % 2 === 1) ? '1' : '0';
    result += char;
  }
  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
