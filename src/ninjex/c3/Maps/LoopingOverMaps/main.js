const romanNumerals = new Map();
romanNumerals.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);
// iterando sobre as chaves dos objetos.
for (const key of romanNumerals.keys()){
  console.log(key);
}
// Iterando sobre os valores.
for(const value of romanNumerals.values()){
    console.log(value);
}

// iterando entre chaves e valores.
for (const [key, value] of romanNumerals.entries()){
    console.log(`${key} em numeros romanos é ${value}`)
}