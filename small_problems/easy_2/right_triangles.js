function triangle(number) {
  for (let count = 1; count <= number; count += 1) {
    console.log(' '.repeat(number - count) + '*'.repeat(count));
  }
}

triangle(5);

triangle(9);