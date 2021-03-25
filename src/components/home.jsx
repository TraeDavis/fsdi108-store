import React, { Component } from "react";
import ArticleContainer from "./article-container";
import "./home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <header className="home-header">
          <div className="img-container" style={{backgroundImage: "url(/images/banner/countryside-2326787_1920.jpg)"}}>
            
          
          <h1 className="home-heading">Organika, where goodness grows. </h1>
          </div>
        </header>
        <ArticleContainer></ArticleContainer>
      </div>
    );
  }
}

export default Home;
