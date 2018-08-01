// Usamos matriz de matrizes para criação de coordenadas.
const coordinates = [[1, 3], [4, 2]];
console.log(coordinates);
// Para acessar primeiramente acessamos a matriz externa, e logo após a interna
console.log(coordinates[0][0]);
console.log(coordinates[1][0]);
console.log(coordinates[0][1]);
console.log(coordinates[1][1]);

// Spread pode ser usado para nivelar Arrays multidimensionais.
// Exemplo de matriz Achatada(Multidimensional).
const summer = ['Jun', 'Jul', 'Ago'];
const winter = ['Dec', 'Jan', 'Fev'];
const nested = [ summer, winter ];
console.log(nested);
// Realizando a junção dos arrays
const flat = [...summer, ...winter];
console.log(flat);
