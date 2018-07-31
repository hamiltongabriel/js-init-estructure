// Concat usado para junção de Arrays.
avengers = ['Captain American', 'Iron Man', 'Thor'];
avengers = avengers.concat(['Hulk', 'Hewkeye', 'Black Widow']);
console.log( avengers );
// Usando operador Spread, ele espalha os elementos da matriz.
// Podendo espalhar 2 Arrays e junta-los.
avengers = [...avengers, ...['testando', 'teste', 'teste']];
console.log( avengers );