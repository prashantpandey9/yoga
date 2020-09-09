import React from 'react'
import topic1 from '../../assets/images/topic1.png'
import topic2 from '../../assets/images/topic2.png'
import topic3 from '../../assets/images/topic3.png'
import topic4 from '../../assets/images/topic4.png'
import OwlCarousel from 'react-owl-carousel';
const options = {
  margin: 30,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  
  smartSpeed: 1000,
  autoWidth: true,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,
      }
  },
};
export default function Subjects() {
    return (
        <div>
            <div className="row">
                <OwlCarousel className="slider-items owl-carousel" {...options}
                    
                  >  


                        <div >
                            <img src={topic1} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Music</h5>
                        </div>
                        <div >
                            <img src={topic2} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Dance</h5>
                        </div>
                        <div >
                            <img src={topic3} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Programing</h5>
                        </div>
                        <div>
                            <img src={topic4} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Gamming</h5>
                        </div> 
                </OwlCarousel>
            </div>
        </div>
    )
}
