/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (country) {
      fetchDataFormAPI();
    } else {
      fetchDataFormLocalStorage();
    }
  }, []);
  const fetchDataFormAPI = () => {
    let url = "https://restcountries.com/v3.1/all";
    setIsLoading(true);
    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setResult(data[0]);
        } else {
          setResult(data);
          setFilteredCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFormLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setFilteredCountries(data);
    } else {
      fetchDataFormAPI();
    }
  };
  return {
    result,
    filteredCountries,
    isError,
    isLoading,
    setFilteredCountries,
  };
};
