// Atruibuição direta
// Variavel com valor primitivo atribuido, todas as alterações feitas afeta direto na váriavel
const atribuicaoDireta = 1;
let b = atribuicaoDireta;
b = 2;
console.log('b',atribuicaoDireta);
console.log('b', b);

// Atribuição referencia.
// Se atribuirmos um valor nao primitivo a uma variavel, ela sera feita por referencia
// qualquer alteração feita afetará todas as referencias desse objeto.
const atribuicaoReferncia = { value: 1};
let d = atribuicaoReferncia;
d.value = 2;
console.log(atribuicaoReferncia);
console.log(d);
