import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product mb-3">
        <img className="product-image" src={"/images/products/" + this.props.data.image} alt="random" />
        <label className="product-title">{this.props.data.title}</label>

        <label>Price:$ {this.props.data.price.toFixed(2)}</label>
        <label>Total:<span>$ {this.props.data.price.toFixed(2)}</span></label>
        <QuantityPicker></QuantityPicker>
      </div>
    );
  }
}

export default Product;
