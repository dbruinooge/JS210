function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(allCaps('Hi there how are you doing?'));
console.log(allCaps('Hello'))