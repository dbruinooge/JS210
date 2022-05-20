function logInBox(string, maxLength) {
  if (string.length > maxLength - 4) {
    string = string.slice(0, (maxLength - 4));
  }

  function topBottomLine() {
    return '+' + '-'.repeat(maxLength - 2) + '+';
  }

  function middleLine() {
    return '|' + ' '.repeat(maxLength - 2) + '|';
  }

  function textLine() {
    return '| ' + string + ' |';
  }

  console.log(topBottomLine());
  console.log(middleLine());
  console.log(textLine());
  console.log(middleLine());
  console.log(topBottomLine());
}

logInBox('To boldly go where no one has gone before.', 45);

logInBox('Derek Bruinooge', 9);
