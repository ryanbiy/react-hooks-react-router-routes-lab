import React from "react";
import { actors } from "../data";


function Actors() {
const actorsList =actors.map((everyActor,index)=>(
<div key={index}>

  <h3>Name:{everyActor.name}</h3>
  <p>Movies</p>
  <ul>
    {everyActor.movies.map((movie)=><li key={movie}>{movie}</li>)}
  </ul>
</div>
))
  return <div>
    <h1>Actors Page</h1>
    {actorsList}

  </div>;

}

export default Actors;