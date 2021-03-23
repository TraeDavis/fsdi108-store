import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product mb-3">
        <img className="product-image" src={"/images/products/" + this.props.data.image} alt="random" />
        <label>{this.props.data.title}</label>

        <label>Price:$ {this.props.data.price}</label>
        <label>Total:$ {this.props.data.price}</label>
        <QuantityPicker></QuantityPicker>
      </div>
    );
  }
}

export default Product;
