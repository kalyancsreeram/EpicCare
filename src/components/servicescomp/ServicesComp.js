import React from 'react'

import './styles.scss';
import MediaControlDiv from './MediaControlDiv';
import ServicesOne from "../../assets/images/services-one.jpg";
import ServicesTwo from "../../assets/images/services-two.png";
import ServicesThree from "../../assets/images/services-three.png";
import ServicesFour from "../../assets/images/services-four.png";
import ServicesFive from "../../assets/images/services-five.png";
import ServicesSix from "../../assets/images/services-six.png";



import Typography from '@mui/material/Typography';

const ServicesComp = () => {
  return (
    <div className='servicesContainer'>
           <div className='intro'>
              <Typography className='main-title' gutterBottom variant="h4" component="div">
                  Services
              </Typography>
              <Typography variant="body2" color="text.primary" className='services_text'>
                SeizureCare provides cutting-edge, remote care through a range of specialized services, delivering comprehensive support to providers dealing with epilepsy patients.
              </Typography>             
           </div>
           <div className='services-panel-container'>
                <div className='service-panel'>                     
                    <MediaControlDiv title='Monitored Video EEG Services' desc='Short-term and long-term video EEG monitoring, adhering to established acquisition guidelines. Providing real-time, actionable insights to physicians based on EEG analysis to expedite treatment decisions and patient care.'
                    source={ServicesOne} styleLR={'Left'}/>
                    <MediaControlDiv title='Epilepsy Management' desc='Supporting day-to-day treatment decisions for outpatient and inpatient settings, empowering clinicians with up-to-date knowledge.'
                    source={ServicesTwo} styleLR={'Left'}/>
                    <MediaControlDiv title='Epilepsy Monitoring Unit (EMU) Services' desc='For patients with drug-resistant epilepsy, providing specialized tailored plans (Video EEG, MEG, SPM-PET, interictal and ictal SPECT,functional MRI, TMS, etc) to better understand epileptogenic networks.'
                    source={ServicesThree} styleLR={'Left'}/>                           
                </div>
                <div className='service-panel'>
                    <MediaControlDiv title='Epilepsy Surgery Consultation' desc=' Offering expert guidance for epilepsy surgery decision-making, including personalized stereo EEG plans, and comprehensive post-operative care, empowering clinical management with epilepsy devices such as VNS, RNS, DBS, etc.'
                    source={ServicesFour} styleLR={'Right'}/>
                    <MediaControlDiv title='Educational Webinars and Knowledge Dissemination' desc='Advancing the field of epilepsy through regular webinars and the distribution of expert knowledge, enhancing the skills of healthcare professionals globally.'
                    source={ServicesFive} styleLR={'Right'}/>
                    <MediaControlDiv title='Research and Collaboration' desc='Promoting and participating in epilepsy research, collaborating with multiple centers worldwide to drive innovations and improve patient outcomes.'
                    source={ServicesSix} styleLR={'Right'}/>   
                </div>    
            </div>
            <Typography variant="body2" color="text.primary" className='servicesSummary'>
               <b> In summary, we offer a holistic approach to epilepsy management, combining expert care, informative education, and innovative research to address the diverse needs of individuals with epilepsy.</b>
           </Typography>  
        </div>               
   
  )
}

export default ServicesComp