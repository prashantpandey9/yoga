import React from 'react'
import './Contactform.scss'
export default function Contactform() {
    return (
        <div class="container">
            <div className="row contactus">
                <div className="col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <form action="#" name="contact_form" className='contactform'>
                        <label for="first_name">First Name</label>
                        <input name="first_name" type="text" required placeholder="John"/>
                        <br />
                        <label for="last_name">Last Name</label>
                        <input name="last_name" type="text" required placeholder="Doe"/>
                        <br />
                        <label for="email">Email</label>
                        <input name="email" type="email" required placeholder="you@domain.com"/>
                        <br />
                        <label for="message">Message</label><br />
                        <textarea name="message" cols="30" rows="10" placeholder="Enter your message here ..." required> </textarea>
                        <div class="center">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>	
                </div>
            </div>
            
        </div>
    )
}
