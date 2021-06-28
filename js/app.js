"use strict"
const numberOfFilms = +prompt('How many films did you see?');

if (numberOfFilms < 10) {
   alert('Просмотрено довольно мало фильмов');
}else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
   alert('Вы классический зритель');
}else if (numberOfFilms > 30) {
   alert('Вы киноман');
} else {
   alert('Произошла ошибка');
}

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

for (let i = 0; i < 2; i++) {
   const a = prompt('one of last viewed films?'),
      b = +prompt('what is te rating you can give this film?');
   
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
   } else {
      i--;
   }  
}