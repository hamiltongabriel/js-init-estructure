// Funcao Nomeada.
function hello() {
  console.log('Hello World!');
}
hello();
console.log(hello.name);
// Funcao Literal, funcao anonima sem nome atribuida a uma variavel.
const goodbye = function () {
  console.log('Goodbye World!');
};
// Funcao Literal, funcao com nome atribuido a uma variavel.
const goodbyeNomeada = function nomeada() {
  console.log('Goodbye World!');
};
// Funcao declarada com construtor.
const hi = new Function('console.log("Hi World!");');

// RETURN VALUES

function howdy() {
  return 'Howdy World';
}
console.log(howdy());
// Atribuindo o valor da funcao a variavel
const message = howdy();
console.log(message);
