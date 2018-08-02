/* Vazamento de memoria ocorre quando um valor retém referencias a valores que não podem
 mais ser acessados em sua memória. Portanto a memória esta sendo usada para armazenar
 valores que não são mais uteis para o sistema, desperdiçando recursos do sistema.
 Reduzindo o valor da memória, deixando com que o sistema se torne totalmente legado.
 Wek Sets Evitam vazamento de memória, por nao coletar qualquer referencia a um
 objeto inativo que teve sua referencia removida...
*/
// Criando um Web Set
const weak = new WeakSet();
// WeakSets só aceita dados não primitivos.
// Adicionando um Array a um conjunto fraco.
let array = [1, 2, 3];
weak.add(array);
console.log(weak);
// Verificando se contem valor
console.log(weak.has(array));
array = null;
console.log(weak);