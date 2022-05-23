function slice(arr, begin, end) {
  let result = []

  if (begin > arr.length) {
    begin = arr.length;
  }

  if (end > arr.length) {
    end = arr.length;
  }

  for (let index = begin; index < end; index += 1) {
    result.push(arr[index]);
  }

  return result;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...elements) {
  let deletedElements = [];

  if (start > array.length) {
    start = array.length
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  for (let index = start; index < start + deleteCount; index += 1) {
    deletedElements.push(array[index]);
    array[index] = array[index + deleteCount];
  }

  array.length -= deleteCount;

  if (elements.length > 0) {
    let finalElements = array.slice(start, array.length);
    array.length = start;
    for (let index = 0; index < elements.length; index += 1) {
      array[start + index] = elements[index];
    }

    for (let index = 0; index < finalElements.length; index += 1) {
      array[array.length] = finalElements[index];
    }
  }

  return deletedElements;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(arr4);
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
