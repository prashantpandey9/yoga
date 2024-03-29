import React, { Component } from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer footer-wrappper">
                    <div className="container">
                        <div className="row just">
                            <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                                <h1>Recreatly</h1>
                                <h5>Take the next step toward your personal and professional goals with us.</h5>
                                <a href="prashantpandey.ml"><i className="fa fa-twitter"></i></a>
                                <a href="prashantpandey.ml"><i className="fa fa-linkedin"></i></a>
                                <a href="prashantpandey.ml"><i className="fa fa-github"></i></a>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                <h5>Useful Links</h5>
                                <ul>
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='aboutus'>About Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                <h5>Our Vision</h5>
                                    <ul>
                                        <li>
                                        To keep the child inside everyone alive
                                        </li>
                                        <li>
                                            Our Solutions
                                        </li>
                                        <li>
                                            Our Solutions
                                        </li>
                                    </ul>
                            
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <h5>Contact Us</h5>
                                    <ul>
                                        <li>
                                        Phone: 8105070961
                                        </li>
                                        <li >
                                        Email: modi.shekhar@live.com
                                        </li>
                                    </ul>
                            </div>
                        </div>
                        <center><h4>&copy; Copyright 2020</h4></center>
                        <br/>   
                    </div>  
                    
	            </footer>
            </div>
        )
    }
}

export default Footer
