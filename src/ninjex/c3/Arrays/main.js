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
