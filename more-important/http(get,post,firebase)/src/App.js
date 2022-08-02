import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Initially no error

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null); // whenever this function fired we also might wanna reset the error to null
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) throw new Error("Something went Wrong"); // if the api send json data although the response is not succesfull then the this line will be come next data
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // function give various value this is why we need to use callback hook
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
