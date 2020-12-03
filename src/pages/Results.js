import React from "react";
import { useResults } from "../api";

export default function Results() {
  const { loading, results, error } = useResults();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  // use this to make sure you are getting the right data
  console.log(results);

  // Display a list of the results
  return (
    <div>
      <h1>Results List</h1>
      {results.map(result => (
        <Result key={result._id} {...result} />
      ))}
    </div>
  );
}

// show the results list
function Result(result) {
  // const { _id, query_time, BV_id, dm_time, send_date, send_month, send_time, text, user_id} = result;
  const { _id} = result;

  return (
    <div className={`activity activity-${_id}`} key={_id} class = "act">
      <div className="info">
        {result}
      </div>
    </div>
  );
}