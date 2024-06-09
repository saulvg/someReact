import { useState } from "react";
import { useEffect } from "react";

export const useDataApi = (url) => {
  const [request, setReques] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setReques((prevReq) => ({ ...prevReq, data: result }));
      } catch (error) {
        setReques((prevReq) => ({ ...prevReq, error: error }));
      } finally {
        setReques((prevReq) => ({ ...prevReq, loading: true }));
      }
    };

    fetchData();
  }, [url]);

  return { data: request.data, loading: request.loading, error: request.error };
};

/* 


import { useState } from "react";
import { useEffect } from "react";

export const useDataApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

*/
