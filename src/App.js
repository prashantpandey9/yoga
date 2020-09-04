import React, {useState, useReducer}from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js'
import'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Home  from './pages/Home/Home';
import Aboutus from './pages/AboutUs/Aboutus';
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Mission from './pages/Mission/Mission'
import State from './pages/State/State'
import Courses from './pages/Courses/Courses'
import Loginpage from './pages/Loginpage/Loginpage'
import Registerpage from './pages/Registerpage/Registerpage'
import { UserContext } from './UserContext';

const initialState = {
  isAuthenticated: false,
  username: null,
  token: null,
  user_id: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}
export default function App() {
  
  const [state, dispatch] = useReducer( reducer, initialState)
  return (
    <div className="App">
      
  <BrowserRouter>  
      <Switch>
          <UserContext.Provider value={{
                      state,
                      dispatch
                    }}
            >
            <Route exact path='/' component={Home} />
            <Route exact path='/aboutus' component={Aboutus} />
            <Route exact path='/contactus' component={Contact} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/mission' component={Mission} />
            <Route exact path='/category/:id' component={State} />
            <Route exact path='/:id/detail' component={Courses} />
            <Route exact path='/login' component={Loginpage} />
            <Route exact path='/register' component={Registerpage} />
          </UserContext.Provider>
      </Switch>
  </BrowserRouter>
    </div>
  );
}

