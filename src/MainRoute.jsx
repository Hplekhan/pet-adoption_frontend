import React from 'react'
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './HomePage/Home';
import About from './About/About'
import ListPets from './ListPets/ListPets'
import Login from './components/Login';
// import Aboutus from './components/Aboutus';



export const MainRoute = () => {
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pets-list" element={<ListPets/>}/>
          <Route path="/login" element={<Login/>}/>

          
          
      </Routes>
      </BrowserRouter>
      </>
    )
  }
  
export default MainRoute;
