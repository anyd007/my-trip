import React from "react";
import { useBackground } from "../styleConrxt/StyleContext";
import "./home.css"

const Home = ()=>{

const backgroundContext = useBackground()

return(
<div className="mainContener" style={backgroundContext.bg.background1}>
  
    {/* <h1>DOKĄD SIĘ WYBIERASZ ?</h1> */}
</div>
)
}

export default Home;