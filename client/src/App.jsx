import React, { useEffect, useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./home/Home";
import TripMap from "./tripMap/TripMap";
import Apis from "./apis/Apis";
import { BackgroundProvider } from "./styleConrxt/StyleContext";
import "./App.css";

const App = () => {
  const [getStartTripData, setGetStartTripData] = useState([]);
  const [getEndTripData, setGetEndTripData] = useState([]);
  return (
    <>
    <div className="app">
      <Router>
        <BackgroundProvider>
          <Routes>
            <Route exact path="/" element={<Home setStartValue={setGetStartTripData} setEndValue={setGetEndTripData}/>} />
            <Route path="/trip-map" element={<TripMap />} />
          </Routes>
        </BackgroundProvider>
      </Router>
    </div>
    <div className="backdoor">
      <Apis getStartValue={getStartTripData} getEndValue={getEndTripData}/>
    </div>
    </>
  );
};

export default App;
