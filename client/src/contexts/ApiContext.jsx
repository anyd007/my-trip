import React, {createContext, useContext, useState, useEffect} from "react";
import axios from "axios"

const ApiContext = createContext()

export const useApi = () => {
    return useContext(ApiContext);
  };

  export const ApiProvider = ({children}) =>{
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        setLoading(true)
        const test = async()=>{
       await axios
       .get("https://randomuser.me/api/")
       .then(response =>response.data)
       .then(data=>{
           const result = data.results
           setData({
               result: result
           })
       })
      .catch((err) =>{
          setLoading(false)
        if (err.response) {
            setError("POJAWIŁ SIĘ PROBLEM Z POŁĄCZENIEM, SRÓBUJ POŻNIEJ, LUB OŚWIEŻ STRONĘ")
            // The client was given an error response (5xx, 4xx)
        } else if (err.request) {
            setError("BAZA DANYCH NIE OPDPOWIADA..")
            // The client never received a response, and the request was never left
        } else {
            setError(err.message)
            console.log('Error', err.message);
        }
    })
    }
    setError(null)
    setLoading(false)
    test()
       },[])

      return (
        <ApiContext.Provider value={{ data, setData, loading, setLoading, error, setError}}>
          {children}
        </ApiContext.Provider>
      );
  }
