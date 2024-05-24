import React from 'react'

import './styles.scss';

import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import WorldMap from "../../assets/images/map.png"

function HomePageFooter() {
  return (
    <div className='homePageFooterContainer'>
        <div className='address'>   
          <div className='addressText'>
            <p><b>SeizureCare</b></p>          
            <p><a href="/">USA</a> | <a href="/">INDIA</a> </p>
          </div>  
          <img className="worldMap" alt='SeizureCare' src={WorldMap}/>           
            
            {/* <img */}

        </div>
        <div className='footerLinks'>      
            <p><a href="/services">Services</a></p>   
            <p><a href="/order">Order</a></p>     
            <p><a href="/research">Research</a></p>   
            <p><a href="/resources">Resources</a></p>      
            <p><a href="/about">About</a></p>
            <p><a href="/contact-us">Contact</a> </p>
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