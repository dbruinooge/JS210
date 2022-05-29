function swap(string) {
  let words = string.split(' ');
  let modifiedWords = words.map(word => {
    let chars = word.split('');
    [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
    return chars.join('');
  });
  console.log(modifiedWords.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
