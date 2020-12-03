import { useState, useEffect } from "react";

// TODO - update this to be your url
// const BASE_URL = "https://lib-ws-z.herokuapp.com";
const BASE_URL = "http://127.0.0.1:5000";
function getResults() {
  const endpoint = BASE_URL + `/output`;
  // return fetch call that gets website list
  return fetch(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
}

export function getResult(id) {
  const endpoint = BASE_URL + `/output/${id}`;
  console.log("getResult");
  return fetch(endpoint).then(res => {
    console.log(res);
  });
}

export async function addWebsite(website) {
  const endpoint = BASE_URL + `/login`;
  console.log("addWebsite");

  let res;
  try {
      res = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              website,
            })
          })
  } catch(e) {
      console.log(e);
      return {error: e};
  }
  let status = await res.status;
  let newWebsite = await res.json();
  console.log(status);
  console.log(newWebsite);
  return {newWebsite: newWebsite, status: status};
}


export function useResults() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResults()
      .then(results => {
        setResults(results);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    results,
    error
  };
}
