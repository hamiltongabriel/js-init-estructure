// pegando valor
// let myObj = { a: 1, b: 2, c: 3 };
// let {
//   a, b, c, testando = 5
// } = myObj;


// Symbols, nunca sera o mesmo.
let a = Symbol('a'),
  b = Symbol('a');
console.log(a);
console.log(b);
// Atribuindo valor ao symbol
const myObj = {};
myObj[a] = 5;
console.log(myObj[a]);

// Template Literals
const myVar = 5;
console.log(`My var value is: ${myVar}`);

// For Of
const list = ['a', 'b', 'c', 'd', 'e'];

for (const index in list) {
  console.log(`Pega a index${index}`);
}
for (const value of list) {
  console.log(`pega o valor${value}`);
}
// Arrow Functions (Ou Lambdas)

const sum = (a, b) => a + b;

const myList = [1, 10, 15, 5, 2, 27, 31];
myList.sort((a, b) => (a > b ? 1 : -1));
console.log(myList);

// Mapear e filtrar com Map
const myList2 = [
  { a: 1 },
  { a: 2 },
  { a: 3 }
];

const myNewList = myList2.map(obj => obj.a);
console.log(myNewList);
// Js cria scopo a cada funcao nova.
// Arrow Function mantem o escopo.
const myObjFunction = {
  a: 5,
  myFunc() {
    console.log(this.a);
    const newFunc = () => {
      console.log(this.a);
    };
    newFunc();
  }
};
myObjFunction.myFunc();

// Usando Map

const myObjMap = new Map();

let aMap = { value: 1 },
  bMap = { value: 2 };
myObjMap.set(aMap, 5);
myObjMap.set(bMap, 10);
console.log(myObjMap.get(aMap), myObjMap.get(bMap));
// pegando tamanho
myObj.size;

// Set ignora repeticao
let aSet = { myValue: 1 },
  bSet = { myValue: 2 };
let mySet = new Set([aSet, bSet])
mySet.add(aSet);
mySet.add(bSet);
mySet.add(aSet);
mySet.has('nomeDoItem');
mySet.delete('nomeDoItemPraDeletar');
mySet.clear('Limpando todo o set');
mySet.size('Verificando o tamanho de itens no set');
