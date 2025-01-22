import { useEffect, useState, useCallback } from "react";
export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataFormAPI = useCallback(() => {
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
  }, [country]);

  const fetchDataFormLocalStorage = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setFilteredCountries(data);
    } else {
      fetchDataFormAPI();
    }
  }, [fetchDataFormAPI]);
  useEffect(() => {
    if (country) {
      fetchDataFormAPI();
    } else {
      fetchDataFormLocalStorage();
    }
  }, [country, fetchDataFormAPI, fetchDataFormLocalStorage]);

  return {
    result,
    filteredCountries,
    isError,
    isLoading,
    setFilteredCountries,
  };
};
