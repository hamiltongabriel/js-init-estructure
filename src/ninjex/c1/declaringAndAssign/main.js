const name = 'Hamilton';
const score = 0;
console.log(name);
let x = 3, 
y = 5, 
z = 10;


// Mutação de Objeto
const names = {
  value: 'Hamilton'
};
names.value = 'Mariana';
console.log(names);


// Constante não permite que eu reatribua uma váriavel a outro objeto
// const namess = {value: 'Hamilton'};
// namess = {value: 'Rafael'};


// Declarando váriaveis globais e váriaveis locais.
const a = 1;
{ const a = 3; console.log(a); }
console.log(a);

// Variável global sendo sobrescrita.
let b = 2;
{ b = 4; console.log(b) };
console.log(b);

// Criando uma váriavel global dentro de um bloco.
{ c = 5; console.log(c);}
console.log(c)