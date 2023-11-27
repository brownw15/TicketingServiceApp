import React, {Component, useState} from "react";
//import '../bulma.min.css';
import axios from 'axios';
import UserList from "./CreateUser.js";
import {Link} from "react-router-dom";


import icon from "../images/icons/info.png";

const Header = (props) => {
    const [active, setActive] = useState("false");

    return(
        <div className = "formHeader">
            <div className = "text">
                <h4>{props.title}</h4>
                <img src={icon} onMouseEnter={() => setActive(true)} onMouseLeave={() => {setActive(false)}} />
            </div>
        </div>
    );
}


export default class CreateTicket extends Component {
  constructor(props) {
    super(props);

    var time = new Date()
    if (time.getHours() < 12)
    {
      var day = 'am';
    }
    else
    {
      var day = 'pm';
    }

    if (time.getHours() < 12)
    {
      var hour = time.getHours();
    }
    else
    {
      var hour = time.getHours()-12;
    }

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + hour + ':'+ today.getMinutes() + ':'+ today.getSeconds() + day;


    this.addIssueType = this.addIssueType.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.setIssueCategory = this.setIssueCategory.bind(this);
    this.issueSubCategory = this.issueSubCategory.bind(this);
    this.setfName = this.setfName.bind(this);
    this.setlName = this.setlName.bind(this);
    this.phoneNumber = this.phoneNumber.bind(this);
    this.issueTitle = this.issueTitle.bind(this);
    this.addDescription = this.addDescription.bind(this);
    this.addLocation = this.addLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.assignedTo = this.assignedTo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.getDate = this.getDate.bind(this);


    this.state = {
      currentDate: date,
      fName: '',
      lName: '',
      email: sessionStorage.getItem('login'),
      phone: '',
      issue_type: '',
      description: '',
      issue_title: '',
      location: '',
      status: '',
      category: '',
      subcategory: '',
      assignedTo: '',
      date: date,
      status: 'new',
      ticketId: '',
    }
  }


  issueTitle(e) {
    this.setState({
      issue_title: e.target.value
    });
  }
  setIssueCategory(e) {
    this.setState({
      category: e.target.value
    });
  }
  issueSubCategory(e) {
    this.setState({
      subcategory: e.target.value
    });
  }
  addIssueType(e) {
    this.setState({
      issue_type: e.target.value
    });
  }
  phoneNumber(e) {
    this.setState({
      phone: e.target.value
    });
  }
  addEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  addDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  addLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  addStatus(e) {
    this.setState({
      status: e.target.value
    });
  }
setfName(e){
    this.setState({
      fName: e.target.value
    });
  }
setlName(e){
    this.setState({
      lName: e.target.value
    });
  }
  assignedTo(e) {
    this.setState({
      assignedTo: e.target.value
    });
  }
  changeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }
  getDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`Name: ${this.state.fName} ${this.state.lName}`);
    console.log(`Phone: ${this.state.phone}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Location: ${this.state.location}`);
    console.log(`Issue Title: ${this.state.issue_title}`);
    console.log(`Issue: ${this.state.issue_type}`);
    console.log(`Description: ${this.state.description}`);
    console.log(`Category: ${this.state.category} ${this.state.subcategory}`);
    console.log(`Assigned to: ${this.state.assignedto}`);
    console.log(`date: ${this.state.date}`);


     const newTicket = {
       fName: this.state.fName,
       lName: this.state.lName,
       phone: this.state.phone,
       email: this.state.email,
       location: this.state.location,
       issue_title: this.state.issue_title,
       category: this.state.category,
       description: this.state.description,
       assignedTo: this.state.assignedTo,
       status: this.state.status,
       date: this.state.date,
       ticket_id: this.state._id
     }

    axios.post('http://localhost:4000/tickets/add', newTicket)
       .then(res => {
         console.log(res.data);
         this.props.history.push('/Dashboard');
       }, (err) => {
         console.log(err);
       });

    this.setState({
      issue_type: '',
      fName: '',
      lName: '',
      email: sessionStorage.getItem('login'),
      phone: '',
      description: '',
      issue_title: '',
      location: '',
      status: '',
      category: '',
      subcategory: '',
      assignedTo: '',
      date: this.state.currentDate,
      status: 'new',
    })
  }

  render(){
    return(
        <div className="container">
          <form onSubmit = {this.onSubmit} id="ticketForm">
              <h3 className="title">Submit a help ticket</h3>
              <p>Please provide the following information. A helpdesk associate will be with you shortly.</p>
              <h4>General Information</h4>
              <div className="field" id="firstName">
                  <input required className="input" type="text" value={this.state.fName} onChange={this.setfName} placeholder="First Name"/>
              </div>
              <div className="field" id="lastName">
                  <input required className="input" type="text" value={this.state.lName} onChange={this.setlName} placeholder="Last Name"/>
              </div>
              <div className="field" id="email">
                  <input required className="input" type="email" value={sessionStorage.getItem('login')} onChange={this.addEmail} placeholder={sessionStorage.getItem('login')}/>
              </div>
              <div className="field" id="phoneNumber">
                  <input required className="input" type="tel" value={this.state.phone} onChange={this.phoneNumber} placeholder="Phone Number"/>
              </div>
              <div className="field" id="location">
                  <select required onChange={this.addLocation}>
                      <option disabled selected hidden>-Select location-</option>
                      <option value='Charlotte'>Charlotte</option>
                      <option value='Austin'>Austin</option>
                      <option value='Detroit'>Detroit</option>
                      <option value='London'>London</option>
                      <option value='New York'>New York</option>
                      <option value="Remote">Remote</option>
                  </select>
              </div>
              <h4>What issue are you having?</h4>
              <div className="field">
                  <input required className="input" type="text" value={this.state.issue_title} onChange={this.issueTitle} placeholder="Type a brief description of the problem"/>
              </div>
              <div className="field">
                  <div className="control">
                      <div className="select">
                          <select required id='issue' onChange={this.setIssueCategory}>
                              <option disabled selected hidden>-Select a category-</option>
                              <option value='Telecommunications'>Telecommunications</option>
                              <option value='Hardware'>Hardware</option>
                              <option value='Software'>Software</option>
                          </select>
                      </div>
                      <h4>Describe your issue in detail, including steps you've already taken.</h4>
                      <div className="field">
                        <textarea value={this.state.description} onChange={this.addDescription} name="description" rows="5" cols="80">
                        </textarea>
                      </div>
                  </div>
                  </div>
                  <div class="field" id="formControls">
                      <input type="submit" value="Create Ticket" className="button is-primary" />
                      <Link to="/landing" className="button">Cancel</Link>
                  </div>
                </form>
            </div>
    )
  }
}
