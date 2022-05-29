function sequence(integer) {
  const result = [];
  
  for (let count = 1; count <= integer; count += 1) {
    result.push(count);
  }
  
  return result;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
