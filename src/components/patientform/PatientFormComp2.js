import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { CONSTANTS } from '../../Constants';

function PatientFormComp2(props) {

  const { typeOfService } = props;

  const [formData, setFormData] = useState({
    drName:"",
    hospital:"",
    contactInfo: "",
    message: "",   
    typeOfService: typeOfService,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();  
    console.log(formData); 
    axios
      .post(`${CONSTANTS.serverURL}/patientform`, { ...formData })
      .then(response => {
        console.log(response);
        setFormData({ drName: '', hospital: '', contactInfo: '', message: '' });  
        alert('Data has been successfully sent...')
      })
      .catch(() => {
          alert('Something went wrong. Try again later');        
      })
  };

  const { drName, hospital, contactInfo } = formData;
  const enabled = drName.length > 0 && hospital.length > 0  && contactInfo.length > 0;

return (
    <div className="patientFormContainer">         
      <form onSubmit={handleSubmit}>     
          <label className='boldText' htmlFor="drName">Doctor Name</label>
          <input className='inputField' type='text' id='drName' name='drName' 
                placeholder='Doctor Name' value={formData.drName}
                onChange={handleChange}/>
          <label className='boldText' htmlFor="hospital">Hospital</label>
          <input className='inputField' type='text' id='hospital' name='hospital' 
                placeholder='Hospital'  value={formData.hospital}
                onChange={handleChange}/>  
          <label className='boldText' htmlFor="contactInfo">Contact Info</label>
          <input className='inputField' type='text' id='contactInfo' name='contactInfo' 
                placeholder='Contact Info' value={formData.contactInfo}
                onChange={handleChange}/>  

          <label className='boldText' htmlFor="message">Message</label>
          <textarea className='orderTextArea orderFormInputElement' id="message" name="message" placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}/>
        
          <div className='patientNoteContainer'>
              <p>Thank you for your interest in SeizureCare. We will get back to you with confirmation shortly. <br></br>If you have any questions, feel free to contact us at <span className='contactInfo'>info@seizurecarenet.com</span>.</p>
              <p className='patientNote'>NOTE: Please use this form for general clinical information only. DO NOT send any specific patient health information through this form.</p>
          </div>
          <input className='inputField patientForm2Submit' type="submit" value="Submit" 
          disabled={!enabled}></input>
      </form>    
    </div>
  )
}

export default PatientFormComp2