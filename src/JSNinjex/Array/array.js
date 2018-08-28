// Declarando Um Array Literal
const myArray = [];
console.log(myArray);
// Função Construtora de Array
const myArray1 = new Array();
console.log(myArray1);
// Arrays não são valores primitivos. Mas um objeto especial
console.log(typeof []);
// Criando um literal de Arrays vazio de Heroís
const heroes = [];
// Acessando um valor do Array
console.log(heroes[0]);
// Atribuindo valor a um Array
heroes[0] = 'Superman';
heroes[1] = 'Wonder Woman';
heroes[2] = 'Flash';

heroes[5] = 'Aquaman';

const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
console.log(avengers);
// Removendo valores de Arrays
delete avengers[3];
console.log(avengers);
// Ao em vez de remover substituiu o valor. Array continua com a mesma quantidade de elementos.

// Desestruturação de Arrays.
// Desestruturar um array e aprensetar como valores individuais.
// Podendo atribuir vários valores de uma só vez.
const [x, y] = [1, 2];
// Mesmo se atribuirmos em Arrays, cada variavel individual tera seu valor
console.log(x);
console.log(y);
// Alterando o valor de duas váriaveis com desestruturação.
[x, y] = [y, x];
console.log(x);
console.log(y);


