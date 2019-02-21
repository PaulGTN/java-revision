
const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
    { title: 'Les frères Karamazov', id: 450911, rented: 5 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let rentedBooks = true;
books.forEach(book => {
 if (book.rented === 0){
  rentedBooks = false;
 }
});

if (rentedBooks == true) {
  console.log("Tous les livres ont été empruntés au moins une fois.");
} else {
  console.log("Au moins un livre n'a jamais été emprunté.");
}

books.sort( (a, b) => (b.rented - a.rented) );
console.log(`Le livre le plus emprunté est "${books[0].title}"`)

books.sort( (a, b) => (a.rented - b.rented) );
console.log(`Le livre le moins emprunté est "${books[0].title}"`)

books.forEach(book => {
  if (book.id === 873495) {
    console.log(`Le livre avec l'ID 873495 est "${book.title}"`);
  }
});

let index = books.findIndex(book => book.id === 133712);
books.splice(index,1);
console.log(books);

books.sort(function(a, b) {
  let nameA = a.title.toUpperCase(); 
  let nameB = b.title.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(books)
