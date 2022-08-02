# Fetch data from API

## This tutorial is about how to fetch data from api by the help of async await and fecth api

### Starter

the starter application contains three major file `App.js` ,`MovieList.js` and `Movie.js`. app.js file contains the dummy data

```JavaScript
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const dummyMovies = [
    {
      episode_id: 1,
      title: 'Some Dummy Movie',
      opening_crawl: 'This is the opening text of the movie',
      release_date: '2021-05-18',
    },
    {
      episode_id: 2,
      title: 'Some Dummy Movie 2',
      opening_crawl: 'This is the second opening text of the movie',
      release_date: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
```

Then the MovieList file -

```JavaScript

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.episode_id}
          title={movie.title}
          releaseDate={movie.release_date}
          openingText={movie.opening_crawl}
        />
      ))}
    </ul>
  );
};

export default MovieList;

```

The final Movie File (This is the basic pattern of maxi 😊)

```JavaScript
import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;

```

## So, now we are statring

- First remove the dummy data from `app.js` file.
- Import useState and use it in application
- after getting the data by clicking button change the state

```JavaScript
import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;

```

### Explaination

The fetch method also could recieve second argument but for get request it's not required [see here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for better explaination to understand the fetch api

## Change the fetch Function by async/await

let's use the arrow function this time -

```JavaScript

 const fetchMoviesHandler = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    setMovies(data.results);
  };

```

## Handling Loading & Data states

This is a very important lecture for me.here we show loading sppiner or text until the data has arrived.<br>
In this application there are three state (1) there are movies (2) there are no movies and (3) Loading state.<br>
we have to show the user different content in different state. Okay let's see the code for better understanding

```JavaScript
import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Include

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    setMovies(data.results);
    setIsLoading(false); // Include
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

```

**Understand the section where different element is being rendered in differnt state**

## Handling Http Errors

In every application we need to handle error.SO, this is a crucial part of the application

```JavaScript

import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) throw new Error("Something went Wrong");
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = <p> Found no movies.</p>;

  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;


```

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](images/Screenshot.png)

### Links

- Solution URL: [Github Repo](https://github.com/nasim67reja/manage.github.io)
- Live Site URL: [Live link](https://your-live-site-url.com)

### Built with

- Reactjs
- Tailwind CSS
- Flexbox
- CSS Grid
- JavaScript
- Desktop-first workflow

- The API I used in this project

```JavaScript
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
```

### What I learned

- connecting with api by the help of fetch was awesome for me.But i still have some problem with fetch api I mean how to fetch data from server into my react application.I think I need to focus on this topic for my upcoming project.
- This is also my first time with tailwind CSS. Tailwind css is awesome I like their utility class it's save a lot of time for building application.I also need to enhance my skills on Tailwind by building other projects

### Useful resources

- [The Movie DB Api](https://www.themoviedb.org/documentation/api)
- [Example resource 2](https://css-tricks.com/pure-css-horizontal-scrolling/) -horizontal scrolling

## Author

- Website - [Nasim Reja](https://www.your-site.com)
- Frontend Mentor - [@nasim67reja](https://www.frontendmentor.io/profile/@nasim67reja)
- Twitter - [@Nasimreja97](https://www.twitter.com/@Nasimreja97)
