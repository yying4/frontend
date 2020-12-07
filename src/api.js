import axios from "axios"
import { useState, useEffect } from "react";


const service = axios.create({
//   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  headers: {'Content-Type': 'application/json'},
  timeout: 1000,
  xsrfCookieName: 'access-token',
  withCredentials: true
});

// TODO - update this to be your url
const BASE_URL = "http://127.0.0.1:5000";
function getResults() {
  const endpoint = BASE_URL + `/output`;
  // return fetch call that gets website list
  return service(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
}

export function getResult(id) {
  const endpoint = BASE_URL + `/output/${id}`;
  console.log("getResult");
  return service(endpoint).then(res => {
    console.log(res);
  });
}

export async function addWebsite(website) {
  console.log(website);
  const endpoint = BASE_URL + `/login`;
  console.log("addWebsite");
  console.log(endpoint);

  let res;
  try {
      //res = await service.post(endpoint)
      res = await service.post(endpoint,{"s":"d"})
  } catch(e) {
      console.log(e);
      return {error: e};
  }
  let status = await res.status;
  let newWebsite = await res.json();
  console.log(status);
  console.log(newWebsite);
  //return {newWebsite={}&status={},newWebsite,status};
  return {newWebsite: newWebsite, status: status};
}


export function useResults() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResults()
      .then(results => {
        setResults(results);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    results,
    error
  };
}
