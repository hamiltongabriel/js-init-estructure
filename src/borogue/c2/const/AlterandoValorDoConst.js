const name = 'Hamilton';
// name = 'Gabriel'; // nao pode ser alterado por ser do tipo primitivo.

const nameQuePodeSerAlterado = { value : 'Hamilton' }; // nao faz referencia a dados primitivos
nameQuePodeSerAlterado.value = 'Gabriel'; // const se torna mutavel  (conhecido como mutação do objeto)...
console.log(nameQuePodeSerAlterado);

