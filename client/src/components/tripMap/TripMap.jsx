import React from "react";
import Map from './Map';
import "./tripMap.css"
import { useState } from "react";

const TripMap = ()=>{

// const {tripCreator, setTripCreator } = useLocation()
// console.log(tripCreator);
    return(
    <div className="mainContener">
        <h2>tu bedą mapy</h2>
        <Map />
    </div>
    )
}

export default TripMap