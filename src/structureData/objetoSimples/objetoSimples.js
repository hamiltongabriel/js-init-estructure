// {1} Criando Objeto Simples
const obj = new Object();

const objUm = {};

// Criando objeto definido
objDois = {
  name: {
    primeiroNome: 'Hamilton',
    segundoName: 'Gabriel'
  },
  endereco: 'Moacir de Melo'
};

// Criando Objeto pra Carro.
function Carro(placa, cor, ano) {
  this.placa = placa;
  this.cor = cor;
  this.ano = ano;
}
// Instanciando a classe criada.
const carro = new Carro('Corsa Classic', 'Prata', '2010');
console.log(carro.ano);
