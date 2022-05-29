function wordSizes(string) {
  let counts = {};
  if (string === '') {
    return counts;
  }
  let words = string.replace(/[^ a-z]/gi, '').split(' ');
  
  for (let index = 0; index < words.length; index += 1) {
    let wordLength = String(words[index].length);
    if (Object.keys(counts).includes(wordLength)) {
      counts[wordLength] += 1;
    } else {
      counts[wordLength] = 1;
    }
  }
  
  console.log(counts);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}

