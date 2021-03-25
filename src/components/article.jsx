import React, { Component } from "react";
import "./article.css";
class Article extends Component {
  state = {
      images: ["/images/articles/apple-256261_1920.jpg",
      "/images/articles/heart-1192662_1920.jpg",
      "/images/articles/drop-1759703_1920.jpg",
      "/images/articles/himilayan-blue-poppy-4202825_1920.jpg",
      "/images/articles/tempeh-1343291_1920.jpg"
    ],
  };
  render() {
    return (
      <div className="card" style={{width:" 18rem"}}>
        <img src={this.state.images[4]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
  
 }

export default Article;
