function triangle(firstAngle, secondAngle, thirdAngle) {

  const myAngles = [firstAngle, secondAngle, thirdAngle].sort();

  const validTriangle = (myAngles[0] > 0) && (myAngles.reduce((prev, curr) => prev + curr) === 180);

  const rightTriangle = myAngles.filter(ele => ele === 90).length === 1;

  const acuteTriangle = myAngles.every(ele => ele < 90);

  switch (true) {

    case (!validTriangle):
      return 'invalid';
    case (rightTriangle):
      return 'right';
    case (acuteTriangle):
      return 'acute';
    default:
      return 'obtuse';

  }

}

console.log(triangle(60,70,50));
console.log(triangle(30,90,60));
console.log(triangle(120,50,10));
console.log(triangle(0,90,90));
console.log(triangle(50,50,50));