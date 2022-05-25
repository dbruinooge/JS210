const DIGITS = '0123456789';

function integerToString(integer) {
  let string = '';
  
  do {
    let digit = integer % 10;
    string = DIGITS[digit] + string;
    integer = Math.floor(integer / 10);
  } while (integer > 0);
  
  return string;
}

function signedIntegerToString(integer) {
  if (integer > 0) {
    return '+' + integerToString(integer);
  } else if (integer < 0) {
    return '-' + integerToString(Math.abs(integer));
  }

  return integerToString(integer);
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"