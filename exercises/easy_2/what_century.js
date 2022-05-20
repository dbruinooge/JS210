function century(year) {
  const prefix = Math.floor((year + 99) / 100);
  const lastTwoDigits = prefix % 100;
  let suffix;
  if ([11, 12, 13].includes(lastTwoDigits)) {
    return prefix + 'th';
  }
  const lastDigit = prefix % 10;
  if (lastDigit === 1) {
    suffix = 'st';
  } else if (lastDigit === 2) {
    suffix = 'nd';
  } else if (lastDigit === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return prefix + suffix;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
