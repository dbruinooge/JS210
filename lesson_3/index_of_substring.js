function substring(startingIndex, endingIndex, string) {
  let result = '';
  for (let index = startingIndex; index <= endingIndex; index++) {
    result += string[index];
  }
  return result;
}

function indexOf(firstString, secondString) {
  let lastIndex = firstString.length - secondString.length;
  for (let index = 0; index <= lastIndex; index++) {
    let candidate = substring(index, index + secondString.length - 1, firstString);
    if (candidate === secondString) return index;
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let lastIndex = firstString.length - secondString.length;
  let results = [];
  for (let index = 0; index <= lastIndex; index++) {
    let candidate = substring(index, index + secondString.length - 1, firstString);
    if (candidate === secondString) results.push(index);
  }
  return (results[results.length - 1] || -1)
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1