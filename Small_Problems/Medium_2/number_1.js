function letterPercentages(string) {

  let myPercentages = {lowercase : 0, uppercase : 0, neither : 0};

  string.split('').forEach(char => {

    if (/[a-z]/.test(char)) {
      myPercentages['lowercase'] += 1;
    } else if (/[A-Z]/.test(char)) {
      myPercentages['uppercase'] += 1;
    } else {
      myPercentages['neither'] += 1;
    }

  });

  return calculatePercentages(myPercentages);

}

function calculatePercentages(obj) {

  let count = Object.values(obj).reduce((previous, current) => previous + current, 0);

  Object.keys(obj).forEach(key => obj[key] = String(((obj[key] / count) * 100).toFixed(2)));

  return obj;

}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));