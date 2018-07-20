const variavelResult = 'global';
let outraVariavel = 'global';

function minhaFuncao() { // local escopo dentro
  const variavelResult = 'local';
  return variavelResult;
}
function outraFuncao() {
  outraVariavel = 'local';
  return outraVariavel;
}
console.log(variavelResult);
console.log(minhaFuncao());

console.log(outraVariavel);
console.log(outraFuncao());
console.log(outraVariavel);
