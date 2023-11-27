import React, {Component} from "react";
import axios from 'axios';
import redarft from 'redraft';
import { Link } from 'react-router-dom';
import {Result} from "./UserSideComponents.js";

const Article = (props) => (
    <div className="searchResult">
        {/*<h3>{props.article.articleId}</h3>*/}
        <h3>{props.article.title}</h3>
        {/*<p>{props.article.content.map((item, z) => { return <span key={z}>{item}</span>})}</p>*/}
        <p>{props.article.desc}</p>
        <Link to={"/article/"+ props.article._id}>Read More</Link>
        <Link to={"/articleEdit/" + props.article._id}>Edit this Article</Link>
    </div>
);

const PopArticle = (props) => (
    <div className="card--popular">
        {/*<h3>{props.article.articleId}</h3>*/}
        <h3>{props.article.title}</h3>
        {/*<p>{props.article.content.map((item, z) => { return <span key={z}>{item}</span>})}</p>*/}
        <p>{props.article.desc}</p>
        <Link to={"/article/"+ props.article._id}>Read More</Link>
    </div>

);

export class ArticleList extends Component {
    constructor(props){
        super(props);
        this.state = {articles: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/articles')
        .then(response=>{
            this.setState({articles: response.data});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    articleList(){
        return this.state.articles.map(function(currentArticle, i){
          return<Article article={currentArticle} key={i} />
      }).reverse();
      }

  clearAll(){
    this.setState({
      articles: []
    })
  }

    render() {
        //let {params} = new URLSearchParams(this.props.location.search);
        //const {lastSearch } = params.get("query");
        return(
            <div className = "dashboardPage">
                <p>{this.state.articles.length} Helpful Articles for "Slow Comput..."</p>
                {this.articleList()}
            </div>
        );
    }
}

export class PopularList extends Component {
    constructor(props){
        super(props);
        this.state = {articles: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/articles')
        .then(response=>{
            this.setState({articles: response.data});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    PopularList(){
        return this.state.articles.map((currentArticle, i) => {
            if(i >= this.state.articles.length - 6) {
                return<PopArticle article={currentArticle} key={i} />
            }
        }).reverse();
      }

  clearAll(){
    this.setState({
      articles: []
    })
  }

    render() {
        //let {params} = new URLSearchParams(this.props.location.search);
        //const {lastSearch } = params.get("query");
        return(
            <div className="popularCardsFix">
                <p>{this.state.articles.length} Popular Articles</p>
                {this.PopularList()}
            </div>
        );
    }
}
