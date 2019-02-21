
const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
    { title: 'Les frères Karamazov', id: 450911, rented: 5 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let n = 0;
books.forEach(book => {
    if (book.rented !== 0) {
        n++;
    }
})
console.log(n === books.length);

let maxRented;
let maxBook = 0;
books.forEach(book => {
    if (book.rented > maxBook) {
        maxBook = book.rented;
        maxRented = book;
    }
})
console.log(`Le livre le plus emprunté est : ${maxRented.title}`)

let minRented;
let minBook = Infinity;
books.forEach(book => {
    if (book.rented < minBook) {
        minBook = book.rented;
        minRented = book;
    }
})
console.log(`Le livre le moins emprunté est : ${minRented.title}`)

let searchBook;
books.forEach(book => {
    if (book.id === 873495) {
        searchBook = book;
    }
})
console.log(`Le livre avec l'id 873495 est : ${searchBook.title}`);

/*
let search = books.find(books.id[873495]);
console.log(`Le livre avec l'id 873495 est : ${search.title}`);
*/

let index;
books.forEach((book, i) => {
    if (book.id === 133712) {
        index = i;
    }
})
books.splice(index, 1);
console.log(books);

/*
let deleteBook = books.id.find(id[133712])
books = books.filter(item => item !== deleteBook)
console.log(books)
*/

let bookOrder = books.sort(books.title);
console.log(bookOrder);

