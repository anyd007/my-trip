import React, {useState ,createContext, useContext} from "react";
import image1 from "../img/map-and-navigation.png"

const backGrounds = {
    background1:{
               backgroundImage: `url(${image1})`,
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               backgroundAttachment: "fixed",
               backgroundPosition: "center",
               height: "100vh"
    }
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