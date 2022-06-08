import React from "react";
import { useLocation } from "../contexts/ApiLocation";
import "./tripMap.css"

const TripMap = ()=>{

const {tripCreator, setTripCreator } = useLocation()
console.log(tripCreator);
    return(
    <div className="mainContener">
        <h2>tu bedą mapy</h2>
    </div>
    )
}

export default TripMap