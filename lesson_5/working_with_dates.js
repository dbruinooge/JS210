let today = new Date();

function dateSuffix(dayOfMonth) {
  let suffix;
  if ([11, 12, 13].includes(dayOfMonth)) {
    suffix = 'th';
  }

  const lastDigit = dayOfMonth % 10;

  if (lastDigit === 1) {
    suffix = 'st';
  } else if (lastDigit === 2) {
    suffix = 'nd';
  } else if (lastDigit === 3) {
    suffix = 'st';
  } else {
    suffix = 'th';
  }
  return `${dayOfMonth}${suffix}`
}

function formattedMonth(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthNum = date.getMonth();
  return months[monthNum];
}

function formattedDay(date) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayNum = date.getDay();
  return daysOfWeek[dayNum];
}

function formattedDate(date) {
  const dayOfMonth = date.getDate();
  return `Today's date is ${formattedDay(date)}, ${formattedMonth(date)} ${dateSuffix(dayOfMonth)}`;
}

console.log(formattedDate(today));

console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());

let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);
console.log(formattedDate(tomorrow));

let nextWeek = new Date(today.getTime());
console.log(nextWeek.toDateString() === today.toDateString());

nextWeek.setDate(today.getDate() + 7);
console.log(nextWeek.toDateString() === today.toDateString());

function formatTime(date) {
  let hours = String(date.getHours());
  hours = hours.length === 1 ? '0' + hours : hours;
  let minutes = String(date.getMinutes());
  minutes = minutes.length === 1 ? '0' + minutes : minutes;

  return `${hours}:${minutes}`;
}

console.log(formatTime(new Date(2013, 2, 1, 1, 9)));
