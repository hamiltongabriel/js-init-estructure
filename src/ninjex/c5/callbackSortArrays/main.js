// Sort ordena numeros de forma errada, pois converte pra String antes de ordenar.
// Chamando o método sort e passando instrução para ele de como comprar 2 valores.
// Classificação de numeros.
// negativo se a menor que b
// 0 se ambos for igual
// positivo de a for maior que b
function recebeValor(a, b) {
  return executaComparacao();

  function executaComparacao() {
    return a - b;
  }
}

console.log([1, 5, 4, 5, 12, 3, 12312, 123, 1].sort(recebeValor));
