import React, { useState } from 'react'
import PatientFormComp from '../components/patientform/PatientFormComp'
import PatientFormComp2 from '../components/patientform/PatientFormComp2';


function PatientPortal() {
  const [typeOfService, setTypeOfService] = useState('EEG');

  const serviceChangeHandler = (event) => {
    setTypeOfService(event.target.value);
  }
  return (
    <div style = {{minHeight:"100vh"}} >
      <div className='orderFormContainer'>
        <h1 className='servicesLabel'>Order Online</h1>
        <label htmlFor="serviceType" className='typeOfService'>Type of service</label>
        <select className='servicesField' name="services" id="services" value={typeOfService} onChange={serviceChangeHandler}>
          <option value="EEG">EEG Services</option>
          <option value="EpilepsyCare">Epilepsy Care</option>
          <option value="EMU">EMU Services</option>
          <option value="EpilepsySurgicalEvaluation">Epilepsy Surgical Evaluation</option>
        </select>      
      </div>
      { typeOfService === 'EEG' &&  <PatientFormComp/> }
      { typeOfService === 'EpilepsyCare' &&  <PatientFormComp2 typeOfService="EpilepsyCare"/> }
      { typeOfService === 'EMU' &&  <PatientFormComp2 typeOfService="EMU"/> }
      { typeOfService === 'EpilepsySurgicalEvaluation' &&  <PatientFormComp2 typeOfService="EpilepsySurgicalEvaluation"/> }

    </div>
   
  )
}

export default PatientPortal