import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";

class Product extends Component {
  state = {
    quantity: this.props.data.minimum || 1,

  };
  render() {
    return (
      <div className="product mb-3">
        <img className="product-image" src={"/images/products/" + this.props.data.image} alt="Product" />
        <label className="product-title">{this.props.data.title}</label>

        <label>Price:$ {this.props.data.price.toFixed(2)}</label>
        <label>Total:<span>$ {this.calculateTotal()}</span></label>
        <QuantityPicker
         minimum={this.props.data.minimum || 1}
         onValueChange={this.handleQuantityChange} ></QuantityPicker>
      </div>
    );
  }

  calculateTotal = () => {
    var total = this.props.data.price * this.state.quantity;
    return total.toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    this.setState({quantity: qnty});
  };
}

export default Product;
