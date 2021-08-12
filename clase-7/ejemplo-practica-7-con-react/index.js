import React from "react";
import ReactDOM from "react-dom";

function hora() {
  const element =
  React.createElement("div", null,
  React.createElement("h1", null, "Soy un h1"),
  React.createElement("h2", null, "Soy un h2 y son las ", new Date().toLocaleTimeString(), "."));


  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(hora, 1000);