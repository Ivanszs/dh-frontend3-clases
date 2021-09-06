import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listadoDeFrutas: ["Manzana", "Pera", "Banana"],
    };
  }
  agregarFruta = (e) => {
    e.preventDefault();
    let nuevaFruta = e.target.nuevaFruta.value;
    this.setState({
      listadoDeFrutas: [...this.state.listadoDeFrutas, nuevaFruta],
    });
    e.target.nuevaFruta.value = "";
  };

  render() {
    return (
      <div>
        <h1>Frutas</h1>
        <ul>
          {this.state.listadoDeFrutas.map((fruta, i) => {
            return <li key={i}>{fruta}</li>;
          })}
        </ul>
        <form onSubmit={this.agregarFruta}>
          <input name="nuevaFruta" type="text" /> <br />
          <button>Añadir nueva fruta</button>
        </form>
      </div>
    );
  }
}

export default App;
