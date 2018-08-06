const romanNumerals = new Map();
romanNumerals.set(1, 'I');
romanNumerals.set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
// Para procurar um valor em map, devemos procurar pelo valor da chave.
console.log(romanNumerals.get(4));
// Verificando se existe uma chave especifica.
console.log(romanNumerals.has(5));
// Podemos criar um mapa com varios valores.
const heroes = new Map ([ ['Clark Kent', 'Supermen'], ['Bruce Wayne', 'Batman']]);
// O numero de pares chaves podem ser encontrados usando a propriedade size.
console.log(heroes.size);
