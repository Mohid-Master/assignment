/*
Introduction:
The Movie Recommendation App is a web application that suggests movies to
users based on their preferences such as genre, rating, and release year. The
app utilizes DOM manipulation to display movie recommendations, for loops to
iterate through movie data, functions to handle user input and recommendation
logic, closures to manage private data or state, and an array of objects to store
and manage movie data.
*/
/*
Features:
Movie Recommendation Display: The app displays recommended movies
based on user preferences, such as genre, rating, and release year. DOM
manipulation is used to dynamically update the movie recommendations on the
user interface.
User Input: The app allows users to input their preferences, such as genre,
rating, and release year, through a user interface. DOM manipulation is used to
capture and validate user input.
Movie Data Management: The app utilizes an array of objects in a JSON file to
manage movie data. Each object represents a movie with properties such as title,
genre, rating, and release year. For loops or forEach functions are used to iterate
through the movie data for recommendation logic.
Recommendation Logic: The app uses functions to implement
recommendation logic based on user preferences. The recommendation logic
involves filtering movies based on genre, rating, and release year, and displaying
the filtered movies as recommendations to the user.
Private Data or State Management: Closures are used to manage private data
or state in the app. Closures are functions that encapsulate private data or state
within the function scope, allowing for better data privacy and organization.
*/
/*
Usage:
1. User Interface: The app provides a user interface where users can input
their movie preferences, such as genre, rating, and release year.
2. Movie Recommendation Display: After users input their preferences, the
app displays movie recommendations based on the user's preferences.
The recommendations are dynamically updated on the user interface using
DOM manipulation.
3. Recommendation Logic: The app uses functions to implement
recommendation logic based on user preferences. For example, it may
filter movies based on genre, rating, and release year, and display the
filtered movies as recommendations to the user.
4. Movie Data Management: The app utilizes an array of objects in a JSON
file to store and manage movie data. Each object represents a movie with
properties such as title, genre, rating, and release year. For loops are used
to iterate through the movie data for recommendation logic.
5. Private Data or State Management: Closures are used to manage private
data or state in the app. Closures are functions that encapsulate private
data or state within the function scope, allowing for better data privacy and
organization.
*/
/*
Conclusion:
The Movie Recommendation App is a web application that suggests movies to
users based on their preferences. It utilizes DOM manipulation, for loops,
functions, closures, and an array of objects to provide movie recommendations
based on user preferences. The app provides a user-friendly interface for users
to input their preferences and displays movie recommendations dynamically.
*/

const inputsArray = document.querySelectorAll(".userInput");
// inputsArray.forEach((input, index) => (inputsArray[index] = input.value));
const [inputGenere, inputYear, inputLanguagage, inputRating, inputTitle] =
  inputsArray;

// first the given json contains complicated array i will try to make it simple
class simpleMovieObject {
  constructor(id, title, genere) {
    this.id = id;
    this.title = title;
    this.genere = genere;
  }
}
simpleMovieObjectArray = [];
objs = [];
// document.querySelector(".form-control").select2({ tags: true });
allGenres = [];
allYear = [];
allLanguage = [];
allRatings = [];
allTittle = [];

// console.log(allGenres, allYear, allLanguage, allTittle,allRatings);

(async function () {
  const response = await fetch("./assets/data.json");
  console.log(response);
  const Movies = await response.json();

  Movies.forEach((movie) => {
    let { title, genres, release_date, vote_average, original_language } =
      movie;
    year = release_date.split("-")[0];
    allGenres.push(...genres);
    allYear.push(year);
    allTittle.push(title);
    allLanguage.push(original_language);
    allRatings.push(vote_average);
  });
  allYear = [...new Set(allYear)].sort((a, b) => a - b);
  allRatings = [...new Set(allRatings)].sort((a, b) => b - a);
  allGenres = [...new Set(allGenres)];
  allTittle = [...new Set(allTittle)];
  allLanguage = [...new Set(allLanguage)];
  allGenres.forEach((genere) => {
    inputGenere.innerHTML += `<option value="${genere}">${genere}</option>`;
  });
  allRatings.forEach((Rate) => {
    inputRating.innerHTML += `<option value="${Rate}">${Rate}</option>`;
  });
  allTittle.forEach((title) => {
    inputTitle.innerHTML += `<option value="${title}">${title}</option>`;
  });

  console.log(
    Movies[0].homepage,
    "&",
    Movies[0].vote_average,
    "&",
    Movies[0].vote_count
  );
  console.log(
    Movies.filter((movie) => {
      return movie.release_date.split("-")[0] == 2000;
    })
  );
  /*
cast
certification
: 
"R"
directors
: 
[{…}]
external_ids
: 
{imdb_id: 'tt0213847'}
genres
: 
"Drama"
id
: 
10867
original_language
: 
"Italian"
overview
: 
"On the day in 1940 that Italy enters the war, two things happen to the 12-year-old Renato: he gets his first bike, and he gets his first look at Malèna. She is a beautiful, silent outsider who's moved to this Sicilian town to be with her husband, Nico. He promptly goes off to war, leaving her to the lustful eyes of the men and the sharp tongues of the women. During the next few years, as Renato grows toward manhood, he watches Malèna suffer and prove her mettle. He sees her loneliness, then grief when Nico is reported dead, the effects of slander on her relationship with her father, her poverty and search for work, and final humiliations. Will Renato learn courage from Malèna and stand up for her?"
popularity
: 
37.517
poster_path
: 
"/zdnjZa9HfBxlQnCX4dqCbbzxsLI.jpg"
release_date
: 
"2000-03-16"
revenue
: 
14493284
runtime
: 
109
similar
: 
(20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
tagline
: 
"She was too young to be a widow, and too beautiful to be alone. Every man wanted to have her. One boy risked everything to protect her."
title
: 
"Malena"
trailer_yt
: 
"SxqUoUvNBXY"
vote_average
: 
7.3
vote_count
: 
1230
writers

*/

  // `https://image.tmdb.org/t/p/w45${movie.poster_path}`
  // https://www.youtube.com/watch?v=

  /*
cast,
certification,
directors,
external_ids,
genres,
id,
original_language,
overview,
popularity,
poster_path,
release_date,
revenue,
runtime,
similar,
tagline,
title,
trailer_yt,
vote_average,
vote_count,
writers
// 
cast,
certification,
directors,
external_ids,
genres,
id,
original_language,
overview,
popularity,
poster_path,
release_date,
revenue,
runtime,
similar,
tagline,
title,
trailer_yt,
vote_average,
vote_count,
writers
*/

  console.log(
    Movies.filter((movie) => {
      return movie.original_language.toLowerCase() === "italian";
    })
  );
  // console.log(
  //   Movies.filter((movie) => {
  //     return movie.runtime <= 90;
  //   })
  // );
  // Movies.forEach((movie, index) => {
  //   a=movie.release_date.split("-")[0]==2000
  //   console.log(a);
  // })
  Movies.forEach((movie, index) => {
    let { title, genres, vote_average, release_date } = movie;
    obj = new simpleMovieObject(index, title, genres);
    // console.log(obj.genere.includes("M") ? obj : false);
    // console.log(movie.genres);
  });
})();

//  Get Input as Query
//  Search Query
// Recommended Movies
// Show Movies
