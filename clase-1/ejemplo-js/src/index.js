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

document.getElementById("root").innerHTML = `<ul>${lista
  .map((pelis) => `<li>${pelis}</li>`)
  .join("")}</ul>`;
