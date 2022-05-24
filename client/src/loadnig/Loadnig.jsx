import React from "react";
import ReactLoading from 'react-loading';
import "./loading.css"


export const Bubbles = () =>{
    return(
    <>
    <div className="blur"></div>
     <section className="loading">
    <ReactLoading type={"bubbles"} color={"tomato"} height={100} width={175} />
    <h4 className="loadingText">WCZYUJĘ...</h4>
    </section>
    </>
    )
}
