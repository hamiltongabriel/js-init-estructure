const isEven = function (x) {
  console.log(x);
  return (x % 2 == 0);
};
// me responde em boolean se é true ou false.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const myMap = numbers.map(isEven);
console.log(myMap);

// me responde apenas os numeros pares.
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
