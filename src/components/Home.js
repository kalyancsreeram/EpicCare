import React from 'react'
import Testimonials from './dashboardpage/testimonials/Testimonials'
import CEO from './dashboardpage/ceocomp/CEO'

function Home() {
  return (
    <div className='homePage'>
      <CEO></CEO>
      <Testimonials></Testimonials>      
    </div>
  )
}

export default Home