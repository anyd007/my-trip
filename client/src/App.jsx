import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TripMap from "./components/tripMap/TripMap";
import { BackgroundProvider } from "./components/contexts/StyleContext";
import {ApiProvider} from "./components/contexts/ApiContext"
import "./App.css";

const App = () => {
  
  return (
    <>
      <div className="app">
        <Router>
          <BackgroundProvider>
              <ApiProvider>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/trip-map" element={<TripMap />} />
              </Routes>
              </ApiProvider>
          </BackgroundProvider>
        </Router>
      </div>
      <div className="backdoor">
      </div>
    </>
  );
};

export default App;
