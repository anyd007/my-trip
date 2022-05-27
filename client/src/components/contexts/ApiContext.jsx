import React, {createContext, useContext, useState, useEffect} from "react";
import axios from "axios"

const ApiContext = createContext()

export const useApi = () => {
    return useContext(ApiContext);
  };

  export const ApiProvider = ({children}) =>{
    const [dataFromStartApi,setDataFromStartApi] = useState([])
    const [startValue, setStartValue] = useState([])
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState(false)
    const [error, setError] = useState(null)
    let params ={
        "languages":"pl-PL",
        "q": startValue,
        "in":"countryCode:POL",
        "apiKey":'WB04EubwUxciFJavvGjSCyIyjhfO3UlobWxFFF8O1fw'
    }
    useEffect(()=>{
        if(startValue===[] || startValue.length ===0){
            setLoading(false)
            return setInfo(true)
            }
        setInfo(false)
        const hereAutocompilte = async()=>{
       await axios
       .get("https://autocomplete.search.hereapi.com/v1/autocomplete",
       {'params':params})
       .then(response =>response.data.items.map(el=>el.address))
       .then(data=>{
           setDataFromStartApi(data)
       })
      .catch((err) =>{
          setLoading(false)
        if (err.response) {
            setError("BAZA DANYCH ODPOWIADA BŁĘDEM, SPRAWDŹ DANE, ODŚWIEŻ STRONĘ LUB SRÓBUJ POŹNIEJ")
        } else if (err.request) {
            setError("BAZA DANYCH NIE OPDPOWIADA..")
        } else {
            setError(err.message)
            console.log('Error', err.message);
        }
    })
  
    }
    
    setError(null)
    setLoading(false)
    hereAutocompilte()
       },[startValue])

      return (
        <ApiContext.Provider value={{ dataFromStartApi,setDataFromStartApi, loading, setLoading, error, setError, startValue, setStartValue, info, setInfo}}>
          {children}
        </ApiContext.Provider>
      );
  }
