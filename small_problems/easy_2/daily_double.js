function crunch(string) {
  let crunchedString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === string[index - 1]) {
      continue;
    }
    crunchedString += string[index];
  }
  return crunchedString;
}



crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""