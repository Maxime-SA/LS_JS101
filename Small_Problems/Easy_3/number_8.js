function getGrade(firstGrade, secondGrade, thirdGrade) {

  let average = (firstGrade + secondGrade + thirdGrade) / 3;

  switch (true) {
    case average >= 90:
      return 'A';
    case average >= 80:
      return 'B';
    case average >= 70:
      return 'C';
    case average >= 60:
      return 'D';
    default:
      return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"