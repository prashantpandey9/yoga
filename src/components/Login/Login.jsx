import React, {useState, useContext } from "react";
import { loginAPI } from '../../api/authApi'
import axios from "axios"; 
// import Alert from '../Alerts/Alert'
import { Redirect } from 'react-router-dom'
import './login.scss'

import { UserContext } from "../../Context/UserContext";

export const Login = () => {
  

  const { state, dispatch } = useContext(UserContext);
  
  const initialState = {
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };
  const [data, setData] = useState(initialState);
  const handleInputChange = event => {
      setData({
        ...data,
        [event.target.name]: event.target.value
      });
    };
  const handleFormSubmit = event => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });
    
    
    axios.post(loginAPI , 
    {
      username: data.username,
      password: data.password
    })
      .then(res =>{
        console.log(res)
        
        if (res.data.status===200){
          res=res.data.data
          dispatch({
            type: "LOGIN",
            payload: {username: res.username, token: res.token, user_id: res.user_id}
          })
          return <Redirect to='/' />
        }
      })
          
      .catch(error => {
        console.log(data)
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText
        });
      });
    
  }

return (
  
  <div className="base-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-sm-12 col-md-4 col-lg-4 login ">
            <form action="#" name="contact_form" className='contactform' onSubmit={ handleFormSubmit } >
              <div className="content">
                <center><h3>Login</h3></center>
                <div className="form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" value={data.username} onChange={ handleInputChange } required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="" value={data.password} onChange={ handleInputChange } required/>
                  </div>
      
                 <button type="Submit" className="btn btn-warning">
                    Login
                  </button>
                  
                 
                </div>
              </div>
            </form>
          
        
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4"></div>
          </div>
        </div>
        
      </div>
  );
};
export default Login;

