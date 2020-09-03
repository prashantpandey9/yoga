import React from "react";

import './login.scss'
export default class Login extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

  render() {
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