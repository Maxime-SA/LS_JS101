function triangle(length) {
  for (let i = 1; i <= length; i += 1) {

    console.log(`${' '.repeat(length - i)}${'*'.repeat(i)}`);

  }
}

triangle(5);
triangle(10);
triangle(15);