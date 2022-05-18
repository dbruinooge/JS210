function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  if (delimiter === '') {
    for (let index = 0; index < string.length; index++) {
      console.log(string[index]);
    }
    return;
  }

  let substring = '';

  for (let index = 0; index < string.length; index++) {
    if (string[index] === delimiter) {
      console.log(substring);
      substring = '';
    } else {
      substring += string[index];
      if (index === string.length - 1) console.log(substring);
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
