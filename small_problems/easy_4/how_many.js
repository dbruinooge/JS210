function countOccurrences(array) {
  const result = {};
  
  for (let index = 0; index < array.length; index += 1) {
    result[array[index]] = result[array[index]] + 1 || 1;
  }
  
  for (let vehicle in result) {
    console.log(`${vehicle} => ${result[vehicle]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
