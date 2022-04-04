function afterMidnight(hour) {

  if (hour === '24:00') return 0;

  let timeArray = hour.split(':');

  let numberOfHours = Number(timeArray[0]);

  let numberOfMinutes = Number(timeArray[1]);

  return (numberOfHours * 60) + numberOfMinutes;

}

function beforeMidnight(hour) {

  if (hour === '24:00' || hour === '00:00') return 0;

  return 1440 - afterMidnight(hour);

}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("23:05") === 1385);
console.log(beforeMidnight("23:05") === 55);