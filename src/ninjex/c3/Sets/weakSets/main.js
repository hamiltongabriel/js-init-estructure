/* Se um valor for armazenado dentro de um conjunto, ele permanecera
Enquanto o conjunto existir, mesmo se a referencia dele for removida
Como não pode ser coletado como lixo, pode causa um vazamento de memória
exemplo:
*/
let array = [1, 2, 3];
const strong = new Set().add(array);
console.log(strong);
array = null;
console.log(strong);
// Recuperando o valor do array que ficou dentro do conjunto.
array = [...strong][0];
console.log(array);
