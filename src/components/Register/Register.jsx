import React from "react";
import '../Login/login.scss'
import './Register.scss'
import { registerAPI } from '../../api/authApi'
import axios from "axios"; 
import Alert from '../Alerts/Alert'
import { Redirect } from 'react-router-dom'

export default class Register extends React.Component {
  state = {
    username: '', 
    email: '', 
    password: '',
    first_name: '',
    last_name: '',
    isAuthenticated: false
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
    axios.post(registerAPI , user )
      .then(res=>{
        console.log(res)

        if (res.data.status===201){
          localStorage.setItem("token", res.data.data['token']);
          localStorage.setItem("isAuth", "false");
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
        
      });
    
  }
handleChange = event =>{
    this.setState({ [event.target.name]: event.target.value,         
    });
  }
  render() {
    let { alert, alertMessage } = this.state;
    if (this.state.isAuthenticated) {
       return <Redirect to='/login' />
         
    };
    return (
      <div className="base-container" >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-sm-12 col-md-4 col-lg-4 login ">
              <center><h3>Register</h3></center>
              <div className="content">
                  <div className="form">
                    <form action="#" name="contact_form" className='contactform' onSubmit = { this.handleSubmit } >
                      <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" placeholder="first_name" onChange= {this.handleChange} required/>

                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" placeholder="last_name" onChange= {this.handleChange} required/>
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
                      { alert === 'success' && <Alert alert={alertMessage} type="success"/> }
                      { alert === 'error' && <Alert alert={alertMessage} type="danger"/> }
                    </form>
                  </div>
                
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    );
  }
}