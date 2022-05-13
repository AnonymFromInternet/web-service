import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const useFetch = (url) => {
  const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage("accessToken");

  const fetchData = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    // GET Request
    if (token) {
      console.log("token is not nil");
      const optionsWithHeader = {
        ...options,
        headers: {
          authorization: token ? `Token ${token}` : "",
        },
      };
      axios
        .get(baseUrl + url, optionsWithHeader)
        .then((response) => {
          setResponse(response);
        })
        .catch((error) => {
          console.log("Error from Get request in useFetch", error);
        });
      return;
    }
    // GET Request

    // POST Request
    axios
      .post(baseUrl + url, options)
      .then((response) => {
        setResponse(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrors(error.response.data.errors);
      });
    // POST Request
  }, [isLoading, options, url, token]);

  return [{ isLoading, response, errors }, fetchData];
};

export default useFetch;
