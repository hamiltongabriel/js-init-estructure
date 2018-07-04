alert('Welcome To Quiz!');
const questionDefault = 'Qual nome real do ';
const question = 'Qual nome real do Super Man? ';
const answer = prompt(question);
alert(`Você respondeu ${answer}`);
const quiz = [
  [`${questionDefault}Superman`, 'Clark Kent'],
  [`${questionDefault}Wonder Woman`, 'Diana Prince'],
  [`${questionDefault}Batman`, 'Bruce Wayne']
];
let score = 0;
for (const [question, answer] of quiz) {
  const response = prompt(question);
  if (response === answer) {
    alert('Correto!');
    score++;
  } else {
    alert(`Errado! A resposta correta foi ${answer}`);
  }
}
alert(`Jogo encerrado, voce acertou ${score} point${score !== 1 ? 's' : ''}`);
