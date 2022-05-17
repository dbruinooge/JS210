let apples = 3;
let bananas = 1;

let eitherOr = apples || bananas;
console.log(eitherOr);

eitherOr = bananas || apples;
console.log(eitherOr);

let areEqual = apples === bananas;
console.log(areEqual);

if (apples === bananas) {
  console.log("They're equal!");
} else {
  if (apples == bananas) {
  console.log("They're the same number, but different types.")
  } else {
  console.log("They're not equal!");
  }
}

let lastName = "Bruinooge";
let familyMessage = lastName === "Bruinooge" ? "You're part of the family!" :
                                                 "You're not family.";

console.log(familyMessage);