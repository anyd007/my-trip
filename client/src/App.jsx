import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import TripMap from "./tripMap/TripMap";
import { BackgroundProvider } from "./contexts/StyleContext";
import "./App.css";

const App = () => {
  
  return (
    <>
      <div className="app">
        <Router>
          <BackgroundProvider>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/trip-map" element={<TripMap />} />
              </Routes>
          </BackgroundProvider>
        </Router>
      </div>
      <div className="backdoor">
      </div>
    </>
  );
};

export default App;
