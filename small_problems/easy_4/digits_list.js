// function digitList(number) {
//   const result = [];
//   const digitString = String(number);
  
//   for (let index = 0; index < digitString.length; index += 1) {
//     result.push(Number(digitString[index]));
//   }
  
//   return result;
// }

// Further exploration

function digitList(number) {
  const numberStringArray = String(number).split('');
  return numberStringArray.map(Number);
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
