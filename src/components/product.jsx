import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";
import { connect } from "react-redux";
import { addProductToCart } from './../store/actions/actions';

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
        <div className="btn-container">
        <QuantityPicker
          minimum={this.props.data.minimum || 1}
          onValueChange={this.handleQuantityChange} 
         >
         </QuantityPicker>
         <button 
          onClick={this.handleAddToCart} 
          className="btn-sm btn-light add-to-cart"
        >
          <i className="fas fa-cart-plus"></i>
        </button>
        </div>
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

  handleAddToCart = () => {
    console.log("added to cart");
    // dispatch the action
    var prodInCart = {
      product: this.props.data,
      quantity: this.state.quantity
    };
    this.props.addProductToCart(prodInCart);
  };
}
// connect 2 params:
// 1 - what do you want to read
// 2 - actions to dispatch
export default connect( null, { addProductToCart } )(Product);