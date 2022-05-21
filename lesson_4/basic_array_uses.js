function firstElementOf(arr) {
  return arr[0];
}

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

function nthElementOf(arr, index) {
  return arr[index];
}

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr.slice();
  }
  return arr.slice(arr.length - count);
}

function endsOf(beginningArr, endingArr) {
  return [firstElementOf(beginningArr), lastElementOf(endingArr)];
}
