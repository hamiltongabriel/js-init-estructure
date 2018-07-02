const heroes = [];
heroes[0] = 'Batman';

// const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
// delete avengers[3]; // Deleta o valor, mas fica armazenada a posicao com valor undefined.
// console.log(avengers);

// Destruturing Arrays = A desestruturação nos permite atribuir vários valores ao mesmo tempo
let [x, y] = [1, 2];
[x, y] = [y, x]; // => Trocando os valores das variaveis.

// Array propriedades e Methodos.
let avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
avengers.length;
avengers[avengers.length - 1]; // Encontrando o ultimo item do Array.
avengers.length = 3;
avengers.pop(); // Removendo o ultimo item do Array.
avengers.shift(); // Removendo o primeiro item do Array.
avengers.push('Thor'); // Adicionando um novo item no fim do Array.
avengers.unshift('Captain America'); // Adicionando um novo item no inicio do Array.

// Concatenando os Arrays
avengers = avengers.concat(['Hulk', 'Hawkeye', 'Black Widow']); // Concatenando um Array Dentro de outro Array.
avengers = [ ...avengers, ...['Hulk', 'Hawkeye', 'Black Widow']]; // Operador Spread, espalha os elementos de dois arrays, e colocam juntos em uma nova.
avengers.join(' & '); // Transforma uma array em uma String e altera as virgulas por & .

// Slicing and Splicing (Corte e emenda)
avengers.slice(2, 4); // corta uma fatia de um array cortando de um local especifico e terminando no outro.(inicia no 2 e termina antes do 4)
avengers.splice(3, 1, 'Scarlet With'); // 3: posicao do length 1: quantidade a ser removida.
avengers.splice(4, 0, 'Quicksilver'); // Adicionando sem precisar remover.
avengers.splice(2, 1); // Removendo o item da posicao, sem adicionar nada.

// Reverse (Revertendo a ordem de um array)
avengers.reverse(); // Invertendo as ordens dos campos do array.

// Sort (Ordenando a ordem do componente )
avengers.sort(); // Ordenando em ordem alfabetica.

// Finding if a Value is in an Array (Descobrindo se um valor esta em um array).
avengers.indexOf('Iron Man'); // Se o item estiver ele retorna a posicao do item.
avengers.includes('Iron Man'); // Retorna um valor booleano se contem ou nao.
avengers.includes('Black Widow', 1); // Fazendo a busca e indicando qual posicao comecar a busca.

// Multidimensional Arrays (Arrays Multidimensionais).
const coordinates = [[1, 3], [4, 2]];
coordinates[0][0]; // Acessando o primeiro valor do array.
const summer = ['Junho', 'Julho', 'Agosto'];
const winter = ['Dezembro', 'Janeiro', 'Fevereiro'];
const nested = [ summer, winter ];
const flat = [...summer, ...winter]; // Juntando ambos os arrays.

// Sets (Conjuntos)
const list = new Set(); // -> Inicializando um conjunto.
list.add(1); // Adicionando um valor ao conjunto.
list.add(2).add(3).add(4); // Adicionando mais de um valor.
list.add(1); // Ao tentar adicionar um valor repetido, ele ignora o valor

// Iniciando um conjunto com varios valores.
const numbers = new Set([1, 2, 3]);
const letters = new Set('hello');

// Set Methodos;
const jla = new Set().add('SuperMan').add('Batman').add('Wonder Woman');
jla.has('SuperMan'); // Verificando se existe um determinado valor dentro do Sets.
jla.delete('SuperMan'); // Deletando valores.

// Converting Sets to Arrays -> (Convertendo Conjuntos para Arrays)
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
const shoppingArray = [...shoppingSet]; // Para converter um conjunto para um Array basta usar spread.
// const shoppingArray = Array.from(shoppingSet); // tambem converte.
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];
const nonDuplicate = [...new Set(duplicate)]; // Removendo duplicacao dos valores.

// Weak Sets (Conjuntos Fracos)
const weak = new WeakSet(); // Criando um conjunto fraco. Somente dados nao primitivos
const array = [1, 2, 3];
weak.add(array); // Nao conseguimos acessar a lista de valores que contem dentro do objeto
weak.has(array); // Verificando se existe  o objeto dentro do conjunto.
weak.delete(array); // Deletando o Objeto.

