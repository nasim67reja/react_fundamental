# Fetch data from API

## This tutorial is about how to fetch data from api by the help of async await and fecth api

## I Know I will Need this. That's why it is in the top

```JavaScript
import React, { useEffect, useState,useCallback } from "react";

// Inside Component
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);



```

## Fetch api Get & Post

2021 answer: just in case you land here looking for how to make GET and POST Fetch api requests using async/await or promises as compared to axios.

I'm using jsonplaceholder fake API to demonstrate:

Fetch api GET request using async/await:

```js
const asyncGetCall = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // enter you logic when the fetch is successful
    console.log(data);
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(error);
  }
};

asyncGetCall();
```

Fetch api POST request using async/await

```js
const asyncPostCall = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // your expected POST request payload goes here
        title: "My post title",
        body: "My post content.",
      }),
    });
    if (!response.ok) throw new Error("Something went Wrong");

    const data = await response.json();
    // enter you logic when the fetch is successful
    console.log(data);
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error);
  }
};

asyncPostCall();
```

GET request using Promises:

```JavaScript

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
   // enter you logic when the fetch is successful
    console.log(data)
  })
  .catch(error => {
    // enter your logic for when there is an error (ex. error toast)
   console.log(error)
  })

```

POST request using Promises:

```js
const asyncGetCall = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // enter you logic when the fetch is successful
    console.log(data);
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(error);
  }
};

asyncGetCall();
```

GET request using Axios:

```js
const axiosGetCall = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // enter you logic when the fetch is successful
    console.log(`data: `, data);
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(`error: `, error);
  }
};

axiosGetCall();
```

POST request using Axios:

```js
const axiosPostCall = async () => {
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        // your expected POST request payload goes here
        title: "My post title",
        body: "My post content.",
      }
    );
    // enter you logic when the fetch is successful
    console.log(`data: `, data);
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(`error: `, error);
  }
};

axiosPostCall();
```

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

## Using useEffect() for request

we use useCallback here because the functions which execute previous and the next are not same.So it will be create infinite loop in useEffect.because we use the function as a dependencies in useEffect hook

```JavaScript
import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
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
  }, []);

  useEffect(() => {

    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

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

# That's it..
