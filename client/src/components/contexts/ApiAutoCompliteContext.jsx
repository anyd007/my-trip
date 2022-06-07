import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

export const useAutoComplite = () => {
  return useContext(ApiContext);
};

export const AutocompliteProvider = ({ children }) => {
  const [dataFromStartApi, setDataFromStartApi] = useState([]);
  const [dataFromEndApi, setDataFromEndApi] = useState([]);
  const [startValue, setStartValue] = useState([]);
  const [endValue, setEndValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(false);
  const [error, setError] = useState(null);

  let params = {
    languages: "pl-PL",
    q: startValue,
    in: "countryCode:POL",
    apiKey: "WB04EubwUxciFJavvGjSCyIyjhfO3UlobWxFFF8O1fw",
  };

  let params2 = {
    languages: "pl-PL",
    q: endValue,
    in: "countryCode:POL",
    apiKey: "nI493HGAwjaxPSEi70L1v_pbrUUQCWNGIwQqMuK734o",
  };

  useEffect(() => {
    if (startValue === [] || startValue.length === 0) {
      setLoading(false);
      return setInfo(true);
    }
    setInfo(false);
    const hereAutocompilte = async () => {
      await axios
        .get("https://autocomplete.search.hereapi.com/v1/autocomplete", {
          params: params,
        })
        .then((response) => response.data.items)
        .then((data) => {
          setDataFromStartApi(data.map((el) => el.address));
        })
        .catch((err) => {
          setLoading(false);
          if (err.response) {
            setError(
              "BAZA DANYCH ODPOWIADA BŁĘDEM, SPRAWDŹ DANE, ODŚWIEŻ STRONĘ LUB SRÓBUJ POŹNIEJ"
            );
          } else if (err.request) {
            setError("BAZA DANYCH NIE OPDPOWIADA..");
          } else {
            setError(err.message);
            console.log("Error", err.message);
          }
        });
    };

    setError(null);
    setLoading(false);
    hereAutocompilte();
  }, [startValue]);

  useEffect(() => {
    if (endValue === [] || endValue.length === 0) {
      setLoading(false);
      return setInfo(true);
    }
    setInfo(false);
    const hereAutocompilte = async () => {
      await axios
        .get("https://autocomplete.search.hereapi.com/v1/autocomplete", {
          params: params2,
        })
        .then((response) => response.data.items.map((el) => el.address))
        .then((data) => {
          setDataFromEndApi(data);
        })
        .catch((err) => {
          setLoading(false);
          if (err.response) {
            setError(
              "BAZA DANYCH ODPOWIADA BŁĘDEM, SPRAWDŹ DANE, ODŚWIEŻ STRONĘ LUB SRÓBUJ POŹNIEJ"
            );
          } else if (err.request) {
            setError("BAZA DANYCH NIE OPDPOWIADA..");
          } else {
            setError(err.message);
            console.log("Error", err.message);
          }
        });
    };

    setError(null);
    setLoading(false);
    hereAutocompilte();
  }, [endValue]);

  return (
    <ApiContext.Provider
      value={{
        dataFromStartApi,
        setDataFromStartApi,
        dataFromEndApi,
        setDataFromEndApi,
        loading,
        setLoading,
        error,
        setError,
        startValue,
        setStartValue,
        endValue,
        setEndValue,
        info,
        setInfo,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
