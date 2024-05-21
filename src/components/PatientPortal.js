import React, { useState } from 'react'
import PatientFormComp from './patientform/PatientFormComp'
import PatientFormComp2 from './patientform/PatientFormComp2';


function PatientPortal() {
  const [typeOfService, setTypeOfService] = useState('EEG');

  const serviceChangeHandler = (event) => {
    setTypeOfService(event.target.value);
  }
  return (
    <div style = {{minHeight:"100vh"}} >
      <div className='orderFormContainer'>
        <h1 className='servicesLabel'>Order Online</h1>
        <label htmlFor="serviceType" className='servicesLabel'>Type of service</label>
        <select className='servicesField' name="services" id="services" value={typeOfService} onChange={serviceChangeHandler}>
          <option value="EEG">EEG Services</option>
          <option value="EpilepsyCare">Epilepsy Care</option>
          <option value="EMU">EMU Services</option>
          <option value="EpilepsySurgicalEvaluation">Epilepsy Surgical Evaluation</option>
        </select>      
      </div>
      { typeOfService === 'EEG' &&  <PatientFormComp/> }
      { typeOfService !== 'EEG' &&  <PatientFormComp2/> }
    </div>
   
  )
}

export default PatientPortal