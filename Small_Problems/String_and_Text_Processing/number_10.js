const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumdoloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(lookingFor, lookIn) {

  return lookIn.split(' ').map(element => {

    let specialCharacter = '';

    if (/[^a-z]/i.test(element[element.length - 1])) {
      specialCharacter = element[element.length - 1];
      element = element.replace(/[^a-z]/gi, '');
    }

    if (element.toLowerCase() === lookingFor.toLowerCase()) {
      element = '**' + element.toUpperCase() + '**';
    }

    return element + specialCharacter;

  }).join(' ');

}

console.log(searchWord('pariatur', text));