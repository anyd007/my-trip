import React,{useState, useEffect, useMemo} from "react";
import { useBackground } from "../contexts/StyleContext";
import { GeneralError } from "../errors/Errors";
import "./home.css"

const Home = (props)=>{

const {toggle, theme, darker} = useBackground()
const [startValue, setStartValue] = useState([])
const [endValue, setEndValue] = useState([])


 const getStartValue = (startValue) =>{
    setStartValue(startValue)
}
const getEndValue = (endValue) =>{
    setEndValue(endValue)
}


return(
<div className="mainContener" style={theme} >
  <div className="titleContener">
      <h1>DOKĄD SIĘ WYBIERASZ??</h1>
  </div>
   <button onClick={toggle} style={{color:theme.color}} className="btn themeBtn">{darker ? "MOTYW JASNY":"MOTYW CIEMNY"}</button>
  <div className="inputContener">
      <div>
      <label style={{color:theme.color}} htmlFor="tripStart">
      <input style={{color:theme.color}}
      name="tripStart" 
      id="tripStart" 
      className="itripInputs"
       type="text" 
       placeholder="WYZNACZ POCZĄTEK TRASY"
       value={startValue}
       onChange={e=> getStartValue(e.target.value)}/>
      <span className="spanAnime">WYZNACZ POCZĄTEK TRASY</span>
      </label>
      </div>
      <div className="tripEndDiv">
      <label style={{color:theme.color}} htmlFor="tripEnd">
      <input style={{color:theme.color}}
       name="tripEnd" 
      id="tripEnd" 
      type="text" 
      className="itripInputs"
       placeholder="WYZNACZ KONIEC TRASY"
       value={endValue}
       onChange={e=> getEndValue(e.target.value)}/>
      <span className="spanAnime">WYZNACZ KONIEC TRASY</span>
      </label>
      </div>
      <div>
          <button style={{color:theme.color}} className="btn" type="button">SPRAWDŹ</button>
      </div>
  </div>
</div>
)
}

export default Home;