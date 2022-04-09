function triangle(firstSide, secondSide, thirdSide) {

  let mySides = [firstSide, secondSide, thirdSide].sort();

  let allGreaterThanZero = mySides[0] > 0;

  let equilateral = mySides[0] === mySides[1] && mySides[1] === mySides[2];

  let scalene = (mySides[0] !== mySides[1] && mySides[0] !== mySides[2] && mySides[1] !== mySides[2])

  switch (true) {

    case mySides[0] + mySides[1] < mySides[2]:
    case !allGreaterThanZero:
      return 'invalid';
    case equilateral:
      return 'equilateral';
    case scalene:
      return 'scalene';
    default:
      return 'isosceles';

  }

}

console.log(triangle(3,3,3));
console.log(triangle(3,3,1.5));
console.log(triangle(3,4,5));
console.log(triangle(0,3,3));
console.log(triangle(3,1,1));