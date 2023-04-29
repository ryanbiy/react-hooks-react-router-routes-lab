import React from "react";
import { directors } from "../data";

function Directors() {

  return <div >
    <h1>Directors Page</h1>
    {directors.map((everyDirector)=>(
  <div key={everyDirector.name}>

    <h3>Name:{everyDirector.name}</h3>
    <p>Movies:</p>
    <ul>
      {everyDirector.movies.map((everyMovie)=><li key={everyMovie}>{everyMovie}</li>)} 
    </ul>
  </div>
)
)}

  </div>;
}


export default Directors;
