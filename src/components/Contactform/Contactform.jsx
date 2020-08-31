import React ,{ Component }from 'react'
import './Contactform.scss'
import axios from "axios"; 
class ContactForm extends Component {
    state = {
      first_name: '',
      last_name: '', 
      email: '', 
      text: '',
    };/* This is where the magic happens */
    handleSubmit = event => {
      event.preventDefault();
      const user = {
        first_name: this.state.first_name,
        last_name: this.state.last_name, 
        email: this.state.email, 
        text: this.state.text,

      }
      axios.post('http://127.0.0.1:8000/contact/', { user })
        .then(res=>{
          console.log(res);
          console.log(res.data);
          // window.location = "/" 
        })
        .then(error => console.log(error));
    }
  handleChange = event =>{
      this.setState({ first_name: event.target.value,
                      last_name: event.target.value ,  
                      email: event.target.value,
                      text: event.target.value            
      });
    }
  render() {
      return (
        <div class="container">
        <div className="row contactus">
            <div className="col-sm-3 col-md-3 col-lg-3"></div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <form action="#" name="contact_form" className='contactform' onSubmit = { this.handleSubmit } >
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
      );
    }
  }
  export default ContactForm;

