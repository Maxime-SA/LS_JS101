function swapCase(string) {

  return string.split('').map(element => {

    if (/[a-zA-Z]/.test(element) && element === element.toUpperCase()) {
      element = element.toLowerCase();
    } else if (/[a-zA-Z]/.test(element) && element === element.toLowerCase()) {
      element = element.toUpperCase();
    }

    return element;

  }).join('');

}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));