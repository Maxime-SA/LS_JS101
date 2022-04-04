function isPalindrome(number) {

  let myString = String(number);

  return myString.split('').reverse().join('') === myString;

}

console.log(isPalindrome(34543));
console.log(isPalindrome(123210));
console.log(isPalindrome(22));
console.log(isPalindrome(5));