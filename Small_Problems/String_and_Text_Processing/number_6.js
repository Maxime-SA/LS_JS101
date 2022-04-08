function staggeredCase(string) {

  return string.split('').map((element, index) => {

    if (/[a-zA-Z]/.test(element) && index % 2 === 0) {
      element = element.toUpperCase();
    } else if (/[a-zA-Z]/.test(element) && index % 2 !== 0) {
      element = element.toLowerCase();
    }

    return element;

  }).join('');

}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));