function sequence(count, start) {
  const result = [];
  
  for (let number = 1; number <= count; number += 1) {
    result.push(number * start);
  }
  
  return result;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
