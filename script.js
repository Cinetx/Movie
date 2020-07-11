'use strict';

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
        count : numberOfFilms,
        movies : {
        },
        actors : {},
        genres : [],
        privat : false
    };

// Вывод сообщения в зависимости от кол-во просмотренных фильмов
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов');
        console.log('2')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
        console.log('1')
    } else if (personalMovieDB.count >= 50) {
        alert('Вы киноман');
    } else {
        console.log('Произошла ошибка')
    }
}
detectPersonalLevel()

// Задает вопросы о последних фильмах, ограничение в вводе символов или пустой строки
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let question1 = prompt('Один из последних просмотренных фильмов?', ''),
            question2 = prompt('На сколько оцените его?', '');
        
        if (question1 != null && question2 != null && question1 != '' && question2 != '' && question1.length < 50 && question2.length < 50) {
            personalMovieDB.movies[question1] = question2;
        } else {
            i--;
        }
    }
}


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

// выводит сообщение с вопросом о любимом жанре и упорядочивает их в топ 3
function writeYourGenres() {
    for( let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres()

console.log(personalMovieDB.genres);