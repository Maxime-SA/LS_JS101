function dms(number) {

  let degrees = Math.floor(number);

  let minutes = Math.floor(60 * (number - degrees));

  let seconds = Math.floor(60 * ((60 * (number - degrees)) - minutes));

  return `${degrees}˚${minutes <= 9 ? `0${minutes}` : `${minutes}`}'${seconds <= 9 ? `0${seconds}` : `${seconds}`}"`;

}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));