import React, { Component } from 'react';
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
function App() {
  return (
    <div className="App">
      
  <BrowserRouter>  
      <Switch>
          
          <Route exact path='/' component={Home} />
          <Route exact path='/aboutus' component={Aboutus} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/mission' component={Mission} />
          
      </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
