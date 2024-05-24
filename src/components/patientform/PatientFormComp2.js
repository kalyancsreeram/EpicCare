import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function PatientFormComp2() {

  const [formData, setFormData] = useState({
    drName:"",
    hospital:"",
    contactInfo: "",
    message: "",    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();   
    axios
      .post('http://localhost:3001/patientform', { ...formData })
      .then(response => {
        setFormData({ drName: '', hospital: '', contactInfo: '', message: '' });  
        alert('Data has been successfully sent...')
      })
      .catch(() => {
         alert('Something went wrong. Try again later');        
      })
  };

  return (
    <div className="patientFormContainer">         
      <form onSubmit={handleSubmit}>     
          <label htmlFor="drName">Doctor Name</label>
          <input className='inputField' type='text' id='drName' name='drName' 
                placeholder='Doctor Name' value={formData.drName}
                onChange={handleChange}/>
          <label htmlFor="hospital">Hospital</label>
          <input className='inputField' type='text' id='hospital' name='hospital' 
                placeholder='Hospital'  value={formData.hospital}
                onChange={handleChange}/>  
          <label htmlFor="contactInfo">Contact Info</label>
          <input className='inputField' type='text' id='contactInfo' name='contactInfo' 
                placeholder='Contact Info' value={formData.contactInfo}
                onChange={handleChange}/>  

          <label htmlFor="message">Message</label>
          <textarea className='orderTextArea orderFormInputElement' id="message" name="message" placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}/>
        
          <div className='patientNoteContainer'>
              <p>Thank you for your interest in SeizureCare. We will get back to you with confirmation shortly. <br></br>If you have any questions, feel free to contact us at <span className='contactInfo'>info@seizurecarenet.com</span>.</p>
              <p className='patientNote'>NOTE: Please use this form for general clinical information only. DO NOT send any specific patient health information through this form.</p>
          </div>
          <input className='inputField inputSubmit' type="submit" value="Submit"></input>
      </form>    
    </div>
  )
}

export default PatientFormComp2