import React from "react";
import { useBackground } from "../styleConrxt/StyleContext";
import "./home.css"

const Home = ()=>{

const backgroundContext = useBackground()

return(
<div className="mainContener" style={backgroundContext.bg.light}>
  <div className="titleContener">
      <h1>DOKĄD SIĘ WYBIERASZ??</h1>
  </div>
  <div className="inputContener">
      <div>
      <label htmlFor="tripStart">
      <input name="tripStart" id="tripStart" className="itripInputs" type="text" placeholder="WYZNACZ POCZĄTEK TRASY"/>
      <span className="spanAnime">WYZNACZ POCZĄTEK TRASY</span>
      </label>
      </div>
      <div className="tripEndDiv">
      <label htmlFor="tripEnd">
      <input name="tripEnd" id="tripEnd" type="text" className="itripInputs" placeholder="WYZNACZ KONIEC TRASY"/>
      <span className="spanAnime">WYZNACZ KONIEC TRASY</span>
      </label>
      </div>
      <div>
          <button className="btn" type="button">SPRAWDŹ</button>
      </div>
  </div>
</div>
)
}

export default Home;