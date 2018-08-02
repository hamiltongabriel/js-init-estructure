// Usamos delete para remover um valor de um conjunto.
// TRue = Removido, false = valor nao está no conjunto ou se nao estiver no conjunto.
const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
console.log(jla.delete('Superman'));
console.log(jla.delete('flash'));
// Remover todos.
jla.clear();
console.log(jla);
