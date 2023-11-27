import React, {Component} from "react";
import glyph from "../images/glyph.svg";
import axios from 'axios';

console.log('THIS IS A LOG:');

export default class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.addPassword = this.addPassword.bind(this);
    this.addEmail = this.addEmail.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: '',
      email: ''
    }
  }
  addPassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  addEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    //e.preventDefault();
    // console.log(`Email: ${this.state.password}`);
    // console.log(`Password: ${this.state.email}`);

    // const newUser = {
    //    password: this.state.addPassword,
    //    email: this.state.email
    // }

    // axios.post('http://localhost:4000/tickets/user', newUser)
    //    .then(res => {
    //      console.log(res.data);
    //      this.props.history.push('/Dashboard');
    //    }, (err) => {
    //      console.log(err);
    //    });
    //
    //
    //
    // this.setState({
    //   email: '',
    //   password: '',
    // })

      if (this.state.email == 'admin@admin.com')
      {
        var email = this.state.email;
        var admin = "admin";
        sessionStorage.setItem('login', email)
        sessionStorage.setItem('user', admin)
        console.log(sessionStorage.getItem('login'));
        console.log(sessionStorage.getItem('user'));
      }
      else if (this.state.email == 'user@user.com')
      {
        var email = this.state.email;
        sessionStorage.setItem('login', email)
        sessionStorage.setItem('user', 'user')
        console.log(sessionStorage.getItem('login'));
        console.log(sessionStorage.getItem('user'));
      }
      else{
        var email = this.state.email;
        sessionStorage.setItem('login', email)
        sessionStorage.setItem('user', 'user')
        console.log(sessionStorage.getItem('login'));
        console.log(sessionStorage.getItem('user'));
      }

  }

  render(){
    return (
        <div className="login">
            <div className="login__form">
            <div className = "logo">
                <img src={glyph} />
                <h2>Help desk</h2>
            </div>
              <form action="/landing" onSubmit = {this.onSubmit}>
                <fieldset>
                    <div className="field">
                        <input className="input" type="email" placeholder="Email" value={this.state.email} onChange={this.addEmail} required/>
                    </div>
                    <div className="field">
                        <input className="input" type="password" placeholder="Password" value={this.state.password} onChange={this.addPassword} required/>
                    </div>
                    <div className="field">
                        <div className="tac">
                            <input type="checkbox" value="agree" required/>
                            <label>I agree to the <a href="#">terms and conditions</a></label>
                        </div>
                    </div>
                    <div className="field">
                          <input type="submit" value="Login"/>
                    </div>
                </fieldset>
              </form>
          </div>
        </div>
    )
  }
}
