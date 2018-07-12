const questionDefault = 'Qual nome real do ';
const question = 'Qual nome real do Super Man? ';
const quiz = [
  [`${questionDefault}Superman`, 'Clark Kent'],
  [`${questionDefault}Wonder Woman`, 'Diana Prince'],
  [`${questionDefault}Batman`, 'Bruce Wayne']
];
function start(quiz) {
  let score = 0;
  function ask(question) {
    return prompt(question);
  }
  function check(response, answer) {
    if (response !== answer) {
      return alert(`Errado! A resposta correta foi ${answer}`);
    }
    alert('Correto');
    score++;
  }
  for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer);
  }
  gameOver();
  function gameOver() {
    acertoTodas();
    alert(`Jogo encerrado, voce acertou ${score} pergunta${score !== 1 ? 's' : ''}`);
  }
  function acertoTodas() {
    console.log(score === quiz.length ? `${score = 'todas as'} ` : '');
  }
}

start(quiz);
