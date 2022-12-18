import React from "react";
import { useSelector } from "react-redux";
import { getFilmResults } from "../../redux-manager/Movies/selector";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

function Movies() {
  const movies = useSelector(getFilmResults);

  return (
    <ul className="movies">
      {movies &&
        movies.map((movie) => {
          return (
            <li className="movies__item" key={movie.imdbID}>
              <MovieItem {...movie} />
            </li>
          );
        })}
    </ul>
  );
}

export default Movies;
