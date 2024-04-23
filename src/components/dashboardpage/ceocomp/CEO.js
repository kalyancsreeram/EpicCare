import React from 'react'
import John from "../../../assets/images/John.png"
import './styles.scss';
import Typography from '@mui/material/Typography';

function CEO() {
  return (
    <div className='ceoContainerMain'>
        {/* <img className='ceo' alt='CEO' src={CEOImage}/> */}
        <div className='ceoContainer'>
            <div className='ceoImage'>
              <img alt='CEO' src={John}/> 
            </div>
            <div className='ceoMessage'>
              <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'bold'}}>
                 WELCOME MESSAGE FROM CEO
              </Typography>
             
              <Typography className='welcome_msg' gutterBottom variant="p" component="div">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>

              <Typography className='ceoTitle' gutterBottom variant="p" component="div" style={{fontWeight:'bold'}}>
                Demish Tornado
              </Typography>
              <Typography className='ceoTitle' gutterBottom variant="p" component="div" style={{fontWeight:'bold'}}>
                CEO & Founder
              </Typography> 
            </div>
        </div>
      
    </div>
  )
}

export default CEO