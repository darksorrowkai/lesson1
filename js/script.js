

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
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

function showMyDB() {

    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function detectPersonalLevel() {
    
    if (personalMovieDB.count == '') {
        console.log("Произошла ошибка!"); 
       }  else if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов     " +  personalMovieDB.count + " шт."); 
       }  else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
            console.log("Вы классический зритель     " +  personalMovieDB.count + " шт.")
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман     " +  personalMovieDB.count + " шт."); 
        } else {
            console.log("Произошла ошибка!");
        } 
    
}

detectPersonalLevel();
    




function rememberMyFilms() {
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
}

rememberMyFilms();




function writeYouGenres() {
    for (let y = 1; y < 4; y++) {
        let quest = prompt("Ваш любимый жанр под номером " + y)
        personalMovieDB.genres[y - 1] = quest;
    }     
   
}

writeYouGenres();