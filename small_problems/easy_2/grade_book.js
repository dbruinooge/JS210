function getGrade(grade1, grade2, grade3) {
  const average = (grade1 + grade2 + grade3) / 3;
  if (average < 60) {
    console.log('F');
  } else if (average < 70) {
    console.log('D');
  } else if (average < 80) {
    console.log('C');
  } else if (average < 90) {
    console.log('B');
  } else {
    console.log('A');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
