let title = 'The Three-Body Problem';
let author = 'Cixin Liu';
let pageCount = 400;

let completed = lastPageRead === 400;

if (finishedBook()) console.log('You have finished reading this book');

let read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page '+ String(page);
    console.log(message);
  }
}

read(400);