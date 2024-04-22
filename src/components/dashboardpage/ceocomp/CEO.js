import React from 'react'
import John from "../../../assets/images/John.png"
import './styles.scss';

function CEO() {
  return (
    <div className='ceoContainerMain'>
        {/* <img className='ceo' alt='CEO' src={CEOImage}/> */}
        <div className='ceoContainer'>
            <div className='ceoImage'>
              <img alt='CEO' src={John}/> 
            </div>
            <div className='ceoMessage'>
              <h1>WELCOME MESSAGE FROM CEO </h1>
              <h3>Welcome Message</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p className='ceoTitle'>Demish Tornado</p>
              <p className='ceoTitle'>CEO & Founder</p>
            </div>
        </div>
      
    </div>
  )
}

export default CEO