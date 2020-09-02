import React from "react";
import '../Login/login.scss'
export default class Register extends React.Component {
  
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
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="text" name="password" placeholder="password" />
                    </div>
                      <button type="button" className="btn btn-warning">
                      Register
                    </button>
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