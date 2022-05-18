const rlSync = require('readline-sync');

let grades = [];

for (let number = 1; ; number++) {
  let grade = rlSync.question(`Enter score ${number}: `)
  if (!grade) break;
  grades.push(parseInt(grade, 10));
}

function finalGrade(grades) {
  let gradesSum = grades.reduce((sum, grade) => sum + grade, 0);
  let gradesAverage = gradesSum / grades.length;

  if (gradesAverage >= 90) {
    return 'A';
  } else if (gradesAverage >= 70) {
    return 'B';
  } else if (gradesAverage >= 50) {
    return 'C';
  } else {
    return 'F';
  }

}

console.log(`Based on the average of your ${grades.length} scores your letter grade is "${finalGrade(grades)}".`);