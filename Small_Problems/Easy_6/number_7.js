function swapName(name) {

  let nameReversed = name.split(' ').reverse();

  return nameReversed[0] + ', ' + name.split(' ').slice(0,nameReversed.length - 1).join(' ');

}

console.log(swapName('Joe William Thibert Roberts'));