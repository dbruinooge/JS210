function oddElementsOf(arr) {
  let newArray = [];
  for (let index = 1; index < arr.length; index += 2) {
    newArray.push(arr[index]);
  }
  return newArray;
}

function originalAndReverseElements(arr) {
  let newArray = arr.slice();

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    newArray.push(arr[index]);
  }

  return newArray;
}

function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

function matrixSums(arr) {
  return arr.map(subarr => {
    return subarr.reduce((sum, num) => sum + num, 0);
    });
}

function uniqueElements(arr) {
  let result = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (!result.includes(arr[index])) {
      result.push(arr[index]);
    }
  }

  return result;
}
