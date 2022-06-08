import React, {useState, useEffect, createContext, useContext} from "react"
import { useAutoComplite } from "./ApiAutoCompliteContext"
import axios from "axios"

const ApiContext = createContext()

export const useLocation = () =>{
    return useContext(ApiContext)
}

export const LocationProvider = ({children}) =>{
const [getLocation, setGetLocation] = useState({
    startLocation:'',
    endLocation:''
})
const [locationParams, setLocationParams] = useState({lat:'',lng:''})
const [locationParams2, setLocationParams2] = useState({lat:'',lng:''})
const [tripCreator, setTripCreator] = useState([])



useEffect(()=>{
    let params = {
        id:getLocation.startLocation,
        lang:"pl",
        apiKey:"tEmBBLmWsGhjuvv92FVKvd8eurl3ySyoVseJ5EqlXhA"
    }
    let params2 = {
        id:getLocation.endLocation,
        lang:"pl",
        apiKey:"7oe2w6vCxFaS7KDSODyhZO2ZcdAQ3A5FyORLh8m1yew"
    }
    const handleIdLoc = async() =>{
        await axios
        .get("https://lookup.search.hereapi.com/v1/lookup",
        {params:params})
        .then(response=>response.data)
        .then(data=>{
            setLocationParams(prev=>({
                ...prev,
                lat:data.position.lat,
                lng:data.position.lng
            }))
        })
        .catch((err) => {
            if (err.response) {
              console.log("czekamy na dane");
            } else if (err.request) {
              console.log("BAZA DANYCH NIE OPDPOWIADA..");
            } else {
              console.log(err.message);
            }
          });
          await axios
          .get("https://lookup.search.hereapi.com/v1/lookup",
          {params:params2})
          .then(response=>response.data)
          .then(data=>{
            setLocationParams2(prev=>({
                ...prev,
                lat:data.position.lat,
                lng:data.position.lng
            }))
          })
          .catch((err) => {
              if (err.response) {
                console.log("czekamy na dane");
              } else if (err.request) {
                console.log("BAZA DANYCH NIE OPDPOWIADA..");
              } else {
                console.log(err.message);
              }
            });
    }

    handleIdLoc()
},[getLocation])

useEffect(()=>{
    if(locationParams.lat==='' || locationParams2.lat===''){
        return console.log('stop');
      }
      else{
    let params = {
        lang:"pl-PL",
        transportMode: "car",
        origin:[locationParams.lat, locationParams.lng].toString(),
        destination:[locationParams2.lat, locationParams2.lng].toString(),
        return: "summary,polyline,actions,instructions",
        apikey: "OwO70AJc6x_u1Yo1t5RqOHq_P2hRUs9mj-099RvGepw",
    }
    const handleRoute = async()=>{
        await axios
        .get("https://router.hereapi.com/v8/routes", { params: params })
        .then(response=>response.data)
        .then(data =>{
            setTripCreator(data)
        })
    }

    handleRoute()
}
},[locationParams, locationParams2])
    return(
        <ApiContext.Provider value={{getLocation, setGetLocation,locationParams, setLocationParams, locationParams2, setLocationParams2, 
            tripCreator, setTripCreator}}>
            {children}
        </ApiContext.Provider>
    )
}