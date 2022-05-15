let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];


myArray.forEach(function(array) {
  array.forEach(function(number) {
    if (number % 2 === 0) {
    console.log(number);
    }
  })
});

myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let mappedArray = myArray.map(function(number) {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})

console.log(mappedArray);

mappedArray = []

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i]
  if (value % 2 === 0) {
    mappedArray.push('even');
  } else {
    mappedArray.push('odd');
  }
}

console.log(mappedArray);
