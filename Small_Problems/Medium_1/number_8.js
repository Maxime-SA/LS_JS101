let priorFibo = {0 : 0, 1 : 1, 2 : 1};

function fibonacci(number) {

  if (priorFibo[number] || number === 0) return priorFibo[number];

  priorFibo[number] = fibonacci(number - 1) + fibonacci(number - 2);

  return priorFibo[number];

}


console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));