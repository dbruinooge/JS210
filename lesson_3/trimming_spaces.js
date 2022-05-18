function firstNonSpace(string) {
  for (let position = 0; position < string.length; position++) {
    if (string[position] !== ' ') return position;
  }
}

function lastNonSpace(string) {
  for (let position = string.length - 1; position >= 0; position--) {
    if (string[position] !== ' ') return position;
  }
}

function trim(string) {
  if (firstNonSpace(string) === undefined) return '';

  let result = '';
  let starting_index = firstNonSpace(string);
  let ending_index = lastNonSpace(string);

  for (let position = starting_index; position <= ending_index; position++) {
    result += string[position];
  }
  return result;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
console.log(trim('a'));        // "a"