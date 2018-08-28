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
let [x, y] = [1, 2];
// Mesmo se atribuirmos em Arrays, cada variavel individual tera seu valor
console.log(x);
console.log(y);
// Alterando o valor de duas váriaveis com desestruturação.
[x, y] = [y, x];
console.log(x);
console.log(y);

const avengers1 = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
// Acessando a ultima propriedade do index.
console.log(avengers1[avengers1.length - 1]);
// Se especificar o tamanho de um array menor do tamanho dele.
// Ira remover os demais atributos por completo.
avengers1.length = 3;
console.log(avengers1);

// Removendo o ultimo item de um Array
console.log(avengers1.pop());
// Removendo o primeiro item de um Array
console.log(avengers1.shift());
// Adicioanndo um novo item ao final de um array.
avengers1.push('Thor');
// Adicionando um novo item no inicio de um array
avengers1.unshift('Captain America');
console.log(avengers1)
