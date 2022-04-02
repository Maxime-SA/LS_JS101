const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function cleanUp(string) {

  let newText = '';

  for (let i = 0; i < string.length; i += 1) {

    if (alphabet.includes(string[i].toLowerCase())) {

      newText += string[i];

    } else if (newText[newText.length - 1] !== ' ') {
      newText += ' ';
    }
  }
  return newText;
}

console.log(cleanUp("---what's my +*& line?"));