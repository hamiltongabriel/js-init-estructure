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
console.log(avengers);
