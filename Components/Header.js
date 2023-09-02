import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

const Header = () => {
  const [btnElement, setBtnElement] = useState("login");
  const status = useStatus();


  return (
    <div className="flex justify-between bg-green-100 shadow-lg">
      <div className="logo">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 font-semibold">
          <li className="px-4">Online Status: {status ? "🟢" : "🟠" }</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/contact">Contact us</Link></li>
          <li className="px-4"><Link to="/about">About us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="login hover:shadow-md hover:bg-green-200 px-4 py-2 mt-0 mb-0 ml-3"
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
