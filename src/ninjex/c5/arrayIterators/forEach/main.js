// For Each -> Para cada
// Percorrendo valor com For.
const colors = ['Red', 'Green', 'Blue'];
for (let i = 0, max = colors.length; i < max; i++) {
  console.log(`Cor na posição ${i} é ${colors[i]}`);
}
// Recebe 3 parametros 1 indica o valor no array, o 2 representa o indice atual
// 3 Indica o array o retorno de chama que está sendo chamada.
colors.forEach((color, index) =>
  console.log(`Cor na posição ${index} é ${color}`));
