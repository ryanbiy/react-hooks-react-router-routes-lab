import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList=movies.map((everyMovie)=>(
    <div  key={everyMovie.title}>
      <h3>Name:{everyMovie.title}</h3>
      <p>Time:{everyMovie.time}</p>
      <p>Genres:</p>
      <ul>
        {everyMovie.genres.map((genre)=><li key={genre}>{genre}</li>)}
      </ul>

    </div>
  ))
  return <div >
    <h1>Movies Page</h1>
    {moviesList}

  </div>;
}

export default Movies;
