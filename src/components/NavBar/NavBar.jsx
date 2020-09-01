import React, { Component } from 'react';
import './NavBar.scss'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg" fixed="top">
                <Navbar.Brand>Recreatly</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-auto">

                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>

                    <Nav.Link><Link to='/aboutus'>About Us</Link></Nav.Link>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown" className='dropbg'>
                        <NavDropdown.Item >
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
                        </NavDropdown.Item>
                        {/* <NavDropdown.Item ><Link to='category#Dance'>Dance</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='blog'>Language</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Drawing & Painting</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='mission'>Sports</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='contactus'>Games</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Senior</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Others</Link></NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                    <Nav.Link><Link to='/contactus'>Contact Us</Link></Nav.Link>
                    <Nav.Link><Link to='/mission'>Our Mission</Link></Nav.Link>
                    </Nav>
                    <Nav.Link><Link to='/register'><Button variant="warning">Register</Button></Link></Nav.Link>
                    <Nav.Link><Link to='/login'><Button variant="warning">Login</Button></Link></Nav.Link>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default NavBar
