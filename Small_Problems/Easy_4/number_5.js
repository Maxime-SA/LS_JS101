function isPalindrome(string) {

  return string.split('').reverse().join('') === string;

}

function clean(string) {

  let tempArray = [];

  string.split('').forEach(element => {

    let uniCode = element.toLowerCase().charCodeAt(0);

    if ((uniCode >= 48 && uniCode <= 57) || (uniCode >= 97 && uniCode <= 122)) {
      tempArray.push(element.toLowerCase());
    }

  });

  return tempArray.join('');

}

console.log(isPalindrome(clean('madam')));
console.log(isPalindrome(clean('Madam')));
console.log(isPalindrome(clean('madam i\'m adam')));
console.log(isPalindrome(clean('356653')));
console.log(isPalindrome(clean('356a653')));
console.log(isPalindrome(clean('123ab321')));