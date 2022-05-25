const rlSync = require('readline-sync');

const SQ_FEET_PER_SQ_METER = 10.7639;
let unconvertedUnit;
let convertedUnit;

function convertArea(unconvertedUnit, unconvertedArea) {
  if (unconvertedUnit === 'meters') {
    return unconvertedArea * SQ_FEET_PER_SQ_METER;
  }
  return unconvertedArea / SQ_FEET_PER_SQ_METER;
}

while (true) {
  let prompt = 'Enter the unit of measurement (feet or meters):\n';
  unconvertedUnit = rlSync.question(prompt);
  if (['feet', 'meters'].includes(unconvertedUnit.toLowerCase())) break;

  console.log('\nInvalid input.');
}

convertedUnit = unconvertedUnit === 'feet' ? 'meters' : 'feet';

let lengthPrompt = `Enter the length of the room in ${unconvertedUnit}:\n`;
let length = rlSync.question(lengthPrompt);
let widthPrompt = `Enter the width of the room in ${unconvertedUnit}:\n`;
let width = rlSync.question(widthPrompt);

length = parseInt(length, 10);
width = parseInt(width, 10);

let unconvertedArea = (length * width).toFixed(2);
let convertedArea = convertArea(unconvertedUnit, unconvertedArea).toFixed(2);

let result = `The area of the room is ${unconvertedArea} square ` +
             `${unconvertedUnit} (${convertedArea} square ${convertedUnit}).`;

console.log(result);
