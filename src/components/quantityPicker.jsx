import "./qp.css";
import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
  };
  render() {
    return (
      <div className="qp-container">
        <button onClick={this.increaseQuantity} className="btn-sm btn-primary">
          +
        </button>
        <label className="qp-label">{this.state.quantity}</label>
        <button onClick={this.dereaseQuantity} className="btn-sm btn-dark">
          -
        </button>
      </div>
    );
  }

  increaseQuantity = () => {
    // this.state.quantity = 2; <-dont modify state directly
    let current = this.state.quantity + 1;
    this.setState({ quantity: current });
  };

  dereaseQuantity = () => {
    let current = this.state.quantity - 1;
    if (current > 0) {
      this.setState({ quantity: current });
    }
  };
}

export default QuantityPicker;
