import "./qp.css";
import React, { Component } from "react";


class QuantityPicker extends Component {
  state = {
    quantity: this.props.minimum,
  };
  render() {
    return (
      <div className="qp-container">
          <button onClick={this.dereaseQuantity} className="btn-sm btn-light">
            -
          </button>
          <label className="qp-label">{this.state.quantity}</label>

          <button onClick={this.increaseQuantity} className="btn-sm btn-light">
            +
          </button>
        
      </div>
    );
  }

 

  increaseQuantity = () => {
    // this.state.quantity = 2; <-dont modify state directly
    let current = this.state.quantity + 1;
    this.setState({ quantity: current });

    this.props.onValueChange(current);
  };

  dereaseQuantity = () => {
    let current = this.state.quantity - 1;
    if (current >= this.props.minimum ) {
      this.setState({ quantity: current });
      this.props.onValueChange(current);
    }

  };
}

export default QuantityPicker;
