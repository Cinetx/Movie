'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
        count : numberOfFilms,
        movies : {
        },
        actors : {},
        genres : [],
        privat : false
    };

// Вывод сообщения в зависимости от кол-во просмотренных фильмов
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

// Задает вопросы, ограничение в вводе символов или пустой строки
for (let i = 0; i < 2; i++) {
    let question1 = prompt('Один из последних просмотренных фильмов?', ''),
        question2 = prompt('На сколько оцените его?', '');
    
    if (question1 != null && question2 != null && question1 != '' && question2 != '' && question1.length < 50 && question2.length < 50) {
        personalMovieDB.movies[question1] = question2;
    } else {
        i--;
    }
}

