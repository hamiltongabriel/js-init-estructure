let obj = {};
obj = {
  name: {
    first: 'Hamilton',
    last: 'Gabriel'
  },
  address: 'JavaScript'
};
console.log(obj);
// Classe define as caracteristicas de um objeto.
// criando uma classe
function Book(title, pages, author) {
  this.title = title;
  this.pages = pages;
  this.author = author;
}
const book = new Book('Testando JavaScript', '3', 'Hamilton Gabriel');
console.log(book.title);
book.title = 'new title';
console.log(book.title);
console.log(book.pages);
// Uma classe tambem pode conter funcoes.
Book.prototype.printTitle = function () {
  console.log(this.title);
};
book.printTitle();
// Declarando funcoes dentro das definicoes de classe.
const books = new Books('Testando JavaSssssscript', '33333333333', 'Hamdilton Gabdasdasriel');
function Books(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}
books.printIsbn();
