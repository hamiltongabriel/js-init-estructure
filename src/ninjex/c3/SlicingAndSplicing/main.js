// Slice corta uma fatia de um ARRAY, começando em uma posição e terminando em outra.
// Operação não destrutiva, não remove os itens do array.
const avengers = ['Captain America', 'Iron Man', 'Thor'];
console.log(avengers.slice(1, 3));
console.log(avengers)
// Splice remove o item do Array e insere novos itens em seu lugar.
// Primeiro numero diz onde iniciar, segundo item quantos remover.
avengers.splice(3, 1, 'Scarlet Witch');
console.log(avengers);
// Também pode ser usado para inserir valores sem remover nenhum item.
avengers.splice(4, 0, 'QuickSilver');
console.log(avengers)
// Usando Splice para remover.
avengers.splice(2, 1);
console.log(avengers)