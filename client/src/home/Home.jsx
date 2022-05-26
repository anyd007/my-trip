import React,{useState, useEffect, useMemo} from "react";
import { useBackground } from "../contexts/StyleContext";
import { useApi } from "../contexts/ApiContext";
import { Bubbles } from "../loadnig/Loadnig"
import "./home.css"
import "../contexts/styleContext.css"

const Home = ()=>{
const {toggle, theme, darker} = useBackground()
const {data, loading, error, setData, setError, setLoading} = useApi()
const [startValue, setStartValue] = useState([])
const [endValue, setEndValue] = useState([])

useEffect(()=>{
    setData(data)
    setError(error)
    setLoading(loading)
    },[data, error, loading])

 const getStartValue = (startValue) =>{
    setStartValue(startValue)
}
const getEndValue = (endValue) =>{
    setEndValue(endValue)
}
useEffect(()=>{
    setStartValue(startValue)
},[startValue])
useEffect(()=>{
    setEndValue(endValue)
},[endValue])


return(
<div className="mainContener" style={theme} >
    {loading&& < Bubbles />}
    {error && <div className="blur1"><span className="error">{error}</span></div>}
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
       value={startValue ?? ""}
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
       value={endValue ?? ""}
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