import React, {useState ,createContext, useContext, useEffect} from "react";
import WebFont from 'webfontloader';
import image1 from "../img/map-and-navigation.png"


const backGrounds = {
    light:{
               fontFamily: "Oswald, sans-serif",
               color: "blueviolet",
               fontWeight: "bold",
               backgroundImage: `url(${image1})`,
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               backgroundAttachment: "fixed",
               backgroundPosition: "center",
               height: "100vh"
    },
}

const BackgroundContext = createContext();

export const useBackground = () =>{
    return useContext(BackgroundContext)
}

export const BackgroundProvider = ({children}) =>{
    const [bg, setBg] = useState(backGrounds)
    return(
    <BackgroundContext.Provider value={{bg,setBg}}>
        {children}
    </BackgroundContext.Provider>
        )
}