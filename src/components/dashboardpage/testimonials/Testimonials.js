import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Yuneli from '../../../assets/images/Yuneli.jpg'
import Marco from '../../../assets/images/Marco.jpg'
import Priya from '../../../assets/images/Priya.jpg'

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
      <img src={Yuneli} alt="Yuneli"/>
      <div className="myCarousel">
        <h3>Yuneli</h3>      
        <p>
          I am an assistant professor of neurology at a hospital in North Carolina. We were previously unfamiliar with critical care long-term EEGs, relying on 30-minute EEGs to screen patients suspected of having seizures. However, after collaborating with the SeizureCare team, we made a surprising discovery: many patients with persistent altered sensorium were actually experiencing nonconvulsive seizures which would often go undetected by short term EEGs. The team's suggestions were vital in effectively treating these cases and facilitating timely discharges. Furthermore, their monthly webinar sessions have been invaluable in enhancing our expertise in managing critically ill patients, enabling us to provide better care and improve patient outcomes.
        </p>
      </div>
    </div>

    <div>
    <img src={Marco} alt="Marco"/>
      <div className="myCarousel">
        <h3>Marco</h3>        
        <p>
          I am a neurologist from Florida. I was Initially struggling to effectively manage drug-resistant epilepsy cases, particularly when it came to selecting the most suitable surgical options. However, since subscribing to SeizureCare, I have received invaluable support from Epileptologists every step of the way. Their expertise has been instrumental in guiding my decision-making process. Moreover, the post-operative guidance provided, especially regarding RNS and DBS devices, has been truly exceptional.
        </p>
      </div>
    </div>

    <div>
    <img src={Priya} alt="Priya"/>
      <div className="myCarousel">
        <h3>Priya</h3>        
        <p>
          As part of my seizure evaluation, my physician had ordered a 24-hour diagnostic EEG. However, I was hesitant to undergo the test in a hospital setting, which made me uncomfortable. Fortunately, the SeizureCare team stepped in and offered a solution. I was thrilled to have the option of an ambulatory EEG test in the comfort of my own home. The technicians who conducted the test were not only knowledgeable but also respectful and considerate, making the entire process smooth and stress-free. This convenience greatly reduced my anxiety and expedited my diagnosis and treatment, which was a huge relief.
        </p>
      </div>
    </div>
  </Carousel>
  )
}

export default Testimonials

