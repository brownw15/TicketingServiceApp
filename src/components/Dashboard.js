import React, {Component} from "react";
//import '../bulma.min.css';
import { Navbar } from "./NavigationBar.js"
import DashboardList from "./DashboardList.js";
import DashboardListUser from "./DashboardListUser.js";
import {Link} from "react-router-dom";

export default class DashboardTickets extends Component {
    render() {
    return(
        <div className="dashboardPage">
            <div>
                {sessionStorage.getItem('login') == "admin@admin.com" ? (
                  <DashboardList />
                ) :
                <DashboardListUser />
              }
            </div>
        </div>
    )
  }
}
