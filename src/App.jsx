import React from 'react';
import { Route, Routes } from "react-router-dom";
import Fitnessclub from './Componant/Fitnessclub/Fitnessclub';
import Login from './Componant/Login/Login';
import Service from './Componant/Servicee/Service';
import Contact from './Componant/Contact/Contact';
import About from './Componant/About/About';
import Routelink from './Componant/Routelink';
import './App.css'


function App() {
 

  return (
    <> 
 <Routelink/>
     <Routes>
        <Route exact path="/" element={<Fitnessclub/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Service" element={<Service />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Login" element={<Login/>} />
    </Routes> 
    </>
  )
}

export default App
