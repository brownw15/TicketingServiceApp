import React, {Component} from "react";
import axios from 'axios';
import UserList from "./CreateUser.js";

export default class EditTicket extends Component {

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


    this.addEmail = this.addEmail.bind(this);
    this.setIssueCategory = this.setIssueCategory.bind(this);
    this.setfName = this.setfName.bind(this);
    this.setlName = this.setlName.bind(this);
    this.phoneNumber = this.phoneNumber.bind(this);
    this.issueTitle = this.issueTitle.bind(this);
    this.addDescription = this.addDescription.bind(this);
    this.addLocation = this.addLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.assignedTo = this.assignedTo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);


    this.state = {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      description: '',
      issue_title: '',
      location: '',
      category: '',
      assignedTo: '',
      status: '',
      updated: date,
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
    })
  })
  .catch(function(error){
    console.log(error)
  })
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
assignedTo(e){
  this.setState({
    assignedTo: e.target.value
  });
}
changeStatus(e) {
  this.setState({
    status: e.target.value
  });
}

onDelete(e) {
  e.preventDefault();


  axios.delete('http://localhost:4000/tickets/delete/'+this.props.match.params.id)
     .then(res =>
       console.log(res.data));

    this.props.history.push('/Dashboard');
    window.location.reload();

}


async onSubmit(e) {
  e.preventDefault();
  console.log(this.props.match.params.id);

  console.log(`Name: ${this.state.fName} ${this.state.lName}`);
  console.log(`Phone: ${this.state.phone}`);
  console.log(`Email: ${this.state.email}`);
  console.log(`Location: ${this.state.location}`);
  console.log(`Issue Title: ${this.state.issue_title}`);
  console.log(`Description: ${this.state.description}`);
  //console.log(`Date: ${this.state.date}`);
  console.log(`Category: ${this.state.category} ${this.state.subcategory}`);
  console.log(`Assigned to: ${this.state.assignedTo}`);

   const obj = {
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
     updated: this.state.updated,
   };

  await axios.post('http://localhost:4000/tickets/update/'+this.props.match.params.id, obj)
     .then(res =>
       console.log(res.data));

    this.props.history.push('/Dashboard');
    await window.location.reload();
}

  render(){
    return(
        <div>
          
          <form onSubmit={this.onSubmit} id = "editTicket" action="/dashboard">
            <h3>Update Ticket <a href="javascript:history.back()">Go back</a></h3>
            <div>
              <label>First Name</label>
              <input className="input" type="text" value={this.state.fName} onChange={this.setfName} placeholder="First Name"/>
              <label>Last Name</label>
              <input className="input" type="text" value={this.state.lName} onChange={this.setlName} placeholder="Last Name"/>
              <label>Email address</label>
              <input className="input" type="email" value={this.state.email} onChange={this.addEmail} placeholder="Email address"/>
              <label>Phone Number</label>
              <input className="input" type="tel" value={this.state.phone} onChange={this.phoneNumber} placeholder="Phone Number"/>
              <label>Location</label>
              <select onChange={this.addLocation} defaultValue={this.state.value}>
                <option value='charlotte'>Charlotte</option>
                <option value='austin'>Austin</option>
                <option value='detroit'>Detroit</option>
                <option value='london'>London</option>
                <option value='new york'>New York</option>
              </select>
              <label>What issue are you having?</label>
              <input className="input" type="text" value={this.state.issue_title} onChange={this.issueTitle} placeholder="Type a brief description of the problem"/>
              <label>Category</label>
              <select id='issue' defaultValue={this.state.value} onChange={this.setIssueCategory}>
                <option value='Telecommunications'>Telecommunications</option>
                <option value='Hardware'>Hardware</option>
                <option value='Software'>Software</option>
              </select>
              <label>Status</label>
              <div className="select">
              <select onChange={this.changeStatus}>
                  <option disabled selected hidden>Ticket Status</option>
                  <option value='new'>New</option>
                  <option value='active'>Active</option>
                  <option value='onhold'>On Hold</option>
                  <option value='resolved'>Resolved</option>
                  <option value='complete'>Complete</option>
                  <option value='cancelled'>Cancelled</option>
                  <option value='blocked'>Blocked</option>
              </select>
              </div>
              <label>Assigned To</label>
              <div className="select">
                  <select onChange={this.assignedTo}>
                    <UserList/>
                  </select>
              </div>
              <label>Issue explained</label>
              <div className="field">
                <textarea value={this.state.description} onChange={this.addDescription} name="description" rows="5" cols="80">
                </textarea>
                </div>
                <br/>
                <input type="submit" value="Update Ticket" />
            </div>
          </form>
          <form onSubmit={this.onDelete} id="delete" action="/dashboard">
            <input type="submit" value="Delete Ticket" />
          </form>
        </div>

    )
  }
}
