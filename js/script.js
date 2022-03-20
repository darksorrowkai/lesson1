const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !this.privat
    },

    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    
    detectPersonalLevel: function() {
        if (personalMovieDB.count == '') {
            console.log("Произошла ошибка!"); 
           }  else if (personalMovieDB.count < 10) {
                console.log("Просмотрено довольно мало фильмов     " +  personalMovieDB.count + " шт."); 
           }  else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
                console.log("Вы классический зритель     " +  personalMovieDB.count + " шт.")
            } else if (personalMovieDB.count > 30) {
                console.log("Вы киноман     " +  personalMovieDB.count + " шт."); 
            } else {
                console.log("Произошла ошибка!");
            }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const nameLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
                  lastFilmScore = prompt('На сколько оцените его?');
        
            if (nameLastFilm != null && lastFilmScore != null && nameLastFilm != '' && lastFilmScore != '' && nameLastFilm.length < 50) {
        
                personalMovieDB.movies[nameLastFilm] = lastFilmScore;
                console.log('ok');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    writeYouGenres: function() {
        for (let y = 1; y < 4; y++) {
            let quest = prompt("Ваш любимый жанр под номером " + y)
            personalMovieDB.genres[y - 1] = quest;
            
            if (quest == '' || quest == null) {
                y--;
                
            }
        }
        personalMovieDB.genres.forEach(function(movieGenre, i,) {
            console.log(`Любимый жанр ${movieGenre} - это ${i + 1}`)
        });
    
    }
}

    


personalMovieDB.start();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYouGenres();






