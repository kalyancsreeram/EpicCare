import React from 'react'
import './styles.scss';
import Typography from '@mui/material/Typography';

import Welcome from "../../../assets/images/welcomeImg.jpeg"

function CEO() {
  return (
    <div className='ceoContainerMain'>
        {/* <img className='ceo' alt='CEO' src={CEOImage}/> */}
        <div className='ceoContainer'>
            {/* <div className='ceoImage'>
              <img alt='CEO' src={John}/> 
            </div> */}
            <img className="seizureCare" alt='SeizureCare' src={Welcome}/>
            <div className='ceoMessage'>
              {/* <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'bold'}}>
                 CEO MESSAGE
              </Typography> */}
             
              <Typography className='welcome_msg' gutterBottom variant="p" component="div">
                  {/* <q><b>Welcome to SeizureCare, American Healthcare Network</b>. We pride ourselves on being a leading provider of EEG testing, offering expert services that earn the trust and respect of our clients by not only reporting EEG results but also assisting in effective patient treatment. Our commitment to modernizing equipment and supporting remote medical practices helps us meet growing healthcare demands while maintaining patient confidentiality. SeizureCare operates globally, working in demanding environments to ensure the best care and swift treatment outcomes everywhere. Our corporate culture emphasizes integrity, empathy, quality, innovation, and continuous improvement, reflecting our dedication to excellence in every interaction.</q> */}
                  <blockquote>
                    <b>Welcome to SeizureCare</b>, an American healthcare company revolutionizing remote epilepsy care. Our team of esteemed American board-certified epileptologists earns global trust and respect from healthcare professionals through an unwavering commitment to exceptional patient care and life-changing outcomes. By harnessing the latest advancements in medical technology, we're redefining access to epilepsy services while maintaining the highest standards of patient privacy and confidentiality. Guided by our core values of integrity, empathy, quality, innovation, and refinement, we're dedicated to reshaping the boundaries of epilepsy care and setting a new benchmark for patient experience and success

                  <footer>
                      <cite>
                         Chief Executive Officer
                      </cite>
                  </footer>
                  </blockquote>
              </Typography>             
              {/* <Typography className='ceoTitle' gutterBottom variant="p" component="div" style={{fontWeight:'bold'}}>
                Demish Tornado
              </Typography> */}
              {/* <Typography className='ceoTitle' gutterBottom variant="p" component="div" style={{fontWeight:'bold'}}>
                Chief Executive Officer
              </Typography>  */}
            </div>
        </div>
      
    </div>
  )
}

export default CEO