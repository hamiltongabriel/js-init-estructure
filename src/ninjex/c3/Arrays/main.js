const heroes = [];
console.log(heroes[0]);
heroes[0] = 'Superman';
console.log(heroes[0]);
heroes[0] = 'Batman';
heroes[1] = 'Wonder Woman';
heroes[5] = 'Aquaman';
heroes[2] = 'Flash';

// Creating Array Literals
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
// Removendo valores do Array.
// delete substitui o valor atual por undefined.
console.log(delete avengers[3]);
/* Pode causar problema devido ao tamanho permanecer o mesmo, porem com valor indefinido. */
// Exemplo 
console.log(avengers[3]);
// Pegando retorno especifico de um objeto.

let obj = {
  propriedade: 'Hamilton',
  curso: 'JavaScript',
  idade: 19
};
function myFunction(arg) {
  return arg;
}
const teste = myFunction(obj).idade;
console.log(teste);

// recebendo um objeto especifico.
function myFunction2(arg) {
  return arg.curso;
}
console.log(myFunction2(obj));

function MyFunc() {
  let x = 0;
  let z = 3;
  return (x += 1, z += 1, x);
}
console.log(MyFunc());