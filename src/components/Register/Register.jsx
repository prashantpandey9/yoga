import React from "react";
import '../Login/login.scss'
import { registerAPI } from '../../api/authApi'
import axios from "axios"; 
import Fail from '../Alerts/Fail'
import Success from '../Alerts/Success'
import ReactDOM from 'react-dom';
export default class Register extends React.Component {
  state = {
    username: '', 
    email: '', 
    password: '',
  };/* This is where the magic happens */
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email, 
      password: this.state.password,

    }
    axios.post(registerAPI , user )
      .then(res=>{
        console.log(res);
        localStorage.setItem("token", res.data.data['token']);
        
        if (res.data.status===201){
          ReactDOM.render(
            
              <Success alert={res.data.msg}/>
            
            ,document.getElementById('alert')
          )

        }
        else if (res.data.status===400){
          ReactDOM.render(
            
              <Fail alert={res.data.['data']}/>
            
            ,document.getElementById('alert')
          )

        }


        
        
      })
      .catch(error => console.log(error));
    
  }
handleChange = event =>{
    this.setState({ [event.target.name]: event.target.value,         
    });
  }
  render() {
    return (
      <div className="base-container" >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-sm-12 col-md-4 col-lg-4 login form">
              <center><h3>Register</h3></center>
              <div className="content">
                  <div className="form">
                    <form action="#" name="contact_form" className='contactform' onSubmit = { this.handleSubmit } >
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" onChange= {this.handleChange} required/>
                    
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" onChange= {this.handleChange} required/>
                      
                
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="" onChange= {this.handleChange} required/>
                        <button   className="btn btn-warning">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4" id="alert" ></div>
          </div>
        </div>
        
      </div>
    );
  }
}