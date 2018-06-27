const c = { value: 1 }; // Toda alteracao feita em referencia, afeta todos os valores que estao referenciados.
let d = c; // c.value = 1, d.value = 1
d.value = 2; // c.value = 2, d.value = 2
console.log(d, c)
