function centerOf(string) {
  const middle = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    return string.slice(middle - 1, middle + 1);
  }
  
  return string.slice(middle, middle + 1);
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
