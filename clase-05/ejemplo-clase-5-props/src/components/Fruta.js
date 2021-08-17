import React from "react";

class Fruta extends React.Component {
  render() {
    return (
      <li style={{ backgroundColor: "lime", border: "solid 4px" }}>
        {this.props.fruta}
      </li>
    );
  }
}

export default Fruta;
