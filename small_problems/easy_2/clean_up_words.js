function cleanUp(string) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (ALPHABET.includes(char.toLowerCase())) {
      result += char;
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }
  console.log(result);
}

// Further exploration

function cleanUpRegEx(string) {
  let result = string.replace(/[^a-z]/gi, ' ');
  console.log(result.replace(/[ ]+/gi, ' '));
}

cleanUp("---what's my +*& line?");    // " what s my line "
cleanUpRegEx("---what's my +*& line?");    // " what s my line "
