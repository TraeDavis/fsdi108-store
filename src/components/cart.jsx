import React, { Component } from "react";
import { connect } from "react-redux";
import ProductInCart from "./productInCart";
import "./cart.css";

class Cart extends Component {
  state = {
      
  };
  render() {
    return (
      <div className="checkout-cart-container">
        

        <div className="cart-page">
            <div className="checkout-container mb-3">
              <h4>You have {this.props.cart.length} {this.itemItems()} in your cart.</h4>
            <h3 className="mb-2">Your total: {this.getTotal()}</h3>
            <button className="btn btn-sm">Checkout</button>
          </div>
          <div className="item-container">
            {this.props.cart.map((p) => (
              <ProductInCart key={p.product.id} data={p}></ProductInCart>
            ))}
          </div>
          
        </div>
      </div>
    );
  }

  itemItems = () => {
      if(this.props.cart.length === 1){
          return "item";
      }else {
          return "items";
      }
  }

  getTotal = () => {
    let grandTotal = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      let item = this.props.cart[i];
      let itemTotal = item.quantity * item.product.price;
      grandTotal += itemTotal;
    }

    return "$" + grandTotal.toFixed(2);
  };
}
const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};
//  read: pass a fn that maps the state to props
export default connect(mapStateToProps, null)(Cart);
