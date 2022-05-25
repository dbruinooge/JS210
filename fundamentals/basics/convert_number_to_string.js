const DIGITS = '0123456789';

// function integerToString(integer) {
//   let digits = [];
//   if (integer === 0) {
//     return '0';
//   }
  
//   while (integer > 0) {
//     let digit = integer % 10;
//     digits.push(DIGITS[digit]);
//     integer = Math.floor(integer / 10);
//   }

//   let string = '';
  
//   for (let index = digits.length - 1; index >= 0; index -= 1) {
//     string += digits[index];
//   }
  
//   return string;
// }

// LS solution

function integerToString(integer) {
  let string = '';
  
  do {
    let digit = integer % 10;
    string = DIGITS[digit] + string;
    integer = Math.floor(integer / 10);
  } while (integer > 0);
  
  return string;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"