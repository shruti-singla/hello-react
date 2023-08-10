import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnElement, setBtnElement] = useState("login");

  return (
    <div className="head">
      <div className="logo">
        <img className="image" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
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
