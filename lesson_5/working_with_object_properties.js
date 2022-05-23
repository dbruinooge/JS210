function objectHasProperty(object, property) {
  let keys = Object.keys(object);
  return keys.indexOf(property) !== -1;
}

function incrementProperty(object, string) {
  if (objectHasProperty(object, string)) {
    object[string] += 1;
  } else {
    object[string] = 1;
  }

  return object[string];
}

function copyProperties(fromObject, toObject) {
  for (let property in fromObject) {
    toObject[property] = fromObject[property];
  }

  return Object.keys(fromObject).length;
}

function wordCount(string) {
  const words = string.split(' ');
  const counts = {}

  words.forEach(word => {
    counts[word] = words.filter(w => word === w).length;
  });
  return counts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }