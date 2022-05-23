const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_DAY = 1440;

function afterMidnight(timeStr) {
  const midnight = new Date('1/1/2000 00:00').getTime();
  const currentTime = new Date(`1/1/2000 ${timeStr}`).getTime();

  return (currentTime - midnight) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  const midnight = new Date('1/2/2000 00:00').getTime();
  const currentTime = new Date(`1/1/2000 ${timeStr}`).getTime();

  return (midnight - currentTime) / MILLISECONDS_PER_MINUTE % MINUTES_PER_DAY;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
