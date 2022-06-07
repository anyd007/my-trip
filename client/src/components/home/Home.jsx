import React,{useState, useEffect, useRef} from "react";
import uniqid from "uniqid"
import { useBackground } from "../contexts/StyleContext";
import { useAutoComplite } from "../contexts/ApiAutoCompliteContext";
import { Bubbles } from "../loadnig/Loadnig"
import { Info } from "../errors/Errors";
import { FaRegWindowClose } from 'react-icons/fa';

import "./home.css"
import "../contexts/styleContext.css"

const Home = ()=>{
const {toggle, theme, darker} = useBackground()
const {dataFromStartApi, setDataFromStartApi, dataFromEndApi,setDataFromEndApi, loading, error, setError, setLoading, startValue, 
    endValue, setEndValue, setStartValue, info} = useAutoComplite()

useEffect(()=>{
    setDataFromStartApi(dataFromStartApi)
    console.log(dataFromStartApi);
    setDataFromEndApi(dataFromEndApi)
    setError(error)
    setLoading(loading)
    },[dataFromStartApi, dataFromEndApi, error, loading])

 const getStartValue = (startValue) =>{
    setStartValue(startValue)
}

const getEndValue = (endValue) =>{
    setEndValue(endValue)
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


return(
<div className="mainContener" style={theme} >
    {info && < Info />}
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
          <div onClick={(e)=>handleEndValue(el.label)} key={uniqid()} className="autocomplite">{el.label}</div>
      ))}
          <button style={{color:theme.color}} className="btn" type="button">SPRAWDŹ</button>
      </div>
  </div>
</div>
)
}

export default Home;