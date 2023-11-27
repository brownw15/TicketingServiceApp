import React, {Component} from "react";
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import DeleteTicket from "./DeleteTicket.js";
import UserList from "./CreateUser.js";
import editIcon from "./../images/icons/edit.svg"


const Ticket = props => (
  <tr>
    <td>{props.ticket.fName}</td>
    <td>{props.ticket.lName}</td>
    <td><a href={"tel:" + props.ticket.phone}>{props.ticket.phone}</a></td>
    <td><a href={"mailto:" + props.ticket.email}>{props.ticket.email}</a></td>
    <td>{props.ticket.location}</td>
    <td>{props.ticket.category}</td>
    <td>{props.ticket.issue_title}</td>

    <td>{props.ticket.assignedTo ? props.ticket.assignedTo :
      <p>Unassigned</p>
    }
    </td>
    <td><span className={props.ticket.status}>&#9724;</span>&nbsp;{props.ticket.status}</td>
    <td>{props.ticket.date}</td>
    <td>{props.ticket.updated ? props.ticket.updated : "Unopened"}</td>
    <td className="edit">
      <Link to={"/edit/"+props.ticket._id}><img src={editIcon} alt="Edit ticket"/></Link>
    </td>
    <td></td>

    {// <td>
    //   <button> <Link to={"/delete/"+props.ticket._id}>Delete</Link></button>
    // </td>
  }
  </tr>
)




export default class ListTicket extends Component{
  constructor(props){
    super(props);
    this.state = {tickets: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    axios.get('http://localhost:4000/tickets/')
      .then(response=>{
        this.setState({tickets: response.data})
      })
      .catch(function(error){
        console.log(error);
      })
    }



    ticketList(){
      return this.state.tickets.map(function(currentTicket, i){
        return<Ticket ticket={currentTicket} key={i} />
      });
    }

clearAll(){
  this.setState({
    tickets: []
  })
}

handleChange(event) {
  this.setState({sort: event.target.value});
  console.log(event.target.value);
    axios.get('http://localhost:4000/tickets/'+event.target.value)
    .then(response=>{
      this.setState({tickets: response.data})
    })
    .catch(function(error){
      console.log(error);
    })
}

handleSubmit(event) {
  console.log(this.state);
  event.preventDefault();
}

render(){
    return(
        <div className="container">
          <div id = "controls">
            <h3>
                <NavLink to="/dashboard" activeClassName="active" exact>Dashboard</NavLink>
                <NavLink to="/dashboard/incident-report" activeClassName="active" exact>Incident Report</NavLink>
            </h3>
            <form onSubmit={this.handleSubmit}>
              <select value={this.state.sort} onChange={this.handleChange}>
                <option disabled selected hidden>Sort Tickets By</option>
                <option  value='first'>First ↓</option>
                <option value='last'>Last ↓</option>
                <option value='phone'>Phone ↓</option>
                <option value='email'>Email ↓</option>
                <option value='location'>Location ↓</option>
                <option  value='issue'>Issue ↓</option>
                <option value='category'>Category ↓</option>
                <option value='assigned'>Assigned To ↓</option>
                <option value='status'>Status ↓</option>
                <option  value='first2'>First ↑</option>
                <option value='last2'>Last ↑</option>
                <option value='phone2'>Phone ↑</option>
                <option value='email2'>Email ↑</option>
                <option value='location2'>Location ↑</option>
                <option value='issue2'>Issue ↑</option>
                <option value='category2'>Category ↑</option>
                <option value='assigned2'>Assigned To ↑</option>
                <option value='status2'>Status ↑</option>
              </select>
            </form>
          </div>
          <p>{this.state.tickets.length} Incidents</p>
          <table>
            <thead>
              <tr>
                <th>First</th>
                <th>Last</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
                <th>Category</th>
                <th>Issue</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Opened</th>
                <th>Updated</th>
                <th>Modify</th>
                <th>

                </th>
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
