// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// Further exploration

function swapName(name) {
  let names = name.split(' ');
  return names.pop() + ', ' + names.join(' ');
}

swapName('Joe Roberts');           // "Roberts, Joe"
swapName('Philip Seymour Hoffman'); // "Hoffman, Philip Seymour"
