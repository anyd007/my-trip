import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TripMap from "./components/tripMap/TripMap";
import { BackgroundProvider } from "./components/contexts/StyleContext";
import { AutocompliteProvider} from "./components/contexts/ApiAutoCompliteContext"
import { LocationProvider } from "./components/contexts/ApiLocation";
import "./App.css";

const App = () => {
  
  return (
    <>
      <div className="app">
        <Router>
          <BackgroundProvider>
              <AutocompliteProvider>
                <LocationProvider>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/trip-map" element={<TripMap />} />
              </Routes>
              </LocationProvider>
              </AutocompliteProvider>
          </BackgroundProvider>
        </Router>
      </div>
      <div className="backdoor">
      </div>
    </>
  );
};

export default App;
