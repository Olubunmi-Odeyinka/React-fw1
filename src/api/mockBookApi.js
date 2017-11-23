import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const books = [
  {
    id: 1,
    name: "The 3 wise men",
    author: 'Chine Achebe',
    page: 263,
    category: 3
  },
  {
    id: 2,
    name: 'The return of Nijah',
    author: 'John Smith',
    page: 335,
    category: 4
  },
  {
    id: 3,
    name: 'The 3 tribes men',
    author: 'Wole Shoyinka',
    page: 450,
    category: 5
  },
  {
    id: 4,
    name: 'The mayor of caster bridge',
    author: 'Will Smith',
    page: 370,
    category: 6
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (book) => {
  return replaceAll(book.name, ' ', '-');
};

class BookApi {
  static getAllBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(book) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minBookTitleLength = 1;
        if (book.name.length < minBookTitleLength) {
          reject(`Title must be at least ${minBookTitleLength} characters.`);
        }

        if (book.id) {
          const existingBookIndex = books.findIndex(a => a.id == book.id);
          books.splice(existingBookIndex, 1, book);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new books in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          book.id = generateId(book);
          book.watchHref = `http://www.pluralsight.com/books/${book.id}`;
          books.push(book);
        }

        resolve(Object.assign({}, book));
      }, delay);
    });
  }

  static deleteBook(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfBookToDelete = books.findIndex(book => {
          book.id === id;
        });
        books.splice(indexOfBookToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BookApi;
