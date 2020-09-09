import React, {useState, useContext } from "react";
import '../Login/login.scss'
import './Register.scss'
import { registerAPI } from '../../api/authApi'
import axios from "axios"; 
import Alert from '../Alerts/Alert'
import { Redirect } from 'react-router-dom'
import { UserContext } from "../../Context/UserContext";

export  const Register = () => {
  

  const { state, dispatch } = useContext(UserContext);
  
  const initialState = {
    username: '', 
    email: '', 
    password: '',
    first_name: '',
    last_name: '',
    error: '',
    errorMessage: ''
  };
  const [register, setRegister] = useState(initialState);
  const handleInputChange = event => {
      setRegister({
        ...register,
        [event.target.name]: event.target.value
      });
    };
  const handleFormSubmit = event => {
    event.preventDefault();
    setRegister({
      ...register,
      errorMessage: null
    });
    
    
    axios.post(registerAPI , 
    {
      username: register.username,
      password: register.password,
      first_name: register.first_name,
      last_name : register.last_name,
      email : register.email
    })
      .then(res =>{
        
        if (res.data.status===201){
          localStorage.setItem("username", res.data.data.username);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.data.user_id);
          dispatch({
            type: "REGISTER_SUCCESS"
          })
          setRegister({
            ...register,
            error: "success",
            errorMessage: res.data.msg
          });

          
        }
        else if (res.data.status===400){
          setRegister({
            ...register,
            error: "error",
            errorMessage: res.data.msg
          });
        }
      })
          
      .catch(error => {
            setRegister({
            ...register,
            errorMessage: "The server is not excepting any request at this moment. Try again later!",
            error: 'error'
          });
        });
    
  }
if (state.isAuthenticated){return <Redirect to='/' />}
  return (
      <div className="base-container" >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-sm-12 col-md-6 col-lg-6 login ">
              <center><h3>Register</h3></center>
              <div className="content">
                  <div className="form">
                    <form action="#" name="contact_form" className='contactform' onSubmit = { handleFormSubmit } >
                      <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" placeholder="first_name" onChange= {handleInputChange} required/>

                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" placeholder="last_name" onChange= {handleInputChange} required/>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" onChange= {handleInputChange} required/>
                    
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" onChange= {handleInputChange} required/>
                      
                
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="" onChange= {handleInputChange} required/>
                        <button   className="btn btn-warning ml-auto mr-auto" >
                          Register
                        </button>
                      </div>
                      { register.error === 'success' && <Alert alert={register.errorMessage} type="success"/> }
                      { register.error === 'error' && <Alert alert={register.errorMessage} type="danger"/> }
                    </form>
                  </div>
                
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    );
  }

export default Register;
