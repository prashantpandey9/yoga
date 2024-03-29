import React, {useState, useContext } from "react";
import { loginAPI } from '../../api/authApi'
import axios from "axios"; 
import Alert from '../Alerts/Alert'
import { Redirect } from 'react-router-dom'
import './login.scss'

import { UserContext } from "../../Context/UserContext";

export const Login = () => {
  

  const { state, dispatch } = useContext(UserContext);
  
  const initialState = {
    username: "",
    password: "",
    errorMessage: "",
    error: "",
    loading: false
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
      errorMessage: null,
      loading: true,
    });  
    
    axios.post(loginAPI , 
    {
      username: data.username,
      password: data.password
    })
      .then(res =>{
        console.log(res)
        console.log(res.data.msg)
        console.log(typeof res.data.msg)
        if (res.data.status===200){
          let r=res.data.data
          dispatch({
            type: "LOGIN",
            payload: {username: r.username, token: r.token, user_id: r.user_id}
          })
          setData({
            ...data,
            error: "success",
            errorMessage: res.data.msg
          });
          
        }
        else if (res.data.status===400){
          setData({
            ...data,
            error: "error",
            errorMessage: res.data.msg
          });
        }
      })
          
      .catch(error => {
            setData({
            ...data,
            errorMessage: "The server is not excepting any request at this moment. Try again later!",
            error: 'error'
          });
        });
    
  }

if (state.isAuthenticated){
    return <Redirect to='/' />
}

return (
  
  <div className="base-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-sm-12 col-md-6 col-lg-6 login ">
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
      
                 <button type="Submit" className="btn btn-warning" disabled={data.loading}>
                  {data.loading===true && <span>loading...</span>}
                    {data.loading===false && <span>Login</span>  }
                  
                  </button>
                </div>
                <br />
                <div>
                 
                 </div>
              </div>
              { data.error === 'success' && <Alert alert={data.errorMessage} type="success"/> }
              { data.error === 'error' && <Alert alert={data.errorMessage} type="danger"/> }
            </form>
          
        
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3"></div>
          </div>
        </div>
        
      </div>
  )
};
export default Login;

