'use strict';





let personalMovieDB = {
        count : 0,
        movies : {
        },
        actors : {},
        genres : [],
        privat : false,

        start : function() {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

            while (personalMovieDB.count == '' || personalMovieDB.count == null || personalMovieDB.count == isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        },

        // Вывод сообщения в зависимости от кол-во просмотренных фильмов
        detectPersonalLevel : function() {
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
        },

        // Задает вопросы о последних фильмах, ограничение в вводе символов или пустой строки
        rememberMyFilms : function() {
            for (let i = 0; i < 2; i++) {
                let question1 = prompt('Один из последних просмотренных фильмов?', ''),
                    question2 = prompt('На сколько оцените его?', '');
                
                if (question1 != null && question2 != null && question1 != '' && question2 != '' && question1.length < 50 && question2.length < 50) {
                    personalMovieDB.movies[question1] = question2;
                } else {
                    i--;
                }
            }
        },
        showMyDB : function() {
            if (personalMovieDB.privat == false) {
                console.log(personalMovieDB);
            }
        },

        // выводит сообщение с вопросом о любимом жанре и упорядочивает их в топ 3
        writeYourGenres : function() {
            for( let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`);
                if (genre === null || genre == '') {
                    console.log('Вы ввели некорректные данные')
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = genre;
                }
                     
                // forEach(console.log(`Любимый жанр #${i}(номер по порядку, начиная с 1) - это ${personalMovieDB.genres}(название из массива)`))
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр #${i + 1} - это ${item}`)
            })
        },

        // при вызове будет проверять свойство privat. Если false - переключает в true, если true -  в false.
        toggleVisibleMyDB : function() {
            if (personalMovieDB.privat == false) {
                personalMovieDB.privat = true
            } else {
                personalMovieDB.privat = false
            }
        }

    };

    personalMovieDB.start();
    personalMovieDB.detectPersonalLevel();
    personalMovieDB.rememberMyFilms();
    personalMovieDB.showMyDB();
    personalMovieDB.writeYourGenres();
    personalMovieDB.toggleVisibleMyDB();
   