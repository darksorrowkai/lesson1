const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



if (personalMovieDB.count == '') {
    console.log("Error!!!"); 
   }  else if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов     " +  personalMovieDB.count + " шт."); 
   }  else if (10 < personalMovieDB.count && personalMovieDB.count < 30) {
        console.log("Вы классический зритель     " +  personalMovieDB.count + " шт.")
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман     " +  personalMovieDB.count + " шт."); 
    } else {
        console.log("Error!!!");
} 



/* for (let i = 0; i < 2; i++) {
    const nameLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
          lastFilmScore = prompt('На сколько оцените его?');

    if (nameLastFilm != null && lastFilmScore != null && nameLastFilm != '' && lastFilmScore != '' && nameLastFilm.length < 50) {

        personalMovieDB.movies[nameLastFilm] = lastFilmScore;
        console.log('ok');
    } else {
        console.log('error');
        i--;
    }
} */

var i = true;
var nameLastFilm,
    lastFilmScore;

while (i) {
    nameLastFilm = prompt('Один из последних просмотренных фильмов?'),
    lastFilmScore = prompt('На сколько оцените его?');
    if ((nameLastFilm.length - 1) < "10" && nameLastFilm == "") {
        //i = false;
}
    personalMovieDB.movies[nameLastFilm] = lastFilmScore;

}

console.log(personalMovieDB.movies);