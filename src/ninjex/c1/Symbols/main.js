const uniqueID = Symbol('Hamilton');
console.log(uniqueID);

// Apontando duas váriaveis para o mesmo symbol.
// testando symbol se tornou um identificar compartilhado.
const A = Symbol.for('testando symbol');
const B = Symbol.for('testando symbol');

