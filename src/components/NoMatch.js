import React from 'react'
import PageNotFound from '../assets/PageNotFound.png'

function NoMatch() {
  return (
    <div className='PageNotFoundContainer'>
      <img className='pageNotFound' alt='Page Not Found' src={PageNotFound} />
    </div>   
  )
}

export default NoMatch