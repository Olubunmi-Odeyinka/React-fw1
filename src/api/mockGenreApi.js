import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const genres = [
  {
    id: 1,
    name: 'Science fiction',
    description: 'Portray an imaginary scientific event'
  },
  {
    id: 2,
    name: 'Satire',
    description: 'Blah blah'
  },
  {
    id: 3,
    name: 'Drama',
    description: 'Hmm'
  },
  {
    id: 4,
    name: 'Action and Adventure',
    description: 'Bro bro'
  },
  {
    id: 5,
    name: 'Romance',
    description: 'This is it'
  },
  {
    id: 6,
    name: 'Horror',
    description: 'The personality'
  },
  {
    id: 7,
    name: 'Mystery',
    description: 'The report'
  }
];


//This would be performed on the server in a real app. Just stubbing in.
const generateId = (genre) => {
  return genre.firstName.toLowerCase() + '-' + genre.lastName.toLowerCase();
};

class GenreApi {
  static getAllGenres() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], genres));
      }, delay);
    });
  }

  static saveGenre(genre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minGenreNameLength = 3;
        if (genre.firstName.length < minGenreNameLength) {
          reject(`First Name must be at least ${minGenreNameLength} characters.`);
        }

        if (genre.lastName.length < minGenreNameLength) {
          reject(`Last Name must be at least ${minGenreNameLength} characters.`);
        }

        if (genre.id) {
          const existingGenreIndex = genres.findIndex(a => a.id == genre.id);
          genres.splice(existingGenreIndex, 1, genre);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new genres in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          genre.id = generateId(genre);
          genres.push(genre);
        }

        resolve(Object.assign({}, genre));
      }, delay);
    });
  }

  static deleteGenre(genreId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfGenreToDelete = genres.findIndex(genre => {
          genre.genreId == genreId;
        });
        genres.splice(indexOfGenreToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default GenreApi;
