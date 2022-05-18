function rot13(string) {
  const UPPERCASE_LETTERS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];
  const LOWERCASE_LETTERS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];
  const ENCRYPTION_OFFSET = 13;
  const ALPHABET_LENGTH = 26;

  function rotatedLetter(letter, letterArray) {
    let oldIndex = letterArray.indexOf(letter);
    let newIndex = (oldIndex + ENCRYPTION_OFFSET) % ALPHABET_LENGTH;
    return letterArray[newIndex];
  }

  let encryptedString = '';

  for (let index = 0; index < string.length; index += 1) {
    let character = string[index];

    if (UPPERCASE_LETTERS.includes(character)) {
      encryptedString += rotatedLetter(character, UPPERCASE_LETTERS);
    } else if (LOWERCASE_LETTERS.includes(character)) {
      encryptedString += rotatedLetter(character, LOWERCASE_LETTERS);
    } else {
      encryptedString += character;
    }
  }

  return encryptedString;
}
