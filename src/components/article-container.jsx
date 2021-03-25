import React, { Component } from 'react';
import Article from './article';
import "./article-container.css";

class ArticleContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <Article></Article>
                <Article></Article>
                <Article></Article>
                <Article></Article>
                <Article></Article>
            </div>
         );
    }
}
 
export default ArticleContainer;