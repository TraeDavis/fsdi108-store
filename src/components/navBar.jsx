import React, { Component } from 'react';
import "./navBar.css";
class NavBar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/"><i className="fas fa-leaf"></i>Organika</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-link" href="/">Shopping</a>
      <div className="cart-container">
      <a className="nav-link active cart" href="/"><i className="fas fa-shopping-cart"></i> Cart</a>
      </div>{/*  cart-container */}
    </div>
  </div>
</nav>
         );
    }
}
 
export default NavBar;
