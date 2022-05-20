function isDoubleNumber(number) {
  let numberString = number.toString();
  let stringLength = numberString.length;

  if (stringLength % 2 === 1) {
    return false;
  }

  let halfway = (stringLength / 2);
  let firstHalf = numberString.slice(0, halfway);
  let secondHalf = numberString.slice(halfway);

  return firstHalf === secondHalf;
}

function twice (number) {
  if (isDoubleNumber(number)) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
