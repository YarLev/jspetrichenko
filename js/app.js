"use strict";

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDB.count = +prompt('How many films did you see?');

      while (personalMovieDB.coun == '' || personalMovieDB.coun == null || isNaN(personalMovieDB.coun)) {
         personalMovieDB.coun = +prompt('How many films did you see?');
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         const a = prompt('one of last viewed films?', ''),
            b = +prompt('what is te rating you can give this film?');

         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            i--;
         }
      }
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         alert('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.counts >= 10 && personalMovieDB.count <= 30) {
         alert('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
         alert('Вы киноман');
      } else {
         alert('Произошла ошибка');
      }
   },
   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },
   writeYourGenres: function () {
      for (let i = 0; i < 3; i++) {
         let genre = +prompt(`Your favorite genre have number ${i + 1}`);
         if (genre === null || genre === '') {
            console.log('Вы ввели некорректные данные');
            i--;
         } else {
            personalMovieDB.genres[i] = genre;
         }        
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   }
};