import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom"
import Home from './home/Home';
import TripMap from './tripMap/TripMap';
import { BackgroundProvider } from './styleConrxt/StyleContext';
import './App.css';


const App = ()=>{
 

  return(
    <div className="app">
      <Router>
        <BackgroundProvider>
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route path='/trip-map' element={<TripMap />} />
        </Routes>
        </BackgroundProvider>
      </Router>
    </div>
  )
}

export default App;