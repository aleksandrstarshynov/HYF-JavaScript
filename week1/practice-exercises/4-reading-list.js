let bibliothek = [
    {
    title: "The Catcher in the Rye", 
    author: "J.D. Salinger", 
    alreadyRead: true,
    },
    {
    title: "Moby-Dick", 
    author: "Herman Melville", 
    alreadyRead: false,
    },    
    {
    title: "1984", 
    author: "George Orwell", 
    alreadyRead: true,
    },
];

let keys = Object.keys(bibliothek); 
let i = 0;

for (let i = 0; i < bibliothek.length; i++) {
    let book = bibliothek[i]; // Access each book directly from the array

    console.log(`${book.title} by ${book.author}`);  // Log book details

    if (book.alreadyRead) {
        console.log(`You already read "${book.title}"`);
    } else {
        console.log(`You still need to read "${book.title}"`);
    }
}


// THE SECOND VERSION
//let books = [
//    { title: "HTML for dummies", author: "Ed Tittel" },
//    { title: "CSS for dummies", author: "Paul McFedries" },
//    { title: "JavaScript for dummies", author: "Emily Vander Veer" }
//];
//
//for (let book = 0; book < books.length; book++)
//    {
//        console.log(`${books[book].title} by ${books[book].author}`);
//        if (books[book].alreadyRead) {
//            console.log(`You already read "${books[book].title}"`);
//        } else {
//           console.log(`You still need to read "${books[book].title}"`);
//        }
//    }