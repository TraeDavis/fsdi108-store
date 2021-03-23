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
        <h3>Check out our amazing products! {this.state.catalog.length}</h3>
        <div className="product-container">
          {this.state.catalog.map((p) => <Product data={p}></Product>)}
        </div>
      </React.Fragment>
    );
  }

  componentDidMount(){
      console.log("Load data now");
      // call the service, get the catalog and put the catalog in the state
      let service = new ProductService();
      var data = service.getProducts();

      this.setState({catalog: data});

  }

}

export default Catalog;
