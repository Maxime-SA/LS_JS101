function timeOfDay(number) {

  let sign = Math.sign(number);

  number = sign === 1 ? number : number * -1;

  let numberOfHours = number >= 24 * 60 ? Math.floor(((number / 60) % 24)) :
    Math.floor(number / 60);

  let numberOfMinutes = number - (Math.floor(number / 60) * 60);

  if (sign === -1) {
    numberOfMinutes = numberOfMinutes === 0 ? 0 : 60 - numberOfMinutes;
    numberOfHours = numberOfMinutes === 0 ? 24 - numberOfHours : 24 -
                    numberOfHours - 1;
  }

  return (numberOfHours <= 9 ? `0${numberOfHours}` : `${numberOfHours}`) +
  (numberOfMinutes <= 9 ? `:0${numberOfMinutes}` : `:${numberOfMinutes}`);

}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");