// Método Call() define o valor dentro de uma função para um objeto que é definido como primeiro argumento.
// Me retorna o objeto correto, conforme passado por parametro...
function sayHello() {
  return `Hello, my name is ${this.name}`;
}
const hamilton = { name: 'Gabriel' };
const bruce = { name: 'Bruce' };

console.log(sayHello.call(hamilton));
console.log(sayHello.call(bruce));


// Se a função necessitar de parametros, deve ser fornecida como argumento
// apos o parametro padrao do call.
function sayGreeting(greeting = 'Hello') {
  return `${greeting}, meu nome é ${this.name}`;
}
console.log(sayGreeting.call(hamilton, 'Bom Dia'));

console.log(sayGreeting.call(bruce));

// Chgamando call mesmo sem um objeto da função.
function square(x) {
  return x * x;
}
console.log(square.call(null, 4));
