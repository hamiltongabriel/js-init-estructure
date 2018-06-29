// Tipos primitivos tem Wrapper que parecem com propriedades e metodos de Objetos.
const name = 'Hamilton'; // declare and assign a variable
name.length; // retrieve the name variable's length property
name.toUpperCase(); // usando um metodo.
name.charAt(1); // Sabendo qual caracter esta em uma posicao especifica.
name.indexOf('H');// Descobrindo em qual posicao se encontra um caracter especifico.
name.includes('Hamilton');// Descobrindo se uma String contem uma determinada caracter, ou palavra (Ecma 6).
name.startsWith('A'); // Descobrindo se uma String inicia com um determinado caracter.
name.endsWith('amilton'); // Descobrindo se uma String finaliza com um determinado caracter.
console.log('hamilton gabriel macedo          '.trim()); // Removendo todo o espaco do inicio e do fim de uma String
name.repeat(3); // Repetindo uma String com uma quantidade x de vezes.
console.log(`Hello ${name}!`); // Usando Template Literal.

