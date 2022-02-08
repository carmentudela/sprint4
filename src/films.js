const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(film => film.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result = array.filter(film => film.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let pelisDirector = array.filter(film => film.director === director); //obtener listado todas las pelis de un director
  // console.log(pelisDirector);
  let puntuaciones = pelisDirector.map(film => film.score); //crear array puntuaciones pelis del director
  // console.log(puntuaciones);
  let suma = puntuaciones.reduce((acc, valorActual) => acc + valorActual); //hace la suma de todos los valores del array de puntuaciones
  // console.log(suma);
  let divisor = puntuaciones.length; // saca la longitud del array de puntuaciones para dividir
  // console.log(divisor);
  let media = parseFloat(suma / divisor); // calcula la media con 2 decimales.
  console.log("EXERCICE 3->", media);
  return media;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titulos = array.map(peli => peli.title).sort(); // ordena alfabéticamente

  let result = titulos.slice(0, 20); //recorta la longitud del array a 20 elementos a partir del índice 0
  console.log("EXERCICE 4 ->", result);
  return result;

}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let copiaArray = array.slice(); //crea array nuevo para no modificar el original
  let result = copiaArray.sort((a, b) => { //ordenar
    if (a.year > b.year) { // si el año a es mayor, mueve hacia delante
      return 1;
    }
    if (a.year < b.year) { // si el año a es menor, mueve hacia atrás 
      return -1;
    }
    if (a.title < b.title) { // igual con el título
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  })
  console.log("EXERCICE 5 ->", result);
  return result;
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let filtradoCategoria = array.filter(film => {
    for (let item of film.genre) {
      if (item === genre) {

      }
    }
  })
  console.log(filtradoCategoria);





}
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filtradoYear = array.filter(film => film.year === year); // filtra por año
  let ordenar = filtradoYear.sort((a, b) => { //ordena por puntuación
    if (a.score > b.score) { //si la puntuación de a es mayor, mueve hacia atrás
      return -1;
    }
    if (a.score < b.score) { // si la puntuación es menor, mueve hacia delante
      return 1;
    }
    return 0;
  });
  let result = []; // crea array vacía
  result.push(ordenar[0]); // mete el primer elemento(con la puntuación más alta) en el array.

  console.log('EXERCICE 8->', result);
  return result;

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}