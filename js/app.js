"use strict"
let numberOfFilms;

function detectPersonalLevel() {
      if (numberOfFilms < 10) {
      alert('Просмотрено довольно мало фильмов');
   }else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
      alert('Вы классический зритель');
   }else if (numberOfFilms > 30) {
      alert('Вы киноман');
   } else {
      alert('Произошла ошибка');
   }
}

detectPersonalLevel();

function start() {
   numberOfFilms = +prompt('How many films did you see?');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('How many films did you see?');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

function rememberMyFilms() {
      for (let i = 0; i < 2; i++) {
      const a = prompt('one of last viewed films?'),
         b = +prompt('what is te rating you can give this film?');
      
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
      } else {
         i--;
      }  
   }
}

rememberMyFilms();

function showMyDB(hidden) {
  if (!hidden) {
     console.log(personalMovieDB);
     
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = +prompt(`Your favorite genre have number ${i + 1}`);
      
   }
   
}

writeYourGenres();