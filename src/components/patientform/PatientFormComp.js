import React from 'react'
import './styles.scss';

function PatientFormComp() {
  return (
    <div className="patientFormContainer">
      <h1 className='contactFormTitle'>SUBMIT AN ORDER ONLINE</h1>
      <h3 className='contactFormTitle'>Patient Information</h3>
      <form>
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
          <input className='inputField' type='text' id='fname' name='firstname' placeholder='First name'/>
          <label htmlFor="lname">Patient Last Name</label>
          <input className='inputField' type='text' id='lname' name='lastname' placeholder='Last Name'/>         
          <label htmlFor="dob">Date Of Birth</label>
          <input className='inputField' type='date' id='dob' name='serviceend' placeholder='dd-mm-yyyy'/>
          <fieldset className='multiSet'>
            <legend>Gender</legend>
            <div>
              <input type='checkbox' className='multiSetInput' id='male' name='male' value='male'/>
              <label htmlFor="male">Male</label>                  
            </div>
            <div>
              <input type='checkbox' className='multiSetInput' id='female' name='female' value='female'/>
              <label htmlFor="female">Female</label>                  
            </div>
          </fieldset>   
        
          <label htmlFor="address">Address</label>
          <input className='inputField' type='text' id='address' name='address' placeholder='Street Address'/>
          <input className='inputField' type='text' id='address2' name='address' placeholder='Address Line #2'/>           

          <label htmlFor="city">City</label>
          <input className='inputField' type='text' id='city' name='city' placeholder='City'/>
         
          <label htmlFor="state">State</label>
          <select className='statesField' name="states" id="states">
            <option value="Alaska">Alaska</option>
            <option value="Atlanta">Atlanta</option>
            <option value="NewYork">NewYork</option>
            <option value="Chicago">Chicago</option>
          </select>

          <label htmlFor="zip">ZIP Code</label>
          <input className='inputField' type='text' id='zip' name='zip' placeholder='Zip Code'/>
          
          <label htmlFor="phone">Phone Number</label>
          <input className='inputField' type='number' id='phone' name='phone' placeholder='Phone Number'/>
         
          <h3 className='contactFormTitle'>Insurance Information</h3>
          <label htmlFor="primaryInsurance">Primary Insurance</label>
          <input className='inputField' type='text' id='primaryInsurance' name='primaryInsurance' placeholder='Primary Insurance'/>
          <label htmlFor="primaryInsuranceID">Primary Insurance ID#</label>
          <input className='inputField' type='text' id='primaryInsuranceID' name='primaryInsuranceID' placeholder='Primary Insurance ID'/>
          <label htmlFor="secondaryInsurance">Secondary Insurance</label>
          <input className='inputField' type='text' id='secondaryInsurance' name='secondaryInsurance' placeholder='Secondary Insurance'/>
          <label htmlFor="secondaryInsuranceID">Secondary Insurance ID#</label>
          <input className='inputField' type='text' id='secondaryInsuranceID' name='secondaryInsuranceID' placeholder='Secondary Insurance ID'/>
         
          {/* <label for="referringphysician">Referring Physician</label>
          <input className='inputField' type='text' id='referringphysician' name='referringphysician'/>
          <label for="studytype">Study Type</label>
          <input className='inputField' type='text' id='studytype' name='studytype'/> */}

          <input className='inputField inputSubmit' type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default PatientFormComp