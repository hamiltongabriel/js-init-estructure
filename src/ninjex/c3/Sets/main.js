// Sets = Conjuntos -> Estrutura de dados que representa uma coleção de valores exclusivos.
// Não podendo incluir valores duplicados.
// rápido e facil de verificar se um determinado valor está em um conjunto.
// Abandonando o uso de arrays.

/* Criando um Set */
const list = new Set();
/* Adicionando um valor a lista. */
list.add(1);
console.log(list);
/* Adicionando multiplos valores */
list.add(2).add(3).add(4);
console.log(list);
/* Adicionando multplos valores na declaração */
const numbers = new Set([1, 2, 3]);
console.log(numbers);
/* Os valores repetidos do Array são removidos */
const moreNumbers = new Set([7, 7, 7, 7, 7, 8, 8, 8, 9, ]);
console.log(moreNumbers);
// Se uma String for usada como argumento, cada caracter é separado. E os repetidos apagados.
const letters = new Set('Hello');
console.log(letters);
// Para adicionarmos palavras separadas, precisamos utilizar o metodo add()
const words = new Set().add('the').add('teste');
console.log(words);
// Os valores não primitivos aparenta permitir valores duplicados dentro dos cojuntos.
const arrays = new Set().add([1]).add([1]);
console.log(arrays);
// Ambas são consideradas objetos diferentes.
console.log([0] === [0]);

const mixedTypes = new Set().add(2).add('2');
console.log(mixedTypes);