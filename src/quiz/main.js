alert('Bem vindo ao Quiz');
// Cria 1 new Map
const quiz = new Map([
  ['Qual o nome real do superman?', 'Clark Kent'],
  ['Qual o nome real do Wonder Woman?', 'Diana Prince'],
  ['Qual o nome real do batamn?', 'Bruce Wayne']
]);
let score = 0;

// Realizando um for-of, pegando a entranda do new map.
for (const [question, answer] of quiz.entries()) {
  const response = prompt(question);
  if (response === answer) {
    alert('Correto');
    score++;
  }else {
    alert(`Errado! A resposta correta é ${answer}`);
  }
}
alert(`Game Over, você acertou ${score} point${score > 1 ? 's' : ''}`);