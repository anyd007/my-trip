import React, {useMemo, useState} from "react";
import Bubbles from "../loadnig/Loadnig"
import axios from "axios"

const Apis = (props) =>{
const startUserInput = useMemo(()=>{
    return props.getStartValue
},[props.getStartValue]) 
const finishUserInput = useMemo(()=>{
   return props.getEndValue
},[props.getEndValue]) 
console.log(startUserInput);
console.log(finishUserInput);

}

export default Apis