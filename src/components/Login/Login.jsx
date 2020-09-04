import React from "react";
import { loginAPI } from '../../api/authApi'
import axios from "axios"; 
import Alert from '../Alerts/Alert'
import { Redirect } from 'react-router-dom'
import './login.scss'

export default class Login extends React.Component {
  state = {
    username: '', 
    password: '',
  };
  
  
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    }
    axios.post(loginAPI , user )
      .then(res=>{
        console.log(res)

        if (res.data.status===200){
          localStorage.setItem("token", res.data.data['token']);
          localStorage.setItem("user_id", res.data.data['user_id']);
          localStorage.setItem("username", res.data.data['username']);
          localStorage.setItem("isAuth", "true");
          this.setState({alert: 'success', alertMessage: res.data.msg});
          this.setState({isAuthenticated : true})
          
         
         
        }
        else if (res.data.status===400){
          this.setState({alert: 'error', alertMessage: res.data.msg})
        }
        
      })
      .catch(error => {
        console.log(error)
        this.setState({alert: 'error', alertMessage:"The server is not excepting any request at this moment!! Try again later"})
        this.setState({isAuthenticated : true})
      });
    
  }
handleChange = event =>{
    this.setState({ [event.target.name]: event.target.value,         
    });
  }

  render() {
    if (localStorage.getItem('isAuth')==='true'){
      return <Redirect to='/' />;
    }
    let { alert, alertMessage } = this.state;
    return (
      <div className="base-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-sm-12 col-md-4 col-lg-4 login ">
            <form action="#" name="contact_form" className='contactform' onSubmit = { this.handleSubmit } >
              <div className="content">
                <center><h3>Login</h3></center>
                <div className="form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" onChange= {this.handleChange} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="" onChange= {this.handleChange} required/>
                  </div>
                  <button type="Submit" className="btn btn-warning">
                    Login
                  </button>
                  { alert === 'success' && <Alert alert={alertMessage} type="success"/> }
                  { alert === 'error' && <Alert alert={alertMessage} type="danger"/> }
                </div>
              </div>
            </form>
          
        
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4"></div>
          </div>
        </div>
        
      </div>
    );
  }
}