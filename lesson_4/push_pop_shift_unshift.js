function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function pop(array) {
  if (array.length === 0) {
    return undefined;
  }
  let lastElement = array[array.length - 1];
  array.length -= 1;
  return lastElement;
}

function unshift(array, value) {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    array[index + 1] = array[index];
  }
  array[0] = value;
  return array.length;
}

function shift(array) {
  let firstValue = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let index = 0; index < array.length; index += 1) {
    array[index] = array[index + 1];
  }
  array.length -= 1;
  return firstValue;
}
