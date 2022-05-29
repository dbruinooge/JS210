let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

// This code logs 40 and 45
// The key to this question is the value referenced by `startingBalance` when `totalPayable`
// is invoked on lines 10 and 13. 
// Because of how closures work, the `startingBalance` retains access to the `totalPayable` variable
// because that variable is within the scope of `startingBalance` when the function is declared.`
// the variable's value is then dynamically looked up each time `startingBalance` is invoked.
