import React, { Component } from "react";
import Product from "./product";
import "./catalog.css";
import ProductService from './../services/productService';

class Catalog extends Component {
  state = {
      catalog: [],
  };

  render() {
    return (
      <React.Fragment>
        <header className="catalog-header">
        <h3>Check out our {this.state.catalog.length} best sellers! </h3>
        <h6>Our most popular products based on sales.</h6>
        </header>
        <div className="product-container">
          {this.state.catalog.map((p) => <Product key={p.id} data={p}></Product>)}
        </div>
      </React.Fragment>
    );
  }

  componentDidMount(){
      // call the service, get the catalog and put the catalog in the state
      let service = new ProductService();
      var data = service.getProducts();

      this.setState({catalog: data});

  }

}

export default Catalog;
