import React, { Component } from "react";
import "./article.css";
class Article extends Component {
  state = { };
  render() {
    return (
      <div className="card" style={{width:" 18rem"}}>
        <img src={this.props.data.img} className="card-img-top" alt="article" />
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn article-btn">
            More info
          </a>
        </div>
      </div>
    );
  }
  
 }

export default Article;
