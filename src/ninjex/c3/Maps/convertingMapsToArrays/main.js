const romanNumerals = new Map();
romanNumerals.set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
// Os mapas podem ser convertidos em um array através de Spreads
const romanToArrays = [...romanNumerals];
console.log(romanToArrays);

