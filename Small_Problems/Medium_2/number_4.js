const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(year) {

  let count13ths = 0;

  months.forEach((_,month) => {

    let current13th = new Date(year, month, 13);

    let dayOfWeek = current13th.getDay();

    if (dayOfWeek === 5) {
      count13ths += 1;
    }

  });

  return count13ths;

}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));