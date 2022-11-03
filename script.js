'use strict';

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == ' ' || numberOfFilms == null || isNaN(numberOfFilms)) {
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


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последний посмотренных фильмов'),
          b = prompt('На сколько оцените его?');
    if(a != null && b!= null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }  
}
}

rememberMyFilms();


function detectPersonalLevel() {
    if(numberOfFilms < 10) {
    alert('Просмотрено довольнго мало фильмов');
} else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert('Вы классический зритель');
} else if(numberOfFilms > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}
}


function showMyDb() {
    if(personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    } else (
        console.log('error')
    )
}

showMyDb(); 

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = +prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    
    }
}

writeYourGenres();



