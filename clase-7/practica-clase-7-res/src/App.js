import React from "react";

const lista = ["HOLA", "HOLA", "HOLA", "MUNDO"];

class App extends React.Component {
  render() {
    return (
      <div>
        {lista.map((n, index) => (
          <h1 style={{ color: "blue", textAlign: "center" }} key={`id${index}`}>
            {n}
          </h1>
        ))}
      </div>
    );
  }
}

export default App;