const avengers = ['Captain America', 'Iron Man', 'Thor'];
// Encontrando item com indexOf(), retornando a posição.
console.log(avengers.indexOf('Iron Man'));
// No ECMA6 podemos usa o includes()
console.log(avengers.includes('Thor'));
// Podemos indicar a partir de qual indice iniciar.
console.log(avengers.includes('Thor', 1));

