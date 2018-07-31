//Criando um Array.
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Blak Widow'];
avengers.length;
// Localizando ultimo item de um Array.
// Pelo indice começar com 0 devemos subtrair o valor.
console.log(avengers[avengers.length - 1]);
// Array suporta ser aumentado.
// Os valores aumentado se tornam undefined.
avengers.length = 8;
// Se diminuirmos o array menor do que ele é
// removemos os demais valores permanentemente.
avengers.length = 3;
