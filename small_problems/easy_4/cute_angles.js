function dms(angle) {
  angle %= 360;
  angle = angle < 0 ? angle += 360 : angle;
  
  let degrees = String(Math.floor(angle));
  
  let remainder = angle % 1;
  let rawMinutes = remainder * 60;
  let minutesRemainder = rawMinutes % 1;
  
  let minutes = String(Math.floor(rawMinutes));
  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }
  
  let seconds = String(Math.floor(minutesRemainder * 60));
  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }
  
  return degrees + '˚' + minutes + "'" + seconds + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
