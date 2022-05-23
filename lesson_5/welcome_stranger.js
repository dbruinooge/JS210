function greetings(nameArray, jobInfo) {
  const name = nameArray.join(' ');
  const job = `${jobInfo.title} ${jobInfo.occupation}`;

  console.log(`Hello, ${name}! Nice to have a ${job} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
