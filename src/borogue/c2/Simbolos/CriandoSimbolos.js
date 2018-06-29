// usados para criarem valor exclusivo, evitando colisoes de nomenclatura.
const uniqueID = Symbol('this is unique id');
console.log(String(uniqueID)); // Acessando o valor direto atraves do String
const A = Symbol.for('shared symbol'); // Variaveis A e B apontam para o mesmo simbolo. A descricao aponta como um id compartilhado.
const B = Symbol.for('shared symbol');
