function isPalindrome(string) {

  return string.split('').reverse().join('') === string;

}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('madam i\'m adam'));
console.log(isPalindrome('356653'));