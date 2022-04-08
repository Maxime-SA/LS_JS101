function staggeredCase(string) {

  let counter = 0;

  return string.split('').map(element => {

    if (/[a-zA-Z]/.test(element) && counter === 0) {
      element = element.toUpperCase();
      counter += 1;
    } else if (/[a-zA-Z]/.test(element) && counter === 1) {
      element = element.toLowerCase();
      counter -= 1;
    }

    return element;

  }).join('');

}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");