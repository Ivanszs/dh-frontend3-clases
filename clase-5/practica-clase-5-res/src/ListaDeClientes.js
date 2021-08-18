import React from "react";
import Perro from "./components/Perro";

class ListaDeClientes extends React.Component {
  render() {
    return (
      <div>
        <h1>Clientes caninos de Veterinaria</h1>
        <ul>
          <Perro nombre="Firulais" edad="11" sexo="Macho" raza="Pastor alemán" tamaño="Grande"/>
          <Perro nombre="Maya" edad="13" sexo="Hembra" raza="Pug" tamaño="Chico"/>
          <Perro nombre="Pipo" edad="5" sexo="Macho" raza="Schnauzer" tamaño="Mediano"/>
          <Perro nombre="Pacha" edad="2" sexo="Hembra" raza="Mestizo" tamaño="Chico"/>
        </ul>
      </div>
    );
  }
}

export default ListaDeClientes;
