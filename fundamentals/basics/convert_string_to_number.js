const DIGITS = '0123456789'

function stringToInteger(string) {
  let reversedArray = string.split('').reverse();
  let integer = 0;
  
  for (let index = 0; index < reversedArray.length; index += 1) {
    integer += DIGITS.indexOf(reversedArray[index]) * (Math.pow(10, index));
  }
  
  return integer;
}

console.log(stringToInteger('4321'));       // 4321
console.log(stringToInteger('570'));        // 570
