import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState(null);
  const [options, setOptions] = useState({});

  const fetchData = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    axios(baseUrl + url, options)
      .then((response) => {
        setResponse(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrors(error.response.data);
        console.log(error.response.data);
      });
  }, [isLoading]);

  return [{ isLoading, response, errors }, fetchData];
};

export default useFetch;
