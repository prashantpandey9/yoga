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
      email: this.state.email, 
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name

    }
    axios.post(loginAPI , user )
      .then(res=>{
        console.log(res)

        if (res.data.status===201){
          localStorage.setItem("token", res.data.data['token']);
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
    let { alert, alertMessage } = this.state;
    return (
      <div className="base-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-sm-12 col-md-4 col-lg-4 login form">
            
              <div className="content">
                <center><h3>Login</h3></center>
                <div className="form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="" />
                  </div>
                  <button type="Submit" className="btn btn-warning">
                    Login
                  </button>
                  { alert === 'success' && <Alert alert={alertMessage} type="success"/> }
                  { alert === 'error' && <Alert alert={alertMessage} type="danger"/> }
                </div>
              </div>
        
          
        
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4"></div>
          </div>
        </div>
        
      </div>
    );
  }
}