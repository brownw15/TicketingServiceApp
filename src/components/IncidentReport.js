import React, {Component} from "react";
//import '../bulma.min.css';
import { Navbar } from "./NavigationBar.js"
import ListTicket from "./TicketList.js";
import UserList from "./CreateUser.js";
import {Link} from "react-router-dom";

export default class IncidentReport extends Component {



    render() {
    return(
        <div className="dashboardPage">
            <div className = "ticketTable">
                <ListTicket/>
            </div>
        </div>
    )
  }
}
