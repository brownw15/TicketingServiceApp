import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const User = props => (

    <option value={props.user.email}>{props.user.email}</option>
)



export default class UserList extends Component{
  constructor(props){
    super(props);
    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/tickets/users')
      .then(response=>{
        this.setState({users: response.data})
      })
      .catch(function(error){
        console.log(error);
      })
    }
    userList(){
      return this.state.users.map(function(currentUser, i){
        return<User user={currentUser} key={i} />
      });
    }

clearAll(){
  this.setState({
    users: []
  })
}

render(){
    return(
          this.userList().reverse()
    )
}
}
