function letterCaseCount(string) {

  let frequency = {lowercase: 0, uppercase: 0, neither: 0};

  string.split('').forEach(element => {

    if (/[a-z]/.test(element)) {
      frequency.lowercase += 1;
    } else if (/[A-Z]/.test(element)) {
      frequency.uppercase += 1;
    } else {
      frequency.neither += 1;
    }

  });

  return frequency;

}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));