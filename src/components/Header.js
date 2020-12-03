import React, { useState } from "react";

import { addWebsite } from "../api";
import Button from "../components/Button";

export default function Header() {
  const [website, setWebsite] = useState("");
  // const [id, setId] = useState("");
  // const [first_name, setFirstName] = useState("");
  // const [last_name, setLastName] = useState("");

  function onSubmit() {
    addWebsite({
      website
    });
  }

  return (
    <div className="addAuthor">
      Save a website
      <form>
        <input
          type="text"
          placeholder="Website"
          name="id"
          value={website}
          onChange={event => {
            setWebsite(event.target.value);
          }}
        />
        <Button className={"btn-success"} onClick={onSubmit}>
          Save
        </Button>
      </form>
    </div>
  );
}
