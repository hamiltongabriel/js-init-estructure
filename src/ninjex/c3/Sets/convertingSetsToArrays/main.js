const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);
// Um Set pode ser convertido em um array usando o operador Spread.
// E o Array.from()
const shoppingToArray = [...shoppingSet];
console.log(shoppingToArray);
const shoppingArray = new Set().add('Apples').add('Bananas').add('Beans');
const shoppingInSet = Array.from(shoppingArray);
console.log(shoppingInSet);
// Copiando um valor repetido para um array com os duplicados removidos.
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];
const nonDuplicate = [...new Set(duplicate)];
console.log(nonDuplicate);
