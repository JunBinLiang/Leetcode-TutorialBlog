import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Problem">Problem</Link>
        </li>
        <li>
          <Link to="/Solution">Solution</Link>
        </li>
      </ul>
    </nav>
  );
}
