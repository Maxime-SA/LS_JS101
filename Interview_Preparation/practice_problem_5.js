function leastCommonChar(string) {

  let myFrequencies = {};

  string = string.toLowerCase();

  string.split('').forEach(element => {

    if (!myFrequencies[element]) {
      myFrequencies[element] = 0;
    }

    myFrequencies[element] += 1;

  });

  let minimumValue = Object.values(myFrequencies).sort((a,b) => a - b)[0];

  for (let i = 0; i < string.length; i++) {
    if (myFrequencies[string[i]] === minimumValue) return string[i];
  }

}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');