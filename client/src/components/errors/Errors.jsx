import React from "react";
import "./errors.css"

export const Info = ()=>{

    return(
        <div className="info">
            <div className="infoText">WSZYSTKIE POLA SĄ OBOWIĄZKOWE</div>
        </div>
     
    )
}
export const Info2 = ()=>{

    return(
        <div className="info">
            <div className="infoText">PODANA LOKALIZACJA NIE JEST ZBYT DOKŁADNA, SPRECYZUJ</div>
        </div>
     
    )
}

export const AxiosErrors = ()=>{
    let err =''
    let setError;
    if (err.response) {
        setError("BAZA DANYCH ODPOWIADA BŁĘDEM, SPRAWDŹ DANE, ODŚWIEŻ STRONĘ LUB SRÓBUJ POŹNIEJ")
        // The client was given an error response (5xx, 4xx)
    } else if (err.request) {
        setError("BAZA DANYCH NIE OPDPOWIADA..")
        // The client never received a response, and the request was never left
    } else {
        setError(err.message)
        console.log('Error', err.message);
    }
}