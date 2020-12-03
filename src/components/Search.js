import React, { useState } from "react";

import { getResult } from "../api";
import Button from "../components/Button";

export default function Search() {
  const [datetime, setDatetime] = useState("");
  // const [id, setId] = useState("");
  // const [first_name, setFirstName] = useState("");
  // const [last_name, setLastName] = useState("");

  function onSubmit() {
    getResult({
      datetime
    });
  }

  return (
    <div className="addAuthor">
      Search a datetime
      <form>
        <input
          type="text"
          placeholder="Datetime"
          name="id"
          value={datetime}
          onChange={event => {
            setDatetime(event.target.value);
          }}
        />
        <Button className={"btn-success"} onClick={onSubmit}>
          Search
        </Button>
      </form>
    </div>
  );
}
