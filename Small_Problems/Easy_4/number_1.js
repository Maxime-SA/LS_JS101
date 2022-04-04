let numberOfSimulation = 1000;
let myArray = [];

for (let i = 1; i <= numberOfSimulation; i++) {

  let randomNumber = Math.floor(Math.random() * 101) + 20;
  let counter = 0;

  while (randomNumber !== 120) {

    randomNumber = Math.floor(Math.random() * 101) + 20;

    counter++;

  }

  myArray.push(counter);

}

let avgNumSimulation = myArray.reduce((previous, current) => previous + current , 0)
                       / numberOfSimulation;

console.log(avgNumSimulation);