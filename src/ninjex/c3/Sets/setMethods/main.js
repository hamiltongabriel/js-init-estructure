const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
console.log(jla);
// Verificando o numero de valor encntrado dentro de um conjunto.
console.log(jla.size);
// Verificando a existencia de um valor dentro de um conjunto.
// Has verifica mais rapido do que o metodo includes() ou indexOf()
// comparacao. https://jsperf.com/set-has-vs-arr-includes
console.log(jla.has('Superman'));
// Conjunto não tem notação de indices. Portanto não podemos acessar indices.
jla[0]; // nao funciona.

