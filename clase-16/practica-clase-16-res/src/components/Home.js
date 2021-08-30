import React from "react";
import { Link } from "react-router-3";

const Home = (props) => {
  return (
    <div>
      <ul role="nav">
        <li>
          <Link to="/">🏠🏠 Home 🏠🏠</Link>
        </li>
        <li>
          <Link to="/guauguaus">🐶 Guauguaus 🐶</Link>
        </li>
        <li>
          <Link to="/miaumiaus">😸 Miaumiaus 😸</Link>
        </li>
      </ul>
      <hr />
      <h2>✨✨Tenemos✨✨</h2>
      {props.children}
    </div>
  );
};
export default Home;
