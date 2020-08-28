import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container" id="contact">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="sci">
                                    <li>
                                        <a href="">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/prashantpandey9/">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                                <p className="cpryt">
                                    &copy; Copyright 2019-2020 | Made with<i className="fa fa-heart"></i>
                                </p>
                            </div>
                        </div>
                    </div>
	            </footer>
            </div>
        )
    }
}

export default Footer
