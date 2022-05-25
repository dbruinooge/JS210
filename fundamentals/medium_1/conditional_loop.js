let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// The condition statement is satisfied `since 0 % 0 === 0`, and thus line 4 is executed on each iteration.
// This loops infinitely since we never reach the increment expression in the else statement.
