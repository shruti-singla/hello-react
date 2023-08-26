import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnElement, setBtnElement] = useState("login");

  return (
    <div className="head">
      <div className="logo">
        <img className="image" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnElement === "login"
                ? setBtnElement("logout")
                : setBtnElement("login");
            }}
          >
            {btnElement}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
