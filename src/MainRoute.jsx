import React from 'react'
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './HomePage/Home';
import About from './About/About'
import ListPets from './ListPets/ListPets'
import Aboutus from './components/Aboutus';
import Contact from './Help and Avice/Contact'
import FaQ from './Help and Avice/FaQ'
import PetCare from './Help and Avice/PetCare';
import PetLogin from './Login/PetLogin';




export const MainRoute = () => {
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pets-list" element={<ListPets/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faq" element={<FaQ/>}/>
          <Route path="/petcareinfo" element={<PetCare/>}/>
          <Route path="/login" element={<PetLogin/>}/>

          
          
      </Routes>
      </BrowserRouter>
      </>
    )
  }
  
export default MainRoute;
