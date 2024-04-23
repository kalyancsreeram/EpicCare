import React from 'react'
import Testimonials from './dashboardpage/testimonials/Testimonials'
import CEO from './dashboardpage/ceocomp/CEO'
import CardsComponent from './dashboardpage/cardscomp/CardsComponent'

function Home() {
  return (
    <div className='homePage'>
      <CEO></CEO>
      <CardsComponent></CardsComponent>
      <Testimonials></Testimonials>      
    </div>
  )
}

export default Home