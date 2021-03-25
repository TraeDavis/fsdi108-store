import React, { Component } from 'react';
import "./navBar.css";
import {Link} from 'react-router-dom';

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
      <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-link" to="/catalog">Shop Now</Link>
      <Link className="nav-link" to="/about">About</Link>
      <div className="cart-container">
      <Link className="nav-link active cart" to="/cart"><i className="fas fa-shopping-cart"></i> Cart</Link>
      </div>{/*  cart-container */}
    </div>
  </div>
</nav>
         );
    }
}
 
export default NavBar;
