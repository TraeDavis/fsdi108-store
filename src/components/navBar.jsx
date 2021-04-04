import React, { Component } from 'react';
import "./navBar.css";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/"><i className="fas fa-leaf"></i>Organika</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-link active" to="/home">Home</Link>
      <Link className="nav-link active" to="/catalog">Shop Now</Link>
      <Link className="nav-link active" to="/about">About</Link>
      <div className="cart-container">
      <Link className="nav-link cart" to="/cart"><i className="fas fa-shopping-cart"> {this.props.cart.length}</i></Link>
      </div>{/*  cart-container */}
    </div>
  </div>
</nav>
         );
    }
}

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};
//  read: pass a fn that maps the state to props
export default connect( mapStateToProps ,null)(NavBar);
