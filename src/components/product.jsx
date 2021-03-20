import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product mb-3">
        <img src="https://picsum.photos/200/300
" alt="random" />
        <label>Product Description Here</label>

        <label>$ Total</label>
        <label>$ Price</label>
        <QuantityPicker></QuantityPicker>
      </div>
    );
  }
}

export default Product;
