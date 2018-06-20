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
function Book(title, pages, author) {
  this.title = title;
  this.pages = pages;
  this.author = author;
}
const book = new Book('title', 'pag', 'author');
console.log(book.title);
book.title = 'new title';
console.log(book.title);
