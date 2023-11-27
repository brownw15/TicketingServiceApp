import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteTicket from "./DeleteTicket.js";
import UserList from "./CreateUser.js";
import editIcon from "./../images/icons/edit.svg"


// const Comment = props => (
//   <div>
//     <p>{props.comment.comment}</p>
//   </div>
// )
const Message = (props) => {
    //Three types: user, admin, system
    return(
        <div className={"message--" + props.comment.type}>
            <div className="bar">
                <p>{props.comment.user}</p>
                <p>{props.comment.type}</p>
            </div>
            <p>{props.comment.comment}</p>
        </div>
    )
}


export default class ListComment extends Component{
  constructor(props){
    super(props);


    this.state = {
      comments: [],
      user: [],
      typer: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/tickets/Comments')
      .then(response=>{
        this.setState({
          comments: response.data,
          user: response.data.user,
          type: response.data.type,
        })
      })
      .catch(function(error){
        console.log(error);
      })

    }

    ticketComments(){
      var comments = this.state.comments;
      return comments.filter(comments=>comments.ticket_id == this.props.ticketId).map(function(currentComment, i){
        return<Message comment={currentComment} key={i} />
      });
    }

clearAll(){
  this.setState({
    comments: []
  })
}

handleSubmit(event) {
  console.log(this.state);
  event.preventDefault();
}

render(){
    return(
        <div>
          {this.ticketComments().reverse()}
        </div>
    )
}
}
