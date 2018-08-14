// Arrow function
// Nao precisa de parenteses por ser parametro unico
const square = x => x * x;
// mais de um parametro.
const add = (x, y) => x + y;

const hello = () => alert('Hello World!');
hello();

// calculando imposto de renda 
const tax = salary => {
  let taxable = salary - 8000;
  const lowerRate = 0.25 * taxable;
  taxable -= 20000;
  const higherRate = 0.4 * taxable;
  return console.log(lowerRate + higherRate);
};
tax('50000');
