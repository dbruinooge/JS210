function generatePattern(number) {
  for (let line = 1; line <= number; line++) {
    displayLine(line, number);
  }
}

function displayLine(numbers, length) {
  let line = '';

  for (let position = 1; position <= length; position++) {
    if (position <= numbers) {
      line += String(position);
    } else {
      let stars = String(position).length;
      line += '*'.repeat(stars);
    }
  }
  console.log(line);
}

generatePattern(60);
