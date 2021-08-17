import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    imHungryFor: "", 
                    show: true
                 };
  }

  cancelOrder = () => {
    this.setState({show: false});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({imHungryFor: "Pizzas"})
    }, 2000)
  }
  componentDidUpdate() {
    console.log("El componente se actualizó!");
  }
  render() {
    let myOrder;
    if (this.state.show) {
      myOrder = <Child food={this.state.imHungryFor}/>;
    };
    return (
      <div>
      {myOrder}
      <button type="button" onClick={this.cancelOrder}>Cancelar pedido.</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("Tu pedido ha sido cancelado.");
  }
  render() {
    return (
      <h1>Tu pedido: {this.props.food}</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));