import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink exact to="/login">
        Save
      </NavLink>
      <NavLink to="/output">Results</NavLink>{" "}
    </nav>
  );
}
