import React from "react";
import ReactDOM from "react-dom";

const lista = [
  "Mean Girls",
  "Die Hard",
  "Hot Fuzz",
  "Kill Bill",
  "John Wick",
  "Shrek",
  "Ted",
  "The Godfather",
  "Avengers",
  "Amelie",
  "The Dark Knight",
  "Angry Men",
  "Flashback",
  "Luca",
  "Cruella",
  "Pulp Fiction",
  "The Good, the Bad and the Ugly",
  "Fight Club",
  "Forrest Gump",
  "Inception",
  "Goodfellas",
  "Life Is Beautiful",
  "Spirited Away",
  "Interstellar",
  "The Pianist",
  "etc"
];

function Peliculas(props) {
  const elements = props.pelicula.map((peli) => <li>{peli}</li>);
  const peliculas = <ul>{elements}</ul>;
  return peliculas;
}

ReactDOM.render(
  <Peliculas pelicula={lista} />,
  document.getElementById("root")
);