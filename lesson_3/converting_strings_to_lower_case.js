function toLowerCase(string) {
  let CONVERSION_OFFSET = 32;
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    let asciiNumeric = string[index].charCodeAt(0);
    if (asciiNumeric >= 'A'.charCodeAt(0) && asciiNumeric <= 'Z'.charCodeAt(0)) {
      asciiNumeric += CONVERSION_OFFSET;
    }
    result += String.fromCharCode(asciiNumeric);
  }
  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"