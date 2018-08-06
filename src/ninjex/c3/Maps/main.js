// Maps = Mapas. Maneira Conveniente de manter a lista de pares de chaves e valores
/* Objetos X Maps 
    -Objetos são limitados a usar String para valores de key
    -Maps podem usar qualquer tipo de dados com uma key.
    -Objetos Não existe uma maneira de encontrar o numero de pares de valores-key
    que um objeto possui.
    -Maps Podemos encontrar a quantidade usando a propriedade size.
    -Objetos Possuem métodos que podem ser chamados, e protótipos que podem ser
    usados para criar uma cadeia de herança.
    -Maps Concentra-se no armazenamento e recuperação de pares de valores.
    -Objeto valor da propriedade de um objeto pode ser acessada diretamente.
    -Maps acessa o valor apenas com o método get()
*/
// Criando Maps
const romanNumerals = new Map();
// Setando valores aos mapas.
// Set -> Seta uma chave com um valor.
romanNumerals.set(1, 'I');
console.log(romanNumerals);
// Adicionando mais de um valor.
romanNumerals.set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);
