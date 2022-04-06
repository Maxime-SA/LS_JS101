function centerOf(string) {

  let length = string.length;

  if (length % 2 === 0) {

    let middle = length / 2;

    return string[middle - 1] + string[middle];

  } else {

    let middle = Math.floor(length / 2);

    return string[middle];

  }

}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('LaunchSchool'));
console.log(centerOf('x'));