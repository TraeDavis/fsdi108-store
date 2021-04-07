import React, { Component } from "react";
import "./productInCart.css";

class ProductInCart extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="product-cart-container">
          <img
            className="cart-img"
            src={"/images/products/" + this.props.data.product.image}
            alt="Random"
          />
          <div className="column">
            <label className="cart-border cart-title">
              {this.props.data.product.title}
            </label>
            <label className="cart-border cart-qnty">
              Quantity: {this.props.data.quantity}{" "}
            </label>
          </div>
          <div className="column">
            <label className="cart-border cart-price">
              Unit price:${this.props.data.product.price.toFixed(2)}
            </label>
            <label className="cart-border cart-total">
              Subtotal: <span> ${this.calculateTotal()}</span>
            </label>
          </div>
          <button onClick={this.handleRemoveItem} className="btn btn-danger mb-2">Remove</button>
          
        </div>
      </div>
    );
  }

  calculateTotal = () => {
    var total = this.props.data.product.price * this.props.data.quantity;
    return total.toFixed(2);
  };

  handleRemoveItem = (e) => {
      var item = e.target;
      console.log(item);
  }
}

export default ProductInCart;
