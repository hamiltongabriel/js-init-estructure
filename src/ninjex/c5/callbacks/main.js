// Calback é uma função passada como parametro para outra.
// função sing que recebe uma musica como parametro.
function sing(song, callback) {
  console.log(`Eu te ${song}.`);
  if (typeof (callback) === 'function') {
    callback();
  }
}
// Callback com função
sing('Amo', dance);
function dance() {
  console.log('Mariana');
}
// Callback com função anonima.
sing('Amo', () => { console.log('Hamilton'); });

