const numberOfFilms = +prompt('How many films did you see?');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

const a = prompt('one of last viewed films?'),
      b = +prompt('what is te rating you can give this film?'),
      c = prompt('one of last viewed films?'),
      d = +prompt('what is te rating you can give this film?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;