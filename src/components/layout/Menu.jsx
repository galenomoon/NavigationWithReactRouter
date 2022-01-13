import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/param/cool">Param #01</Link>
        </li>
        <li>
          <Link to="/param/cool again">Param #02</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/notExits">Not Exist</Link>
        </li>
      </ul>
    </nav>
  </aside>
);
export default Menu;
