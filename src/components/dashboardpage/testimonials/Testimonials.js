import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import John from '../../../assets/images/John.png'
import Victor from '../../../assets/images/Victor.png'
import Tina from '../../../assets/images/Tina.png'

import './styles.scss';

function Testimonials() {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={6100}
  >
    <div>
      <img src={John} alt="John"/>
      <div className="myCarousel">
        <h3>Yuneli</h3>
      
        <p>
          I recently got myself tested with EEG. I was so impressed by the service they have provided at my place rather than me rushing to hospital and staying there for around 24 hours for the continuous EEG test. The staff were very polite and professional. They explained to me about the test and made sure I was comforted. This test helped my doctor to quickly diagnose and pinpoint the issue and which helped in quick diagnosis and treatment. 
        </p>
      </div>
    </div>

    <div>
    <img src={Victor} alt="Victor"/>
      <div className="myCarousel">
        <h3>Marco</h3>
        
        <p>
          Undergoing an EEG test at home was incredibly convenient. The SeizureCare team was thorough and professional, explaining every step of the process and ensuring I was comfortable throughout. The home service saved me the stress of a hospital visit and allowed my doctor to rapidly diagnose and treat my condition effectively. I'm grateful for their exceptional care.
        </p>
      </div>
    </div>

    <div>
    <img src={Tina} alt="Tina"/>
      <div className="myCarousel">
        <h3>Priya</h3>
        
        <p>
          I had a fantastic experience with my home EEG test provided by SeizureCare. The technicians were knowledgeable and respectful, ensuring a smooth and comfortable testing process right in my living room. This convenience significantly reduced my anxiety and expedited my diagnosis and treatment. I highly recommend their services for their professionalism and care.
        </p>
      </div>
    </div>
  </Carousel>
  )
}

export default Testimonials

