const isEven = function (x) {
  // Retorna verdadeido se x for um multiplo de 2
  console.log(x);
  // return (x % 2 === 0) ? true : false;
  return (x % 2 === 0);
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Percorre a função até o retorno dela ser falso
console.log('Até ser falso =>', numbers.every(isEven));
// Percorre a função até o retorno dela ser verdadeiro
console.log('Até ser verdadeiro =>', numbers.some(isEven));
// Percorrendo a função usando ForEach identico ao FOR.
numbers.forEach((x) => {
  console.log('usando forEach =>', (x % 2 === 0));
});
// Usando map para retornar uma nova Matriz
const myMap = numbers.map(isEven);
console.log('map =>', myMap);
// Usando metodo filter para gerar um novo array com resultados positivos.
const evenNumbers = numbers.filter(isEven);
console.log('filter =>', evenNumbers);
// Usando método reduce para realizar uma soma.
console.log(numbers.reduce((previous, current, index) => {
  debugger
  return previous + current;
}));
