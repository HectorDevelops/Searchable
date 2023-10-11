import { useState, useEffect } from "react";
import axios from "axios";

// Utilizing hooks to begin fetching the API promise
const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);
  const [error, setError] = useState("");

  // Creating this base url to ensure all HTTP requests are starting with this
  axios.defaults.baseURL = "https://api.unsplash.com";

  // dataFetch function is handles the data fetching and sets values for each of the hook variables created to load the received information on subsequent components
  const dataFetch = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  // Utilizing the useEffect hook to only update the page once the reteieved param (url) changes and ONLY then
  useEffect(() => {
    dataFetch(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    dataFetch: (url) => dataFetch(url),
  };
};

export default useAxios;
