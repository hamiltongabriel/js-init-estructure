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
// Arguments nao sao retornados em arrays
console.log(arguments('hello', NaN))
// usando o operador rest para criar uma matriz e lidar com varios argumentos
function rest (...args){
  for(arg of args){
    console.log(arg);
  }
}
console.log(rest(2, 4, 6, 8));
// Melhorando a funcao mean para receber qualquer parametro
function meanMelhorada(...values) {
  let total = 0;
  for (const value of values){
    total += value;
  }
  return total/values.length;
}
console.log(meanMelhorada(2, 4, 5))
//Parametros Padrao
function helloPadrao(name='world'){
  console.log(`Hello ${name}`)
}
console.log(helloPadrao('kkkk'))
//Fornecer os valores padrao apos os nao padroes.
function discount(price, amount=10) {
  return `Valor com desconto aplicado de ${amount}% ${price*(100-amount)/100}`
}
console.log(discount(20, 11));
console.log(discount(15, 20));
//Arrow Functions
// Arrow functions sao sempre anonimos. Devemos ter algo para atribuir, tipo uma variavel.
// Parametros unicos nao precisam de parenteses
const squareMelhorada = x => x*x;
//two parameters
const add = (x,y) => x + y;
//Sem parametros
const helloNoParameter = () => alert('Hello World!');
// Funcoes mais Longas / Calculando Imposto
const tax = (salary) => {
  let taxable = salary - 8000;
  const lowerRate = 0.25 * taxable;
  taxable = taxable - 20000;
  const higherRate = 0.4 * taxable;
  return lowerRate + higherRate;
}
// Funçao de içamento (Hoisting)
// içamento = mover todas as variaveis e declaracao de funcao do javascript para o topo
// Deixando a mesma possivel de ser invocada antes de ser definida.
console.log(hoist());
function hoist() {
  console.log('Hoist Me')
}
// Callbacks retorno de chamadas.
// Funcoes podem ser parametros de outras funcoes,
function sing(song) {
  console.log(`I'm singing along to ${song}`);
}
sing('Let It Go')
function singFlexivel(song, callback) {
  console.log(`I'm singing along to ${song}`);
  if (typeof (callback) === 'function') {
    callback();
  }
}
function dance (){
  console.log("I'm moving my body to the groove.");
}
// Passo o argumento dance sem parenteses, por ser uma referencia, e o callback, chama o parenteses para emitir a funcao
singFlexivel('Let It Go', dance);
// Classificando matriz com um retorno de chamada.
// Retorno de chmada para ordenacao de numeros.
function numerically(a, b) {
  return a-b
}
[1,3,24,53,32,123,12,13].sort(numerically);
// 2 Plano evitando estouro.
function numericallyAlterada(a, b){
  if (a < b){
    return -1;
  } else if (a > b){
    return 1;
  } else {
    return 0;
  }
}
// Iteradores de Array (Array iteretors)
//Percorrendo cada valor de um array.
const colors = ['Red', 'Green', 'Blue']
for (let i = 0, max = colors.length; i < max; i++){
  console.log(`Color at position ${i} is ${colors[i]}`);
}
// Melhorando a funcao colors. (forEach())
//Isso fará um loop na matriz e chamará uma função de retorno de chamada usando cada valor como um argumento. A função de retorno de chamada leva três parâmetros, o primeiro representa o valor na matriz, o segundo representa o índice atual e o terceiro representa a matriz que o retorno de chamada está sendo chamado.
colors.forEach((color, index) =>{
  console.log(`Color at position ${index} is ${color}`);
  })

//Metodo Map()O
// O método map () é muito semelhante ao método forEach (). Ele também faz iteração em uma matriz e recebe uma função de retorno de chamada como um parâmetro que é chamado em cada item da matriz. Isso geralmente é usado para processar dados retornados de bancos de dados em forma de matriz, como adicionar tags HTML a texto sem formatação.
// E retorna um array.
console.log([1, 2, 3].map( square ))
// Usando funcao anonima, dobrando os valores.
console.log([1, 2, 3].map( x => 2 * x));
console.log(['red', 'green', 'blue'].map( color => `<p> ${color.toUpperCase()} </p>`));
// Usando os 3 parametros que o map me fornece.
console.log(['red', 'green', 'blue'].map( (color, index, array) => `Elemento ${index} é ${color}. contem ${array.length} items no total`));

// Metodo Reduce()
// O método reduce () é outro método que se repete sobre cada valor na matriz, mas desta vez combina cumulativamente cada resultado para retornar apenas um único valor. A função de retorno de chamada é usada para descrever como combinar cada valor da matriz com o total em execução. Isso geralmente é usado para calcular estatísticas, como médias de dados armazenados em uma matriz. Geralmente, são necessários dois parâmetros. O primeiro parâmetro representa o valor acumulado de todos os cálculos até o momento e o segundo parâmetro representa o valor atual na matriz.
// Realizando uma soma.
console.log([1, 2, 3, 4, 5].reduce( (acc, val) => acc + val));
// Passando um valor inicial.
console.log([1, 2, 3, 4, 5].reduce( (acc, val) => acc + val, 10));
// Calculando o tamanho de uma frase.
const sentence = 'A rápida raposa marrom saltou sobre o cão preguiçoso';
words = sentence.split(` `);
// Calculando o numero total de letras com reduce()
const total = words.reduce( (acc, word) => acc + word.length, 0);
