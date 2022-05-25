const DIGITS = '0123456789'

function stringToInteger(string) {
  let reversedArray = string.split('').reverse();
  let integer = 0;
  
  for (let index = 0; index < reversedArray.length; index += 1) {
    integer += DIGITS.indexOf(reversedArray[index]) * (Math.pow(10, index));
  }
  
  return integer;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default: return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
