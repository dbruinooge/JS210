function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function slice(array, start, end) {
  let result = [];

  for (let index = start; index < end; index += 1) {
    push(result, array[index]);
  }

  return result;
}

function splice(array, start, numberOfValues) {
  let newArray = [];
  for (let index = start; index < array.length; index += 1) {
    if (index < start + numberOfValues) {
      push(newArray, array[index]);
    }
    array[index] = array[index + numberOfValues];
  }
  array.length -= numberOfValues;
  return newArray;
}

function concat(array1, array2) {
  let result = [];

  for (let index = 0; index < array1.length; index += 1) {
    push(result, array1[index]);
  }

  for (let index = 0; index < array2.length; index += 1) {
    push(result, array2[index]);
  }

  return result;
}

function join(array, string) {
  let result = '';

  for (let index = 0; index < array.length - 1; index += 1) {
    let char = String(array[index]);
    result += char + string;
  }
  result += array[array.length - 1];
  return result;
}
