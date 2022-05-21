// function lastInArray(array) {
//   return array[array.length - 1];
// }

// Arrow function

const lastInArray = array => array[array.length - 1];

let array = [1, 2, 3];
console.log(lastInArray(array));

function rollCall(array) {
  for (let index = 0; index < array.length; index += 1) {
    console.log(array[index]);
  }
}

const NAMES = ['Derek', 'Mina', 'Sejun', 'Jiyeon'];

rollCall(NAMES);

function logReverseArray(array) {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    console.log(array[index]);
  }
}

logReverseArray(NAMES);

function arrayToString(array) {
  let resultString = '';
  for (let index = 0; index < array.length; index += 1) {
    resultString += String(array[index]);
  }
  return resultString;
}

console.log(arrayToString([1, 'a', 4]));
