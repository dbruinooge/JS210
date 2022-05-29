// function negative(number) {
//   return -Math.abs(number);
// }

// Further exploration:

function negative(number) {
  return number < 0 ? number : -number;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
