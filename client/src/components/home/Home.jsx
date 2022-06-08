import React,{useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid"
import { useBackground } from "../contexts/StyleContext";
import { useAutoComplite } from "../contexts/ApiAutoCompliteContext";
import { useLocation } from "../contexts/ApiLocation";
import { Bubbles } from "../loadnig/Loadnig"
import { Info, Info2 } from "../errors/Errors";
import { FaRegWindowClose } from 'react-icons/fa';

import "./home.css"
import "../contexts/styleContext.css"

const Home = ()=>{
const {toggle, theme, darker} = useBackground()
const {tripId, dataFromStartApi, setDataFromStartApi, dataFromEndApi,setDataFromEndApi, loading, error, setError, setLoading, startValue, 
    endValue, setEndValue, setStartValue, info, setInfo} = useAutoComplite()
const {getLocation, setGetLocation} = useLocation()
const [info2, setInfo2] = useState(false)
const history = useNavigate()

useEffect(()=>{
    setDataFromStartApi(dataFromStartApi)
    setDataFromEndApi(dataFromEndApi)
    setError(error)
    setLoading(loading)
    },[dataFromStartApi, dataFromEndApi, error, loading])

 const getStartValue = (startValue) =>{
    setStartValue(startValue)
    setInfo2(false)
}

const getEndValue = (endValue) =>{
    setEndValue(endValue)
    setInfo2(false)
}

useEffect(()=>{
    setStartValue(startValue)
    if(startValue===[] || startValue.length===0){
        setDataFromStartApi([])
    }
},[startValue])

useEffect(()=>{
    setEndValue(endValue)
    if(endValue===[] || endValue.length===0){
        setDataFromEndApi([])
    }
},[endValue])

const handleSetValue = (e)=>{
    setStartValue(e)
    setTimeout(() => {
        setDataFromStartApi([])
    }, 150);
}

const handleEndValue = (e) =>{
    setEndValue(e)
    setTimeout(() => {
        setDataFromEndApi([])
    }, 150);
}
const haldleChecklocation = ()=>{
    if(tripId.startId.length>1 || tripId.endId.length>1){
        setInfo2(true)
    }else{
    setGetLocation({
        startLocation:tripId.startId.toString(),
        endLocation:tripId.endId.toString()
    })
    setStartValue([])
    setEndValue([])
    history("/trip-map")
}
}

return(
<div className="mainContener" style={theme} >
    {info && < Info />}
    {info2 && < Info2 />}
    {loading&& < Bubbles />}
    {error && <div className="blur1"><FaRegWindowClose onClick={()=>setError(null)} className="FaRegWindowClose"/>
    <span className="error">{error}</span></div>}

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
      {dataFromStartApi && dataFromStartApi.map(el=>(
<div onClick={(e)=>handleSetValue(el.label)} key={uniqid()} className="autocomplite">{el.label}</div>))}
<div>
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
      {dataFromEndApi && dataFromEndApi.map(el=>(
    <div onClick={(e)=>handleEndValue(el.label)} key={uniqid()} className="autocomplite">{el.label}</div>))}
        <button disabled={startValue.length===0 || endValue.length===0}
        onClick={haldleChecklocation} style={{color:theme.color}} className="btn" type="button">SPRAWDŹ</button>
</div>
</div>
</div>
)
}

export default Home;