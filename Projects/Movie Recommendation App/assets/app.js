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
const moviesListContainer = document.querySelector(".moviesListContainer");
// inputsArray.forEach((input, index) => (inputsArray[index] = input.value));
const [inputGenere, inputYear, inputLanguagage, inputRating, inputTitle] =
  inputsArray;

allGenres = [];
allYear = [];
allLanguage = [];
allRatings = [];
allTitle = [];

// console.log(allGenres, allYear, allLanguage, allTitle,allRatings);
// Fetch Movies Main Stram
(async function () {
  const response = await fetch("./assets/data.json");
  console.log(response);
  const Movies = await response.json();
  console.log(Movies);
  const headerElement = `        
  <div class="Header">
  <div class="rank">Rank</div>
  <div class="MovieDetail">Movie</div>
  <div class="Year">Year</div>
  </div>`;
  (
    // Input & Select Data Managment To Call Search
    function () {
      Movies.forEach((movie) => {
        let { title, genres, release_date, vote_average, original_language } =
          movie;
        year = release_date.split("-")[0];
        allGenres.push(...genres);
        allYear.push(year);
        allTitle.push(title);
        allLanguage.push(original_language);
        allRatings.push(vote_average);
      });
      allYear = [...new Set(allYear)].sort((a, b) => a - b);
      allRatings = [...new Set(allRatings)].sort((a, b) => b - a);
      allGenres = [...new Set(allGenres)].slice(0, 16);
      allTitle = [...new Set(allTitle)].slice(0, 300);
      allLanguage = [...new Set(allLanguage)];
      allGenres.forEach((genere) => {
        inputGenere.innerHTML += `<option value="${genere}">${genere}</option>`;
      });
      allRatings.forEach((Rate) => {
        inputRating.innerHTML += `<option value="${Rate}">${Rate}</option>`;
      });
      allLanguage.forEach((language) => {
        inputLanguagage.innerHTML += `<option value="${language}">${language}</option>`;
      });
      (async function () {
        allTitle.forEach((title) => {
          inputTitle.innerHTML += `<option value="${title}">${title}</option>`;
        });
        inputsArray.forEach((e) =>
          e.addEventListener("input", (e) => Search(e.target.value))
        );
      })();
    }
  )();

  
  // Display Movies
   function moviesDisplayer(Movies) {
    if (Movies.length !== 0) {
      const movieElementArray = [headerElement]
      console.log("pass");
      Movies.forEach((movie, index) => {
        duration =
          Math.floor(movie.runtime / 60) != 0
            ? Math.floor(movie.runtime / 60) +
              "hr" +
              " " +
              (movie.runtime % 60) +
              "min"
            : (movie.runtime % 60) + "min";
        const movieElement =  `
  <div class="Movie">
  <div class="rank">${index + 1}</div>
  <div class="MovieDetail">
    <img src="https://image.tmdb.org/t/p/w45${movie.poster_path}" alt="${
          movie.title
        }" class="img">
    <div class="title">${movie.title}</div>
    <div class="decription">
      <span class="certification">${movie.certification}</span>
      <span class="generes">${movie.genres}</span>
      <span class="time">${duration}</span>
      <a href="https://www.youtube.com/watch?v=${movie.trailer_yt}"class="trailer" target="_blank">watch trailer</a>
    </div>
  </div>
  <div class="Year">${movie.release_date.split("-")[0]}</div>
</div>`;
    // moviesListContainer.innerHTML += `<img src="assets/Gif/Spinner-1.1s-261px.gif" alt="Loading..." class="img">`;
        // moviesListContainer.innerHTML += movieElement;
        movieElementArray.push(movieElement)
      });
      console.log(movieElementArray);
      setTimeout(() => moviesListContainer.innerHTML = movieElementArray.map(movie=>movie), 3000);
    } else {
      moviesListContainer.innerHTML = `        
      <div class="Header">
      <div class="rank">Rank</div>
      <div class="MovieDetail">Movie</div>
      <div class="Year">Year</div></div>
        <div class="error">Not Found!
        all Search will be Resetted in 3 seconds
        </div>
        `;
      setTimeout(() => {
        moviesListContainer.innerHTML = headerElement;
        resetUserInput();
      }, Math.random()*300);
    }
  }
// search
  function Search(value) {
    let filteredMovies = Movies.filter((movieObj) => {
      return inputGenere.value !== "all"
        ? movieObj.genres.includes(value)
        : movieObj;
    });
    filteredMovies = filteredMovies.filter((movieObj) => {
      return inputTitle.value !== "all"
        ? movieObj.title.includes(value)
        : movieObj;
    });
    filteredMovies = filteredMovies.filter((movieObj) => {
      return inputYear.value !== "0000"
        ? movieObj.release_date.includes(value)
        : movieObj;
    });
    filteredMovies = filteredMovies.filter((movieObj) => {
      return inputLanguagage.value !== "all"
        ? movieObj.original_language.includes(value)
        : movieObj;
    });
    filteredMovies = filteredMovies.filter((movieObj) => {
      return inputRating.value !== "all"
        ? movieObj.vote_average == inputRating.value
        : movieObj;
    });
    moviesListContainer.innerHTML = `${headerElement}<img src="assets/Gif/Spinner-1.1s-261px.gif" alt="Loading..." class="img">`;
    console.log(filteredMovies);
    filteredMovies.length!=0?moviesDisplayer(filteredMovies):Movies;
  }
  function resetUserInput() {
    inputsArray.forEach((input) => (input.value = "all"));
    inputsArray[1].value = "0000";
  }

Search()
})();
