import React,{useState, useEffect, useMemo} from "react";
import { useBackground } from "../styleConrxt/StyleContext";
import {Bubbles} from "../loadnig/Loadnig";
import {GeneralError} from "../errors/Errors"
import "./home.css"

const Home = (props)=>{
const backgroundContext = useBackground()
// const [startValue, setStartValue] = useState([])
// const [endValue, setEndValue] = useState([])

 const getStartValue = (startValue) =>{
    props.setStartValue(startValue)
}
const getEndValue = (endValue) =>{
    props.setEndValue(endValue)
}

return(
<div className="mainContener" style={backgroundContext.bg.light}>
  <div className="titleContener">
      <h1>DOKĄD SIĘ WYBIERASZ??</h1>
  </div>
  <div className="inputContener">
      <div>
      <label htmlFor="tripStart">
      <input name="tripStart" 
      id="tripStart" 
      className="itripInputs"
       type="text" 
       placeholder="WYZNACZ POCZĄTEK TRASY"
       value={props.startValue}
       onChange={e=> getStartValue(e.target.value)}/>
      <span className="spanAnime">WYZNACZ POCZĄTEK TRASY</span>
      </label>
      </div>
      <div className="tripEndDiv">
      <label htmlFor="tripEnd">
      <input name="tripEnd" 
      id="tripEnd" 
      type="text" 
      className="itripInputs"
       placeholder="WYZNACZ KONIEC TRASY"
       value={props.endValue}
       onChange={e=> getEndValue(e.target.value)}/>
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