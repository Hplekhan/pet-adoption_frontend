import React from 'react'
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './HomePage/Home';
import About from './About/About'
import ListPets from './ListPets/ListPets'



export const MainRoute = () => {
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pets-list" element={<ListPets/>}/>

          
          
      </Routes>
      </BrowserRouter>
      </>
    )
  }
  
export default MainRoute;
