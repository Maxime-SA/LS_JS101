function minilang(command) {

  let stack = [];
  let register = 0;

  command.split(' ').forEach(element => {
    
    if (Number(element) >= 0 || Number(element) < 0) {
      register = Number(element);
    } else if (element === 'PUSH') {
      stack.push(register);
    } else if (element === 'ADD') {
      register += stack.pop();
    } else if (element === 'SUB') {
      register -= stack.pop();
    } else if (element === 'MULT') {
      register *= stack.pop();
    } else if (element === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (element === 'REMAINDER') {
      register = register % stack.pop();
    } else if (element === 'POP') {
      register = stack.pop();
    } else if (element === 'PRINT') {
      console.log(register);
    }

  });

}

minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');