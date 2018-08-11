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

// Função de Argumentos
function arguments() {
  return arguments;
}
console.log(arguments('hello', NaN))

// Rest coletando os argumentos da funcao, e atribuindo a funcao rest.

function rest(...args){
  return args;
}
console.log(rest(2, 3, 4, 5, 6));
// Percoreendo todos os dados colocados como argumento.
function restTwo(...args){
  for(arg of args){
    console.log(arg);
  }
}
restTwo(3, 5, 6);

// Mean Function
function mean(...values){
  let total = 0;
  for(const value of values){
    total += value;
  }
  return console.log(total/values.length);
}
mean(2, 4, 5, 6)
