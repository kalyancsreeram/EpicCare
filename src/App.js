import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Research from './components/Research';
import Services from './components/Services'
import NavBar from './components/navbar/NavBar';
import NoMatch from './components/NoMatch';
import PatientPortal from './components/PatientPortal';
import PhysicianPortalComp from './components/physiciangrid/PhysicianPortalComp';
import { AuthProvider } from './utils/auth';
import RequireAuth from './utils/RequireAuth';
import Footer from './components/Footer';
import HomePageFooter from './components/homepagefooter/HomePageFooter';


function App() {
  return (
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact-us' element={<ContactUs/>}></Route>
        <Route path='submit-form' element={<PatientPortal/>}></Route>          
        <Route path='research' element={<Research/>}></Route>
        <Route path='services' element={<Services/>}></Route>
        <Route path='physician-portal' element={<RequireAuth><PhysicianPortalComp/></RequireAuth>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>          
      </Routes>
      <HomePageFooter/>
      <Footer/>
    </AuthProvider>
  );
}

export default App;
