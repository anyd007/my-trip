import React, { useState, createContext, useContext } from "react";
import image1 from "../img/map-and-navigation.png";
import image2 from "../img/map-and-navigation-dark.png";

const backGrounds = {
  idDatrkTheme: true,
  light: {
    fontFamily: "Oswald, sans-serif",
    color: "blueviolet",
    fontWeight: "bold",
    backgroundImage: `url(${image1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    height: "100vh",
  },
  dark: {
    fontFamily: "Oswald, sans-serif",
    color: "yellow",
    fontWeight: "bold",
    backgroundImage: `url(${image2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    height: "100vh",
  },
};

const BackgroundContext = createContext();

export const useBackground = () => {
  return useContext(BackgroundContext);
};

export const BackgroundProvider = ({ children }) => {
  const [darker, setDarker] = React.useState(true);
  const toggle = () => {
    const isDark = !darker;
    setDarker(isDark);
  };
  const theme = darker ? backGrounds.dark : backGrounds.light;

  return (
    <BackgroundContext.Provider value={{toggle, theme, darker }}>
      {children}
    </BackgroundContext.Provider>
  );
};
