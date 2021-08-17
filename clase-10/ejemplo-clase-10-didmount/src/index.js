import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mountedState: "No montado aún"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({mountedState: "MONTADO"})
    }, 1000)
  }
  render() {
    return (
      <h1>Soy un componente y estoy: {this.state.mountedState}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));