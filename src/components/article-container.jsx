import React, { Component } from 'react';
import Article from './article';
import "./article-container.css";
import ArticleService from './../services/articleServices';

class ArticleContainer extends Component {
    state = { 
        articleContainer: [],
     }
    render() { 
        return ( 
            <div className="container-fluid">
               {this.state.articleContainer.map((a) => <Article key={a.id} data={a}></Article>)}
                
            </div>
         );
    }
    componentDidMount(){
        // call the service, get the article and put the catalog in the state
        let service = new ArticleService();
        var data = service.getArticle();
        this.setState({articleContainer: data});
    }
}
 
export default ArticleContainer;