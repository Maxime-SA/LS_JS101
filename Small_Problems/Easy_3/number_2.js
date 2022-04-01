function logInBox(message) {

  let formatMessage = `| ${message} |`;
  let messageLength = formatMessage.length;

  console.log(`+${'-'.repeat(messageLength - 2)}+`);
  console.log(`|${' '.repeat(messageLength - 2)}|`);
  console.log(formatMessage);
  console.log(`|${' '.repeat(messageLength - 2)}|`);
  console.log(`+${'-'.repeat(messageLength - 2)}+`);

}

logInBox('To boldly go where no one has gone before.');
logInBox('This is pretty cool!');
logInBox('');