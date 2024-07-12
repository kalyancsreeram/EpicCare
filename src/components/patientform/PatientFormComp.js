import React, { useState } from 'react'
import './styles.scss';

import axios from 'axios';
import UploadComp from './UploadComp';
import FadeLoader from "react-spinners/FadeLoader";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons';
import { CONSTANTS } from '../../Constants';



function PatientFormComp() {

  // const [formData, setFormData] = useState({
  //   firstname:"",
  //   lastname:"",
  //   files: []
  // });

  const [formData, setFormData] = useState({
        typeOfService: "EEG Services",
        firstname:"",
        lastname:"",    
        dob: "",
        gender:"Male",
        addressLine1: "",
        addressLine2:"",
        city:"",
        state:"",
        zip:"",
        phone:"",
        email:"",
        uid:"",
        eegType:"",
        advisingDoctor:"",
        timeslot:"",
        message:"",
  });
  const [color] = useState("#9b2c79");
  const [loading, setLoading] = useState(false);
  const override = {
      display: "block",
      margin: "0 auto",
      borderColor: "red",
  };

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: '2' };

  const [additionalFields, setAdditionalFields] = useState([]);
  const [count, setCount] = useState(0);

  const [age, setAge] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event) => { 
    setFormData((prevState) => ({ ...prevState, files: [...formData.files, event.target.files[0]] }));
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();   
  //   axios
  //     .post(`${CONSTANTS.serverURL}/patientform`, { ...formData })
  //     .then(response => {
  //       setFormData({ firstname: '', lastname: '', files: [] });
  //       setAdditionalFields([]);
  //       setCount(0);
  //       document.querySelector('.firstFile').value = "";
  //       alert('Data has been successfully sent...')
  //     })
  //     .catch(() => {
  //        alert('Something went wrong. Try again later');        
  //     })
  // };

  const addField = () => {
    setCount(count + 1); 
    setAdditionalFields([...additionalFields, {name: `file${count + 1}`}]);  
  }
  const deleteFile = (fieldName, uploadedFileName) => {          
    setAdditionalFields([...additionalFields.filter((field) => field.name !== fieldName )]);
    setFormData((prevState) => ({ ...prevState, files: [...formData.files.filter(file => file.name !== uploadedFileName )] }));   
  }

  // const resetFirstFile = () => {    
  //   document.querySelector('.firstFile').value = "";
  //   setFormData((prevState) => ({ ...prevState, files: [...formData.files.slice(1)] }));
  // }

  const calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }    
    console.log(age_now);
    setFormData((prevState) => ({ ...prevState, 'dob': `${dob1} - [Age: ${age_now}]` }));
    return age_now;
  }

  const submitHandler = (event) => {    
      document.getElementById("patientForm").disabled = true;
      console.log(formData);
      setLoading(true);   
      event.preventDefault();
      patientFormSubmit();        
  }

  const patientFormSubmit = () => {
      axios
      .post(`${CONSTANTS.serverURL}/ordereegservice`, { ...formData })
      .then(response => {
          console.log(response);             
          setFormData({ 
            firstname: "", 
            lastname: "",             
            dob: "",
            gender:"",
            addressLine1: "",
            addressLine2:"",
            city:"",
            state:"",
            zip:"",
            phone:"",
            email:"",
            uid:"",
            eegType:"",
            advisingDoctor:"",
            timeslot:"",
            message:"",
          });  
          setLoading(false);                   
          document.getElementById("patientForm").disabled = false;  
          alert('Form submitted successfully!!');         
      })
      .catch(() => {
          document.getElementById("patientForm").disabled = false;
          setLoading(false); 
          alert('Something went wrong. Try again later');            
      })
  }


  return (
    <>
      <div style={style}>
            <FadeLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"            
            />
      </div>  
      <div className="patientFormContainer">     
        {/* <h3 className='contactFormTitle'>Patient Information</h3> */}
        <form id="patientForm">
          {/* <div>
            <label for="servicestart">Service Start</label>
            <input className='inputField' type='date' id='sstart' name='servicestart'/>
          </div>
          <div>
            <label for="serviceend">Service End</label>
            <input className='inputField' type='date' id='send' name='serviceend'/>
          </div>
          
            */}
          
            <label htmlFor="fname">Patient First Name</label>
            <input className='inputField' type='text' id='fname' name='firstname' 
                  placeholder='First name'  value={formData.firstname}
                  onChange={handleChange}/>
            <label htmlFor="lname">Patient Last Name</label>
            <input className='inputField' type='text' id='lname' name='lastname' 
                  placeholder='Last Name'  value={formData.lastname}
                  onChange={handleChange}/>         
            <label htmlFor="dob">Date Of Birth</label> {age > 0 && <label>   [Age: {age}]</label> }
            <input className='inputField' type='date' id='dob' name='serviceend' 
            placeholder='dd-mm-yyyy' onChange={(event) => setAge(calculate_age(event.target.value))}/>
            {/* <fieldset className='multiSet'>
              <legend>Gender</legend>
              <div>
                <input type='checkbox' className='multiSetInput' id='male' name='male' value='male'/>
                <label htmlFor="male">Male</label>                  
              </div>
              <div>
                <input type='checkbox' className='multiSetInput' id='female' name='female' value='female'/>
                <label htmlFor="female">Female</label>                  
              </div>
            </fieldset>    */}
             <label>Gender</label>
             <select className='multiSet' name="gender" value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>                
             </select>   
          
            <label htmlFor="address">Address</label>
            <input className='inputField' type='text' id='address' name='addressLine1' placeholder='Street Address' value={formData.addressLine1}
                  onChange={handleChange}/>
            <input className='inputField' type='text' id='address2' name='addressLine2' placeholder='Address Line #2'
                   value={formData.addressLine2}
                   onChange={handleChange}/>           

            <label htmlFor="city">City</label>
            <input className='inputField' type='text' id='city' name='city' placeholder='City'
                   value={formData.city}
                   onChange={handleChange}/>
          
            {/* <label htmlFor="state">State</label>
            <select className='statesField' name="states" id="states">
              <option value="Alaska">Alaska</option>
              <option value="Atlanta">Atlanta</option>
              <option value="NewYork">NewYork</option>
              <option value="Chicago">Chicago</option>
            </select> */}

            <label htmlFor="state">State</label>
            <input className='inputField' type='text' id='state' name='state' placeholder='State'
                   value={formData.state}
                   onChange={handleChange}/>

            <label htmlFor="zip">ZIP Code</label>
            <input className='inputField' type='number' id='zip' name='zip' placeholder='Zip Code'
                   value={formData.zip}
                   onChange={handleChange}/>
            
            <label htmlFor="phone">Phone Number</label>
            <input className='inputField' type='number' id='phone' name='phone' placeholder='Phone Number'
                   value={formData.phone}
                   onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input className='inputField' type='text' id='email' name='email' placeholder='Email'
                   value={formData.email}
                   onChange={handleChange}/>

            <label htmlFor="uid">UID</label>
            <input className='inputField' type='text' id='uid' name='uid' placeholder='Uid'
                   value={formData.uid}
                   onChange={handleChange}/>

            <label htmlFor="eegType">Type of EEG</label>
            <input className='inputField' type='text' id='eegType' name='eegType' placeholder='EEG Type'
                   value={formData.eegType}
                   onChange={handleChange}/>

            <label htmlFor="advisingDr">Advising Doctor</label>
            <input className='inputField' type='text' id='advisingDr' name='advisingDoctor' placeholder='Advising Doctor'
                   value={formData.advisingDoctor}
                   onChange={handleChange}/>

            <label htmlFor="timeSlot">Time Slot</label>
            <input className='inputField' type='text' id='timeSlot' name='timeslot' placeholder='Time Slot'
                   value={formData.timeslot}
                   onChange={handleChange}/>

            <label htmlFor="message">Message</label>
            <textarea className='orderTextArea orderFormInputElement' id="message" name="message" placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}/>
          
            {/* <h3 className='contactFormTitle'>Insurance Information</h3>
            <label htmlFor="primaryInsurance">Primary Insurance</label>
            <input className='inputField' type='text' id='primaryInsurance' name='primaryInsurance' placeholder='Primary Insurance'/>
            <label htmlFor="primaryInsuranceID">Primary Insurance ID#</label>
            <input className='inputField' type='text' id='primaryInsuranceID' name='primaryInsuranceID' placeholder='Primary Insurance ID'/>
            <label htmlFor="secondaryInsurance">Secondary Insurance</label>
            <input className='inputField' type='text' id='secondaryInsurance' name='secondaryInsurance' placeholder='Secondary Insurance'/>
            <label htmlFor="secondaryInsuranceID">Secondary Insurance ID#</label>
            <input className='inputField' type='text' id='secondaryInsuranceID' name='secondaryInsuranceID' placeholder='Secondary Insurance ID'/> */}
          
            {/* <label for="referringphysician">Referring Physician</label>
            <input className='inputField' type='text' id='referringphysician' name='referringphysician'/>
            <label for="studytype">Study Type</label>
            <input className='inputField' type='text' id='studytype' name='studytype'/> */}
            {/* <label>Patient Files</label>
            <div className='fileUploadField'>
              <input className="firstFile" type="file" onChange={handleFileChange}/>            
              <FontAwesomeIcon icon={faCirclePlus} onClick={addField} className='add_button'/>
              <FontAwesomeIcon icon={faCircleMinus} title='Delete' onClick={resetFirstFile} className='delete_button'/>            
            </div> */}
            
            {
              additionalFields.map((field, index) => {
                return (
                  <UploadComp key={field.name} fieldName={field.name} handleFileChange={handleFileChange}
                  addField={addField} deleteFile={deleteFile} elementIndex={index}></UploadComp>
                )
              })
            }    
            <div className='patientNoteContainer'>
                <p>Thank you for your interest in SeizureCare. We will get back to you with confirmation shortly. <br></br>If you have any questions, feel free to contact us at <span className='contactInfo'>info@seizurecarenet.com</span>.</p>
                <p className='patientNote'>NOTE: Please use this form for general clinical information only. DO NOT send any specific patient health information through this form.</p>
            </div>
            <button type="submit" className="inputField inputSubmit" onClick={submitHandler}>Submit</button>
            {/* <input className='inputField inputSubmit' type="submit" value="Submit"></input> */}
        </form>      
      </div>
    </>
    
  )
}

export default PatientFormComp