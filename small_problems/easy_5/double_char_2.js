function doubleConsonants(string) {
  return string.split('').map(char => {
    return char.match(/[bcdfghjklmnpqrstvwxyz]/i) ? char + char : char;
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
