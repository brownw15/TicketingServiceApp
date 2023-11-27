import React, {Component} from "react";
import axios from 'axios';

export class ArticleDelete extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }


onSubmit(e) {
  e.preventDefault();

   const obj = {   };

  axios.delete('http://localhost:4000/articleDelete'+this.props.match.params.id, obj)
     .then(res =>
       console.log(res.data));

  this.props.history.push('/search');
}

  render(){
    return(
          <form onSubmit={this.onSubmit}>
            <input type="submit" value="Delete Article" />
          </form>
    )
  }
}
