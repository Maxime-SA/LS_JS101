let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(element => {

  element.forEach(string => {

    string.split('').forEach(char => {

      if ('aeiou'.includes(char)) console.log(char);

    });
  });
});