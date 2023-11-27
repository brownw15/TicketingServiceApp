import React, {Component} from "react";
import axios from 'axios';
import UserList from "./CreateUser.js";
import ListComment from "./commentOnTicket.js";

export default class EditTicket extends Component {


  constructor(props) {
    super(props);
    this.getComment= this.getComment.bind(this);
    this.updateComment= this.updateComment.bind(this);

    this.state = {
      comment: '',
      newComment: '',
      user: '',
      ticket_id: '',
      type: ''
    }
  }


async componentDidMount() {
  await axios.get('http://localhost:4000/tickets/'+this.props.match.params.id)
  .then(response => {
    this.setState({
      lName: response.data.lName,
      fName: response.data.fName,
      email: response.data.email,
      phone: response.data.phone,
      description: response.data.description,
      issue_title: response.data.issue_title,
      location: response.data.location,
      category: response.data.category,
      assignedTo: response.data.assignedTo,
      status: response.data.status,
      date: response.data.date,
      newComment: response.data.newComment,
      ticket_id: response.data._id,
    })
  })
  .catch(function(error){
    console.log(error)
  })
}

getComment(e) {
  this.setState({
    comment: e.target.value
  });
}


updateComment(e) { //Create comment function. Need to add to this
  var userName = sessionStorage.getItem('login');
  const newComment = {
    comment: this.state.comment,
    user: sessionStorage.getItem('login'),
    type: sessionStorage.getItem('user'),
    ticket_id: this.state.ticket_id,
  }

  axios.post('http://localhost:4000/tickets/comment', newComment)

    this.setState({
        user: '',
        date: this.state.currentDate,
        type: '',
        comment: '',
        ticket_id: this.state.ticket_id,
    });
    //Slightly cheaty way to get the page to reload;
    window.location.reload();
}


  render(){
    return(
        <div className="dashboardPage ticketDetail">
            <section className="contact">
                <h3>{this.state.issue_title ? this.state.issue_title : "No Title"} <a href="javascript:history.back()">Go back</a></h3>
                <div id="typearea">
                    <textarea value={this.state.comment} onChange={this.getComment}/>
                    <button onClick={this.updateComment}>Reply</button>
                    <ListComment ticketId = {this.state.ticket_id}/>
                    <div className="message--user">
                        <div className="bar">
                            <p>{this.state.email}</p>
                            <p>User</p>
                        </div>
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </section>
            <section className="details">
                <h3>Details</h3>
                <p>Name: {this.state.fName} {this.state.lName}</p>
                <p>Email: <a href={"mailto:" + this.state.email}>{this.state.email}</a></p>
                <p>Phone: <a href={"tel:" + this.state.phone}>{this.state.phone}</a></p>
                <p>Location: {this.state.location}</p>
                <p>Created: {this.state.date}</p>
                <p>Title: {this.state.issue_title}</p>
                <p>Category: {this.state.category}</p>
                <p>Subcategory: N/A</p>
                <p>Assigned To: {this.state.assignedTo}</p>
                <p>Status: <span className={this.state.status}>{this.state.status}</span></p>
            </section>
        </div>
    )
  }
}
