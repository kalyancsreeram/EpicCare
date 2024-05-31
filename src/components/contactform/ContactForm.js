import React, { useState } from 'react'
import './styles.scss';
import { countriesList } from '../../utils/countries';
import axios from 'axios';
import { CONSTANTS } from '../../Constants';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    country:"India",
    message:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
      axios
       .post(`${CONSTANTS.serverURL}/contactus`, { ...formData })
       .then(response => {
        setFormData({ firstname: '', lastname: '', phone: '', country:'Select a country',  email: '', message: '' });
         alert('Data has been successfully sent...')
       })
       .catch(() => {
        alert('Something went wrong. Try again later');
        // setResult({ success: false, message: 'Something went wrong. Try again later'});
       })
  };

  return (
    <div className="contactFormContainer">
        <h1 className='contactFormTitle'>CONTACT US</h1>
        <p>Thank you for your interest in SeizureCare. Please fill out the below form with your comments or message.</p>
        <p className='contactNote'>NOTE: Please use this form for general information purposes only. DO NOT send personal health information through this form.</p>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type='text' className='contactFormInputElement' id='firstname' name='firstname' placeholder='First Name'
                       value={formData.firstname}
                       onChange={handleChange}/>
                <label htmlFor="lname">Last Name</label>
                <input type='text' className='contactFormInputElement' id='lastname' name='lastname' placeholder='Last Name'
                       value={formData.lastname}
                       onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type='text' className='contactFormInputElement' id='email' name='email' placeholder='Email Address'
                       value={formData.email}
                       onChange={handleChange}/>
                <label htmlFor="phone">Phone</label>
                <input type='number' className='contactFormInputElement' id='phone' name='phone' placeholder='Phone Number'
                       value={formData.phone}
                       onChange={handleChange}/>
                <label htmlFor="country">Country</label>
                <select className='countryField' name="country" id="country" value={formData.country}
                        onChange={handleChange}>                 
                  {
                    countriesList.map(country => <option value={country.name} key={country.code}>{country.name}</option>)
                  }
                </select>

                <label htmlFor="message">Comments/Message</label>
                <textarea className='contactTextArea contactFormInputElement' id="message" name="message" placeholder="Type your message here..."
                          value={formData.commentsMsg}
                          onChange={handleChange}/>


                {/* <fieldset className='preferenceSet'>
                  <legend>Preferred Method of Communication</legend>
                  <div>
                  <input type='checkbox' className='preference contactFormInputElement' id='preferencePhone' name='preferencePhone' value='phone'/>
                  <label htmlFor="preferencePhone">By Phone</label>                  
                  </div>
                  <div>
                  <input type='checkbox' id='preferenceEmail' className='preference contactFormInputElement' name='preferenceEmail' value='email'/>
                  <label htmlFor="preferenceEmail">By Email</label>                  
                  </div>
                </fieldset>      */}
                <input className='contactSubmit' type="submit" value="Submit"></input>

            </form>           
        </div>      
    </div>
    
  )
}

export default ContactForm