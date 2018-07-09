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

// Parameters And Arguments, Passa parametros pra funcao, e atribuo argumentos.
function square(x) {
  return x * x;
}
console.log(square(4.5));
function mean(a, b, c) {
  return (a + b + c) / 3;
}
console.log(mean(1, 3, 8))

// Arguments variavel, toda funcao tem uma variavel chamada argumentos.
// Que contem todos os argumentos passados para esta funcao.
function arguments() {
  return arguments;
}
