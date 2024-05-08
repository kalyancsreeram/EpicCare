import React from 'react'

import './styles.scss';

import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function HomePageFooter() {
  return (
    <div className='homePageFooterContainer'>
        <div className='address'>                   
            <p><b>SeizureCare</b></p>
            {/* <p>626 W. Moreland Blvd.</p>
            <p>Waukesha, WI 53188</p>
            <p>Phone: (262) 754-0898</p>
            <p>Fax: (262) 754-0897</p>
            <p>Toll Free: (866) 374-7648</p> */}
            {/* <p><a href="/">Office Locations</a></p> */}
            <p><a href="/">Hyderabad</a> | <a href="/">Bangalore</a> </p>

        </div>
        <div className='footerLinks'>                   
            <p><a href="/about">About</a></p>
            <p><a href="/contact-us">Contact</a> </p>
            <p><a href="/submit-form">Submit Form</a></p>
            <p><a href="/research">Research</a></p>
            <p><a href="/services">Services</a></p>            
        </div>
        <div className='socialContainer'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutubeSquare} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
    </div>
  )
}

export default HomePageFooter