function greetings(array, object) {

  let fullName = array.reduce((string, element) => string + ' ' + element, '').trim();

  let designation = object.title + ' ' + object.occupation;

  console.log(`Hello, ${fullName}! Nice to have an ${designation} around.`);


}

greetings(['Maxime', 'St-Onge', 'Amoretti'], {title : 'FCAS', occupation : 'actuary'});

// Pretty neat!