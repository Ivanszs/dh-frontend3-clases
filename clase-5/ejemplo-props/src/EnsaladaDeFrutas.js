import React from "react";
import Fruta from "./components/Fruta";

class EnsaladaDeFrutas extends React.Component {
  render() {
    return (
      <div>
        <h1>Ensalada de frutas</h1>
        <ul>
          <Fruta fruta="Manzanas" />
          <Fruta fruta="Peras" />
          <Fruta fruta="Naranjas" />
          <Fruta fruta="Uvas" />
          <Fruta fruta="Bananas" />
        </ul>
      </div>
    );
  }
}
//Que pasa si tenemos 50 frutas distintas?
//Como se podría programar esto para no tener que escribir el componente fruta uno por uno?

export default EnsaladaDeFrutas;