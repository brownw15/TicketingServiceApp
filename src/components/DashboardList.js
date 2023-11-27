import React, {Component} from "react";
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

import editIcon from "./../images/icons/edit.svg"



const Ticket = props => (
  <tr>
    <td>{props.ticket._id}</td>
    <td>{props.ticket.issue_title}</td>
    <td>{props.ticket.date}</td>
    <td><span className={props.ticket.status}>&#9724;</span>&nbsp;{props.ticket.status}</td>
    <td><Link to={"/ticket/"+props.ticket._id}>Open</Link></td>
    <td className="edit">
      <Link to={"/edit/"+props.ticket._id}><img src={editIcon} alt="Edit ticket"/></Link>
    </td>
  </tr>
)




export default class ListTicket extends Component{
  constructor(props){
    super(props);
    this.state = {tickets: []};
  }


  componentDidMount() {
    axios.get('http://localhost:4000/tickets/dl')
      .then(response=>{
        this.setState({tickets: response.data})
      })
      .catch(function(error){
        console.log(error);
      })
    }



    ticketList(){
      var myTicket = this.state.tickets;
      return myTicket.filter(myTicket=>myTicket.assignedTo == sessionStorage.getItem('login')).map(function(currentTicket, i){
        return<Ticket ticket={currentTicket} key={i} />
    }).reverse();
    }

clearAll(){
  this.setState({
    tickets: []
  })
}

render(){
    return(
        <div className="container">
          <div id = "controls">
            <h3>
                <NavLink to="/dashboard" activeClassName="active" exact>Dashboard</NavLink>
                {(sessionStorage.getItem('login') == "admin@admin.com") ? (
                    <NavLink to="/dashboard/incident-report" activeClassName="active" exact>Incident Report</NavLink>
                ) : ("")}
            </h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Issue</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.ticketList()}
            </tbody>
          </table>
      </div>
    )
}
}
