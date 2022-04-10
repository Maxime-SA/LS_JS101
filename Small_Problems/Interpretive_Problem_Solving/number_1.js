function lightsOn(switches) {

  let mySwitches = ' false'.repeat(switches).trim().split(' ');

  for (let round = 1; round <= switches; round++) {
    for (let step = round - 1; step < switches; step += round) {
      let newState =  mySwitches[step] === 'false' ? 'true' : 'false';
      mySwitches[step] = newState;
    }
  }

  return mySwitches.map((element, index) => {

    if (element === 'true') {
      return index + 1;
    } else {
      return 0;
    }

  }).filter(ele => ele > 0);

}

console.log(lightsOn(5));
console.log(lightsOn(100));