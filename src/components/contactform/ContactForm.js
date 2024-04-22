import React from 'react'
import './styles.scss';

function ContactForm() {
  return (
    <div className="contactFormContainer">
        <h1 className='contactFormTitle'>CONTACT US</h1>
        <p>Thank you for your interest in Epic Care. Please fill out the form below or call us with your questions at (xxx) xxx-xxxx.</p>
        <p className='contactNote'>NOTE: Please use this form for general information purposes only. DO NOT send personal health information through this form.</p>
        <div>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type='text' className='contactFormInputElement' id='fname' name='firstname' placeholder='First Name'/>
                <label htmlFor="lname">Last Name</label>
                <input type='text' className='contactFormInputElement' id='lname' name='lastname' placeholder='Last Name'/>
                <label htmlFor="email">Email</label>
                <input type='text' className='contactFormInputElement' id='email' name='email' placeholder='Email Address'/>
                <label htmlFor="phone">Phone</label>
                <input type='number' className='contactFormInputElement' id='phone' name='phone' placeholder='Phone Number'/>
                <label htmlFor="country">Country</label>
                <select className='countryField' name="country" id="country">
                  <option value="United States">United States</option>
                  <option value="India">India</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </select>

                <label htmlFor="message">Comments/Message</label>
                <textarea className='contactTextArea contactFormInputElement' id="message" name="message" placeholder="Type your message here..."></textarea>


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