'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }   
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyBD (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyBD(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i}`);

        if (a != '' && a != null) {
            personalMovieDB.genres[i - 1] = a;
        } else {
            i--;
        }   
    }
    
}

writeYourGenres();


