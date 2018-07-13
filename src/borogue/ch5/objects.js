// Objeto = Dicionario -> Olha um nome de propriedade e encontra um valor.
const superman = {
  name: 'Superman',
  'real Name': 'Clark Kent',
  height: 70,
  weight: 255,
  hero: true,
  villain: false,
  allies: ['Batman', 'SuperGirl', 'SuperBoy'],
  fly() {
    return 'Up, up and away!';
  }
};
// O ES6 forneceu um método abreviado para criar objetos se uma chave de propriedade
// o mesmo que um nome de variável ao qual o valor da propriedade é atribuído
const name = 'Iron Man';
const realName = 'Tony Stark';
const ironMan = { name, realName };
console.log(ironMan);

// Acessando propriedade.
console.log(superman.name);

// Propriedade Computada
// O codigo pode ser colocado entre colchetes e a chave de propriedade sera o valor de retorno
// desse codigo
const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' };
console.log(hulk);
// Valor ternario verificando a propriedade Hero
const bewitched = true;
const captainBritain = { name: 'Captain Britain', hero: !bewitched };
console.log(captainBritain);
// Data Symbol em propriedade computada.
const nameSymbol = Symbol('name');
const supergirl = { [nameSymbol]: 'Supergirl' };
console.log(supergirl);
// Se a chave do objeto for simbolo, e o colchetes tiver sendo usado, uma nova props pod ser adic..
const realNameSymbol = Symbol('real name');
supergirl[realNameSymbol] = 'Kara Danvers';
console.log(supergirl);
const daredevil = { [nameSymbol]: 'Daredevil', [realNameSymbol]: 'Matt Murdoch' };
console.log(daredevil);
// Acessando Symbol
// Symbol tem nomenclatura unica.
console.log(daredevil[nameSymbol]);

// Chamada de Metodos
console.log(superman.fly());

// Verificando se propriedade ou methodo existe.
// Operador in verifica se um objeto possui uma certa propriedade
console.log('city' in superman);
