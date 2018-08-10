// Definindo uma função literal
function hello() {
  console.log('Hello World!');
}
hello();

// Expressoa de função
const goodbye = function () {
  console.log('goodbye world!');
};
goodbye();

// Função nomeada.
const goodBye = function bye() {
  console.log('Goodbye World!');
};
goodBye();

// Toda função tem um nome
console.log(goodBye.nome);
console.log(goodbye.nome);
console.log(hello.nome);

// Return function
function howdy() {
  return 'Howdy World!';
}
const message = howdy();
console.log(message);

// Parametros e Argumentos
function square(parametro) {
  return console.log(parametro * parametro);
}
const argumento = 4.5;
square(argumento);
function mean(a, b, c) {
  return console.log((a + b + c)) / 3;
}
mean(1, 3, 6);
