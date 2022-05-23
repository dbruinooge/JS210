function repeatedCharacters(string) {
  let counts= {};
  let chars = string.toLowerCase().split('');

  chars.forEach(char => {
    let count = chars.filter(c => c === char).length;
    if (count > 1) {
      counts[char] = count;
    }
  });

  return counts;
}

// Alternative (LS solution)

// function repeatedCharacters(string) {
//   let lowerCaseString = string.toLowerCase();
//   let result = {};

//   for (let index = 0; index < lowerCaseString.length; index += 1) {
//     if (result[lowerCaseString[index]] !== undefined) {
//       result[lowerCaseString[index]] += 1;
//     } else {
//       result[lowerCaseString[index]] = 1;
//     }
//   }

//   for (let char in result) {
//     if (result[char] < 2) {
//       delete result[char];
//     }
//   }

//   return result;
// }

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
