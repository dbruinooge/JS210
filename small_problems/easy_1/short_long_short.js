function shortLongShort(string1, string2) {
  let sortedStrings = [string1, string2].sort(function(a, b) {
    return a.length - b.length;
  });

  return sortedStrings[0] + sortedStrings[1] + sortedStrings[0];
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
