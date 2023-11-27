import React, {Component} from "react";
import axios from 'axios';

export default class DeleteTicket extends Component {


  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }


onSubmit(e) {
  e.preventDefault();

   const obj = {   };

  axios.delete('http://localhost:4000/tickets/delete/'+this.props.match.params.id, obj)
     .then(res =>
       console.log(res.data));

    this.props.history.push('/Dashboard');
}

  render(){
    return(
        <div>
          <h3>Update Ticket</h3>
          <form onSubmit={this.onSubmit}>
            <input type="submit" value="Delete Ticket" />
          </form>
        </div>

    )
  }
}
