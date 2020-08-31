import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Services.scss'
import Footer from '../../components/Footer/Footer'
const detail=[{
    city: '',
    title: '',
    subtopic: '',
}]
export default function Services() {
    return (
        <div>
            <NavBar />

            <div className="container-fluid services">
                <div className="row servicesrow">
                    <div className="col-sm-12 col-md-6 col-lg-6 servicehead">
                        <h1 className='serviceheading'>sdkjsjdnfghksbdhfvsdhj</h1>
                        <p>- ksdjfjsdndfb sdfjhsjdfh jsdhfj h</p>
                        <p>- ksdjfjsdndfb sdfjhsjdfh jsdhfj h</p>
                        <p>- ksdjfjsdndfb sdfjhsjdfh jsdhfj h</p>
                    </div>
                    {/* <div className="col-sm-0 col-md-2 col-lg-2"></div> */}
                    <div className="col-sm-12 col-md-4 col-lg-6">
                        <div class="card servicescard mr-auto">
                          {/* <img class="card-img-top" src="holder.js/100px180/" alt="" /> */}
                          <div class="card-body">
                            <h4 class="card-title">Title</h4>
                            <p class="card-text">Bodysssss</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}   
